module.exports.config={name:"alime",version:"1.1.2",hasPermssion:0,credits:"ProCoderMew ManhGF",description:"alime sfw và cả alime nsfw :)",commandCategory:"nsfw",usages:"[tag]",cooldowns:5,dependencies:{axios:"","fs-extra":"",path:""}},module.exports.onLoad=async function(){const{resolve:e}=global.nodemodule.path,{existsSync:a,readFileSync:n}=global.nodemodule["fs-extra"],{downloadFile:o}=global.utils,t=e(__dirname,"cache","alime.json"),s="https://raw.githubusercontent.com/manhkhac/mirai-1.2.8/data/json/alime.json";try{a(t)||await o(s,t);return void(0==JSON.parse(n(t)).length&&await o(s,t))}catch{await o(s,t)}},module.exports.run=async function({event:e,api:a,args:n}){const{writeFileSync:o,createReadStream:t,unlinkSync:s}=global.nodemodule["fs-extra"],{resolve:r}=global.nodemodule.path,l=global.nodemodule.axios,{downloadFile:i}=global.utils,{threadID:d,senderID:c,messageID:m}=e,u=(e,n=function(){})=>a.sendMessage(e,d,n,m),{sfw:w,nsfw:g}=require("./cache/alime.json");var h;if(w.hasOwnProperty(n[0])||g.hasOwnProperty(n[0])){w.hasOwnProperty(n[0])?h=w[n[0]]:g.hasOwnProperty(n[0])&&(h=g[n[0]]);const{data:e}=await l.get(h),a=e.data.response.url,o=a.split(".")[a.split(".").length-1],i=r(__dirname,"cache",`${n[0]}_${c}.${o}`);return await global.utils.downloadFile(a,i),u({attachment:t(i)},(function(){return s(i)}))}var p=Object.keys(g).join(", ");return u("=== Sfw Tag ===\n"+Object.keys(w).join(", ")+"\n\n=== Nsfw Tag ===\n"+p)};