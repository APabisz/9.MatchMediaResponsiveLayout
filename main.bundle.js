(()=>{"use strict";var e,r,n,t,o,i,a,c={159:(e,r,n)=>{n(740);const t=[{name:"Ananas",calories:33,fat:0,carbs:11.8},{name:"Apple",calories:57,fat:.7,carbs:12.1},{name:"Cherry",calories:67,fat:.4,carbs:14.6},{name:"Orange",calories:51,fat:.2,carbs:11.3}],o=document.querySelector(".app__values"),i=window.matchMedia("screen and (min-width: 500px)"),a=e=>{e?d():c()},c=()=>{o.innerHTML="";const e=document.createElement("ul");t.forEach((r=>{const n=document.createElement("li"),t=document.createElement("div");t.innerHTML=`<strong>Name: </strong>${r.name}`;const o=document.createElement("div");o.innerHTML=`<strong>Calories: </strong>${r.calories}kcal`;const i=document.createElement("div");i.innerHTML=`<strong>Fat: </strong>${r.fat}g`;const a=document.createElement("div");a.innerHTML=`<strong>Carbohydrates: </strong>${r.carbs}g`,n.appendChild(t),n.appendChild(o),n.appendChild(i),n.appendChild(a),e.appendChild(n)})),o.appendChild(e)},d=()=>{o.innerHTML="";const e=document.createElement("table"),r=document.createElement("thead");r.innerHTML="<tr><th>Name</th><th>Calories [kcal]</th><th>Fat [g]</th><th>Carbohydrates [g]</th></tr>";const n=document.createElement("tbody");t.forEach((e=>{const r=document.createElement("tr");r.innerHTML=`<td>${e.name}</td><td>${e.calories}</td><td>${e.fat}</td><td>${e.carbs}</td>`,n.appendChild(r)})),e.appendChild(r),e.appendChild(n),o.appendChild(e)};a(i.matches),i.addEventListener("change",(e=>{a(e.matches)}))},783:(e,r,n)=>{var t=n(618),o=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function c(){}function d(e,r){if(!r){if(!e.href)return;r=e.href.split("?")[0]}if(s(r)&&!1!==e.isLoaded&&r&&r.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(r,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function l(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&d(e)}))}function s(e){return!!/^https?:/i.test(e)}e.exports=function(e,r){if(i)return console.log("no window.document found, will not HMR CSS"),c;var n,u,p=function(e){var r=o[e];if(!r){if(document.currentScript)r=document.currentScript.src;else{var n=document.getElementsByTagName("script"),i=n[n.length-1];i&&(r=i.src)}o[e]=r}return function(e){if(!r)return null;var n=r.split(/([^\\/]+)\.js$/),o=n&&n[1];return o&&e?e.split(",").map((function(e){var n=new RegExp("".concat(o,"\\.js$"),"g");return t(r.replace(n,"".concat(e.replace(/{fileName}/g,o),".css")))})):[r.replace(".js",".css")]}}(e);return n=function(){var e=p(r.filename),n=function(e){if(!e)return!1;var r=document.querySelectorAll("link"),n=!1;return a.call(r,(function(r){if(r.href){var o=function(e,r){var n;return e=t(e,{stripWWW:!1}),r.some((function(t){e.indexOf(r)>-1&&(n=t)})),n}(r.href,e);s(o)&&!0!==r.visited&&o&&(d(r,o),n=!0)}})),n}(e);if(r.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void l();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),l())},50,u=0,function(){var e=this,r=arguments,t=function(){return n.apply(e,r)};clearTimeout(u),u=setTimeout(t,50)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var r=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(r,"i"),"").split("/"),t=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",r+t+n.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}},740:(e,r,n)=>{var t=n(783)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)}},d={};function l(e){var r=d[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=d[e]={id:e,exports:{}};try{var t={id:e,module:n,factory:c[e],require:l};l.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}l.m=c,l.c=d,l.i=[],l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"main."+l.h()+".hot-update.json",l.h=()=>"bdd140dffdd0d38dd753",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="wp-minimalist-boilerplate:",l.l=(n,t,o,i)=>{if(e[n])e[n].push(t);else{var a,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==r+o){a=u;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",r+o),a.src=n),e[n]=[t];var p=(r,t)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}},(()=>{var e,r,n,t,o={},i=l.c,a=[],c=[],d="idle";function s(e){d=e;for(var r=0;r<c.length;r++)c[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return s("check"),l.hmrM().then((function(t){if(!t)return s(m()?"ready":"idle"),null;s("prepare");var o=[];return r=[],n=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,r){return l.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),o)}))}))}))}function f(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var a=function(e){o||(o=e)},c=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)c.push(r[n])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return c.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(s("idle"),Promise.resolve(c))}function m(){if(t)return n||(n=[]),Object.keys(l.hmrI).forEach((function(e){t.forEach((function(r){l.hmrI[e](r,n)}))})),t=void 0,!0}l.hmrD=o,l.i.push((function(h){var m,v,g,y,E=h.module,b=function(n,t){var o=i[t];if(!o)return n;var c=function(r){if(o.hot.active){if(i[r]){var c=i[r].parents;-1===c.indexOf(t)&&c.push(t)}else a=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),a=[];return n(r)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(c,p,l(p));return c.e=function(e){return function(e){switch(d){case"ready":return s("prepare"),r.push(e),u((function(){s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},c}(h.require,h.id);E.hot=(m=h.id,v=E,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){a=v.parents.slice(),e=g?void 0:m,l(m)},active:!0,accept:function(e,r,n){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=r||function(){},y._acceptedErrorHandlers[e[t]]=n;else y._acceptedDependencies[e]=r||function(){},y._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":n=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)})),s("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:p,apply:f,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:o[m]},e=void 0,y),E.parents=a,E.children=[],a=[],h.require=b})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),t(d)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,r,c,d,s,u)=>{s.push(a),e.forEach((e=>{var r=l.miniCssF(e),a=l.p+r,c=t(r,a);c&&d.push(new Promise(((r,t)=>{var d=n(e,a,(()=>{d.as="style",d.rel="preload",r()}),t);o.push(c),i.push(d)})))}))},(()=>{var e,r,n,t,o={179:0},i={};function a(e){return new Promise(((r,n)=>{i[e]=r;var t=l.p+l.hu(e),o=new Error;l.l(t,(r=>{if(i[e]){i[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+a+")",o.name="ChunkLoadError",o.type=t,o.request=a,n(o)}}))}))}function c(i){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,d=l.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<d.parents.length;s++){var u=d.parents[s],p=l.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),c(n[u],[i])):(delete n[u],r.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}l.f&&delete l.f.jsonpHmr,e=void 0;var d={},s=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(l.o(r,f)){var h,m=r[f],v=!1,g=!1,y=!1,E="";switch((h=m?a(f):{type:"disposed",moduleId:f}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+E));break;case"accepted":i.onAccepted&&i.onAccepted(h),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(f in u[f]=m,c(s,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,f)&&(d[f]||(d[f]=[]),c(d[f],h.outdatedDependencies[f]));y&&(c(s,[h.moduleId]),u[f]=p)}r=void 0;for(var b,w=[],_=0;_<s.length;_++){var C=s[_],H=l.c[C];H&&(H.hot._selfAccepted||H.hot._main)&&u[C]!==p&&!H.hot._selfInvalidated&&w.push({module:C,require:H.hot._requireSelf,errorHandler:H.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var i=t.pop(),a=l.c[i];if(a){var c={},u=a.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,c);for(l.hmrD[i]=c,a.hot.active=!1,delete l.c[i],delete d[i],_=0;_<a.children.length;_++){var p=l.c[a.children[_]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in d)if(l.o(d,f)&&(a=l.c[f]))for(b=d[f],_=0;_<b.length;_++)r=b[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)l.o(u,r)&&(l.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](l);for(var o in d)if(l.o(d,o)){var a=l.c[o];if(a){b=d[o];for(var c=[],p=[],f=[],h=0;h<b.length;h++){var m=b[h],v=a.hot._acceptedDependencies[m],g=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),p.push(g),f.push(m)}}for(var y=0;y<c.length;y++)try{c[y].call(null,b)}catch(r){if("function"==typeof p[y])try{p[y](r,{moduleId:o,dependencyId:f[y]})}catch(n){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[y],error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[y],error:r}),i.ignoreErrored||e(r)}}}for(var E=0;E<w.length;E++){var _=w[E],C=_.module;try{_.require(C)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:C,module:l.c[C]})}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:C,error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:C,error:r}),i.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdatewp_minimalist_boilerplate=(e,n,o)=>{for(var a in n)l.o(n,a)&&(r[a]=n[a]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},l.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(c)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(i,d,s,u,p,f){p.push(c),e={},n=d,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],i.forEach((function(r){l.o(o,r)&&void 0!==o[r]&&(u.push(a(r)),e[r]=!0)})),l.f&&(l.f.jsonpHmr=function(r,n){e&&!l.o(e,r)&&l.o(o,r)&&void 0!==o[r]&&(n.push(a(r)),e[r]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),l(159)})();