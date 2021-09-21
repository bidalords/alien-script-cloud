const { TextEncoder, TextDecoder } = require('text-encoding');
const { Api, JsonRpc } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const fetch = require('node-fetch');
const http = require('./axios')

const privatekey = '5KJEamqm4QT2bmDwQEmRAB3EzCrCmoBoX7f6MRdrhGjGgHhzUyf';
const signatureProvider = new JsSignatureProvider([privatekey]);

const arrayToHex = (data) => {
    let result = '';
    for (const x of data) {
        result += ('00' + x.toString(16)).slice(-2);
    };
    return result;
};

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const GetInfoResult = (account) => {
    return new Promise(async (resolve, reject) => {
        const getRandom = (min, max) => { return Math.floor(Math.random() * (max - min) + min); }
        let index = getRandom(0, base_api.length)
        const url = `${base_api[index]}/v1/chain/get_info`
        console.log("[GET] InfoResult", account, base_api[index])
        const mockIp = `${getRandom(1, 255)}.${getRandom(1, 255)}.${getRandom(1, 255)}.${getRandom(1, 255)}`
        await http.post(url, {}, { headers: { 'X-Forwarded-For': mockIp }, timeout: 5000 })
            .then((resp) => {
                if (resp.data) {
                    resolve({
                        url: base_api[index],
                        data: resp.data
                    });
                }
            })
            .catch((err) => { console.error("[ERROR] InfoResult", account, base_api[index]); GetInfoResult(account); })
    });
}


const GetRawCodeAndAbiResult = async (account, url) => {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < 5; i++) {
            try {

                const endpoint = String(url);
                const rpc = new JsonRpc(endpoint, { fetch });
                const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder, textEncoder: new TextEncoder });

                const rawAbi = (await api.abiProvider.getRawAbi(account)).abi;
                const abi = await api.rawAbiToJson(rawAbi);

                const result = {
                    accountName: account,
                    rawAbi,
                    abi
                };
                resolve(result)
                return
            } catch (err) {
                console.log(err);
            }
            await delay(1000)
        }
    })
};


const GetPackedTrx = async (DATA) => {
    try {
        const url = DATA['url']
        const chainId = DATA['chainId'];
        const abiObj = await GetRawCodeAndAbiResult('m.federation', String(url));
        const rpc = new JsonRpc(String(url), { fetch });
        const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder(), chainId });
        api.cachedAbis.set('m.federation', { abi: abiObj.abi, rawAbi: abiObj.rawAbi });
        const setExpTime = Date.parse(DATA['expiration'] + "Z");
        const dateobj = new Date(setExpTime + 30000).toISOString();
        const transaction = {
            "expiration": dateobj.replace("Z", ""),
            "ref_block_num": 65535 & Number(DATA['ref_block_num']), //   block_num_or_id: 126815123 65535 & 126815126
            "ref_block_prefix": Number(DATA['ref_block_prefix']),
            "actions": [
                {
                    "account": "m.federation",
                    "name": "mine",
                    "authorization": [{
                        "actor": DATA['wax_account'],
                        "permission": "active"
                    }],
                    "data": {
                        "miner": DATA['wax_account'], // wax.userAccount
                        "nonce": DATA['nonce']
                    }
                }
            ]
        };

        const transactions = { ...transaction, actions: await api.serializeActions(transaction.actions) };
        const serial = api.serializeTransaction(transactions);
        const packed_trx = arrayToHex(serial);
        return new Promise(function (resolve, reject) {
            resolve({ error: false, packed_trx, serializedTransaction: serial, transactions });
        });

    } catch (err) {
        console.log('err is', err);
        resolve({ error: true })
    }
};

module.exports = GetPackedTrx;