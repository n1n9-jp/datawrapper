!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../../../../../../../static/vendor/jschardet/jschardet.min.js"),require("../../../../../../../static/vendor/xlsx/xlsx.full.min.js")):"function"==typeof define&&define.amd?define("svelte/upload",["../../../../../../../static/vendor/jschardet/jschardet.min.js","../../../../../../../static/vendor/xlsx/xlsx.full.min.js"],e):t.upload=e(t.jschardet)}(this,function(t){"use strict";function e(){}function a(t,e){for(var a in e)t[a]=e[a];return t}function n(t,e){e.appendChild(t)}function r(t,e,a){e.insertBefore(t,a)}function s(t){t.parentNode.removeChild(t)}function i(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}function o(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(t,e,a){t.addEventListener(e,a,!1)}function l(t,e,a){t.removeEventListener(e,a,!1)}function h(t,e,a){t.setAttribute(e,a)}function f(t,e){for(var a=0;a<t.options.length;a+=1){var n=t.options[a];if(n.__value===e)return void(n.selected=!0)}}function v(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function p(){return Object.create(null)}function _(t){this.destroy=e,this.fire("destroy"),this.set=this.get=e,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function g(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function m(t,e){return t!=t?e==e:t!==e}function y(t,e){var a=t in this._handlers&&this._handlers[t].slice();if(a)for(var n=0;n<a.length;n+=1){var r=a[n];r.__calling||(r.__calling=!0,r.call(this,e),r.__calling=!1)}}function b(t){return t?this._state[t]:this._state}function x(t,e){t._handlers=p(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function D(t,e,a){var n=e.bind(this);return a&&!1===a.init||n(this.get()[t],void 0),this.on(a&&a.defer?"update":"state",function(e){e.changed[t]&&n(e.current[t],e.previous&&e.previous[t])})}function w(t,e){if("teardown"===t)return this.on("destroy",e);var a=this._handlers[t]||(this._handlers[t]=[]);return a.push(e),{cancel:function(){var t=a.indexOf(e);~t&&a.splice(t,1)}}}function T(t){for(;t&&t.length;)t.shift()()}t=t&&t.hasOwnProperty("default")?t.default:t;var N={destroy:_,get:b,fire:y,observe:D,on:w,set:function(t){this._set(a({},t)),this.root._lock||(this.root._lock=!0,T(this.root._beforecreate),T(this.root._oncreate),T(this.root._aftercreate),this.root._lock=!1)},teardown:_,_recompute:e,_set:function(t){var e=this._state,n={},r=!1;for(var s in t)this._differs(t[s],e[s])&&(n[s]=r=!0);r&&(this._state=a(a({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:g};function k(t,e,a){return function(t,e,a,n,r){var s={method:e,body:n,mode:"cors",credentials:a};window.fetch(t,s).then(function(t){return 200!=t.status?new Error(t.statusText):t.text()}).then(function(t){try{return JSON.parse(t)}catch(e){return console.warn("malformed json input",t),t}}).then(r).catch(function(t){console.error(t)})}(t,"PUT","include",e,a)}var A,S=Date.now||function(){return(new Date).getTime()};function j(t,e){var a=arguments;if(void 0===e&&(e="core"),t=t.trim(),!dw.backend.__messages[e])return"MISSING:"+t;var n=dw.backend.__messages[e][t]||dw.backend.__messages.core[t]||t;if(arguments.length>2)for(var r=2;r<arguments.length;r++){var s=r-1;n=n.replace("$"+s,a[r])}return n}var C,P=dw.backend.currentChart,M=function(t,e,a){var n,r,s,i,o=0;a||(a={});var c=function(){o=!1===a.leading?0:S(),n=null,i=t.apply(r,s),n||(r=s=null)},u=function(){var u=S();o||!1!==a.leading||(o=u);var d=e-(u-o);return r=this,s=arguments,d<=0||d>e?(n&&(clearTimeout(n),n=null),o=u,i=t.apply(r,s),n||(r=s=null)):n||!1===a.trailing||(n=setTimeout(c,d)),i};return u.cancel=function(){clearTimeout(n),o=0,n=r=s=null},u}(function(){var t=A.get().chartData;k("/api/charts/"+P.get("id")+"/data",t)},1e3);function F(t){var e=t.changed,a=t.current,n=t.previous;e.chartData&&a.chartData&&n&&n.chartData!=a.chartData&&M()}function L(t){x(this,t),this._state=a({placeholder:j("upload / paste here")},t.data),this._handlers.update=[F];var e=this;t.root||(this._oncreate=[]),this._fragment=function(t,e){var a,i,o,u=!1;function h(){u=!0,t.set({chartData:o.value}),u=!1}return{c:function(){a=c("form"),i=c("div"),o=c("textarea"),this.h()},h:function(){var t,n;d(o,"input",h),o.readOnly=e.readonly,o.id="upload-data-text",t="resize",n="none",o.style.setProperty(t,n),o.placeholder=e.placeholder,o.className="svelte-h5ftni",i.className="control-group",a.className="upload-form"},m:function(t,s){r(a,t,s),n(i,a),n(o,i),o.value=e.chartData},p:function(t,e){u||(o.value=e.chartData),t.readonly&&(o.readOnly=e.readonly),t.placeholder&&(o.placeholder=e.placeholder)},u:function(){s(a)},d:function(){l(o,"input",h)}}}(this,this._state),this.root._oncreate.push(function(){(function(){A=this}).call(e),e.fire("update",{changed:{chartData:1,readonly:1,placeholder:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._oncreate))}function H(t){var e=t.changed,a=t.current;if(e.selectedDataset&&"--"!=a.selectedDataset){var n=a.selectedDataset;this.set({chartData:n.data}),n.presets&&Object.keys(n.presets).forEach(function(t){dw.backend.currentChart.set(t,n.presets[t])})}}function U(t,e){for(var n,i,u=e.group,d=(e.each_value,e.group_index,u.datasets),l=[],f=0;f<d.length;f+=1)l[f]=E(t,a(a({},e),{each_value_1:d,dataset:d[f],dataset_index:f}));return{c:function(){n=c("optgroup");for(var t=0;t<l.length;t+=1)l[t].c();this.h()},h:function(){h(n,"label",i=u.type)},m:function(t,e){r(n,t,e);for(var a=0;a<l.length;a+=1)l[a].m(n,null)},p:function(e,r){u=r.group,r.each_value,r.group_index;var s=u.datasets;if(e.datasetsArray){for(var o=0;o<s.length;o+=1){var c=a(a({},r),{each_value_1:s,dataset:s[o],dataset_index:o});l[o]?l[o].p(e,c):(l[o]=E(t,c),l[o].c(),l[o].m(n,null))}for(;o<l.length;o+=1)l[o].u(),l[o].d();l.length=s.length}e.datasetsArray&&i!==(i=u.type)&&h(n,"label",i)},u:function(){s(n);for(var t=0;t<l.length;t+=1)l[t].u()},d:function(){o(l)}}}function E(t,a){a.group,a.each_value,a.group_index;var i,o,d,l=a.dataset,h=(a.each_value_1,a.dataset_index,l.title);return{c:function(){i=c("option"),o=u(h),this.h()},h:function(){i.__value=d=l,i.value=i.__value,i.className="demo-dataset"},m:function(t,e){r(i,t,e),n(o,i)},p:function(t,e){e.group,e.each_value,e.group_index,l=e.dataset,e.each_value_1,e.dataset_index,t.datasetsArray&&h!==(h=l.title)&&(o.data=h),t.datasetsArray&&d!==(d=l)&&(i.__value=d),i.value=i.__value},u:function(){s(i)},d:e}}function R(t){x(this,t),this._state=a({selectedDataset:"--"},t.data),this._recompute({datasets:1},this._state),this._handlers.update=[H];var e=this;t.root||(this._oncreate=[],this._beforecreate=[]),this._fragment=function(t,e){for(var i,h,p,_,g,m,y,b,x,D,w=j("upload / quick help"),T=j("upload / try a dataset"),N=j("upload / sample dataset"),k=!1,A=e.datasetsArray,S=[],C=0;C<A.length;C+=1)S[C]=U(t,a(a({},e),{each_value:A,group:A[C],group_index:C}));function P(){k=!0,t.set({selectedDataset:v(b)}),k=!1}return{c:function(){i=c("p"),h=u(w),p=u("\n\n"),_=c("div"),g=c("p"),m=u(T),y=u("\n    "),b=c("select"),x=c("option"),D=u(N);for(var t=0;t<S.length;t+=1)S[t].c();this.h()},h:function(){x.__value="--",x.value=x.__value,d(b,"change",P),"selectedDataset"in e||t.root._beforecreate.push(P),b.disabled=e.readonly,b.id="demo-datasets",b.className="svelte-1jdst2k",_.className="demo-datasets"},m:function(t,a){r(i,t,a),n(h,i),r(p,t,a),r(_,t,a),n(g,_),n(m,g),n(y,_),n(b,_),n(x,b),n(D,x);for(var s=0;s<S.length;s+=1)S[s].m(b,null);f(b,e.selectedDataset)},p:function(e,n){var r=n.datasetsArray;if(e.datasetsArray){for(var s=0;s<r.length;s+=1){var i=a(a({},n),{each_value:r,group:r[s],group_index:s});S[s]?S[s].p(e,i):(S[s]=U(t,i),S[s].c(),S[s].m(b,null))}for(;s<S.length;s+=1)S[s].u(),S[s].d();S.length=r.length}k||f(b,n.selectedDataset),e.readonly&&(b.disabled=n.readonly)},u:function(){s(i),s(p),s(_);for(var t=0;t<S.length;t+=1)S[t].u()},d:function(){o(S),l(b,"change",P)}}}(this,this._state),this.root._oncreate.push(function(){e.fire("update",{changed:{datasets:1,readonly:1,selectedDataset:1,datasetsArray:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._beforecreate),T(this._oncreate))}function O(t){var e=this,a=t.changed,n=t.current;a.sheets&&n.sheets.length>1?setTimeout(function(){e.set({selected:n.sheets[0]})},300):a.sheets&&1==n.sheets.length&&k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",n.sheets[0].csv,function(){window.location.href="describe"}),a.selected&&this.set({chartData:n.selected.csv})}function q(t,a){var i,o,d,l=a.sheet,h=(a.each_value,a.sheet_index,l.name);return{c:function(){i=c("option"),o=u(h),this.h()},h:function(){i.__value=d=l,i.value=i.__value},m:function(t,e){r(i,t,e),n(o,i)},p:function(t,e){l=e.sheet,e.each_value,e.sheet_index,t.sheets&&h!==(h=l.name)&&(o.data=h),t.sheets&&d!==(d=l)&&(i.__value=d),i.value=i.__value},u:function(){s(i)},d:e}}function B(t,a){var n,i=j("upload / parsing-xls");return{c:function(){n=c("div"),this.h()},h:function(){n.className="alert alert-info"},m:function(t,e){r(n,t,e),n.innerHTML=i},p:e,u:function(){n.innerHTML="",s(n)},d:e}}function I(t,e){for(var i,h,p,_,g,m=j("upload / select sheet"),y=!1,b=e.sheets,x=[],D=0;D<b.length;D+=1)x[D]=q(0,a(a({},e),{each_value:b,sheet:b[D],sheet_index:D}));function w(){y=!0,t.set({selected:v(_)}),y=!1}return{c:function(){i=c("p"),h=u(m),p=u("\n    "),_=c("select");for(var t=0;t<x.length;t+=1)x[t].c();this.h()},h:function(){d(_,"change",w),"selected"in e||t.root._beforecreate.push(w),_.disabled=g=!e.sheets.length,_.className="svelte-1jdst2k"},m:function(t,a){r(i,t,a),n(h,i),r(p,t,a),r(_,t,a);for(var s=0;s<x.length;s+=1)x[s].m(_,null);f(_,e.selected)},p:function(t,e){var n=e.sheets;if(t.sheets){for(var r=0;r<n.length;r+=1){var s=a(a({},e),{each_value:n,sheet:n[r],sheet_index:r});x[r]?x[r].p(t,s):(x[r]=q(0,s),x[r].c(),x[r].m(_,null))}for(;r<x.length;r+=1)x[r].u(),x[r].d();x.length=n.length}y||f(_,e.selected),t.sheets&&g!==(g=!e.sheets.length)&&(_.disabled=g)},u:function(){s(i),s(p),s(_);for(var t=0;t<x.length;t+=1)x[t].u()},d:function(){o(x),l(_,"change",w)}}}function X(t,a){var n,i=j("upload / xls / uploading data");return{c:function(){n=c("p")},m:function(t,e){r(n,t,e),n.innerHTML=i},p:e,u:function(){n.innerHTML="",s(n)},d:e}}function $(t){x(this,t),this._state=a({selected:!1,sheets:[]},t.data),this._handlers.update=[O];var e=this;t.root||(this._oncreate=[],this._beforecreate=[]),this._fragment=function(t,e){var a;function n(t){return t.sheets.length?t.sheets.length>1?I:X:B}var i=n(e),o=i(t,e);return{c:function(){a=c("div"),o.c()},m:function(t,e){r(a,t,e),o.m(a,null)},p:function(e,r){i===(i=n(r))&&o?o.p(e,r):(o.u(),o.d(),(o=i(t,r)).c(),o.m(a,null))},u:function(){s(a),o.u()},d:function(){o.d()}}}(this,this._state),this.root._oncreate.push(function(){e.fire("update",{changed:{sheets:1,selected:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._beforecreate),T(this._oncreate))}function z(e,a){var n=new FileReader;n.onload=function(){try{for(var r=new Uint8Array(n.result),s="",i=0,o=0;o<r.length;++o)r[o]>122&&i++,s+=String.fromCharCode(r[o]);var c=t.detect(s);c.confidence<=.95&&i<10&&(c.encoding="utf-8"),(n=new FileReader).onload=function(){return a(null,n.result)},n.readAsText(e,c.encoding)}catch(t){console.warn(t),a(null,n.result)}},n.readAsArrayBuffer(e)}a(L.prototype,N),a(R.prototype,N),R.prototype._recompute=function(t,e){var a;t.datasets&&this._differs(e.datasetsArray,e.datasetsArray=(a=e.datasets,Object.keys(a).map(function(t){return a[t]})))&&(t.datasetsArray=!0)},a($.prototype,N);var G=[{id:"copy",title:j("upload / copy-paste"),longTitle:j("upload / copy-paste / long"),icon:"fa fa-clipboard",mainPanel:L,sidebar:R,action:function(){}},{id:"upload",title:j("upload / upload-csv"),longTitle:j("upload / upload-csv / long"),icon:"fa-file-excel-o fa",mainPanel:L,sidebar:R,isFileUpload:!0,onFileUpload:function(t){var e=t.target.files[0];"text/"==e.type.substr(0,5)||".csv"==e.name.substr(e.name.length-4)?(C.set({Sidebar:R}),z(e,function(t,e){k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",e,function(){window.location.href="describe"})})):"application/"==e.type.substr(0,12)?(C.set({Sidebar:$,sheets:[]}),function(t,e){var a="undefined"!=typeof FileReader&&(FileReader.prototype||{}).readAsBinaryString,n=new FileReader;n.onload=function(){try{var t=a?n.result:new Uint8Array(n.result),r=XLSX.read(t,{type:a?"binary":"array"});e(null,r.SheetNames.map(function(t){return{name:t,sheet:r.Sheets[t],csv:XLSX.utils.sheet_to_csv(r.Sheets[t])}}))}catch(t){console.error(t),e(null,n.result)}},n.readAsBinaryString(t)}(e,function(t,e){if(t)return C.set({error:t});C.set({sheets:e})})):(console.log(e.type),console.log(e),C.set({error:j("upload / csv-required")}))},action:function(){}}];var J={addButton:function(t){G.push(t),this.set({buttons:G});var e=this.get().defaultMethod;t.id==e&&this.btnAction(t)},btnAction:function(t){if(this.set({active:t}),"copy"==t.id){var e=this.store.get().dw_chart;e.get("externalData")&&(e.set("externalData",""),setTimeout(function(){dw.backend.currentChart.save()},1e3))}var a=t.id;"upload"==t.id&&(a="copy",setTimeout(function(){},1e3)),this.store.get().dw_chart.set("metadata.data.upload-method",a),t.action&&t.action(),t.mainPanel&&this.set({MainPanel:t.mainPanel}),t.sidebar&&this.set({Sidebar:t.sidebar})},btnUpload:function(t,e){t.onFileUpload&&t.onFileUpload(e)},dragStart:function(t){"copy"==this.get().active.id&&(t.preventDefault(),this.set({dragover:!0}))},resetDrag:function(){this.set({dragover:!1})},onFileDrop:function(t){if("copy"==this.get().active.id){this.resetDrag(),t.preventDefault();var e=[];if(t.dataTransfer.items){for(var a=0;a<t.dataTransfer.items.length;a++)"file"===t.dataTransfer.items[a].kind&&e.push(t.dataTransfer.items[a].getAsFile());t.dataTransfer.items.clear()}else{for(var n=0;n<t.dataTransfer.files.length;n++)e.push(t.dataTransfer.files[n]);t.dataTransfer.items.clear()}for(var r=0;r<e.length;r++)if("text/"==e[r].type.substr(0,5))return z(e[r],function(t,e){k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",e,function(){window.location.href="describe"})})}}};function K(t,a){var n,i=j("upload / drag-csv-here");return{c:function(){n=c("div"),this.h()},h:function(){n.className="draginfo svelte-oe6wy4"},m:function(t,e){r(n,t,e),n.innerHTML=i},u:function(){n.innerHTML="",s(n)},d:e}}function Q(t,e){var a,i,o,h,f,v,p,_,g,m=e.btn,y=(e.each_value,e.btn_index,m.title),b=m.isFileUpload&&V(t,e);return{c:function(){a=c("li"),i=c("label"),b&&b.c(),o=u("\n                            "),h=c("i"),v=u("\n                            "),p=c("span"),_=u(y),this.h()},h:function(){h.className=f=m.icon+" svelte-oe6wy4",p.className="svelte-oe6wy4",i.className="svelte-oe6wy4",d(a,"click",Z),a.className=g="action "+(e.active==m?"active":"")+" svelte-oe6wy4",a._svelte={component:t,each_value:e.each_value,btn_index:e.btn_index}},m:function(t,e){r(a,t,e),n(i,a),b&&b.m(i,null),n(o,i),n(h,i),n(v,i),n(p,i),n(_,p)},p:function(e,n){m=n.btn,n.each_value,n.btn_index,m.isFileUpload?b?b.p(e,n):((b=V(t,n)).c(),b.m(i,o)):b&&(b.u(),b.d(),b=null),e.buttons&&f!==(f=m.icon+" svelte-oe6wy4")&&(h.className=f),e.buttons&&y!==(y=m.title)&&(_.data=y),(e.active||e.buttons)&&g!==(g="action "+(n.active==m?"active":"")+" svelte-oe6wy4")&&(a.className=g),a._svelte.each_value=n.each_value,a._svelte.btn_index=n.btn_index},u:function(){s(a),b&&b.u()},d:function(){b&&b.d(),l(a,"click",Z)}}}function V(t,e){var a;e.btn,e.each_value,e.btn_index;return{c:function(){a=c("input"),this.h()},h:function(){d(a,"change",Y),a.accept=".csv, .tsv, .txt, .xlsx, .xls, .ods, .dbf",a.className="file-upload svelte-oe6wy4",h(a,"type","file"),a._svelte={component:t,each_value:e.each_value,btn_index:e.btn_index}},m:function(t,e){r(a,t,e)},p:function(t,e){e.btn,e.each_value,e.btn_index,a._svelte.each_value=e.each_value,a._svelte.btn_index=e.btn_index},u:function(){s(a)},d:function(){l(a,"change",Y)}}}function W(t,e){var a,o,h,f;function v(e){t.set({error:!1})}return{c:function(){a=c("div"),(o=c("div")).textContent="✕",h=u("\n                    "),f=c("noscript"),this.h()},h:function(){d(o,"click",v),o.className="action close",a.className="alert alert-error"},m:function(t,s){r(a,t,s),n(o,a),n(h,a),n(f,a),f.insertAdjacentHTML("afterend",e.error)},p:function(t,e){t.error&&(i(f),f.insertAdjacentHTML("afterend",e.error))},u:function(){i(f),s(a)},d:function(){l(o,"click",v)}}}function Y(t){var e=this._svelte.component,a=this._svelte.each_value[this._svelte.btn_index];e.btnUpload(a,t)}function Z(t){var e=this._svelte.component,a=this._svelte.each_value[this._svelte.btn_index];e.btnAction(a)}function tt(t){x(this,t),this._state=a({dragover:!1,MainPanel:L,Sidebar:R,active:G[0],buttons:G,sheets:[],chart:{id:""},readonly:!1,chartData:"",transpose:!1,firstRowIsHeader:!0,skipRows:0},t.data);var e=this;t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){for(var i,h,f,v,p,_,g,m,y,b,x,D,w,T,N,k,A,S,C,P,M,F,L=j("upload / title"),H=e.active.longTitle||e.active.title,U={},E={},R=j("Proceed"),O=e.dragover&&K(),q=e.buttons,B=[],I=0;I<q.length;I+=1)B[I]=Q(t,a(a({},e),{each_value:q,btn:q[I],btn_index:I}));var X=e.error&&W(t,e),$=e.Sidebar;function z(e){var a={};return"chartData"in e&&(a.chartData=e.chartData,U.chartData=!0),"readonly"in e&&(a.readonly=e.readonly,U.readonly=!0),"sheets"in e&&(a.sheets=e.sheets,U.sheets=!0),"datasets"in e&&(a.datasets=e.datasets,U.datasets=!0),{root:t.root,data:a,_bind:function(e,a){t.get();var n={};!U.chartData&&e.chartData&&(n.chartData=a.chartData),!U.readonly&&e.readonly&&(n.readonly=a.readonly),!U.sheets&&e.sheets&&(n.sheets=a.sheets),!U.datasets&&e.datasets&&(n.datasets=a.datasets),t._set(n),U={}}}}if($){var G=new $(z(e));t.root._beforecreate.push(function(){G._bind({chartData:1,readonly:1,sheets:1,datasets:1},G.get())})}var J=e.MainPanel;function V(e){var a={};return"chartData"in e&&(a.chartData=e.chartData,E.chartData=!0),"readonly"in e&&(a.readonly=e.readonly,E.readonly=!0),{root:t.root,data:a,_bind:function(e,a){t.get();var n={};!E.chartData&&e.chartData&&(n.chartData=a.chartData),!E.readonly&&e.readonly&&(n.readonly=a.readonly),t._set(n),E={}}}}if(J){var Y=new J(V(e));t.root._beforecreate.push(function(){Y._bind({chartData:1,readonly:1},Y.get())})}function Z(e){t.onFileDrop(e)}function tt(e){t.dragStart(e)}function et(e){t.dragStart(e)}function at(e){t.resetDrag()}function nt(e){t.resetDrag()}return{c:function(){i=c("div"),O&&O.c(),h=u("\n    "),f=c("div"),v=c("div"),p=c("div"),_=c("h3"),g=u("\n\n                "),m=c("ul");for(var t=0;t<B.length;t+=1)B[t].c();y=u("\n\n                "),X&&X.c(),b=u("\n\n                "),x=c("h4"),D=u(H),w=u("\n\n                "),G&&G._fragment.c(),T=u("\n        "),N=c("div"),Y&&Y._fragment.c(),k=u("\n\n            "),A=c("div"),S=c("a"),C=u(R),P=u(" "),M=c("i"),this.h()},h:function(){m.className="import-methods svelte-oe6wy4",p.className="sidebar",v.className="span5",M.className="icon-chevron-right icon-white",S.href="describe",S.className="submit btn btn-primary",S.id="describe-proceed",A.className="buttons pull-right",N.className="span7",f.className="row",f.style.cssText=F=e.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"",d(i,"drop",Z),d(i,"dragover",tt),d(i,"dragenter",et),d(i,"dragend",at),d(i,"dragleave",nt),i.className="chart-editor dw-create-upload upload-data"},m:function(t,e){r(i,t,e),O&&O.m(i,null),n(h,i),n(f,i),n(v,f),n(p,v),n(_,p),_.innerHTML=L,n(g,p),n(m,p);for(var a=0;a<B.length;a+=1)B[a].m(m,null);n(y,p),X&&X.m(p,null),n(b,p),n(x,p),n(D,x),n(w,p),G&&G._mount(p,null),n(T,f),n(N,f),Y&&Y._mount(N,null),n(k,N),n(A,N),n(S,A),n(C,S),n(P,S),n(M,S)},p:function(e,n){n.dragover?O||((O=K()).c(),O.m(i,h)):O&&(O.u(),O.d(),O=null);var r=n.buttons;if(e.buttons||e.active){for(var s=0;s<r.length;s+=1){var o=a(a({},n),{each_value:r,btn:r[s],btn_index:s});B[s]?B[s].p(e,o):(B[s]=Q(t,o),B[s].c(),B[s].m(m,null))}for(;s<B.length;s+=1)B[s].u(),B[s].d();B.length=r.length}if(n.error?X?X.p(e,n):((X=W(t,n)).c(),X.m(p,b)):X&&(X.u(),X.d(),X=null),e.active&&H!==(H=n.active.longTitle||n.active.title)&&(D.data=H),$!==($=n.Sidebar))G&&G.destroy(),$&&((G=new $(z(n)))._fragment.c(),G._mount(p,null));else{var c={};!U.chartData&&e.chartData&&(c.chartData=n.chartData,U.chartData=!0),!U.readonly&&e.readonly&&(c.readonly=n.readonly,U.readonly=!0),!U.sheets&&e.sheets&&(c.sheets=n.sheets,U.sheets=!0),!U.datasets&&e.datasets&&(c.datasets=n.datasets,U.datasets=!0),G._set(c),U={}}if(J!==(J=n.MainPanel))Y&&Y.destroy(),J&&((Y=new J(V(n)))._fragment.c(),Y._mount(N,k));else{var u={};!E.chartData&&e.chartData&&(u.chartData=n.chartData,E.chartData=!0),!E.readonly&&e.readonly&&(u.readonly=n.readonly,E.readonly=!0),Y._set(u),E={}}e.dragover&&F!==(F=n.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"")&&(f.style.cssText=F)},u:function(){_.innerHTML="",s(i),O&&O.u();for(var t=0;t<B.length;t+=1)B[t].u();X&&X.u()},d:function(){O&&O.d(),o(B),X&&X.d(),G&&G.destroy(!1),Y&&Y.destroy(!1),l(i,"drop",Z),l(i,"dragover",tt),l(i,"dragenter",et),l(i,"dragend",at),l(i,"dragleave",nt)}}}(this,this._state),this.root._oncreate.push(function(){(function(){var t=this;C=this;var e=this.store.get().dw_chart.get("metadata.data.upload-method","copy");this.set({defaultMethod:e}),G.forEach(function(a){a.id==e&&t.set({active:a})})}).call(e),e.fire("update",{changed:{dragover:1,buttons:1,active:1,error:1,Sidebar:1,chartData:1,readonly:1,sheets:1,datasets:1,MainPanel:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,T(this._beforecreate),T(this._oncreate),T(this._aftercreate),this._lock=!1)}function et(t,e){this._observers={pre:p(),post:p()},this._handlers={},this._dependents=[],this._computed=p(),this._sortedComputedProperties=[],this._state=a({},t),this._differs=e&&e.immutable?m:g}a(tt.prototype,N),a(tt.prototype,J),a(et.prototype,{_add:function(t,e){this._dependents.push({component:t,props:e})},_init:function(t){for(var e={},a=0;a<t.length;a+=1){var n=t[a];e["$"+n]=this._state[n]}return e},_remove:function(t){for(var e=this._dependents.length;e--;)if(this._dependents[e].component===t)return void this._dependents.splice(e,1)},_sortComputedProperties:function(){var t,e=this._computed,a=this._sortedComputedProperties=[],n=p();function r(s){if(t[s])throw new Error("Cyclical dependency detected");if(!n[s]){n[s]=!0;var i=e[s];i&&(t[s]=!0,i.deps.forEach(r),a.push(i))}}for(var s in this._computed)t=p(),r(s)},compute:function(t,e,a){var n,r=this,s={deps:e,update:function(s,i,o){var c=e.map(function(t){return t in i&&(o=!0),s[t]});if(o){var u=a.apply(null,c);r._differs(u,n)&&(n=u,i[t]=!0,s[t]=n)}}};s.update(this._state,{},!0),this._computed[t]=s,this._sortComputedProperties()},fire:y,get:b,observe:D,on:w,onchange:function(t){return console.warn("store.onchange is deprecated in favour of store.on('state', event => {...})"),this.on("state",function(e){t(e.current,e.changed)})},set:function(t){var e=this._state,n=this._changed={},r=!1;for(var s in t){if(this._computed[s])throw new Error("'"+s+"' is a read-only property");this._differs(t[s],e[s])&&(n[s]=r=!0)}if(r){this._state=a(a({},e),t);for(var i=0;i<this._sortedComputedProperties.length;i+=1)this._sortedComputedProperties[i].update(this._state,n);this.fire("state",{changed:n,current:this._state,previous:e});var o=this._dependents.slice();for(i=0;i<o.length;i+=1){var c=o[i],u={};r=!1;for(var d=0;d<c.props.length;d+=1){var l=c.props[d];l in n&&(u["$"+l]=this._state[l],r=!0)}r&&c.component.set(u)}this.fire("update",{changed:n,current:this._state,previous:e})}}});return{App:tt,store:new et({}),data:{chart:{id:""},readonly:!1,chartData:"",transpose:!1,firstRowIsHeader:!0,skipRows:0}}});
