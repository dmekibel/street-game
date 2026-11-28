(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ns={minX:-112,maxX:114,minZ:-72,maxZ:70},xn={},sr=[{id:"avenue",z:0,half:4,x0:-118,x1:120,pavS:[-7,-4],pavN:[4,10],xings:[-90,-40,-8,34,88],cars:!0,parked:!1},{id:"north",z:40,half:5,x0:-118,x1:120,pavS:[32,35],pavN:[45,48],xings:[-90,-40,34,88],cars:!0,parked:!0},{id:"harbour",z:-54,half:5,x0:-118,x1:120,pavS:[-62,-59],pavN:[-49,-45],xings:[-62,34],cars:!0,parked:!0}],gn=[{id:"hill",x:-90,half:4,segs:[[10,32],[48,70]]},{id:"gate",x:-40,half:4,segs:[[10,32],[48,70]]},{id:"college",x:34,half:4,segs:[[10,32],[48,70],[-28,-7],[-72,-62]]},{id:"downtown",x:88,half:4,segs:[[10,32],[48,70]]}],da=3,We={x0:-120,x1:122,z0:-44.5,z1:-30.5},es=[{x0:-64.2,x1:-59.8,z0:-45.5,z1:-29.5,name:"Stone footbridge",style:"stone"},{x0:31.4,x1:36.6,z0:-45.5,z1:-29.5,name:"Iron footbridge",style:"iron"}],U1={x0:86,x1:94,z0:-63,z1:-15,y:3.4},bf=[{x0:86,x1:94,z0:-16,z1:-14.5},{x0:86.6,x1:87.6,z0:-21.6,z1:-20.6},{x0:92.4,x1:93.4,z0:-21.6,z1:-20.6},{x0:86.6,x1:87.6,z0:-38,z1:-37},{x0:92.4,x1:93.4,z0:-38,z1:-37},{x0:86.6,x1:87.6,z0:-46,z1:-45.2},{x0:92.4,x1:93.4,z0:-46,z1:-45.2},{x0:86,x1:94,z0:-64.5,z1:-63}],wf={x0:-112,x1:-36,z0:-30.5,z1:-7},Fn={x:-94,z:-22,r:5},Xi={x:-62,z:-18,r:3.3},Qh=[[{x:-110,z:-16},{x:-100,z:-14},{x:-88,z:-13},{x:-76,z:-15},{x:-66,z:-16},{x:-56,z:-15.5},{x:-46,z:-16},{x:-38,z:-14}],[{x:-62,z:-7.5},{x:-62.5,z:-14}],[{x:-62,z:-22},{x:-63,z:-26},{x:-62,z:-30}],[{x:-104,z:-8},{x:-101,z:-20},{x:-96,z:-27},{x:-86,z:-28.5},{x:-74,z:-26},{x:-66,z:-21}],[{x:-56,z:-21},{x:-48,z:-25},{x:-40,z:-27}],[{x:-84,z:-8},{x:-86,z:-14}]],F1=[wf,{x0:-36,x1:30,z0:-28,z1:-7},{x0:-72,x1:-52,z0:48,z1:52},{x0:4,x1:13,z0:48,z1:50}],pa=[{x:-80,z:-12},{x:-70,z:-25},{x:-104,z:-24},{x:-48,z:-20},{x:-24,z:-22}],nl={x0:-40,x1:-1,z0:-72,z1:-62},yt=(s,t,e,n,i,r,o,a="plain",c={})=>({x0:s,x1:t,z0:e,z1:n,h:i,col:r,face:o,style:a,roof:Math.abs(Math.round(s*7+e*13))%9+1,...c}),wi=[13129021,12077626,14184522,11026478],Ef=[yt(-111,-104,12,19,5,13129021,"S","home"),yt(-103.5,-97.5,12,19,6.5,15785152,"S","home"),yt(-82,-76,12,19,5,14184522,"S","home"),yt(-75,-70.5,12,19,6.5,15910048,"S","home"),yt(-67,-55,10,18,6,14700602,"S","shop",{sign:{icon:"noodle",bg:"#c8302a",awA:16760864,awB:14168106},neon:16728160}),yt(-54,-48,15,23,8,16173130,"S","plain",{neon:16728160}),yt(-33,-28,10,22,9,15895728,"S"),yt(-27,-17,10,16,7,16173130,"S","shop",{sign:{icon:"bottle",bg:"#d8402a",awA:14172224,awB:16052456},roof:0}),yt(-16,-6,10,22,11,5226672,"S"),yt(-5,5,10,14,6,16095818,"S","shop",{sign:{icon:"bread",bg:"#e0508a",awA:16748464,awB:16774368},roof:0}),yt(16,27,10,22,13,16049864,"S"),yt(41,48,10,18,7,15231648,"S","shop",{sign:{icon:"mug",bg:"#a01a6a",awA:16728224,awB:16773364},neon:16728224,roof:0}),yt(49,55,10,20,9,16095818,"S","plain",{neon:3526842}),yt(56,68,10,18,7,3844288,"S","shop",{sign:{icon:"ball",bg:"#1a4aa0",awA:4235519,awB:16052456},neon:4243711}),yt(69,72.5,10,20,8,16173130,"S","plain",{neon:16735370}),yt(73.5,81,10,18,7,16049864,"S","shop",{sign:{icon:"tv",bg:"#2a3a4a",awA:14540253,awB:3836624},roof:0}),yt(95,104,10,22,22,6992096,"S","tower",{sign:{icon:"cup",bg:"#203040"},neon:4243711}),yt(105,113,10,22,18,15895728,"S","tower",{neon:16735370}),yt(-111,-98,23,32,7,12077626,"N","brick"),yt(-82,-71,22,32,6,14184522,"N","brick"),yt(-70,-55,20,32,8,14700602,"N","plain",{neon:16760864}),yt(-54,-47.5,24,32,6,16760896,"N","plain",{neon:16728160}),yt(-33,-20,23,32,8,15910048,"N"),yt(-19,4.5,23,32,10,8368352,"N"),yt(16,27,23,32,9,3526842,"N"),yt(41,55,21,32,8,16747084,"N","plain",{neon:16728224}),yt(56,72,20.5,32,10,9071320,"N","plain",{neon:3526842}),yt(73,81,19,32,7,16173130,"N"),yt(95,113,23,32,12,16049864,"N","tower",{neon:7097343}),yt(-111,-97,48,57,7,wi[0],"S","brick"),yt(-111,-97,58,70,8,wi[3],"E","brick"),yt(-83,-76,48,58,7,wi[1],"W","brick"),yt(-83,-76,59,70,8,wi[2],"W","brick"),yt(-72,-52,53,66,9,15785152,"S","statehouse",{roof:0}),yt(-51,-47.5,54,70,7,wi[0],"S","brick"),yt(-33,-25,48,58,6,14168106,"S","shop",{sign:{icon:"noodle",bg:"#c8302a",awA:16760864,awB:14168106},neon:16760864,roof:0}),yt(-24,-14,48,60,8,16760896,"S","plain",{neon:16728160}),yt(-33,-14,61,70,10,14700602,"S"),yt(-12,4,52,66,10,wi[1],"S","college",{roof:0}),yt(14,27,51,63,8,16052456,"S","church",{roof:0}),yt(5,13,54,70,7,16095818,"S"),yt(41,57,48,62,11,9054826,"S","theatre",{neon:16764992,roof:0}),yt(58,69,48,58,7,3844288,"S","shop",{sign:{icon:"mug",bg:"#1a4aa0",awA:4235519,awB:16052456},neon:16728224}),yt(71,81,48,57,7,2792026,"S","shop",{sign:{icon:"bottle",bg:"#1a6a3a",awA:3194976,awB:16052456},neon:4259712,roof:0}),yt(41,81,63,70,9,7097343,"S","plain",{neon:16728224}),yt(95,104,48,64,26,6992096,"S","tower",{neon:4243711}),yt(105,113,48,60,14,16747084,"S","tower",{neon:16735370}),yt(95,113,65,70,18,16049864,"S","tower"),yt(41.5,44.5,-17.5,-14.5,3.2,2787914,"N","kiosk",{roof:0}),yt(-111,-90,-72,-62,8,15895728,"N","plain",{neon:3526842}),yt(-88,-70,-72,-62,6,5226672,"N"),yt(-68,-44,-72,-62,7,16173130,"N"),yt(1,26.5,-72,-62,7,16095818,"N","plain",{neon:16735370}),yt(41,50,-72,-62,6,16760896,"N","shop",{sign:{icon:"pizza",bg:"#c84a1a",awA:16736320,awB:16774368},roof:0}),yt(56,64,-72,-62,9,9071320,"N"),yt(66,84,-72,-62,8,9413557,"N","warehouse"),yt(96,104,-71,-62,6,3526842,"N","shop",{sign:{icon:"bottle",bg:"#1a6a6a",awA:3526842,awB:16052456},neon:4259808,roof:0}),yt(105,113,-72,-62,10,15231648,"N","plain",{neon:16728224})],z1=[{kind:"hotdog",glow:4259680,x:-22,y:7,z:13.5,size:1},{kind:"pizza",glow:4259680,x:0,y:6,z:12.2,size:.85},{kind:"dumpling",glow:16728160,x:-61,y:6,z:14.5,size:1},{kind:"burger",glow:16728256,x:44.5,y:7,z:14.5,size:1},{kind:"donut",glow:4243711,x:77,y:7,z:14.5,size:1},{kind:"hotdog",glow:4259680,x:76,y:7,z:52.5,size:1.1},{kind:"dumpling",glow:16728160,x:-29,y:6,z:53,size:1},{kind:"pizza",glow:16748608,x:45.5,y:6,z:-67,size:1.1},{kind:"donut",glow:16728256,x:100,y:6,z:-66.5,size:1}],O1={dome:{x:-62,z:59.5,name:"The gold dome"},steeple:{x:20.5,z:57,name:"The white steeple"},gate:{x:-40,z:11.5,name:"The Chinatown gate"},marquee:{x:49,z:47.6,name:"The theatre marquee"}},Af=[{x0:-54,x1:-51,z0:11.9,z1:13.3},{x0:-50.5,x1:-47.5,z0:11.9,z1:13.3},{x0:-6,x1:5,z0:21.5,z1:22.5},{x0:15,x1:16,z0:10,z1:22},{x0:Xi.x-3,x1:Xi.x+3,z0:Xi.z-3,z1:Xi.z+3},{x0:Fn.x-3.6,x1:Fn.x+3.6,z0:Fn.z-3.6,z1:Fn.z+3.6},{x0:-48.5,x1:-43.5,z0:-11,z1:-8.7},{x0:43,x1:69,z0:-23,z1:-22.3},...[44,50,62,68].map(s=>({x0:s-.35,x1:s+.35,z0:-9.55,z1:-8.85})),...bf];function Tf(){const s=[];let t=We.x0;for(const e of[...es].sort((n,i)=>n.x0-i.x0))s.push({x0:t,x1:e.x0,z0:We.z0,z1:We.z1}),t=e.x1;s.push({x0:t,x1:We.x1,z0:We.z0,z1:We.z1});for(const e of es)s.push({x0:e.x0-.3,x1:e.x0,z0:We.z0,z1:We.z1},{x0:e.x1,x1:e.x1+.3,z0:We.z0,z1:We.z1});return s}const il=[14174778,3832528,15781952,16053484,2763312,4239472,16747084],Rf=(()=>{const s=[];let t=0;const e=(n,i,r)=>{s.push({x:n,z:i,alongX:r,kind:t%4,col:il[t*3%il.length]}),t++};for(const n of gn)for(const[i,r]of n.segs)if(!(n.id==="college"&&i<0))for(let o=i+4;o<=r-4;o+=7.5)(t+Math.round(o))%3!==0?e(n.x-2.6,o,!1):t++,(t+Math.round(o))%4!==1?e(n.x+2.6,o+3,!1):t++;for(const n of sr)if(n.parked)for(let i=n.x0+10;i<n.x1-6;i+=9)n.xings.some(r=>Math.abs(r-i)<9)||gn.some(r=>Math.abs(r.x-i)<r.half+4)||n.id==="harbour"&&i>84&&i<96||(t%5!==2&&e(i,n.z-n.half+.95,!0),t%7!==3&&e(i+4,n.z+n.half-.95,!0),t++);for(let n=nl.x0+3;n<nl.x1-2;n+=3.2)t%3!==1&&e(n,-64.6,!1),t%4!==2&&e(n,-69.6,!1),t++;return s})(),Cf=s=>s.alongX?{x0:s.x-1.9,x1:s.x+1.9,z0:s.z-.9,z1:s.z+.9}:{x0:s.x-.9,x1:s.x+.9,z0:s.z-1.9,z1:s.z+1.9},Pf=[...Ef,...Af,...Tf(),...Rf.map(Cf)],Ys=(s,t,e,n=0)=>t>s.x0-n&&t<s.x1+n&&e>s.z0-n&&e<s.z1+n,If=(s,t)=>xn.inWater?xn.inWater(s,t):Ys(We,s,t)&&!es.some(e=>Ys(e,s,t))||Math.hypot(s-Fn.x,t-Fn.z)<Fn.r,Lf=(s,t)=>s>=Ns.minX&&s<=Ns.maxX&&t>=Ns.minZ&&t<=Ns.maxZ;function Df(s,t,e=0){return Lf(s,t)?xn.walkable?xn.walkable(s,t,e):If(s,t)?!1:!Pf.some(n=>Ys(n,s,t,e)):!1}function tu(s,t){return xn.onRoad?xn.onRoad(s,t):sr.some(e=>Math.abs(t-e.z)<=e.half&&s>=e.x0&&s<=e.x1)?!0:gn.some(e=>Math.abs(s-e.x)<=e.half&&e.segs.some(([n,i])=>t>=n&&t<=i))}function Nf(s,t){if(xn.onPavement)return xn.onPavement(s,t);for(const e of sr)if(t>=e.pavS[0]&&t<=e.pavS[1]||t>=e.pavN[0]&&t<=e.pavN[1])return!0;for(const e of gn){const n=Math.abs(s-e.x);if(n>e.half&&n<=e.half+da&&e.segs.some(([i,r])=>t>=i&&t<=r))return!0}return!!(t<=-28&&t>=-31&&s>We.x0||es.some(e=>Ys(e,s,t,.2)))}function B1(s,t){return tu(s,t)||Nf(s,t)||Qh.some(e=>eu(e,s,t,1.6))}function eu(s,t,e,n){for(let i=1;i<s.length;i++){const r=s[i-1],o=s[i],a=o.x-r.x,c=o.z-r.z,l=a*a+c*c,h=Math.max(0,Math.min(1,((t-r.x)*a+(e-r.z)*c)/(l||1)));if(Math.hypot(r.x+a*h-t,r.z+c*h-e)<=n)return!0}return!1}const Uf=sr.flatMap(s=>s.xings.map(t=>({x0:t-1.6,x1:t+1.6,z0:s.z-s.half,z1:s.z+s.half}))),k1=(s,t,e=.6)=>Uf.some(n=>Ys(n,s,t,e)),Ff=(()=>{const s=[];for(let t=-100;t<=104;t+=16)s.push({x:t,z:4.7,arm:-1});for(let t=-92;t<=104;t+=16)s.push({x:t,z:-4.6,arm:1});for(let t=-104;t<=110;t+=16)gn.some(e=>Math.abs(e.x-t)<e.half+1.5)||s.push({x:t,z:34.6,arm:1});for(let t=-96;t<=110;t+=16)gn.some(e=>Math.abs(e.x-t)<e.half+1.5)||s.push({x:t,z:45.4,arm:-1});for(let t=-100;t<=110;t+=16)Math.abs(t-90)>6&&s.push({x:t,z:-48.6,arm:-1});for(let t=-92;t<=110;t+=16)Math.abs(t-90)>6&&!(t>-40&&t<0)&&s.push({x:t,z:-59.4,arm:1});for(const t of gn)for(const[e,n]of t.segs)for(let i=e+5;i<n-2;i+=11)s.push({x:t.x-t.half-.5,z:i,arm:0}),s.push({x:t.x+t.half+.5,z:i+5.5,arm:0});for(let t=-106;t<=110;t+=14)!es.some(e=>Math.abs((e.x0+e.x1)/2-t)<4)&&Math.abs(t-90)>6&&s.push({x:t,z:-29.6,arm:0});for(const t of[[-100,-13.5],[-76,-16.5],[-56,-14],[-70,-23],[-48,-26.5],[-90,-27.5],[-44,-14.5]])s.push({x:t[0],z:t[1],arm:0});return s})(),H1=(()=>{const s=[];let t=0;const e=(i,r)=>Df(i,r,1.2)&&!Ff.some(o=>Math.hypot(o.x-i,o.z-r)<2)&&!tu(i,r),n=(i,r,o)=>{e(i,r)&&s.push({x:i,z:r,s:o}),t++};for(let i=-108;i<=110;i+=12)n(i+6,32.6,.75),n(i,47.4,.75),n(i+3,-46.2,.8);for(const i of gn)for(const[r,o]of i.segs)for(let a=r+9;a<o-2;a+=11)n(i.x-i.half-.7,a+1.5,.7),n(i.x+i.half+.7,a-3,.7);for(let i=-110;i<=-38;i+=5.2)for(let r=-29;r<=-8.5;r+=4.6){const o=t*7919%13,a=i+o%5-2,c=r+o*3%5-2;if(o%5===0||Qh.some(l=>eu(l,a,c,2.4))){t++;continue}if(Math.hypot(a-Xi.x,c-Xi.z)<7||Math.hypot(a-Fn.x,c-Fn.z)<7.5){t++;continue}if(pa.some(l=>Math.hypot(l.x-a,l.z-c)<3)){t++;continue}n(a,c,.8+o%4*.12)}for(let i=0;i<7;i++)n(-31+i*5,-20.5+i%2*1.2,.9+i%3*.15);n(-28,-9.5,1),n(-2,-10,.85),n(4,-18,1.1);for(let i=0;i<5;i++)n(76+i*7.5,-9.5,.85);for(let i=-26;i<=28;i+=9)n(i,-26.5,.8);for(const i of[-105,-98,-79,-72.5])n(i,10.9,.7);for(const i of[-70,-64,-60,-54])n(i,50,.85);return s})(),zf=[];for(let s=-104;s<=110;s+=10)gn.some(t=>Math.abs(t.x-s)<8)||zf.push({x:s+5,z:47.4},{x:s+1,z:32.6});const sl=[{x:63.5,z:46.6},{x:62,z:8.6},{x:44.5,z:8.6},{x:49,z:46.6}],rl=["office","tourist","oldlady","party","jogger","rich"],Xn=(s,t)=>{for(let e=t.length-1;e>=0;e--)if(s>=t[e][0])return t[e][1];return t[0][1]},Of={old:{name:"Tremont Street",mix:{office:1,tourist:1,oldlady:1,party:1,jogger:1,rich:.5},busy:s=>Xn(s,[[0,.7],[.72,.4]]),gen:()=>1},market:{name:"Chinatown",mix:{oldlady:3,tourist:3,office:1,rich:.5},busy:s=>Xn(s,[[0,.8],[.25,1],[.6,.6],[.72,.15]]),gen:s=>s>.25&&s<.6?1.2:1},homes:{name:"Beacon Hill",mix:{oldlady:3,jogger:2,rich:1,office:1},busy:s=>Xn(s,[[0,.5],[.72,.2]]),gen:()=>1.05},park:{name:"The Common",mix:{jogger:3,oldlady:3,tourist:2,party:.5},busy:s=>Xn(s,[[0,.8],[.6,.6],[.72,.25]]),gen:()=>.95},bars:{name:"Theatre District",mix:{party:6,office:1,tourist:1,rich:.5},busy:s=>Xn(s,[[0,.25],[.45,.6],[.6,1]]),gen:s=>s>.6?1.25:.8},downtown:{name:"Downtown Crossing",mix:{office:5,rich:2,tourist:1,jogger:1},busy:s=>Xn(s,[[0,1],[.6,.6],[.72,.15]]),gen:()=>.85},station:{name:"Park Street Station",mix:{office:3,tourist:2,party:1,oldlady:1,jogger:.5,rich:.5},busy:s=>Xn(s,[[0,1],[.2,.6],[.5,1],[.72,.4]]),gen:()=>1},river:{name:"The Harbour",mix:{tourist:2,jogger:3,rich:1,oldlady:1},busy:s=>Xn(s,[[0,.6],[.5,.8],[.72,.2]]),gen:()=>1.1}};function G1(s,t){return xn.areaAt?xn.areaAt(s,t):t>32?s<-47?"homes":s<-14?"market":s<30?"old":s<=84?"bars":"downtown":t<-30.5?s<-40?"park":s<=62?"station":"river":s>=-36&&s<=36?"old":t>=0?s<-70?"homes":s<-36?"market":s<=72?"bars":"downtown":s<-36?"park":s<=72?"station":"river"}function V1(s,t){const e=Of[s].mix,n=rl.reduce((r,o)=>r+(e[o]??0),0);let i=t*n;for(const r of rl)if(i-=e[r]??0,i<0)return r;return"office"}const W1=Ns,Dn={store:{x:-22,z:8.5,r:3,label:"Liquor store"},bakery:{x:0,z:8.5,r:3,label:"Bakery"},dumpster:{x:4,z:17,r:2.6,label:"Dumpster"},corner:{x:24,z:6,r:3.5,label:"Busy corner"},bin:{x:12,z:-6,r:2.5,label:"Recycling"},bench:{x:-16,z:-12,r:2.5,label:"Bench"},sprinkler:{x:-8,z:-9,r:3,label:"Sprinkler"},alley:{x:12,z:16,r:3,label:"Alley"},stash:{x:13.5,z:20,r:1.8,label:"Loose brick"},shop2:{x:-61,z:8.6,r:2.8,label:"Corner shop"},truck:{x:-46,z:-7.2,r:2.8,label:"Food truck"},bakeryBin:{x:6.8,z:9.2,r:1.8,label:"Bakery bin"},fountain:{x:-62,z:-18,r:4.2,label:"Fountain"},pigeons:{x:-57,z:-13,r:3,label:"Pigeons"},pigeons2:{x:47,z:-10,r:3,label:"Pigeons"},underpass:{x:56,z:-15,r:4,label:"Underpass"},bridge:{x:90,z:-24.5,r:3.2,label:"Under the bridge"},tvBar:{x:62,z:8.6,r:2.6,label:"Bar TV"},tvShop:{x:79,z:8.6,r:2.6,label:"Shop TV"},bin2:{x:-50,z:-6,r:2.5,label:"Recycling"},bin3:{x:66,z:-6,r:2.5,label:"Recycling"},owl:{x:76,z:46.5,r:2.8,label:"Night Owl Liquor"},dock:{x:100,z:-60.5,r:2.8,label:"Dockside Liquor"},noodle:{x:-29,z:46.5,r:2.8,label:"Noodle bar"},pizza:{x:45.5,z:-60.5,r:2.8,label:"Pizza slice"},bin4:{x:-12,z:46.4,r:2.5,label:"Recycling"},bin5:{x:20,z:-47.2,r:2.5,label:"Recycling"},pigeons3:{x:6,z:46.6,r:3,label:"Pigeons"},leaves:{x:pa[0].x,z:pa[0].z,r:2.4,label:"Leaf pile"},karaoke:{x:sl[0].x,z:sl[0].z,r:2.4,label:"Bar door"},camp:{x:53,z:-66,r:3,label:"Alley camp"}},X1={liquor:"store",corner:"shop2",truck:"truck",owl:"owl",dock:"dock",noodle:"noodle",pizza:"pizza"},q1={liquor:"Liquor store",corner:"Corner shop",truck:"Food truck",owl:"Night Owl Liquor",dock:"Dockside Liquor",noodle:"Noodle bar",pizza:"Pizza slice"},Y1=[{x:-16,z:-12},{x:-70,z:-12},{x:-54,z:-12},{x:-62,z:-25},{x:-90,z:-6.4},{x:50,z:-6.6},{x:82,z:-20},{x:100,z:-6.6},{x:-82,z:-24},{x:-104,z:-15.5},{x:-86,z:-16.2},{x:-72,z:-14},{x:-50,z:-18.5},{x:-100,z:-24.6},{x:-20,z:-28.8},{x:10,z:-28.8},{x:60,z:-28.8},{x:18,z:33.4},{x:-60,z:33.4},{x:64,z:-46.4},{x:-80,z:-46.4}],j1=2,K1=[{x:-26,z:4.8},{x:-84,z:4.8},{x:-50,z:4.8},{x:44,z:4.8},{x:66,z:4.8},{x:86,z:4.8},{x:-66,z:-6.2},{x:30,z:-6.2},{x:96,z:-6.2},{x:60,z:-19},{x:-20,z:33.4},{x:52,z:33.4},{x:70,z:46.6},{x:-50,z:46.6},{x:25,z:-60.4},{x:54,z:-64},{x:-86,z:-60.4},{x:-45.5,z:20}],Z1=1.7,J1=[{x:-22,z:10},{x:0,z:10},{x:-61,z:10},{x:42.5,z:10},{x:62,z:10},{x:99.5,z:10},{x:56,z:-9},{x:76,z:48},{x:-29,z:48},{x:49,z:48},{x:63.5,z:48},{x:100,z:-62},{x:45.5,z:-62}],$1=3.4,Bf=["bin","bin2","bin3","bin4","bin5"],Q1=["pigeons","pigeons2","pigeons3"],ty=["tvBar","tvShop"],ey=sr[0].xings,nu=[{x:-30,z:5.5},{x:-12,z:5.5},{x:8,z:5.5},{x:30,z:-5.5},{x:-26,z:-5.5},{x:-4,z:-5.5},{x:18,z:-5.5},{x:-20,z:-16},{x:-4,z:-18},{x:10,z:19},{x:14,z:12},{x:28,z:14},{x:-30,z:-12},{x:0,z:-14},{x:-98,z:6},{x:-76,z:5.5},{x:-44,z:7},{x:-58,z:-20},{x:-88,z:-16},{x:-48,z:-24},{x:40,z:6},{x:50,z:7.5},{x:68,z:5.5},{x:46,z:-14},{x:64,z:-17},{x:54,z:-20},{x:80,z:6},{x:100,z:5.5},{x:84,z:-12},{x:96,z:-22},{x:76,z:-25},{x:104,z:-14},{x:-100,z:34},{x:-70,z:46},{x:-44,z:25},{x:-30,z:34},{x:0,z:46.4},{x:22,z:34},{x:46,z:46},{x:60,z:34},{x:86,z:60},{x:104,z:46.2},{x:10,z:28},{x:-92,z:60},{x:-40,z:63},{x:-96,z:-28.8},{x:-40,z:-29},{x:0,z:-29.2},{x:44,z:-29},{x:-60,z:-47},{x:-10,z:-46.6},{x:40,z:-60.4},{x:70,z:-47},{x:108,z:-47},{x:-20,z:-66},{x:53,z:-69},{x:-76,z:-60.4},{x:-102,z:-17},{x:-74,z:-28},{x:-44,z:-12}],qi={x:-16,z:-10.6},kf=nu.length,ma=2;function Hf(s,t){return Bf.map(e=>Dn[e]).sort((e,n)=>Math.hypot(e.x-s,e.z-t)-Math.hypot(n.x-s,n.z-t))[0]}const ol=Hf(qi.x,qi.z);for(let s=1;s<=ma;s++){const t=s/(ma+1);nu.push({x:+(qi.x+(ol.x-qi.x)*t).toFixed(2),z:+(qi.z+(ol.z-qi.z)*t).toFixed(2)})}const ny=Array.from({length:ma},(s,t)=>kf+t),iy=[{z:6.2,x0:-104,x1:106},{z:7.6,x0:-104,x1:106},{z:-5.6,x0:-104,x1:106},{z:-13.8,x0:-100,x1:-40},{z:-18,x0:74,x1:106},{z:-12,x0:46,x1:70},{z:33.8,x0:-108,x1:110},{z:46.2,x0:-108,x1:110},{z:-29.4,x0:-108,x1:110},{z:-47.6,x0:-108,x1:110},{z:-60.6,x0:-108,x1:110}],sy=[...gn.flatMap(s=>s.segs.flatMap(([t,e])=>[{x:s.x-s.half-da/2,z0:t,z1:e},{x:s.x+s.half+da/2,z0:t,z1:e}])),...es.map(s=>({x:(s.x0+s.x1)/2,z0:-47.6,z1:-29.4}))],Us=[{x:-32.3,z:10,nx:0,nz:-1,label:"Pink wall, Tremont Street"},{x:-9.5,z:10,nx:0,nz:-1,label:"Teal wall, Tremont Street"},{x:15,z:14.5,nx:-1,nz:0,label:"Alley wall"},{x:52.5,z:10,nx:0,nz:-1,label:"Orange wall, Theatre District"},{x:96.5,z:10,nx:0,nz:-1,label:"Blue tower, Downtown Crossing"},{x:48,z:-22.3,nx:0,nz:1,label:"Underpass back wall"}],Gf=2.2,ry=s=>({x:Us[s].x+Us[s].nx,z:Us[s].z+Us[s].nz});function oy(s,t){return Us.findIndex(e=>Math.hypot(s-e.x,t-e.z)<=Gf)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="170",Vf=0,al=1,Wf=2,iu=1,Xf=2,Nn=3,kn=0,Fe=1,nn=2,ii=0,Ji=1,ro=2,cl=3,ll=4,qf=5,gi=100,Yf=101,jf=102,Kf=103,Zf=104,Jf=200,$f=201,Qf=202,td=203,ga=204,xa=205,ed=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,cd=213,ld=214,_a=0,va=1,ya=2,ns=3,Ma=4,Sa=5,ba=6,wa=7,xc=0,hd=1,ud=2,si=0,fd=1,dd=2,pd=3,md=4,gd=5,xd=6,_d=7,hl="attached",vd="detached",su=300,is=301,ss=302,Ea=303,Aa=304,po=306,rs=1e3,Qn=1001,oo=1002,we=1003,ru=1004,Fs=1005,ee=1006,Zr=1007,Ye=1008,Hn=1009,ou=1010,au=1011,js=1012,_c=1013,_i=1014,on=1015,vi=1016,vc=1017,yc=1018,os=1020,cu=35902,lu=1021,hu=1022,Ue=1023,uu=1024,fu=1025,$i=1026,as=1027,Mc=1028,Sc=1029,du=1030,bc=1031,wc=1033,Jr=33776,$r=33777,Qr=33778,to=33779,Ta=35840,Ra=35841,Ca=35842,Pa=35843,Ia=36196,La=37492,Da=37496,Na=37808,Ua=37809,Fa=37810,za=37811,Oa=37812,Ba=37813,ka=37814,Ha=37815,Ga=37816,Va=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,eo=36492,ja=36494,Ka=36495,pu=36283,Za=36284,Ja=36285,$a=36286,mu=2200,yd=2201,Md=2202,Ks=2300,Zs=2301,bo=2302,Yi=2400,ji=2401,ao=2402,Ec=2500,Sd=2501,bd=0,gu=1,Qa=2,wd=3200,Ed=3201,Ac=0,Ad=1,sn="",Se="srgb",Le="srgb-linear",mo="linear",te="srgb",Ei=7680,ul=519,Td=512,Rd=513,Cd=514,xu=515,Pd=516,Id=517,Ld=518,Dd=519,tc=35044,ay=35048,fl="300 es",zn=2e3,co=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dl=1234567;const ks=Math.PI/180,cs=180/Math.PI;function je(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function Tc(s,t){return(s%t+t)%t}function Nd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ud(s,t,e){return s!==t?(e-s)/(t-s):0}function Hs(s,t,e){return(1-e)*s+e*t}function Fd(s,t,e,n){return Hs(s,t,1-Math.exp(-e*n))}function zd(s,t=1){return t-Math.abs(Tc(s,t*2)-t)}function Od(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Bd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function kd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Hd(s,t){return s+Math.random()*(t-s)}function Gd(s){return s*(.5-Math.random())}function Vd(s){s!==void 0&&(dl=s);let t=dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wd(s){return s*ks}function Xd(s){return s*cs}function qd(s){return(s&s-1)===0&&s!==0}function Yd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zs={DEG2RAD:ks,RAD2DEG:cs,generateUUID:je,clamp:xe,euclideanModulo:Tc,mapLinear:Nd,inverseLerp:Ud,lerp:Hs,damp:Fd,pingpong:zd,smoothstep:Od,smootherstep:Bd,randInt:kd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Vd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:qd,ceilPowerOfTwo:Yd,floorPowerOfTwo:jd,setQuaternionFromProperEuler:Kd,normalize:Qt,denormalize:rn};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,r,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],d=i[6],_=i[1],y=i[4],v=i[7],P=i[2],E=i[5],T=i[8];return r[0]=o*x+a*_+c*P,r[3]=o*m+a*y+c*E,r[6]=o*d+a*v+c*T,r[1]=l*x+h*_+u*P,r[4]=l*m+h*y+u*E,r[7]=l*d+h*v+u*T,r[2]=f*x+p*_+g*P,r[5]=f*m+p*y+g*E,r[8]=f*d+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Nt;function _u(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zd(){const s=Js("canvas");return s.style.display="block",s}const pl={};function Os(s){s in pl||(pl[s]=!0,console.warn(s))}function Jd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $d(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kt={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===sn?mo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ml=[.64,.33,.3,.6,.15,.06],gl=[.2126,.7152,.0722],xl=[.3127,.329],_l=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[Le]:{primaries:ml,whitePoint:xl,transfer:mo,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:gl,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:ml,whitePoint:xl,transfer:te,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:gl,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});let Ai;class tp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Js("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ep=0;class vu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=je(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Eo(i[o].image)):r.push(Eo(i[o]))}else r=Eo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Eo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class _e extends Mi{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=Qn,i=Qn,r=ee,o=Ye,a=Ue,c=Hn,l=_e.DEFAULT_ANISOTROPY,h=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=je(),this.name="",this.source=new vu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=su;_e.DEFAULT_ANISOTROPY=1;class Yt{constructor(t=0,e=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(p+1)/2,P=(d+1)/2,E=(h+f)/4,T=(u+x)/4,C=(g+m)/4;return y>v&&y>P?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=T/n):v>P?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=C/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=T/r,i=C/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Yt(0,0,t,e),this.scissorTest=!1,this.viewport=new Yt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new _e(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends ip{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yu extends _e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends _e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*x,_=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,d*_);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}const v=a*_;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new R,yl=new an;class vn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),fr.subVectors(this.max,ys),Ti.subVectors(t.a,ys),Ri.subVectors(t.b,ys),Ci.subVectors(t.c,ys),qn.subVectors(Ri,Ti),Yn.subVectors(Ci,Ri),oi.subVectors(Ti,Ci);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-oi.z,oi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,oi.z,0,-oi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-oi.y,oi.x,0];return!To(e,Ti,Ri,Ci,fr)||(e=[1,0,0,0,1,0,0,0,1],!To(e,Ti,Ri,Ci,fr))?!1:(dr.crossVectors(qn,Yn),e=[dr.x,dr.y,dr.z],To(e,Ti,Ri,Ci,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new R,new R,new R,new R,new R,new R,new R,new R],Qe=new R,ur=new vn,Ti=new R,Ri=new R,Ci=new R,qn=new R,Yn=new R,oi=new R,ys=new R,fr=new R,dr=new R,ai=new R;function To(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ai.fromArray(s,r);const a=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const rp=new vn,Ms=new R,Ro=new R;class yn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Ro)),this.expandByPoint(Ms.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new R,Co=new R,pr=new R,jn=new R,Po=new R,mr=new R,Io=new R;class rr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Co.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Co);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=jn.dot(this.direction),c=-jn.dot(pr),l=jn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Co).addScaledVector(pr,f),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){Po.subVectors(e,t),mr.subVectors(n,t),Io.crossVectors(Po,mr);let o=this.direction.dot(Io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const c=a*this.direction.dot(mr.crossVectors(jn,mr));if(c<0)return null;const l=a*this.direction.dot(Po.cross(jn));if(l<0||c+l>o)return null;const h=-a*jn.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(t,e,n,i,r,o,a,c,l,h,u,f,p,g,x,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,x,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,ap)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Kn.crossVectors(n,Oe),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Kn.crossVectors(n,Oe)),Kn.normalize(),gr.crossVectors(Oe,Kn),i[0]=Kn.x,i[4]=gr.x,i[8]=Oe.x,i[1]=Kn.y,i[5]=gr.y,i[9]=Oe.y,i[2]=Kn.z,i[6]=gr.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],_=n[3],y=n[7],v=n[11],P=n[15],E=i[0],T=i[4],C=i[8],b=i[12],M=i[1],I=i[5],L=i[9],F=i[13],B=i[2],Y=i[6],H=i[10],J=i[14],k=i[3],X=i[7],rt=i[11],ft=i[15];return r[0]=o*E+a*M+c*B+l*k,r[4]=o*T+a*I+c*Y+l*X,r[8]=o*C+a*L+c*H+l*rt,r[12]=o*b+a*F+c*J+l*ft,r[1]=h*E+u*M+f*B+p*k,r[5]=h*T+u*I+f*Y+p*X,r[9]=h*C+u*L+f*H+p*rt,r[13]=h*b+u*F+f*J+p*ft,r[2]=g*E+x*M+m*B+d*k,r[6]=g*T+x*I+m*Y+d*X,r[10]=g*C+x*L+m*H+d*rt,r[14]=g*b+x*F+m*J+d*ft,r[3]=_*E+y*M+v*B+P*k,r[7]=_*T+y*I+v*Y+P*X,r[11]=_*C+y*L+v*H+P*rt,r[15]=_*b+y*F+v*J+P*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+x*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],_=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,y=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,v=h*x*l-g*u*l+g*a*p-o*x*p-h*a*d+o*u*d,P=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,E=e*_+n*y+i*v+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(x*f*r-u*m*r-x*i*p+n*m*p+u*i*d-n*f*d)*T,t[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*d+n*c*d)*T,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*T,t[4]=y*T,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*T,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*d-e*c*d)*T,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*p+e*c*p)*T,t[8]=v*T,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*d-e*u*d)*T,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*d+e*a*d)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*T,t[12]=P*T,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,_=c*l,y=c*h,v=c*u,P=n.x,E=n.y,T=n.z;return i[0]=(1-(x+d))*P,i[1]=(p+v)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(f+d))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+y)*T,i[9]=(m-_)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const l=1/r,h=1/o,u=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=zn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===zn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===co)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=zn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,p=(n+i)*h;let g,x;if(a===zn)g=(o+r)*u,x=-2*u;else if(a===co)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new R,tn=new Rt,op=new R(0,0,0),ap=new R(1,1,1),Kn=new R,gr=new R,Oe=new R,Ml=new Rt,Sl=new an;class cn{constructor(t=0,e=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cp=0;const bl=new R,Ii=new an,Rn=new Rt,xr=new R,Ss=new R,lp=new R,hp=new an,wl=new R(1,0,0),El=new R(0,1,0),Al=new R(0,0,1),Tl={type:"added"},up={type:"removed"},Li={type:"childadded",child:null},Lo={type:"childremoved",child:null};class le extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new R,e=new cn,n=new an,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Nt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Ss,xr,this.up):Rn.lookAt(xr,Ss,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(up),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}le.DEFAULT_UP=new R(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new R,Cn=new R,Do=new R,Pn=new R,Di=new R,Ni=new R,Rl=new R,No=new R,Uo=new R,Fo=new R,zo=new Yt,Oo=new Yt,Bo=new Yt;class qe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){en.subVectors(i,e),Cn.subVectors(n,e),Do.subVectors(t,e);const o=en.dot(en),a=en.dot(Cn),c=en.dot(Do),l=Cn.dot(Cn),h=Cn.dot(Do),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return zo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),zo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(zo,r.x),o.addScaledVector(Oo,r.y),o.addScaledVector(Bo,r.z),o}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),Cn.subVectors(t,e),en.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),en.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Di.subVectors(i,n),Ni.subVectors(r,n),No.subVectors(t,n);const c=Di.dot(No),l=Ni.dot(No);if(c<=0&&l<=0)return e.copy(n);Uo.subVectors(t,i);const h=Di.dot(Uo),u=Ni.dot(Uo);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Di,o);Fo.subVectors(t,r);const p=Di.dot(Fo),g=Ni.dot(Fo);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ni,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Rl.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Rl,a);const d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Di,o).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ko(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=kt.workingColorSpace){if(t=Tc(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ko(o,r,t+1/3),this.g=ko(o,r,t),this.b=ko(o,r,t-1/3)}return kt.toWorkingColorSpace(this,i),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return kt.fromWorkingColorSpace(Re.copy(this),t),Math.round(xe(Re.r*255,0,255))*65536+Math.round(xe(Re.g*255,0,255))*256+Math.round(xe(Re.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,r=Re.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Se){kt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(_r);const n=Hs(Zn.h,_r.h,e),i=Hs(Zn.s,_r.s,e),r=Hs(Zn.l,_r.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Mt;Mt.NAMES=Mu;let fp=0;class Ke extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=je(),this.name="",this.blending=Ji,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=xa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends Ke{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new R,vr=new et;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class Cc extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Su extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bt extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dp=0;const Ve=new Rt,Ho=new le,Ui=new R,Be=new vn,bs=new vn,Me=new R;class me extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=je(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?Su:Cc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Be.min,bs.min),Be.expandByPoint(Me),Me.addVectors(Be.max,bs.max),Be.expandByPoint(Me)):(Be.expandByPoint(bs.min),Be.expandByPoint(bs.max))}Be.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Me.fromBufferAttribute(a,l),c&&(Ui.fromBufferAttribute(t,l),Me.add(Ui)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new R,c[C]=new R;const l=new R,h=new R,u=new R,f=new et,p=new et,g=new et,x=new R,m=new R;function d(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(x),a[b].add(x),a[M].add(x),c[C].add(m),c[b].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,b=_.length;C<b;++C){const M=_[C],I=M.start,L=M.count;for(let F=I,B=I+L;F<B;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new R,v=new R,P=new R,E=new R;function T(C){P.fromBufferAttribute(i,C),E.copy(P);const b=a[C];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(E,b);const I=v.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,I)}for(let C=0,b=_.length;C<b;++C){const M=_[C],I=M.start,L=M.count;for(let F=I,B=I+L;F<B;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Ee(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new Rt,ci=new rr,yr=new yn,Pl=new R,Mr=new R,Sr=new R,br=new R,Go=new R,wr=new R,Il=new R,Er=new R;class ne extends le{constructor(t=new me,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Go.fromBufferAttribute(u,t),o?wr.addScaledVector(Go,h):wr.addScaledVector(Go.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(yr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(yr,Pl)===null||ci.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Cl.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,P=y;v<P;v+=3){const E=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);i=Ar(this,d,t,n,l,h,u,E,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Ar(this,o,t,n,l,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,P=y;v<P;v+=3){const E=v,T=v+1,C=v+2;i=Ar(this,d,t,n,l,h,u,E,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=m,y=m+1,v=m+2;i=Ar(this,o,t,n,l,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function pp(s,t,e,n,i,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===kn,a),c===null)return null;Er.copy(a),Er.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:s}}function Ar(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Mr),s.getVertexPosition(c,Sr),s.getVertexPosition(l,br);const h=pp(s,t,e,n,Mr,Sr,br,Il);if(h){const u=new R;qe.getBarycoord(Il,Mr,Sr,br,u),i&&(h.uv=qe.getInterpolatedAttribute(i,a,c,l,u,new et)),r&&(h.uv1=qe.getInterpolatedAttribute(r,a,c,l,u,new et)),o&&(h.normal=qe.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};qe.getNormal(Mr,Sr,br,f.normal),h.face=f,h.barycoord=u}return h}class ln extends me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function g(x,m,d,_,y,v,P,E,T,C,b){const M=v/T,I=P/C,L=v/2,F=P/2,B=E/2,Y=T+1,H=C+1;let J=0,k=0;const X=new R;for(let rt=0;rt<H;rt++){const ft=rt*I-F;for(let It=0;It<Y;It++){const jt=It*M-L;X[x]=jt*_,X[m]=ft*y,X[d]=B,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[d]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(It/T),u.push(1-rt/C),J+=1}}for(let rt=0;rt<C;rt++)for(let ft=0;ft<T;ft++){const It=f+ft+Y*rt,jt=f+ft+Y*(rt+1),q=f+(ft+1)+Y*(rt+1),tt=f+(ft+1)+Y*rt;c.push(It,jt,tt),c.push(jt,q,tt),k+=6}a.addGroup(p,k,b),p+=k,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=ls(s[e]);for(const i in n)t[i]=n[i]}return t}function mp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function bu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const gp={clone:ls,merge:Pe};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Ke{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wu extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new R,Ll=new et,Dl=new et;class Ne extends wu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,Ll,Dl),e.subVectors(Dl,Ll)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,zi=1;class vp extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ne(Fi,zi,t,e);i.layers=this.layers,this.add(i);const r=new Ne(Fi,zi,t,e);r.layers=this.layers,this.add(r);const o=new Ne(Fi,zi,t,e);o.layers=this.layers,this.add(o);const a=new Ne(Fi,zi,t,e);a.layers=this.layers,this.add(a);const c=new Ne(Fi,zi,t,e);c.layers=this.layers,this.add(c);const l=new Ne(Fi,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends _e{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yp extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Eu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ln(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ii});r.uniforms.tEquirect.value=e;const o=new ne(i,r),a=e.minFilter;return e.minFilter===Ye&&(e.minFilter=ee),new vp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Vo=new R,Mp=new R,Sp=new Nt;class di{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vo.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sp.getNormalMatrix(t),i=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new yn,Tr=new R;class Pc{constructor(t=new di,e=new di,n=new di,i=new di,r=new di,o=new di){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],x=i[10],m=i[11],d=i[12],_=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+o,f+h,m+g,v+_).normalize(),n[3].setComponents(c-o,f-h,m-g,v-_).normalize(),n[4].setComponents(c-a,f-u,m-x,v-y).normalize(),e===zn)n[5].setComponents(c+a,f+u,m+x,v+y).normalize();else if(e===co)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Tr.x=i.normal.x>0?t.max.x:t.min.x,Tr.y=i.normal.y>0?t.max.y:t.min.y,Tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function bp(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class hs extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const _=d*f-o;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<a;_++){const y=_+l*d,v=_+l*(d+1),P=_+1+l*(d+1),E=_+1+l*d;p.push(y,v,E),p.push(v,P,E)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:wp,alphahash_pars_fragment:Ep,alphamap_fragment:Ap,alphamap_pars_fragment:Tp,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Pp,aomap_pars_fragment:Ip,batching_pars_vertex:Lp,batching_vertex:Dp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:Fp,iridescence_fragment:zp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Gp,color_fragment:Vp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:qp,common:Yp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Jp,emissivemap_fragment:$p,emissivemap_pars_fragment:Qp,colorspace_fragment:tm,colorspace_pars_fragment:em,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:cm,fog_fragment:lm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:fm,lights_lambert_fragment:dm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:vm,lights_phong_pars_fragment:ym,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:bm,lights_fragment_maps:wm,lights_fragment_end:Em,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Pm,map_pars_fragment:Im,map_particle_fragment:Lm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Fm,morphcolor_vertex:zm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:Hm,normal_fragment_maps:Gm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Zm,opaque_fragment:Jm,packing:$m,premultiplied_alpha_fragment:Qm,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:o0,shadowmap_vertex:a0,shadowmask_pars_fragment:c0,skinbase_vertex:l0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:f0,specularmap_fragment:d0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:x0,transmission_pars_fragment:_0,uv_pars_fragment:v0,uv_pars_vertex:y0,uv_vertex:M0,worldpos_vertex:S0,background_vert:b0,background_frag:w0,backgroundCube_vert:E0,backgroundCube_frag:A0,cube_vert:T0,cube_frag:R0,depth_vert:C0,depth_frag:P0,distanceRGBA_vert:I0,distanceRGBA_frag:L0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:F0,meshbasic_vert:z0,meshbasic_frag:O0,meshlambert_vert:B0,meshlambert_frag:k0,meshmatcap_vert:H0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:j0,meshtoon_vert:K0,meshtoon_frag:Z0,points_vert:J0,points_frag:$0,shadow_vert:Q0,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},st={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},dn={basic:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Mt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Pe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Pe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Mt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Pe([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Pe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Pe([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Pe([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Pe([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Pe([st.lights,st.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};dn.physical={uniforms:Pe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Rr={r:0,b:0,g:0},hi=new cn,ig=new Rt;function sg(s,t,e,n,i,r,o){const a=new Mt(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1;const v=g(_);v===null?d(a,c):v&&v.isColor&&(d(v,1),y=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===po)?(h===void 0&&(h=new ne(new ln(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:ls(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(hi)),h.material.toneMapped=kt.getTransfer(v.colorSpace)!==te,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ne(new hs(2,2),new _n({name:"BackgroundMaterial",uniforms:ls(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=kt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,y){_.getRGB(Rr,bu(s)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(a,c)},render:x,addToRenderList:m}}function rg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,I,L,F,B){let Y=!1;const H=u(F,L,I);r!==H&&(r=H,l(r.object)),Y=p(M,F,L,B),Y&&g(M,F,L,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(M,I,L,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,L){const F=L.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let Y=B[I.id];Y===void 0&&(Y={},B[I.id]=Y);let H=Y[F];return H===void 0&&(H=f(c()),Y[F]=H),H}function f(M){const I=[],L=[],F=[];for(let B=0;B<e;B++)I[B]=0,L[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,I,L,F){const B=r.attributes,Y=I.attributes;let H=0;const J=L.getAttributes();for(const k in J)if(J[k].location>=0){const rt=B[k];let ft=Y[k];if(ft===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(M,I,L,F){const B={},Y=I.attributes;let H=0;const J=L.getAttributes();for(const k in J)if(J[k].location>=0){let rt=Y[k];rt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),B[k]=ft,H++}r.attributes=B,r.attributesNum=H,r.index=F}function x(){const M=r.newAttributes;for(let I=0,L=M.length;I<L;I++)M[I]=0}function m(M){d(M,0)}function d(M,I){const L=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;L[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),B[M]!==I&&(s.vertexAttribDivisor(M,I),B[M]=I)}function _(){const M=r.newAttributes,I=r.enabledAttributes;for(let L=0,F=I.length;L<F;L++)I[L]!==M[L]&&(s.disableVertexAttribArray(L),I[L]=0)}function y(M,I,L,F,B,Y,H){H===!0?s.vertexAttribIPointer(M,I,L,B,Y):s.vertexAttribPointer(M,I,L,F,B,Y)}function v(M,I,L,F){x();const B=F.attributes,Y=L.getAttributes(),H=I.defaultAttributeValues;for(const J in Y){const k=Y[J];if(k.location>=0){let X=B[J];if(X===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const rt=X.normalized,ft=X.itemSize,It=t.get(X);if(It===void 0)continue;const jt=It.buffer,q=It.type,tt=It.bytesPerElement,gt=q===s.INT||q===s.UNSIGNED_INT||X.gpuType===_c;if(X.isInterleavedBufferAttribute){const Q=X.data,dt=Q.stride,At=X.offset;if(Q.isInstancedInterleavedBuffer){for(let Ut=0;Ut<k.locationSize;Ut++)d(k.location+Ut,Q.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ut=0;Ut<k.locationSize;Ut++)m(k.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Ut=0;Ut<k.locationSize;Ut++)y(k.location+Ut,ft/k.locationSize,q,rt,dt*tt,(At+ft/k.locationSize*Ut)*tt,gt)}else{if(X.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)d(k.location+Q,X.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Q=0;Q<k.locationSize;Q++)y(k.location+Q,ft/k.locationSize,q,rt,ft*tt,ft/k.locationSize*Q*tt,gt)}}else if(H!==void 0){const rt=H[J];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(k.location,rt);break;case 3:s.vertexAttrib3fv(k.location,rt);break;case 4:s.vertexAttrib4fv(k.location,rt);break;default:s.vertexAttrib1fv(k.location,rt)}}}}_()}function P(){C();for(const M in n){const I=n[M];for(const L in I){const F=I[L];for(const B in F)h(F[B].object),delete F[B];delete I[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const L in I){const F=I[L];for(const B in F)h(F[B].object),delete F[B];delete I[L]}delete n[M.id]}function T(M){for(const I in n){const L=n[I];if(L[M.id]===void 0)continue;const F=L[M.id];for(const B in F)h(F[B].object),delete F[B];delete L[M.id]}}function C(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function og(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ag(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Ue&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Hn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==on&&!C)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function cg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new di,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,y=_*4;let v=d.clippingState||null;c.value=v,v=h(g,f,y,p);for(let P=0;P!==y;++P)v[P]=e[P];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function lg(s){let t=new WeakMap;function e(o,a){return a===Ea?o.mapping=is:a===Aa&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===Aa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yp(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class go extends wu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ki=4,Nl=[.125,.215,.35,.446,.526,.582],xi=20,Wo=new go,Ul=new Mt;let Xo=null,qo=0,Yo=0,jo=!1;const pi=(1+Math.sqrt(5))/2,Oi=1/pi,Fl=[new R(-pi,Oi,0),new R(pi,Oi,0),new R(-Oi,0,pi),new R(Oi,0,pi),new R(0,pi,-Oi),new R(0,pi,Oi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=jo,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ee,minFilter:ee,generateMipmaps:!1,type:vi,format:Ue,colorSpace:Le,depthBuffer:!1},i=Ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(r)),this._blurMaterial=ug(r,t,e)}return i}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,i){const a=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ul),h.toneMapping=si,h.autoClear=!1;const p=new mn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new ne(new ln,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ul),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):_===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const y=this._cubeSize;Cr(i,_*y,d>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===is||t.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fl[(i-r-1)%Fl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ne(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const d=[];let _=0;for(let T=0;T<xi;++T){const C=T/x,b=Math.exp(-C*C/2);d.push(b),T===0?_+=b:T<m&&(_+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[i],P=3*v*(i>y-Ki?i-y+Ki:0),E=4*(this._cubeSize-v);Cr(e,P,E,3*v,2*v),c.setRenderTarget(e),c.render(u,Wo)}}function hg(s){const t=[],e=[],n=[];let i=s;const r=s-Ki+1+Nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ki?c=Nl[o-s+Ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,_=new Float32Array(x*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,C=E>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(b,x*g*E),y.set(f,m*g*E);const M=[E,E,E,E,E,E];v.set(M,d*g*E)}const P=new me;P.setAttribute("position",new Ee(_,x)),P.setAttribute("uv",new Ee(y,m)),P.setAttribute("faceIndex",new Ee(v,d)),t.push(P),i>Ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ol(s,t,e){const n=new Gn(s,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ug(s,t,e){const n=new Float32Array(xi),i=new R(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Bl(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function kl(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ea||c===Aa,h=c===is||c===ss;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zl(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new zl(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function dg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pg(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let y=0,v=_.length;y<v;y+=3){const P=_[y+0],E=_[y+1],T=_[y+2];f.push(P,E,E,T,T,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const P=y+0,E=y+1,T=y+2;f.push(P,E,E,T,T,P)}}else return;const m=new(_u(f)?Su:Cc)(f,1);m.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function mg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*x[_];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xg(s,t,e){const n=new WeakMap,i=new Yt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*P*4*u),T=new yu(E,v,P,u);T.type=on,T.needsUpdate=!0;const C=y*4;for(let M=0;M<u;M++){const I=m[M],L=d[M],F=_[M],B=v*P*4*M;for(let Y=0;Y<I.count;Y++){const H=Y*C;p===!0&&(i.fromBufferAttribute(I,Y),E[B+H+0]=i.x,E[B+H+1]=i.y,E[B+H+2]=i.z,E[B+H+3]=0),g===!0&&(i.fromBufferAttribute(L,Y),E[B+H+4]=i.x,E[B+H+5]=i.y,E[B+H+6]=i.z,E[B+H+7]=0),x===!0&&(i.fromBufferAttribute(F,Y),E[B+H+8]=i.x,E[B+H+9]=i.y,E[B+H+10]=i.z,E[B+H+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new et(v,P)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function _g(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Lc extends _e{constructor(t,e,n,i,r,o,a,c,l,h=$i){if(h!==$i&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=_i),n===void 0&&h===as&&(n=os),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=c!==void 0?c:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tu=new _e,Hl=new Lc(1,1),Ru=new yu,Cu=new sp,Pu=new Eu,Gl=[],Vl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function ps(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Gl[i];if(r===void 0&&(r=new Float32Array(i),Gl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xo(s,t){let e=Vl[t];e===void 0&&(e=new Int32Array(t),Vl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function Mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function bg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;ql.set(n),s.uniformMatrix2fv(this.addr,!1,ql),ye(e,n)}}function wg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Xl.set(n),s.uniformMatrix3fv(this.addr,!1,Xl),ye(e,n)}}function Eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Wl.set(n),s.uniformMatrix4fv(this.addr,!1,Wl),ye(e,n)}}function Ag(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Pg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function Ng(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hl.compareFunction=xu,r=Hl):r=Tu,e.setTexture2D(t||r,i)}function Ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cu,i)}function Fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pu,i)}function zg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ru,i)}function Og(s){switch(s){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return wg;case 35676:return Eg;case 5124:case 35670:return Ag;case 35667:case 35671:return Tg;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return zg}}function Bg(s,t){s.uniform1fv(this.addr,t)}function kg(s,t){const e=ps(t,this.size,2);s.uniform2fv(this.addr,e)}function Hg(s,t){const e=ps(t,this.size,3);s.uniform3fv(this.addr,e)}function Gg(s,t){const e=ps(t,this.size,4);s.uniform4fv(this.addr,e)}function Vg(s,t){const e=ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Wg(s,t){const e=ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Xg(s,t){const e=ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function qg(s,t){s.uniform1iv(this.addr,t)}function Yg(s,t){s.uniform2iv(this.addr,t)}function jg(s,t){s.uniform3iv(this.addr,t)}function Kg(s,t){s.uniform4iv(this.addr,t)}function Zg(s,t){s.uniform1uiv(this.addr,t)}function Jg(s,t){s.uniform2uiv(this.addr,t)}function $g(s,t){s.uniform3uiv(this.addr,t)}function Qg(s,t){s.uniform4uiv(this.addr,t)}function tx(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Tu,r[o])}function ex(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Cu,r[o])}function nx(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pu,r[o])}function ix(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ru,r[o])}function sx(s){switch(s){case 5126:return Bg;case 35664:return kg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return jg;case 35669:case 35673:return Kg;case 5125:return Zg;case 36294:return Jg;case 36295:return $g;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}class rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}}class ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sx(e.type)}}class ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Yl(s,t){s.seq.push(t),s.map[t.id]=t}function cx(s,t,e){const n=s.name,i=n.length;for(Ko.lastIndex=0;;){const r=Ko.exec(n),o=Ko.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yl(e,l===void 0?new rx(a,s,t):new ox(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ax(a),Yl(e,u)),e=u}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);cx(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function jl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lx=37297;let hx=0;function ux(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Kl=new Nt;function fx(s){kt._getMatrix(Kl,kt.workingColorSpace,s);const t=`mat3( ${Kl.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(s)){case mo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Zl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ux(s.getShaderSource(t),o)}else return i}function dx(s,t){const e=fx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function px(s,t){let e;switch(t){case fd:e="Linear";break;case dd:e="Reinhard";break;case pd:e="Cineon";break;case md:e="ACESFilmic";break;case xd:e="AgX";break;case _d:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new R;function mx(){kt.getLuminanceCoefficients(Pr);const s=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function xx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Bs(s){return s!==""}function Jl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $l(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(s){return s.replace(vx,Mx)}const yx=new Map;function Mx(s,t){let e=zt[t];if(e===void 0){const n=yx.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}const Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(s){return s.replace(Sx,bx)}function bx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function th(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ex(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ax(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Tx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xc:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function Rx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cx(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wx(e),l=Ex(e),h=Ax(e),u=Tx(e),f=Rx(e),p=gx(e),g=xx(r),x=i.createProgram();let m,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),d.length>0&&(d+=`
`)):(m=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),d=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?zt.tonemapping_pars_fragment:"",e.toneMapping!==si?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=ec(o),o=Jl(o,e),o=$l(o,e),a=ec(a),a=Jl(a,e),a=$l(a,e),o=Ql(o),a=Ql(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=_+m+o,v=_+d+a,P=jl(i,i.VERTEX_SHADER,y),E=jl(i,i.FRAGMENT_SHADER,v);i.attachShader(x,P),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(I){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(P).trim(),B=i.getShaderInfoLog(E).trim();let Y=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,E);else{const J=Zl(i,P,"vertex"),k=Zl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+J+`
`+k)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||B==="")&&(H=!1);H&&(I.diagnostics={runnable:Y,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:d}})}i.deleteShader(P),i.deleteShader(E),C=new no(i,x),b=_x(i,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,lx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}let Px=0;class Ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lx(t),e.set(t,n)),n}}class Lx{constructor(t){this.id=Px++,this.code=t,this.usedTimes=0}}function Dx(s,t,e,n,i,r,o){const a=new Rc,c=new Ix,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,L,F){const B=L.fog,Y=F.geometry,H=b.isMeshStandardMaterial?L.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),k=J&&J.mapping===po?J.image.height:null,X=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=rt!==void 0?rt.length:0;let It=0;Y.morphAttributes.position!==void 0&&(It=1),Y.morphAttributes.normal!==void 0&&(It=2),Y.morphAttributes.color!==void 0&&(It=3);let jt,q,tt,gt;if(X){const $t=dn[X];jt=$t.vertexShader,q=$t.fragmentShader}else jt=b.vertexShader,q=b.fragmentShader,c.update(b),tt=c.getVertexShaderID(b),gt=c.getFragmentShaderID(b);const Q=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,Ut=F.isBatchedMesh===!0,he=!!b.map,Wt=!!b.matcap,de=!!J,z=!!b.aoMap,He=!!b.lightMap,Ht=!!b.bumpMap,Gt=!!b.normalMap,Et=!!b.displacementMap,re=!!b.emissiveMap,wt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,O=b.clearcoat>0,K=b.dispersion>0,$=b.iridescence>0,j=b.sheen>0,St=b.transmission>0,at=S&&!!b.anisotropyMap,ut=O&&!!b.clearcoatMap,Xt=O&&!!b.clearcoatNormalMap,nt=O&&!!b.clearcoatRoughnessMap,pt=$&&!!b.iridescenceMap,Tt=$&&!!b.iridescenceThicknessMap,Ct=j&&!!b.sheenColorMap,mt=j&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Ft=!!b.specularColorMap,ie=!!b.specularIntensityMap,D=St&&!!b.transmissionMap,ot=St&&!!b.thicknessMap,W=!!b.gradientMap,Z=!!b.alphaMap,ht=b.alphaTest>0,ct=!!b.alphaHash,Lt=!!b.extensions;let fe=si;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(fe=s.toneMapping);const Ae={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:q,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Le,alphaToCoverage:!!b.alphaToCoverage,map:he,matcap:Wt,envMap:de,envMapMode:de&&J.mapping,envMapCubeUVHeight:k,aoMap:z,lightMap:He,bumpMap:Ht,normalMap:Gt,displacementMap:f&&Et,emissiveMap:re,normalMapObjectSpace:Gt&&b.normalMapType===Ad,normalMapTangentSpace:Gt&&b.normalMapType===Ac,metalnessMap:wt,roughnessMap:A,anisotropy:S,anisotropyMap:at,clearcoat:O,clearcoatMap:ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:nt,dispersion:K,iridescence:$,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:j,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Vt,specularColorMap:Ft,specularIntensityMap:ie,transmission:St,transmissionMap:D,thicknessMap:ot,gradientMap:W,opaque:b.transparent===!1&&b.blending===Ji&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:ct,combine:b.combine,mapUv:he&&x(b.map.channel),aoMapUv:z&&x(b.aoMap.channel),lightMapUv:He&&x(b.lightMap.channel),bumpMapUv:Ht&&x(b.bumpMap.channel),normalMapUv:Gt&&x(b.normalMap.channel),displacementMapUv:Et&&x(b.displacementMap.channel),emissiveMapUv:re&&x(b.emissiveMap.channel),metalnessMapUv:wt&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:at&&x(b.anisotropyMap.channel),clearcoatMapUv:ut&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(b.sheenRoughnessMap.channel),specularMapUv:Vt&&x(b.specularMap.channel),specularColorMapUv:Ft&&x(b.specularColorMap.channel),specularIntensityMapUv:ie&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:ot&&x(b.thicknessMap.channel),alphaMapUv:Z&&x(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Gt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(he||Z),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:dt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:he&&b.map.isVideoTexture===!0&&kt.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&kt.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===nn,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Lt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&b.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=g[b.type];let I;if(M){const L=dn[M];I=gp.clone(L.uniforms)}else I=b.uniforms;return I}function P(b,M){let I;for(let L=0,F=h.length;L<F;L++){const B=h[L];if(B.cacheKey===M){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Cx(s,M,b,r),h.push(I)),I}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function Nx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ux(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function eh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,g,x,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){const d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,x,m){const d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Ux),n.length>1&&n.sort(f||eh),i.length>1&&i.sort(f||eh)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Fx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new nh,s.set(n,[o])):i>=r.length?(o=new nh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Mt};break;case"SpotLight":e={position:new R,direction:new R,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Ox(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bx=0;function kx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hx(s){const t=new zx,e=Ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Rt,o=new Rt;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,_=0,y=0,v=0,P=0,E=0,T=0;l.sort(kx);for(let b=0,M=l.length;b<M;b++){const I=l[b],L=I.color,F=I.intensity,B=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=L.r*F,u+=L.g*F,f+=L.b*F;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],F);T++}else if(I.isDirectionalLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,k=e.get(I);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=I.shadow.matrix,_++}n.directional[p]=H,p++}else if(I.isSpotLight){const H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(L).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[x]=H;const J=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=J.matrix,I.castShadow){const k=e.get(I);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=Y,v++}x++}else if(I.isRectAreaLight){const H=t.get(I);H.color.copy(L).multiplyScalar(F),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const J=I.shadow,k=e.get(I);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=H,g++}else if(I.isHemisphereLight){const H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(F),H.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[d]=H,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=T,n.version=Bx++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,_=l.length;d<_;d++){const y=l[d];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function ih(s){const t=new Hx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Gx(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ih(s),t.set(i,[a])):r>=o.length?(a=new ih(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vx extends Ke{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wx extends Ke{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yx(s,t,e){let n=new Pc;const i=new et,r=new et,o=new Yt,a=new Vx({depthPacking:Ed}),c=new Wx,l={},h=e.maxTextureSize,u={[kn]:Fe,[Fe]:kn,[nn]:nn},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Xx,fragmentShader:qx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let d=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ii),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=d!==Nn&&this.type===Nn,B=d===Nn&&this.type!==Nn;for(let Y=0,H=E.length;Y<H;Y++){const J=E[Y],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||F===!0||B===!0){const ft=this.type!==Nn?{minFilter:we,magFilter:we}:{};k.map!==null&&k.map.dispose(),k.map=new Gn(i.x,i.y,ft),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const rt=k.getViewportCount();for(let ft=0;ft<rt;ft++){const It=k.getViewport(ft);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),L.viewport(o),k.updateMatrices(J,ft),n=k.getFrustum(),v(T,C,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Nn&&_(k,C),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,I)};function _(E,T){const C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,C,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,C,p,x,null)}function y(E,T,C,b){let M=null;const I=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=M.uuid,F=T.uuid;let B=l[L];B===void 0&&(B={},l[L]=B);let Y=B[F];Y===void 0&&(Y=M.clone(),B[F]=Y,T.addEventListener("dispose",P)),M=Y}if(M.visible=T.visible,M.wireframe=T.wireframe,b===Nn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=C}return M}function v(E,T,C,b,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=t.update(E),B=E.material;if(Array.isArray(B)){const Y=F.groups;for(let H=0,J=Y.length;H<J;H++){const k=Y[H],X=B[k.materialIndex];if(X&&X.visible){const rt=y(E,X,b,M);E.onBeforeShadow(s,E,T,C,F,rt,k),s.renderBufferDirect(C,null,F,rt,E,k),E.onAfterShadow(s,E,T,C,F,rt,k)}}}else if(B.visible){const Y=y(E,B,b,M);E.onBeforeShadow(s,E,T,C,F,Y,null),s.renderBufferDirect(C,null,F,Y,E,null),E.onAfterShadow(s,E,T,C,F,Y,null)}}const L=E.children;for(let F=0,B=L.length;F<B;F++)v(L[F],T,C,b,M)}function P(E){E.target.removeEventListener("dispose",P);for(const C in l){const b=l[C],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const jx={[_a]:va,[ya]:ba,[Ma]:wa,[ns]:Sa,[va]:_a,[ba]:ya,[wa]:Ma,[Sa]:ns};function Kx(s,t){function e(){let D=!1;const ot=new Yt;let W=null;const Z=new Yt(0,0,0,0);return{setMask:function(ht){W!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,Lt,fe,Ae){Ae===!0&&(ht*=fe,ct*=fe,Lt*=fe),ot.set(ht,ct,Lt,fe),Z.equals(ot)===!1&&(s.clearColor(ht,ct,Lt,fe),Z.copy(ot))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,W=null,Z=null,ht=null;return{setReversed:function(ct){if(ot!==ct){const Lt=t.get("EXT_clip_control");ot?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const fe=ht;ht=null,this.setClear(fe)}ot=ct},getReversed:function(){return ot},setTest:function(ct){ct?Q(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(ct){W!==ct&&!D&&(s.depthMask(ct),W=ct)},setFunc:function(ct){if(ot&&(ct=jx[ct]),Z!==ct){switch(ct){case _a:s.depthFunc(s.NEVER);break;case va:s.depthFunc(s.ALWAYS);break;case ya:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(ot&&(ct=1-ct),s.clearDepth(ct),ht=ct)},reset:function(){D=!1,W=null,Z=null,ht=null,ot=!1}}}function i(){let D=!1,ot=null,W=null,Z=null,ht=null,ct=null,Lt=null,fe=null,Ae=null;return{setTest:function($t){D||($t?Q(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function($t){ot!==$t&&!D&&(s.stencilMask($t),ot=$t)},setFunc:function($t,Je,wn){(W!==$t||Z!==Je||ht!==wn)&&(s.stencilFunc($t,Je,wn),W=$t,Z=Je,ht=wn)},setOp:function($t,Je,wn){(ct!==$t||Lt!==Je||fe!==wn)&&(s.stencilOp($t,Je,wn),ct=$t,Lt=Je,fe=wn)},setLocked:function($t){D=$t},setClear:function($t){Ae!==$t&&(s.clearStencil($t),Ae=$t)},reset:function(){D=!1,ot=null,W=null,Z=null,ht=null,ct=null,Lt=null,fe=null,Ae=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,y=null,v=null,P=null,E=null,T=new Mt(0,0,0),C=0,b=!1,M=null,I=null,L=null,F=null,B=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=J>=2);let X=null,rt={};const ft=s.getParameter(s.SCISSOR_BOX),It=s.getParameter(s.VIEWPORT),jt=new Yt().fromArray(ft),q=new Yt().fromArray(It);function tt(D,ot,W,Z){const ht=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<W;Lt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(ot+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ct}const gt={};gt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(ns),Ht(!1),Gt(al),Q(s.CULL_FACE),z(ii);function Q(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function dt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function At(D,ot){return u[D]!==ot?(s.bindFramebuffer(D,ot),u[D]=ot,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ot),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function Ut(D,ot){let W=p,Z=!1;if(D){W=f.get(ot),W===void 0&&(W=[],f.set(ot,W));const ht=D.textures;if(W.length!==ht.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Lt=ht.length;ct<Lt;ct++)W[ct]=s.COLOR_ATTACHMENT0+ct;W.length=ht.length,Z=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Z=!0);Z&&s.drawBuffers(W)}function he(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Wt={[gi]:s.FUNC_ADD,[Yf]:s.FUNC_SUBTRACT,[jf]:s.FUNC_REVERSE_SUBTRACT};Wt[Kf]=s.MIN,Wt[Zf]=s.MAX;const de={[Jf]:s.ZERO,[$f]:s.ONE,[Qf]:s.SRC_COLOR,[ga]:s.SRC_ALPHA,[rd]:s.SRC_ALPHA_SATURATE,[id]:s.DST_COLOR,[ed]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[xa]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[nd]:s.ONE_MINUS_DST_ALPHA,[od]:s.CONSTANT_COLOR,[ad]:s.ONE_MINUS_CONSTANT_COLOR,[cd]:s.CONSTANT_ALPHA,[ld]:s.ONE_MINUS_CONSTANT_ALPHA};function z(D,ot,W,Z,ht,ct,Lt,fe,Ae,$t){if(D===ii){x===!0&&(dt(s.BLEND),x=!1);return}if(x===!1&&(Q(s.BLEND),x=!0),D!==qf){if(D!==m||$t!==b){if((d!==gi||v!==gi)&&(s.blendEquation(s.FUNC_ADD),d=gi,v=gi),$t)switch(D){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ro:s.blendFunc(s.ONE,s.ONE);break;case cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ro:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,y=null,P=null,E=null,T.set(0,0,0),C=0,m=D,b=$t}return}ht=ht||ot,ct=ct||W,Lt=Lt||Z,(ot!==d||ht!==v)&&(s.blendEquationSeparate(Wt[ot],Wt[ht]),d=ot,v=ht),(W!==_||Z!==y||ct!==P||Lt!==E)&&(s.blendFuncSeparate(de[W],de[Z],de[ct],de[Lt]),_=W,y=Z,P=ct,E=Lt),(fe.equals(T)===!1||Ae!==C)&&(s.blendColor(fe.r,fe.g,fe.b,Ae),T.copy(fe),C=Ae),m=D,b=!1}function He(D,ot){D.side===nn?dt(s.CULL_FACE):Q(s.CULL_FACE);let W=D.side===Fe;ot&&(W=!W),Ht(W),D.blending===Ji&&D.transparent===!1?z(ii):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Gt(D){D!==Vf?(Q(s.CULL_FACE),D!==I&&(D===al?s.cullFace(s.BACK):D===Wf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),I=D}function Et(D){D!==L&&(H&&s.lineWidth(D),L=D)}function re(D,ot,W){D?(Q(s.POLYGON_OFFSET_FILL),(F!==ot||B!==W)&&(s.polygonOffset(ot,W),F=ot,B=W)):dt(s.POLYGON_OFFSET_FILL)}function wt(D){D?Q(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+Y-1),X!==D&&(s.activeTexture(D),X=D)}function S(D,ot,W){W===void 0&&(X===null?W=s.TEXTURE0+Y-1:W=X);let Z=rt[W];Z===void 0&&(Z={type:void 0,texture:void 0},rt[W]=Z),(Z.type!==D||Z.texture!==ot)&&(X!==W&&(s.activeTexture(W),X=W),s.bindTexture(D,ot||gt[D]),Z.type=D,Z.texture=ot)}function O(){const D=rt[X];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){jt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),jt.copy(D))}function mt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Vt(D,ot){let W=l.get(ot);W===void 0&&(W=new WeakMap,l.set(ot,W));let Z=W.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(ot,D.name),W.set(D,Z))}function Ft(D,ot){const Z=l.get(ot).get(D);c.get(ot)!==Z&&(s.uniformBlockBinding(ot,Z,D.__bindingPointIndex),c.set(ot,Z))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},X=null,rt={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,y=null,v=null,P=null,E=null,T=new Mt(0,0,0),C=0,b=!1,M=null,I=null,L=null,F=null,B=null,jt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:dt,bindFramebuffer:At,drawBuffers:Ut,useProgram:he,setBlending:z,setMaterial:He,setFlipSided:Ht,setCullFace:Gt,setLineWidth:Et,setPolygonOffset:re,setScissorTest:wt,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Vt,uniformBlockBinding:Ft,texStorage2D:Xt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Ct,viewport:mt,reset:ie}}function sh(s,t,e,n){const i=Zx(n);switch(e){case lu:return s*t;case uu:return s*t;case fu:return s*t*2;case Mc:return s*t/i.components*i.byteLength;case Sc:return s*t/i.components*i.byteLength;case du:return s*t*2/i.components*i.byteLength;case bc:return s*t*2/i.components*i.byteLength;case hu:return s*t*3/i.components*i.byteLength;case Ue:return s*t*4/i.components*i.byteLength;case wc:return s*t*4/i.components*i.byteLength;case Jr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qr:case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(s,16)*Math.max(t,8)/4;case Ta:case Ca:return Math.max(s,8)*Math.max(t,8)/2;case Ia:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case eo:case ja:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case pu:case Za:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ja:case $a:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zx(s){switch(s){case Hn:case ou:return{byteLength:1,components:1};case js:case au:case vi:return{byteLength:2,components:1};case vc:case yc:return{byteLength:2,components:4};case _i:case _c:case on:return{byteLength:4,components:1};case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Jx(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Js("canvas")}function x(A,S,O){let K=1;const $=wt(A);if(($.width>O||$.height>O)&&(K=O/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(K*$.width),St=Math.floor(K*$.height);u===void 0&&(u=g(j,St));const at=S?g(j,St):u;return at.width=j,at.height=St,at.getContext("2d").drawImage(A,0,0,j,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+St+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){s.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,S,O,K,$=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=S;if(S===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),S===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),S===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const St=$?mo:kt.getTransfer(K);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=St===te?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(A,S){let O;return A?S===null||S===_i||S===os?O=s.DEPTH24_STENCIL8:S===on?O=s.DEPTH32F_STENCIL8:S===js&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===os?O=s.DEPTH_COMPONENT24:S===on?O=s.DEPTH_COMPONENT32F:S===js&&(O=s.DEPTH_COMPONENT16),O}function P(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==we&&A.minFilter!==ee?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){const S=A.target;S.removeEventListener("dispose",E),C(S),S.isVideoTexture&&h.delete(S)}function T(A){const S=A.target;S.removeEventListener("dispose",T),M(S)}function C(A){const S=n.get(A);if(S.__webglInit===void 0)return;const O=A.source,K=f.get(O);if(K){const $=K[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(A),Object.keys(K).length===0&&f.delete(O)}n.remove(A)}function b(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const O=A.source,K=f.get(O);delete K[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let $=0;$<S.__webglFramebuffer[K].length;$++)s.deleteFramebuffer(S.__webglFramebuffer[K][$]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=A.textures;for(let K=0,$=O.length;K<$;K++){const j=n.get(O[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(A)}let I=0;function L(){I=0}function F(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function B(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Y(A,S){const O=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,A,S);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function H(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function J(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,S);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function k(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){tt(O,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const X={[rs]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},rt={[we]:s.NEAREST,[ru]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[ee]:s.LINEAR,[Zr]:s.LINEAR_MIPMAP_NEAREST,[Ye]:s.LINEAR_MIPMAP_LINEAR},ft={[Td]:s.NEVER,[Dd]:s.ALWAYS,[Rd]:s.LESS,[xu]:s.LEQUAL,[Cd]:s.EQUAL,[Ld]:s.GEQUAL,[Pd]:s.GREATER,[Id]:s.NOTEQUAL};function It(A,S){if(S.type===on&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ee||S.magFilter===Zr||S.magFilter===Fs||S.magFilter===Ye||S.minFilter===ee||S.minFilter===Zr||S.minFilter===Fs||S.minFilter===Ye)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,X[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,X[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,X[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,rt[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===we||S.minFilter!==Fs&&S.minFilter!==Ye||S.type===on&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function jt(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const K=S.source;let $=f.get(K);$===void 0&&($={},f.set(K,$));const j=B(S);if(j!==A.__cacheKey){$[j]===void 0&&($[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[j].usedTimes++;const St=$[A.__cacheKey];St!==void 0&&($[A.__cacheKey].usedTimes--,St.usedTimes===0&&b(S)),A.__cacheKey=j,A.__webglTexture=$[j].texture}return O}function q(A,S,O){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const $=jt(A,S),j=S.source;e.bindTexture(K,A.__webglTexture,s.TEXTURE0+O);const St=n.get(j);if(j.version!==St.__version||$===!0){e.activeTexture(s.TEXTURE0+O);const at=kt.getPrimaries(kt.workingColorSpace),ut=S.colorSpace===sn?null:kt.getPrimaries(S.colorSpace),Xt=S.colorSpace===sn||at===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let nt=x(S.image,!1,i.maxTextureSize);nt=re(S,nt);const pt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let Ct=y(S.internalFormat,pt,Tt,S.colorSpace,S.isVideoTexture);It(K,S);let mt;const Vt=S.mipmaps,Ft=S.isVideoTexture!==!0,ie=St.__version===void 0||$===!0,D=j.dataReady,ot=P(S,nt);if(S.isDepthTexture)Ct=v(S.format===as,S.type),ie&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Ct,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,nt.width,nt.height,0,pt,Tt,null));else if(S.isDataTexture)if(Vt.length>0){Ft&&ie&&e.texStorage2D(s.TEXTURE_2D,ot,Ct,Vt[0].width,Vt[0].height);for(let W=0,Z=Vt.length;W<Z;W++)mt=Vt[W],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,W,Ct,mt.width,mt.height,0,pt,Tt,mt.data);S.generateMipmaps=!1}else Ft?(ie&&e.texStorage2D(s.TEXTURE_2D,ot,Ct,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,pt,Tt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,nt.width,nt.height,0,pt,Tt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Ct,Vt[0].width,Vt[0].height,nt.depth);for(let W=0,Z=Vt.length;W<Z;W++)if(mt=Vt[W],S.format!==Ue)if(pt!==null)if(Ft){if(D)if(S.layerUpdates.size>0){const ht=sh(mt.width,mt.height,S.format,S.type);for(const ct of S.layerUpdates){const Lt=mt.data.subarray(ct*ht/mt.data.BYTES_PER_ELEMENT,(ct+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ct,mt.width,mt.height,1,pt,Lt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,nt.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ct,mt.width,mt.height,nt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,nt.depth,pt,Tt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Ct,mt.width,mt.height,nt.depth,0,pt,Tt,mt.data)}else{Ft&&ie&&e.texStorage2D(s.TEXTURE_2D,ot,Ct,Vt[0].width,Vt[0].height);for(let W=0,Z=Vt.length;W<Z;W++)mt=Vt[W],S.format!==Ue?pt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,W,Ct,mt.width,mt.height,0,pt,Tt,mt.data)}else if(S.isDataArrayTexture)if(Ft){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Ct,nt.width,nt.height,nt.depth),D)if(S.layerUpdates.size>0){const W=sh(nt.width,nt.height,S.format,S.type);for(const Z of S.layerUpdates){const ht=nt.data.subarray(Z*W/nt.data.BYTES_PER_ELEMENT,(Z+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,pt,Tt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Tt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,nt.width,nt.height,nt.depth,0,pt,Tt,nt.data);else if(S.isData3DTexture)Ft?(ie&&e.texStorage3D(s.TEXTURE_3D,ot,Ct,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Tt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,nt.width,nt.height,nt.depth,0,pt,Tt,nt.data);else if(S.isFramebufferTexture){if(ie)if(Ft)e.texStorage2D(s.TEXTURE_2D,ot,Ct,nt.width,nt.height);else{let W=nt.width,Z=nt.height;for(let ht=0;ht<ot;ht++)e.texImage2D(s.TEXTURE_2D,ht,Ct,W,Z,0,pt,Tt,null),W>>=1,Z>>=1}}else if(Vt.length>0){if(Ft&&ie){const W=wt(Vt[0]);e.texStorage2D(s.TEXTURE_2D,ot,Ct,W.width,W.height)}for(let W=0,Z=Vt.length;W<Z;W++)mt=Vt[W],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,pt,Tt,mt):e.texImage2D(s.TEXTURE_2D,W,Ct,pt,Tt,mt);S.generateMipmaps=!1}else if(Ft){if(ie){const W=wt(nt);e.texStorage2D(s.TEXTURE_2D,ot,Ct,W.width,W.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Tt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,pt,Tt,nt);m(S)&&d(K),St.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function tt(A,S,O){if(S.image.length!==6)return;const K=jt(A,S),$=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const j=n.get($);if($.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+O);const St=kt.getPrimaries(kt.workingColorSpace),at=S.colorSpace===sn?null:kt.getPrimaries(S.colorSpace),ut=S.colorSpace===sn||St===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Xt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Xt&&!nt?pt[Z]=x(S.image[Z],!0,i.maxCubemapSize):pt[Z]=nt?S.image[Z].image:S.image[Z],pt[Z]=re(S,pt[Z]);const Tt=pt[0],Ct=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),Vt=y(S.internalFormat,Ct,mt,S.colorSpace),Ft=S.isVideoTexture!==!0,ie=j.__version===void 0||K===!0,D=$.dataReady;let ot=P(S,Tt);It(s.TEXTURE_CUBE_MAP,S);let W;if(Xt){Ft&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Vt,Tt.width,Tt.height);for(let Z=0;Z<6;Z++){W=pt[Z].mipmaps;for(let ht=0;ht<W.length;ht++){const ct=W[ht];S.format!==Ue?Ct!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ct.width,ct.height,Ct,mt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Vt,ct.width,ct.height,0,Ct,mt,ct.data)}}}else{if(W=S.mipmaps,Ft&&ie){W.length>0&&ot++;const Z=wt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ct,mt,pt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,pt[Z].width,pt[Z].height,0,Ct,mt,pt[Z].data);for(let ht=0;ht<W.length;ht++){const Lt=W[ht].image[Z].image;Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Lt.width,Lt.height,Ct,mt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Vt,Lt.width,Lt.height,0,Ct,mt,Lt.data)}}else{Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,mt,pt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,Ct,mt,pt[Z]);for(let ht=0;ht<W.length;ht++){const ct=W[ht];Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Ct,mt,ct.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Vt,Ct,mt,ct.image[Z])}}}m(S)&&d(s.TEXTURE_CUBE_MAP),j.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function gt(A,S,O,K,$,j){const St=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ut=y(O.internalFormat,St,at,O.colorSpace),Xt=n.get(S),nt=n.get(O);if(nt.__renderTarget=S,!Xt.__hasExternalTextures){const pt=Math.max(1,S.width>>j),Tt=Math.max(1,S.height>>j);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,j,ut,pt,Tt,S.depth,0,St,at,null):e.texImage2D($,j,ut,pt,Tt,0,St,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Gt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,nt.__webglTexture,0,Ht(S)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,nt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(A,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,$=K&&K.isDepthTexture?K.type:null,j=v(S.stencilBuffer,$),St=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Ht(S);Gt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,j,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,A)}else{const K=S.textures;for(let $=0;$<K.length;$++){const j=K[$],St=r.convert(j.format,j.colorSpace),at=r.convert(j.type),ut=y(j.internalFormat,St,at,j.colorSpace),Xt=Ht(S);O&&Gt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,ut,S.width,S.height):Gt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const $=K.__webglTexture,j=Ht(S);if(S.depthTexture.format===$i)Gt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===as)Gt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function At(A){const S=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");dt(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),Q(S.__webglDepthbuffer[K],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Q(S.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,$)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(A,S,O){const K=n.get(A);S!==void 0&&gt(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&At(A)}function he(A){const S=A.texture,O=n.get(A),K=n.get(S);A.addEventListener("dispose",T);const $=A.textures,j=A.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ut=0;ut<S.mipmaps.length;ut++)O.__webglFramebuffer[at][ut]=s.createFramebuffer()}else O.__webglFramebuffer[at]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)O.__webglFramebuffer[at]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(St)for(let at=0,ut=$.length;at<ut;at++){const Xt=n.get($[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Gt(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const ut=$[at];O.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Xt=r.convert(ut.format,ut.colorSpace),nt=r.convert(ut.type),pt=y(ut.internalFormat,Xt,nt,ut.colorSpace,A.isXRRenderTarget===!0),Tt=Ht(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,pt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,O.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),It(s.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)gt(O.__webglFramebuffer[at][ut],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else gt(O.__webglFramebuffer[at],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(S)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,ut=$.length;at<ut;at++){const Xt=$[at],nt=n.get(Xt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),It(s.TEXTURE_2D,Xt),gt(O.__webglFramebuffer,A,Xt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Xt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),It(at,S),S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)gt(O.__webglFramebuffer[ut],A,S,s.COLOR_ATTACHMENT0,at,ut);else gt(O.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,at,0);m(S)&&d(at),e.unbindTexture()}A.depthBuffer&&At(A)}function Wt(A){const S=A.textures;for(let O=0,K=S.length;O<K;O++){const $=S[O];if(m($)){const j=_(A),St=n.get($).__webglTexture;e.bindTexture(j,St),d(j),e.unbindTexture()}}}const de=[],z=[];function He(A){if(A.samples>0){if(Gt(A)===!1){const S=A.textures,O=A.width,K=A.height;let $=s.COLOR_BUFFER_BIT;const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(A),at=S.length>1;if(at)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[ut]);const Xt=n.get(S[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,$,s.NEAREST),c===!0&&(de.length=0,z.length=0,de.push(s.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(de.push(j),z.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,St.__webglColorRenderbuffer[ut]);const Xt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ht(A){return Math.min(i.maxSamples,A.samples)}function Gt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function re(A,S){const O=A.colorSpace,K=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Le&&O!==sn&&(kt.getTransfer(O)===te?(K!==Ue||$!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Ut,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Gt}function $x(s,t){function e(n,i=sn){let r;const o=kt.getTransfer(i);if(n===Hn)return s.UNSIGNED_BYTE;if(n===vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return s.BYTE;if(n===au)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===_c)return s.INT;if(n===_i)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===vi)return s.HALF_FLOAT;if(n===lu)return s.ALPHA;if(n===hu)return s.RGB;if(n===Ue)return s.RGBA;if(n===uu)return s.LUMINANCE;if(n===fu)return s.LUMINANCE_ALPHA;if(n===$i)return s.DEPTH_COMPONENT;if(n===as)return s.DEPTH_STENCIL;if(n===Mc)return s.RED;if(n===Sc)return s.RED_INTEGER;if(n===du)return s.RG;if(n===bc)return s.RG_INTEGER;if(n===wc)return s.RGBA_INTEGER;if(n===Jr||n===$r||n===Qr||n===to)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===La)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Ua||n===Fa||n===za||n===Oa||n===Ba||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===ja||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===Za||n===Ja||n===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Qx extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new _e,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends Mi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const x=new i_,m=e.getContextAttributes();let d=null,_=null;const y=[],v=[],P=new et;let E=null;const T=new Ne;T.viewport=new Yt;const C=new Ne;C.viewport=new Yt;const b=[T,C],M=new Qx;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=y[q];return tt===void 0&&(tt=new Zo,y[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=y[q];return tt===void 0&&(tt=new Zo,y[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=y[q];return tt===void 0&&(tt=new Zo,y[q]=tt),tt.getHandSpace()};function F(q){const tt=v.indexOf(q.inputSource);if(tt===-1)return;const gt=y[tt];gt!==void 0&&(gt.update(q.inputSource,q.frame,l||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<y.length;q++){const tt=v[q];tt!==null&&(v[q]=null,y[q].disconnect(tt))}I=null,L=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,_=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Gn(p.framebufferWidth,p.framebufferHeight,{format:Ue,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,Q=null;m.depth&&(Q=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?as:$i,gt=m.stencil?os:_i);const dt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Gn(f.textureWidth,f.textureHeight,{format:Ue,type:Hn,depthTexture:new Lc(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let tt=0;tt<q.removed.length;tt++){const gt=q.removed[tt],Q=v.indexOf(gt);Q>=0&&(v[Q]=null,y[Q].disconnect(gt))}for(let tt=0;tt<q.added.length;tt++){const gt=q.added[tt];let Q=v.indexOf(gt);if(Q===-1){for(let At=0;At<y.length;At++)if(At>=v.length){v.push(gt),Q=At;break}else if(v[At]===null){v[At]=gt,Q=At;break}if(Q===-1)break}const dt=y[Q];dt&&dt.connect(gt)}}const H=new R,J=new R;function k(q,tt,gt){H.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(gt.matrixWorld);const Q=H.distanceTo(J),dt=tt.projectionMatrix.elements,At=gt.projectionMatrix.elements,Ut=dt[14]/(dt[10]-1),he=dt[14]/(dt[10]+1),Wt=(dt[9]+1)/dt[5],de=(dt[9]-1)/dt[5],z=(dt[8]-1)/dt[0],He=(At[8]+1)/At[0],Ht=Ut*z,Gt=Ut*He,Et=Q/(-z+He),re=Et*-z;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=Ut+Et,A=he+Et,S=Ht-re,O=Gt+(Q-re),K=Wt*he/A*wt,$=de*he/A*wt;q.projectionMatrix.makePerspective(S,O,K,$,wt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function X(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let tt=q.near,gt=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),M.near=C.near=T.near=tt,M.far=C.far=T.far=gt,(I!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,L=M.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const Q=q.parent,dt=M.cameras;X(M,Q);for(let At=0;At<dt.length;At++)X(dt[At],Q);dt.length===2?k(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),rt(q,M,Q)};function rt(q,tt,gt){gt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ft=null;function It(q,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Q=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let At=0;At<gt.length;At++){const Ut=gt[At];let he=null;if(p!==null)he=p.getViewport(Ut);else{const de=u.getViewSubImage(f,Ut);he=de.viewport,At===0&&(t.setRenderTargetTextures(_,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(_))}let Wt=b[At];Wt===void 0&&(Wt=new Ne,Wt.layers.enable(At),Wt.viewport=new Yt,b[At]=Wt),Wt.matrix.fromArray(Ut.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ut.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(he.x,he.y,he.width,he.height),At===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(Wt)}const dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const At=u.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&x.init(t,At,i.renderState)}}for(let gt=0;gt<y.length;gt++){const Q=v[gt],dt=y[gt];Q!==null&&dt!==void 0&&dt.update(Q,tt,l||o)}ft&&ft(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const jt=new Au;jt.setAnimationLoop(It),this.setAnimationLoop=function(q){ft=q},this.dispose=function(){}}}const ui=new cn,r_=new Rt;function o_(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bu(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,_,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Fe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Fe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=t.get(d),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,ui.copy(v),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const v=y.program;n.uniformBlockBinding(_,v)}function l(_,y){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(_,P);const E=t.render.frame;r[_.id]!==E&&(f(_),r[_.id]=E)}function h(_){const y=u();_.__bindingPointIndex=y;const v=s.createBuffer(),P=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=i[_.id],v=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,T=v.length;E<T;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,M=C.length;b<M;b++){const I=C[b];if(p(I,E,b,P)===!0){const L=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let Y=0;Y<F.length;Y++){const H=F[Y],J=x(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,L+B,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,y,v,P){const E=_.value,T=y+"_"+v;if(P[T]===void 0)return typeof E=="number"||typeof E=="boolean"?P[T]=E:P[T]=E.clone(),!0;{const C=P[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return P[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(_){const y=_.uniforms;let v=0;const P=16;for(let T=0,C=y.length;T<C;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,I=b.length;M<I;M++){const L=b[M],F=Array.isArray(L.value)?L.value:[L.value];for(let B=0,Y=F.length;B<Y;B++){const H=F[B],J=x(H),k=v%P,X=k%J.boundary,rt=k+X;v+=X,rt!==0&&P-rt<J.storage&&(v+=P-rt),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=J.storage}}}const E=v%P;return E>0&&(v+=P-E),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function d(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}class cy{constructor(t={}){const{canvas:e=Zd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let P=!1,E=0,T=0,C=null,b=-1,M=null;const I=new Yt,L=new Yt;let F=null;const B=new Mt(0);let Y=0,H=e.width,J=e.height,k=1,X=null,rt=null;const ft=new Yt(0,0,H,J),It=new Yt(0,0,H,J);let jt=!1;const q=new Pc;let tt=!1,gt=!1;const Q=new Rt,dt=new Rt,At=new R,Ut=new Yt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function de(){return C===null?k:1}let z=n;function He(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),z===null){const N="webgl2";if(z=He(N,w),z===null)throw He(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,Gt,Et,re,wt,A,S,O,K,$,j,St,at,ut,Xt,nt,pt,Tt,Ct,mt,Vt,Ft,ie,D;function ot(){Ht=new dg(z),Ht.init(),Ft=new $x(z,Ht),Gt=new ag(z,Ht,t,Ft),Et=new Kx(z,Ht),Gt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),re=new gg(z),wt=new Nx,A=new Jx(z,Ht,Et,wt,Gt,Ft,re),S=new lg(v),O=new fg(v),K=new bp(z),ie=new rg(z,K),$=new pg(z,K,re,ie),j=new _g(z,$,K,re),Ct=new xg(z,Gt,A),nt=new cg(wt),St=new Dx(v,S,O,Ht,Gt,ie,nt),at=new o_(v,wt),ut=new Fx,Xt=new Gx(Ht),Tt=new sg(v,S,O,Et,j,p,c),pt=new Yx(v,j,Gt),D=new a_(z,re,Gt,Et),mt=new og(z,Ht,re),Vt=new mg(z,Ht,re),re.programs=St.programs,v.capabilities=Gt,v.extensions=Ht,v.properties=wt,v.renderLists=ut,v.shadowMap=pt,v.state=Et,v.info=re}ot();const W=new s_(v,z);this.xr=W,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(H,J,!1))},this.getSize=function(w){return w.set(H,J)},this.setSize=function(w,N,G=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,J=N,e.width=Math.floor(w*k),e.height=Math.floor(N*k),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(H*k,J*k).floor()},this.setDrawingBufferSize=function(w,N,G){H=w,J=N,k=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,N,G,V){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,N,G,V),Et.viewport(I.copy(ft).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(It)},this.setScissor=function(w,N,G,V){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,N,G,V),Et.scissor(L.copy(It).multiplyScalar(k).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){Et.setScissorTest(jt=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){rt=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let U=!1;if(C!==null){const it=C.texture.format;U=it===wc||it===bc||it===Sc}if(U){const it=C.texture.type,lt=it===Hn||it===_i||it===js||it===os||it===vc||it===yc,xt=Tt.getClearColor(),_t=Tt.getClearAlpha(),Pt=xt.r,Dt=xt.g,vt=xt.b;lt?(g[0]=Pt,g[1]=Dt,g[2]=vt,g[3]=_t,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Pt,x[1]=Dt,x[2]=vt,x[3]=_t,z.clearBufferiv(z.COLOR,0,x))}else V|=z.COLOR_BUFFER_BIT}N&&(V|=z.DEPTH_BUFFER_BIT),G&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),Xt.dispose(),wt.dispose(),S.dispose(),O.dispose(),j.dispose(),ie.dispose(),D.dispose(),St.dispose(),W.dispose(),W.removeEventListener("sessionstart",jc),W.removeEventListener("sessionend",Kc),ri.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=re.autoReset,N=pt.enabled,G=pt.autoUpdate,V=pt.needsUpdate,U=pt.type;ot(),re.autoReset=w,pt.enabled=N,pt.autoUpdate=G,pt.needsUpdate=V,pt.type=U}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Lt(w){const N=w.target;N.removeEventListener("dispose",Lt),fe(N)}function fe(w){Ae(w),wt.remove(w)}function Ae(w){const N=wt.get(w).programs;N!==void 0&&(N.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,U,it){N===null&&(N=he);const lt=U.isMesh&&U.matrixWorld.determinant()<0,xt=yf(w,N,G,V,U);Et.setMaterial(V,lt);let _t=G.index,Pt=1;if(V.wireframe===!0){if(_t=$.getWireframeAttribute(G),_t===void 0)return;Pt=2}const Dt=G.drawRange,vt=G.attributes.position;let qt=Dt.start*Pt,se=(Dt.start+Dt.count)*Pt;it!==null&&(qt=Math.max(qt,it.start*Pt),se=Math.min(se,(it.start+it.count)*Pt)),_t!==null?(qt=Math.max(qt,0),se=Math.min(se,_t.count)):vt!=null&&(qt=Math.max(qt,0),se=Math.min(se,vt.count));const oe=se-qt;if(oe<0||oe===1/0)return;ie.setup(U,V,xt,G,_t);let De,Kt=mt;if(_t!==null&&(De=K.get(_t),Kt=Vt,Kt.setIndex(De)),U.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*de()),Kt.setMode(z.LINES)):Kt.setMode(z.TRIANGLES);else if(U.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Et.setLineWidth(bt*de()),U.isLineSegments?Kt.setMode(z.LINES):U.isLineLoop?Kt.setMode(z.LINE_LOOP):Kt.setMode(z.LINE_STRIP)}else U.isPoints?Kt.setMode(z.POINTS):U.isSprite&&Kt.setMode(z.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,En=U._multiDrawCounts,Zt=U._multiDrawCount,$e=_t?K.get(_t).bytesPerElement:1,bi=wt.get(V).currentProgram.getUniforms();for(let ze=0;ze<Zt;ze++)bi.setValue(z,"_gl_DrawID",ze),Kt.render(bt[ze]/$e,En[ze])}else if(U.isInstancedMesh)Kt.renderInstances(qt,oe,U.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,En=Math.min(G.instanceCount,bt);Kt.renderInstances(qt,oe,En)}else Kt.render(qt,oe)};function $t(w,N,G){w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=Fe,w.needsUpdate=!0,hr(w,N,G),w.side=kn,w.needsUpdate=!0,hr(w,N,G),w.side=nn):hr(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),d=Xt.get(G),d.init(N),y.push(d),G.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),w!==G&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let lt=0;lt<it.length;lt++){const xt=it[lt];$t(xt,G,U),V.add(xt)}else $t(it,G,U),V.add(it)}),y.pop(),d=null,V},this.compileAsync=function(w,N,G=null){const V=this.compile(w,N,G);return new Promise(U=>{function it(){if(V.forEach(function(lt){wt.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){U(w);return}setTimeout(it,10)}Ht.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Je=null;function wn(w){Je&&Je(w)}function jc(){ri.stop()}function Kc(){ri.start()}const ri=new Au;ri.setAnimationLoop(wn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(w){Je=w,W.setAnimationLoop(w),w===null?ri.stop():ri.start()},W.addEventListener("sessionstart",jc),W.addEventListener("sessionend",Kc),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,C),d=Xt.get(w,y.length),d.init(N),y.push(d),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(dt),gt=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,gt),m=ut.get(w,_.length),m.init(),_.push(m),W.enabled===!0&&W.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&So(it,N,-1/0,v.sortObjects)}So(w,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,rt),Wt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Wt&&Tt.addToRenderList(m,w),this.info.render.frame++,tt===!0&&nt.beginShadows();const G=d.state.shadowsArray;pt.render(G,w,N),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(d.setupLights(),N.isArrayCamera){const it=N.cameras;if(U.length>0)for(let lt=0,xt=it.length;lt<xt;lt++){const _t=it[lt];Jc(V,U,w,_t)}Wt&&Tt.render(w);for(let lt=0,xt=it.length;lt<xt;lt++){const _t=it[lt];Zc(m,w,_t,_t.viewport)}}else U.length>0&&Jc(V,U,w,N),Wt&&Tt.render(w),Zc(m,w,N);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,N),ie.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],tt===!0&&nt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function So(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){V&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const lt=j.update(w),xt=w.material;xt.visible&&m.push(w,lt,xt,G,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const lt=j.update(w),xt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ut.copy(lt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(xt)){const _t=lt.groups;for(let Pt=0,Dt=_t.length;Pt<Dt;Pt++){const vt=_t[Pt],qt=xt[vt.materialIndex];qt&&qt.visible&&m.push(w,lt,qt,G,Ut.z,vt)}}else xt.visible&&m.push(w,lt,xt,G,Ut.z,null)}}const it=w.children;for(let lt=0,xt=it.length;lt<xt;lt++)So(it[lt],N,G,V)}function Zc(w,N,G,V){const U=w.opaque,it=w.transmissive,lt=w.transparent;d.setupLightsView(G),tt===!0&&nt.setGlobalState(v.clippingPlanes,G),V&&Et.viewport(I.copy(V)),U.length>0&&lr(U,N,G),it.length>0&&lr(it,N,G),lt.length>0&&lr(lt,N,G),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Jc(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Gn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?vi:Hn,minFilter:Ye,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const it=d.state.transmissionRenderTarget[V.id],lt=V.viewport||I;it.setSize(lt.z,lt.w);const xt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(B),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Wt&&Tt.render(G);const _t=v.toneMapping;v.toneMapping=si;const Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),tt===!0&&nt.setGlobalState(v.clippingPlanes,V),lr(w,G,V),A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,qt=N.length;vt<qt;vt++){const se=N[vt],oe=se.object,De=se.geometry,Kt=se.material,bt=se.group;if(Kt.side===nn&&oe.layers.test(V.layers)){const En=Kt.side;Kt.side=Fe,Kt.needsUpdate=!0,$c(oe,G,V,De,Kt,bt),Kt.side=En,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it))}v.setRenderTarget(xt),v.setClearColor(B,Y),Pt!==void 0&&(V.viewport=Pt),v.toneMapping=_t}function lr(w,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,it=w.length;U<it;U++){const lt=w[U],xt=lt.object,_t=lt.geometry,Pt=V===null?lt.material:V,Dt=lt.group;xt.layers.test(G.layers)&&$c(xt,N,G,_t,Pt,Dt)}}function $c(w,N,G,V,U,it){w.onBeforeRender(v,N,G,V,U,it),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,N,G,V,w,it),U.transparent===!0&&U.side===nn&&U.forceSinglePass===!1?(U.side=Fe,U.needsUpdate=!0,v.renderBufferDirect(G,N,V,U,w,it),U.side=kn,U.needsUpdate=!0,v.renderBufferDirect(G,N,V,U,w,it),U.side=nn):v.renderBufferDirect(G,N,V,U,w,it),w.onAfterRender(v,N,G,V,U,it)}function hr(w,N,G){N.isScene!==!0&&(N=he);const V=wt.get(w),U=d.state.lights,it=d.state.shadowsArray,lt=U.state.version,xt=St.getParameters(w,U.state,it,N,G),_t=St.getProgramCacheKey(xt);let Pt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?O:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Lt),Pt=new Map,V.programs=Pt);let Dt=Pt.get(_t);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===lt)return tl(w,xt),Dt}else xt.uniforms=St.getUniforms(w),w.onBeforeCompile(xt,v),Dt=St.acquireProgram(xt,_t),Pt.set(_t,Dt),V.uniforms=xt.uniforms;const vt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(vt.clippingPlanes=nt.uniform),tl(w,xt),V.needsLights=Sf(w),V.lightsStateVersion=lt,V.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function Qc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=no.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function tl(w,N){const G=wt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function yf(w,N,G,V,U){N.isScene!==!0&&(N=he),A.resetTextureUnits();const it=N.fog,lt=V.isMeshStandardMaterial?N.environment:null,xt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Le,_t=(V.isMeshStandardMaterial?O:S).get(V.envMap||lt),Pt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Dt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),vt=!!G.morphAttributes.position,qt=!!G.morphAttributes.normal,se=!!G.morphAttributes.color;let oe=si;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(oe=v.toneMapping);const De=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=De!==void 0?De.length:0,bt=wt.get(V),En=d.state.lights;if(tt===!0&&(gt===!0||w!==M)){const Ge=w===M&&V.id===b;nt.setState(V,w,Ge)}let Zt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==En.state.version||bt.outputColorSpace!==xt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==_t||V.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Pt||bt.vertexTangents!==Dt||bt.morphTargets!==vt||bt.morphNormals!==qt||bt.morphColors!==se||bt.toneMapping!==oe||bt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,bt.__version=V.version);let $e=bt.currentProgram;Zt===!0&&($e=hr(V,N,U));let bi=!1,ze=!1,_s=!1;const ae=$e.getUniforms(),hn=bt.uniforms;if(Et.useProgram($e.program)&&(bi=!0,ze=!0,_s=!0),V.id!==b&&(b=V.id,ze=!0),bi||M!==w){Et.buffers.depth.getReversed()?(Q.copy(w.projectionMatrix),$d(Q),Qd(Q),ae.setValue(z,"projectionMatrix",Q)):ae.setValue(z,"projectionMatrix",w.projectionMatrix),ae.setValue(z,"viewMatrix",w.matrixWorldInverse);const Vn=ae.map.cameraPosition;Vn!==void 0&&Vn.setValue(z,At.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&ae.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ae.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ze=!0,_s=!0)}if(U.isSkinnedMesh){ae.setOptional(z,U,"bindMatrix"),ae.setOptional(z,U,"bindMatrixInverse");const Ge=U.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ae.setValue(z,"boneTexture",Ge.boneTexture,A))}U.isBatchedMesh&&(ae.setOptional(z,U,"batchingTexture"),ae.setValue(z,"batchingTexture",U._matricesTexture,A),ae.setOptional(z,U,"batchingIdTexture"),ae.setValue(z,"batchingIdTexture",U._indirectTexture,A),ae.setOptional(z,U,"batchingColorTexture"),U._colorsTexture!==null&&ae.setValue(z,"batchingColorTexture",U._colorsTexture,A));const vs=G.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&Ct.update(U,G,$e),(ze||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,ae.setValue(z,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hn.envMap.value=_t,hn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(hn.envMapIntensity.value=N.environmentIntensity),ze&&(ae.setValue(z,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&Mf(hn,_s),it&&V.fog===!0&&at.refreshFogUniforms(hn,it),at.refreshMaterialUniforms(hn,V,k,J,d.state.transmissionRenderTarget[w.id]),no.upload(z,Qc(bt),hn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(no.upload(z,Qc(bt),hn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ae.setValue(z,"center",U.center),ae.setValue(z,"modelViewMatrix",U.modelViewMatrix),ae.setValue(z,"normalMatrix",U.normalMatrix),ae.setValue(z,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ge=V.uniformsGroups;for(let Vn=0,Wn=Ge.length;Vn<Wn;Vn++){const el=Ge[Vn];D.update(el,$e),D.bind(el,$e)}}return $e}function Mf(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Sf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,G){wt.get(w.texture).__webglTexture=N,wt.get(w.depthTexture).__webglTexture=G;const V=wt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const G=wt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){C=w,E=N,T=G;let V=!0,U=null,it=!1,lt=!1;if(w){const _t=wt.get(w);if(_t.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(z.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(_t.__hasExternalTextures)A.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const vt=w.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&wt.has(vt)&&(w.width!==vt.image.width||w.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const Dt=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?U=Dt[N][G]:U=Dt[N],it=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?U=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[G]:U=Dt,I.copy(w.viewport),L.copy(w.scissor),F=w.scissorTest}else I.copy(ft).multiplyScalar(k).floor(),L.copy(It).multiplyScalar(k).floor(),F=jt;if(Et.bindFramebuffer(z.FRAMEBUFFER,U)&&V&&Et.drawBuffers(w,U),Et.viewport(I),Et.scissor(L),Et.setScissorTest(F),it){const _t=wt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,G)}else if(lt){const _t=wt.get(w.texture),Pt=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Pt)}b=-1},this.readRenderTargetPixels=function(w,N,G,V,U,it,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(xt=xt[lt]),xt){Et.bindFramebuffer(z.FRAMEBUFFER,xt);try{const _t=w.texture,Pt=_t.format,Dt=_t.type;if(!Gt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-U&&z.readPixels(N,G,V,U,Ft.convert(Pt),Ft.convert(Dt),it)}finally{const _t=C!==null?wt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,U,it,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(xt=xt[lt]),xt){const _t=w.texture,Pt=_t.format,Dt=_t.type;if(!Gt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-U){Et.bindFramebuffer(z.FRAMEBUFFER,xt);const vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,it.byteLength,z.STREAM_READ),z.readPixels(N,G,V,U,Ft.convert(Pt),Ft.convert(Dt),0);const qt=C!==null?wt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,qt);const se=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Jd(z,se,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,it),z.deleteBuffer(vt),z.deleteSync(se),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),U=Math.floor(w.image.width*V),it=Math.floor(w.image.height*V),lt=N!==null?N.x:0,xt=N!==null?N.y:0;A.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,lt,xt,U,it),Et.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,V=null,U=0){w.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,G=null);let it,lt,xt,_t,Pt,Dt,vt,qt,se;const oe=w.isCompressedTexture?w.mipmaps[U]:w.image;G!==null?(it=G.max.x-G.min.x,lt=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,Pt=G.min.y,Dt=G.isBox3?G.min.z:0):(it=oe.width,lt=oe.height,xt=oe.depth||1,_t=0,Pt=0,Dt=0),V!==null?(vt=V.x,qt=V.y,se=V.z):(vt=0,qt=0,se=0);const De=Ft.convert(N.format),Kt=Ft.convert(N.type);let bt;N.isData3DTexture?(A.setTexture3D(N,0),bt=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),bt=z.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),bt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);const En=z.getParameter(z.UNPACK_ROW_LENGTH),Zt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$e=z.getParameter(z.UNPACK_SKIP_PIXELS),bi=z.getParameter(z.UNPACK_SKIP_ROWS),ze=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_t),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Dt);const _s=w.isDataArrayTexture||w.isData3DTexture,ae=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const hn=wt.get(w),vs=wt.get(N),Ge=wt.get(hn.__renderTarget),Vn=wt.get(vs.__renderTarget);Et.bindFramebuffer(z.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Wn=0;Wn<xt;Wn++)_s&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,U,Dt+Wn),w.isDepthTexture?(ae&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,U,se+Wn),z.blitFramebuffer(_t,Pt,it,lt,vt,qt,it,lt,z.DEPTH_BUFFER_BIT,z.NEAREST)):ae?z.copyTexSubImage3D(bt,U,vt,qt,se+Wn,_t,Pt,it,lt):z.copyTexSubImage2D(bt,U,vt,qt,se+Wn,_t,Pt,it,lt);Et.bindFramebuffer(z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ae?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(bt,U,vt,qt,se,it,lt,xt,De,Kt,oe.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(bt,U,vt,qt,se,it,lt,xt,De,oe.data):z.texSubImage3D(bt,U,vt,qt,se,it,lt,xt,De,Kt,oe):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,U,vt,qt,it,lt,De,Kt,oe.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,U,vt,qt,oe.width,oe.height,De,oe.data):z.texSubImage2D(z.TEXTURE_2D,U,vt,qt,it,lt,De,Kt,oe);z.pixelStorei(z.UNPACK_ROW_LENGTH,En),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Zt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$e),z.pixelStorei(z.UNPACK_SKIP_ROWS,bi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ze),U===0&&N.generateMipmaps&&z.generateMipmap(bt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,V=null,U=0){return w.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,V,U)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,Et.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}class Iu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new Iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rh extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ce=new R;class $s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class c_ extends Ke{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bi;const ws=new R,ki=new R,Hi=new R,Gi=new et,Es=new et,Du=new Rt,Ir=new R,As=new R,Lr=new R,oh=new et,Jo=new et,ah=new et;class ly extends le{constructor(t=new c_){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lu(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new $s(n,3,0,!1)),Bi.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Hi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Dr(Ir.set(-.5,-.5,0),Hi,o,ki,i,r),Dr(As.set(.5,-.5,0),Hi,o,ki,i,r),Dr(Lr.set(.5,.5,0),Hi,o,ki,i,r),oh.set(0,0),Jo.set(1,0),ah.set(1,1);let a=t.ray.intersectTriangle(Ir,As,Lr,!1,ws);if(a===null&&(Dr(As.set(-.5,.5,0),Hi,o,ki,i,r),Jo.set(0,1),a=t.ray.intersectTriangle(Ir,Lr,As,!1,ws),a===null))return;const c=t.ray.origin.distanceTo(ws);c<t.near||c>t.far||e.push({distance:c,point:ws.clone(),uv:qe.getInterpolation(ws,Ir,As,Lr,oh,Jo,ah,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(s,t,e,n,i,r){Gi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Es.x=r*Gi.x-i*Gi.y,Es.y=i*Gi.x+r*Gi.y):Es.copy(Gi),s.copy(t),s.x+=Es.x,s.y+=Es.y,s.applyMatrix4(Du)}const ch=new R,lh=new Yt,hh=new Yt,l_=new R,uh=new Rt,Nr=new R,$o=new yn,fh=new Rt,Qo=new rr;class Nu extends ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hl,this.bindMatrix=new Rt,this.bindMatrixInverse=new Rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nr),this.boundingSphere.expandByPoint(Nr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(i),t.ray.intersectsSphere($o)!==!1&&(fh.copy(i).invert(),Qo.copy(t.ray).applyMatrix4(fh),!(this.boundingBox!==null&&Qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Qo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Yt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===hl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;lh.fromBufferAttribute(i.attributes.skinIndex,t),hh.fromBufferAttribute(i.attributes.skinWeight,t),ch.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=hh.getComponent(r);if(o!==0){const a=lh.getComponent(r);uh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(l_.copy(ch).applyMatrix4(uh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Dc extends le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _o extends _e{constructor(t=null,e=1,n=1,i,r,o,a,c,l=we,h=we,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dh=new Rt,h_=new Rt;class vo{constructor(t=[],e=[]){this.uuid=je(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Rt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Rt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:h_;dh.multiplyMatrices(a,e[r]),dh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vo(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _o(e,t,t,Ue,on);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Dc),this.bones.push(o),this.boneInverses.push(new Rt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class nc extends Ee{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vi=new Rt,ph=new Rt,Ur=[],mh=new vn,u_=new Rt,Ts=new ne,Rs=new yn;class Uu extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,u_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),mh.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Rs.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vi),ph.multiplyMatrices(n,Vi),Ts.matrixWorld=ph,Ts.raycast(t,Ur);for(let o=0,a=Ur.length;o<a;o++){const c=Ur[o];c.instanceId=r,c.object=this,e.push(c)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(i*this.count),i,this.count,Mc,on));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fu extends Ke{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lo=new R,ho=new R,gh=new Rt,Cs=new rr,Fr=new yn,ta=new R,xh=new R;class Nc extends le{constructor(t=new me,e=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)lo.fromBufferAttribute(e,i-1),ho.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=lo.distanceTo(ho);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;gh.copy(i).invert(),Cs.copy(t.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const d=h.getX(x),_=h.getX(x+1),y=zr(this,t,Cs,c,d,_);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),d=zr(this,t,Cs,c,x,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const d=zr(this,t,Cs,c,x,x+1);d&&e.push(d)}if(this.isLineLoop){const x=zr(this,t,Cs,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zr(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(lo.fromBufferAttribute(o,i),ho.fromBufferAttribute(o,r),e.distanceSqToSegment(lo,ho,ta,xh)>n)return;ta.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:xh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const _h=new R,vh=new R;class f_ extends Nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)_h.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_h.distanceTo(vh);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d_ extends Nc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class zu extends Ke{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yh=new Rt,ic=new rr,Or=new yn,Br=new R;class p_ extends le{constructor(t=new me,e=new zu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;yh.copy(i).invert(),ic.copy(t.ray).applyMatrix4(yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const m=l.getX(g);Br.fromBufferAttribute(u,m),Mh(Br,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Br.fromBufferAttribute(u,g),Mh(Br,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mh(s,t,e,n,i,r,o){const a=ic.distanceSqToPoint(s);if(a<e){const c=new R;ic.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ou extends _e{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new et:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],o=[],a=new R,c=new Rt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xe(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(xe(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uc extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new et){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m_ extends Uc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const kr=new R,ea=new Fc,na=new Fc,ia=new Fc;class g_ extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(kr.subVectors(i[0],i[1]).add(i[0]),l=kr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(kr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ea.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),na.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),ia.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),na.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),ia.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(ea.calc(c),na.calc(c),ia.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function x_(s,t){const e=1-s;return e*e*t}function __(s,t){return 2*(1-s)*s*t}function v_(s,t){return s*s*t}function Gs(s,t,e,n){return x_(s,t)+__(s,e)+v_(s,n)}function y_(s,t){const e=1-s;return e*e*e*t}function M_(s,t){const e=1-s;return 3*e*e*s*t}function S_(s,t){return 3*(1-s)*s*s*t}function b_(s,t){return s*s*s*t}function Vs(s,t,e,n,i){return y_(s,t)+M_(s,e)+S_(s,n)+b_(s,i)}class Bu extends Mn{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,i.x,r.x,o.x,a.x),Vs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w_ extends Mn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,i.x,r.x,o.x,a.x),Vs(t,i.y,r.y,o.y,a.y),Vs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ku extends Mn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E_ extends Mn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends Mn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,i.x,r.x,o.x),Gs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends Mn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,i.x,r.x,o.x),Gs(t,i.y,r.y,o.y),Gs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vu extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Sh(a,c.x,l.x,h.x,u.x),Sh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new et().fromArray(i))}return this}}var sc=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:g_,CubicBezierCurve:Bu,CubicBezierCurve3:w_,EllipseCurve:Uc,LineCurve:ku,LineCurve3:E_,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:Gu,SplineCurve:Vu});class A_ extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new sc[i.type]().fromJSON(i))}return this}}class rc extends A_{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ku(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Hu(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Bu(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Uc(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zc extends me{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=xe(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,f=new et,p=new R,g=new R,x=new R;let m=0,d=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let _=0;_<=e;_++){const y=n+_*h*i,v=Math.sin(y),P=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*P,o.push(u.x,u.y,u.z),f.x=_/e,f.y=E/(t.length-1),a.push(f.x,f.y);const T=c[3*E+0]*v,C=c[3*E+1],b=c[3*E+0]*P;l.push(T,C,b)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const v=y+_*t.length,P=v,E=v+t.length,T=v+t.length+1,C=v+1;r.push(P,E,C),r.push(T,C,E)}this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.points,t.segments,t.phiStart,t.phiLength)}}class Wu extends zc{constructor(t=1,e=1,n=4,i=8){const r=new rc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Wu(t.radius,t.length,t.capSegments,t.radialSegments)}}class Qs extends me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bn extends me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(p,2));function _(){const v=new R,P=new R;let E=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const b=[],M=C/r,I=M*(e-t)+t;for(let L=0;L<=i;L++){const F=L/i,B=F*c+a,Y=Math.sin(B),H=Math.cos(B);P.x=I*Y,P.y=-M*n+m,P.z=I*H,u.push(P.x,P.y,P.z),v.set(Y,T,H).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-M),b.push(g++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){const M=x[b][C],I=x[b+1][C],L=x[b+1][C+1],F=x[b][C+1];(t>0||b!==0)&&(h.push(M,I,F),E+=3),(e>0||b!==r-1)&&(h.push(I,L,F),E+=3)}l.addGroup(d,E,0),d+=E}function y(v){const P=g,E=new et,T=new R;let C=0;const b=v===!0?t:e,M=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let L=0;L<=i;L++){const B=L/i*c+a,Y=Math.cos(B),H=Math.sin(B);T.x=b*H,T.y=m*M,T.z=b*Y,u.push(T.x,T.y,T.z),f.push(0,M,0),E.x=Y*.5+.5,E.y=H*.5*M+.5,p.push(E.x,E.y),g++}for(let L=0;L<i;L++){const F=P+L,B=I+L;v===!0?h.push(B,B+1,F):h.push(B+1,B,F),C+=3}l.addGroup(d,C,v===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xu extends Bn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oc extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new R,v=new R,P=new R;for(let E=0;E<e.length;E+=3)p(e[E+0],y),p(e[E+1],v),p(e[E+2],P),c(y,v,P,_)}function c(_,y,v,P){const E=P+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const b=_.clone().lerp(v,C/E),M=y.clone().lerp(v,C/E),I=E-C;for(let L=0;L<=I;L++)L===0&&C===E?T[C][L]=b:T[C][L]=b.clone().lerp(M,L/I)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const M=Math.floor(b/2);b%2===0?(f(T[C][M+1]),f(T[C+1][M]),f(T[C][M])):(f(T[C][M+1]),f(T[C+1][M+1]),f(T[C+1][M]))}}function l(_){const y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const _=new R;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const v=m(_)/2/Math.PI+.5,P=d(_)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){const y=o[_+0],v=o[_+2],P=o[_+4],E=Math.max(y,v,P),T=Math.min(y,v,P);E>.9&&T<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,y){const v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const _=new R,y=new R,v=new R,P=new R,E=new et,T=new et,C=new et;for(let b=0,M=0;b<r.length;b+=9,M+=6){_.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),P.copy(_).add(y).add(v).divideScalar(3);const I=m(P);x(E,M+0,_,I),x(T,M+2,y,I),x(C,M+4,v,I)}}function x(_,y,v,P){P<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.vertices,t.indices,t.radius,t.details)}}class T_ extends rc{constructor(t){super(t),this.uuid=je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new rc().fromJSON(i))}return this}}const R_={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=qu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,p;if(n&&(r=D_(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return tr(r,o,e,a,c,p,0),o}};function qu(s,t,e,n,i){let r,o;if(i===W_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=bh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=bh(r,s[r],s[r+1],o);return o&&yo(o,o.next)&&(nr(o),o=o.next),o}function yi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(yo(e,e.next)||ue(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&O_(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?P_(s,n,i,r):C_(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),nr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=I_(yi(s),t,e),tr(s,t,e,n,i,r,2)):o===2&&L_(s,t,e,n,i,r):tr(yi(s),t,e,n,i,r,1);break}}}function C_(s){const t=s.prev,e=s,n=s.next;if(ue(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Zi(i,a,r,c,o,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ue(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=oc(p,g,t,e,n),_=oc(x,m,t,e,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=d&&v&&v.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Zi(a,h,c,u,l,f,y.x,y.y)&&ue(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Zi(a,h,c,u,l,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Zi(a,h,c,u,l,f,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Zi(a,h,c,u,l,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function I_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!yo(i,r)&&Yu(i,n,n.next,r)&&er(i,r)&&er(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=s=r),n=n.next}while(n!==s);return yi(n)}function L_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H_(o,a)){let c=ju(o,a);o=yi(o,o.next),c=yi(c,c.next),tr(o,t,e,n,i,r,0),tr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function D_(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=qu(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(k_(l));for(i.sort(N_),r=0;r<i.length;r++)e=U_(i[r],e);return e}function N_(s,t){return s.x-t.x}function U_(s,t){const e=F_(s,t);if(!e)return t;const n=ju(e,s);return yi(n,n.next),yi(e,e.next)}function F_(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Zi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),er(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&z_(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function z_(s,t){return ue(s.prev,s,t.prev)<0&&ue(t.next,s,s.next)<0}function O_(s,t,e,n){let i=s;do i.z===0&&(i.z=oc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,B_(i)}function B_(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function oc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function k_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Zi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function H_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!G_(s,t)&&(er(s,t)&&er(t,s)&&V_(s,t)&&(ue(s.prev,s,t.prev)||ue(s,t.prev,t))||yo(s,t)&&ue(s.prev,s,s.next)>0&&ue(t.prev,t,t.next)>0)}function ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function yo(s,t){return s.x===t.x&&s.y===t.y}function Yu(s,t,e,n){const i=Gr(ue(s,t,e)),r=Gr(ue(s,t,n)),o=Gr(ue(e,n,s)),a=Gr(ue(e,n,t));return!!(i!==r&&o!==a||i===0&&Hr(s,e,t)||r===0&&Hr(s,n,t)||o===0&&Hr(e,s,n)||a===0&&Hr(e,t,n))}function Hr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Gr(s){return s>0?1:s<0?-1:0}function G_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Yu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function er(s,t){return ue(s.prev,s,s.next)<0?ue(s,t,s.next)>=0&&ue(s,s.prev,t)>=0:ue(s,t,s.prev)<0||ue(s,s.next,t)<0}function V_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ju(s,t){const e=new ac(s.i,s.x,s.y),n=new ac(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bh(s,t,e,n){const i=new ac(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ac(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ws{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ws.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];wh(t),Eh(n,t);let o=t.length;e.forEach(wh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Eh(n,e[c]);const a=R_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function wh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Eh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ku extends Oc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ku(t.radius,t.detail)}}class Zu extends me{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,p=new R,g=new et;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){const m=x*(n+1);for(let d=0;d<n;d++){const _=d+m,y=_,v=_+n+1,P=_+n+2,E=_+1;a.push(y,v,E),a.push(v,P,E)}}this.setIndex(a),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ju extends me{constructor(t=new T_([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Bt(i,3)),this.setAttribute("normal",new Bt(r,3)),this.setAttribute("uv",new Bt(o,2));function l(h){const u=i.length/3,f=h.extractPoints(e);let p=f.shape;const g=f.holes;Ws.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const _=g[m];Ws.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=Ws.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const _=g[m];p=p.concat(_)}for(let m=0,d=p.length;m<d;m++){const _=p[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,d=x.length;m<d;m++){const _=x[m],y=_[0]+u,v=_[1]+u,P=_[2]+u;n.push(y,v,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return X_(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Ju(n,t.curveSegments)}}function X_(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class $u extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,f=new R,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const _=[],y=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const E=P/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+v,1-y),_.push(l++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){const y=h[d][_+1],v=h[d][_],P=h[d+1][_],E=h[d+1][_+1];(d!==0||o>0)&&p.push(y,v,E),(d!==n-1||c<Math.PI)&&p.push(v,P,E)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $u(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bc extends me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,_=(i+1)*p+g;o.push(x,m,_),o.push(m,d,_)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qu extends me{constructor(t=new Gu(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new et;let h=new R;const u=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(p,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),d()}function m(y){h=t.getPointAt(y/e,h);const v=o.normals[y],P=o.binormals[y];for(let E=0;E<=i;E++){const T=E/i*Math.PI*2,C=Math.sin(T),b=-Math.cos(T);c.x=b*v.x+C*P.x,c.y=b*v.y+C*P.y,c.z=b*v.z+C*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const P=(i+1)*(y-1)+(v-1),E=(i+1)*y+(v-1),T=(i+1)*y+v,C=(i+1)*(y-1)+v;g.push(P,E,C),g.push(E,T,C)}}function _(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)l.x=y/e,l.y=v/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qu(new sc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class kc extends Ke{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sn extends kc{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Si extends Ke{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Vr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function q_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Y_(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Ah(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function tf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class or{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class j_ extends or{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yi,endingEnd:Yi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ji:r=t,a=2*e-n;break;case ao:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ji:o=t,c=2*n-e;break;case ao:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+_*o[l+P]+y*o[c+P]+v*o[u+P];return r}}class ef extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class K_ extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class bn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new K_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ef(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new j_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Zs:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&q_(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){const x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Zs;class ms extends bn{constructor(t,e,n){super(t,e,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ks;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends bn{}nf.prototype.ValueTypeName="color";class us extends bn{}us.prototype.ValueTypeName="number";class Z_ extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}}class fs extends bn{InterpolantFactoryMethodLinear(t){return new Z_(this.times,this.values,this.getValueSize(),t)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends bn{constructor(t,e,n){super(t,e,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ks;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends bn{}ds.prototype.ValueTypeName="vector";class cc{constructor(t="",e=-1,n=[],i=Ec){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=je(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push($_(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Y_(c);c=Ah(c,1,h),l=Ah(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new us(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,g,x){if(p.length!==0){const m=[],d=[];tf(p,m,d,g),m.length!==0&&x.push(new u(f,m,d))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){const y=f[g];m.push(y.time),d.push(y.morphTarget===x?1:0)}i.push(new us(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{const p=".bones["+e[u].name+"]";n(ds,p+".position",f,"pos",i),n(fs,p+".quaternion",f,"rot",i),n(ds,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function J_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return nf;case"quaternion":return fs;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=J_(s.type);if(s.times===void 0){const e=[],n=[];tf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Q_{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const tv=new Q_;class xs{constructor(t){this.manager=t!==void 0?t:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class ev extends Error{constructor(t,e){super(t),this.response=e}}class sf extends xs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ti.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(In[t]!==void 0){In[t].push({onLoad:e,onProgress:n,onError:i});return}In[t]=[],In[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=In[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let x=0;const m=new ReadableStream({start(d){_();function _(){u.read().then(({done:y,value:v})=>{if(y)d.close();else{x+=v.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,T=h.length;E<T;E++){const C=h[E];C.onProgress&&C.onProgress(P)}d.enqueue(v),_()}},y=>{d.error(y)})}}});return new Response(m)}else throw new ev(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ti.add(t,l);const h=In[t];delete In[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=In[t];if(h===void 0)throw this.manager.itemError(t),l;delete In[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class nv extends xs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ti.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Js("img");function c(){h(),ti.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class iv extends xs{constructor(t){super(t)}load(t,e,n,i){const r=new _e,o=new nv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Mo extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hy extends Mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sa=new Rt,Th=new R,Rh=new R;class Hc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sv extends Hc{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class rv extends Mo{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ch=new Rt,Ps=new R,ra=new R;class ov extends Hc{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Yt(2,1,1,1),new Yt(0,1,1,1),new Yt(3,1,1,1),new Yt(1,1,1,1),new Yt(3,0,1,1),new Yt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),ra.copy(n.position),ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch)}}class av extends Mo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ov}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class cv extends Hc{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lv extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new cv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xs{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class hv extends xs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ti.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ti.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),ti.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ti.add(t,c),r.manager.itemStart(t)}}class uv{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){an.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;an.multiplyQuaternionsFlat(t,o,t,e,t,n),an.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Gc="\\[\\]\\.:\\/",fv=new RegExp("["+Gc+"]","g"),Vc="[^"+Gc+"]",dv="[^"+Gc.replace("\\.","")+"]",pv=/((?:WC+[\/:])*)/.source.replace("WC",Vc),mv=/(WCOD+)?/.source.replace("WCOD",dv),gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),_v=new RegExp("^"+pv+mv+gv+xv+"$"),vv=["material","materials","bones","map"];class yv{constructor(t,e,n){const i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Jt.Composite(t,e,n):new Jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fv,"")}static parseTrackName(t){const e=_v.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);vv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=yv;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mv{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Yi,endingEnd:Yi};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=yd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Sd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ec:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Md;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===mu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ji,i.endingEnd=ji):(t?i.endingStart=this.zeroSlopeAtStart?ji:Yi:i.endingStart=ao,e?i.endingEnd=this.zeroSlopeAtEnd?ji:Yi:i.endingEnd=ao)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const Sv=new Float32Array(1);class uy extends Mi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const f=i[u],p=f.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const x=e&&e._propertyBindings[u].binding.parsedPath;g=new uv(Jt.create(n,p,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new ef(new Float32Array(2),new Float32Array(2),1,Sv),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?cc.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ec),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Mv(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?cc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Ph=new Rt;class bv{constructor(t,e,n=0,i=1/0){this.ray=new rr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(Ih),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)lc(t[i],this,n,e);return n.sort(Ih),n}}function Ih(s,t){return s.distance-t.distance}function lc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)lc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function ir(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new me;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const p=s[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Lh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);const g=Lh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Lh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ee(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Dh(s,t){if(t===bd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Qa||t===gu){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Qa)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class rf extends xs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Rv(e)}),this.register(function(e){return new Cv(e)}),this.register(function(e){return new Ov(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new kv(e)}),this.register(function(e){return new Iv(e)}),this.register(function(e){return new Lv(e)}),this.register(function(e){return new Dv(e)}),this.register(function(e){return new Nv(e)}),this.register(function(e){return new Tv(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new Pv(e)}),this.register(function(e){return new zv(e)}),this.register(function(e){return new Fv(e)}),this.register(function(e){return new Ev(e)}),this.register(function(e){return new Hv(e)}),this.register(function(e){return new Gv(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Xs.extractUrlBase(t);o=Xs.resolveURL(l,this.path)}else o=Xs.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new sf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===of){try{o[Ot.KHR_BINARY_GLTF]=new Vv(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new n1(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ot.KHR_MATERIALS_UNLIT:o[u]=new Av;break;case Ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new Wv(r,this.dracoLoader);break;case Ot.KHR_TEXTURE_TRANSFORM:o[u]=new Xv;break;case Ot.KHR_MESH_QUANTIZATION:o[u]=new qv;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function wv(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ev{constructor(t){this.parser=t,this.name=Ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new Mt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Le);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new lv(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new av(h),l.distance=u;break;case"spot":l=new rv(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Un(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class Av{constructor(){this.name=Ot.KHR_MATERIALS_UNLIT}getMaterialType(){return mn}extendParams(t,e,n){const i=[];t.color=new Mt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Le),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Se))}return Promise.all(i)}}class Tv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Rv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new et(a,a)}return Promise.all(r)}}class Cv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Pv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Iv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Le)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Se)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Lv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Dv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(a[0],a[1],a[2],Le),Promise.all(r)}}class Nv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Uv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(a[0],a[1],a[2],Le),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Se)),Promise.all(r)}}class Fv{constructor(t){this.parser=t,this.name=Ot.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class zv{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Ov{constructor(t){this.parser=t,this.name=Ot.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Bv{constructor(t){this.parser=t,this.name=Ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class kv{constructor(t){this.parser=t,this.name=Ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Hv{constructor(t){this.name=Ot.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,i.mode,i.filter),p})})}else return null}}class Gv{constructor(t){this.name=Ot.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Xe.TRIANGLES&&l.mode!==Xe.TRIANGLE_STRIP&&l.mode!==Xe.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(const g of u){const x=new Rt,m=new R,d=new an,_=new R(1,1,1),y=new Uu(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(m,d,_));for(const v in c)if(v==="_COLOR_0"){const P=c[v];y.instanceColor=new nc(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);le.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const of="glTF",Is=12,Nh={JSON:1313821514,BIN:5130562};class Vv{constructor(t){this.name=Ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Is,r=new DataView(t,Is);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nh.JSON){const l=new Uint8Array(t,Is+o,a);this.content=n.decode(l)}else if(c===Nh.BIN){const l=Is+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Wv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ot.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=hc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=hc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],p=ts[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const x=p.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(p)},a,l,Le,f)})})}}class Xv{constructor(){this.name=Ot.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class qv{constructor(){this.name=Ot.KHR_MESH_QUANTIZATION}}class af extends or{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,p=f*u,g=t*l,x=g-l,m=-2*p+3*f,d=p-f,_=1-m,y=d-f+u;for(let v=0;v!==a;v++){const P=o[x+v+a],E=o[x+v+c]*h,T=o[g+v+a],C=o[g+v]*h;r[v]=_*P+y*E+m*T+d*C}return r}}const Yv=new an;class jv extends af{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Yv.fromArray(r).normalize().toArray(r),r}}const Xe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uh={9728:we,9729:ee,9984:ru,9985:Zr,9986:Fs,9987:Ye},Fh={33071:Qn,33648:oo,10497:rs},oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kv={CUBICSPLINE:void 0,LINEAR:Zs,STEP:Ks},aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new kc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),s.DefaultMaterial}function fi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Un(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Jv(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function $v(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qv(s){let t;const e=s.extensions&&s.extensions[Ot.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ca(e.attributes):t=s.indices+":"+ca(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+ca(s.targets[n]);return t}function ca(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function uc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const e1=new Rt;class n1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new wv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new iv(this.options.manager):this.textureLoader=new hv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fi(r,a,i),Un(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Xs.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=oa[i.type],a=ts[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ee(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=oa[i.type],l=ts[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(p&&p!==u){const d=Math.floor(f/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count;let y=e.cache.get(_);y||(x=new l(a,d*p,i.count*p/h),y=new Lu(x,p/h),e.cache.add(_,y)),m=new $s(y,c,f%p/h,g)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),m=new Ee(x,c,g);if(i.sparse!==void 0){const d=oa.SCALAR,_=ts[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,P=new _(o[1],y,i.sparse.count*d),E=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Ee(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=P.length;T<C;T++){const b=P[T];if(m.setX(b,E[T*c]),c>=2&&m.setY(b,E[T*c+1]),c>=3&&m.setZ(b,E[T*c+2]),c>=4&&m.setW(b,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Uh[f.magFilter]||ee,h.minFilter=Uh[f.minFilter]||Ye,h.wrapS=Fh[f.wrapS]||rs,h.wrapT=Fh[f.wrapT]||rs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==we&&h.minFilter!==ee,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;e.isImageBitmapLoader===!0&&(g=function(x){const m=new _e(x);m.needsUpdate=!0,f(m)}),e.load(Xs.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Un(u,o),u.userData.mimeType=o.mimeType||t1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new zu,Ke.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Fu,Ke.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return kc}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[Ot.KHR_MATERIALS_UNLIT]){const u=i[Ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Mt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Le),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Se)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=nn);const h=r.alphaMode||aa.OPAQUE;if(h===aa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===aa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==mn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new et(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==mn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==mn){const u=r.emissiveFactor;a.emissive=new Mt().setRGB(u[0],u[1],u[2],Le)}return r.emissiveTexture!==void 0&&o!==mn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Se)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Un(u,r),e.associations.set(u,{materials:t}),r.extensions&&fi(i,u,r),u})}createUniqueName(t){const e=Jt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return zh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=Qv(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Ot.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=zh(new me,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Zv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const x=h[p],m=o[p];let d;const _=l[p];if(m.mode===Xe.TRIANGLES||m.mode===Xe.TRIANGLE_STRIP||m.mode===Xe.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Nu(x,_):new ne(x,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Xe.TRIANGLE_STRIP?d.geometry=Dh(d.geometry,gu):m.mode===Xe.TRIANGLE_FAN&&(d.geometry=Dh(d.geometry,Qa));else if(m.mode===Xe.LINES)d=new f_(x,_);else if(m.mode===Xe.LINE_STRIP)d=new Nc(x,_);else if(m.mode===Xe.LINE_LOOP)d=new d_(x,_);else if(m.mode===Xe.POINTS)d=new p_(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&$v(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),Un(d,r),m.extensions&&fi(i,d,m),e.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)e.associations.set(u[p],{meshes:t,primitives:p});if(u.length===1)return r.extensions&&fi(i,u[0],r),u[0];const f=new pe;r.extensions&&fi(i,f,r),e.associations.set(f,{meshes:t});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ne(zs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new go(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Un(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Rt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new vo(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const p=i.channels[u],g=i.samplers[p.sampler],x=p.target,m=x.node,d=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],p=u[1],g=u[2],x=u[3],m=u[4],d=[];for(let _=0,y=f.length;_<y;_++){const v=f[_],P=p[_],E=g[_],T=x[_],C=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=n._createAnimationTracks(v,P,E,T,C);if(b)for(let M=0;M<b.length;M++)d.push(b[M])}return new cc(r,void 0,d)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,e1)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Dc:l.length>1?h=new pe:l.length===1?h=l[0]:h=new le,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Un(h,r),r.extensions&&fi(n,h,r),r.matrix!==void 0){const u=new Rt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new pe;n.name&&(r.name=i.createUniqueName(n.name)),Un(r,n),n.extensions&&fi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,p]of i.associations)(f instanceof Ke||f instanceof _e)&&u.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];$n[r.path]===$n.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch($n[r.path]){case $n.weights:l=us;break;case $n.rotation:l=fs;break;case $n.position:case $n.scale:l=ds;break;default:switch(n.itemSize){case 1:l=us;break;case 2:case 3:default:l=ds;break}break}const h=i.interpolation!==void 0?Kv[i.interpolation]:Zs,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const g=new l(c[f]+"."+$n[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=uc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof fs?jv:af;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function i1(s,t,e){const n=t.attributes,i=new vn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const h=uc(ts[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const x=uc(ts[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new yn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function zh(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=hc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return kt.workingColorSpace!==Le&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${kt.workingColorSpace}" not supported.`),Un(s,t),i1(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Jv(s,t.targets,e):s})}const io=typeof location<"u"&&!/[?&]art3=0\b/.test(location.search),la={uWindT:{value:0},uWind:{value:.55}},Wr={time:0,atmos:null,cam:null,tier:2};function s1(s,t,e,n=2){Wr.time=s,Wr.atmos=t,Wr.cam=e,Wr.tier=n,la.uWindT.value=s;const i=t?t.wind:.55;la.uWind.value+=(i-la.uWind.value)*.02}function fy(s,t,e){return`
  {
    vec3 ip = vec3(instanceMatrix[3][0], 0.0, instanceMatrix[3][2]);
    float ph = ip.x * 0.31 + ip.z * 0.17;
    float gust = 0.65 + 0.35 * sin(uWindT * 0.35 + ip.x * 0.05 - ip.z * 0.03);
    float hh = max(0.0, transformed.y - ${s.toFixed(3)});
    float a = hh * hh * ${t.toFixed(4)} * uWind * gust;
    transformed.x += a * (sin(uWindT * 1.5 + ph) * 0.7 + sin(uWindT * 2.9 + ph * 1.7) * 0.3);
    transformed.z += a * 0.6 * cos(uWindT * 1.2 + ph * 1.3);
    ${e>0?`transformed += objectNormal * ${e.toFixed(4)} * uWind * sin(uWindT * 7.0 + dot(transformed, vec3(3.1, 2.3, 2.7))) * smoothstep(0.0, 1.5, hh);`:""}
  }`}const dy=`uniform float uWindT, uWind;
`;function r1(s){const t=new Map,e=new Map,n=s.clone();return cf(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function cf(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)cf(s.children[n],t.children[n],e)}const Oh=new Map;function ke(s,t=0,e=1){const n=s+":"+t+":"+e;let i=Oh.get(n);return i||(i=new Si({color:s,emissive:t,emissiveIntensity:e}),Oh.set(n,i)),i}const o1=[];function Wc(s,t){const e=new Si({color:s,emissive:t,emissiveIntensity:0});return o1.push(e),e}function ce(s,t,e,n,i=0,r=0,o=0,a=!0){const c=new ne(new ln(s,t,e),n);return c.position.set(i,r,o),c.castShadow=a,c.receiveShadow=!0,c}function fc(s,t,e,n,i=8){const r=new ne(new Bn(s,t,e,i),n);return r.castShadow=!0,r.receiveShadow=!0,r}const Xc=typeof location<"u"&&!/[?&]cars2=0\b/.test(location.search),a1={...Xc?{}:{"car-sedan":{file:"car-kit/sedan.glb",fit:3.8,axis:"len",rotY:Math.PI/2},"car-taxi":{file:"car-kit/taxi.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"car-van":{file:"car-kit/van.glb",fit:4.1,axis:"len",rotY:Math.PI/2},"car-suv":{file:"car-kit/suv.glb",fit:3.9,axis:"len",rotY:Math.PI/2}},"bld-a":{file:"city-kit-commercial/building-a.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-c":{file:"city-kit-commercial/building-c.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-f":{file:"city-kit-commercial/building-f.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-h":{file:"city-kit-commercial/building-h.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-j":{file:"city-kit-commercial/building-j.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-d":{file:"city-kit-commercial/building-d.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-k":{file:"city-kit-commercial/building-k.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-a":{file:"city-kit-commercial/building-skyscraper-a.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-b":{file:"city-kit-commercial/building-skyscraper-b.glb",fit:1,axis:"raw",rotY:Math.PI},pillar:{file:"city-kit-roads/bridge-pillar.glb",fit:3,axis:"h"},dumpster:{file:"city-kit-roads/dumpster.glb",fit:2.4,axis:"len"},lamp:{file:"city-kit-roads/light-square.glb",fit:4.4,axis:"h"}},lf=new Map,hf=[];async function py(s=8e3){const t=new rf,e=Xc?h1(t):Promise.resolve(),n=Promise.all([e,...Object.entries(a1).map(async([i,r])=>{try{const o=await t.loadAsync("models/"+r.file),a=o.scene;let c=!1;a.traverse(m=>{const d=m;d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0),m.isSkinnedMesh&&(c=!0)}),a.updateMatrixWorld(!0),a.traverse(m=>{const d=m;d.isSkinnedMesh&&(d.skeleton.update(),d.computeBoundingSphere(),d.boundingSphere.radius*=1.8,d.frustumCulled=!0)});const l=new pe;l.add(a),l.rotation.y=r.rotY??0;const h=new pe;h.add(l),h.updateMatrixWorld(!0);const u=new vn().setFromObject(h),f=u.getSize(new R),p=r.axis==="len"?Math.max(f.x,f.z):r.axis==="h"?f.y:0,g=p>0?r.fit/p:1;l.scale.setScalar(g),h.updateMatrixWorld(!0),u.setFromObject(h);const x=u.getCenter(new R);l.position.set(-x.x,-u.min.y,-x.z),lf.set(i,{obj:h,clips:o.animations,size:u.getSize(new R),skinned:c}),hf.push(i)}catch{}})]);await Promise.race([n,new Promise(i=>setTimeout(i,s))])}function qc(s){const t=lf.get(s);return t?{obj:t.skinned?r1(t.obj):t.obj.clone(),clips:t.clips,size:t.size}:null}function ar(s,t){const e=new pe,n=qc(s);return e.add(n?n.obj:t),e}const c1={jump:.55,"pick-up":.9,"interact-right":.7,"emote-yes":1.2,"emote-no":.8,sit:2.5,die:1,sleep:3};function uf(s,t,e=.2){var i;if(s.cur===t||!s.acts[t])return;const n=s.acts[t];n.reset().play(),(i=s.acts[s.cur])==null||i.crossFadeTo(n,e,!1),s.cur=t}function my(s,t,e=!1){const n=s.acts[t];if(!n){if(s.rig){const i=c1[t]??.8;s.rig.shot={name:t,t:0,dur:i,hold:e},s.oneShot=e?999:i}return}n.setLoop(mu,1),n.clampWhenFinished=e,uf(s,t,.1),s.oneShot=e?999:n.getClip().duration*.9}function gy(s,t,e){if(s.proc)return s.proc(s,t,e);const n=Math.floor(s.phase/Math.PI);if(t>=.2&&(s.phase+=e*(4+t*1.6)),s.mixer)return s.oneShot>0?s.oneShot-=e:(uf(s,t>=.2?t>4.5?"sprint":"walk":"idle"),s.acts.walk&&(s.acts.walk.timeScale=Math.max(.6,t/1.9)),s.acts.sprint&&(s.acts.sprint.timeScale=Math.max(.6,t/5))),s.mixer.update(e),t>=.2&&Math.floor(s.phase/Math.PI)!==n;if(t<.2)return s.legL.rotation.x*=.8,s.legR.rotation.x*=.8,s.armL.rotation.x*=.8,s.armR.rotation.x*=.8,s.body.position.y*=.8,!1;const i=Math.sin(s.phase)*Math.min(.75,.25+t*.12);return s.legL.rotation.x=i,s.legR.rotation.x=-i,s.armL.rotation.x=-i*.8,s.armR.rotation.x=i*.8,s.body.position.y=Math.abs(Math.sin(s.phase))*.11,Math.floor(s.phase/Math.PI)!==n}const Yc=[{name:"sedan",len:3.8,tint:.85,head:.68,tail:.82},{name:"taxi",len:3.9,tint:0,head:.66,tail:.8},{name:"van",len:4.1,tint:.7,head:.72,tail:.62},{name:"compact",len:3.4,tint:.5,head:.66,tail:.86},{name:"police",len:3.9,tint:0,head:.66,tail:.8},{name:"bus",len:9,tint:0,head:.62,tail:.75}],xy=4,l1=5,cr=[],ff=Wc(16774872,16773304);async function h1(s){await Promise.all(Yc.map(async(t,e)=>{try{const n=await s.loadAsync("models/cars/"+t.name+".glb");n.scene.updateMatrixWorld(!0);const i=[];let r=null;n.scene.traverse(d=>{const _=d;if(!_.isMesh)return;const y=_.geometry.clone();y.applyMatrix4(_.matrixWorld);for(const v of Object.keys(y.attributes))v!=="position"&&v!=="normal"&&v!=="uv"&&y.deleteAttribute(v);i.push(y),r??(r=_.material.map??null)});const o=i.length===1?i[0]:ir(i);o.rotateY(Math.PI/2),o.computeBoundingBox();let a=o.boundingBox;const c=t.len/(a.max.x-a.min.x);o.scale(c,c,c),o.computeBoundingBox(),a=o.boundingBox,o.translate(-(a.min.x+a.max.x)/2,-a.min.y,-(a.min.z+a.max.z)/2),o.computeBoundingBox(),o.computeBoundingSphere();const l=o.boundingBox.getSize(new R),h=r;h&&(h.magFilter=ee,h.minFilter=Ye,h.generateMipmaps=!0,h.anisotropy=4);const u=new Si({map:h}),f=new ne(o,u);f.updateMatrixWorld(!0);const p=new bv,g=(d,_,y)=>{p.set(new R(y*l.x,d,_),new R(-y,0,0));const v=p.intersectObject(f)[0];return v&&Math.abs(v.point.x)>l.x*.3?v.point.x:y*l.x*.48},x=e===l1,m=(d,_,y,v)=>{const P=l.z/2-(x?.38:.34);return ir([P,-P].map(E=>{const T=new ln(.08,v,y);return T.translate(g(d,E,_)-_*.015,d,E),T}))};cr[e]={geo:o,base:u,size:l,head:m(t.head,1,x?.3:.28,x?.16:.13),tail:m(t.tail,-1,x?.22:.24,x?.3:.14)},hf.push("car-"+t.name)}catch{}}))}const _y=s=>!!cr[s],Bh=new Map;function u1(s,t){var n;const e=((n=Yc[s])==null?void 0:n.tint)??0;return new Mt(16777215).lerp(new Mt(t),e)}function f1(s,t){const e=cr[s];if(!Yc[s].tint)return e.base;const n=s+":"+t;let i=Bh.get(n);return i||(i=e.base.clone(),i.color.copy(u1(s,t)),Bh.set(n,i)),i}function vy(s){const t=cr[s];return t?{geo:t.geo,mat:t.base,size:t.size}:null}function yy(s,t){if(!Xc){s.brake.emissiveIntensity=t?3:.15;return}const e=ff.emissiveIntensity;s.brake.emissiveIntensity=t?3+e:.15+e*.45}const df=new Bn(.36,.36,.28,10);df.rotateX(Math.PI/2);function My(s,t=0){const e=new Si({color:7344144,emissive:16719904,emissiveIntensity:.15}),n=cr[t];if(n){const d=new pe,_=new ne(n.geo,f1(t,s));return _.castShadow=!0,_.receiveShadow=!0,d.add(_,new ne(n.head,ff),new ne(n.tail,e)),{g:d,wheels:[],brake:e,spin:"z",spinSign:-1,kind:t,len:n.size.x}}const i=new pe,r=ke(s),o=ke(2371644),a=t===2,c=a?4:3.6;i.add(ce(c,.72,1.8,r,0,.62,0)),a?i.add(ce(2.9,1,1.72,r,-.4,1.45,0)):i.add(ce(t===1?2.4:1.9,.62,1.62,r,t===1?-.3:-.25,1.28,0));const l=a?2.92:t===1?2.42:1.92;i.add(ce(l,.34,1.66,o,a?-.4:t===1?-.3:-.25,a?1.55:1.3,0,!1)),i.add(ce(.06,.18,.4,ke(16773808,16773808,.9),c/2+.01,.72,.6,!1)),i.add(ce(.06,.18,.4,ke(16773808,16773808,.9),c/2+.01,.72,-.6,!1)),i.add(ce(.06,.18,.36,e,-c/2-.01,.75,.62,!1)),i.add(ce(.06,.18,.36,e,-c/2-.01,.75,-.62,!1));const h=[],u=ke(1710618);for(const d of[c/2-.8,-c/2+.8])for(const _ of[.86,-.86]){const y=new ne(df,u);y.position.set(d,.36,_),y.castShadow=!0,i.add(y),h.push(y)}const f=["car-sedan","car-taxi","car-van","car-suv"][t%4],p=qc(f);if(!p)return{g:ar("none",i),wheels:h,brake:e,spin:"z",spinSign:-1,kind:t,len:c};const g=new pe;g.add(p.obj);const x=p.size.x/2;g.add(ce(.06,.16,.34,e,-x-.02,.8,.55,!1)),g.add(ce(.06,.16,.34,e,-x-.02,.8,-.55,!1));const m=[];return p.obj.traverse(d=>{d.name.startsWith("wheel")&&m.push(d)}),{g,wheels:m,brake:e,spin:"x",spinSign:1,kind:t,len:p.size.x}}function d1(s=[[0,1],[.35,.7],[.7,.22],[1,0]]){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);for(const[r,o]of s){const a=Math.round(o*255);n.addColorStop(r,`rgb(${a},${a},${a})`)}e.fillStyle=n,e.fillRect(0,0,64,64);const i=new Ou(t);return i.colorSpace=sn,i}const pf=new mn({color:16760944,map:typeof document<"u"?d1():null,transparent:!0,opacity:0,blending:ro,depthWrite:!1}),Sy=pf;function by(s,t,e){const n=new pe,i=fc(.08,.11,4.2,ke(3027512),6);i.position.y=2.1,n.add(i),n.add(ce(.12,.12,1.2,ke(3027512),0,4.15,e*.55));const r=Wc(16773312,16765056);n.add(ce(.4,.16,.4,r,0,4,e*1.1,!1));const o=qc("lamp");let a;o?(a=new pe,o.obj.rotation.y=e>0?Math.PI:0,a.add(o.obj),a.add(ce(.36,.1,.36,r,0,o.size.y-.32,e*(o.size.z-.25),!1))):a=ar("none",n),a.position.set(s,0,t);const c=new ne(new Qs(2.6,16),pf);return c.rotation.x=-Math.PI/2,c.position.set(s,.23,t+e*1.1),{g:a,pool:c}}function wy(){const s=new pe;s.add(ce(2.4,1.3,1.4,ke(3111482),0,.75,0));const t=ce(2.5,.12,1.5,ke(2317356),0,1.45,.08);t.rotation.x=-.12,s.add(t);for(const e of[-1,1])s.add(ce(.12,.2,.12,ke(2236962),e*1,.1,0));return ar("dumpster",s)}function Ey(){const s=new pe,t=ke(10118192);s.add(ce(3,.12,.8,t,0,.5,0)),s.add(ce(3,.55,.1,t,0,.9,-.38));for(const e of[-1.3,1.3])s.add(ce(.1,.5,.7,ke(2763306),e,.25,0));return ar("none",s)}function Ay(){const s=new pe,t=new Si({color:4182112,emissive:1731114,emissiveIntensity:.6}),e=fc(.14,.14,.42,t,6);e.position.y=.21;const n=fc(.05,.08,.18,t,6);return n.position.y=.5,s.add(e,n),s.rotation.z=Math.PI/2.4,s}function Ty(){const s=new pe,t=ke(14715424);s.add(ce(.3,.26,.62,t,0,.3,0)),s.add(ce(.26,.24,.24,t,0,.48,-.36)),s.add(ce(.07,.1,.05,t,-.08,.64,-.38)),s.add(ce(.07,.1,.05,t,.08,.64,-.38));const e=ce(.07,.07,.45,t,0,.45,.48);e.rotation.x=.7,s.add(e);for(const n of[-.1,.1])for(const i of[-.22,.22])s.add(ce(.07,.2,.07,t,n,.1,i));return ar("none",s)}Wc(3820134,16762730);new ln(1,1,.08);const Ie=s=>[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255],pn=(s,t,e)=>[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e],uo=(s,t,e)=>{const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)},Xr=[{f:0,phase:"dawn",sky:16761008,top:9087216,sun:16760992,sunI:1.19,hemiSky:16769256,hemiGround:9072736,hemiI:.99,warm:.4,bright:1},{f:.12,phase:"morning",sky:12642559,top:4892927,sun:16773840,sunI:1.68,hemiSky:15267071,hemiGround:8032352,hemiI:1.12,warm:.25,bright:1},{f:.35,phase:"noon",sky:11067647,top:3840255,sun:16775920,sunI:1.96,hemiSky:14741759,hemiGround:8429664,hemiI:1.22,warm:.15,bright:1},{f:.58,phase:"afternoon",sky:12116223,top:4890879,sun:16773328,sunI:1.75,hemiSky:15790312,hemiGround:8425562,hemiI:1.16,warm:.3,bright:1},{f:.63,phase:"afternoon",sky:16767136,top:5937392,sun:16760944,sunI:1.6,hemiSky:16771272,hemiGround:8024136,hemiI:1.05,warm:.55,bright:1},{f:.68,phase:"dusk",sky:16751196,top:6970048,sun:16752736,sunI:1.4,hemiSky:16760992,hemiGround:6965840,hemiI:.92,warm:.7,bright:1},{f:.78,phase:"night",sky:2375834,top:925264,sun:10137855,sunI:.45,hemiSky:7377151,hemiGround:2633824,hemiI:1,warm:.1,bright:1.05},{f:.96,phase:"late",sky:1980552,top:661574,sun:9085183,sunI:.42,hemiSky:6324464,hemiGround:2107480,hemiI:.92,warm:.1,bright:1.02},{f:1,phase:"dawn",sky:16761008,top:9087216,sun:16760992,sunI:1.19,hemiSky:16769256,hemiGround:9072736,hemiI:.99,warm:.4,bright:1}],ha=[16735370,16758784,3526842,7097343,16747084];function p1(s){return s>=.5?uo(.66,.72,s):1-uo(.02,.06,s)}function m1(s){s=(s%1+1)%1;let t=0;for(;t<Xr.length-2&&s>=Xr[t+1].f;)t++;const e=Xr[t],n=Xr[t+1],i=uo(0,1,(s-e.f)/(n.f-e.f)),r=p1(s);return{phase:i<.5?e.phase:n.phase,sky:pn(Ie(e.sky),Ie(n.sky),i),top:pn(Ie(e.top),Ie(n.top),i),sun:pn(Ie(e.sun),Ie(n.sun),i),sunI:e.sunI+(n.sunI-e.sunI)*i,hemiSky:pn(Ie(e.hemiSky),Ie(n.hemiSky),i),hemiGround:pn(Ie(e.hemiGround),Ie(n.hemiGround),i),hemiI:e.hemiI+(n.hemiI-e.hemiI)*i,warm:e.warm+(n.warm-e.warm)*i,bright:e.bright+(n.bright-e.bright)*i,lamps:r,windows:Math.max(r,s>.62&&s<.72?uo(.62,.7,s)*.5:0),neon:.25+.75*r,sunH:s<.72?Math.sin(s/.72*Math.PI):.15}}const g1={sky:Ie(13648010),top:Ie(1838134),sun:Ie(12097791),sunI:.9,hemiSky:Ie(10119376),hemiGround:Ie(3807288),hemiI:1.05,warm:.3,bright:1.02,sunH:.35};function Ry(s,t){const e=m1(s);if(t<=0)return e;const n=Math.min(1,t),i=(o,a)=>o+(a-o)*n,r=g1;return{phase:n>.5?"night":e.phase,sky:pn(e.sky,r.sky,n),top:pn(e.top,r.top,n),sun:pn(e.sun,r.sun,n),sunI:i(e.sunI,r.sunI),hemiSky:pn(e.hemiSky,r.hemiSky,n),hemiGround:pn(e.hemiGround,r.hemiGround,n),hemiI:i(e.hemiI,r.hemiI),warm:i(e.warm,r.warm),bright:i(e.bright,r.bright),lamps:i(e.lamps,1),windows:i(e.windows,1),neon:i(e.neon,1),sunH:i(e.sunH,r.sunH)}}const Wi=s=>s>=4&&s<=10||s>=-7&&s<=-4?.2:0;let kh=7;const qr=()=>(kh=kh*16807%2147483647)/2147483647;class Cy{constructor(){this.things=[],this.plats=[],this.puddles=[],this.trolleys=[],this.neonBase=[],this.parts=[],this.cur=[]}box(t,e,n,i,r,o,a,c=0,l=this.cur){const h=new ln(t,e,n);c&&h.rotateY(c),h.translate(r,o+e/2,a),ei(h,i),l.push(h)}cyl(t,e,n,i,r,o,a=8,c=this.cur){const l=new Bn(t,t,e,a);l.translate(i,r+e/2,o),ei(l,n),c.push(l)}shadow(t,e,n){const i=new Qs(n,10).toNonIndexed();i.rotateX(-Math.PI/2),i.translate(t,Wi(e)+.012,e),ei(i,Wi(e)>0?9406588:5204544),this.cur.push(Hh(i))}flush(t){if(!this.cur.length)return;const e=ir(this.cur,!1);this.cur.forEach(n=>n.dispose()),this.cur=[],this.parts.push({g:e,x:t})}thing(t,e,n){this.things.push({id:this.things.length,kind:t,x:e,z:n})}build(t,e,n){const i=[15130064,12043442,13212810,9413557,16051158,15247484,8368296,14205040];for(let d=-108;d<110;d+=54){for(let _=d;_<d+54;_+=1){const y=qr();if(_%7===0&&y<.5)this.box(1.1,.45,.7,11565658,_,.2,9.2),this.box(.9,.5,.5,7314008,_,.65,9.2),this.shadow(_,9.2,.9),this.plats.push({x0:_-.55,x1:_+.55,z0:8.85,z1:9.55,h:.65});else if(_%9===3)this.box(.9,1.2,.04,i[Math.floor(y*i.length)],_,1.1,9.86),this.box(.7,.25,.05,16051158,_,1.9,9.85);else if(_%11===5)this.box(.06,.06,.6,3027512,_,3.1,9.6),this.box(.08,.6,.7,i[(_+200)%i.length],_,2.4,9.4);else if(_%13===8)for(let v=0;v<4;v++)this.box(.5,.08,1.1,v%2?16051158:i[(_+300)%3+5],_-.75+v*.5,2.6,9.3,0);_%6===1&&qr()<.5&&(this.cyl(.12,.6,5922662,_,.2,-4.5,6),this.shadow(_,-4.5,.3)),_%10===4&&(this.box(.6,.3,.6,13212810,_,.2,-6.6),this.box(.5,.35,.5,15239840,_,.5,-6.6))}for(const _ of e)_.x>=d&&_.x<d+54&&_.z>0&&this.box(16,.04,.04,2763312,_.x+8,4.25,_.z+.6);this.flush(d+27)}const r=(d,_,y,v)=>{v(),this.thing(d,_,y)},o=(d,_)=>r("bin",d,_,()=>{const y=Wi(_);this.cyl(.35,.8,4880986,d,y,_,8),this.cyl(.4,.08,3027512,d,y+.8,_,8),this.shadow(d,_,.55)});[-30,18,40,-80,92].forEach(d=>o(d,9.3));const a=d=>r("hydrant",d,4.7,()=>{this.cyl(.18,.55,13650490,d,.2,4.7,8),this.cyl(.24,.1,13650490,d,.75,4.7,8),this.box(.5,.1,.12,13650490,d,.5,4.7),this.shadow(d,4.7,.35)});[-34,6,52,96].forEach(a);const c=(d,_)=>r("phone",d,_,()=>{const y=Wi(_);this.box(1,2.3,1,13123626,d,y,_),this.box(.8,1.4,.05,12575462,d,y+.6,_+(_>0?-.5:.5)),this.box(1.1,.2,1.1,9054746,d,y+2.3,_),this.shadow(d,_,.8)});c(-6,9),c(70,-5.8);const l=d=>r("vending",d,9.35,()=>{this.box(1.1,2,.7,3828432,d,.2,9.35),this.box(.8,1.1,.05,16051158,d-.1,.9,8.98),this.shadow(d,9.35,.8)});l(10),l(58);const h=d=>r("news",d,9.3,()=>{this.box(.6,.9,.5,3111562,d,.2,9.3),this.box(.5,.3,.05,16051158,d,.75,9.04),this.shadow(d,9.3,.5)});h(36),h(-48);const u=d=>r("door",d,9.8,()=>{this.box(1.2,2.1,.1,8014378,d,.2,9.86),this.box(.12,.12,.1,14729312,d+.4,1.2,9.78),this.box(1.6,.15,.6,12043442,d,2.4,9.6)});u(-50),u(-79),u(-100);const f=d=>r("meter",d,4.6,()=>{this.cyl(.06,1.1,5922662,d,.2,4.6,6),this.box(.3,.4,.22,9080984,d,1.3,4.6),this.shadow(d,4.6,.25)});[-26,44,86,-66].forEach(f);const p=d=>r("mailbox",d,9.3,()=>{this.box(.6,1,.6,3166384,d,.2,9.3),this.cyl(.3,.6,3166384,d,1,9.3,8),this.shadow(d,9.3,.5)});p(-12),p(80),r("busstop",20,-5.6,()=>{this.box(3.4,.08,1.2,9413557,20,2.4,-6.2),this.box(3.4,2.2,.06,12575462,20,.2,-6.8),this.box(.08,2.2,.08,5922662,18.4,.2,-5.7),this.box(.08,2.2,.08,5922662,21.6,.2,-5.7),this.box(2.6,.1,.5,10118192,20,.6,-6.4),this.box(.6,.6,.06,16758784,22.2,2,-5),this.shadow(20,-6.2,1.8)}),this.plats.push({x0:18.7,x1:21.3,z0:-6.65,z1:-6.15,h:.7}),r("piano",-74,-9.5,()=>{this.box(1.6,1.2,.6,13130378,-74,0,-9.8),this.box(1.6,.06,.3,16051158,-74,.8,-9.4),this.box(.8,.45,.4,6965802,-74,0,-9),this.shadow(-74,-9.6,1.1)}),r("graffiti",47,-7.6,()=>{this.box(8,.9,.4,13220008,47,0,-8);for(let d=0;d<6;d++)this.box(1+qr(),.5,.04,ha[d%5],44+d*1.2,.2,-7.78)}),this.plats.push({x0:43,x1:51,z0:-8.2,z1:-7.8,h:.9}),this.thing("fountain",Dn.fountain.x,Dn.fountain.z+2.4),this.thing("pigeons",Dn.pigeons.x,Dn.pigeons.z),this.thing("pigeons",Dn.pigeons2.x,Dn.pigeons2.z),this.thing("sprinkler",Dn.sprinkler.x,Dn.sprinkler.z);for(const d of e)this.thing("lamp",d.x,d.z);for(const[d,_,y]of[[-98,-90,.55],[-82,-76,.55],[-48,-42,.55],[-70,-66,.42]]){const v=_===-66?-15:-7.6;this.box(_-d,y,.35,y<.5?16051158:13220008,(d+_)/2,0,v),this.plats.push({x0:d,x1:_,z0:v-.2,z1:v+.2,h:y})}for(const[d,_]of[[-14,6.2],[28,-5.2],[-56,6.5],[62,6],[-64,-10],[8,-10.5]]){const y=new Qs(.9,12).toNonIndexed();y.rotateX(-Math.PI/2),y.scale(1.3,1,.8),y.translate(d,Wi(_)+.015,_),ei(y,6981800),this.cur.push(Hh(y)),this.puddles.push({x:d,z:_,r:1})}this.flush(0);const g=new Si({vertexColors:!0});for(const d of this.parts){const _=new ne(d.g,g);_.castShadow=!0,_.receiveShadow=!0,t.add(_),d.x!==0&&n(_,d.x)}for(const[d,_]of[[-18,5.6],[-58,5.6],[30,-5.4]]){const y=[];this.box(1,.6,.7,12107976,0,.45,0,0,y),this.box(.9,.05,.6,9080984,0,.2,0,0,y),this.box(.06,.4,.7,13650490,-.55,.75,0,0,y);for(const[E,T]of[[-.4,-.3],[.4,-.3],[-.4,.3],[.4,.3]])this.box(.1,.16,.1,2763312,E,0,T,0,y);const v=new ne(ir(y,!1),g);v.castShadow=!0,v.position.set(d,Wi(_),_),t.add(v);const P={id:this.things.length,kind:"trolley",x:d,z:_};this.things.push(P),this.trolleys.push({g:v,home:v.position.clone(),thing:P})}const x=14;this.neon=new Uu(new ln(2,.45,.06),new mn({color:16777215}),x);const m=new Rt;for(let d=0;d<x;d++){const _=38+d*2.6+qr(),y=3.2+d%3*.9;m.makeTranslation(_,y,9.82),this.neon.setMatrixAt(d,m);const v=new Mt(ha[d%ha.length]);this.neonBase.push(v),this.neon.setColorAt(d,v)}t.add(this.neon)}nearest(t,e,n=1.8){let i=null,r=n;for(const o of this.things){const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,i=o)}return i}inPuddle(t,e){return this.puddles.some(n=>Math.hypot(n.x-t,n.z-e)<n.r)}}function ei(s,t){const e=new Mt(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;s.setAttribute("color",new Ee(i,3))}function Hh(s){const t=s.attributes.position.count;return s.setIndex([...Array(t).keys()]),s}function Py(s,t){const e=document.createElement("canvas");e.width=64,e.height=32;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,64,32),n.fillStyle="rgba(255,255,255,0.9)",n.fillRect(0,0,64,2),n.fillRect(0,30,64,2);const i="#fff8e8",r=(c,l,h,u,f=i)=>{n.fillStyle=f,n.fillRect(c,l,h,u)},o=(c,l,h,u=i)=>{n.fillStyle=u,n.beginPath(),n.arc(c,l,h,0,Math.PI*2),n.fill()};switch(s){case"bottle":r(30,5,4,6),r(27,11,10,16),r(29,16,6,5,"#c84a2a");break;case"cup":r(25,10,12,15),r(37,13,4,7),r(26,6,2,3),r(30,5,2,3),r(34,6,2,3);break;case"mug":r(24,9,14,17,"#ffc030"),r(24,7,14,4),r(38,12,4,9);break;case"noodle":r(20,16,24,4),r(22,20,20,5),r(25,25,14,2),r(28,6,2,10,"#ffd060"),r(34,4,2,12,"#ffd060");break;case"hotdog":r(18,15,28,7,"#ffd090"),r(16,12,32,5,"#d8402a"),r(20,13,4,2,"#ffd020"),r(28,13,4,2,"#ffd020"),r(36,13,4,2,"#ffd020");break;case"book":r(20,8,11,17),r(33,8,11,17),r(31,8,2,17,"#3a2a20");break;case"ring":o(32,18,8,"#ffd040"),o(32,18,5,t),r(29,6,6,5,"#a0e8ff");break;case"bread":r(20,12,24,13,"#f0b060"),r(22,10,20,3,"#f0b060"),r(25,14,2,6,"#a05a20"),r(31,14,2,6,"#a05a20"),r(37,14,2,6,"#a05a20");break;case"train":r(22,6,20,18),r(25,9,14,6,t),o(27,20,2,t),o(37,20,2,t),r(22,25,4,3),r(38,25,4,3);break;case"tv":r(20,7,24,16),r(23,10,18,10,"#6a8aff"),r(26,24,3,3),r(35,24,3,3);break;case"ball":o(32,16,9),r(31,7,2,18,"#d03a2a"),r(23,15,18,2,"#d03a2a");break;case"pizza":for(let c=0;c<18;c++)r(23+c/2,6+c,18-c,1,"#ffd060");r(22,5,20,3,"#c87a30"),o(28,10,2,"#d8402a"),o(34,12,2,"#d8402a"),o(31,17,1.6,"#d8402a");break;case"star":for(let c=0;c<5;c++){const l=-Math.PI/2+c*Math.PI*2/5;o(32+Math.cos(l)*8,16+Math.sin(l)*8,3,"#ffd040")}o(32,16,6,"#ffd040");break}const a=new Ou(e);return a.colorSpace=Se,a.magFilter=ee,a.minFilter=Ye,a}function Iy(s,t,e=1){const n=[],i=(m,d,_,y,v,P,E,T=0)=>{const C=new ln(m,d,_);T&&C.rotateZ(T),C.translate(v,P,E),ei(C,y),n.push(C)},r=(m,d,_,y,v,P,E,T=8,C=0,b=0)=>{const M=new Bn(m,d,_,T);C&&M.rotateX(C),b&&M.rotateZ(b),M.translate(v,P,E),ei(M,y),n.push(M)},o=(m,d,_,y)=>{const v=new Bc(m,d,6,12);v.translate(0,y,0),ei(v,_),n.push(v)};if(i(.5,.3,.5,2763306,-1.2,.15,-.9),i(.5,.3,.5,2763306,1.2,.15,-.9),s==="hotdog"){i(.35,1.2,.35,16052448,-1,.6,0,-.3),i(.35,1.2,.35,16052448,1,.6,0,.3),i(.7,.3,.6,16052448,-1.3,.15,.1),i(.7,.3,.6,16052448,1.3,.15,.1),r(.75,.75,4.6,15908976,0,1.75,.15,8,0,Math.PI/2),r(.55,.55,5.6,13123626,0,2.35,0,8,0,Math.PI/2);for(let m=0;m<6;m++)i(.55,.14,.2,16764960,-1.9+m*.75,2.92,-.2,m%2?.5:-.5)}else if(s==="burger"){r(1.6,1.7,.6,15245392,0,1,0,10),r(1.75,1.75,.5,6961696,0,1.55,0,10),r(1.85,1.85,.15,16764960,0,1.85,0,10),r(1.85,1.85,.15,5292096,0,2,0,10),r(1.2,1.7,1.1,15771728,0,2.6,0,10);for(const[m,d]of[[-.5,-1.3],[.4,-1.4],[0,-.9]])i(.12,.06,.2,16773328,m,3.05,d);i(.3,.7,.3,9079434,0,.35,0)}else if(s==="donut"){i(.3,1.2,.3,9079434,0,.6,0),o(1.6,.75,14721120,2.6),o(1.6,.55,16743088,2.6);const m=[16777215,4247807,16764960,6348896];for(let d=0;d<10;d++){const _=d/10*Math.PI*2;i(.3,.1,.1,m[d%4],Math.cos(_)*1.6,2.6+Math.sin(_)*1.6,-.62,_)}}else if(s==="pizza"){const m=new Bn(3,3,.4,3,1,!1,0,Math.PI/3);m.rotateX(Math.PI/2),m.translate(0,.8,0),ei(m,16762960),n.push(m),i(3.2,.45,.5,13666880,1.5*Math.cos(Math.PI/3),.8+0,0);for(const[d,_]of[[.4,2.2],[-.5,1.6],[.2,1.3]])r(.32,.32,.1,13122090,d,_,-.25,8,Math.PI/2);i(.3,.9,.3,9079434,0,.45,0)}else{r(.6,1.8,1.9,16051424,0,1.25,0,10),r(.2,.6,.6,16051424,0,2.5,0,8);for(let m=0;m<8;m++){const d=m/8*Math.PI*2;i(.12,1.2,.1,14734528,Math.cos(d)*1.2,1.5,Math.sin(d)*1.2)}i(.18,.18,.05,2759194,-.35,1.5,-1.4),i(.18,.18,.05,2759194,.35,1.5,-1.4)}const a=ir(n.map(m=>m.index?m.toNonIndexed():m));a.scale(e,e,e),a.computeBoundingBox();const c=a.boundingBox.min.y,l=a.boundingBox.max.y,h=a.attributes.position,u=new Float32Array(h.count);for(let m=0;m<h.count;m++)u[m]=1-Math.min(1,Math.max(0,(h.getY(m)-c)/(l-c)));a.setAttribute("up",new Ee(u,1));const f=new Si({vertexColors:!0,emissive:t,emissiveIntensity:0});f.onBeforeCompile=m=>{m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
attribute float up;
varying float vUp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vUp = up * up;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
varying float vUp;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vUp;`)};const p=new ne(a,f);p.castShadow=!0;const g=new ne(new Bn(2.4*e,.8*e,3.2*e,8,1,!0),new mn({color:t,transparent:!0,opacity:0,blending:ro,depthWrite:!1,side:nn,fog:!1}));g.position.y=1.6*e;const x=new pe;return x.add(p,g),{g:x,mat:f,cone:g}}const Ly=new Uint8Array([2,2,0,2,2,0,2,2,0,2,2,0,2,2,0,2,3,0,2,3,1,2,4,1,2,5,1,2,5,2,2,6,2,3,7,3,3,8,3,4,9,4,5,11,5,7,12,5,8,13,6,9,14,6,10,15,7,11,17,7,13,18,8,14,18,9,15,19,10,17,20,11,18,21,11,19,22,12,20,22,13,21,23,14,22,23,15,23,24,16,24,24,17,25,25,18,26,26,20,26,26,21,27,27,22,28,28,23,29,28,24,30,29,25,30,30,26,31,30,27,32,31,27,32,32,28,33,32,29,33,33,30,33,34,30,34,34,31,34,35,31,34,35,32,35,36,32,35,37,33,36,37,33,37,38,34,37,38,34,38,38,34,39,39,35,40,39,35,40,39,35,41,39,36,42,40,36,43,40,36,44,40,37,44,40,38,45,41,38,46,41,40,46,41,41,47,42,42,48,42,44,50,43,45,51,43,47,52,44,48,53,45,49,54,47,51,55,48,52,57,49,54,58,51,55,59,52,56,61,53,57,62,54,58,64,56,58,66,57,59,68,58,59,70,60,59,72,61,59,73,62,59,75,63,59,77,63,59,79,64,59,81,64,60,83,65,60,85,65,60,87,66,60,89,67,60,90,67,60,92,68,60,93,68,60,94,69,60,95,69,60,96,70,60,97,70,60,97,70,60,98,71,60,99,71,60,99,72,60,100,72,60,101,72,60,102,73,60,103,73,60,103,73,60,104,74,61,105,74,61,106,75,61,107,75,61,108,75,61,109,76,61,110,77,61,111,77,61,112,78,61,112,78,61,113,79,62,113,79,63,114,80,64,114,81,65,115,82,66,115,83,67,115,84,68,115,84,69,115,85,70,115,86,71,115,87,72,116,88,73,116,88,74,116,89,75,116,90,76,116,91,77,116,91,78,117,92,79,117,93,80,118,93,81,118,94,82,119,94,83,119,95,84,120,96,85,121,96,86,122,97,87,123,98,88,124,98,89,125,99,90,126,99,91,127,100,92,128,100,93,130,101,94,131,101,95,132,102,96,134,102,97,135,102,98,137,103,99,139,104,100,140,105,101,142,106,102,144,107,103,145,108,104,147,109,105,149,110,106,151,111,107,153,112,108,155,113,109,157,114,110,159,116,111,161,117,112,163,118,113,165,120,114,167,121,115,170,123,116,171,124,117,173,126,118,175,128,119,177,130,120,179,132,121,181,135,122,182,137,123,183,140,124,185,144,125,186,147,126,187,150,128,188,154,132,189,157,137,190,160,141,191,163,141,192,166,142,193,168,142,193,170,142,194,173,143,195,175,143,196,176,144,196,178,145,196,180,146,197,181,146,197,182,147,197,183,148,198,184,149,198,187,150,198,190,151,199,192,152,199,195,153,199,198,154,199,201,155,200,203,156,200,206,157,201,208,158,201,211,159,202,213,160,202,215,161,203,217,161,204,220,162,205,222,163,207,222,164,210,222,165,213,223,166,217,223,166,220,223,167,224,224,168,227,224,169,230,224,170,234,225,171,237,226,172,240,227,173,243,228,174,246,228,175,249,229,176,252,230,178,253,231,180,253,232,181,254,233,183,254,234,184,254,234,185,254,235,187,254,236,188,254,237,189,254,238,190,254,238,191,255,238,192,255,239,193,255,239,194,255,239,194,255,240,195,255,240,195,255,240,195,255,241,195,255,242,199,255,243,203,255,243,206,255,244,210,255,245,213,255,246,217,255,247,220,255,248,224]),Dy=new Uint8Array([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,2,0,0,2,1,0,2,1,0,3,1,0,3,1,1,4,1,1,4,2,2,7,2,2,9,2,3,11,3,3,14,3,4,16,4,4,19,4,5,21,5,6,23,5,6,26,6,7,28,7,8,30,7,8,33,9,9,35,11,10,37,12,10,39,14,11,39,16,12,39,17,12,40,19,13,40,20,14,40,22,15,41,23,16,42,25,17,42,26,19,43,27,20,44,28,22,44,30,23,45,30,25,46,30,27,47,30,28,49,30,30,50,31,31,51,31,32,52,31,34,53,32,35,54,33,36,55,34,37,56,35,37,57,36,38,58,36,38,59,37,39,59,38,39,60,39,39,61,40,39,61,41,39,62,42,39,62,43,40,63,44,40,63,45,40,64,45,40,64,45,40,64,45,40,65,46,41,65,46,41,65,46,41,67,47,41,68,47,41,69,47,41,71,47,41,72,48,41,74,48,41,75,49,41,77,49,41,78,50,41,80,50,42,82,51,42,83,52,42,85,52,42,87,53,42,88,55,42,89,56,43,90,57,44,90,59,44,91,61,45,92,63,45,92,65,46,93,67,47,93,69,48,94,72,48,95,74,49,96,77,50,97,80,51,98,83,52,99,86,52,100,89,53,102,92,54,103,95,54,105,99,54,107,101,55,109,104,57,111,107,60,113,110,62,115,113,64,117,116,67,120,119,69,122,122,72,125,124,75,128,126,78,132,129,82,136,131,86,140,133,91,144,134,95,148,136,100,151,138,105,155,140,108,159,142,111,162,144,114,166,145,118,169,147,122,173,149,126,176,151,129,180,152,133,182,154,136,184,156,138,185,158,140,187,159,142,189,161,144,190,162,146,192,164,147,194,165,148,195,167,149,196,168,150,197,170,150,198,171,150,199,172,151,200,174,151,201,175,151,202,177,151,203,178,152,204,180,152,205,181,152,206,183,152,207,184,153,208,186,153,209,188,153,210,190,153,211,191,153,212,193,154,213,195,154,214,197,154,215,199,154,216,201,158,217,203,163,218,204,169,219,206,175,220,207,180,221,209,186,222,210,192,223,212,198,224,213,204,225,214,209,226,215,215,227,216,221,228,217,227,229,218,229,230,219,230,231,220,231,232,221,232,233,222,233,234,223,234,235,224,235,236,225,236,237,225,237,238,226,238,239,227,239,240,227,240,241,228,241,242,228,242,243,229,243,244,229,244,245,230,244,246,230,244,247,231,244,247,231,245,248,231,245,248,232,245,248,232,246,249,233,246,249,233,246,249,233,246,250,234,246,250,234,246,250,235,246,251,235,247,251,236,247,251,237,247,251,237,247,251,238,247,251,238,247,252,239,247,252,240,247,252,240,247,252,241,248,252,241,248,252,242,248,252,242,248,253,243,248,253,243,248,253,244,248,253,244,249,253,244,249,253,244,249,253,244,249,253,245,249,253,245,249,253,245,249,253,245,250,253,245,250,253,245,250,253,246,250,253,246,250,253,246,250,253,246,250,253,246,250,254,246,250,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,247,251,254,248,251,254,248,252,254,249,252,255,249,252,255,250,252,255,250,253,255,251,253,255,251,253]),Ny=.6;function Uy(s,t,e,n=1){const i=new Uint8Array(s.length);for(let r=0;r<3;r++){let o=0;for(let a=0;a<256;a++){const c=s[a*3+r]/255,l=Math.pow(1-c,2)*c*4,h=Math.pow(c,2)*(1-c)*4,u=c+n*(t[r]*l+e[r]*h),f=Math.max(o,Math.max(0,Math.min(255,Math.round(u*255))));i[a*3+r]=f,o=f}}return i}const Fy={shadow:[.05,-.03,.12],high:[.08,.01,-.09]},zy={shadow:[-.02,0,.05],high:[.03,.01,-.03]},mf={ghost:0,ghostPx:0,drift:0,warp:0,warpHz:0,chroma:0,glow:0,glowWarm:0,breathe:0,breatheHz:0,smear:0},Gh={beer:{ghost:.22,ghostPx:2,drift:.5,warp:1.6,warpHz:.5,chroma:1,glow:.3,glowWarm:.6,breathe:.3,breatheHz:.18,smear:.7},vodka:{ghost:.3,ghostPx:3,drift:1,warp:2.6,warpHz:.9,chroma:1.5,glow:.25,glowWarm:.3,breathe:.4,breatheHz:.28,smear:1},wine:{ghost:.18,ghostPx:1.6,drift:.3,warp:1.3,warpHz:.3,chroma:.7,glow:.5,glowWarm:1,breathe:.35,breatheHz:.13,smear:.8},mix:{ghost:.32,ghostPx:2.6,drift:.35,warp:2,warpHz:.35,chroma:1.3,glow:.45,glowWarm:.45,breathe:.45,breatheHz:.12,smear:1}};function Oy(s,t,e,n=1){const i=Math.max(0,Math.min(1,s));if(i<=.02)return{...mf};const r=Gh[t&&t in Gh?t:"beer"],o=Math.pow(i,1.3),a={ghost:r.ghost*o,ghostPx:r.ghostPx*(.5+.5*o),drift:r.drift,warp:r.warp*o,warpHz:r.warpHz,chroma:r.chroma*o,glow:r.glow*o,glowWarm:r.glowWarm,breathe:r.breathe*o,breatheHz:r.breatheHz,smear:r.smear*o},c=Math.max(0,Math.min(2,n));if(c!==1)for(const l of["ghost","warp","chroma","glow","breathe","smear"])a[l]*=c;return e<=0&&(a.ghost=0,a.chroma=0,a.smear=0,a.glow=0),a}function x1(s,t,e,n){if(n<=0||t<=0)return 0;const i=s/t*e*n;return Math.abs(i)<.6?0:Math.max(-4,Math.min(4,i))}const Vh={secs:1.5,inEnd:.15,outStart:1.05,outEnd:1.45,slow:.25,downbeat:.9,waveSecs:.55},gf={ts:1,fov:1,blur:0,wave:0,waveA:0,grey:0},dc=s=>Math.max(0,Math.min(1,s)),Ln=s=>{const t=dc(s);return t*t*(3-2*t)};function By(s,t,e=!1){if(e||s<0||s>=Vh.secs)return{...gf};const n=t?1:.5,i=Vh,r=1-(1-i.slow)*n,o=Ln(s/i.inEnd),a=Ln((s-i.outStart)/(i.outEnd-i.outStart)),c=1+(r-1)*o*(1-a),l=Ln(s/.3)*(1-Ln((s-i.downbeat)/.12)),h=s>=i.downbeat?Math.sin(dc((s-i.downbeat)/.5)*Math.PI)*.02:0,u=1-.07*n*l+h*n,f=Ln(s/.25)*(1-Ln((s-.5)/.4))*.45,p=s>=i.downbeat?Math.exp(-(s-i.downbeat)*7):0,g=dc((f+p)*n),x=(s-i.downbeat)/i.waveSecs,m=s>=i.downbeat?1.4*Ln(x):0,d=s>=i.downbeat?n*(1-Ln((s-i.downbeat)/(i.secs-i.downbeat))):0,_=n*.5*Ln(s/.4)*(s<i.downbeat?1:0);return{ts:c,fov:u,blur:g,wave:m,waveA:d,grey:_}}const ky=(s,t)=>s+":"+t,Hy=320,Gy=[200,240,280,320,360,420],_1=[{name:"low",rows:240,shadow:0,shadowBox:0,lamps:3,glow:!1,ao:0,aoN:0},{name:"mid",rows:320,shadow:512,shadowBox:13,lamps:5,glow:!0,ao:.4,aoN:1},{name:"high",rows:420,shadow:1024,shadowBox:18,lamps:8,glow:!0,ao:.45,aoN:2}];function Vy(s,t){const e=_1[s].shadow;return e>0&&t<500?e/2:e}function Wy(s){if(s.length<3)return null;const t=(s[0]+s[1]+s[2])/3;return t>=50?2:t>=32?1:0}function v1(s,t,e){const n=Math.max(0,Math.min(1,e)),i=.55*n,r=[s[0]+(t[0]-s[0])*i,s[1]+(t[1]-s[1])*i,s[2]+(t[2]-s[2])*i],o=io?[.19+.7*(1-n),.2+.69*(1-n),.38+.52*(1-n)]:[.19+.63*(1-n),.2+.69*(1-n),.38+.6*(1-n)],a=.3+.15*n;return[r[0]+(o[0]-r[0])*a,r[1]+(o[1]-r[1])*a,r[2]+(o[2]-r[2])*a]}const y1={falloff:.32,edge:.55,haze:.4,shadow:.5};function M1(){const s=new Uint8Array(2048);for(let e=0;e<2;e++)for(let n=0;n<256;n++)s.set([n,n,n,255],(e*256+n)*4);const t=new _o(s,256,2,Ue);return t.magFilter=ee,t.minFilter=ee,t.needsUpdate=!0,t}const Wh=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,S1=`
uniform sampler2D tScene;
uniform vec2 res;
uniform float scale;
uniform float sat, warm, contrast, glow, red, jitter, time, bright;
uniform sampler2D tDepth;
uniform float cnear, cfar, outline, moon, night, tilt, lutAmt, raw;
uniform vec2 focus; // nuance pass: his place on screen (0..1)
uniform float falloff, edgeHi, hazeAmt, shadowAmt;
uniform vec3 shadowCol;
uniform vec3 skyTop, skyHor, fogCol, moonDir, camPos;
uniform vec4 lmAz; // look pass: azimuth of the gold dome and the steeple, and how much each shows on the skyline
uniform mat4 camInv;
uniform sampler2D tBloom, tBloom2, tLut3; // beta: bloom (two blurred levels) and the T08 3D grade as a 33-slice strip
uniform float bloomK, lut3Amt, hazeNear, hazeFar, vigAmt;
uniform float dGhost, dGhostPx, dDrift, dWarp, dWarpHz, dChroma, dGlowWarm, dBreathe, dBreatheHz; // beer goggles (drunkfx.ts)
uniform vec2 dSmear; // low-res pixels the camera turned this frame (smear)
uniform float mBlur, mWave, mWaveA, mGrey; // the drink moment (swig.ts): zoom smear, colour wave, held breath
uniform sampler2D tLut; // look pass: per-channel colour curves taken from David's pictures (row 0 day B02, row 1 night T08)
uniform vec3 sunDir; // art round 3 (atmos.ts): the sun, golden hour, clouds, wet streets, contact shadows, birds
uniform float golden, cloudAmt, wetAmt, aoAmt, aoPx, aoN, birdsAmt, art3;
// New city (newlight.ts, 2026-11-27): its own sky (B02 / B01 / T08), the painted skyline ring, candy tone mapping,
// a depth tilt-shift (FAR only) and three time-of-day grades. All 0 = the look before (the old map never sets them).
uniform float nc, tone, expo, tiltD, tiltFocus, tiltPx, glowAmt, panoOn, lutN, fxaaOn;
uniform vec3 skyMid, skyGlow, lutW;
uniform vec2 panoE;
uniform sampler2D tPano, tPanoM, tLutD, tLutK, tLutN;
varying vec2 vUv;
vec3 tap(vec2 p) { return texture2D(tScene, p).rgb; }
// light-v1 (new city): FXAA, the cheap console version (5 luma taps + 2 or 4 along the edge), on the full-res frame
// (tScene is linear-filtered when the new city is on, so the taps between texels blend). Sky texels are unpainted here.
float fxL(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec3 fxaa(vec2 p, vec2 o) {
  vec3 cM = tap(p);
  float lM = fxL(cM), lNW = fxL(tap(p + vec2(-0.5, -0.5) * o)), lNE = fxL(tap(p + vec2(0.5, -0.5) * o)),
        lSW = fxL(tap(p + vec2(-0.5, 0.5) * o)), lSE = fxL(tap(p + vec2(0.5, 0.5) * o));
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE))), lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.04, lMax * 0.12)) return cM;
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float rd = 1.0 / (min(abs(dir.x), abs(dir.y)) + max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125));
  dir = clamp(dir * rd, vec2(-6.0), vec2(6.0)) * o;
  vec3 a = 0.5 * (tap(p + dir * (1.0 / 3.0 - 0.5)) + tap(p + dir * (2.0 / 3.0 - 0.5)));
  vec3 b = a * 0.5 + 0.25 * (tap(p - dir * 0.5) + tap(p + dir * 0.5));
  float lB = fxL(b);
  return (lB < lMin || lB > lMax) ? a : b;
}
vec2 snapPx(vec2 p) { return (floor(p * res) + 0.5) / res; } // whole low-res pixels: the pixel art never blurs
bool skyAt(vec2 p) { return texture2D(tDepth, p).x > 0.99999; }
float lin(vec2 p) { float d = texture2D(tDepth, p).x; float z = d * 2.0 - 1.0; return 2.0 * cnear * cfar / (cfar + cnear - z * (cfar - cnear)); }
float h1(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float adiff(float a, float b) { return mod(a - b + 3.14159265, 6.2831853) - 3.14159265; }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h1(i), h1(i + vec2(1.0, 0.0)), f.x), mix(h1(i + vec2(0.0, 1.0)), h1(i + vec2(1.0, 1.0)), f.x), f.y); }
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.07 + vec2(17.1, 9.3); a *= 0.5; } return s; }
// Art round 3: B02's soft stylised clouds. A flat cloud layer seen from below (squashed toward the horizon), puffy
// edges from the noise, lit on the sun's side and shaded below, a few soft bands like a painting. Day white, golden
// hour peach with lilac shadows, night dim violet lit by the moon (T08's dark wisps). Returns colour and coverage.
vec4 cloudsAt(vec3 dir) {
  if (dir.y < 0.0 || cloudAmt <= 0.0) return vec4(0.0);
  vec2 uv = dir.xz / (dir.y + 0.25) * 0.8 + vec2(time * 0.006, time * 0.002 + 3.1);
  float n = fbm(uv);
  float thr = mix(0.64, 0.34, cloudAmt);
  float d = smoothstep(thr, thr + 0.1, n);
  d *= smoothstep(0.06, 0.16, dir.y) * (1.0 - 0.8 * smoothstep(0.3, 0.8, dir.y)); // above the skyline (B02: a few puffs low in the sky) // clear near the skyline and overhead
  if (d <= 0.001) return vec4(0.0);
  vec2 sd = normalize(sunDir.xz + vec2(1e-4)) * 0.09;
  float lit = clamp((n - fbm(uv + sd)) * 5.0 + 0.68, 0.0, 1.0); // denser toward the sun = shaded side
  lit = mix(lit, floor(lit * 3.0 + 0.5) / 3.0, 0.5); // soft painted bands
  lit *= smoothstep(thr - 0.02, thr + 0.35, n) * 0.35 + 0.65; // thin edges lighter, thick bellies darker
  vec3 dayL = vec3(1.0, 0.99, 0.97), dayS = mix(skyTop, vec3(0.78, 0.83, 0.92), 0.65);
  vec3 golL = vec3(1.0, 0.62, 0.36), golS = vec3(0.92, 0.38, 0.45); // B01: coral clouds, lit orange at the edges
  vec3 nL = vec3(0.36, 0.32, 0.56), nS = vec3(0.14, 0.11, 0.27);
  vec3 L = mix(mix(dayL, golL, golden), nL, night), S = mix(mix(dayS, golS, golden), nS, night);
  vec3 col = mix(S, L, lit);
  col = mix(col, col * 0.72 + skyHor * 0.2, cloudAmt * cloudAmt * 0.6); // overcast: greyer, flatter
  return vec4(col, min(1.0, d * 1.25) * mix(0.95, 0.75, night));
}
// Art round 3: now and then a little flock crosses the sky (B02's gulls and pigeons): dark V shapes, wings beating.
float birdsAt(vec3 dir, float e, float az) {
  if (birdsAmt <= 0.0 || e < 0.06 || e > 0.7) return 0.0;
  float m = 0.0;
  for (int g = 0; g < 2; g++) {
    float fg = float(g);
    float cyc = time * 0.011 + fg * 0.53;
    float k = floor(cyc);
    float fa = fract(cyc);
    float base = (h1(vec2(k, fg)) * 6.2831853) - 3.14159265; // each pass comes over a new part of the sky
    float baz = base + (fa - 0.5) * 2.2;
    float be = 0.16 + 0.22 * h1(vec2(k, fg + 5.0)) + 0.02 * sin(time * 0.7 + fg);
    for (int b = 0; b < 4; b++) {
      float fb = float(b);
      vec2 o = vec2(-0.028 * fb, 0.012 * fb * (mod(fb, 2.0) * 2.0 - 1.0) + 0.004 * sin(time * 1.3 + fb));
      vec2 q = vec2(adiff(az, baz + o.x) * cos(e), e - (be + o.y)) / 0.012;
      float flap = 0.55 * sin(time * 11.0 + fb * 1.7 + fg * 3.0);
      q.x = abs(q.x);
      float y = q.x * (0.35 + flap) - 0.1;
      float wing = step(q.x, 1.0) * (1.0 - smoothstep(0.12, 0.3, abs(q.y - y)));
      m = max(m, wing);
    }
  }
  return m * birdsAmt;
}
// Look pass: the painted sky, in display colours. A gradient by height above the horizon (night: black-purple
// with the magenta glow only near the horizon), stars, a big pale moon, and a painted skyline far behind the city.
vec3 paintSky(vec3 dir) {
  float e = asin(clamp(dir.y, -1.0, 1.0));
  float az = atan(dir.x, dir.z);
  float eq = floor(e * 40.0) / 40.0; // banded, like a painted sky
  float band = mix(0.55, 0.2, night);
  vec3 c = mix(skyHor, skyTop, smoothstep(-0.01, band, eq));
  c = mix(c, skyTop * 0.6, night * smoothstep(0.5, 1.2, e)); // darker still overhead at night
  // Art round 3: the sunset. Golden hour lays a peach-pink band above an amber horizon, brightest toward the sun.
  vec2 hz = normalize(dir.xz + vec2(1e-5)), sz = normalize(sunDir.xz + vec2(1e-5));
  float toSun = 0.5 + 0.5 * dot(hz, sz);
  if (golden > 0.0) {
    // B01: magenta-violet overhead, a coral band, a hot orange horizon
    c = mix(c, vec3(0.66, 0.34, 0.66), golden * 0.55 * smoothstep(0.25, 0.8, eq));
    c = mix(c, vec3(0.98, 0.45, 0.5), golden * 0.6 * smoothstep(0.03, 0.12, eq) * (1.0 - smoothstep(0.16, 0.45, eq)));
    c = mix(c, vec3(1.0, 0.55, 0.22), golden * (0.55 + 0.4 * toSun * toSun) * (1.0 - smoothstep(0.0, 0.13, eq)));
  }
  float day = (1.0 - night) * art3;
  if (day > 0.01) { // the sun: a soft disc and a warm halo (by day a pale glow, at golden hour a big amber one)
    float sd = acos(clamp(dot(dir, sunDir), -1.0, 1.0));
    c = mix(c, mix(vec3(1.0, 0.97, 0.86), vec3(1.0, 0.72, 0.42), golden), day * (0.35 + 0.35 * golden) * exp(-sd * mix(7.0, 3.5, golden)));
    c = mix(c, mix(vec3(1.0, 1.0, 0.94), vec3(1.0, 0.86, 0.6), golden), day * (1.0 - smoothstep(0.035, 0.045, sd)));
  }
  if (night > 0.01 && e > 0.05) { // stars, fixed to the sky
    vec2 sp = vec2(az * 60.0, e * 60.0);
    vec2 ce = floor(sp);
    float h = h1(ce);
    if (h > 0.9) {
      vec2 f = fract(sp) - 0.5;
      float tw = 0.55 + 0.45 * sin(time * (1.0 + h * 3.0) + h * 40.0);
      c = mix(c, vec3(1.0, 0.95, 1.0), step(dot(f, f), 0.018) * night * tw * smoothstep(0.05, 0.25, e));
    }
  }
  vec4 cl = cloudsAt(dir);
  c = mix(c, cl.rgb, cl.a);
  if (moon > 0.0) {
    float d = acos(clamp(dot(dir, moonDir), -1.0, 1.0));
    float R = 0.08;
    c = mix(c, vec3(0.8, 0.72, 1.0), moon * 0.3 * (1.0 - smoothstep(R, R * 3.5, d))); // lavender halo
    if (d < R) {
      vec3 rg = normalize(cross(vec3(0.0, 1.0, 0.0), moonDir)), up = cross(moonDir, rg);
      vec2 q = vec2(dot(dir - moonDir, rg), dot(dir - moonDir, up)) / R;
      float cr = smoothstep(0.38, 0.0, length(q - vec2(-0.3, 0.25))) * 0.55 + smoothstep(0.26, 0.0, length(q - vec2(0.38, -0.18))) * 0.6
        + smoothstep(0.18, 0.0, length(q - vec2(0.12, 0.5))) * 0.5 + smoothstep(0.3, 0.0, length(q - vec2(-0.12, -0.45))) * 0.45;
      vec3 mc = mix(vec3(0.96, 0.94, 1.0), vec3(0.78, 0.73, 0.9), clamp(cr, 0.0, 1.0));
      mc *= 1.0 - 0.16 * smoothstep(0.55, 1.0, length(q));
      c = mix(c, mc, moon);
    }
  }
  // The painted skyline: two flat layers of blocks and towers, the gold dome and the white steeple where they really are.
  float hf = 0.014 + 0.04 * pow(h1(vec2(floor(az * 16.0), 3.0)), 2.0);
  float hn = 0.006 + 0.05 * pow(h1(vec2(floor(az * 10.0 + 0.37), 7.0)), 1.7);
  float tw = h1(vec2(floor(az * 10.0 + 0.37), 11.0));
  float bk = h1(vec2(floor(az * 10.0 + 0.37), 23.0));
  if (bk > 0.55 && art3 > 0.5) hn = floor(hn * 220.0 / (1.0 + step(0.8, bk))) * (1.0 + step(0.8, bk)) / 220.0 + step(0.8, bk) * step(0.5, fract(az * 20.0 + 0.185)) * 0.006; // stepped roofs
  if (tw > 0.84) hn += 0.045 + (abs(fract(az * 10.0 + 0.37) - 0.5) < 0.04 ? 0.03 : 0.0); // a tower with an antenna
  vec3 nearC = fogCol * mix(0.9, 0.62, night), farC = mix(fogCol, skyTop, 0.35) * mix(0.97, 0.8, night);
  // Art round 3: B02's skyline is not one grey wall: each block has its own hazed colour (brick, cream, teal, sand)
  vec3 bc = bk < 0.25 ? vec3(0.82, 0.5, 0.42) : bk < 0.5 ? vec3(0.93, 0.88, 0.78) : bk < 0.75 ? vec3(0.62, 0.78, 0.8) : vec3(0.9, 0.74, 0.52);
  nearC = mix(nearC, mix(bc, fogCol, 0.3), day * 0.85);
  farC = mix(farC, mix(vec3(0.78, 0.84, 0.92), farC, 0.4), day * art3); // B02: pale blue-grey towers behind
  if (art3 > 0.5) nearC = mix(nearC, vec3(0.42, 0.26, 0.34), golden * 0.65); // B01: the far city goes to a warm dusky silhouette
  farC = mix(farC, vec3(0.62, 0.36, 0.46), golden * 0.6);
  if (e < hf) c = farC;
  bool isNear = e < hn;
  float dd = abs(adiff(az, lmAz.x));
  if (lmAz.z > 0.0 && dd < 0.05) {
    float dh = 0.05 + sqrt(max(0.0, 1.0 - (dd / 0.05) * (dd / 0.05))) * 0.04;
    if (dd < 0.006) dh = 0.1;
    if (e < 0.05 && e < hn + 0.05) { c = nearC; isNear = false; }
    if (e < dh && e >= 0.05) { c = mix(c, mix(vec3(1.0, 0.78, 0.2), nearC, 0.35 + 0.25 * night), lmAz.z); isNear = false; }
  }
  float ds = abs(adiff(az, lmAz.y));
  if (lmAz.w > 0.0 && ds < 0.012) {
    float sh = 0.07 + (0.012 - ds) / 0.012 * 0.09;
    if (e < sh) { c = mix(c, mix(vec3(0.96, 0.95, 0.9), nearC, 0.3 + 0.4 * night), lmAz.w); isNear = false; }
  }
  if (isNear) {
    c = nearC;
    vec2 wp = vec2(az * 300.0, e * 300.0);
    float wh = h1(floor(wp));
    vec2 wf = fract(wp);
    bool win = wf.x < 0.6 && wf.y < 0.55 && e < hn - 0.004 && e > 0.003;
    if (win && day > 0.01) c = mix(c, c * vec3(0.78, 0.84, 0.95), day * 0.55); // windows by day: a faint darker grid
    float lit = max(night, golden * 0.8);
    if (lit > 0.01) { // lit windows on the far city (from golden hour on, as in B01)
      if (wh > 0.72 && win) c = mix(c, wh > 0.95 ? vec3(0.35, 0.85, 0.9) : vec3(1.0, 0.62, 0.28), lit * 0.8);
      // a neon strip on the odd roof (T08: pink and cyan signs up high)
      if (tw > 0.6 && tw < 0.68 && e > hn - 0.008 && e < hn - 0.004) c = mix(c, mod(floor(az * 10.0 + 0.37), 2.0) > 0.5 ? vec3(1.0, 0.35, 0.75) : vec3(0.3, 0.95, 1.0), night * 0.9);
    }
  }
  if (e < 0.0) c = nearC;
  float bd = birdsAt(dir, e, az);
  c = mix(c, mix(vec3(0.2, 0.2, 0.25), vec3(0.3, 0.18, 0.2), golden), bd * 0.85);
  return c;
}
// New city: B02's soft cartoon clouds, low over the skyline (the FAR camera only sees 0-5 degrees of sky): a few puffs,
// round tops, flat bottoms, lit on top, lilac-blue underneath; peach and pink at dusk, dim violet at night.
vec4 cloudsNew(float az, float e) {
  if (cloudAmt <= 0.0 || e < 0.0) return vec4(0.0);
  float cw = 0.34, a = az + time * 0.0015, ci = floor(a / cw);
  float best = 0.0, lit = 0.0;
  for (int k = -1; k <= 1; k++) {
    float id = ci + float(k);
    if (h1(vec2(id, 7.3)) > cloudAmt * 1.5) continue;
    float cx = (id + 0.2 + 0.6 * h1(vec2(id, 1.7))) * cw;
    float e0 = mix(0.03 + 0.12 * h1(vec2(id, 4.1)), 0.07 + 0.1 * h1(vec2(id, 4.1)), 1.0 - max(golden, night)); // light-v2: by day the puffs sit above the far towers
    float sz = 0.018 + 0.026 * h1(vec2(id, 9.9)) + 0.012 * (1.0 - night);
    vec2 q = vec2((a - cx) * cos(e), e - e0);
    float m = 0.0, top = -1.0;
    for (int j = 0; j < 4; j++) {
      float fj = float(j);
      vec2 o = vec2((fj - 1.5) * sz * 0.85, sz * (0.2 + 0.45 * h1(vec2(id, fj + 3.0))) * (1.0 - abs(fj - 1.5) * 0.3));
      float r = sz * (0.5 + 0.35 * h1(vec2(id, fj + 11.0)));
      float d = length(q - o) / r;
      m = max(m, 1.0 - smoothstep(0.9, 1.0, d));
      top = max(top, (q.y - o.y) / r);
    }
    m *= smoothstep(-0.0015, 0.0025, q.y);
    if (m > best) { best = m; lit = top; }
  }
  if (best <= 0.0) return vec4(0.0);
  vec3 L = mix(mix(vec3(1.0, 0.995, 0.98), vec3(1.0, 0.74, 0.56), golden), vec3(0.34, 0.3, 0.52), night);
  vec3 S = mix(mix(vec3(0.8, 0.86, 0.96), vec3(0.88, 0.46, 0.62), golden), vec3(0.15, 0.12, 0.27), night);
  return vec4(mix(S, L, smoothstep(-0.5, 0.45, lit)), best * mix(0.95, 0.7, night));
}
// New city: the sky for the hour (three stops and a horizon glow), the sun, stars, clouds, the moon, then the painted
// skyline ring (tPano colours, tPanoM lit windows and layers) and the landmark silhouettes where the real ones are not drawn.
vec3 paintSkyNew(vec3 dir) {
  float e = asin(clamp(dir.y, -1.0, 1.0));
  float az = atan(dir.x, dir.z);
  vec3 c = mix(skyHor, skyMid, smoothstep(0.0, mix(0.045, 0.18, max(golden, night)), e)); // light-v1: B02's blue reaches down to the skyline by day
  c = mix(c, skyTop, smoothstep(0.14, 0.95, e));
  vec2 hz = normalize(dir.xz + vec2(1e-5)), sz = normalize(sunDir.xz + vec2(1e-5));
  float toSun = 0.5 + 0.5 * dot(hz, sz);
  c = mix(c, skyGlow, glowAmt * exp(-max(e, 0.0) * 10.0) * mix(1.0, 0.45 + 0.55 * toSun, golden));
  float day = 1.0 - night;
  if (day > 0.01) {
    float sd = acos(clamp(dot(dir, sunDir), -1.0, 1.0));
    c = mix(c, mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 0.7, 0.42), golden), day * (0.08 + 0.52 * golden) * exp(-sd * mix(8.0, 3.5, golden)));
    c = mix(c, mix(vec3(1.0, 1.0, 0.95), vec3(1.0, 0.85, 0.6), golden), day * smoothstep(0.2, 0.6, golden) * (1.0 - smoothstep(0.03, 0.04, sd))); // light-v1: B02 has no sun disc by day
  }
  if (night > 0.01 && e > 0.03) {
    vec2 sp = vec2(az * 70.0, e * 70.0);
    float h = h1(floor(sp));
    if (h > 0.88) {
      vec2 f = fract(sp) - 0.5;
      float tw = 0.6 + 0.4 * sin(time * (1.0 + h * 3.0) + h * 40.0);
      c = mix(c, vec3(1.0, 0.96, 1.0), step(dot(f, f), 0.02 + 0.03 * step(0.985, h)) * night * tw * smoothstep(0.03, 0.12, e));
    }
  }
  vec4 cl = cloudsNew(az, e);
  c = mix(c, cl.rgb, cl.a);
  if (moon > 0.0) {
    float d = acos(clamp(dot(dir, moonDir), -1.0, 1.0));
    float R = 0.075;
    c = mix(c, vec3(0.78, 0.74, 0.98), moon * 0.35 * (1.0 - smoothstep(R, R * 3.2, d)));
    if (d < R) {
      vec3 rg = normalize(cross(vec3(0.0, 1.0, 0.0), moonDir)), up = cross(moonDir, rg);
      vec2 q = vec2(dot(dir - moonDir, rg), dot(dir - moonDir, up)) / R;
      float cr = smoothstep(0.38, 0.0, length(q - vec2(-0.3, 0.25))) * 0.5 + smoothstep(0.26, 0.0, length(q - vec2(0.38, -0.18))) * 0.55
        + smoothstep(0.3, 0.0, length(q - vec2(-0.12, -0.45))) * 0.4;
      vec3 mc = mix(vec3(0.95, 0.93, 0.99), vec3(0.8, 0.76, 0.9), clamp(cr, 0.0, 1.0)) * (1.0 - 0.12 * smoothstep(0.6, 1.0, length(q)));
      c = mix(c, mc, moon * (1.0 - smoothstep(0.96, 1.0, length(q))));
    }
  }
  float lit = max(night, golden * 0.8);
  vec3 nearC = mix(mix(mix(skyHor, fogCol, 0.5), vec3(0.36, 0.2, 0.3), golden * 0.75), vec3(0.12, 0.1, 0.2), night);
  if (panoOn > 0.5) {
    vec2 uv = vec2(az / 6.2831853 + 0.5, (e - panoE.x) / (panoE.y - panoE.x));
    if (uv.y < 1.0) {
      vec4 m = texture2D(tPanoM, vec2(uv.x, max(uv.y, 0.002)));
      if (m.b > 0.3 || uv.y <= 0.0) {
        bool nr = m.b > 0.75 || uv.y <= 0.0;
        vec3 b = texture2D(tPano, vec2(uv.x, max(uv.y, 0.002))).rgb;
        b = mix(b, mix(skyHor, fogCol, 0.5), nr ? 0.2 : 0.5); // day: the air between (B02's pale far city)
        b = mix(b, nr ? vec3(0.36, 0.2, 0.3) : vec3(0.64, 0.38, 0.52), golden * 0.75); // dusk silhouettes (B01)
        b = mix(b, nr ? vec3(0.11, 0.09, 0.19) : vec3(0.16, 0.14, 0.27), night); // night blocks (T08)
        if (m.r > 0.5 && m.g > 0.5) b = mix(b, vec3(1.0, 0.36, 0.72), night * 0.9);
        else { b = mix(b, vec3(1.0, 0.72, 0.42), m.r * lit * 0.9); b = mix(b, vec3(0.45, 0.86, 0.96), m.g * lit * 0.8); }
        c = b;
      }
    }
  }
  // the gold dome and the white steeple on the skyline when the real ones are not drawn (lmShow)
  float dd = abs(adiff(az, lmAz.x));
  if (lmAz.z > 0.0 && dd < 0.05) {
    float dh = 0.045 + sqrt(max(0.0, 1.0 - (dd / 0.05) * (dd / 0.05))) * 0.04;
    if (dd < 0.006) dh = 0.1;
    if (e < 0.045) c = mix(c, nearC, lmAz.z);
    else if (e < dh) c = mix(c, mix(vec3(1.0, 0.8, 0.25), nearC, 0.25 + 0.5 * night), lmAz.z);
  }
  float ds = abs(adiff(az, lmAz.y));
  if (lmAz.w > 0.0 && ds < 0.012) {
    float sh = 0.07 + (0.012 - ds) / 0.012 * 0.09;
    if (e < sh) c = mix(c, mix(vec3(0.97, 0.96, 0.92), nearC, 0.25 + 0.55 * night), lmAz.w);
  }
  if (e < panoE.x) c = nearC;
  float bd = birdsAt(dir, e, az);
  c = mix(c, mix(vec3(0.2, 0.2, 0.25), vec3(0.3, 0.18, 0.2), golden), bd * 0.85);
  return c;
}
// New city: a candy filmic curve (ACES fit on the luminance, hue kept, a third of the per-channel roll-off so the
// lights still go to white).
vec3 acesF(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec3 candyTone(vec3 c) {
  c *= expo;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  vec3 hp = c * (acesF(vec3(l)).x / max(l, 1e-4));
  return mix(hp, acesF(c), 0.35);
}
vec3 lut33(sampler2D t, vec3 c) {
  vec3 cc = clamp(c, 0.0, 1.0) * 32.0;
  float bz = floor(cc.b), bf = cc.b - bz;
  vec2 uvA = vec2((cc.r + 0.5 + bz * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
  vec2 uvB = vec2((cc.r + 0.5 + min(bz + 1.0, 32.0) * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
  return mix(texture2D(t, uvA).rgb, texture2D(t, uvB).rgb, bf);
}
void main() {
  // One low-res pixel = scale x scale screen pixels, counted from the top-left, so every pixel is the same size.
  vec2 cell = floor(gl_FragCoord.xy / scale);
  if (jitter > 0.0) cell += floor(jitter * vec2(sin(time * 53.0), cos(time * 41.0)) + 0.5);
  // Beer goggles: a slow wave that bends the frame at the edges and corners, calm where he stands (focus).
  vec2 fq0 = ((cell + 0.5) / res - focus) * vec2(res.x / res.y, 1.0);
  float er = length(fq0); // distance from him, in screen heights
  if (dWarp > 0.0) {
    float w = dWarp * smoothstep(0.14, 0.75, er);
    vec2 cu = (cell + 0.5) / res;
    cell += floor(w * vec2(sin(cu.y * 7.0 + time * dWarpHz * 6.2832), cos(cu.x * 6.0 + time * dWarpHz * 5.1)) + 0.5);
  }
  vec2 px = (cell + 0.5) / res; // nearest pixel: the chunky look
  vec2 o1 = 1.0 / res;
  bool isSky = texture2D(tDepth, px).x > 0.99999;
  vec3 c = fxaaOn > 0.5 && !isSky ? fxaa(px, o1) : tap(px);
  float skyE = 1.0, dist = 0.0;
  if (isSky) {
    vec4 wp = camInv * vec4(px * 2.0 - 1.0, 1.0, 1.0);
    vec3 dir = normalize(wp.xyz / wp.w - camPos);
    skyE = asin(clamp(dir.y, -1.0, 1.0));
    c = pow(nc > 0.5 ? paintSkyNew(dir) : paintSky(dir), vec3(2.2)); // sRGB in, so the sky shows exactly its colour
  }
  // Art round 3: soft contact shadows (a cheap screen-space AO on the low-res frame). In 1/depth a flat face is
  // linear on screen, so a crease (the ground meeting a wall, a kerb, a bench, his feet) shows as neighbours that
  // are nearer than the line between them. Pairs of opposite taps at two radii in four directions; a big depth
  // jump (a silhouette against the far ground) does not count, so there is no halo round people.
  if (aoAmt > 0.0 && !isSky) {
    float d0 = lin(px);
    if (d0 < 60.0) {
      float w0 = 1.0 / d0, occ = 0.0;
      float rp = clamp(aoPx / d0, 1.5, 24.0);
      for (int k = 0; k < 4; k++) {
        vec2 dv = k == 0 ? vec2(1.0, 0.0) : k == 1 ? vec2(0.0, 1.0) : k == 2 ? vec2(0.7071, 0.7071) : vec2(0.7071, -0.7071);
        for (int r = 1; r <= 2; r++) {
          if (float(r) > aoN) break;
          vec2 o = dv * rp * float(r) * 0.5 * o1;
          float wa = 1.0 / lin(px + o), wb = 1.0 / lin(px - o);
          float ja = abs(wa - w0) / w0, jb = abs(wb - w0) / w0;
          float cv = ((wa + wb) * 0.5 - w0) / w0;
          occ += smoothstep(0.004, 0.05, cv) * (1.0 - smoothstep(0.25, 0.5, max(ja, jb)));
        }
      }
      c *= 1.0 - aoAmt * min(1.0, occ / (2.0 * aoN)) * (1.0 - smoothstep(35.0, 60.0, d0));
    }
  }
  // Art round 3: wet streets when it rains. The ground goes darker and glossy, and every light above it draws a
  // long smeared reflection straight down the screen (lamps, windows, neon on the wet asphalt, T08 / L06).
  if (wetAmt > 0.0 && !isSky) {
    vec4 wq = camInv * vec4(px * 2.0 - 1.0, texture2D(tDepth, px).x * 2.0 - 1.0, 1.0);
    float gy = wq.y / wq.w;
    float ground = 1.0 - smoothstep(0.12, 0.3, gy);
    if (ground > 0.0) {
      vec3 refl = vec3(0.0);
      for (int k = 1; k <= 5; k++) {
        vec2 q = snapPx(px + vec2(0.0, float(k) * 3.0 + 2.0) * o1);
        vec3 s = tap(q);
        refl += max(s - 0.45, 0.0) * (1.0 - float(k) * 0.12);
      }
      float rip = 0.75 + 0.25 * sin(px.x * res.x * 0.9 + time * 3.0 + h1(floor(px * res * vec2(1.0, 0.25))) * 6.0);
      c = mix(c, c * 0.72 + skyHor * skyHor * 0.06, ground * wetAmt);
      c += refl * 0.55 * rip * ground * wetAmt;
    }
  }
  // Cartoon edge: where this pixel is clearly nearer than a neighbour (a silhouette), darken it.
  if (outline > 0.0 && !isSky) {
    float d0 = lin(px);
    if (d0 < 34.0) {
      float dm = max(max(lin(px + vec2(o1.x, 0.0)), lin(px - vec2(o1.x, 0.0))), max(lin(px + vec2(0.0, o1.y)), lin(px - vec2(0.0, o1.y))));
      float e = smoothstep(0.06, 0.14, (dm - d0) / d0) * (1.0 - smoothstep(22.0, 34.0, d0));
      c = mix(c, c * vec3(0.3, 0.22, 0.34), e * outline);
    }
  }
  // Nuance pass (#6, the t3ssel8r trick): a thin bright line on convex box edges. In 1/depth a flat face is
  // linear on screen, so a ridge (an outer edge, nearer than both faces next to it) shows as a negative
  // Laplacian. Silhouettes (big jumps) are left to the dark outline.
  if (edgeHi > 0.0 && !isSky) {
    float d0 = lin(px);
    dist = d0;
    if (d0 < 40.0) {
      float w0 = 1.0 / d0;
      float wl = 1.0 / lin(px - vec2(o1.x, 0.0)), wr = 1.0 / lin(px + vec2(o1.x, 0.0));
      float wd = 1.0 / lin(px - vec2(0.0, o1.y)), wu = 1.0 / lin(px + vec2(0.0, o1.y));
      float cv = (4.0 * w0 - (wl + wr + wu + wd)) / w0;
      float sil = max(max(abs(wl - w0), abs(wr - w0)), max(abs(wu - w0), abs(wd - w0))) / w0;
      float e = smoothstep(0.004, 0.018, cv) * (1.0 - smoothstep(0.06, 0.12, sil)) * (1.0 - smoothstep(26.0, 40.0, d0));
      c += (c * 0.55 + vec3(0.012, 0.01, 0.008)) * e * edgeHi;
    }
  } else if (!isSky) dist = lin(px);
  // Beer goggles, in the low-res frame with nearest taps only (nothing here smooths the pixel art).
  if (mBlur > 0.01 && !isSky) { // the drink moment: a short zoom smear toward him (nearest taps, three copies)
    vec2 tw = (focus - px) * mBlur * 0.07;
    vec3 acc = c; float n = 1.0;
    for (int i = 1; i <= 3; i++) { vec2 q = snapPx(px + tw * float(i)); if (!skyAt(q)) { acc += tap(q); n += 1.0; } }
    c = acc / n;
  }
  if (dSmear.x != 0.0 && !isSky) { // a short lag on fast camera turns: two trailing copies
    vec2 s1 = snapPx(px - dSmear * 0.5 / res), s2 = snapPx(px - dSmear / res);
    if (!skyAt(s1) && !skyAt(s2)) c = mix(c, (tap(s1) + tap(s2)) * 0.5, 0.45);
  }
  if (dChroma > 0.0 && !isSky) { // red and blue slide apart toward the frame edges
    float co = floor(dChroma * smoothstep(0.3, 0.8, er) + 0.5);
    if (co > 0.0) {
      vec2 dir = normalize(fq0 + vec2(1e-4)) * vec2(res.y / res.x, 1.0);
      vec2 pr = snapPx(px + dir * co / res), pb = snapPx(px - dir * co / res);
      if (!skyAt(pr)) c.r = tap(pr).r;
      if (!skyAt(pb)) c.b = tap(pb).b;
    }
  }
  if (dGhost > 0.0) { // double vision: a faint copy, slowly circling
    vec2 go = dGhostPx * vec2(cos(time * dDrift), sin(time * dDrift * 0.8));
    vec2 pg = snapPx(px + go / res);
    if (!skyAt(pg)) c = mix(c, tap(pg), dGhost);
  }
  // Tilt-shift, wide shots only: soften the top and bottom of the frame so the city reads as a tiny model.
  if (tilt > 0.0 && !isSky) {
    float tb = tilt * smoothstep(0.16, 0.42, abs(vUv.y - 0.5));
    if (tb > 0.0) {
      vec3 bl = tap(px + vec2(1.5, 0.0) * o1) + tap(px - vec2(1.5, 0.0) * o1) + tap(px + vec2(0.0, 1.5) * o1) + tap(px - vec2(0.0, 1.5) * o1);
      c = mix(c, bl * 0.25, tb);
    }
  }
  // New city: tilt-shift by depth (B02's toy look, FAR only): the near foreground and the far city go soft, the
  // band around him stays sharp. Two rings of taps; sky taps keep this pixel's colour.
  if (tiltD > 0.0 && !isSky) {
    float d0 = lin(px);
    float coc = max(1.0 - smoothstep(tiltFocus * 0.42, tiltFocus * 0.78, d0), smoothstep(tiltFocus * 1.7, tiltFocus * 4.5, d0)) * tiltD;
    if (coc > 0.03) {
      float r = coc * tiltPx;
      vec3 acc = c; float wn = 1.0;
      for (int i = 0; i < 8; i++) {
        float a = float(i) * 0.785398 + 0.39;
        vec2 o = vec2(cos(a), sin(a)) * o1;
        vec2 q1 = px + o * r, q2 = px + o * r * 0.5;
        acc += skyAt(q1) ? c : tap(q1); acc += skyAt(q2) ? c : tap(q2); wn += 2.0;
      }
      c = acc / wn;
    }
  }
  if (bloomK > 0.0) { // beta: real bloom from the HDR frame (lamps, windows, neon), cheap: two blurred low-res levels
    c += (texture2D(tBloom, vUv).rgb * 0.7 + texture2D(tBloom2, vUv).rgb * 0.9) * bloomK * mix(vec3(1.0), vec3(1.3, 0.98, 0.68), dGlowWarm); // drunk: amber
  } else if (glow > 0.0) {
    vec3 b = vec3(0.0);
    vec2 o = 1.0 / res;
    b += max(tap(px + vec2( 2.0, 0.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2(-2.0, 0.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 0.0, 2.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 0.0,-2.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 3.0, 3.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2(-3.0, 3.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 3.0,-3.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2(-3.0,-3.0) * o) - 0.62, 0.0);
    c += b * glow * (isSky ? 0.12 : 0.35) * mix(vec3(1.0), vec3(1.3, 0.98, 0.68), dGlowWarm);
  }
  if (tone > 0.0 && !isSky) c = mix(c * expo, candyTone(c), tone); // new city: candy filmic (the painted sky is already display colour)
  c = pow(max(c, 0.0), vec3(1.0 / 2.2)); // grade in display space
  if (raw > 0.5) { gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0); return; } // debug: the ungraded frame (colour matching)
  if (lutAmt > 0.0 && !isSky) { // colour curves from his pictures, day and night blended
    vec3 cc = clamp(c, 0.0, 1.0) * (255.0 / 256.0) + 0.5 / 256.0;
    vec3 dl = vec3(texture2D(tLut, vec2(cc.r, 0.25)).r, texture2D(tLut, vec2(cc.g, 0.25)).g, texture2D(tLut, vec2(cc.b, 0.25)).b);
    vec3 nl = vec3(texture2D(tLut, vec2(cc.r, 0.75)).r, texture2D(tLut, vec2(cc.g, 0.75)).g, texture2D(tLut, vec2(cc.b, 0.75)).b);
    c = mix(c, mix(dl, nl, night), lutAmt);
  }
  if (lut3Amt > 0.0 && !isSky) { // beta: the T08 night grade (round 4's LUT) at reduced strength, never darker than before
    vec3 cc = clamp(c, 0.0, 1.0) * 32.0;
    float bz = floor(cc.b), bf = cc.b - bz;
    vec2 uvA = vec2((cc.r + 0.5 + bz * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
    vec2 uvB = vec2((cc.r + 0.5 + min(bz + 1.0, 32.0) * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
    vec3 g = mix(texture2D(tLut3, uvA).rgb, texture2D(tLut3, uvB).rgb, bf);
    float l0 = dot(c, vec3(0.299, 0.587, 0.114)), l1 = dot(g, vec3(0.299, 0.587, 0.114));
    g *= max(1.0, (l0 * 0.97) / max(l1, 1e-3)); // keep the warmth, not the darkening
    c = mix(c, g, lut3Amt);
  }
  if (lutN > 0.0 && !isSky) { // new city: the time-of-day grades (day B02, dusk B01, night T08), blended by the hour
    vec3 g = vec3(0.0);
    if (lutW.x > 0.001) g += lut33(tLutD, c) * lutW.x;
    if (lutW.y > 0.001) g += lut33(tLutK, c) * lutW.y;
    if (lutW.z > 0.001) g += lut33(tLutN, c) * lutW.z;
    c = mix(c, g, lutN);
  }
  // Nuance pass (#5): coloured shadows. The darks lean to the time of day's shadow colour (purple-blue at
  // night, cool blue by day) instead of grey or black. Lights are left alone.
  if (shadowAmt > 0.0 && !isSky) {
    float sl = dot(c, vec3(0.299, 0.587, 0.114));
    float sw = (1.0 - smoothstep(0.06, 0.42, sl)) * smoothstep(0.0, 0.05, sl);
    c = mix(c, sl * shadowCol / max(0.01, dot(shadowCol, vec3(0.299, 0.587, 0.114))), sw * shadowAmt);
  }
  // Nuance pass (#8): distance haze that fades gradually cooler and lighter (to the haze colour, which the fog
  // and the painted skyline share), starting near him; the sky near the horizon gets the same mist.
  if (hazeAmt > 0.0) {
    float hz = isSky ? (1.0 - smoothstep(0.0, 0.16, skyE)) * mix(0.6, 0.3, art3) * (nc > 0.5 ? 0.35 : 1.0) : smoothstep(hazeNear, hazeFar, dist); // art round 3: the painted skyline keeps its colours
    vec3 hcol = mix(fogCol * mix(1.12, 1.0, night * 0.3), vec3(1.0, 0.72, 0.5), golden * 0.45); // golden hour: amber air
    c = mix(c, hcol, hz * hazeAmt);
  }
  c *= bright;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(l), c, isSky ? min(sat, 1.0) : sat); // the sky never goes hotter than its painted colour
  if (mGrey > 0.0 || mWaveA > 0.0) { // the drink moment: the frame holds its breath, then the colour floods out from him
    float wd = length(((cell + 0.5) / res - focus) * vec2(res.x / res.y, 1.0));
    float inside = 1.0 - smoothstep(mWave - 0.1, mWave, wd);
    float ring = exp(-pow((wd - mWave) / 0.05, 2.0)) * step(0.01, mWave);
    float l2 = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(vec3(l2), c, 1.0 - mGrey * (1.0 - inside));
    c = mix(vec3(l2), c, 1.0 + 0.55 * mWaveA * inside);
    if (!isSky) c += vec3(1.0, 0.72, 0.42) * ring * mWaveA * 0.2;
  }
  c = (c - 0.5) * contrast + 0.5;
  vec3 wm = mix(vec3(0.93, 0.98, 1.07), vec3(1.08, 1.0, 0.88), warm);
  c *= isSky ? mix(wm, vec3(1.0), 0.75) : wm;
  vec2 d = vUv - 0.5;
  float v = dot(d, d);
  c *= 1.0 - v * (0.35 * vigAmt + dBreathe * (0.6 + 0.4 * sin(time * dBreatheHz * 6.2832))); // drunk: the edges breathe
  // Nuance pass (#3): light falls off away from him. A lit focus around the hero, darker toward the frame edges;
  // bright things (lit shop fronts, neon, windows) keep their light.
  if (falloff > 0.0) {
    vec2 fq = (vUv - focus) * vec2(res.x / res.y, 1.0);
    float fd = length(fq);
    float fall = mix(1.0, 1.0 - falloff, smoothstep(0.16, 0.8, fd)) * (1.0 + falloff * 0.22 * (1.0 - smoothstep(0.0, 0.28, fd)));
    float lum = dot(c, vec3(0.299, 0.587, 0.114));
    c *= mix(fall, max(fall, 1.0), smoothstep(0.55, 0.9, lum));
  }
  c = mix(c, vec3(0.32, 0.0, 0.02), clamp(red * smoothstep(0.03, 0.22, v) * 0.7, 0.0, 0.45)); // softer, thinner red edge (David: the dark red made it murky)
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;class Xy{constructor(t){this.renderer=t,this.qScene=new rh,this.qCam=new go(-1,1,1,-1,0,1),this.rows=420,this.scale=2,this.lowW=1,this.lowH=1,this.nl={tone:1,expo:1,tilt:0,tiltFocus:14,tiltPx:3,lut:0,lutW:[1,0,0],fxaa:0},this.landmarks=[],this.lmShow=[1,1],this.nuance={...y1},this.focus=new et(.5,.45),this.moonElMin=.16,this.moonYaw=NaN,this.fwd=new R,this.lastT=0,this.drunk={...mf},this.prevYaw=NaN,this.smearS=0,this.moment={...gf},this.beta={bloom:0,thr:.9,lut3:0,hazeNear:10,hazeFar:58,vig:1,ao:0,aoN:0},this.atmos=null,this.bl=[],this.blMat=new _n({uniforms:{tIn:{value:null},texel:{value:new et},dir:{value:new et},thr:{value:.9},mode:{value:0}},vertexShader:Wh,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tIn; uniform vec2 texel, dir; uniform float thr, mode; varying vec2 vUv;
      void main() {
        if (mode < 0.5) { // bright pass + 4-tap downsample
          vec3 a = texture2D(tIn, vUv + texel * vec2(-1.0, -1.0)).rgb + texture2D(tIn, vUv + texel * vec2(1.0, -1.0)).rgb
                 + texture2D(tIn, vUv + texel * vec2(-1.0, 1.0)).rgb + texture2D(tIn, vUv + texel * vec2(1.0, 1.0)).rgb;
          a *= 0.25; float l = max(a.r, max(a.g, a.b));
          gl_FragColor = vec4(a * smoothstep(thr, thr + 0.6, l), 1.0); return;
        }
        if (mode < 1.5) { gl_FragColor = vec4(texture2D(tIn, vUv).rgb, 1.0); return; } // plain downsample
        vec3 s = texture2D(tIn, vUv).rgb * 0.227; // 9-tap gaussian along dir
        s += (texture2D(tIn, vUv + dir * texel * 1.385).rgb + texture2D(tIn, vUv - dir * texel * 1.385).rgb) * 0.316;
        s += (texture2D(tIn, vUv + dir * texel * 3.231).rgb + texture2D(tIn, vUv - dir * texel * 3.231).rgb) * 0.070;
        gl_FragColor = vec4(s, 1.0);
      }`}),this.blQuad=new ne(new hs(2,2),this.blMat),this.blScene=new rh,this.rt=new Gn(4,4,{minFilter:we,magFilter:we,type:vi,depthBuffer:!0}),this.u={tScene:{value:this.rt.texture},res:{value:new et(4,4)},sat:{value:1},warm:{value:0},contrast:{value:1},glow:{value:0},red:{value:0},jitter:{value:0},time:{value:0},bright:{value:1},scale:{value:2},tDepth:{value:null},cnear:{value:.1},cfar:{value:160},outline:{value:0},moon:{value:0},skyTop:{value:new Mt(3840255)},skyHor:{value:new Mt(11067647)},fogCol:{value:new Mt(11067647)},night:{value:0},moonDir:{value:new R(0,.3,1).normalize()},camPos:{value:new R},camInv:{value:new Rt},lmAz:{value:new Yt},tilt:{value:0},lutAmt:{value:0},raw:{value:0},tLut:{value:M1()},tBloom:{value:null},tBloom2:{value:null},tLut3:{value:null},bloomK:{value:0},lut3Amt:{value:0},hazeNear:{value:10},hazeFar:{value:58},vigAmt:{value:1},dGhost:{value:0},dGhostPx:{value:0},dDrift:{value:0},dWarp:{value:0},dWarpHz:{value:0},dChroma:{value:0},dGlowWarm:{value:0},dBreathe:{value:0},dBreatheHz:{value:0},dSmear:{value:new et},mBlur:{value:0},mWave:{value:0},mWaveA:{value:0},mGrey:{value:0},sunDir:{value:new R(0,.7,-.7)},golden:{value:0},cloudAmt:{value:0},wetAmt:{value:0},aoAmt:{value:0},aoPx:{value:30},aoN:{value:0},birdsAmt:{value:0},art3:{value:io?1:0},nc:{value:0},tone:{value:0},expo:{value:1},tiltD:{value:0},tiltFocus:{value:14},tiltPx:{value:3},glowAmt:{value:0},panoOn:{value:0},lutN:{value:0},skyMid:{value:new Mt(.5,.75,.93)},skyGlow:{value:new Mt(1,1,1)},lutW:{value:new R(1,0,0)},panoE:{value:new et(-.07,.3)},fxaaOn:{value:0},tPano:{value:null},tPanoM:{value:null},tLutD:{value:null},tLutK:{value:null},tLutN:{value:null},focus:{value:new et(.5,.45)},falloff:{value:0},edgeHi:{value:0},hazeAmt:{value:0},shadowAmt:{value:0},shadowCol:{value:new Mt(.55,.6,1)}},this.rt.depthTexture=new Lc(4,4),this.u.tDepth.value=this.rt.depthTexture,this.quad=new ne(new hs(2,2),new _n({uniforms:this.u,vertexShader:Wh,fragmentShader:S1,depthTest:!1,depthWrite:!1})),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}setSize(t,e,n){const i=Math.min(t,e)/n;this.rows=Math.round(e/i),this.scale=1,this.lowW=Math.max(16,Math.round(t/i)),this.lowH=Math.max(16,Math.round(e/i)),this.u.scale.value=1,this.renderer.setSize(this.lowW,this.lowH,!1),this.rt.setSize(this.lowW,this.lowH),this.u.res.value.set(this.lowW,this.lowH)}setSky(t,e,n,i=n){this.u.skyHor.value.setRGB(...t),this.u.skyTop.value.setRGB(...e),this.u.moon.value=n,this.u.night.value=i;const r=v1(t,e,i);return this.u.fogCol.value.setRGB(...r),r}newOn(t,e,n){this.u.nc.value=t?1:0;const i=t?ee:we;this.rt.texture.minFilter=i,this.rt.texture.magFilter=i,e&&(this.u.tPano.value=e.color,this.u.tPanoM.value=e.mask,this.u.panoOn.value=1),n&&this.u.panoE.value.set(n[0],n[1])}setNewLuts(t,e,n){for(const i of[t,e,n])i.flipY=!1,i.magFilter=ee,i.minFilter=ee,i.generateMipmaps=!1,i.colorSpace=sn,i.needsUpdate=!0;this.u.tLutD.value=t,this.u.tLutK.value=e,this.u.tLutN.value=n}setSamples(t){this.rt.samples!==t&&(this.rt.dispose(),this.rt.samples=t)}setNewSky(t,e,n){this.u.skyMid.value.setRGB(...t),this.u.skyGlow.value.setRGB(...e),this.u.glowAmt.value=n}setLut(t,e,n){const i=new Uint8Array(2048);for(let o=0;o<256;o++)for(let a=0;a<3;a++)i[o*4+a]=t[o*3+a],i[(256+o)*4+a]=e[o*3+a];for(let o=0;o<512;o++)i[o*4+3]=255;const r=new _o(i,256,2,Ue);r.magFilter=ee,r.minFilter=ee,r.needsUpdate=!0,this.u.tLut.value.dispose(),this.u.tLut.value=r,this.u.lutAmt.value=n}set lutAmt(t){this.u.lutAmt.value=t}get lutAmt(){return this.u.lutAmt.value}set raw(t){this.u.raw.value=t?1:0}set tilt(t){this.u.tilt.value=t}aimSky(t,e){t.getWorldDirection(this.fwd);const n=Math.atan2(this.fwd.x,this.fwd.z),i=Math.asin(Math.max(-1,Math.min(1,this.fwd.y))),r=2*Math.atan(Math.tan(zs.degToRad(t.fov)/2)*t.aspect),o=n-r*.28;Number.isNaN(this.moonYaw)&&(this.moonYaw=o);let a=o-this.moonYaw;a=Math.atan2(Math.sin(a),Math.cos(a)),this.moonYaw+=a*Math.min(1,e*.8);const c=i+zs.degToRad(t.fov)/2,l=Math.max(this.moonElMin,Math.min(.75,c-.2));this.u.moonDir.value.set(Math.sin(this.moonYaw)*Math.cos(l),Math.sin(l),Math.cos(this.moonYaw)*Math.cos(l));const h=t.position,u=this.u.lmAz.value,f=p=>p?Math.atan2(p.x-h.x,p.z-h.z):0;u.set(f(this.landmarks[0]),f(this.landmarks[1]),this.lmShow[0],this.lmShow[1])}applyDrunk(t){const e=this.drunk,n=this.u,i=this.moment;n.mBlur.value=i.blur,n.mWave.value=i.wave,n.mWaveA.value=i.waveA,n.mGrey.value=i.grey,n.dGhost.value=e.ghost,n.dGhostPx.value=e.ghostPx,n.dDrift.value=e.drift,n.dWarp.value=e.warp,n.dWarpHz.value=e.warpHz,n.dChroma.value=e.chroma,n.dGlowWarm.value=e.glow>0?e.glowWarm*Math.min(1,e.glow*3):0,n.dBreathe.value=e.breathe,n.dBreatheHz.value=e.breatheHz;const r=t;let o=0;if(r.isPerspectiveCamera){r.getWorldDirection(this.fwd);const a=Math.atan2(this.fwd.x,this.fwd.z);if(!Number.isNaN(this.prevYaw)){const c=Math.atan2(Math.sin(a-this.prevYaw),Math.cos(a-this.prevYaw)),l=2*Math.atan(Math.tan(zs.degToRad(r.fov)/2)*r.aspect);o=x1(c,l,this.lowW,e.smear)}this.prevYaw=a}this.smearS+=(o-this.smearS)*.5,n.dSmear.value.set(Math.abs(this.smearS)<.6?0:Math.round(this.smearS),0)}setLut3(t){t.flipY=!1,t.needsUpdate=!0,t.magFilter=ee,t.minFilter=ee,t.generateMipmaps=!1,t.colorSpace=sn,this.u.tLut3.value=t}pass(t,e,n,i=0,r=0,o=1,a=1){const c=this.blMat.uniforms;c.tIn.value=t,c.mode.value=n,c.dir.value.set(i,r),c.texel.value.set(1/o,1/a),this.renderer.setRenderTarget(e),this.renderer.render(this.blScene,this.qCam)}bloom(){if(!this.bl.length){this.blQuad.frustumCulled=!1,this.blScene.add(this.blQuad);for(let r=0;r<4;r++)this.bl.push(new Gn(4,4,{type:vi,minFilter:ee,magFilter:ee,depthBuffer:!1}))}const t=Math.max(8,Math.round(this.lowW/4)),e=Math.max(8,Math.round(this.lowH/4)),n=Math.max(4,Math.round(t/3)),i=Math.max(4,Math.round(e/3));(this.bl[0].width!==t||this.bl[0].height!==e)&&(this.bl[0].setSize(t,e),this.bl[1].setSize(t,e),this.bl[2].setSize(n,i),this.bl[3].setSize(n,i)),this.blMat.uniforms.thr.value=this.beta.thr,this.pass(this.rt.texture,this.bl[0],0,0,0,this.lowW/2,this.lowH/2),this.pass(this.bl[0].texture,this.bl[1],2,1,0,t,e),this.pass(this.bl[1].texture,this.bl[0],2,0,1,t,e),this.pass(this.bl[0].texture,this.bl[2],1),this.pass(this.bl[2].texture,this.bl[3],2,1,0,n,i),this.pass(this.bl[3].texture,this.bl[2],2,0,1,n,i),this.u.tBloom.value=this.bl[0].texture,this.u.tBloom2.value=this.bl[2].texture}render(t,e,n,i,r){var u;this.u.sat.value=n.sat,this.u.warm.value=n.warm,this.u.contrast.value=n.contrast,this.u.glow.value=r?n.glow:0,this.u.red.value=n.red,this.u.jitter.value=n.jitter,this.u.time.value=i,this.u.bright.value=n.bright,this.u.outline.value=n.outline??0;const o=this.nuance,a=this.u.night.value;this.u.falloff.value=o.falloff*(.55+.45*a),this.u.edgeHi.value=o.edge,this.u.hazeAmt.value=o.haze*(.35+.65*a),this.u.shadowAmt.value=o.shadow,this.u.shadowCol.value.setRGB(.55+.1*a,.62-.17*a,1),this.u.focus.value.copy(this.focus);const c=e;if(c.isPerspectiveCamera){this.u.cnear.value=c.near,this.u.cfar.value=c.far,c.updateMatrixWorld(),this.u.camInv.value.multiplyMatrices(c.matrixWorld,c.projectionMatrixInverse),this.u.camPos.value.setFromMatrixPosition(c.matrixWorld);const f=Math.max(0,Math.min(.1,i-this.lastT));this.lastT=i,this.aimSky(c,f)}s1(i,this.atmos,e,this.beta.aoN),this.renderer.setRenderTarget(this.rt),this.renderer.render(t,e),(u=this.afterScene)==null||u.call(this,this.rt,e);const l=this.beta;this.applyDrunk(e),this.u.bloomK.value=r?l.bloom*(1+this.drunk.glow):0,r&&l.bloom>0&&this.bloom(),this.u.lut3Amt.value=this.u.tLut3.value?l.lut3:0,this.u.hazeNear.value=l.hazeNear,this.u.hazeFar.value=l.hazeFar,this.u.vigAmt.value=l.vig;const h=this.atmos;if(this.u.aoAmt.value=io&&l.aoN>0?l.ao:0,this.u.aoN.value=l.aoN,c.isPerspectiveCamera&&(this.u.aoPx.value=.35*this.lowH/(2*Math.tan(zs.degToRad(c.fov)/2))),h&&io?(this.u.sunDir.value.set(...h.sunDir),this.u.golden.value=h.golden,this.u.wetAmt.value=h.wet,this.u.cloudAmt.value=l.aoN>0?h.cloud:0,this.u.birdsAmt.value=l.aoN>0?h.birds:0):(this.u.golden.value=0,this.u.cloudAmt.value=0,this.u.wetAmt.value=0,this.u.birdsAmt.value=0),this.u.nc.value>.5){const f=this.nl;this.u.tone.value=f.tone,this.u.expo.value=f.expo,this.u.tiltD.value=f.tilt,this.u.tiltFocus.value=f.tiltFocus,this.u.tiltPx.value=f.tiltPx*this.lowH/844,this.u.lutN.value=this.u.tLutD.value?f.lut:0,this.u.lutW.value.set(...f.lutW),this.u.fxaaOn.value=f.fxaa}else this.u.tone.value=0,this.u.tiltD.value=0,this.u.lutN.value=0,this.u.fxaaOn.value=0;this.renderer.setRenderTarget(null),this.renderer.render(this.qScene,this.qCam)}}const Xh={min:.12,max:76*Math.PI/180},b1={min:.5,max:1.8};function qy(s,t,e,n){return s.size?s.has("tilt")||(Math.abs(e-1)>.05&&s.add("zoom"),Math.abs(n)>.1&&s.add("turn")):Math.abs(t)>12&&Math.abs(e-1)<.1&&Math.abs(n)<.12?s.add("tilt"):(Math.abs(e-1)>.05&&s.add("zoom"),Math.abs(n)>.1&&s.add("turn")),s}function be(s){return s>Math.PI&&(s-=2*Math.PI),s<-Math.PI&&(s+=2*Math.PI),s}const Yy=(s,t)=>Math.max(Xh.min,Math.min(Xh.max,s+t)),w1=1,E1=1.45,jy=(s,t=w1)=>t+(E1-t)*s,Ky=["Not nearly drunk enough for that.","Sober? Dance? No.","Ask me again after a beer.","My dignity is still awake.","I need a drink before I do anything fun."],xf={sober:{yaw:20*Math.PI/180,tilt:!1,zoom:{min:.85,max:1.15},springBack:!0},drunk:{yaw:1/0,tilt:!0,zoom:{...b1},springBack:!1}},A1=22,Zy=s=>s>=A1?"drunk":"sober",qh=1.5;function Yh(s,t){const e=xf[t];return{yaw:Number.isFinite(e.yaw)?Math.max(-e.yaw,Math.min(e.yaw,s.yaw)):be(s.yaw),zoom:Math.max(e.zoom.min,Math.min(e.zoom.max,s.zoom)),pitch:e.tilt?s.pitch:0}}function Jy(s,t,e,n,i){if(t==="drunk")return Yh(s,"drunk");if(i<qh){const o=qh-i,a=Math.min(1,e/Math.max(1e-6,o)),c=be(s.yaw);return{yaw:c-c*a,zoom:s.zoom+(1-s.zoom)*a,pitch:s.pitch-s.pitch*a}}const r=Yh(s,"sober");return!n&&xf.sober.springBack&&(r.yaw*=Math.exp(-8*e)),Math.abs(r.yaw)<1e-4&&(r.yaw=0),r}const Ze=Math.PI/180,jh={sober:{ahead:.34,aheadMax:5.5,aheadSway:0,turnMax:40*Ze,turnGain:1.2,turnLag:4,springW:6,springZ:1,cueWobble:0},drunk:{ahead:.3,aheadMax:6,aheadSway:.05,turnMax:40*Ze,turnGain:.9,turnLag:1.8,springW:3.4,springZ:.6,cueWobble:.3}};function $y(s){const t=jh.sober,e=jh.drunk,n=Math.max(0,Math.min(1,s)),i={};for(const r of Object.keys(t))i[r]=t[r]*(1-n)+e[r]*n;return i}function Qy(s,t,e,n){const i=2*s*Math.tan(t*Ze/2);return{side:i*e,fwd:i/Math.max(.5,Math.sin(n))}}function tM(s,t,e,n,i,r,o=1/0,a=0,c=1/0){const l=Math.hypot(s,t);if(l<.001)return{x:0,z:0};const h=Math.min(1.35,l/Math.max(.1,i)),u=Math.sin(e),f=Math.cos(e),p=-f,g=u,x=(s*u+t*f)/l;let d=((s*p+t*g)/l*r.ahead+r.aheadSway*Math.sin(a))*n.side*h,_=x*r.ahead*n.fwd*h;Math.abs(d)>c*n.side&&(d=Math.sign(d)*c*n.side);const y=Math.hypot(d,_),v=Math.min(r.aheadMax,Math.max(0,o-T1));if(y>v){const P=y>1e-6?v/y:0;d*=P,_*=P}return{x:p*d+u*_,z:g*d+f*_}}const T1=.6;function eM(s,t,e,n){const i=Math.sin(e),r=Math.cos(e),o=-r,a=i,c=s*o+t*a,l=s*i+t*r;if(!(Math.abs(c)>n))return{x:s,z:t};const h=Math.sign(c)*n;return{x:o*h+i*l,z:a*h+r*l}}function nM(s,t,e,n,i,r,o=.5){const a=Math.hypot(n,i);if(a<1e-6)return r;for(let c=o;c<=r+1e-9;c+=o)if(s(t+n/a*c,e+i/a*c))return c-o;return r}function ua(s,t,e,n,i,r){const o=Math.max(1,Math.ceil(n/.008333333333333333)),a=n/o;for(let c=0;c<o;c++)t+=(i*i*(e-s)-2*r*i*t)*a,s+=t*a;return{p:s,v:t}}const qs={cone:60*Ze,after:.8,pause:2,dead:12*Ze},iM=()=>({fwdT:0,pause:0,stray:!1,still:0});function sM(s){s.pause=qs.pause,s.fwdT=0,s.stray=!1}function rM(s,t,e,n,i,r){const o=Math.hypot(t,e),a=o>.2&&e/o>=Math.cos(qs.cone)-1e-9;if(s.pause=Math.max(0,s.pause-i),s.fwdT=a?s.fwdT+i:0,!a||s.fwdT<qs.after||s.pause>0)return 0;const c=Math.abs(n)-qs.dead;return c<=0?0:Math.sign(n)*Math.min(r.turnMax,c*r.turnGain)}function oM(s,t,e,n,i=4.3){const r=Math.abs(t)<i,o=Math.abs(t)<i+3&&e*-Math.sign(t)>.3;if(!r&&!o)return 0;let a=0,c=26;for(const l of n){const h=(s-l.x)*l.dir;l.speed>1&&h>0&&h<c&&(c=h,a=Math.sign(l.x-s)*Math.min(3,h*.2))}return a}const Yr={after:.35,gain:3,max:110*Ze,done:4*Ze};function aM(s,t,e,n){return t>.2?(s.still=0,Math.abs(e)>qs.dead&&(s.stray=!0),0):(s.still+=n,!s.stray||s.pause>0||s.still<Yr.after?0:Math.abs(e)<Yr.done?(s.stray=!1,0):Math.sign(e)*Math.min(Yr.max,Math.max(.25,Math.abs(e)*Yr.gain)))}const Ls={back:2.6,right:.6,up:1.8,ahead:9,lookY:1.6,minBack:.9},Kh={fovMul:.62};function cM(s,t){const e=Math.max(0,Math.min(1,t));return s*(Kh.fovMul+(1-Kh.fovMul)*e)}function lM(s,t){return Math.tan(s*Ze/2)/Math.tan(t*Ze/2)}const mi=35*Ze,R1=-(90*Ze-mi),C1=12*Ze;function hM(s,t=1,e=!1,n){const i=Math.PI/2;let r;if(e){const a=R1*t;if(r=(l=>Math.round((l+a-mi*t)/i)*i+mi*t)(s),n!==void 0&&t>.5){const l=Math.round((n-mi*t)/i)*i+mi*t;Math.abs(be(s+a-l))<i/2+C1&&(r=l)}return be(s+be(r-s)*Math.max(0,Math.min(1,t)))}return r=Math.round((s-mi*t)/i)*i+mi*t,be(s+be(r-s)*Math.max(0,Math.min(1,t)))}const fo=.6;function uM(s,t,e,n,i=1){const r=Math.max(1,Math.ceil((e-s)/i)),o=Math.max(1,Math.ceil((n-t)/i));return{x0:s,z0:t,cell:i,w:r,h:o,lo:new Float32Array(r*o).fill(1/0),hi:new Float32Array(r*o).fill(-1/0)}}function P1(s,t,e,n){const i=Math.floor((t-s.x0)/s.cell),r=Math.floor((n-s.z0)/s.cell);if(i<0||r<0||i>=s.w||r>=s.h)return;const o=r*s.w+i;e<s.lo[o]&&(s.lo[o]=e),e>s.hi[o]&&(s.hi[o]=e)}function fM(s,t,e,n,i,r,o,a,c,l){if(Math.max(e,r,c)<fo)return;const h=Math.max(Math.hypot(i-t,r-e,o-n),Math.hypot(a-t,c-e,l-n),Math.hypot(a-i,c-r,l-o)),u=Math.min(400,Math.max(1,Math.ceil(h/(s.cell*.5))));for(let f=0;f<=u;f++)for(let p=0;f+p<=u;p++){const g=f/u,x=p/u,m=e+(r-e)*g+(c-e)*x;m<fo*.5||P1(s,t+(i-t)*g+(a-t)*x,m,n+(o-n)*g+(l-n)*x)}}function _f(s,t,e,n,i=.15){const r=Math.floor((t-s.x0)/s.cell),o=Math.floor((n-s.z0)/s.cell);if(r<0||o<0||r>=s.w||o>=s.h)return!1;const a=o*s.w+r;return e>=s.lo[a]-i&&e<=s.hi[a]+i}function dM(s,t=40){const{w:e,h:n,lo:i,hi:r}=s,o=fo*2,a=h=>i[h]<=o;let c=0;const l=[[1,0],[-1,0],[0,1],[0,-1]];for(let h=0;h<n;h++)for(let u=0;u<e;u++){const f=h*e+u;if(!(i[f]>o&&i[f]<1/0))continue;let p=!0;for(const[g,x]of l){let m=!1;for(let d=1;d<=t;d++){const _=u+g*d,y=h+x*d;if(_<0||y<0||_>=e||y>=n)break;const v=y*e+_;if(a(v)){m=r[v]>=i[f]-.75;break}if(!(i[v]<1/0))break}if(!m){p=!1;break}}p&&(i[f]=0,c++)}return c}function pM(s,t,e,n,i,r,o,a=.5,c=0,l=.5){const h=Math.hypot(i-t,r-e,o-n);if(h<1e-6)return-1;for(let u=a;u<=h-c+1e-9;u+=l){const f=u/h;if(_f(s,t+(i-t)*f,e+(r-e)*f,n+(o-n)*f,0))return f}return-1}function mM(s,t,e,n,i,r,o,a=.5,c=1.2){const l=Math.hypot(i-t,r-e,o-n);if(l<1e-6||!pc(s,i,r,o))return l;for(let h=l-.25;h>c;h-=.25){const u=h/l;if(!pc(s,t+(i-t)*u,e+(r-e)*u,n+(o-n)*u))return Math.max(c,h-a)}return c}function pc(s,t,e,n){const i=Math.floor((t-s.x0)/s.cell),r=Math.floor((n-s.z0)/s.cell);if(i<0||r<0||i>=s.w||r>=s.h)return!1;const o=r*s.w+i;return s.lo[o]<=fo*2&&e<=s.hi[o]}const mc={handsOff:2,armIn:14,armOut:1.2,frameEdge:.78};function gM(s,t,e,n,i){const r=s-e,o=t-n,a=Math.cos(i),c=Math.sin(i);return{x:e+r*a+o*c,z:n-r*c+o*a}}function xM(s,t,e,n=mc.armIn,i=mc.armOut){const r=1-Math.exp(-(t<s?n:i)*e),o=s+(t-s)*r;return Math.abs(o-t)<.001?t:o}function _M(s,t,e,n,i,r,o){if(o<=0)return 0;const a=-Math.cos(e),c=Math.sin(e);let l=1/0,h=-1/0;for(let p=0;p<o;p++){const g=(i[p]-s)*a+(r[p]-t)*c;g<l&&(l=g),g>h&&(h=g)}const u=h-n,f=l+n;return u>f?(l+h)/2:u>0?u:f<0?f:0}const Zh={width:6,along:6};function vM(s,t){let e=null,n=-1/0;for(let i=0;i<8;i++){const r=i/8*Math.PI,o=s(r+Math.PI/2)+s(r-Math.PI/2);if(o>=Zh.width)continue;const a=s(r)+s(r+Math.PI);if(a<Zh.along)continue;const c=Math.cos(r-t)>=0?r:r+Math.PI,l=a-4*Math.abs(be(c-t));l>n&&(n=l,e={axis:be(c),width:o})}return e}function yM(s,t,e,n,i,r,o,a=2.5,c=.4,l=.2,h=.35){const u=Math.hypot(i-t,r-e,o-n);if(u<1e-6)return!1;for(let f=c;f<=u-l+1e-9;f+=h){const p=f/u,g=t+(i-t)*p,x=e+(r-e)*p,m=n+(o-n)*p;if(f<a?pc(s,g,x,m):_f(s,g,x,m,0))return!0}return!1}function fa(s,t,e,n,i,r,o,a){const c=e-t.x,l=n-t.y,h=i-t.z,u=Math.max(c*c+l*l+h*h,1e-4),f=((s.x-t.x)*c+(s.y-t.y)*l+(s.z-t.z)*h)/u;if(f<=0||f>=a)return 0;const p=r+(o-r)*f,g=Math.hypot(s.x-(t.x+c*f),s.y-(t.y+l*f),s.z-(t.z+h*f)),x=p*.55,m=Math.max(0,Math.min(1,(g-x)/(p-x)));return 1-m*m*(3-2*m)}function MM(s,t,e,n,i){const r=Math.hypot(s.x-t.x,s.y-t.y,s.z-t.z),o=Math.max(0,Math.min(1,(r-3)/3));let a=1-o*o*(3-2*o);a=Math.max(a,fa(s,t,e.x,e.y+.9,e.z,1,1.8,1.05));for(const c of n)c.on&&(a=Math.max(a,fa(s,t,c.x,c.y+.9,c.z,.6,2,1)));for(const c of i)c.on&&(a=Math.max(a,fa(s,t,c.x,c.y+.8,c.z,.6,1.4,1)));return 1+(.15-1)*a}const Jh=[4,8,12];function SM(s,t,e,n,i,r=null){const o=Math.sin(e),a=Math.cos(e);let c=!1,l=0,h=s,u=t,f=0;for(let p=0;p<i.length;p++){const g=Jh[p],x=i[p];if(r&&r.length>1){for(;l<r.length&&f+Math.hypot(r[l].x-h,r[l].z-u)<g;)f+=Math.hypot(r[l].x-h,r[l].z-u),h=r[l].x,u=r[l].z,l++;if(l>=r.length){x.on=!1;continue}const m=Math.hypot(r[l].x-h,r[l].z-u)||1,d=(g-f)/m;x.x=h+(r[l].x-h)*d,x.z=u+(r[l].z-u)*d,x.y=0,x.on=!0;continue}if(!c){for(let m=p?Jh[p-1]:.5;m<=g;m+=.5)if(n(s+o*m,t+a*m)){c=!0;break}}x.on=!c,x.x=s+o*g,x.z=t+a*g,x.y=0}}const so={close:0,far:.85,mid:.42},bM=s=>s<so.mid?so.close:so.far,wM=so.close,EM=.5;function AM(s){const t=Math.max(0,Math.min(1,s/.4)),e=1-t*t*(3-2*t),n=Math.max(0,Math.min(1,(s-.4)/.6));return{closeK:e,wideMul:.75+.7*n}}const I1=Math.PI/180,ni={every:.2,yaws:[0,15,-15,30,-30,60,-60,90,-90,135,-135,180].map(s=>s*I1),lifts:[0,.15,.3],dists:[1,.8],margin:3,w:{him:100,ahead:12,other:40,cop:10,canopy:2.5,yaw:4,lift:10,dist:8,move:6,alley:30},spring:7,maxRate:4};function vf(s,t,e,n=0,i=!1){const r=ni.w;return(s.him?r.him:0)+s.ahead*r.ahead+s.others*r.other+(s.cop?r.cop:0)+s.canopy*r.canopy+Math.abs(be(t.yaw-n))*(i?r.alley:r.yaw)+t.lift*r.lift+(1-t.dist)*r.dist+(Math.abs(be(t.yaw-e.yaw))+Math.abs(t.lift-e.lift))*r.move}function L1(s,t,e=0,n=!1){let i={...t},r=1/0;const o={yaw:0,lift:0,dist:1};for(const a of ni.yaws)for(const c of ni.lifts)for(const l of ni.dists){o.yaw=be(e+a),o.lift=c,o.dist=l;const h=vf(s(o),o,t,e,n);h<r&&(r=h,i={...o})}return{pose:i,cost:r}}const TM=()=>({yaw:0,vel:0,lift:0,liftV:0,dist:1,distV:0,want:{yaw:0,lift:0,dist:1},t:0});function RM(s,t,e,n,i=0,r=!1,o=0){const a=ni.every*(1+o),c=ni.margin*(1+o),l=ni.spring*(1-.45*o),h=ni.maxRate*(1-.5*o);if(e<mc.handsOff)return s.vel=s.liftV=s.distV=0,s.t=0,s.want={yaw:s.yaw,lift:s.lift,dist:s.dist},s;if(s.t-=t,s.t<=0){s.t=a;const g={yaw:s.yaw,lift:s.lift,dist:s.dist},x={yaw:be(s.want.yaw),lift:s.want.lift,dist:s.want.dist},m=vf(n(x),x,g,i,r),d=L1(n,g,i,r);d.cost<m-c?s.want={yaw:s.yaw+be(d.pose.yaw-s.yaw),lift:d.pose.lift,dist:d.pose.dist}:s.want={yaw:s.yaw+be(x.yaw-s.yaw),lift:x.lift,dist:x.dist}}const u=ua(s.yaw,s.vel,s.want.yaw,t,l,1);if(s.vel=Math.max(-h,Math.min(h,u.v)),s.yaw=Math.abs(u.p-s.yaw)>h*t?s.yaw+Math.sign(u.p-s.yaw)*h*t:u.p,Math.abs(s.yaw)>Math.PI){const g=Math.round(s.yaw/(2*Math.PI))*2*Math.PI;s.yaw-=g,s.want.yaw-=g}const f=ua(s.lift,s.liftV,s.want.lift,t,l,1);s.lift=f.p,s.liftV=f.v;const p=ua(s.dist,s.distV,s.want.dist,t,l*.7,1);return s.dist=p.p,s.distV=p.v,s}function CM(s,t,e,n,i,r,o,a=2.2,c=7){const l=n-s,h=r-e,u=l*l+h*h;let f=0;for(let p=0;p<o.length;p+=3){const g=o[p],x=o[p+1],m=o[p+2];if(g+m<Math.min(s,n)||g-m>Math.max(s,n)||x+m<Math.min(e,r)||x-m>Math.max(e,r))continue;const d=u>1e-9?Math.max(0,Math.min(1,((g-s)*l+(x-e)*h)/u)):0,_=s+l*d-g,y=e+h*d-x;if(_*_+y*y>m*m)continue;const v=t+(i-t)*d;v>=a&&v<=c&&f++}return f}const PM={walk:{dist:1,pitch:0,ahead:1,frame:"him and the way ahead",view:"keep"},drunk:{dist:1,pitch:0,ahead:.9,frame:"him and the way ahead (gentle sway only)",view:"keep"},far:{dist:1,pitch:0,ahead:1.2,frame:"him, the way ahead, over the canopy in parks",view:"keep"},talk:{dist:.9,pitch:-.04,ahead:0,frame:"him and the person (two-shot)",view:"keep"},coop:{dist:1.1,pitch:.04,ahead:.7,frame:"both players: a two-shot pulled back only to fit both (max 1.6x); past 16 m apart, follow him and an edge arrow points to the partner",view:"keep"},chase:{dist:1.1,pitch:0,ahead:1.5,frame:"him, the way ahead, the cop",view:"keep"},ride:{dist:1.15,pitch:-.06,ahead:1.6,frame:"him and a longer lead ahead",view:"keep"},door:{dist:.95,pitch:0,ahead:.4,frame:"him and the door",view:"keep"},bench:{dist:1.15,pitch:.02,ahead:0,frame:"him on the bench, the street (calm wide)",view:"keep"},whimsy:{dist:.9,pitch:-.05,ahead:0,frame:"him (a short flattering angle, back after)",view:"keep"}};function IM(s){return s.whimsy?"whimsy":s.talking?"talk":s.chased?"chase":s.riding?"ride":s.sitting?"bench":s.coop?"coop":s.far?"far":s.drunk?"drunk":"walk"}const Ds={x:.7,yTop:.5,yBottom:-.4};function LM(s,t,e,n=Ds.yBottom){if(e>1)return 1;const i=Math.abs(s)>Ds.x?(Math.abs(s)-Ds.x)/Math.abs(s):0,r=t>Ds.yTop?(t-Ds.yTop)/t:t<n?(t-n)/t:0;return Math.max(0,Math.min(1,Math.max(i,Math.abs(r))))}const jr={split:16,margin:2.5,maxMul:1.8,farCap:1.05};function DM(s,t,e,n,i,r,o=0,a=r){const c=e-s,l=n-t;if(Math.hypot(c,l)>jr.split)return null;const u=Math.abs(c*Math.sin(o)+l*Math.cos(o)),f=Math.abs(-c*Math.cos(o)+l*Math.sin(o)),p=Math.max((f/2+jr.margin)/Math.max(.05,r),(u/2+jr.margin)/Math.max(.05,a));return{x:(s+e)/2,z:(t+n)/2,mul:Math.max(1,Math.min(jr.maxMul,p/Math.max(.5,i)))}}function NM(s,t,e,n,i){const r=Math.atan2(e-s,n-t),o=be(r+Math.PI);return Math.abs(be(r-i))<=Math.abs(be(o-i))?r:o}const D1={pitch:.52,dist:13.5,heroDrop:.3,fovMul:1,liftMul:1},UM={pitch:.4363,dist:17.53,heroDrop:.2793,fovMul:60/70,liftMul:0},FM={back:4.4,up:3.6,right:.35,ahead:1.2,lookY:.2},zM={backMul:1.3,up:3.9};function OM(s,t,e,n){const i=Math.sin(e),r=Math.cos(e),o=-r,a=i;return{px:s-i*n.back+o*n.right,py:n.up,pz:t-r*n.back+a*n.right,tx:s+i*n.ahead+o*n.right*.4,ty:n.lookY,tz:t+r*n.ahead+a*n.right*.4}}function BM(s,t,e){const n=Math.max(0,Math.min(1,e)),i=(r,o)=>r+(o-r)*n;return{back:i(s.back,t.back),up:i(s.up,t.up),right:i(s.right,t.right),ahead:i(s.ahead,t.ahead),lookY:i(s.lookY,t.lookY)}}const kM={back:Ls.back,up:Ls.up,right:Ls.right,ahead:Ls.ahead,lookY:Ls.lookY};function HM(s,t){const e=t+D1.heroDrop,n=s*Math.sin(e),i=s*Math.cos(e);return Math.max(0,n/Math.tan(Math.max(.05,t))-i)}const un=(s,t,e)=>{const n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},$h=1.28,fn={x:.19,y:.675},Kr={x:.385};function N1(s){let t=null;if(s.updateMatrixWorld(!0),s.traverse(L=>{L.isMesh&&!t&&(t=L)}),!t)throw new Error("hero model has no mesh");const e=t.geometry.clone();e.applyMatrix4(t.matrixWorld),e.computeBoundingBox();const n=e.boundingBox,i=n.max.y-n.min.y,r=(n.max.x+n.min.x)/2,o=(n.max.z+n.min.z)/2;e.translate(-r,-n.min.y,-o),e.scale(1/i,1/i,1/i);const a=["root","hips","spine","chest","head","thighR","shinR","thighL","shinL","armR","foreR","armL","foreL"],c=Object.fromEntries(a.map((L,F)=>[L,F])),l=e.attributes.position,h=l.count,u=new Uint16Array(h*4),f=new Float32Array(h*4),p=new Int8Array(h),g=new Float32Array(h),x=new Float32Array(h);for(let L=0;L<h;L++){const F=l.getX(L),B=l.getY(L),Y=l.getZ(L),H=Math.abs(F),J=F>=0?"R":"L",k={},X=(Q,dt)=>{dt>1e-4&&(k[Q]=(k[Q]||0)+dt)},rt=Y>.1&&B>.3&&H<.2,ft=rt?0:un(.165,.215,H)*un(.56,.6,B)*(1-un(.77,.8,B)),It=(1-un(.225,.27,B))*(1-ft),jt=(1-ft)*(rt?0:un(.725,.765,B)),q=Math.max(0,1-ft-It-jt);if(ft){const Q=un(Kr.x-.03,Kr.x+.03,H);X("fore"+J,ft*Q),X("arm"+J,ft*(1-Q)),p[L]=F>=0?1:-1,g[L]=ft,x[L]=Q}if(It){const Q=un(-.025,.025,F);for(const[dt,At]of[["R",Q],["L",1-Q]]){const Ut=1-un(.1,.15,B);X("shin"+dt,It*At*Ut),X("thigh"+dt,It*At*(1-Ut))}}if(jt&&X("head",jt),q)if(rt)X("chest",q);else{const Q=un(.44,.58,B),dt=un(.28,.4,B);X("chest",q*Q),X("spine",q*(dt-dt*Q)),X("hips",q*(1-dt))}const tt=Object.entries(k).sort((Q,dt)=>dt[1]-Q[1]).slice(0,4),gt=tt.reduce((Q,[,dt])=>Q+dt,0)||1;tt.forEach(([Q,dt],At)=>{u[L*4+At]=c[Q],f[L*4+At]=dt/gt}),tt.length||(u[L*4]=c.hips,f[L*4]=1)}for(let L=0;L<h;L++){if(!p[L])continue;const F=p[L],B=-F*$h*g[L],Y=l.getX(L),H=l.getY(L),J=Y-F*fn.x,k=H-fn.y,X=Math.cos(B),rt=Math.sin(B);l.setXY(L,F*fn.x+J*X-k*rt,fn.y+J*rt+k*X)}l.needsUpdate=!0,e.computeVertexNormals(),e.setAttribute("skinIndex",new Cc(u,4)),e.setAttribute("skinWeight",new Bt(f,4));const m={},d={},_=(L,F,B,Y,H=0)=>{const J=new Dc;return J.name=L,m[L]=J,d[L]=new R(B,Y,H),F?(F.add(J),J.position.copy(d[L]).sub(d[F.name])):J.position.set(B,Y,H),J},y=_("root",null,0,0),v=_("hips",y,0,.24),P=_("spine",v,0,.4),E=_("chest",P,0,.56);_("head",E,0,.74,-.01);for(const L of[1,-1]){const F=L>0?"R":"L",B=_("thigh"+F,v,.075*L,.23);_("shin"+F,B,.075*L,.12);const Y=-L*$h,H=(Kr.x-fn.x)*Math.cos(Y),J=(Kr.x-fn.x)*Math.sin(Y)*L,k=_("arm"+F,E,fn.x*L,fn.y);_("fore"+F,k,fn.x*L+H*L,fn.y+J)}const T=a.map(L=>m[L]),C=t.material;C.map&&(C.map.magFilter=ee,C.map.minFilter=Ye),C.roughness=1,C.metalness=0;const b=new Nu(e,C);b.add(y),b.updateMatrixWorld(!0),b.bind(new vo(T),b.matrixWorld),b.frustumCulled=!1;const M=new pe;M.add(b);function I(L){const F=L.t,B=L.drunk||0,Y=L.walkT*9,H=L.walk||0;if(T.forEach(X=>X.rotation.set(0,0,0)),m.root.position.y=0,m.chest.rotation.set(Math.sin(F*1.6)*.02,0,Math.sin(F*1.1)*.07*B),m.spine.rotation.z=Math.sin(F*1.3+1)*.06*B,m.head.rotation.set(Math.sin(F*1.2)*.03+.08*B,Math.sin(F*.7)*(.08+.15*B),Math.sin(F*1.9)*.1*B),m.armR.rotation.z=Math.sin(F*2.3)*.18*B,m.armL.rotation.z=-Math.sin(F*2.1+1)*.18*B,m.foreR.rotation.x=.12,m.foreL.rotation.x=.12,H>0){const X=Math.sin(Y)*.55*H,rt=Math.max(0,-Math.cos(Y))*.7*H,ft=Math.max(0,Math.cos(Y))*.7*H;m.thighR.rotation.x=X,m.thighL.rotation.x=-X,m.shinR.rotation.x=-rt,m.shinL.rotation.x=-ft,m.armR.rotation.x=-X*.9,m.armL.rotation.x=X*.9,m.foreR.rotation.x=.35*H,m.foreL.rotation.x=.35*H,m.hips.rotation.y=Math.sin(Y)*.08*H,m.chest.rotation.y=-Math.sin(Y)*.1*H,m.root.position.y=Math.abs(Math.cos(Y))*.015*H,m.spine.rotation.x-=.07*H}const J=L.actT||0,k=Math.sin(Math.min(1,J)*Math.PI);if(L.act==="swig"&&(m.armR.rotation.x=2.2*k,m.armR.rotation.z=.35*k,m.foreR.rotation.x=1.5*k,m.head.rotation.x=.45*k,m.chest.rotation.x=.12*k),L.act==="pickup"&&(m.spine.rotation.x=-.55*k,m.chest.rotation.x=-.35*k,m.armR.rotation.x=1*k,m.thighR.rotation.x=.35*k,m.thighL.rotation.x=.35*k,m.shinR.rotation.x=-.6*k,m.shinL.rotation.x=-.6*k,m.root.position.y=-.06*k),L.act==="beg"&&(m.armR.rotation.x=1.1,m.foreR.rotation.x=.6,m.head.rotation.x=-.1),L.act==="sit"&&(m.thighR.rotation.x=1.45,m.thighL.rotation.x=1.45,m.shinR.rotation.x=-1.45,m.shinL.rotation.x=-1.45,m.root.position.y=-.1,m.spine.rotation.x=.08,m.armR.rotation.x=.55,m.armL.rotation.x=.55,m.foreR.rotation.x=.7,m.foreL.rotation.x=.7),L.act==="dance"||L.act==="whim"){const X=F*7;m.armR.rotation.set(2.6+Math.sin(X)*.4,0,-.25),m.armL.rotation.set(2.6+Math.sin(X+Math.PI)*.4,0,.25),m.hips.rotation.z=Math.sin(X)*.18,m.chest.rotation.z=-Math.sin(X)*.2,m.thighR.rotation.x=Math.max(0,Math.sin(X))*.6,m.shinR.rotation.x=-Math.max(0,Math.sin(X))*.9,m.thighL.rotation.x=Math.max(0,-Math.sin(X))*.6,m.shinL.rotation.x=-Math.max(0,-Math.sin(X))*.9,m.head.rotation.z=Math.sin(X*.5)*.2,m.root.position.y=Math.abs(Math.sin(X))*.03}if(L.act==="stumble"){const X=J;m.armR.rotation.z=1.15*X+Math.sin(F*9)*.15*X,m.armL.rotation.z=-1.15*X-Math.sin(F*8+1)*.15*X,m.armR.rotation.x+=.3*X,m.armL.rotation.x-=.2*X,m.head.rotation.x=-.2*X,m.spine.rotation.x=-.1*X}if(L.act==="fall"){const X=J;m.armR.rotation.x=1.35*X,m.armL.rotation.x=1.35*X,m.armR.rotation.z=.25*X,m.armL.rotation.z=-.25*X,m.foreR.rotation.x=.3,m.foreL.rotation.x=.3,m.head.rotation.x=-.35*X,m.thighR.rotation.x=.25*X,m.shinR.rotation.x=-.5*X}L.act==="nabbed"&&(m.head.rotation.x=.35,m.chest.rotation.x=.1,m.armR.rotation.x=.2,m.armL.rotation.x=.2)}return{group:M,bones:m,pose:I}}function GM(s,t=8e3){return new Promise(e=>{let n=!1;const i=r=>{n||(n=!0,e(r))};setTimeout(()=>i(null),t);try{new rf().load(s,r=>{try{i(N1(r.scene))}catch(o){console.warn("hero3d rig failed",o),i(null)}},void 0,r=>{console.warn("hero3d load failed",r),i(null)})}catch(r){console.warn("hero3d",r),i(null)}})}export{R as $,Of as A,Y1 as B,nl as C,$1 as D,U1 as E,es as F,wf as G,xn as H,qi as I,Hf as J,sl as K,O1 as L,z1 as M,ma as N,gn as O,Q1 as P,Us as Q,Bf as R,ny as S,ty as T,iy as U,sy as V,Pf as W,Mt as X,pe as Y,Uf as Z,Rt as _,G1 as a,go as a$,io as a0,hs as a1,Si as a2,nn as a3,Uu as a4,ay as a5,nc as a6,mn as a7,an as a8,cn as a9,ro as aA,zt as aB,bv as aC,Ji as aD,Bn as aE,zu as aF,p_ as aG,Zu as aH,Qu as aI,g_ as aJ,Pc as aK,yn as aL,T_ as aM,Ju as aN,rh as aO,Ne as aP,vn as aQ,hy as aR,lv as aS,ly as aT,c_ as aU,$u as aV,f_ as aW,Fu as aX,Xu as aY,Gn as aZ,_n as a_,Wr as aa,la as ab,dy as ac,fy as ad,me as ae,Bt as af,Qs as ag,Ou as ah,Se as ai,ir as aj,ln as ak,Ee as al,Ku as am,Yt as an,_o as ao,Mc as ap,Hn as aq,ee as ar,rf as as,iv as at,Ye as au,rs as av,ne as aw,kn as ax,sn as ay,Qn as az,j1 as b,l1 as b$,Fe as b0,we as b1,ry as b2,ey as b3,ce as b4,ke as b5,Py as b6,Bc as b7,uy as b8,cc as b9,Xf as bA,Xy as bB,Uy as bC,Ny as bD,w1 as bE,Iu as bF,wM as bG,be as bH,qy as bI,Cy as bJ,m1 as bK,MM as bL,pc as bM,_f as bN,_1 as bO,hf as bP,Xh as bQ,sM as bR,bM as bS,py as bT,Gy as bU,my as bV,gf as bW,$y as bX,rM as bY,hM as bZ,aM as b_,ds as ba,r1 as bb,mu as bc,yd as bd,gy as be,le as bf,Wu as bg,uM as bh,fM as bi,dM as bj,Ke as bk,W1 as bl,da as bm,zs as bn,o1 as bo,vy as bp,u1 as bq,by as br,Sy as bs,d1 as bt,Iy as bu,Df as bv,B1 as bw,Ay as bx,Nf as by,cy as bz,Dn as c,Dy as c$,My as c0,yy as c1,Ry as c2,jy as c3,Oy as c4,gM as c5,nM as c6,TM as c7,Vy as c8,iM as c9,oM as cA,_M as cB,DM as cC,ua as cD,lM as cE,Yy as cF,HM as cG,EM as cH,Ls as cI,V1 as cJ,Ky as cK,yM as cL,GM as cM,Wy as cN,vM as cO,eM as cP,mc as cQ,OM as cR,mM as cS,xM as cT,LM as cU,BM as cV,Ds as cW,SM as cX,zy as cY,Ly as cZ,Fy as c_,wy as ca,Ey as cb,D1 as cc,UM as cd,av as ce,rl as cf,Ty as cg,pM as ch,q1 as ci,Hy as cj,mi as ck,ky as cl,Zy as cm,Jy as cn,so as co,AM as cp,jr as cq,_y as cr,xy as cs,et as ct,cM as cu,RM as cv,Qy as cw,IM as cx,tM as cy,PM as cz,oy as d,By as d0,NM as d1,kM as d2,FM as d3,zM as d4,CM as d5,vi as d6,gc as d7,pa as e,kf as f,nu as g,X1 as h,Z1 as i,K1 as j,J1 as k,Ns as l,sr as m,Ef as n,k1 as o,Af as p,Rf as q,F1 as r,Qh as s,bf as t,H1 as u,zf as v,Ff as w,We as x,Fn as y,Xi as z};
