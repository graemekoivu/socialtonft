(function(e){function t(t){for(var c,a,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0be5":function(e,t,n){},4232:function(e,t,n){"use strict";n("7497")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function o(e,t,n,o,r,a){var i=Object(c["m"])("Head"),s=Object(c["m"])("HomeTabs"),l=Object(c["m"])("Tabs"),u=Object(c["m"])("Display");return Object(c["i"])(),Object(c["e"])("div",null,[Object(c["g"])(i,{msg:"Welcome to SocialToNFT!"}),r.userpage?(Object(c["i"])(),Object(c["c"])(l,{key:1})):(Object(c["i"])(),Object(c["c"])(s,{key:0})),r.display?(Object(c["i"])(),Object(c["c"])(u,{key:2})):Object(c["d"])("",!0)])}n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c");var r={class:"title"};function a(e,t,n,o,a,i){return Object(c["i"])(),Object(c["e"])("div",r,[Object(c["f"])("h1",null,Object(c["n"])(n.msg),1)])}var i={name:"Head",props:{msg:String}},s=(n("c7b8"),n("6b0d")),l=n.n(s);const u=l()(i,[["render",a],["__scopeId","data-v-154691c6"]]);var d=u;function f(e,t,n,o,r,a){return Object(c["i"])(),Object(c["e"])("div",null,[Object(c["f"])("button",{class:"tablink",onClick:t[0]||(t[0]=function(){return a.setupInsta&&a.setupInsta.apply(a,arguments)}),id:"defaultOpen"},"Create"),Object(c["f"])("button",{class:"tablink",onClick:t[1]||(t[1]=function(){return a.collectClicked&&a.collectClicked.apply(a,arguments)})},"Collect")])}var b={name:"HomeTabs",methods:{setupInsta:function(){var e="914052029523165",t="https://localhost:3443/",n="https://api.instagram.com/oauth/authorize?client_id=".concat(e,"&redirect_uri=").concat(t,"&scope=user_profile,user_media&response_type=code");window.open(n,"_blank").focus()},collectClicked:function(){alert("Collect was clicked")}}};n("7e75");const p=l()(b,[["render",f],["__scopeId","data-v-358a7a12"]]);var h=p,O=Object(c["f"])("button",{class:"tablink",onclick:"",id:"defaultOpen"},"Content Owned",-1),j=Object(c["f"])("button",{class:"tablink",onclick:""},"Content Created",-1),m=[O,j];function v(e,t,n,o,r,a){return Object(c["i"])(),Object(c["e"])("div",null,m)}var g={name:"Tabs"};n("4232");const y=l()(g,[["render",v]]);var k=y,_=function(e){return Object(c["k"])("data-v-5000fecc"),e=e(),Object(c["j"])(),e},w={key:0,class:"error"},C=_((function(){return Object(c["f"])("h1",null,"Select the photos you want to mint as NFT",-1)})),S={class:"wrapper"},T=["item"],x=["src","onClick"];function P(e,t,n,o,r,a){var i=this;return Object(c["i"])(),Object(c["e"])("div",null,[r.error?(Object(c["i"])(),Object(c["e"])("p",w,Object(c["n"])(r.error),1)):Object(c["d"])("",!0),C,Object(c["f"])("div",S,[(Object(c["i"])(!0),Object(c["e"])(c["a"],null,Object(c["l"])(r.content,(function(e,t){return Object(c["i"])(),Object(c["e"])("div",{class:"content",item:e,key:e.media_url},[Object(c["f"])("img",{class:"image",style:Object(c["h"])([i.content[t].isSelected?{border:"10px solid aquamarine","border-radius":"10px"}:{border:"10px solid white"}]),src:e.media_url,onClick:function(n){a.selectDeselect(e.media_url),a.toggleSelected(t)}},null,12,x)],8,T)})),128))]),Object(c["f"])("button",{onClick:t[0]||(t[0]=function(e){return a.submitForMinting()})},"Submit")])}var D=n("5530"),H=n("1da1"),I=(n("96cf"),n("d81d"),n("4de4"),n("d4ec")),F=n("bee2"),M=n("bc3a"),N=n.n(M),R=function(){function e(){Object(I["a"])(this,e)}return Object(F["a"])(e,null,[{key:"getDisplay",value:function(e){var t;return new Promise((function(n,c){try{N.a.get("https://localhost:3443/display/?code=".concat(e)).then((function(e){console.log("1: "+e+" ..2: "+e.data),t=e.data,n(t)}))}catch(o){c(o)}}))}},{key:"postNFTs",value:function(e,t){return new Promise((function(n,c){try{N.a.post(e,t).then((function(e){n(e)}))}catch(o){c(o)}}))}}]),e}(),E=R,J={name:"Display",data:function(){return{content:[],selectedContent:[],access_token:"",error:""}},created:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{console.log("CODE IS HERE: "+e.$parent.code),E.getDisplay(e.$parent.code).then((function(t){e.content=t["urls_data"].data.map((function(e){return Object(D["a"])(Object(D["a"])({},e),{},{isSelected:!1})})),e.access_token=t["access_token"],console.log("access token wanted~~~"+e.access_token)})).catch((function(t){console.log(t),e.error=t.message}))}catch(n){e.error=n.message}case 1:case"end":return t.stop()}}),t)})))()},methods:{selectDeselect:function(e){this.selectedContent.filter((function(t){return t===e})).length>0?this.selectedContent=this.selectedContent.filter((function(t){return t!==e})):this.selectedContent.push(e)},toggleSelected:function(e){this.content[e].isSelected=!this.content[e].isSelected},submitForMinting:function(){if(this.selectedContent.length<=0)alert("No photos selected");else{var e="https://localhost:3443/nfts",t={token:this.access_token,urls:this.selectedContent};console.log(t.token),E.postNFTs(e,t).then((function(e){alert(e)})).catch((function(e){console.log(e)})),alert("attempted to submit: "+this.selectedContent)}return!0}}};n("7d01");const $=l()(J,[["render",P],["__scopeId","data-v-5000fecc"]]);var q=$,z=new URLSearchParams(window.location.search),A=z.get("code"),L={name:"App",data:function(){return{userpage:!1,display:!1,code:A}},components:{Head:d,HomeTabs:h,Tabs:k,Display:q},created:function(){z.get("code")?this.display=!0:this.display=!1,console.log(A)}};n("98a7");const U=l()(L,[["render",o]]);var W=U;Object(c["b"])(W).mount("#app")},7497:function(e,t,n){},"7d01":function(e,t,n){"use strict";n("8fbe")},"7e75":function(e,t,n){"use strict";n("d26c")},"8fbe":function(e,t,n){},"98a7":function(e,t,n){"use strict";n("0be5")},c7b8:function(e,t,n){"use strict";n("d87a")},d26c:function(e,t,n){},d87a:function(e,t,n){}});
//# sourceMappingURL=app.937225c5.js.map