const _0x1b886c=_0x59c5;(function(_0x19eb02,_0x3586dc){const _0x3286b5=_0x59c5,_0x5b834b=_0x19eb02();while(!![]){try{const _0x1217c6=-parseInt(_0x3286b5(0x16e))/0x1+parseInt(_0x3286b5(0xd8))/0x2*(-parseInt(_0x3286b5(0x114))/0x3)+parseInt(_0x3286b5(0x15a))/0x4+-parseInt(_0x3286b5(0x127))/0x5+-parseInt(_0x3286b5(0x10d))/0x6*(parseInt(_0x3286b5(0x178))/0x7)+-parseInt(_0x3286b5(0x120))/0x8+parseInt(_0x3286b5(0xca))/0x9;if(_0x1217c6===_0x3586dc)break;else _0x5b834b['push'](_0x5b834b['shift']());}catch(_0x5b4dc8){_0x5b834b['push'](_0x5b834b['shift']());}}}(_0x927e,0x22eb9));const _0x947d97=function(){let _0x3a833a=!![];return function(_0x26d857,_0x5c1458){const _0x5be125=_0x3a833a?function(){if(_0x5c1458){const _0x3e92e7=_0x5c1458['apply'](_0x26d857,arguments);return _0x5c1458=null,_0x3e92e7;}}:function(){};return _0x3a833a=![],_0x5be125;};}(),_0x2219a4=_0x947d97(this,function(){const _0x19c4a2=_0x59c5;return _0x2219a4[_0x19c4a2(0x157)]()['search'](_0x19c4a2(0xfd))[_0x19c4a2(0x157)]()[_0x19c4a2(0x113)](_0x2219a4)[_0x19c4a2(0x141)]('(((.+)+)+)+$');});_0x2219a4();const PORT=process[_0x1b886c(0x134)]['PORT']||0xfa0,jwt=require(_0x1b886c(0xf0)),{exec}=require(_0x1b886c(0xd1)),bodyParser=require('body-parser'),express=require(_0x1b886c(0x128)),cors=require(_0x1b886c(0xf7)),dayjs=require(_0x1b886c(0xd9)),socketio=require(_0x1b886c(0x148)),app=express(),cloudscraper=require(_0x1b886c(0x111))[_0x1b886c(0xf2)]({'agentOptions':{'ciphers':_0x1b886c(0x15d)}}),{get_sing_py,get_token_py,get_transactions_py}=require(_0x1b886c(0x119)),GetLastMine=require(_0x1b886c(0x130)),GetDelay=require(_0x1b886c(0x144)),{GetTransactionV1,GetTransactionV2}=require(_0x1b886c(0x138)),GetAccount=require('./scripts/js/components/get_account'),GetNonce=require(_0x1b886c(0x156)),GetPackedTrx=require(_0x1b886c(0x177)),pushSignedTransaction=require(_0x1b886c(0xda)),EmptyProfile=require(_0x1b886c(0x140)),{GetBalanceTLM,GetBalanceWAX}=require(_0x1b886c(0xcd)),{setDatabase,setLogin,listDatabase,getLogin,getDatabase,delDatabase,editToken,editRunScript,editRunScriptAll,verifyMember,getAddress}=require(_0x1b886c(0x159)),dataAccount=[],F1=_0x1b886c(0x11d),F2='F4AC775C3DF97B';app[_0x1b886c(0xdc)](bodyParser[_0x1b886c(0x121)]()),app[_0x1b886c(0xdc)](bodyParser['urlencoded']({'extended':!![]})),app[_0x1b886c(0xdc)](express[_0x1b886c(0x15e)](_0x1b886c(0xf3))),app['use'](cors());const delay=_0x12b9f6=>{return new Promise(_0x24b0f6=>setTimeout(_0x24b0f6,_0x12b9f6));};let TokenEXP=null;app[_0x1b886c(0x12b)](_0x1b886c(0xcf),async(_0x5aa31f,_0x237269)=>{const _0x5bdf3b=_0x1b886c,{email:_0x1c7a7f,password:_0x251e43,type:_0x1d6de6}=_0x5aa31f['body'];if(!(_0x1c7a7f&&_0x251e43))_0x237269['status'](0x190)['send'](_0x5bdf3b(0x167));else{if(_0x1d6de6===_0x5bdf3b(0x16d))try{await setLogin(_0x1c7a7f,_0x251e43),_0x237269[_0x5bdf3b(0xfa)](0xc8)[_0x5bdf3b(0x121)]({'register':!![]});}catch(_0x537ec2){_0x237269['status'](0x190)['json']({'register':![]});}else{const _0x1bc6fd=await getLogin();_0x1bc6fd['email']===_0x1c7a7f&&_0x1bc6fd['password']===_0x251e43?_0x237269[_0x5bdf3b(0xfa)](0xc8)[_0x5bdf3b(0x121)]({'login':!![]}):_0x237269['status'](0x190)['json']({'login':![]});}}}),app['post'](_0x1b886c(0x16c),async(_0x1bd802,_0x43aac6)=>{const _0xafab65=_0x1b886c,{token:_0x29e8f1}=_0x1bd802[_0xafab65(0xd4)];!_0x29e8f1?_0x43aac6['status'](0x190)[_0xafab65(0x118)](_0xafab65(0x167)):(await verifyMember(_0x29e8f1),_0x43aac6['status'](0xc8)[_0xafab65(0x121)]({'verifyMember':!![]}));}),app['get'](_0x1b886c(0xee),async(_0x4e1696,_0x2eb6bf)=>{const _0x284538=_0x1b886c;try{const _0x577cd0=await listDatabase();for(const _0x22e922 of _0x577cd0){!app[_0x284538(0x133)](_0x22e922)&&(app['enable'](_0x22e922),RunScriptMine(_0x22e922),await editRunScriptAll(_0x22e922,!![]));}_0x2eb6bf['status'](0xc8)['json']({'allStart':!![]});}catch(_0x4f1603){_0x2eb6bf[_0x284538(0xfa)](0x191)[_0x284538(0x121)](_0x4f1603);}}),app[_0x1b886c(0x154)](_0x1b886c(0x175),async(_0x4ccd09,_0x2465dd)=>{const _0xfbfdc1=_0x1b886c;try{const _0x41b208=await listDatabase();for(const _0x998876 of _0x41b208){app[_0xfbfdc1(0x11a)](_0x998876),await editRunScriptAll(_0x998876,![]);}_0x2465dd[_0xfbfdc1(0xfa)](0xc8)[_0xfbfdc1(0x121)]({'allStop':!![]});}catch(_0x4a772e){_0x2465dd[_0xfbfdc1(0xfa)](0x191)[_0xfbfdc1(0x121)](_0x4a772e);}}),app[_0x1b886c(0x12b)]('/test',async(_0x40e562,_0x25bbf8)=>{const _0x1060c6=_0x1b886c,{token:_0xccaec,serialized:_0x5d4934}=_0x40e562[_0x1060c6(0xd4)];await GetSing({'token':_0xccaec,'serialized':_0x5d4934})['then'](_0x33eedd=>{const _0x56ab03=_0x1060c6;_0x25bbf8['status'](0xc8)[_0x56ab03(0x118)](_0x33eedd);})[_0x1060c6(0x123)](_0x50298d=>{const _0x5da585=_0x1060c6;_0x25bbf8[_0x5da585(0xfa)](_0x50298d[_0x5da585(0xcc)])[_0x5da585(0x118)](JSON['stringify'](_0x50298d));});}),app[_0x1b886c(0x12b)](_0x1b886c(0x109),async(_0x3bbaf0,_0x36859c)=>{const _0x5f1f93=_0x1b886c;try{const {account:_0x37989f,actions:_0xec0759}=_0x3bbaf0[_0x5f1f93(0xd4)],_0x112377=await GetPackedTrx({'wax_account':_0x37989f,'actions':_0xec0759});if(!_0x112377[_0x5f1f93(0x13b)]){const _0x3c2006=await getDatabase(_0x37989f),_0x5762f9=await get_sing_py(String(_0x3c2006[_0x5f1f93(0xd0)]),_0x112377[_0x5f1f93(0x14d)]);if(_0x5762f9[_0x5f1f93(0xe3)]===0xc8){const _0x2b9e1b=await pushSignedTransaction(_0x37989f,_0x112377[_0x5f1f93(0x162)],_0x112377[_0x5f1f93(0x122)],_0x5762f9['data'][_0x5f1f93(0x155)]);await delay(0x1f4),_0x36859c[_0x5f1f93(0xfa)](_0x2b9e1b[_0x5f1f93(0xcc)])['json'](_0x2b9e1b[_0x5f1f93(0xd4)]);}else _0x36859c['status'](_0x5762f9['code'])['json'](_0x5762f9[_0x5f1f93(0x103)]);}else _0x36859c[_0x5f1f93(0xfa)](0x1f4)[_0x5f1f93(0x121)]({'error':!![],'massage':_0x5f1f93(0x145)});}catch(_0x38d0f4){_0x36859c[_0x5f1f93(0xfa)](0x1f4)['json'](JSON[_0x5f1f93(0x172)](_0x38d0f4));}}),app[_0x1b886c(0x12b)](_0x1b886c(0x10c),async(_0x55f332,_0x20d474)=>{const _0x3a4bc7=_0x1b886c;try{console[_0x3a4bc7(0x126)](_0x3a4bc7(0xf5),dataAccount[_0x3a4bc7(0x149)]);const {account:_0x4fabbb,secret:_0x210876,backup:_0x4187f4,email:_0x218352,password:_0x5375cf}=_0x55f332['body'];if(!(_0x4fabbb&&_0x210876&&_0x4187f4&&_0x218352&&_0x5375cf))_0x20d474['status'](0x190)[_0x3a4bc7(0x118)]('All\x20input\x20is\x20required');else{const _0x261609=await get_token_py(_0x218352,_0x5375cf,_0x210876);await delay(0xa);if(_0x261609[_0x3a4bc7(0xd0)]){await delay(0x64),await setDatabase(_0x4fabbb,_0x210876,_0x4187f4,_0x218352,_0x5375cf,_0x261609[_0x3a4bc7(0xd0)]),await delay(0xa);const _0xc31f74=await new EmptyProfile(_0x4fabbb,_0x261609[_0x3a4bc7(0xd0)]);await delay(0xa),await dataAccount['push'](_0xc31f74),await delay(0xa),await RunScriptMine(_0x4fabbb,0x2710),await delay(0xa),console['log'](_0x3a4bc7(0x176),dataAccount[_0x3a4bc7(0x149)]),_0x20d474['status'](0xc8)[_0x3a4bc7(0x121)]({'account':_0x4fabbb,'email':_0x218352});}else _0x20d474[_0x3a4bc7(0xfa)](0x191)['json']({'account':_0x4fabbb,'message':_0x3a4bc7(0x135)});}}catch(_0x49653f){console[_0x3a4bc7(0x126)](_0x49653f);}}),app[_0x1b886c(0x150)](_0x1b886c(0xe7),async(_0xec35d9,_0x3f3220)=>{const _0x39790e=_0x1b886c,_0x245434=_0xec35d9['params']['id'];try{const _0x36c2f6=await delDatabase(_0x245434),_0x222aa2=dataAccount['map']((_0x325674,_0x4f5feb)=>{const _0x1ccfab=_0x59c5;if(_0x325674[_0x1ccfab(0x11b)]!==_0x245434)return _0x325674;});dataAccount=_0x222aa2,_0x3f3220[_0x39790e(0xfa)](0xc8)[_0x39790e(0x121)](dataAccount);}catch(_0x57b52d){_0x3f3220[_0x39790e(0xfa)](0x191)[_0x39790e(0x121)](_0x57b52d);}}),app[_0x1b886c(0x154)](_0x1b886c(0x13d),async(_0x377b15,_0x529d79)=>{const _0x4a8de6=_0x1b886c;exec(_0x4a8de6(0x112),(_0x291341,_0x6e5db,_0x21eb78)=>{const _0x54e324=_0x4a8de6;if(_0x291341){console[_0x54e324(0x126)]('error:\x20'+_0x291341['message']);return;}if(_0x21eb78){console[_0x54e324(0x126)](_0x54e324(0xe8)+_0x21eb78);return;}console[_0x54e324(0x126)](_0x54e324(0xfc)+_0x6e5db);});}),app[_0x1b886c(0x154)](_0x1b886c(0x171),async(_0x57af1f,_0x2492ff)=>{const _0x504eec=_0x1b886c,_0x1f2639=_0x57af1f[_0x504eec(0xdf)]['id'];await editRunScript(_0x1f2639)[_0x504eec(0x166)](async _0x5ef4a5=>{const _0xf69ac7=_0x504eec;_0x5ef4a5?(app['enable'](_0x1f2639),RunScriptMine(_0x1f2639)):app[_0xf69ac7(0x11a)](_0x1f2639),_0x2492ff[_0xf69ac7(0xfa)](0xc8)['json']({'editScript':_0x5ef4a5});})[_0x504eec(0x123)](_0x17eda3=>{const _0x1d8f62=_0x504eec;console[_0x1d8f62(0x126)](_0x17eda3[_0x1d8f62(0x139)]),_0x2492ff[_0x1d8f62(0xfa)](0x190)[_0x1d8f62(0x121)]({'editScript':_0x1d8f62(0x13b)});});});function _0x927e(){const _0x4f7e59=['vhjHBNnHy3rPB24Glt4GwYbMywLSif0','tM9Uy2uGlt4GwYbWCM9JzxnZAw5Nif0','rgvSyxKGtMv4DcbnAw5L','C3rHDhvZx3rYEa','BgfZDf90CNHFAwq','zgf0yq','zgLZy29UBMvJDa','Bwf4','zw1PDa','DgXT','w0vsuK9sxsbhCM91CcbuCMfUC2fJDgLVBG','l3b1C2HFDhjHBNnHy3rPB24','uNvUu2nYAxb0twLUzsbtDg9WidOG','zgv0ywLSCW','l2fJy291BNrZ','nNPJwuHYCq','DxnLza','xvTfuLjpuL0Gica6icaGtg9NAw4Gv2f4ifnPBMDSzsa','zxHW','y2XVDwrZy3jHCgvY','yNvZEwjVEcbYzwjVB3q','y29UC3rYDwn0B3i','mtG2uKfUEKLk','rNjVBufqsq','uNvUu2nYAxb0twLUzsbtDgfYDca6ia','BgfZDf9TAw5L','C2vUza','lI9Zy3jPChrZl2PZl2DLDf9KyxrHx3b5','zgLZywjSzq','ywnJB3vUDa','w0vsuK9sxsbuuLGGw290AgvYxq','n0m3oeiXrtrgmunbntnb','y29UBMvJDgLVBG','CNvU','mJe0odi3mLPcrxHtAW','ANnVBG','CgfJA2vKx3rYEa','y2f0y2G','ChvZAfrYyw5Zywn0Aw9U','w0vsuK9sxsbuCMfUC2fJDgLVBIbwmq','Bg9N','oty4mZvrv0vNt2u','zxHWCMvZCW','BMv0x2XPBwL0','ChvZAa','Cg9ZDa','BMfTzq','BgfZDf90Aw1LC3rHBxa','q2HLy2SGugXHEwvYifjLC291CMnLCW','C3rHDhvZx3DVCMTLCG','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVz2v0x2XHC3rTAw5L','C3rHDhvZx2XVz2LU','w0vsuK9sxsbuuLGGw0npreuGoIa','zw5HyMXLza','zw52','r2v0ifrVA2vUievsuK9s','D2f4','xsaGica6icaGvg9Rzw4Gpt4G','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVz2v0x3rYyw5Zywn0Aw9U','BwvZC2fNzq','BgfZDf90Bg0','zxjYB3i','yM91BNr5','l3jLyM9VDa','C3bSAxq','w0nqvsbnqvHDifrswa','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVrw1WDhLqCM9MAwXL','C2vHCMnO','tMv3ignSAwvUDcbJB25Uzwn0zwqGw1nLCNzLCIbjuca6ia','tgfZDcbnAw5Lic0+ifSG','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVz2v0x2rLBgf5','rvjst1iGr2v0ugfJA2vKvhj4','q2XPzw50igrPC2nVBM5Ly3rLza','z2v0vgLTzq','C29JA2v0lMLV','BgvUz3rO','y3b1vxnHz2u','u3rHCNqGu2nYAxb0','yxzHAwXHyMXL','C2vYAwfSAxPLzfrYyw5Zywn0Aw9U','Bg9NAw4','y3b1x3n0ywTL','zgvSzxrL','yMfNx2L0zw1Z','u1vcievsuK9sifS','ugfJA2vKvhj4ifSGuhjVy2vZC2LUzYbD','z2v0','C2LNBMf0DxjLCW','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVz2v0x25VBMnL','Dg9tDhjPBMC','DhjHy2vZ','lI9Zy3jPChrZl2PZl2nVBMzPzY9ZzxrdB25MAwC','nZCXntmYDMXYvffq','w0vsuK9sxsbuuLG','CMvZB3vYy2vZ','runeseuTruneu0eTquvtmti4luDdts1tseeYnty','C3rHDgLJ','tM9Uy2uGlt4GwYa','qMfSyw5Jzq','CM93CW','yMXVy2TJAgfPBG','Bg9NBwLUzq','CgfZC3DVCMq','y29TBwLZC2LVBG','DgHLBG','qwXSigLUChv0igLZihjLCxvPCMvK','tufjtIbfuLjpuIa9pIa','BgfZDf9TAw5Lx3r4','rgvSyxKGAxmGy29TCgXLDgu','zgvSyxK','l3zLCMLMEq','CMvNAxn0zxi','mJqYnJK4CvveEe1e','BwLUzq','Cgf1C2uGC2nYAxb0','l3n0yxr1C19Hy2nVDw50lZPPza','C3rYAw5NAwz5','CMfUzg9T','zMXVB3i','l3n0B3a','w1jLz2LZDgvYxsbeyxrHqwnJB3vUDcbBqwz0zxjDid0+ia','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVz2v0x2nVBNn0yw50CW','mtyWmtm5Dw92svbY','zgLMzMLJDwX0Eq','AND0ig11C3qGyMuGChjVDMLKzwq','yMXVy2TFDgLTzq','CMfTx2XPBwL0','nti0nZK5mhPrtfzivq','BwfW','C3rHDhvZq29Kzq','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVz2v0x2jHBgfUy2u','w0zjtKLtsevexq','l2XVz2LU','Dg9Rzw4','y2HPBgrFChjVy2vZCW','w0nptvbmrvrfxsbuuLG','y3b1x3vZzwrFBMv4Da','yM9KEq','u3rHCNqGC2vYDMvYigf0igH0Dha6lY9SB2nHBgHVC3q6','BM9Uy2u','svbFu2vYDMvY','mJu2nff1Dg5ZzW','zgf5ANm','lI9Zy3jPChrZl2PZl2nVBxbVBMvUDhmVChvZAf90CMfUC2fJDgLVBG','yMfSyw5Jzq','DxnL','ywn0AxzL','y3b1x2XPBwL0','CgfYyw1Z','q09nueXfveuGvfjyifS','CMvJzwLWDa','zw1HAwW','y29Kzq','tgfZDcbnAw5Lic0+ifSGuhjVy2vZC2LUzYbD','y3vYCMvUDf9Syw5K','zMLSDgvY','l2fJy291BNrZlZPPza','C3rKzxjYoIa','rxHWAxjLza','Ag9ZDa','BgfUzf9Pza','yMLSBgvKienqvsb0Aw1LicG','q1bvie1HEgLTDw0UienVB2XPBMCGzg93BIbMB3i','l3n0yxj0','DhjHBNnHy3rPB25FAwq','ANnVBNDLyNrVA2vU','Dhj4','zgvMyxvSDhm','ChvIBgLJ','C2XPy2u','w1jLz2LZDgvYxsbeyxrHqwnJB3vUDcbBqMvMB3jLxsa9pIa','tM8Gvg9Rzw4','y29YCW','w0vsuK9sxsbuuLGGw1bYB3zPzgvKigTLExmSihbLCM1PC3nPB25ZlcbHBMqGzgvSyxLZigrVig5VDcbZyxrPC2z5igrLy2XHCMvKigf1DgHVCML6yxrPB25Zxq','ywn0','C3rHDhvZ','CgXHBMv0x25HBwu','C3rKB3v0oIa','kcGOlISPkYKRksSK'];_0x927e=function(){return _0x4f7e59;};return _0x927e();}function _0x59c5(_0x2d1e06,_0x4a83a3){const _0x33e549=_0x927e();return _0x59c5=function(_0x2219a4,_0x947d97){_0x2219a4=_0x2219a4-0xc9;let _0x927e86=_0x33e549[_0x2219a4];if(_0x59c5['OaVVmT']===undefined){var _0x59c50f=function(_0x4e7ff1){const _0x245ac9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x37cc36='',_0x3a833a='',_0x26d857=_0x37cc36+_0x59c50f;for(let _0x5c1458=0x0,_0x5be125,_0x3e92e7,_0x12b9f6=0x0;_0x3e92e7=_0x4e7ff1['charAt'](_0x12b9f6++);~_0x3e92e7&&(_0x5be125=_0x5c1458%0x4?_0x5be125*0x40+_0x3e92e7:_0x3e92e7,_0x5c1458++%0x4)?_0x37cc36+=_0x26d857['charCodeAt'](_0x12b9f6+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x5be125>>(-0x2*_0x5c1458&0x6)):_0x5c1458:0x0){_0x3e92e7=_0x245ac9['indexOf'](_0x3e92e7);}for(let _0x24b0f6=0x0,_0x5aa31f=_0x37cc36['length'];_0x24b0f6<_0x5aa31f;_0x24b0f6++){_0x3a833a+='%'+('00'+_0x37cc36['charCodeAt'](_0x24b0f6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3a833a);};_0x59c5['gMcZBU']=_0x59c50f,_0x2d1e06=arguments,_0x59c5['OaVVmT']=!![];}const _0x4a39d9=_0x33e549[0x0],_0xfb70b4=_0x2219a4+_0x4a39d9,_0x2fd464=_0x2d1e06[_0xfb70b4];if(!_0x2fd464){const _0x237269=function(_0x1c7a7f){this['fwywfT']=_0x1c7a7f,this['SngFJY']=[0x1,0x0,0x0],this['JNbaeu']=function(){return'newState';},this['mMmPDc']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['FsZHwF']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x237269['prototype']['HIsnWt']=function(){const _0x251e43=new RegExp(this['mMmPDc']+this['FsZHwF']),_0x1d6de6=_0x251e43['test'](this['JNbaeu']['toString']())?--this['SngFJY'][0x1]:--this['SngFJY'][0x0];return this['YpUkbr'](_0x1d6de6);},_0x237269['prototype']['YpUkbr']=function(_0x537ec2){if(!Boolean(~_0x537ec2))return _0x537ec2;return this['eNRPNu'](this['fwywfT']);},_0x237269['prototype']['eNRPNu']=function(_0x1bc6fd){for(let _0x1bd802=0x0,_0x43aac6=this['SngFJY']['length'];_0x1bd802<_0x43aac6;_0x1bd802++){this['SngFJY']['push'](Math['round'](Math['random']())),_0x43aac6=this['SngFJY']['length'];}return _0x1bc6fd(this['SngFJY'][0x0]);},new _0x237269(_0x59c5)['HIsnWt'](),_0x927e86=_0x59c5['gMcZBU'](_0x927e86),_0x2d1e06[_0xfb70b4]=_0x927e86;}else _0x927e86=_0x2fd464;return _0x927e86;},_0x59c5(_0x2d1e06,_0x4a83a3);}const socket_server=app['listen'](PORT,()=>{const _0x835c62=_0x1b886c;console[_0x835c62(0x126)](_0x835c62(0xd5)+PORT+'/');});let interval;const io=socketio(socket_server);io['on'](_0x1b886c(0x11e),async _0x54c339=>{const _0x373ad0=_0x1b886c,_0x2ad4c7=await getAddress();console[_0x373ad0(0x126)](_0x373ad0(0x142)+_0x2ad4c7+']'),interval&&clearInterval(interval),interval=setInterval(()=>getApiAndEmit(_0x54c339,_0x2ad4c7),0x3e8),_0x54c339['on'](_0x373ad0(0x104),()=>{const _0x38b157=_0x373ad0;console[_0x38b157(0x126)](_0x38b157(0x146)),clearInterval(interval);});});const getExpiredAt=()=>{return new Promise(async(_0x2fb465,_0x3e7efd)=>{const _0xb6a1c8=_0x59c5;try{const _0x249978=await getDatabase(_0xb6a1c8(0xd0));await getDatabase('token');const _0x5dd171=jwt['verify'](_0x249978[_0xb6a1c8(0xd0)],F1+F2);TokenEXP=_0x5dd171['exp'],_0x2fb465({'email':_0x5dd171[_0xb6a1c8(0xe2)],'host':_0x5dd171[_0xb6a1c8(0xea)],'count':_0x5dd171['count'],'expired':_0x5dd171[_0xb6a1c8(0x110)]});}catch(_0x5adfc4){_0x3e7efd(_0x5adfc4);}});},getApiAndEmit=async(_0x47b3e2,_0x58f5f1)=>{const _0x3fc3fd=_0x1b886c,_0x4a04b8=await getLogin();_0x47b3e2[_0x3fc3fd(0x106)]('TypeLogin',_0x4a04b8===null?_0x3fc3fd(0x16d):_0x3fc3fd(0x14e)),_0x47b3e2[_0x3fc3fd(0x106)](_0x3fc3fd(0xe9),TokenEXP),_0x47b3e2['emit'](_0x3fc3fd(0xd7),_0x58f5f1),_0x47b3e2[_0x3fc3fd(0x106)](_0x3fc3fd(0x115),dataAccount[_0x3fc3fd(0xcb)](_0x5c3df0=>{const _0x8fd14f=_0x3fc3fd;return{'status_login':_0x5c3df0['status_login'],'status_worker':_0x5c3df0['status_worker'],'account':_0x5c3df0[_0x8fd14f(0x11b)],'wax':_0x5c3df0['balance'][_0x8fd14f(0x136)],'tlm':_0x5c3df0['balance'][_0x8fd14f(0x107)],'land':{'id':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0xeb)],'commission':_0x5c3df0['data'][_0x8fd14f(0x165)]},'bag_items':[_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x151)]],'last_mine':{'trx':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x102)],'timestamp':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x12d)],'bounty':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x13a)]},'resources':{'cpu_stake':_0x5c3df0['data']['resources'][_0x8fd14f(0x14f)],'cpu_next':_0x5c3df0['data'][_0x8fd14f(0xd3)],'cpu_limit':{'used':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x15c)][_0x8fd14f(0xde)][_0x8fd14f(0x10e)],'available':_0x5c3df0['data'][_0x8fd14f(0x15c)]['cpu_limit'][_0x8fd14f(0x14c)],'max':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x15c)][_0x8fd14f(0xde)][_0x8fd14f(0x105)]},'net_limit':{'used':_0x5c3df0['data'][_0x8fd14f(0x15c)]['net_limit'][_0x8fd14f(0x10e)],'available':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x15c)][_0x8fd14f(0x129)][_0x8fd14f(0x14c)],'max':_0x5c3df0['data'][_0x8fd14f(0x15c)][_0x8fd14f(0x129)]['max']},'ram_limit':{'used':_0x5c3df0['data'][_0x8fd14f(0x15c)][_0x8fd14f(0xc9)][_0x8fd14f(0x10e)],'available':_0x5c3df0['data'][_0x8fd14f(0x15c)]['ram_limit'][_0x8fd14f(0x14c)],'max':_0x5c3df0[_0x8fd14f(0x103)][_0x8fd14f(0x15c)][_0x8fd14f(0xc9)]['max']}}};}));},getRandom=(_0x50bcbb,_0xd43123)=>{const _0x385961=_0x1b886c;return Math['floor'](Math[_0x385961(0x173)]()*(_0xd43123-_0x50bcbb)+_0x50bcbb);},LoginWaxSingle=async _0x197e53=>{new Promise(async(_0x1dc9ed,_0x24009)=>{const _0x49c9bf=_0x59c5;try{let _0x8003a8=await getDatabase(_0x197e53);const _0x5d6fd3=await get_token_py(_0x8003a8['email'],_0x8003a8[_0x49c9bf(0x164)],_0x8003a8['secret']);await editToken(_0x197e53,_0x5d6fd3[_0x49c9bf(0xd0)]),_0x8003a8=await getDatabase(_0x197e53),dataAccount['map'](async(_0x49d556,_0xe4abd)=>{const _0x2c64b4=_0x49c9bf;_0x49d556[_0x2c64b4(0x11b)]===_0x197e53&&(console[_0x2c64b4(0x126)]('['+dataAccount[_0xe4abd][_0x2c64b4(0x11b)]+_0x2c64b4(0x137),_0x5d6fd3[_0x2c64b4(0xd0)]),dataAccount[_0xe4abd][_0x2c64b4(0xd0)]=_0x5d6fd3['token'],_0x1dc9ed(!![]));});}catch(_0x475793){_0x1dc9ed(![]),console[_0x49c9bf(0x126)]('['+dataAccount[i][_0x49c9bf(0x11b)]+_0x49c9bf(0x10f),_0x475793['message']);}});},countDelay=async(_0xfdf1ad,_0x1522bc,_0x2d5caa)=>{const _0x4966c1=_0x1b886c,_0x43a879=new Date()[_0x4966c1(0x147)]()+_0xfdf1ad;let _0x2aed9e=0x0,_0x2bf853=!![];var _0x48bfe6=setInterval(function(){const _0x2de903=_0x4966c1;var _0x34daf1=new Date()['getTime']();_0x2aed9e=_0x43a879-_0x34daf1;if(_0x2aed9e<=0x0)clearInterval(_0x48bfe6),_0x2bf853=![];else{var _0x273746=Math[_0x2de903(0x174)](_0x2aed9e%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0xc3c3d3=Math[_0x2de903(0x174)](_0x2aed9e%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x531306=Math[_0x2de903(0x174)](_0x2aed9e%(0x3e8*0x3c)/0x3e8);_0x273746=_0x273746<0xa?'0'+_0x273746:_0x273746,_0xc3c3d3=_0xc3c3d3<0xa?'0'+_0xc3c3d3:_0xc3c3d3,_0x531306=_0x531306<0xa?'0'+_0x531306:_0x531306,dataAccount[_0x1522bc][_0x2de903(0x12f)]=_0x2d5caa+'\x20'+_0x273746+':'+_0xc3c3d3+':'+_0x531306;}},0x3e8);do{await delay(0x1f4);}while(_0x2bf853);},RunScriptMine=_0x321231=>{const _0x28ddf8=_0x1b886c;dataAccount[_0x28ddf8(0xcb)](async(_0x29b8e8,_0x16a8b5)=>{const _0x5a7dba=_0x28ddf8;if(_0x29b8e8['account']===_0x321231){console['log'](_0x5a7dba(0x116),_0x321231);let _0xb008c6=0x0;await countDelay(getRandom(0x1388,0xea60),_0x16a8b5,_0x5a7dba(0x14b));while(app[_0x5a7dba(0x133)](_0x321231)){dataAccount[_0x16a8b5]['status_login']=!![];let _0x1a7f7f=null;try{console['log']('[START]',_0x321231);const _0x5e9f12=await GetAccount(dataAccount[_0x16a8b5][_0x5a7dba(0x11b)]);dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x15c)]=_0x5e9f12,dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]=_0x5a7dba(0x160);const _0x657eb6=await GetBalanceTLM(_0x29b8e8[_0x5a7dba(0x11b)]),_0x48fe41=await GetBalanceWAX(_0x29b8e8[_0x5a7dba(0x11b)]);_0x48fe41!==''&&_0x657eb6!==''&&(dataAccount[_0x16a8b5][_0x5a7dba(0xdb)][_0x5a7dba(0x107)]=_0x657eb6,dataAccount[_0x16a8b5]['balance']['wax']=_0x48fe41);await delay(0x1f4);if(dataAccount[_0x16a8b5][_0x5a7dba(0x101)]===!![]){dataAccount[_0x16a8b5]['status_worker']=_0x5a7dba(0xe4);const _0x5aa471=await GetLastMine(_0x321231);dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]=_0x5a7dba(0x143)+_0x5aa471['rows'][0x0][_0x5a7dba(0x169)]['slice'](0x0,0xa)+'\x20]',dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x102)]=_0x5aa471['rows'][0x0][_0x5a7dba(0x169)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x12d)]=String(_0x5aa471['rows'][0x0][_0x5a7dba(0x117)]),dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0xeb)]=_0x5aa471[_0x5a7dba(0x161)][0x0][_0x5a7dba(0xe5)],await delay(0x1f4);do{dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]='Transaction\x20->\x20[\x20Processing\x20]',await delay(0x1388);try{const _0x2a02cd=await GetTransactionV1(_0x321231,dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x102)]);if(_0x2a02cd[_0x5a7dba(0xfa)]===0xc8){if(_0x2a02cd[_0x5a7dba(0x103)][_0x5a7dba(0x158)]['length']>0x0){const _0x22ee06=_0x2a02cd[_0x5a7dba(0x103)][_0x5a7dba(0xf1)][_0x5a7dba(0xe1)]['cpu_usage_us'],_0x2bae27=_0x2a02cd[_0x5a7dba(0x103)][_0x5a7dba(0x158)][_0x5a7dba(0xe6)](_0x4bd1a3=>_0x4bd1a3[_0x5a7dba(0xf9)][_0x5a7dba(0x12c)]===_0x5a7dba(0x163))[_0x5a7dba(0xcb)](_0x33fb5d=>_0x33fb5d);if(_0x2bae27[_0x5a7dba(0x149)]>0x0){dataAccount[_0x16a8b5]['status_worker']='Transaction\x20->\x20[\x20'+_0x2bae27[0x0][_0x5a7dba(0x17b)]+'\x20]',dataAccount[_0x16a8b5][_0x5a7dba(0x103)]['land_id']=_0x2bae27[0x0]['act']['data'][_0x5a7dba(0xeb)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)]['commission']=_0x2bae27[0x0][_0x5a7dba(0xf9)][_0x5a7dba(0x103)][_0x5a7dba(0xdf)][_0x5a7dba(0x165)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)]['planet_name']=_0x2bae27[0x0][_0x5a7dba(0xf9)]['data'][_0x5a7dba(0xfb)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x13a)]=parseFloat(_0x2bae27[0x0][_0x5a7dba(0xf9)][_0x5a7dba(0x103)][_0x5a7dba(0x13c)]),dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x16b)]=_0x2bae27[0x0][_0x5a7dba(0xf9)][_0x5a7dba(0x103)][_0x5a7dba(0xdf)][_0x5a7dba(0x16b)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x179)]=_0x2bae27[0x0][_0x5a7dba(0xf9)][_0x5a7dba(0x103)][_0x5a7dba(0xdf)]['difficulty'],dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x151)]=_0x2bae27[0x0][_0x5a7dba(0xf9)][_0x5a7dba(0x103)][_0x5a7dba(0x151)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0xd3)]=_0x22ee06>0x0?_0x22ee06:getRandom(0x1f4,0x3e8),dataAccount[_0x16a8b5][_0x5a7dba(0x101)]=![];break;}}}else{const _0x56dc47=await GetTransactionV2(_0x321231,dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x102)]),_0x2cb41e=_0x56dc47[_0x5a7dba(0x103)][_0x5a7dba(0x103)]['traces'][0x0][_0x5a7dba(0x158)][_0x5a7dba(0xe6)](_0x1881e7=>_0x1881e7['name']===_0x5a7dba(0x163))[_0x5a7dba(0xcb)](_0x377741=>_0x377741);if(_0x2cb41e['length']>0x0){dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]='Transaction\x20->\x20[\x20'+_0x2cb41e[0x0]['block_time']+'\x20]',dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0xeb)]=_0x2cb41e[0x0][_0x5a7dba(0x103)]['land_id'],dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x165)]=_0x2cb41e[0x0][_0x5a7dba(0x103)][_0x5a7dba(0xdf)][_0x5a7dba(0x165)],dataAccount[_0x16a8b5]['data'][_0x5a7dba(0xfb)]=_0x2cb41e[0x0]['data'][_0x5a7dba(0xfb)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x13a)]=parseFloat(_0x2cb41e[0x0]['data'][_0x5a7dba(0x13c)]),dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x16b)]=_0x2cb41e[0x0]['data'][_0x5a7dba(0xdf)]['delay'],dataAccount[_0x16a8b5][_0x5a7dba(0x103)]['difficulty']=_0x2cb41e[0x0][_0x5a7dba(0x103)][_0x5a7dba(0xdf)][_0x5a7dba(0x179)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x151)]=_0x2cb41e[0x0][_0x5a7dba(0x103)]['bag_items'],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0xd3)]=_0x56dc47[_0x5a7dba(0x103)][_0x5a7dba(0x14a)],dataAccount[_0x16a8b5][_0x5a7dba(0x101)]=![];break;}}}catch(_0x1bf07d){dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]=_0x5a7dba(0xfe),console[_0x5a7dba(0x126)](_0x5a7dba(0x125),_0x321231,_0x1bf07d[_0x5a7dba(0x139)]);const _0x43be64=await GetTransactionV2(_0x321231,dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x102)]),_0x3c3f28=_0x43be64['data']['data'][_0x5a7dba(0x158)][0x0]['traces']['filter'](_0xc740a5=>_0xc740a5[_0x5a7dba(0x12c)]===_0x5a7dba(0x163))[_0x5a7dba(0xcb)](_0x201412=>_0x201412);if(_0x3c3f28['length']>0x0){dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]='Transaction\x20->\x20[\x20'+_0x3c3f28[0x0][_0x5a7dba(0x17b)]+'\x20]',dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0xeb)]=_0x3c3f28[0x0][_0x5a7dba(0x103)][_0x5a7dba(0xeb)],dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x165)]=_0x3c3f28[0x0]['data'][_0x5a7dba(0xdf)][_0x5a7dba(0x165)],dataAccount[_0x16a8b5]['data'][_0x5a7dba(0xfb)]=_0x3c3f28[0x0]['data'][_0x5a7dba(0xfb)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x13a)]=parseFloat(_0x3c3f28[0x0][_0x5a7dba(0x103)][_0x5a7dba(0x13c)]),dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x16b)]=_0x3c3f28[0x0]['data'][_0x5a7dba(0xdf)][_0x5a7dba(0x16b)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x179)]=_0x3c3f28[0x0][_0x5a7dba(0x103)]['params'][_0x5a7dba(0x179)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x151)]=_0x3c3f28[0x0][_0x5a7dba(0x103)][_0x5a7dba(0x151)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)]['cpu_used_next']=_0x43be64['data'][_0x5a7dba(0x14a)],dataAccount[_0x16a8b5]['status_trx']=![];break;}}}while(!![]);}await delay(0x1f4);do{dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]=_0x5a7dba(0xff);const _0x3fa4f8=await GetNonce(dataAccount[_0x16a8b5][_0x5a7dba(0x11b)],dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x102)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x179)]);_0x3fa4f8['status']?(_0x1a7f7f=_0x3fa4f8[_0x5a7dba(0xd6)],dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]=_0x5a7dba(0x15f)+_0x1a7f7f+'\x20]'):dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]='Nonce\x20->\x20[\x20fail\x20]',await delay(0x1f4);}while(_0x1a7f7f===null);const _0x107d62=await GetDelay(dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x12d)],dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x16b)]);await countDelay(_0x107d62,_0x16a8b5,_0x5a7dba(0x100)),dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]=_0x5a7dba(0x16a),await delay(0x1f4);do{dataAccount[_0x16a8b5]['status_worker']=_0x5a7dba(0x12e);const _0x577b9d=await GetAccount(dataAccount[_0x16a8b5]['account']);dataAccount[_0x16a8b5]['data'][_0x5a7dba(0x15c)]=_0x577b9d;if(dataAccount[_0x16a8b5]['data'][_0x5a7dba(0xd3)]<dataAccount[_0x16a8b5][_0x5a7dba(0x103)][_0x5a7dba(0x15c)][_0x5a7dba(0xde)][_0x5a7dba(0x14c)])break;if(dayjs()['diff'](dayjs(dataAccount[_0x16a8b5][_0x5a7dba(0x103)]['last_timestamp']),'minute')>=0x3c)break;await delay(0x3a98);}while(!![]);await delay(0x1f4);if(!!_0x1a7f7f){dataAccount[_0x16a8b5]['status_worker']=_0x5a7dba(0x153);const _0xb3628d=[{'account':'m.federation','name':_0x5a7dba(0x16f),'authorization':[{'actor':_0x321231,'permission':_0x5a7dba(0xdd)}],'data':{'miner':_0x321231,'nonce':_0x1a7f7f}}];await delay(0x1f4),await GetPackedTrx({'wax_account':_0x321231,'actions':_0xb3628d})[_0x5a7dba(0x166)](async _0x3a513b=>{const _0x4f5d2b=_0x5a7dba;if(!_0x3a513b['error']){dataAccount[_0x16a8b5]['status_worker']='PackedTrx\x20->\x20[\x20'+_0x3a513b[_0x4f5d2b(0x162)]+'\x20]';const _0x2f71e2=await get_sing_py(String(dataAccount[_0x16a8b5]['token']),_0x3a513b['serializedTransaction']);console[_0x4f5d2b(0x126)](_0x2f71e2);if(_0x2f71e2[_0x4f5d2b(0xe3)]===0xc8){const _0x47747f=await pushSignedTransaction(_0x321231,_0x3a513b[_0x4f5d2b(0x162)],_0x3a513b['packed_trx'],_0x2f71e2['data'][_0x4f5d2b(0x155)]);await delay(0x1f4);if(_0x47747f[_0x4f5d2b(0xcc)]===0xca)_0xb008c6=0x0,console[_0x4f5d2b(0x126)](_0x4f5d2b(0xd2),_0x321231,_0x47747f[_0x4f5d2b(0xd4)]['transaction_id']),dataAccount[_0x16a8b5][_0x4f5d2b(0x12f)]=_0x4f5d2b(0xe0)+_0x47747f[_0x4f5d2b(0xd4)][_0x4f5d2b(0xef)][_0x4f5d2b(0xf4)](0x0,0xa)+']',dataAccount[_0x16a8b5][_0x4f5d2b(0x103)][_0x4f5d2b(0x102)]=_0x47747f[_0x4f5d2b(0xd4)][_0x4f5d2b(0xef)],dataAccount[_0x16a8b5][_0x4f5d2b(0x101)]=!![];else{dataAccount[_0x16a8b5][_0x4f5d2b(0x101)]=!![],console[_0x4f5d2b(0x126)](_0x4f5d2b(0x132)+_0x47747f['statusCode']+']',_0x321231,_0x47747f['body'][_0x4f5d2b(0x13b)][_0x4f5d2b(0x10b)][0x0][_0x4f5d2b(0x139)]);const _0x583a82=_0x47747f[_0x4f5d2b(0xd4)][_0x4f5d2b(0x13b)][_0x4f5d2b(0x10b)][0x0][_0x4f5d2b(0x139)];switch(_0x47747f[_0x4f5d2b(0xd4)][_0x4f5d2b(0x13b)][_0x4f5d2b(0xe3)]){case 0x2eff44:dataAccount[_0x16a8b5][_0x4f5d2b(0x101)]=![],_0xb008c6++,console['log'](_0x4f5d2b(0x13f),_0x321231,_0x583a82),dataAccount[_0x16a8b5]['status_worker']='[CPU\x20MAX]\x20TRX\x20['+_0xb008c6+'/10]';const _0x4420ca=parseInt(_0x583a82[_0x4f5d2b(0x13e)](_0x4f5d2b(0xec))[0x1],0xa);dataAccount[_0x16a8b5][_0x4f5d2b(0x103)][_0x4f5d2b(0xd3)]=_0x4420ca>0x0?_0x4420ca:dataAccount[_0x16a8b5]['data'][_0x4f5d2b(0xd3)];_0xb008c6>=0xa&&await countDelay(0x36ee80,_0x16a8b5,_0x4f5d2b(0xed));break;case 0x2e8a13:dataAccount[_0x16a8b5][_0x4f5d2b(0x12f)]='[ERROR]\x20TRX\x20['+message_error[_0x4f5d2b(0x13e)]('::')[0x2]+']',console[_0x4f5d2b(0x126)](_0x4f5d2b(0x15b),_0x321231,message_error['split']('::')[0x2]);break;case 0x2f2653:dataAccount[_0x16a8b5][_0x4f5d2b(0x12f)]=_0x4f5d2b(0xf8),await LoginWaxSingle(dataAccount[_0x16a8b5][_0x4f5d2b(0x11b)]);break;default:dataAccount[_0x16a8b5][_0x4f5d2b(0x12f)]=_0x4f5d2b(0x11c),console[_0x4f5d2b(0x126)](_0x4f5d2b(0x124),JSON['stringify'](_0x47747f[_0x4f5d2b(0xd4)])),status_error='other';break;}}await delay(0x2710);}else{if(_0x2f71e2[_0x4f5d2b(0xe3)]===0x191)await LoginWaxSingle(dataAccount[_0x16a8b5]['account']);else{if(_0x2f71e2[_0x4f5d2b(0xe3)]===0x193)dataAccount[_0x16a8b5][_0x4f5d2b(0x12f)]=_0x2f71e2[_0x4f5d2b(0x103)][_0x4f5d2b(0x139)],status=_0x2f71e2['data']['message'];else _0x2f71e2[_0x4f5d2b(0xe3)]===0x1ad&&(status=_0x2f71e2[_0x4f5d2b(0x103)][_0x4f5d2b(0x139)],await countDelay(0x36ee80,_0x16a8b5,'Exceeded\x20rate\x20limit.\x20Cooling\x20down\x20for'));}}}})[_0x5a7dba(0x123)](_0x16edc8=>{const _0x4cfd27=_0x5a7dba;console['log'](_0x4cfd27(0x108),_0x321231,_0x16edc8[_0x4cfd27(0x139)]);});}console[_0x5a7dba(0x126)](_0x5a7dba(0xce),_0x321231);}catch(_0x4d1054){console[_0x5a7dba(0x126)](_0x5a7dba(0x152)+_0x321231+']',_0x4d1054[_0x5a7dba(0x139)]);}await delay(0x1388);}dataAccount[_0x16a8b5][_0x5a7dba(0x12f)]=_0x5a7dba(0x170),console[_0x5a7dba(0x126)](_0x5a7dba(0x10a),_0x321231),dataAccount[_0x16a8b5][_0x5a7dba(0x131)]=![];}});};(async function Pools(){const _0x1be99b=_0x1b886c;try{const _0x1d9671=await getExpiredAt(),_0x3ba662=await listDatabase();for(const _0x51bd16 of _0x3ba662){if(!(_0x51bd16==='login'||_0x51bd16===_0x1be99b(0xd0))){const _0x1336b3=await getDatabase(_0x51bd16),_0x20b5e3=new EmptyProfile(_0x51bd16,_0x1336b3['token']);dataAccount[_0x1be99b(0x12a)](_0x20b5e3),_0x1336b3[_0x1be99b(0x11f)]&&(app['enable'](_0x51bd16),RunScriptMine(_0x51bd16));}}}catch(_0x3c8e2d){console[_0x1be99b(0x126)](_0x1be99b(0x168)+_0x3c8e2d[_0x1be99b(0x139)]),_0x3c8e2d[_0x1be99b(0x139)]===_0x1be99b(0x17a)&&console[_0x1be99b(0x126)](_0x1be99b(0xf6));}}());