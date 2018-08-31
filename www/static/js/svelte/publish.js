!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("svelte/publish",t):e.publish=t()}(this,function(){"use strict";function e(){}function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e,t){t.appendChild(e)}function s(e,t,n){t.insertBefore(e,n)}function i(e){e.parentNode.removeChild(e)}function r(e){for(;e.nextSibling;)e.parentNode.removeChild(e.nextSibling)}function a(e){for(var t=0;t<e.length;t+=1)e[t]&&e[t].d()}function u(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function o(e,t,n){e.addEventListener(t,n,!1)}function c(e,t,n){e.removeEventListener(t,n,!1)}function h(e,t,n){e.setAttribute(t,n)}function p(e,t,n){e.style.setProperty(t,n)}function d(){return Object.create(null)}function f(t){this.destroy=e,this.fire("destroy"),this.set=this.get=e,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function _(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function b(e,t){return e!=e?t==t:e!==t}function m(e,t){var n=e in this._handlers&&this._handlers[e].slice();if(n)for(var s=0;s<n.length;s+=1){var i=n[s];i.__calling||(i.__calling=!0,i.call(this,t),i.__calling=!1)}}function v(e){return e?this._state[e]:this._state}function g(e,t,n){var s=t.bind(this);return n&&!1===n.init||s(this.get()[e],void 0),this.on(n&&n.defer?"update":"state",function(t){t.changed[e]&&s(t.current[e],t.previous&&t.previous[e])})}function w(e,t){if("teardown"===e)return this.on("destroy",t);var n=this._handlers[e]||(this._handlers[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}}function y(e){for(;e&&e.length;)e.shift()()}var N={destroy:f,get:v,fire:m,observe:g,on:w,set:function(e){this._set(t({},e)),this.root._lock||(this.root._lock=!0,y(this.root._beforecreate),y(this.root._oncreate),y(this.root._aftercreate),this.root._lock=!1)},teardown:f,_recompute:e,_set:function(e){var n=this._state,s={},i=!1;for(var r in e)this._differs(e[r],n[r])&&(s[r]=i=!0);i&&(this._state=t(t({},n),e),this._recompute(s,this._state),this._bind&&this._bind(s,this._state),this._fragment&&(this.fire("state",{changed:s,current:this._state,previous:n}),this._fragment.p(s,this._state),this.fire("update",{changed:s,current:this._state,previous:n})))},_mount:function(e,t){this._fragment[this._fragment.i?"i":"m"](e,t||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:_};function x(e,t){return void 0===t&&(t="core"),dw.backend.__messages[t][e]||dw.backend.__messages.core[e]||e}function T(e,t,n,s,i){var r={method:t,body:s,mode:"cors",credentials:n};window.fetch(e,r).then(function(e){if(200!=e.status)return new Error(e.statusText);try{return e.json()}catch(t){return e.text()}}).then(i).catch(function(e){console.error(e)})}var L=[100,200,300,400,500,700,800,900,1e3];var M=0,H=!0;var k={publish:function(){var e=this;if(window.chart.save){var t,n,s,i,r,a=e.get().chart;e.set({publishing:!0,progress:0,publish_error:!1}),a.metadata.publish["embed-heights"]=(e.get("embed_templates"),t={},n=window.$,s=n(n("#iframe-vis")[0].contentDocument),i=n("h1",s).height()+n(".chart-intro",s).height()+n(".dw-chart-notes",s).height(),r=n("#iframe-vis").height(),L.forEach(function(e){s.find("h1,.chart-intro,.dw-chart-notes").css("width",e+"px");var a=n("h1",s).height()+n(".chart-intro",s).height()+n(".dw-chart-notes",s).height();t[e]=r+(a-i)}),s.find("h1,.chart-intro,.dw-chart-notes").css("width","auto"),t),e.set({chart:a}),window.chart.attributes(a).save().then(function(t){T("/api/charts/"+a.id+"/publish","POST","include",null,function(t){"ok"==t.status?e.publishFinished(t.data):e.set({publish_error:t.message})}),M=0,e.updateStatus()})}else setTimeout(function(){e.publish()},100)},updateProgressBar:function(e){this.refs.bar&&(this.refs.bar.style.width=(100*e).toFixed()+"%")},updateStatus:function(){var e=this,t=e.get().chart;M+=.05,function(e,t,n){2==arguments.length&&(n=t,t="include"),T(e,"GET",t,null,n)}("/api/charts/"+t.id+"/publish/status",function(t){t&&(t=+t/100+M,e.set({progress:Math.min(1,t)})),e.get().publishing&&setTimeout(function(){e.updateStatus()},400)})},publishFinished:function(e){var t=this;this.set({progress:1,published:!0,needs_republish:!1}),setTimeout(function(){return t.set({publishing:!1})},500),this.set({chart:e}),window.chart.attributes(e)},copy:function(e){var t=this;console.log("COPY",e),t.refs.embedInput.select();try{document.execCommand("copy")&&(t.set({copy_success:!0}),setTimeout(function(){return t.set({copy_success:!1})},300))}catch(e){}}};function C(e){var t=e.changed,n=e.current,s=window.dw&&window.dw.backend&&window.dw.backend.setUserData;if(t.publishing&&n.publishing&&this.updateProgressBar(n.progress),t.progress&&this.updateProgressBar(n.progress),t.embed_type&&s){var i=window.dw.backend.__userData;if(!n.embed_type||!i)return;i.embed_type=n.embed_type,window.dw.backend.setUserData(i)}if(t.shareurl_type&&s){var r=window.dw.backend.__userData;if(!n.shareurl_type||!r)return;r.shareurl_type=n.shareurl_type,window.dw.backend.setUserData(r)}t.published&&window.document.querySelector(".dw-create-publish .publish-step").classList[n.published?"add":"remove"]("is-published"),t.auto_publish&&n.auto_publish&&H&&(this.publish(),H=!1,window.history.replaceState("","",location.pathname))}function U(t,n){var r,a=x("publish / republish-intro");return{c:function(){r=u("p")},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function j(t,n){var r,a=x("publish / publish-intro");return{c:function(){r=u("p"),this.h()},h:function(){p(r,"margin-bottom","20px")},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function P(t,r){var a,o,c,h,p,d,f=x("publish / republish-btn");return{c:function(){a=u("span"),o=u("i"),h=l(" "),p=u("span"),d=l(f),this.h()},h:function(){o.className=c="fa fa-fw fa-refresh "+(r.publishing?"fa-spin":"")+" svelte-178xnhw",p.className="title svelte-178xnhw",a.className="re-publish"},m:function(e,t){s(a,e,t),n(o,a),n(h,a),n(p,a),n(d,p)},p:function(e,t){e.publishing&&c!==(c="fa fa-fw fa-refresh "+(t.publishing?"fa-spin":"")+" svelte-178xnhw")&&(o.className=c)},u:function(){i(a)},d:e}}function G(t,r){var a,o,c,h,p,d,f=x("publish / publish-btn");return{c:function(){a=u("span"),o=u("i"),h=l(" "),p=u("span"),d=l(f),this.h()},h:function(){o.className=c="fa fa-fw "+(r.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-178xnhw",p.className="title svelte-178xnhw",a.className="publish"},m:function(e,t){s(a,e,t),n(o,a),n(h,a),n(p,a),n(d,p)},p:function(e,t){e.publishing&&c!==(c="fa fa-fw "+(t.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-178xnhw")&&(o.className=c)},u:function(){i(a)},d:e}}function A(t,r){var a,o,c,h,p=x("publish / publish-btn-intro");return{c:function(){a=u("div"),(o=u("div")).innerHTML='<i class="fa fa-chevron-left"></i>',c=l("\n    "),h=u("div"),this.h()},h:function(){o.className="arrow svelte-178xnhw",h.className="text svelte-178xnhw",a.className="publish-intro svelte-178xnhw"},m:function(e,t){s(a,e,t),n(o,a),n(c,a),n(h,a),h.innerHTML=p},u:function(){h.innerHTML="",i(a)},d:e}}function E(t,n){var r,a=x("publish / republish-alert");return{c:function(){r=u("div"),this.h()},h:function(){r.className="btn-aside alert svelte-178xnhw"},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function S(t,n){var r,a=x("publish / publish-success");return{c:function(){r=u("div"),this.h()},h:function(){r.className="alert alert-success"},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function O(t,n){var r;return{c:function(){r=u("div"),this.h()},h:function(){r.className="alert alert-error"},m:function(e,t){s(r,e,t),r.innerHTML=n.publish_error},p:function(e,t){e.publish_error&&(r.innerHTML=t.publish_error)},u:function(){r.innerHTML="",i(r)},d:e}}function D(e,t){var r,a,o,c,h,p,d,f=x("publish / progress / please-wait");return{c:function(){r=u("div"),a=l(f),o=l("\n    "),c=u("div"),h=u("div"),this.h()},h:function(){h.className=p="bar "+(t.progress<1?"":"bar-success")+" svelte-178xnhw",c.className="progress progress-striped active svelte-178xnhw",r.className=d="alert "+(t.progress<1?"alert-info":"alert-success")+" publishing svelte-178xnhw"},m:function(t,i){s(r,t,i),n(a,r),n(o,r),n(c,r),n(h,c),e.refs.bar=h},p:function(e,t){e.progress&&p!==(p="bar "+(t.progress<1?"":"bar-success")+" svelte-178xnhw")&&(h.className=p),e.progress&&d!==(d="alert "+(t.progress<1?"alert-info":"alert-success")+" publishing svelte-178xnhw")&&(r.className=d)},u:function(){i(r)},d:function(){e.refs.bar===h&&(e.refs.bar=null)}}}function B(e,t){var a,p,d,f,_,b=t.tpl,m=(t.each_value,t.tpl_index,b.name);function v(){e.set({shareurl_type:p.__value})}return{c:function(){a=u("label"),p=u("input"),f=l(" "),_=u("noscript"),this.h()},h:function(){e._bindingGroups[0].push(p),o(p,"change",v),p.__value=d=b.id,p.value=p.__value,h(p,"type","radio"),p.name="url-type",p.className="svelte-178xnhw",a.className="radio"},m:function(e,i){s(a,e,i),n(p,a),p.checked=p.__value===t.shareurl_type,n(f,a),n(_,a),_.insertAdjacentHTML("afterend",m)},p:function(e,t){b=t.tpl,t.each_value,t.tpl_index,p.checked=p.__value===t.shareurl_type,e.plugin_shareurls&&d!==(d=b.id)&&(p.__value=d),p.value=p.__value,e.plugin_shareurls&&m!==(m=b.name)&&(r(_),_.insertAdjacentHTML("afterend",m))},u:function(){r(_),i(a)},d:function(){e._bindingGroups[0].splice(e._bindingGroups[0].indexOf(p),1),c(p,"change",v)}}}function I(e,t){var a,p,d,f,_,b=t.tpl,m=(t.each_value_1,t.tpl_index_1,b.title);function v(){e.set({embed_type:p.__value})}return{c:function(){a=u("label"),p=u("input"),f=l(" "),_=u("noscript"),this.h()},h:function(){e._bindingGroups[1].push(p),o(p,"change",v),h(p,"type","radio"),p.__value=d=b.id,p.value=p.__value,p.className="svelte-178xnhw",a.className="radio"},m:function(e,i){s(a,e,i),n(p,a),p.checked=p.__value===t.embed_type,n(f,a),n(_,a),_.insertAdjacentHTML("afterend",m)},p:function(e,t){b=t.tpl,t.each_value_1,t.tpl_index_1,p.checked=p.__value===t.embed_type,e.embed_templates&&d!==(d=b.id)&&(p.__value=d),p.value=p.__value,e.embed_templates&&m!==(m=b.title)&&(r(_),_.insertAdjacentHTML("afterend",m))},u:function(){r(_),i(a)},d:function(){e._bindingGroups[1].splice(e._bindingGroups[1].indexOf(p),1),c(p,"change",v)}}}function F(t,a){var o,c,h,p,d,f,_=a.tpl,b=(a.each_value_2,a.tpl_index_2,_.title),m=_.text;return{c:function(){o=u("div"),c=u("b"),h=l(b),p=l(":"),d=l(" "),f=u("noscript")},m:function(e,t){s(o,e,t),n(c,o),n(h,c),n(p,c),n(d,o),n(f,o),f.insertAdjacentHTML("afterend",m)},p:function(e,t){_=t.tpl,t.each_value_2,t.tpl_index_2,e.embed_templates&&b!==(b=_.title)&&(h.data=b),e.embed_templates&&m!==(m=_.text)&&(r(f),f.insertAdjacentHTML("afterend",m))},u:function(){r(f),i(o)},d:e}}function $(e){!function(e,t){e._handlers=d(),e._bind=t._bind,e.options=t,e.root=t.root||e,e.store=e.root.store||t.store}(this,e),this.refs={},this._state=t({chart:{id:""},embed_templates:[],plugin_shareurls:[],published:!1,publishing:!1,needs_republish:!1,publish_error:!1,auto_publish:!1,progress:0,shareurl_type:"default",embed_type:"responsive",copy_success:!1},e.data),this._recompute({shareurl_type:1,chart:1,plugin_shareurls:1,published:1,embed_type:1},this._state),this._bindingGroups=[[],[]],this._handlers.state=[C];var f=this;e.root||(this._oncreate=[]),this._fragment=function(e,d){var f,_,b,m,v,g,w,y,N,T,L,M,H,k,C,$,q,Y,z,J,K,Q,R,V,W,X,Z,ee,te,ne,se,ie,re,ae,ue,le,oe,ce,he,pe,de,fe,_e,be,me,ve,ge,we,ye,Ne,xe,Te,Le,Me,He,ke,Ce,Ue,je,Pe,Ge,Ae,Ee,Se=x("publish / share-embed"),Oe=x("publish / share-url"),De=x("publish / share-url / fullscreen"),Be=x("publish / help / share-url"),Ie=x("publish / embed"),Fe=x("publish / copy"),$e=x("publish / copy-success"),qe=x("publish / embed / help");function Ye(e){return e.published?U:j}var ze=Ye(d),Je=ze(e,d);function Ke(e){return e.published?P:G}var Qe=Ke(d),Re=Qe(e,d);function Ve(t){e.publish()}var We=!d.published&&A(),Xe=d.needs_republish&&!d.publishing&&E(),Ze=d.published&&!d.needs_republish&&1==d.progress&&!d.publishing&&S(),et=d.publish_error&&O(0,d),tt=d.publishing&&D(e,d);function nt(){e.set({shareurl_type:Q.__value})}for(var st=d.plugin_shareurls,it=[],rt=0;rt<st.length;rt+=1)it[rt]=B(e,t(t({},d),{each_value:st,tpl:st[rt],tpl_index:rt}));var at=d.embed_templates,ut=[];for(rt=0;rt<at.length;rt+=1)ut[rt]=I(e,t(t({},d),{each_value_1:at,tpl:at[rt],tpl_index_1:rt}));function lt(t){var n=e.get();e.copy(n.embedCode)}var ot=d.embed_templates.slice(2),ct=[];for(rt=0;rt<ot.length;rt+=1)ct[rt]=F(0,t(t({},d),{each_value_2:ot,tpl:ot[rt],tpl_index_2:rt}));return{c:function(){Je.c(),f=l("\n\n"),_=u("button"),Re.c(),m=l("\n\n\n"),We&&We.c(),v=l("\n\n\n"),Xe&&Xe.c(),g=l("\n"),Ze&&Ze.c(),w=l("\n\n"),et&&et.c(),y=l("\n\n"),tt&&tt.c(),N=l("\n\n"),T=u("div"),L=u("h2"),M=l("\n    "),H=u("div"),k=u("i"),C=l("\n        "),$=u("div"),q=u("div"),Y=u("b"),z=l("\n                "),J=u("div"),K=u("label"),Q=u("input"),R=l(" "),V=u("noscript"),W=l("\n                    ");for(var e=0;e<it.length;e+=1)it[e].c();for(X=l("\n            "),Z=u("div"),ee=u("a"),te=l(d.shareUrl),ne=l("\n        "),se=u("div"),(ie=u("span")).textContent="?",re=l("\n            "),ae=u("div"),ue=l("\n\n    "),le=u("div"),oe=u("i"),ce=l("\n        "),he=u("div"),pe=u("div"),de=u("b"),fe=l("\n                "),_e=u("div"),e=0;e<ut.length;e+=1)ut[e].c();for(be=l("\n            "),me=u("div"),ve=u("input"),ge=l(" "),we=u("button"),ye=u("i"),Ne=l(" "),xe=l(Fe),Te=l("\n                "),Le=u("div"),Me=l($e),ke=l("\n        "),Ce=u("div"),(Ue=u("span")).textContent="?",je=l("\n            "),Pe=u("div"),Ge=u("noscript"),Ae=l("\n                "),e=0;e<ct.length;e+=1)ct[e].c();this.h()},h:function(){o(_,"click",Ve),_.disabled=d.publishing,_.className=b="btn-publish btn btn-primary btn-large "+(d.published?"":"btn-first-publish")+" svelte-178xnhw",k.className="icon fa fa-link fa-fw",e._bindingGroups[0].push(Q),o(Q,"change",nt),Q.__value="default",Q.value=Q.__value,h(Q,"type","radio"),Q.name="url-type",Q.className="svelte-178xnhw",K.className="radio",J.className="embed-options svelte-178xnhw",q.className="h",ee.target="_blank",ee.className="share-url svelte-178xnhw",ee.href=d.shareUrl,Z.className="inpt",$.className="ctrls",ae.className="content",se.className="help",H.className="block",oe.className="icon fa fa-code fa-fw",_e.className="embed-options svelte-178xnhw",pe.className="h",h(ve,"type","text"),ve.className="input embed-code",ve.readOnly=!0,ve.value=d.embedCode,ye.className="fa fa-copy",o(we,"click",lt),we.className="btn btn-copy",we.title="copy",Le.className=He="copy-success "+(d.copy_success?"show":"")+" svelte-178xnhw",me.className="inpt",he.className="ctrls",Pe.className="content",Ce.className="help",le.className="block",p(T,"margin-top","20px"),T.className=Ee=d.published?"":"inactive"},m:function(t,i){Je.m(t,i),s(f,t,i),s(_,t,i),Re.m(_,null),s(m,t,i),We&&We.m(t,i),s(v,t,i),Xe&&Xe.m(t,i),s(g,t,i),Ze&&Ze.m(t,i),s(w,t,i),et&&et.m(t,i),s(y,t,i),tt&&tt.m(t,i),s(N,t,i),s(T,t,i),n(L,T),L.innerHTML=Se,n(M,T),n(H,T),n(k,H),n(C,H),n($,H),n(q,$),n(Y,q),Y.innerHTML=Oe,n(z,q),n(J,q),n(K,J),n(Q,K),Q.checked=Q.__value===d.shareurl_type,n(R,K),n(V,K),V.insertAdjacentHTML("afterend",De),n(W,J);for(var r=0;r<it.length;r+=1)it[r].m(J,null);for(n(X,$),n(Z,$),n(ee,Z),n(te,ee),n(ne,H),n(se,H),n(ie,se),n(re,se),n(ae,se),ae.innerHTML=Be,n(ue,T),n(le,T),n(oe,le),n(ce,le),n(he,le),n(pe,he),n(de,pe),de.innerHTML=Ie,n(fe,pe),n(_e,pe),r=0;r<ut.length;r+=1)ut[r].m(_e,null);for(n(be,he),n(me,he),n(ve,me),e.refs.embedInput=ve,n(ge,me),n(we,me),n(ye,we),n(Ne,we),n(xe,we),n(Te,me),n(Le,me),n(Me,Le),n(ke,le),n(Ce,le),n(Ue,Ce),n(je,Ce),n(Pe,Ce),n(Ge,Pe),Ge.insertAdjacentHTML("beforebegin",qe),n(Ae,Pe),r=0;r<ct.length;r+=1)ct[r].m(Pe,null)},p:function(n,s){ze!==(ze=Ye(s))&&(Je.u(),Je.d(),(Je=ze(e,s)).c(),Je.m(f.parentNode,f)),Qe===(Qe=Ke(s))&&Re?Re.p(n,s):(Re.u(),Re.d(),(Re=Qe(e,s)).c(),Re.m(_,null)),n.publishing&&(_.disabled=s.publishing),n.published&&b!==(b="btn-publish btn btn-primary btn-large "+(s.published?"":"btn-first-publish")+" svelte-178xnhw")&&(_.className=b),s.published?We&&(We.u(),We.d(),We=null):We||((We=A()).c(),We.m(v.parentNode,v)),s.needs_republish&&!s.publishing?Xe||((Xe=E()).c(),Xe.m(g.parentNode,g)):Xe&&(Xe.u(),Xe.d(),Xe=null),!s.published||s.needs_republish||1!=s.progress||s.publishing?Ze&&(Ze.u(),Ze.d(),Ze=null):Ze||((Ze=S()).c(),Ze.m(w.parentNode,w)),s.publish_error?et?et.p(n,s):((et=O(0,s)).c(),et.m(y.parentNode,y)):et&&(et.u(),et.d(),et=null),s.publishing?tt?tt.p(n,s):((tt=D(e,s)).c(),tt.m(N.parentNode,N)):tt&&(tt.u(),tt.d(),tt=null),Q.checked=Q.__value===s.shareurl_type;var i=s.plugin_shareurls;if(n.shareurl_type||n.plugin_shareurls){for(var r=0;r<i.length;r+=1){var a=t(t({},s),{each_value:i,tpl:i[r],tpl_index:r});it[r]?it[r].p(n,a):(it[r]=B(e,a),it[r].c(),it[r].m(J,null))}for(;r<it.length;r+=1)it[r].u(),it[r].d();it.length=i.length}n.shareUrl&&(te.data=s.shareUrl,ee.href=s.shareUrl);var u=s.embed_templates;if(n.embed_type||n.embed_templates){for(r=0;r<u.length;r+=1){var l=t(t({},s),{each_value_1:u,tpl:u[r],tpl_index_1:r});ut[r]?ut[r].p(n,l):(ut[r]=I(e,l),ut[r].c(),ut[r].m(_e,null))}for(;r<ut.length;r+=1)ut[r].u(),ut[r].d();ut.length=u.length}n.embedCode&&(ve.value=s.embedCode),n.copy_success&&He!==(He="copy-success "+(s.copy_success?"show":"")+" svelte-178xnhw")&&(Le.className=He);var o=s.embed_templates.slice(2);if(n.embed_templates){for(r=0;r<o.length;r+=1){var c=t(t({},s),{each_value_2:o,tpl:o[r],tpl_index_2:r});ct[r]?ct[r].p(n,c):(ct[r]=F(0,c),ct[r].c(),ct[r].m(Pe,null))}for(;r<ct.length;r+=1)ct[r].u(),ct[r].d();ct.length=o.length}n.published&&Ee!==(Ee=s.published?"":"inactive")&&(T.className=Ee)},u:function(){L.innerHTML="",Y.innerHTML="",r(V),ae.innerHTML="",de.innerHTML="",function(e){for(;e.previousSibling;)e.parentNode.removeChild(e.previousSibling)}(Ge),Je.u(),i(f),i(_),Re.u(),i(m),We&&We.u(),i(v),Xe&&Xe.u(),i(g),Ze&&Ze.u(),i(w),et&&et.u(),i(y),tt&&tt.u(),i(N),i(T);for(var e=0;e<it.length;e+=1)it[e].u();for(e=0;e<ut.length;e+=1)ut[e].u();for(e=0;e<ct.length;e+=1)ct[e].u()},d:function(){Je.d(),Re.d(),c(_,"click",Ve),We&&We.d(),Xe&&Xe.d(),Ze&&Ze.d(),et&&et.d(),tt&&tt.d(),e._bindingGroups[0].splice(e._bindingGroups[0].indexOf(Q),1),c(Q,"change",nt),a(it),a(ut),e.refs.embedInput===ve&&(e.refs.embedInput=null),c(we,"click",lt),a(ct)}}}(this,this._state),this.root._oncreate.push(function(){var e={shareurl_type:1,chart:1,plugin_shareurls:1,published:1,embed_type:1,publishing:1,needs_republish:1,progress:1,publish_error:1,shareUrl:1,embed_templates:1,embedCode:1,copy_success:1};C.call(f,{changed:e,current:f._state}),f.fire("update",{changed:e,current:f._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),y(this._oncreate))}function q(e,n){this._observers={pre:d(),post:d()},this._handlers={},this._dependents=[],this._computed=d(),this._sortedComputedProperties=[],this._state=t({},e),this._differs=n&&n.immutable?b:_}t($.prototype,N),t($.prototype,k),$.prototype._recompute=function(e,t){var n,s,i;(e.shareurl_type||e.chart||e.plugin_shareurls||e.published)&&this._differs(t.shareUrl,t.shareUrl=function(e){var t=e.shareurl_type,n=e.chart,s=e.plugin_shareurls;if(!e.published)return"https://www.datawrapper.de/...";if("default"==t)return n.publicUrl;var i="";return s.forEach(function(e){e.id==t&&(i=e.url.replace(/%chart_id%/g,n.id))}),i}(t))&&(e.shareUrl=!0),(e.embed_type||e.chart)&&this._differs(t.embedCode,t.embedCode=(s=(n=t).embed_type,(i=n.chart).metadata?i.metadata.publish&&!i.metadata.publish["embed-codes"]?'<iframe src="'+i.publicUrl+'" width="100%" height="'+i.metadata.publish["embed-height"]+'" scrolling="no" frameborder="0" allowtransparency="true"></iframe>':i.metadata.publish["embed-codes"]["embed-method-"+s]:""))&&(e.embedCode=!0)},t(q.prototype,{_add:function(e,t){this._dependents.push({component:e,props:t})},_init:function(e){for(var t={},n=0;n<e.length;n+=1){var s=e[n];t["$"+s]=this._state[s]}return t},_remove:function(e){for(var t=this._dependents.length;t--;)if(this._dependents[t].component===e)return void this._dependents.splice(t,1)},_sortComputedProperties:function(){var e,t=this._computed,n=this._sortedComputedProperties=[],s=d();function i(r){if(e[r])throw new Error("Cyclical dependency detected");if(!s[r]){s[r]=!0;var a=t[r];a&&(e[r]=!0,a.deps.forEach(i),n.push(a))}}for(var r in this._computed)e=d(),i(r)},compute:function(e,t,n){var s,i=this,r={deps:t,update:function(r,a,u){var l=t.map(function(e){return e in a&&(u=!0),r[e]});if(u){var o=n.apply(null,l);i._differs(o,s)&&(s=o,a[e]=!0,r[e]=s)}}};r.update(this._state,{},!0),this._computed[e]=r,this._sortComputedProperties()},fire:m,get:v,observe:g,on:w,onchange:function(e){return console.warn("store.onchange is deprecated in favour of store.on('state', event => {...})"),this.on("state",function(t){e(t.current,t.changed)})},set:function(e){var n=this._state,s=this._changed={},i=!1;for(var r in e){if(this._computed[r])throw new Error("'"+r+"' is a read-only property");this._differs(e[r],n[r])&&(s[r]=i=!0)}if(i){this._state=t(t({},n),e);for(var a=0;a<this._sortedComputedProperties.length;a+=1)this._sortedComputedProperties[a].update(this._state,s);this.fire("state",{changed:s,current:this._state,previous:n});var u=this._dependents.slice();for(a=0;a<u.length;a+=1){var l=u[a],o={};i=!1;for(var c=0;c<l.props.length;c+=1){var h=l.props[c];h in s&&(o["$"+h]=this._state[h],i=!0)}i&&l.component.set(o)}this.fire("update",{changed:s,current:this._state,previous:n})}}});return{App:$,store:new q({}),data:{chart:{id:""},embed_templates:[],plugin_shareurls:[],published:!1,publishing:!1,needs_republish:!1,publish_error:!1,auto_publish:!1,progress:0,shareurl_type:"default",embed_type:"responsive",copy_success:!1}}});
