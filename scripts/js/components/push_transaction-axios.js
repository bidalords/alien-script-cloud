const http = require('./axios')
const pushSignedTransaction = (account, setUrl, packed_trx, signatures) => {
    return new Promise(async (resolve, reject) => {

        const getRandom = (min, max) => { return Math.floor(Math.random() * (max - min) + min); }
        const url = `${setUrl}/v1/chain/push_transaction`
        console.log("[GET] PushSignedTransaction", account, setUrl)
        const mockIp = `${getRandom(1, 255)}.${getRandom(1, 255)}.${getRandom(1, 255)}.${getRandom(1, 255)}`
        const res = await http.post(url, { "signatures": signatures, "compression": 0, "packed_context_free_data": "", "packed_trx": packed_trx }, { headers: { 'X-Forwarded-For': mockIp }, timeout: 5000 })
            .catch((err) => { console.error("[ERROR] PushSignedTransaction", account, setUrl , JSON.stringify(err)); reject(err) })
        resolve(res)
    });
};

module.exports = pushSignedTransaction;
