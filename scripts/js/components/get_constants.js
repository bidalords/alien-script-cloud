const _0x5020fc=_0x5ef6;(function(_0x2cca38,_0x2873a1){const _0x57ceab=_0x5ef6,_0x14fd88=_0x2cca38();while(!![]){try{const _0x48a00b=parseInt(_0x57ceab(0x204))/0x1+parseInt(_0x57ceab(0x20a))/0x2*(-parseInt(_0x57ceab(0x1fa))/0x3)+-parseInt(_0x57ceab(0x1ee))/0x4*(parseInt(_0x57ceab(0x21d))/0x5)+parseInt(_0x57ceab(0x1f4))/0x6+-parseInt(_0x57ceab(0x210))/0x7*(parseInt(_0x57ceab(0x209))/0x8)+-parseInt(_0x57ceab(0x206))/0x9+-parseInt(_0x57ceab(0x21e))/0xa*(-parseInt(_0x57ceab(0x20c))/0xb);if(_0x48a00b===_0x2873a1)break;else _0x14fd88['push'](_0x14fd88['shift']());}catch(_0x4983c7){_0x14fd88['push'](_0x14fd88['shift']());}}}(_0x44ef,0x5a6ac));const _0x1dfc89=function(){let _0x5e7108=!![];return function(_0x549a6e,_0x496ab8){const _0x2c6575=_0x5e7108?function(){const _0x35bdd8=_0x5ef6;if(_0x496ab8){const _0x1677a5=_0x496ab8[_0x35bdd8(0x1f7)](_0x549a6e,arguments);return _0x496ab8=null,_0x1677a5;}}:function(){};return _0x5e7108=![],_0x2c6575;};}(),_0x4729b0=_0x1dfc89(this,function(){const _0x510285=_0x5ef6;return _0x4729b0['toString']()[_0x510285(0x201)]('(((.+)+)+)+$')[_0x510285(0x208)]()[_0x510285(0x203)](_0x4729b0)[_0x510285(0x201)](_0x510285(0x1e9));});_0x4729b0();const {TextEncoder,TextDecoder}=require(_0x5020fc(0x1ef)),{Api,JsonRpc}=require(_0x5020fc(0x1e8)),{JsSignatureProvider}=require(_0x5020fc(0x1f8)),fetch=require(_0x5020fc(0x1fb)),privatekey=_0x5020fc(0x1f5),signatureProvider=new JsSignatureProvider([privatekey]),base_api=['https://api.waxsweden.org',_0x5020fc(0x1e5),'https://api.wax.alohaeos.com',_0x5020fc(0x1eb)],arrayToHex=_0x162aaa=>{let _0x131fbb='';for(const _0x212d5c of _0x162aaa){_0x131fbb+=('00'+_0x212d5c['toString'](0x10))['slice'](-0x2);};return _0x131fbb;},delay=_0x4ecd48=>{return new Promise(_0x1b20d7=>setTimeout(_0x1b20d7,_0x4ecd48));},GetInfoResult=_0x20ed5e=>{return new Promise(async(_0x4910d4,_0x53ec95)=>{const _0xc0263e=_0x5ef6,_0x21ab48=(_0x5dfcff,_0x43248a)=>{const _0x2ac8b5=_0x5ef6;return Math[_0x2ac8b5(0x1e6)](Math[_0x2ac8b5(0x1ed)]()*(_0x43248a-_0x5dfcff)+_0x5dfcff);},_0x5ab402=_0x21ab48(0x0,base_api[_0xc0263e(0x207)]),_0x1598fd=base_api[_0x5ab402];try{console[_0xc0263e(0x20b)](_0xc0263e(0x214),_0x20ed5e,_0x1598fd);const _0x59aae5=_0x1598fd+_0xc0263e(0x1f9),_0x109b45={'method':_0xc0263e(0x205),'headers':{'Content-Type':_0xc0263e(0x219)},'body':'{}'},_0x1cce7c=await fetch(_0x59aae5,_0x109b45),_0x3655b5=await _0x1cce7c[_0xc0263e(0x212)]();await delay(0x64);if(!!_0x3655b5[_0xc0263e(0x1fd)])try{await delay(0x64),console[_0xc0263e(0x20b)](_0xc0263e(0x1fe),_0x20ed5e,_0x1598fd);const _0x269ce5=_0x1598fd+_0xc0263e(0x20f),_0x5d7eb9={'method':_0xc0263e(0x205),'headers':{'Content-Type':_0xc0263e(0x219)},'body':JSON[_0xc0263e(0x200)]({'block_num_or_id':_0x3655b5[_0xc0263e(0x1fd)]})},_0x45e7a7=await fetch(_0x269ce5,_0x5d7eb9),_0x306712=await _0x45e7a7[_0xc0263e(0x212)]();await delay(0x64);if(!!(_0x306712['block_num']&&_0x306712[_0xc0263e(0x21c)]&&_0x306712[_0xc0263e(0x215)])){const _0x3ba138=Date[_0xc0263e(0x217)](_0x306712[_0xc0263e(0x215)]+'Z'),_0x6c656b=new Date(_0x3ba138+0x7530)[_0xc0263e(0x1e7)]();_0x4910d4({'blockchain':_0x1598fd,'expiration':_0x6c656b,'chain_id':_0x3655b5[_0xc0263e(0x1fc)],'block_num':_0x306712[_0xc0263e(0x1f0)],'ref_block_prefix':_0x306712[_0xc0263e(0x21c)]});return;}}catch(_0x3b5ee6){console[_0xc0263e(0x1e4)]('[ERROR]\x20BlockResult',_0x20ed5e,_0x1598fd,_0x3b5ee6[_0xc0263e(0x202)]),_0x53ec95(_0x3b5ee6);}}catch(_0x4062f1){console[_0xc0263e(0x1e4)](_0xc0263e(0x1f1),_0x20ed5e,_0x1598fd,_0x4062f1[_0xc0263e(0x202)]),_0x53ec95(_0x4062f1);}});},GetRawCodeAndAbiResult=async(_0x1d8d75,_0x26733c)=>{return new Promise(async(_0x4a4366,_0x467469)=>{const _0x12cce8=_0x5ef6;try{console[_0x12cce8(0x20b)](_0x12cce8(0x1ea),_0x1d8d75,_0x26733c);const _0x2306e9=String(_0x26733c),_0x45ea6e=new JsonRpc(_0x2306e9,{'fetch':fetch}),_0x3c34b1=new Api({'rpc':_0x45ea6e,'signatureProvider':signatureProvider,'textDecoder':new TextDecoder(),'textEncoder':new TextEncoder()}),_0x3993a4=(await _0x3c34b1[_0x12cce8(0x20d)][_0x12cce8(0x213)](_0x1d8d75))[_0x12cce8(0x1f3)],_0x2e9925=await _0x3c34b1[_0x12cce8(0x1f6)](_0x3993a4),_0x187ee8={'accountName':_0x1d8d75,'rawAbi':_0x3993a4,'abi':_0x2e9925};_0x4a4366(_0x187ee8);return;}catch(_0x269636){console[_0x12cce8(0x20b)](_0x12cce8(0x218),_0x1d8d75,_0x26733c,_0x269636['message']),_0x467469(_0x269636);}});},GetPackedTrx=async _0x8eef0e=>{return new Promise(async function(_0xf54bbf,_0x559b1c){const _0x284bcd=_0x5ef6,_0x397f84=setTimeout(()=>{_0x559b1c(new Error('[TIME\x20OUT]\x20GetPackedTrx'));},0xea60);try{const _0x41efe6=_0x8eef0e['wax_account'],_0x18cf39=await GetInfoResult(_0x41efe6),_0x4892f0=await GetRawCodeAndAbiResult('m.federation',String(_0x18cf39[_0x284bcd(0x211)])),_0x2ef464=new JsonRpc(String(_0x18cf39[_0x284bcd(0x211)]),{'fetch':fetch}),_0x582ad3=_0x18cf39[_0x284bcd(0x1fc)],_0x33752d=new Api({'rpc':_0x2ef464,'signatureProvider':signatureProvider,'textDecoder':new TextDecoder(),'textEncoder':new TextEncoder(),'chainId':_0x582ad3});_0x33752d['cachedAbis'][_0x284bcd(0x21b)](_0x284bcd(0x216),{'abi':_0x4892f0[_0x284bcd(0x1f3)],'rawAbi':_0x4892f0[_0x284bcd(0x1ec)]});const _0x370e89={'expiration':_0x18cf39['expiration'][_0x284bcd(0x21f)]('Z',''),'ref_block_num':0xffff&Number(_0x18cf39['block_num']),'ref_block_prefix':Number(_0x18cf39['ref_block_prefix']),'actions':_0x8eef0e[_0x284bcd(0x21a)]},_0x531934={..._0x370e89,'actions':await _0x33752d['serializeActions'](_0x370e89[_0x284bcd(0x21a)])},_0x42de54=_0x33752d[_0x284bcd(0x1ff)](_0x531934),_0x3cd8ff=arrayToHex(_0x42de54);clearTimeout(_0x397f84),_0xf54bbf({'error':![],'blockchain':_0x18cf39[_0x284bcd(0x211)],'packed_trx':_0x3cd8ff,'serializedTransaction':_0x42de54,'transactions':_0x531934});}catch(_0x4ae881){clearTimeout(_0x397f84),_0x559b1c(new Error(_0x284bcd(0x20e)));}});};function _0x44ef(){const _0xfaaecf=['w0Dfvf0Gr2v0uMf3q29KzufUzefIAvjLC3vSDa','Ahr0Chm6lY93yxGUz3jLEw1HC3mUy29T','CMf3qwjP','CMfUzg9T','nJa2mhn4rvzzCa','Dgv4Dc1LBMnVzgLUzW','yMXVy2TFBNvT','w0vsuK9sxsbjBMzVuMvZDwX0','zxHWB3j0CW','ywjP','ntu1nJy2A0nXrvP2','nuTkrwfTCw00uvqYyM1eD1ffBvjbqJnfEKnYq21VqM9yn2y2tvjKCMHhAKDNsgH6vxLM','CMf3qwjPvg9kC29U','yxbWBhK','zw9ZANmVzgLZDc9LB3nQCY1QC3nPzW','l3yXl2nOywLUl2DLDf9PBMzV','mtyYmdiZmuHus1PbsG','BM9Kzs1MzxrJAa','y2HHAw5FAwq','AgvHzf9IBg9JA19UDw0','w0Dfvf0GqMXVy2Tszxn1Bhq','C2vYAwfSAxPLvhjHBNnHy3rPB24','C3rYAw5NAwz5','C2vHCMnO','BwvZC2fNzq','y29UC3rYDwn0B3i','mtm1mtG4tKriCg1S','ue9tva','nJq5nJaZohziANvsEG','BgvUz3rO','Dg9tDhjPBMC','ogPpsg9QDG','mKD5vLnkCG','Bg9N','mJq1odiWntjUy0XiDgC','ywjPuhjVDMLKzxi','w0vsuK9sxsbhzxrqywnRzwruCNG','l3yXl2nOywLUl2DLDf9IBg9JAW','mtm0nZu2m1DIt0DUsG','yMXVy2TJAgfPBG','ANnVBG','z2v0uMf3qwjP','w0Dfvf0Gsw5MB1jLC3vSDa','DgLTzxn0yw1W','Bs5MzwrLCMf0Aw9U','CgfYC2u','w0vsuK9sxsbhzxrsyxDdB2rLqw5KqwjPuMvZDwX0','yxbWBgLJyxrPB24VANnVBG','ywn0Aw9UCW','C2v0','CMvMx2jSB2nRx3bYzwzPEa','mJeWnxflrMXAtG','mtbkyvr1vve','CMvWBgfJzq','zxjYB3i','Ahr0Chm6lY93yxGUCgLUAY5NzW','zMXVB3i','Dg9ju09tDhjPBMC','zw9ZANm','kcGOlISPkYKRksSK'];_0x44ef=function(){return _0xfaaecf;};return _0x44ef();}function _0x5ef6(_0x4dbb2e,_0xf4c4a2){const _0x3c6011=_0x44ef();return _0x5ef6=function(_0x4729b0,_0x1dfc89){_0x4729b0=_0x4729b0-0x1e4;let _0x44efac=_0x3c6011[_0x4729b0];if(_0x5ef6['oTfaAy']===undefined){var _0x5ef65f=function(_0xe995bc){const _0x46dc52='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1ad00f='',_0x5e7108='',_0x549a6e=_0x1ad00f+_0x5ef65f;for(let _0x496ab8=0x0,_0x2c6575,_0x1677a5,_0x162aaa=0x0;_0x1677a5=_0xe995bc['charAt'](_0x162aaa++);~_0x1677a5&&(_0x2c6575=_0x496ab8%0x4?_0x2c6575*0x40+_0x1677a5:_0x1677a5,_0x496ab8++%0x4)?_0x1ad00f+=_0x549a6e['charCodeAt'](_0x162aaa+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x2c6575>>(-0x2*_0x496ab8&0x6)):_0x496ab8:0x0){_0x1677a5=_0x46dc52['indexOf'](_0x1677a5);}for(let _0x131fbb=0x0,_0x212d5c=_0x1ad00f['length'];_0x131fbb<_0x212d5c;_0x131fbb++){_0x5e7108+='%'+('00'+_0x1ad00f['charCodeAt'](_0x131fbb)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5e7108);};_0x5ef6['JhNEzt']=_0x5ef65f,_0x4dbb2e=arguments,_0x5ef6['oTfaAy']=!![];}const _0x2ca7fa=_0x3c6011[0x0],_0x5a7147=_0x4729b0+_0x2ca7fa,_0x57647f=_0x4dbb2e[_0x5a7147];if(!_0x57647f){const _0x4ecd48=function(_0x1b20d7){this['jfDqqW']=_0x1b20d7,this['MeErWk']=[0x1,0x0,0x0],this['cVZuGy']=function(){return'newState';},this['cVmEpk']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['sXFflC']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4ecd48['prototype']['kQQZKf']=function(){const _0x20ed5e=new RegExp(this['cVmEpk']+this['sXFflC']),_0x4910d4=_0x20ed5e['test'](this['cVZuGy']['toString']())?--this['MeErWk'][0x1]:--this['MeErWk'][0x0];return this['hvbgcI'](_0x4910d4);},_0x4ecd48['prototype']['hvbgcI']=function(_0x53ec95){if(!Boolean(~_0x53ec95))return _0x53ec95;return this['EiZTsO'](this['jfDqqW']);},_0x4ecd48['prototype']['EiZTsO']=function(_0x21ab48){for(let _0x5ab402=0x0,_0x1598fd=this['MeErWk']['length'];_0x5ab402<_0x1598fd;_0x5ab402++){this['MeErWk']['push'](Math['round'](Math['random']())),_0x1598fd=this['MeErWk']['length'];}return _0x21ab48(this['MeErWk'][0x0]);},new _0x4ecd48(_0x5ef6)['kQQZKf'](),_0x44efac=_0x5ef6['JhNEzt'](_0x44efac),_0x4dbb2e[_0x5a7147]=_0x44efac;}else _0x44efac=_0x57647f;return _0x44efac;},_0x5ef6(_0x4dbb2e,_0xf4c4a2);}module[_0x5020fc(0x1f2)]=GetPackedTrx;