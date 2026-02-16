(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(f){if(f.ep)return;f.ep=!0;const d=o(f);fetch(f.href,d)}})();(function(){if(!window.location.pathname.includes("/checkout"))return;let a=0;const r=3e5,o=setInterval(function(){const f=window.checkout_order,d=f?.id;d?(clearInterval(o),console.log("🟢 OrderId bulundu! İşlem başlatılıyor."),u(f,d)):a>=r&&(clearInterval(o),console.log("⏱️ Maksimum bekleme süresi doldu, işlem iptal edildi.")),a+=100},100);function u(f,d){const p="uvid",g=localStorage.getItem(p);if(console.log("📊 processOrder çağrıldı"),console.log("📊 visitorId (uvid):",g),console.log("📊 checkout_order:",f),console.log("📦 orderId:",d),!g){console.error("❌ Conversion-tracking: visitorId bulunamadı.");return}console.log("✅ Step 1 - Veri başarıyla yakalandı."),console.log("✅ Step 2 - OrderId mevcut");const w=new XMLHttpRequest;w.open("POST","https://api.upsell.co/Tracking/MatchOrder",!0),w.setRequestHeader("Content-Type","application/json;charset=UTF-8"),w.onreadystatechange=function(){w.readyState===4&&(w.status>=200&&w.status<300?(console.log("✅ Conversion-tracking: Başarılı. Ziyaretçi anahtarı siliniyor."),localStorage.removeItem(p)):console.error("❌ Conversion-tracking MatchOrder error:",w.responseText))},console.log("📤 Step 3 - İstek gönderiliyor."),w.send(JSON.stringify({visitorId:g,orderId:String(d)})),console.log("✅ Step 4 - İstek gönderildi.")}})();var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var kc={exports:{}},er={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function $x(){if(ph)return er;ph=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(u,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var g in f)g!=="key"&&(d[g]=f[g])}else d=f;return f=d.ref,{$$typeof:a,type:u,key:p,ref:f!==void 0?f:null,props:d}}return er.Fragment=r,er.jsx=o,er.jsxs=o,er}var mh;function Zx(){return mh||(mh=1,kc.exports=$x()),kc.exports}var c=Zx(),Cc={exports:{}},tr={},Rc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function Qx(){return gh||(gh=1,function(a){function r(_,F){var fe=_.length;_.push(F);e:for(;0<fe;){var Se=fe-1>>>1,E=_[Se];if(0<f(E,F))_[Se]=F,_[fe]=E,fe=Se;else break e}}function o(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var F=_[0],fe=_.pop();if(fe!==F){_[0]=fe;e:for(var Se=0,E=_.length,G=E>>>1;Se<G;){var ne=2*(Se+1)-1,H=_[ne],I=ne+1,oe=_[I];if(0>f(H,fe))I<E&&0>f(oe,H)?(_[Se]=oe,_[I]=fe,Se=I):(_[Se]=H,_[ne]=fe,Se=ne);else if(I<E&&0>f(oe,fe))_[Se]=oe,_[I]=fe,Se=I;else break e}}return F}function f(_,F){var fe=_.sortIndex-F.sortIndex;return fe!==0?fe:_.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();a.unstable_now=function(){return p.now()-g}}var w=[],x=[],y=1,A=null,v=3,X=!1,j=!1,B=!1,R=!1,J=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function re(_){for(var F=o(x);F!==null;){if(F.callback===null)u(x);else if(F.startTime<=_)u(x),F.sortIndex=F.expirationTime,r(w,F);else break;F=o(x)}}function q(_){if(B=!1,re(_),!j)if(o(w)!==null)j=!0,te||(te=!0,P());else{var F=o(x);F!==null&&ve(q,F.startTime-_)}}var te=!1,Q=-1,le=5,Ee=-1;function Ge(){return R?!0:!(a.unstable_now()-Ee<le)}function Re(){if(R=!1,te){var _=a.unstable_now();Ee=_;var F=!0;try{e:{j=!1,B&&(B=!1,U(Q),Q=-1),X=!0;var fe=v;try{t:{for(re(_),A=o(w);A!==null&&!(A.expirationTime>_&&Ge());){var Se=A.callback;if(typeof Se=="function"){A.callback=null,v=A.priorityLevel;var E=Se(A.expirationTime<=_);if(_=a.unstable_now(),typeof E=="function"){A.callback=E,re(_),F=!0;break t}A===o(w)&&u(w),re(_)}else u(w);A=o(w)}if(A!==null)F=!0;else{var G=o(x);G!==null&&ve(q,G.startTime-_),F=!1}}break e}finally{A=null,v=fe,X=!1}F=void 0}}finally{F?P():te=!1}}}var P;if(typeof Z=="function")P=function(){Z(Re)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ye=se.port2;se.port1.onmessage=Re,P=function(){ye.postMessage(null)}}else P=function(){J(Re,0)};function ve(_,F){Q=J(function(){_(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(_){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var fe=v;v=F;try{return _()}finally{v=fe}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(_,F){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var fe=v;v=_;try{return F()}finally{v=fe}},a.unstable_scheduleCallback=function(_,F,fe){var Se=a.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Se+fe:Se):fe=Se,_){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=fe+E,_={id:y++,callback:F,priorityLevel:_,startTime:fe,expirationTime:E,sortIndex:-1},fe>Se?(_.sortIndex=fe,r(x,_),o(w)===null&&_===o(x)&&(B?(U(Q),Q=-1):B=!0,ve(q,fe-Se))):(_.sortIndex=E,r(w,_),j||X||(j=!0,te||(te=!0,P()))),_},a.unstable_shouldYield=Ge,a.unstable_wrapCallback=function(_){var F=v;return function(){var fe=v;v=F;try{return _.apply(this,arguments)}finally{v=fe}}}}(Nc)),Nc}var xh;function Kx(){return xh||(xh=1,Rc.exports=Qx()),Rc.exports}var Mc={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function Jx(){if(yh)return Oe;yh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),A=Symbol.iterator;function v(E){return E===null||typeof E!="object"?null:(E=A&&E[A]||E["@@iterator"],typeof E=="function"?E:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,B={};function R(E,G,ne){this.props=E,this.context=G,this.refs=B,this.updater=ne||X}R.prototype.isReactComponent={},R.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},R.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function J(){}J.prototype=R.prototype;function U(E,G,ne){this.props=E,this.context=G,this.refs=B,this.updater=ne||X}var Z=U.prototype=new J;Z.constructor=U,j(Z,R.prototype),Z.isPureReactComponent=!0;var re=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},te=Object.prototype.hasOwnProperty;function Q(E,G,ne,H,I,oe){return ne=oe.ref,{$$typeof:a,type:E,key:G,ref:ne!==void 0?ne:null,props:oe}}function le(E,G){return Q(E.type,G,void 0,void 0,void 0,E.props)}function Ee(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function Ge(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ne){return G[ne]})}var Re=/\/+/g;function P(E,G){return typeof E=="object"&&E!==null&&E.key!=null?Ge(""+E.key):G.toString(36)}function se(){}function ye(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(se,se):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function ve(E,G,ne,H,I){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var ue=!1;if(E===null)ue=!0;else switch(oe){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(E.$$typeof){case a:case r:ue=!0;break;case y:return ue=E._init,ve(ue(E._payload),G,ne,H,I)}}if(ue)return I=I(E),ue=H===""?"."+P(E,0):H,re(I)?(ne="",ue!=null&&(ne=ue.replace(Re,"$&/")+"/"),ve(I,G,ne,"",function(ke){return ke})):I!=null&&(Ee(I)&&(I=le(I,ne+(I.key==null||E&&E.key===I.key?"":(""+I.key).replace(Re,"$&/")+"/")+ue)),G.push(I)),1;ue=0;var xe=H===""?".":H+":";if(re(E))for(var me=0;me<E.length;me++)H=E[me],oe=xe+P(H,me),ue+=ve(H,G,ne,oe,I);else if(me=v(E),typeof me=="function")for(E=me.call(E),me=0;!(H=E.next()).done;)H=H.value,oe=xe+P(H,me++),ue+=ve(H,G,ne,oe,I);else if(oe==="object"){if(typeof E.then=="function")return ve(ye(E),G,ne,H,I);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ue}function _(E,G,ne){if(E==null)return E;var H=[],I=0;return ve(E,H,"","",function(oe){return G.call(ne,oe,I++)}),H}function F(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(ne){(E._status===0||E._status===-1)&&(E._status=1,E._result=ne)},function(ne){(E._status===0||E._status===-1)&&(E._status=2,E._result=ne)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var fe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function Se(){}return Oe.Children={map:_,forEach:function(E,G,ne){_(E,function(){G.apply(this,arguments)},ne)},count:function(E){var G=0;return _(E,function(){G++}),G},toArray:function(E){return _(E,function(G){return G})||[]},only:function(E){if(!Ee(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Oe.Component=R,Oe.Fragment=o,Oe.Profiler=f,Oe.PureComponent=U,Oe.StrictMode=u,Oe.Suspense=w,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return q.H.useMemoCache(E)}},Oe.cache=function(E){return function(){return E.apply(null,arguments)}},Oe.cloneElement=function(E,G,ne){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var H=j({},E.props),I=E.key,oe=void 0;if(G!=null)for(ue in G.ref!==void 0&&(oe=void 0),G.key!==void 0&&(I=""+G.key),G)!te.call(G,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&G.ref===void 0||(H[ue]=G[ue]);var ue=arguments.length-2;if(ue===1)H.children=ne;else if(1<ue){for(var xe=Array(ue),me=0;me<ue;me++)xe[me]=arguments[me+2];H.children=xe}return Q(E.type,I,void 0,void 0,oe,H)},Oe.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},Oe.createElement=function(E,G,ne){var H,I={},oe=null;if(G!=null)for(H in G.key!==void 0&&(oe=""+G.key),G)te.call(G,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(I[H]=G[H]);var ue=arguments.length-2;if(ue===1)I.children=ne;else if(1<ue){for(var xe=Array(ue),me=0;me<ue;me++)xe[me]=arguments[me+2];I.children=xe}if(E&&E.defaultProps)for(H in ue=E.defaultProps,ue)I[H]===void 0&&(I[H]=ue[H]);return Q(E,oe,void 0,void 0,null,I)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(E){return{$$typeof:g,render:E}},Oe.isValidElement=Ee,Oe.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:F}},Oe.memo=function(E,G){return{$$typeof:x,type:E,compare:G===void 0?null:G}},Oe.startTransition=function(E){var G=q.T,ne={};q.T=ne;try{var H=E(),I=q.S;I!==null&&I(ne,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Se,fe)}catch(oe){fe(oe)}finally{q.T=G}},Oe.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},Oe.use=function(E){return q.H.use(E)},Oe.useActionState=function(E,G,ne){return q.H.useActionState(E,G,ne)},Oe.useCallback=function(E,G){return q.H.useCallback(E,G)},Oe.useContext=function(E){return q.H.useContext(E)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(E,G){return q.H.useDeferredValue(E,G)},Oe.useEffect=function(E,G,ne){var H=q.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(E,G)},Oe.useId=function(){return q.H.useId()},Oe.useImperativeHandle=function(E,G,ne){return q.H.useImperativeHandle(E,G,ne)},Oe.useInsertionEffect=function(E,G){return q.H.useInsertionEffect(E,G)},Oe.useLayoutEffect=function(E,G){return q.H.useLayoutEffect(E,G)},Oe.useMemo=function(E,G){return q.H.useMemo(E,G)},Oe.useOptimistic=function(E,G){return q.H.useOptimistic(E,G)},Oe.useReducer=function(E,G,ne){return q.H.useReducer(E,G,ne)},Oe.useRef=function(E){return q.H.useRef(E)},Oe.useState=function(E){return q.H.useState(E)},Oe.useSyncExternalStore=function(E,G,ne){return q.H.useSyncExternalStore(E,G,ne)},Oe.useTransition=function(){return q.H.useTransition()},Oe.version="19.1.1",Oe}var vh;function cf(){return vh||(vh=1,Mc.exports=Jx()),Mc.exports}var Uc={exports:{}},Ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Fx(){if(bh)return Ut;bh=1;var a=cf();function r(w){var x="https://react.dev/errors/"+w;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+w+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(w,x,y){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:A==null?null:""+A,children:w,containerInfo:x,implementation:y}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(w,x){if(w==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ut.createPortal=function(w,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return d(w,x,null,y)},Ut.flushSync=function(w){var x=p.T,y=u.p;try{if(p.T=null,u.p=2,w)return w()}finally{p.T=x,u.p=y,u.d.f()}},Ut.preconnect=function(w,x){typeof w=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(w,x))},Ut.prefetchDNS=function(w){typeof w=="string"&&u.d.D(w)},Ut.preinit=function(w,x){if(typeof w=="string"&&x&&typeof x.as=="string"){var y=x.as,A=g(y,x.crossOrigin),v=typeof x.integrity=="string"?x.integrity:void 0,X=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?u.d.S(w,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:A,integrity:v,fetchPriority:X}):y==="script"&&u.d.X(w,{crossOrigin:A,integrity:v,fetchPriority:X,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ut.preinitModule=function(w,x){if(typeof w=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=g(x.as,x.crossOrigin);u.d.M(w,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(w)},Ut.preload=function(w,x){if(typeof w=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,A=g(y,x.crossOrigin);u.d.L(w,y,{crossOrigin:A,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ut.preloadModule=function(w,x){if(typeof w=="string")if(x){var y=g(x.as,x.crossOrigin);u.d.m(w,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(w)},Ut.requestFormReset=function(w){u.d.r(w)},Ut.unstable_batchedUpdates=function(w,x){return w(x)},Ut.useFormState=function(w,x,y){return p.H.useFormState(w,x,y)},Ut.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ut.version="19.1.1",Ut}var Sh;function Tp(){if(Sh)return Uc.exports;Sh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Uc.exports=Fx(),Uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh;function Wx(){if(wh)return tr;wh=1;var a=Kx(),r=cf(),o=Tp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(u(188))}function w(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),e;if(s===i)return g(l),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=l,i=s;else{for(var h=!1,m=l.child;m;){if(m===n){h=!0,n=l,i=s;break}if(m===i){h=!0,i=l,n=s;break}m=m.sibling}if(!h){for(m=s.child;m;){if(m===n){h=!0,n=s,i=l;break}if(m===i){h=!0,i=s,n=l;break}m=m.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,A=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ge=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case R:return"Profiler";case B:return"StrictMode";case q:return"Suspense";case te:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var ve=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Se=[],E=-1;function G(e){return{current:e}}function ne(e){0>E||(e.current=Se[E],Se[E]=null,E--)}function H(e,t){E++,Se[E]=e.current,e.current=t}var I=G(null),oe=G(null),ue=G(null),xe=G(null);function me(e,t){switch(H(ue,t),H(oe,e),H(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?G0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=G0(t),e=Y0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(I),H(I,e)}function ke(){ne(I),ne(oe),ne(ue)}function at(e){e.memoizedState!==null&&H(xe,e);var t=I.current,n=Y0(t,e.type);t!==n&&(H(oe,e),H(I,n))}function bt(e){oe.current===e&&(ne(I),ne(oe)),xe.current===e&&(ne(xe),Jl._currentValue=fe)}var pe=Object.prototype.hasOwnProperty,be=a.unstable_scheduleCallback,Be=a.unstable_cancelCallback,qe=a.unstable_shouldYield,xt=a.unstable_requestPaint,it=a.unstable_now,On=a.unstable_getCurrentPriorityLevel,Pt=a.unstable_ImmediatePriority,S=a.unstable_UserBlockingPriority,D=a.unstable_NormalPriority,L=a.unstable_LowPriority,ie=a.unstable_IdlePriority,ae=a.log,ee=a.unstable_setDisableYieldValue,ce=null,Te=null;function je(e){if(typeof ae=="function"&&ee(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(ce,e)}catch{}}var $e=Math.clz32?Math.clz32:ra,Vt=Math.log,Ht=Math.LN2;function ra(e){return e>>>=0,e===0?32:31-(Vt(e)/Ht|0)|0}var St=256,Sn=4194304;function kt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wt(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,s=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?l=kt(i):(h&=m,h!==0?l=kt(h):n||(n=m&~e,n!==0&&(l=kt(n))))):(m=i&~s,m!==0?l=kt(m):h!==0?l=kt(h):n||(n=i&~e,n!==0&&(l=kt(n)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:l}function qn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ii(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function al(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Er(){var e=Sn;return Sn<<=1,(Sn&62914560)===0&&(Sn=4194304),e}function _n(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function un(e,t,n,i,l,s){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,b=e.expirationTimes,k=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-$e(n),K=1<<Y;m[Y]=0,b[Y]=-1;var C=k[Y];if(C!==null)for(k[Y]=null,Y=0;Y<C.length;Y++){var N=C[Y];N!==null&&(N.lane&=-536870913)}n&=~K}i!==0&&il(e,i,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(h&~t))}function il(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-$e(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function li(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-$e(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function ll(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:oh(e.type))}function Eo(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Yt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Yt,ot="__reactProps$"+Yt,Gn="__reactContainer$"+Yt,sa="__reactEvents$"+Yt,Nm="__reactListeners$"+Yt,Mm="__reactHandles$"+Yt,_f="__reactResources$"+Yt,rl="__reactMarker$"+Yt;function zo(e){delete e[Ke],delete e[ot],delete e[sa],delete e[Nm],delete e[Mm]}function ri(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Q0(e);e!==null;){if(n=e[Ke])return n;e=Q0(e)}return t}e=n,n=e.parentNode}return null}function si(e){if(e=e[Ke]||e[Gn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function oi(e){var t=e[_f];return t||(t=e[_f]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Et(e){e[rl]=!0}var kf=new Set,Cf={};function Ra(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(Cf[e]=t,e=0;e<t.length;e++)kf.add(t[e])}var Um=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rf={},Nf={};function Bm(e){return pe.call(Nf,e)?!0:pe.call(Rf,e)?!1:Um.test(e)?Nf[e]=!0:(Rf[e]=!0,!1)}function Tr(e,t,n){if(Bm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ar(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Yn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var To,Mf;function ci(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||"",Mf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+To+e+Mf}var Ao=!1;function jo(e,t){if(!e||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(N){var C=N}Reflect.construct(e,[],K)}else{try{K.call()}catch(N){C=N}e.call(K.prototype)}}else{try{throw Error()}catch(N){C=N}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(N){if(N&&C&&typeof N.stack=="string")return[N.stack,C.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),h=s[0],m=s[1];if(h&&m){var b=h.split(`
`),k=m.split(`
`);for(l=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;if(i===b.length||l===k.length)for(i=b.length-1,l=k.length-1;1<=i&&0<=l&&b[i]!==k[l];)l--;for(;1<=i&&0<=l;i--,l--)if(b[i]!==k[l]){if(i!==1||l!==1)do if(i--,l--,0>l||b[i]!==k[l]){var Y=`
`+b[i].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=i&&0<=l);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ci(n):""}function Hm(e){switch(e.tag){case 26:case 27:case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 15:return jo(e.type,!1);case 11:return jo(e.type.render,!1);case 1:return jo(e.type,!0);case 31:return ci("Activity");default:return""}}function Uf(e){try{var t="";do t+=Hm(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lm(e){var t=Bf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){i=""+h,s.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=Lm(e))}function Hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Bf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qm=/[\n"\\]/g;function fn(e){return e.replace(qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Do(e,t,n,i,l,s,h,m){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+cn(t)):e.value!==""+cn(t)&&(e.value=""+cn(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Oo(e,h,cn(t)):n!=null?Oo(e,h,cn(n)):i!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+cn(m):e.removeAttribute("name")}function Lf(e,t,n,i,l,s,h,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+cn(n):"",t=t!=null?""+cn(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h)}function Oo(e,t,n){t==="number"&&Dr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fi(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qf(e,t,n){if(t!=null&&(t=""+cn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+cn(n):""}function Vf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(ve(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=cn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Vm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Yf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&Gf(e,l,i)}else for(var s in t)t.hasOwnProperty(s)&&Gf(e,s,t[s])}function _o(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Or(e){return Ym.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ko=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,pi=null;function Xf(e){var t=si(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Do(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+fn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[ot]||null;if(!l)throw Error(u(90));Do(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Hf(i)}break e;case"textarea":qf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&fi(e,!!n.multiple,t,!1)}}}var Ro=!1;function $f(e,t,n){if(Ro)return e(t,n);Ro=!0;try{var i=e(t);return i}finally{if(Ro=!1,(hi!==null||pi!==null)&&(ps(),hi&&(t=hi,e=pi,pi=hi=null,Xf(t),e)))for(t=0;t<e.length;t++)Xf(e[t])}}function ol(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ot]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=!1;if(Xn)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){No=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{No=!1}var oa=null,Mo=null,_r=null;function Zf(){if(_r)return _r;var e,t=Mo,n=t.length,i,l="value"in oa?oa.value:oa.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(i=1;i<=h&&t[n-i]===l[s-i];i++);return _r=l.slice(e,1<i?1-i:void 0)}function kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Qf(){return!1}function Xt(e){function t(n,i,l,s,h){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cr:Qf,this.isPropagationStopped=Qf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rr=Xt(Na),cl=y({},Na,{view:0,detail:0}),Xm=Xt(cl),Uo,Bo,fl,Nr=y({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fl&&(fl&&e.type==="mousemove"?(Uo=e.screenX-fl.screenX,Bo=e.screenY-fl.screenY):Bo=Uo=0,fl=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Bo}}),Kf=Xt(Nr),$m=y({},Nr,{dataTransfer:0}),Zm=Xt($m),Qm=y({},cl,{relatedTarget:0}),Ho=Xt(Qm),Km=y({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=Xt(Km),Fm=y({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=Xt(Fm),Im=y({},Na,{data:0}),Jf=Xt(Im),Pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tg[e])?!!t[e]:!1}function Lo(){return ng}var ag=y({},cl,{key:function(e){if(e.key){var t=Pm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ig=Xt(ag),lg=y({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=Xt(lg),rg=y({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),sg=Xt(rg),og=y({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),ug=Xt(og),cg=y({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=Xt(cg),dg=y({},Na,{newState:0,oldState:0}),hg=Xt(dg),pg=[9,13,27,32],qo=Xn&&"CompositionEvent"in window,dl=null;Xn&&"documentMode"in document&&(dl=document.documentMode);var mg=Xn&&"TextEvent"in window&&!dl,Wf=Xn&&(!qo||dl&&8<dl&&11>=dl),If=" ",Pf=!1;function ed(e,t){switch(e){case"keyup":return pg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function gg(e,t){switch(e){case"compositionend":return td(t);case"keypress":return t.which!==32?null:(Pf=!0,If);case"textInput":return e=t.data,e===If&&Pf?null:e;default:return null}}function xg(e,t){if(mi)return e==="compositionend"||!qo&&ed(e,t)?(e=Zf(),_r=Mo=oa=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yg[e.type]:t==="textarea"}function ad(e,t,n,i){hi?pi?pi.push(i):pi=[i]:hi=i,t=bs(t,"onChange"),0<t.length&&(n=new Rr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var hl=null,pl=null;function vg(e){B0(e,0)}function Mr(e){var t=sl(e);if(Hf(t))return e}function id(e,t){if(e==="change")return t}var ld=!1;if(Xn){var Vo;if(Xn){var Go="oninput"in document;if(!Go){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Go=typeof rd.oninput=="function"}Vo=Go}else Vo=!1;ld=Vo&&(!document.documentMode||9<document.documentMode)}function sd(){hl&&(hl.detachEvent("onpropertychange",od),pl=hl=null)}function od(e){if(e.propertyName==="value"&&Mr(pl)){var t=[];ad(t,pl,e,Co(e)),$f(vg,t)}}function bg(e,t,n){e==="focusin"?(sd(),hl=t,pl=n,hl.attachEvent("onpropertychange",od)):e==="focusout"&&sd()}function Sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mr(pl)}function wg(e,t){if(e==="click")return Mr(t)}function Eg(e,t){if(e==="input"||e==="change")return Mr(t)}function zg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:zg;function ml(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!pe.call(t,l)||!en(e[l],t[l]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var n=ud(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ud(n)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Tg=Xn&&"documentMode"in document&&11>=document.documentMode,gi=null,Xo=null,gl=null,$o=!1;function hd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$o||gi==null||gi!==Dr(i)||(i=gi,"selectionStart"in i&&Yo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gl&&ml(gl,i)||(gl=i,i=bs(Xo,"onSelect"),0<i.length&&(t=new Rr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gi)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Zo={},pd={};Xn&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Ua(e){if(Zo[e])return Zo[e];if(!xi[e])return e;var t=xi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pd)return Zo[e]=t[n];return e}var md=Ua("animationend"),gd=Ua("animationiteration"),xd=Ua("animationstart"),Ag=Ua("transitionrun"),jg=Ua("transitionstart"),Dg=Ua("transitioncancel"),yd=Ua("transitionend"),vd=new Map,Qo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qo.push("scrollEnd");function wn(e,t){vd.set(e,t),Ra(t,[e])}var bd=new WeakMap;function dn(e,t){if(typeof e=="object"&&e!==null){var n=bd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Uf(t)},bd.set(e,t),t)}return{value:e,source:t,stack:Uf(t)}}var hn=[],yi=0,Ko=0;function Ur(){for(var e=yi,t=Ko=yi=0;t<e;){var n=hn[t];hn[t++]=null;var i=hn[t];hn[t++]=null;var l=hn[t];hn[t++]=null;var s=hn[t];if(hn[t++]=null,i!==null&&l!==null){var h=i.pending;h===null?l.next=l:(l.next=h.next,h.next=l),i.pending=l}s!==0&&Sd(n,l,s)}}function Br(e,t,n,i){hn[yi++]=e,hn[yi++]=t,hn[yi++]=n,hn[yi++]=i,Ko|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Jo(e,t,n,i){return Br(e,t,n,i),Hr(e)}function vi(e,t){return Br(e,null,null,t),Hr(e)}function Sd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-$e(n),e=s.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),s):null}function Hr(e){if(50<Vl)throw Vl=0,tc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bi={};function Og(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,t,n,i){return new Og(e,t,n,i)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $n(e,t){var n=e.alternate;return n===null?(n=tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Lr(e,t,n,i,l,s){var h=0;if(i=e,typeof e=="function")Fo(e)&&(h=1);else if(typeof e=="string")h=kx(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=tn(31,n,t,l),e.elementType=Ee,e.lanes=s,e;case j:return Ba(n.children,l,s,t);case B:h=8,l|=24;break;case R:return e=tn(12,n,t,l|2),e.elementType=R,e.lanes=s,e;case q:return e=tn(13,n,t,l),e.elementType=q,e.lanes=s,e;case te:return e=tn(19,n,t,l),e.elementType=te,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:case Z:h=10;break e;case U:h=9;break e;case re:h=11;break e;case Q:h=14;break e;case le:h=16,i=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=tn(h,n,t,l),t.elementType=e,t.type=i,t.lanes=s,t}function Ba(e,t,n,i){return e=tn(7,e,i,t),e.lanes=n,e}function Wo(e,t,n){return e=tn(6,e,null,t),e.lanes=n,e}function Io(e,t,n){return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=[],wi=0,qr=null,Vr=0,pn=[],mn=0,Ha=null,Zn=1,Qn="";function La(e,t){Si[wi++]=Vr,Si[wi++]=qr,qr=e,Vr=t}function Ed(e,t,n){pn[mn++]=Zn,pn[mn++]=Qn,pn[mn++]=Ha,Ha=e;var i=Zn;e=Qn;var l=32-$e(i)-1;i&=~(1<<l),n+=1;var s=32-$e(t)+l;if(30<s){var h=l-l%5;s=(i&(1<<h)-1).toString(32),i>>=h,l-=h,Zn=1<<32-$e(t)+l|n<<l|i,Qn=s+e}else Zn=1<<s|n<<l|i,Qn=e}function Po(e){e.return!==null&&(La(e,1),Ed(e,1,0))}function eu(e){for(;e===qr;)qr=Si[--wi],Si[wi]=null,Vr=Si[--wi],Si[wi]=null;for(;e===Ha;)Ha=pn[--mn],pn[mn]=null,Qn=pn[--mn],pn[mn]=null,Zn=pn[--mn],pn[mn]=null}var Lt=null,rt=null,Ye=!1,qa=null,kn=!1,tu=Error(u(519));function Va(e){var t=Error(u(418,""));throw vl(dn(t,e)),tu}function zd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ke]=e,t[ot]=i,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Yl.length;n++)Ue(Yl[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Lf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),jr(t);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),Vf(t,i.value,i.defaultValue,i.children),jr(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||V0(t.textContent,n)?(i.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),i.onScroll!=null&&Ue("scroll",t),i.onScrollEnd!=null&&Ue("scrollend",t),i.onClick!=null&&(t.onclick=Ss),t=!0):t=!1,t||Va(e)}function Td(e){for(Lt=e.return;Lt;)switch(Lt.tag){case 5:case 13:kn=!1;return;case 27:case 3:kn=!0;return;default:Lt=Lt.return}}function xl(e){if(e!==Lt)return!1;if(!Ye)return Td(e),Ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||xc(e.type,e.memoizedProps)),n=!n),n&&rt&&Va(e),Td(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){rt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}rt=null}}else t===27?(t=rt,za(e.type)?(e=Sc,Sc=null,rt=e):rt=t):rt=Lt?zn(e.stateNode.nextSibling):null;return!0}function yl(){rt=Lt=null,Ye=!1}function Ad(){var e=qa;return e!==null&&(Qt===null?Qt=e:Qt.push.apply(Qt,e),qa=null),e}function vl(e){qa===null?qa=[e]:qa.push(e)}var nu=G(null),Ga=null,Kn=null;function ua(e,t,n){H(nu,t._currentValue),t._currentValue=n}function Jn(e){e._currentValue=nu.current,ne(nu)}function au(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function iu(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var h=l.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=l;for(var b=0;b<t.length;b++)if(m.context===t[b]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),au(s.return,n,e),i||(h=null);break e}s=m.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(u(341));h.lanes|=n,s=h.alternate,s!==null&&(s.lanes|=n),au(h,n,e),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===e){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function bl(e,t,n,i){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var m=l.type;en(l.pendingProps.value,h.value)||(e!==null?e.push(m):e=[m])}}else if(l===xe.current){if(h=l.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}l=l.return}e!==null&&iu(t,e,n,i),t.flags|=262144}function Gr(e){for(e=e.firstContext;e!==null;){if(!en(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){Ga=e,Kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mt(e){return jd(Ga,e)}function Yr(e,t){return Ga===null&&Ya(e),jd(e,t)}function jd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kn===null){if(e===null)throw Error(u(308));Kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kn=Kn.next=t;return n}var _g=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},kg=a.unstable_scheduleCallback,Cg=a.unstable_NormalPriority,yt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lu(){return{controller:new _g,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&kg(Cg,function(){e.controller.abort()})}var wl=null,ru=0,Ei=0,zi=null;function Rg(e,t){if(wl===null){var n=wl=[];ru=0,Ei=oc(),zi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ru++,t.then(Dd,Dd),t}function Dd(){if(--ru===0&&wl!==null){zi!==null&&(zi.status="fulfilled");var e=wl;wl=null,Ei=0,zi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ng(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Od=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Rg(e,t),Od!==null&&Od(e,t)};var Xa=G(null);function su(){var e=Xa.current;return e!==null?e:Pe.pooledCache}function Xr(e,t){t===null?H(Xa,Xa.current):H(Xa,t.pool)}function _d(){var e=su();return e===null?null:{parent:yt._currentValue,pool:e}}var El=Error(u(460)),kd=Error(u(474)),$r=Error(u(542)),ou={then:function(){}};function Cd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zr(){}function Rd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zr,Zr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e;default:if(typeof t.status=="string")t.then(Zr,Zr);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e}throw zl=t,El}}var zl=null;function Nd(){if(zl===null)throw Error(u(459));var e=zl;return zl=null,e}function Md(e){if(e===El||e===$r)throw Error(u(483))}var ca=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ze&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Hr(e),Sd(e,null,n),t}return Br(e,i,t,n),Hr(e)}function Tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,li(e,n)}}function fu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=h:s=s.next=h,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var du=!1;function Al(){if(du){var e=zi;if(e!==null)throw e}}function jl(e,t,n,i){du=!1;var l=e.updateQueue;ca=!1;var s=l.firstBaseUpdate,h=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var b=m,k=b.next;b.next=null,h===null?s=k:h.next=k,h=b;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,m=Y.lastBaseUpdate,m!==h&&(m===null?Y.firstBaseUpdate=k:m.next=k,Y.lastBaseUpdate=b))}if(s!==null){var K=l.baseState;h=0,Y=k=b=null,m=s;do{var C=m.lane&-536870913,N=C!==m.lane;if(N?(He&C)===C:(i&C)===C){C!==0&&C===Ei&&(du=!0),Y!==null&&(Y=Y.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Ae=e,we=m;C=t;var We=n;switch(we.tag){case 1:if(Ae=we.payload,typeof Ae=="function"){K=Ae.call(We,K,C);break e}K=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=we.payload,C=typeof Ae=="function"?Ae.call(We,K,C):Ae,C==null)break e;K=y({},K,C);break e;case 2:ca=!0}}C=m.callback,C!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[C]:N.push(C))}else N={lane:C,tag:m.tag,payload:m.payload,callback:m.callback,next:null},Y===null?(k=Y=N,b=K):Y=Y.next=N,h|=C;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;N=m,m=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);Y===null&&(b=K),l.baseState=b,l.firstBaseUpdate=k,l.lastBaseUpdate=Y,s===null&&(l.shared.lanes=0),ba|=h,e.lanes=h,e.memoizedState=K}}function Ud(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Bd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ud(n[e],t)}var Ti=G(null),Qr=G(0);function Hd(e,t){e=na,H(Qr,e),H(Ti,t),na=e|t.baseLanes}function hu(){H(Qr,na),H(Ti,Ti.current)}function pu(){na=Qr.current,ne(Ti),ne(Qr)}var ha=0,Ce=null,Je=null,dt=null,Kr=!1,Ai=!1,$a=!1,Jr=0,Dl=0,ji=null,Mg=0;function ut(){throw Error(u(321))}function mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function gu(e,t,n,i,l,s){return ha=s,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?S1:w1,$a=!1,s=n(i,l),$a=!1,Ai&&(s=qd(t,n,i,l)),Ld(e),s}function Ld(e){_.H=ts;var t=Je!==null&&Je.next!==null;if(ha=0,dt=Je=Ce=null,Kr=!1,Dl=0,ji=null,t)throw Error(u(300));e===null||zt||(e=e.dependencies,e!==null&&Gr(e)&&(zt=!0))}function qd(e,t,n,i){Ce=e;var l=0;do{if(Ai&&(ji=null),Dl=0,Ai=!1,25<=l)throw Error(u(301));if(l+=1,dt=Je=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=Gg,s=t(n,i)}while(Ai);return s}function Ug(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Ol(t):t,e=e.useState()[0],(Je!==null?Je.memoizedState:null)!==e&&(Ce.flags|=1024),t}function xu(){var e=Jr!==0;return Jr=0,e}function yu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vu(e){if(Kr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kr=!1}ha=0,dt=Je=Ce=null,Ai=!1,Dl=Jr=0,ji=null}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ce.memoizedState=dt=e:dt=dt.next=e,dt}function ht(){if(Je===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=dt===null?Ce.memoizedState:dt.next;if(t!==null)dt=t,Je=e;else{if(e===null)throw Ce.alternate===null?Error(u(467)):Error(u(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},dt===null?Ce.memoizedState=dt=e:dt=dt.next=e}return dt}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var t=Dl;return Dl+=1,ji===null&&(ji=[]),e=Rd(ji,e,t),t=Ce,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?S1:w1),e}function Fr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===Z)return Mt(e)}throw Error(u(438,String(e)))}function Su(e){var t=null,n=Ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=bu(),Ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Ge;return t.index++,n}function Fn(e,t){return typeof t=="function"?t(e):t}function Wr(e){var t=ht();return wu(t,Je,e)}function wu(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var l=e.baseQueue,s=i.pending;if(s!==null){if(l!==null){var h=l.next;l.next=s.next,s.next=h}t.baseQueue=l=s,i.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var m=h=null,b=null,k=t,Y=!1;do{var K=k.lane&-536870913;if(K!==k.lane?(He&K)===K:(ha&K)===K){var C=k.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),K===Ei&&(Y=!0);else if((ha&C)===C){k=k.next,C===Ei&&(Y=!0);continue}else K={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},b===null?(m=b=K,h=s):b=b.next=K,Ce.lanes|=C,ba|=C;K=k.action,$a&&n(s,K),s=k.hasEagerState?k.eagerState:n(s,K)}else C={lane:K,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},b===null?(m=b=C,h=s):b=b.next=C,Ce.lanes|=K,ba|=K;k=k.next}while(k!==null&&k!==t);if(b===null?h=s:b.next=m,!en(s,e.memoizedState)&&(zt=!0,Y&&(n=zi,n!==null)))throw n;e.memoizedState=s,e.baseState=h,e.baseQueue=b,i.lastRenderedState=s}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Eu(e){var t=ht(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do s=e(s,h.action),h=h.next;while(h!==l);en(s,t.memoizedState)||(zt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Vd(e,t,n){var i=Ce,l=ht(),s=Ye;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!en((Je||l).memoizedState,n);h&&(l.memoizedState=n,zt=!0),l=l.queue;var m=Xd.bind(null,i,l,e);if(_l(2048,8,m,[e]),l.getSnapshot!==t||h||dt!==null&&dt.memoizedState.tag&1){if(i.flags|=2048,Di(9,Ir(),Yd.bind(null,i,l,n,t),null),Pe===null)throw Error(u(349));s||(ha&124)!==0||Gd(i,t,n)}return n}function Gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t=bu(),Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yd(e,t,n,i){t.value=n,t.getSnapshot=i,$d(t)&&Zd(e)}function Xd(e,t,n){return n(function(){$d(t)&&Zd(e)})}function $d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function Zd(e){var t=vi(e,2);t!==null&&sn(t,e,2)}function zu(e){var t=$t();if(typeof e=="function"){var n=e;if(e=n(),$a){je(!0);try{n()}finally{je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:e},t}function Qd(e,t,n,i){return e.baseState=n,wu(e,Je,typeof i=="function"?i:Fn)}function Bg(e,t,n,i,l){if(es(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};_.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Kd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Kd(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var s=_.T,h={};_.T=h;try{var m=n(l,i),b=_.S;b!==null&&b(h,m),Jd(e,t,m)}catch(k){Tu(e,t,k)}finally{_.T=s}}else try{s=n(l,i),Jd(e,t,s)}catch(k){Tu(e,t,k)}}function Jd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Fd(e,t,i)},function(i){return Tu(e,t,i)}):Fd(e,t,n)}function Fd(e,t,n){t.status="fulfilled",t.value=n,Wd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Kd(e,n)))}function Tu(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Wd(t),t=t.next;while(t!==i)}e.action=null}function Wd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Id(e,t){return t}function Pd(e,t){if(Ye){var n=Pe.formState;if(n!==null){e:{var i=Ce;if(Ye){if(rt){t:{for(var l=rt,s=kn;l.nodeType!==8;){if(!s){l=null;break t}if(l=zn(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){rt=zn(l.nextSibling),i=l.data==="F!";break e}}Va(i)}i=!1}i&&(t=n[0])}}return n=$t(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Id,lastRenderedState:t},n.queue=i,n=y1.bind(null,Ce,i),i.dispatch=n,i=zu(!1),s=_u.bind(null,Ce,!1,i.queue),i=$t(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Bg.bind(null,Ce,l,s,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function e1(e){var t=ht();return t1(t,Je,e)}function t1(e,t,n){if(t=wu(e,t,Id)[0],e=Wr(Fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ol(t)}catch(h){throw h===El?$r:h}else i=t;t=ht();var l=t.queue,s=l.dispatch;return n!==t.memoizedState&&(Ce.flags|=2048,Di(9,Ir(),Hg.bind(null,l,n),null)),[i,s,e]}function Hg(e,t){e.action=t}function n1(e){var t=ht(),n=Je;if(n!==null)return t1(t,n,e);ht(),t=t.memoizedState,n=ht();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Di(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ce.updateQueue,t===null&&(t=bu(),Ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ir(){return{destroy:void 0,resource:void 0}}function a1(){return ht().memoizedState}function Pr(e,t,n,i){var l=$t();i=i===void 0?null:i,Ce.flags|=e,l.memoizedState=Di(1|t,Ir(),n,i)}function _l(e,t,n,i){var l=ht();i=i===void 0?null:i;var s=l.memoizedState.inst;Je!==null&&i!==null&&mu(i,Je.memoizedState.deps)?l.memoizedState=Di(t,s,n,i):(Ce.flags|=e,l.memoizedState=Di(1|t,s,n,i))}function i1(e,t){Pr(8390656,8,e,t)}function l1(e,t){_l(2048,8,e,t)}function r1(e,t){return _l(4,2,e,t)}function s1(e,t){return _l(4,4,e,t)}function o1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function u1(e,t,n){n=n!=null?n.concat([e]):null,_l(4,4,o1.bind(null,t,e),n)}function Au(){}function c1(e,t){var n=ht();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&mu(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function f1(e,t){var n=ht();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&mu(t,i[1]))return i[0];if(i=e(),$a){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i}function ju(e,t,n){return n===void 0||(ha&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=p0(),Ce.lanes|=e,ba|=e,n)}function d1(e,t,n,i){return en(n,t)?n:Ti.current!==null?(e=ju(e,n,i),en(e,t)||(zt=!0),e):(ha&42)===0?(zt=!0,e.memoizedState=n):(e=p0(),Ce.lanes|=e,ba|=e,t)}function h1(e,t,n,i,l){var s=F.p;F.p=s!==0&&8>s?s:8;var h=_.T,m={};_.T=m,_u(e,!1,t,n);try{var b=l(),k=_.S;if(k!==null&&k(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var Y=Ng(b,i);kl(e,t,Y,rn(e))}else kl(e,t,i,rn(e))}catch(K){kl(e,t,{then:function(){},status:"rejected",reason:K},rn())}finally{F.p=s,_.T=h}}function Lg(){}function Du(e,t,n,i){if(e.tag!==5)throw Error(u(476));var l=p1(e).queue;h1(e,l,t,fe,n===null?Lg:function(){return m1(e),n(i)})}function p1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function m1(e){var t=p1(e).next.queue;kl(e,t,{},rn())}function Ou(){return Mt(Jl)}function g1(){return ht().memoizedState}function x1(){return ht().memoizedState}function qg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=rn();e=fa(n);var i=da(t,e,n);i!==null&&(sn(i,t,n),Tl(i,t,n)),t={cache:lu()},e.payload=t;return}t=t.return}}function Vg(e,t,n){var i=rn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},es(e)?v1(t,n):(n=Jo(e,t,n,i),n!==null&&(sn(n,e,i),b1(n,t,i)))}function y1(e,t,n){var i=rn();kl(e,t,n,i)}function kl(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(es(e))v1(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var h=t.lastRenderedState,m=s(h,n);if(l.hasEagerState=!0,l.eagerState=m,en(m,h))return Br(e,t,l,0),Pe===null&&Ur(),!1}catch{}finally{}if(n=Jo(e,t,l,i),n!==null)return sn(n,e,i),b1(n,t,i),!0}return!1}function _u(e,t,n,i){if(i={lane:2,revertLane:oc(),action:i,hasEagerState:!1,eagerState:null,next:null},es(e)){if(t)throw Error(u(479))}else t=Jo(e,n,i,2),t!==null&&sn(t,e,2)}function es(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function v1(e,t){Ai=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function b1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,li(e,n)}}var ts={readContext:Mt,use:Fr,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut},S1={readContext:Mt,use:Fr,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:i1,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Pr(4194308,4,o1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){Pr(4,2,e,t)},useMemo:function(e,t){var n=$t();t=t===void 0?null:t;var i=e();if($a){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=$t();if(n!==void 0){var l=n(t);if($a){je(!0);try{n(t)}finally{je(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Vg.bind(null,Ce,e),[i.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:function(e){e=zu(e);var t=e.queue,n=y1.bind(null,Ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Au,useDeferredValue:function(e,t){var n=$t();return ju(n,e,t)},useTransition:function(){var e=zu(!1);return e=h1.bind(null,Ce,e.queue,!0,!1),$t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ce,l=$t();if(Ye){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Pe===null)throw Error(u(349));(He&124)!==0||Gd(i,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,i1(Xd.bind(null,i,s,e),[e]),i.flags|=2048,Di(9,Ir(),Yd.bind(null,i,s,n,t),null),n},useId:function(){var e=$t(),t=Pe.identifierPrefix;if(Ye){var n=Qn,i=Zn;n=(i&~(1<<32-$e(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Mg++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ou,useFormState:Pd,useActionState:Pd,useOptimistic:function(e){var t=$t();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_u.bind(null,Ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:Su,useCacheRefresh:function(){return $t().memoizedState=qg.bind(null,Ce)}},w1={readContext:Mt,use:Fr,useCallback:c1,useContext:Mt,useEffect:l1,useImperativeHandle:u1,useInsertionEffect:r1,useLayoutEffect:s1,useMemo:f1,useReducer:Wr,useRef:a1,useState:function(){return Wr(Fn)},useDebugValue:Au,useDeferredValue:function(e,t){var n=ht();return d1(n,Je.memoizedState,e,t)},useTransition:function(){var e=Wr(Fn)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Vd,useId:g1,useHostTransitionStatus:Ou,useFormState:e1,useActionState:e1,useOptimistic:function(e,t){var n=ht();return Qd(n,Je,e,t)},useMemoCache:Su,useCacheRefresh:x1},Gg={readContext:Mt,use:Fr,useCallback:c1,useContext:Mt,useEffect:l1,useImperativeHandle:u1,useInsertionEffect:r1,useLayoutEffect:s1,useMemo:f1,useReducer:Eu,useRef:a1,useState:function(){return Eu(Fn)},useDebugValue:Au,useDeferredValue:function(e,t){var n=ht();return Je===null?ju(n,e,t):d1(n,Je.memoizedState,e,t)},useTransition:function(){var e=Eu(Fn)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Vd,useId:g1,useHostTransitionStatus:Ou,useFormState:n1,useActionState:n1,useOptimistic:function(e,t){var n=ht();return Je!==null?Qd(n,Je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Su,useCacheRefresh:x1},Oi=null,Cl=0;function ns(e){var t=Cl;return Cl+=1,Oi===null&&(Oi=[]),Rd(Oi,e,t)}function Rl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function as(e,t){throw t.$$typeof===A?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function E1(e){var t=e._init;return t(e._payload)}function z1(e){function t(T,z){if(e){var O=T.deletions;O===null?(T.deletions=[z],T.flags|=16):O.push(z)}}function n(T,z){if(!e)return null;for(;z!==null;)t(T,z),z=z.sibling;return null}function i(T){for(var z=new Map;T!==null;)T.key!==null?z.set(T.key,T):z.set(T.index,T),T=T.sibling;return z}function l(T,z){return T=$n(T,z),T.index=0,T.sibling=null,T}function s(T,z,O){return T.index=O,e?(O=T.alternate,O!==null?(O=O.index,O<z?(T.flags|=67108866,z):O):(T.flags|=67108866,z)):(T.flags|=1048576,z)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function m(T,z,O,$){return z===null||z.tag!==6?(z=Wo(O,T.mode,$),z.return=T,z):(z=l(z,O),z.return=T,z)}function b(T,z,O,$){var de=O.type;return de===j?Y(T,z,O.props.children,$,O.key):z!==null&&(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===le&&E1(de)===z.type)?(z=l(z,O.props),Rl(z,O),z.return=T,z):(z=Lr(O.type,O.key,O.props,null,T.mode,$),Rl(z,O),z.return=T,z)}function k(T,z,O,$){return z===null||z.tag!==4||z.stateNode.containerInfo!==O.containerInfo||z.stateNode.implementation!==O.implementation?(z=Io(O,T.mode,$),z.return=T,z):(z=l(z,O.children||[]),z.return=T,z)}function Y(T,z,O,$,de){return z===null||z.tag!==7?(z=Ba(O,T.mode,$,de),z.return=T,z):(z=l(z,O),z.return=T,z)}function K(T,z,O){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Wo(""+z,T.mode,O),z.return=T,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return O=Lr(z.type,z.key,z.props,null,T.mode,O),Rl(O,z),O.return=T,O;case X:return z=Io(z,T.mode,O),z.return=T,z;case le:var $=z._init;return z=$(z._payload),K(T,z,O)}if(ve(z)||P(z))return z=Ba(z,T.mode,O,null),z.return=T,z;if(typeof z.then=="function")return K(T,ns(z),O);if(z.$$typeof===Z)return K(T,Yr(T,z),O);as(T,z)}return null}function C(T,z,O,$){var de=z!==null?z.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return de!==null?null:m(T,z,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case v:return O.key===de?b(T,z,O,$):null;case X:return O.key===de?k(T,z,O,$):null;case le:return de=O._init,O=de(O._payload),C(T,z,O,$)}if(ve(O)||P(O))return de!==null?null:Y(T,z,O,$,null);if(typeof O.then=="function")return C(T,z,ns(O),$);if(O.$$typeof===Z)return C(T,z,Yr(T,O),$);as(T,O)}return null}function N(T,z,O,$,de){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return T=T.get(O)||null,m(z,T,""+$,de);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return T=T.get($.key===null?O:$.key)||null,b(z,T,$,de);case X:return T=T.get($.key===null?O:$.key)||null,k(z,T,$,de);case le:var Ne=$._init;return $=Ne($._payload),N(T,z,O,$,de)}if(ve($)||P($))return T=T.get(O)||null,Y(z,T,$,de,null);if(typeof $.then=="function")return N(T,z,O,ns($),de);if($.$$typeof===Z)return N(T,z,O,Yr(z,$),de);as(z,$)}return null}function Ae(T,z,O,$){for(var de=null,Ne=null,ge=z,ze=z=0,At=null;ge!==null&&ze<O.length;ze++){ge.index>ze?(At=ge,ge=null):At=ge.sibling;var Ve=C(T,ge,O[ze],$);if(Ve===null){ge===null&&(ge=At);break}e&&ge&&Ve.alternate===null&&t(T,ge),z=s(Ve,z,ze),Ne===null?de=Ve:Ne.sibling=Ve,Ne=Ve,ge=At}if(ze===O.length)return n(T,ge),Ye&&La(T,ze),de;if(ge===null){for(;ze<O.length;ze++)ge=K(T,O[ze],$),ge!==null&&(z=s(ge,z,ze),Ne===null?de=ge:Ne.sibling=ge,Ne=ge);return Ye&&La(T,ze),de}for(ge=i(ge);ze<O.length;ze++)At=N(ge,T,ze,O[ze],$),At!==null&&(e&&At.alternate!==null&&ge.delete(At.key===null?ze:At.key),z=s(At,z,ze),Ne===null?de=At:Ne.sibling=At,Ne=At);return e&&ge.forEach(function(Oa){return t(T,Oa)}),Ye&&La(T,ze),de}function we(T,z,O,$){if(O==null)throw Error(u(151));for(var de=null,Ne=null,ge=z,ze=z=0,At=null,Ve=O.next();ge!==null&&!Ve.done;ze++,Ve=O.next()){ge.index>ze?(At=ge,ge=null):At=ge.sibling;var Oa=C(T,ge,Ve.value,$);if(Oa===null){ge===null&&(ge=At);break}e&&ge&&Oa.alternate===null&&t(T,ge),z=s(Oa,z,ze),Ne===null?de=Oa:Ne.sibling=Oa,Ne=Oa,ge=At}if(Ve.done)return n(T,ge),Ye&&La(T,ze),de;if(ge===null){for(;!Ve.done;ze++,Ve=O.next())Ve=K(T,Ve.value,$),Ve!==null&&(z=s(Ve,z,ze),Ne===null?de=Ve:Ne.sibling=Ve,Ne=Ve);return Ye&&La(T,ze),de}for(ge=i(ge);!Ve.done;ze++,Ve=O.next())Ve=N(ge,T,ze,Ve.value,$),Ve!==null&&(e&&Ve.alternate!==null&&ge.delete(Ve.key===null?ze:Ve.key),z=s(Ve,z,ze),Ne===null?de=Ve:Ne.sibling=Ve,Ne=Ve);return e&&ge.forEach(function(Yx){return t(T,Yx)}),Ye&&La(T,ze),de}function We(T,z,O,$){if(typeof O=="object"&&O!==null&&O.type===j&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case v:e:{for(var de=O.key;z!==null;){if(z.key===de){if(de=O.type,de===j){if(z.tag===7){n(T,z.sibling),$=l(z,O.props.children),$.return=T,T=$;break e}}else if(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===le&&E1(de)===z.type){n(T,z.sibling),$=l(z,O.props),Rl($,O),$.return=T,T=$;break e}n(T,z);break}else t(T,z);z=z.sibling}O.type===j?($=Ba(O.props.children,T.mode,$,O.key),$.return=T,T=$):($=Lr(O.type,O.key,O.props,null,T.mode,$),Rl($,O),$.return=T,T=$)}return h(T);case X:e:{for(de=O.key;z!==null;){if(z.key===de)if(z.tag===4&&z.stateNode.containerInfo===O.containerInfo&&z.stateNode.implementation===O.implementation){n(T,z.sibling),$=l(z,O.children||[]),$.return=T,T=$;break e}else{n(T,z);break}else t(T,z);z=z.sibling}$=Io(O,T.mode,$),$.return=T,T=$}return h(T);case le:return de=O._init,O=de(O._payload),We(T,z,O,$)}if(ve(O))return Ae(T,z,O,$);if(P(O)){if(de=P(O),typeof de!="function")throw Error(u(150));return O=de.call(O),we(T,z,O,$)}if(typeof O.then=="function")return We(T,z,ns(O),$);if(O.$$typeof===Z)return We(T,z,Yr(T,O),$);as(T,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,z!==null&&z.tag===6?(n(T,z.sibling),$=l(z,O),$.return=T,T=$):(n(T,z),$=Wo(O,T.mode,$),$.return=T,T=$),h(T)):n(T,z)}return function(T,z,O,$){try{Cl=0;var de=We(T,z,O,$);return Oi=null,de}catch(ge){if(ge===El||ge===$r)throw ge;var Ne=tn(29,ge,null,T.mode);return Ne.lanes=$,Ne.return=T,Ne}finally{}}}var _i=z1(!0),T1=z1(!1),gn=G(null),Cn=null;function pa(e){var t=e.alternate;H(vt,vt.current&1),H(gn,e),Cn===null&&(t===null||Ti.current!==null||t.memoizedState!==null)&&(Cn=e)}function A1(e){if(e.tag===22){if(H(vt,vt.current),H(gn,e),Cn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Cn=e)}}else ma()}function ma(){H(vt,vt.current),H(gn,gn.current)}function Wn(e){ne(gn),Cn===e&&(Cn=null),ne(vt)}var vt=G(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||bc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ku(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cu={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=rn(),l=fa(i);l.payload=t,n!=null&&(l.callback=n),t=da(e,l,i),t!==null&&(sn(t,e,i),Tl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=rn(),l=fa(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=da(e,l,i),t!==null&&(sn(t,e,i),Tl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rn(),i=fa(n);i.tag=2,t!=null&&(i.callback=t),t=da(e,i,n),t!==null&&(sn(t,e,n),Tl(t,e,n))}};function j1(e,t,n,i,l,s,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,h):t.prototype&&t.prototype.isPureReactComponent?!ml(n,i)||!ml(l,s):!0}function D1(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cu.enqueueReplaceState(t,t.state,null)}function Za(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var ls=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function O1(e){ls(e)}function _1(e){console.error(e)}function k1(e){ls(e)}function rs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function C1(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ru(e,t,n){return n=fa(n),n.tag=3,n.payload={element:null},n.callback=function(){rs(e,t)},n}function R1(e){return e=fa(e),e.tag=3,e}function N1(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=i.value;e.payload=function(){return l(s)},e.callback=function(){C1(t,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){C1(t,n,i),typeof l!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function Yg(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&bl(t,n,l,!0),n=gn.current,n!==null){switch(n.tag){case 13:return Cn===null?ac():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===ou?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),lc(e,i,l)),!1;case 22:return n.flags|=65536,i===ou?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),lc(e,i,l)),!1}throw Error(u(435,n.tag))}return lc(e,i,l),ac(),!1}if(Ye)return t=gn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==tu&&(e=Error(u(422),{cause:i}),vl(dn(e,n)))):(i!==tu&&(t=Error(u(423),{cause:i}),vl(dn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=dn(i,n),l=Ru(e.stateNode,i,l),fu(e,l),st!==4&&(st=2)),!1;var s=Error(u(520),{cause:i});if(s=dn(s,n),ql===null?ql=[s]:ql.push(s),st!==4&&(st=2),t===null)return!0;i=dn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ru(n.stateNode,i,e),fu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=R1(l),N1(l,e,n,i),fu(n,l),!1}n=n.return}while(n!==null);return!1}var M1=Error(u(461)),zt=!1;function Ct(e,t,n,i){t.child=e===null?T1(t,null,n,i):_i(t,e.child,n,i)}function U1(e,t,n,i,l){n=n.render;var s=t.ref;if("ref"in i){var h={};for(var m in i)m!=="ref"&&(h[m]=i[m])}else h=i;return Ya(t),i=gu(e,t,n,h,s,l),m=xu(),e!==null&&!zt?(yu(e,t,l),In(e,t,l)):(Ye&&m&&Po(t),t.flags|=1,Ct(e,t,i,l),t.child)}function B1(e,t,n,i,l){if(e===null){var s=n.type;return typeof s=="function"&&!Fo(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,H1(e,t,s,i,l)):(e=Lr(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Vu(e,l)){var h=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(h,i)&&e.ref===t.ref)return In(e,t,l)}return t.flags|=1,e=$n(s,i),e.ref=t.ref,e.return=t,t.child=e}function H1(e,t,n,i,l){if(e!==null){var s=e.memoizedProps;if(ml(s,i)&&e.ref===t.ref)if(zt=!1,t.pendingProps=i=s,Vu(e,l))(e.flags&131072)!==0&&(zt=!0);else return t.lanes=e.lanes,In(e,t,l)}return Nu(e,t,n,i,l)}function L1(e,t,n){var i=t.pendingProps,l=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;t.childLanes=s&~i}else t.childLanes=0,t.child=null;return q1(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xr(t,s!==null?s.cachePool:null),s!==null?Hd(t,s):hu(),A1(t);else return t.lanes=t.childLanes=536870912,q1(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Xr(t,s.cachePool),Hd(t,s),ma(),t.memoizedState=null):(e!==null&&Xr(t,null),hu(),ma());return Ct(e,t,l,n),t.child}function q1(e,t,n,i){var l=su();return l=l===null?null:{parent:yt._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Xr(t,null),hu(),A1(t),e!==null&&bl(e,t,i,!0),null}function ss(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nu(e,t,n,i,l){return Ya(t),n=gu(e,t,n,i,void 0,l),i=xu(),e!==null&&!zt?(yu(e,t,l),In(e,t,l)):(Ye&&i&&Po(t),t.flags|=1,Ct(e,t,n,l),t.child)}function V1(e,t,n,i,l,s){return Ya(t),t.updateQueue=null,n=qd(t,i,n,l),Ld(e),i=xu(),e!==null&&!zt?(yu(e,t,s),In(e,t,s)):(Ye&&i&&Po(t),t.flags|=1,Ct(e,t,n,s),t.child)}function G1(e,t,n,i,l){if(Ya(t),t.stateNode===null){var s=bi,h=n.contextType;typeof h=="object"&&h!==null&&(s=Mt(h)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cu,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},uu(t),h=n.contextType,s.context=typeof h=="object"&&h!==null?Mt(h):bi,s.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(ku(t,n,h,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&Cu.enqueueReplaceState(s,s.state,null),jl(t,i,s,l),Al(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,b=Za(n,m);s.props=b;var k=s.context,Y=n.contextType;h=bi,typeof Y=="object"&&Y!==null&&(h=Mt(Y));var K=n.getDerivedStateFromProps;Y=typeof K=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,Y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||k!==h)&&D1(t,s,i,h),ca=!1;var C=t.memoizedState;s.state=C,jl(t,i,s,l),Al(),k=t.memoizedState,m||C!==k||ca?(typeof K=="function"&&(ku(t,n,K,i),k=t.memoizedState),(b=ca||j1(t,n,b,i,C,k,h))?(Y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=k),s.props=i,s.state=k,s.context=h,i=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,cu(e,t),h=t.memoizedProps,Y=Za(n,h),s.props=Y,K=t.pendingProps,C=s.context,k=n.contextType,b=bi,typeof k=="object"&&k!==null&&(b=Mt(k)),m=n.getDerivedStateFromProps,(k=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==K||C!==b)&&D1(t,s,i,b),ca=!1,C=t.memoizedState,s.state=C,jl(t,i,s,l),Al();var N=t.memoizedState;h!==K||C!==N||ca||e!==null&&e.dependencies!==null&&Gr(e.dependencies)?(typeof m=="function"&&(ku(t,n,m,i),N=t.memoizedState),(Y=ca||j1(t,n,Y,i,C,N,b)||e!==null&&e.dependencies!==null&&Gr(e.dependencies))?(k||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,N,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,N,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),s.props=i,s.state=N,s.context=b,i=Y):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,ss(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=_i(t,e.child,null,l),t.child=_i(t,null,n,l)):Ct(e,t,n,l),t.memoizedState=s.state,e=t.child):e=In(e,t,l),e}function Y1(e,t,n,i){return yl(),t.flags|=256,Ct(e,t,n,i),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(e){return{baseLanes:e,cachePool:_d()}}function Bu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xn),e}function X1(e,t,n){var i=t.pendingProps,l=!1,s=(t.flags&128)!==0,h;if((h=s)||(h=e!==null&&e.memoizedState===null?!1:(vt.current&2)!==0),h&&(l=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(l?pa(t):ma(),Ye){var m=rt,b;if(b=m){e:{for(b=m,m=kn;b.nodeType!==8;){if(!m){m=null;break e}if(b=zn(b.nextSibling),b===null){m=null;break e}}m=b}m!==null?(t.memoizedState={dehydrated:m,treeContext:Ha!==null?{id:Zn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},b=tn(18,null,null,0),b.stateNode=m,b.return=t,t.child=b,Lt=t,rt=null,b=!0):b=!1}b||Va(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return bc(m)?t.lanes=32:t.lanes=536870912,null;Wn(t)}return m=i.children,i=i.fallback,l?(ma(),l=t.mode,m=os({mode:"hidden",children:m},l),i=Ba(i,l,n,null),m.return=t,i.return=t,m.sibling=i,t.child=m,l=t.child,l.memoizedState=Uu(n),l.childLanes=Bu(e,h,n),t.memoizedState=Mu,i):(pa(t),Hu(t,m))}if(b=e.memoizedState,b!==null&&(m=b.dehydrated,m!==null)){if(s)t.flags&256?(pa(t),t.flags&=-257,t=Lu(e,t,n)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),l=i.fallback,m=t.mode,i=os({mode:"visible",children:i.children},m),l=Ba(l,m,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,_i(t,e.child,null,n),i=t.child,i.memoizedState=Uu(n),i.childLanes=Bu(e,h,n),t.memoizedState=Mu,t=l);else if(pa(t),bc(m)){if(h=m.nextSibling&&m.nextSibling.dataset,h)var k=h.dgst;h=k,i=Error(u(419)),i.stack="",i.digest=h,vl({value:i,source:null,stack:null}),t=Lu(e,t,n)}else if(zt||bl(e,t,n,!1),h=(n&e.childLanes)!==0,zt||h){if(h=Pe,h!==null&&(i=n&-n,i=(i&42)!==0?1:ll(i),i=(i&(h.suspendedLanes|n))!==0?0:i,i!==0&&i!==b.retryLane))throw b.retryLane=i,vi(e,i),sn(h,e,i),M1;m.data==="$?"||ac(),t=Lu(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,rt=zn(m.nextSibling),Lt=t,Ye=!0,qa=null,kn=!1,e!==null&&(pn[mn++]=Zn,pn[mn++]=Qn,pn[mn++]=Ha,Zn=e.id,Qn=e.overflow,Ha=t),t=Hu(t,i.children),t.flags|=4096);return t}return l?(ma(),l=i.fallback,m=t.mode,b=e.child,k=b.sibling,i=$n(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,k!==null?l=$n(k,l):(l=Ba(l,m,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,m=e.child.memoizedState,m===null?m=Uu(n):(b=m.cachePool,b!==null?(k=yt._currentValue,b=b.parent!==k?{parent:k,pool:k}:b):b=_d(),m={baseLanes:m.baseLanes|n,cachePool:b}),l.memoizedState=m,l.childLanes=Bu(e,h,n),t.memoizedState=Mu,i):(pa(t),n=e.child,e=n.sibling,n=$n(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Hu(e,t){return t=os({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function os(e,t){return e=tn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Lu(e,t,n){return _i(t,e.child,null,n),e=Hu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $1(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),au(e.return,t,n)}function qu(e,t,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=l)}function Z1(e,t,n){var i=t.pendingProps,l=i.revealOrder,s=i.tail;if(Ct(e,t,i.children,n),i=vt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$1(e,n,t);else if(e.tag===19)$1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(H(vt,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),qu(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&is(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}qu(t,!0,n,null,s);break;case"together":qu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(bl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=$n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gr(e)))}function Xg(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),ua(t,yt,e.memoizedState.cache),yl();break;case 27:case 5:at(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(pa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?X1(e,t,n):(pa(t),e=In(e,t,n),e!==null?e.sibling:null);pa(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(bl(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return Z1(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(vt,vt.current),i)break;return null;case 22:case 23:return t.lanes=0,L1(e,t,n);case 24:ua(t,yt,e.memoizedState.cache)}return In(e,t,n)}function Q1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)zt=!0;else{if(!Vu(e,n)&&(t.flags&128)===0)return zt=!1,Xg(e,t,n);zt=(e.flags&131072)!==0}else zt=!1,Ye&&(t.flags&1048576)!==0&&Ed(t,Vr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Fo(i)?(e=Za(i,e),t.tag=1,t=G1(null,t,i,e,n)):(t.tag=0,t=Nu(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===re){t.tag=11,t=U1(null,t,i,e,n);break e}else if(l===Q){t.tag=14,t=B1(null,t,i,e,n);break e}}throw t=ye(i)||i,Error(u(306,t,""))}}return t;case 0:return Nu(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Za(i,t.pendingProps),G1(e,t,i,l,n);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;l=s.element,cu(e,t),jl(t,i,null,n);var h=t.memoizedState;if(i=h.cache,ua(t,yt,i),i!==s.cache&&iu(t,[yt],n,!0),Al(),i=h.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Y1(e,t,i,n);break e}else if(i!==l){l=dn(Error(u(424)),t),vl(l),t=Y1(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rt=zn(e.firstChild),Lt=t,Ye=!0,qa=null,kn=!0,n=T1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(yl(),i===l){t=In(e,t,n);break e}Ct(e,t,i,n)}t=t.child}return t;case 26:return ss(e,t),e===null?(n=W0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ye||(n=t.type,e=t.pendingProps,i=ws(ue.current).createElement(n),i[Ke]=t,i[ot]=e,Nt(i,n,e),Et(i),t.stateNode=i):t.memoizedState=W0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return at(t),e===null&&Ye&&(i=t.stateNode=K0(t.type,t.pendingProps,ue.current),Lt=t,kn=!0,l=rt,za(t.type)?(Sc=l,rt=zn(i.firstChild)):rt=l),Ct(e,t,t.pendingProps.children,n),ss(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((l=i=rt)&&(i=yx(i,t.type,t.pendingProps,kn),i!==null?(t.stateNode=i,Lt=t,rt=zn(i.firstChild),kn=!1,l=!0):l=!1),l||Va(t)),at(t),l=t.type,s=t.pendingProps,h=e!==null?e.memoizedProps:null,i=s.children,xc(l,s)?i=null:h!==null&&xc(l,h)&&(t.flags|=32),t.memoizedState!==null&&(l=gu(e,t,Ug,null,null,n),Jl._currentValue=l),ss(e,t),Ct(e,t,i,n),t.child;case 6:return e===null&&Ye&&((e=n=rt)&&(n=vx(n,t.pendingProps,kn),n!==null?(t.stateNode=n,Lt=t,rt=null,e=!0):e=!1),e||Va(t)),null;case 13:return X1(e,t,n);case 4:return me(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_i(t,null,i,n):Ct(e,t,i,n),t.child;case 11:return U1(e,t,t.type,t.pendingProps,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ua(t,t.type,i.value),Ct(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ya(t),l=Mt(l),i=i(l),t.flags|=1,Ct(e,t,i,n),t.child;case 14:return B1(e,t,t.type,t.pendingProps,n);case 15:return H1(e,t,t.type,t.pendingProps,n);case 19:return Z1(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=os(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=$n(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return L1(e,t,n);case 24:return Ya(t),i=Mt(yt),e===null?(l=su(),l===null&&(l=Pe,s=lu(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:i,cache:l},uu(t),ua(t,yt,l)):((e.lanes&n)!==0&&(cu(e,t),jl(t,null,null,n),Al()),l=e.memoizedState,s=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ua(t,yt,i)):(i=s.cache,ua(t,yt,i),i!==l.cache&&iu(t,[yt],n,!0))),Ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Pn(e){e.flags|=4}function K1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nh(t)){if(t=gn.current,t!==null&&((He&4194048)===He?Cn!==null:(He&62914560)!==He&&(He&536870912)===0||t!==Cn))throw zl=ou,kd;e.flags|=8192}}function us(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Er():536870912,e.lanes|=t,Ni|=t)}function Nl(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $g(e,t,n){var i=t.pendingProps;switch(eu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Jn(yt),ke(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xl(t)?Pn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ad())),lt(t),null;case 26:return n=t.memoizedState,e===null?(Pn(t),n!==null?(lt(t),K1(t,n)):(lt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Pn(t),lt(t),K1(t,n)):(lt(t),t.flags&=-16777217):(e.memoizedProps!==i&&Pn(t),lt(t),t.flags&=-16777217),null;case 27:bt(t),n=ue.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return lt(t),null}e=I.current,xl(t)?zd(t):(e=K0(l,i,n),t.stateNode=e,Pn(t))}return lt(t),null;case 5:if(bt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return lt(t),null}if(e=I.current,xl(t))zd(t);else{switch(l=ws(ue.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[Ke]=t,e[ot]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Nt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Pn(t)}}return lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Pn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=ue.current,xl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=Lt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||V0(e.nodeValue,n)),e||Va(t)}else e=ws(e).createTextNode(i),e[Ke]=t,t.stateNode=e}return lt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=xl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Ke]=t}else yl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),l=!1}else l=Ad(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Wn(t),t):(Wn(t),null)}if(Wn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),us(t,t.updateQueue),lt(t),null;case 4:return ke(),e===null&&dc(t.stateNode.containerInfo),lt(t),null;case 10:return Jn(t.type),lt(t),null;case 19:if(ne(vt),l=t.memoizedState,l===null)return lt(t),null;if(i=(t.flags&128)!==0,s=l.rendering,s===null)if(i)Nl(l,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=is(e),s!==null){for(t.flags|=128,Nl(l,!1),e=s.updateQueue,t.updateQueue=e,us(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wd(n,e),n=n.sibling;return H(vt,vt.current&1|2),t.child}e=e.sibling}l.tail!==null&&it()>ds&&(t.flags|=128,i=!0,Nl(l,!1),t.lanes=4194304)}else{if(!i)if(e=is(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,us(t,e),Nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ye)return lt(t),null}else 2*it()-l.renderingStartTime>ds&&n!==536870912&&(t.flags|=128,i=!0,Nl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=it(),t.sibling=null,e=vt.current,H(vt,i?e&1|2:e&1),t):(lt(t),null);case 22:case 23:return Wn(t),pu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),n=t.updateQueue,n!==null&&us(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ne(Xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jn(yt),lt(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Zg(e,t){switch(eu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(yt),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bt(t),null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(vt),null;case 4:return ke(),null;case 10:return Jn(t.type),null;case 22:case 23:return Wn(t),pu(),e!==null&&ne(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jn(yt),null;case 25:return null;default:return null}}function J1(e,t){switch(eu(t),t.tag){case 3:Jn(yt),ke();break;case 26:case 27:case 5:bt(t);break;case 4:ke();break;case 13:Wn(t);break;case 19:ne(vt);break;case 10:Jn(t.type);break;case 22:case 23:Wn(t),pu(),e!==null&&ne(Xa);break;case 24:Jn(yt)}}function Ml(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var s=n.create,h=n.inst;i=s(),h.destroy=i}n=n.next}while(n!==l)}}catch(m){Ie(t,t.return,m)}}function ga(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var s=l.next;i=s;do{if((i.tag&e)===e){var h=i.inst,m=h.destroy;if(m!==void 0){h.destroy=void 0,l=t;var b=n,k=m;try{k()}catch(Y){Ie(l,b,Y)}}}i=i.next}while(i!==s)}}catch(Y){Ie(t,t.return,Y)}}function F1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Bd(t,n)}catch(i){Ie(e,e.return,i)}}}function W1(e,t,n){n.props=Za(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ie(e,t,i)}}function Ul(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Ie(e,t,l)}}function Rn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Ie(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ie(e,t,l)}else n.current=null}function I1(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Ie(e,e.return,l)}}function Gu(e,t,n){try{var i=e.stateNode;hx(i,e.type,n,t),i[ot]=t}catch(l){Ie(e,e.return,l)}}function P1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||P1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(i!==4&&(i===27&&za(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xu(e,t,n),e=e.sibling;e!==null;)Xu(e,t,n),e=e.sibling}function cs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&za(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function e0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Nt(t,i,n),t[Ke]=e,t[ot]=n}catch(s){Ie(e,e.return,s)}}var ea=!1,ct=!1,$u=!1,t0=typeof WeakSet=="function"?WeakSet:Set,Tt=null;function Qg(e,t){if(e=e.containerInfo,mc=Ds,e=dd(e),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var h=0,m=-1,b=-1,k=0,Y=0,K=e,C=null;t:for(;;){for(var N;K!==n||l!==0&&K.nodeType!==3||(m=h+l),K!==s||i!==0&&K.nodeType!==3||(b=h+i),K.nodeType===3&&(h+=K.nodeValue.length),(N=K.firstChild)!==null;)C=K,K=N;for(;;){if(K===e)break t;if(C===n&&++k===l&&(m=h),C===s&&++Y===i&&(b=h),(N=K.nextSibling)!==null)break;K=C,C=K.parentNode}K=N}n=m===-1||b===-1?null:{start:m,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(gc={focusedElem:e,selectionRange:n},Ds=!1,Tt=t;Tt!==null;)if(t=Tt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Tt=e;else for(;Tt!==null;){switch(t=Tt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var Ae=Za(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(Ae,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(we){Ie(n,n.return,we)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Tt=e;break}Tt=t.return}}function n0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n),i&4&&Ml(5,n);break;case 1:if(xa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Ie(n,n.return,h)}else{var l=Za(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Ie(n,n.return,h)}}i&64&&F1(n),i&512&&Ul(n,n.return);break;case 3:if(xa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Bd(e,t)}catch(h){Ie(n,n.return,h)}}break;case 27:t===null&&i&4&&e0(n);case 26:case 5:xa(e,n),t===null&&i&4&&I1(n),i&512&&Ul(n,n.return);break;case 12:xa(e,n);break;case 13:xa(e,n),i&4&&l0(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nx.bind(null,n),bx(e,n))));break;case 22:if(i=n.memoizedState!==null||ea,!i){t=t!==null&&t.memoizedState!==null||ct,l=ea;var s=ct;ea=i,(ct=t)&&!s?ya(e,n,(n.subtreeFlags&8772)!==0):xa(e,n),ea=l,ct=s}break;case 30:break;default:xa(e,n)}}function a0(e){var t=e.alternate;t!==null&&(e.alternate=null,a0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,Zt=!1;function ta(e,t,n){for(n=n.child;n!==null;)i0(e,t,n),n=n.sibling}function i0(e,t,n){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(ce,n)}catch{}switch(n.tag){case 26:ct||Rn(n,t),ta(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ct||Rn(n,t);var i=tt,l=Zt;za(n.type)&&(tt=n.stateNode,Zt=!1),ta(e,t,n),$l(n.stateNode),tt=i,Zt=l;break;case 5:ct||Rn(n,t);case 6:if(i=tt,l=Zt,tt=null,ta(e,t,n),tt=i,Zt=l,tt!==null)if(Zt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(n.stateNode)}catch(s){Ie(n,t,s)}else try{tt.removeChild(n.stateNode)}catch(s){Ie(n,t,s)}break;case 18:tt!==null&&(Zt?(e=tt,Z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Pl(e)):Z0(tt,n.stateNode));break;case 4:i=tt,l=Zt,tt=n.stateNode.containerInfo,Zt=!0,ta(e,t,n),tt=i,Zt=l;break;case 0:case 11:case 14:case 15:ct||ga(2,n,t),ct||ga(4,n,t),ta(e,t,n);break;case 1:ct||(Rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&W1(n,t,i)),ta(e,t,n);break;case 21:ta(e,t,n);break;case 22:ct=(i=ct)||n.memoizedState!==null,ta(e,t,n),ct=i;break;default:ta(e,t,n)}}function l0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pl(e)}catch(n){Ie(t,t.return,n)}}function Kg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new t0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new t0),t;default:throw Error(u(435,e.tag))}}function Zu(e,t){var n=Kg(e);t.forEach(function(i){var l=ax.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function nn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],s=e,h=t,m=h;e:for(;m!==null;){switch(m.tag){case 27:if(za(m.type)){tt=m.stateNode,Zt=!1;break e}break;case 5:tt=m.stateNode,Zt=!1;break e;case 3:case 4:tt=m.stateNode.containerInfo,Zt=!0;break e}m=m.return}if(tt===null)throw Error(u(160));i0(s,h,l),tt=null,Zt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)r0(t,e),t=t.sibling}var En=null;function r0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nn(t,e),an(e),i&4&&(ga(3,e,e.return),Ml(3,e),ga(5,e,e.return));break;case 1:nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),i&64&&ea&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=En;if(nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":s=l.getElementsByTagName("title")[0],(!s||s[rl]||s[Ke]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(i),l.head.insertBefore(s,l.querySelector("head > title"))),Nt(s,i,n),s[Ke]=e,Et(s),i=s;break e;case"link":var h=eh("link","href",l).get(i+(n.href||""));if(h){for(var m=0;m<h.length;m++)if(s=h[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(m,1);break t}}s=l.createElement(i),Nt(s,i,n),l.head.appendChild(s);break;case"meta":if(h=eh("meta","content",l).get(i+(n.content||""))){for(m=0;m<h.length;m++)if(s=h[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(m,1);break t}}s=l.createElement(i),Nt(s,i,n),l.head.appendChild(s);break;default:throw Error(u(468,i))}s[Ke]=e,Et(s),i=s}e.stateNode=i}else th(l,e.type,e.stateNode);else e.stateNode=P0(l,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?th(l,e.type,e.stateNode):P0(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gu(e,e.memoizedProps,n.memoizedProps)}break;case 27:nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),n!==null&&i&4&&Gu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),e.flags&32){l=e.stateNode;try{di(l,"")}catch(N){Ie(e,e.return,N)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Gu(e,l,n!==null?n.memoizedProps:l)),i&1024&&($u=!0);break;case 6:if(nn(t,e),an(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(N){Ie(e,e.return,N)}}break;case 3:if(Ts=null,l=En,En=Es(t.containerInfo),nn(t,e),En=l,an(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(t.containerInfo)}catch(N){Ie(e,e.return,N)}$u&&($u=!1,s0(e));break;case 4:i=En,En=Es(e.stateNode.containerInfo),nn(t,e),an(e),En=i;break;case 12:nn(t,e),an(e);break;case 13:nn(t,e),an(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Iu=it()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Zu(e,i)));break;case 22:l=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,k=ea,Y=ct;if(ea=k||l,ct=Y||b,nn(t,e),ct=Y,ea=k,an(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||b||ea||ct||Qa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(s=b.stateNode,l)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{m=b.stateNode;var K=b.memoizedProps.style,C=K!=null&&K.hasOwnProperty("display")?K.display:null;m.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(N){Ie(b,b.return,N)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(N){Ie(b,b.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Zu(e,n))));break;case 19:nn(t,e),an(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Zu(e,i)));break;case 30:break;case 21:break;default:nn(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(P1(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,s=Yu(e);cs(e,s,l);break;case 5:var h=n.stateNode;n.flags&32&&(di(h,""),n.flags&=-33);var m=Yu(e);cs(e,m,h);break;case 3:case 4:var b=n.stateNode.containerInfo,k=Yu(e);Xu(e,k,b);break;default:throw Error(u(161))}}catch(Y){Ie(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;s0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)n0(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Qa(t);break;case 1:Rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&W1(t,t.return,n),Qa(t);break;case 27:$l(t.stateNode);case 26:case 5:Rn(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function ya(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,s=t,h=s.flags;switch(s.tag){case 0:case 11:case 15:ya(l,s,n),Ml(4,s);break;case 1:if(ya(l,s,n),i=s,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(k){Ie(i,i.return,k)}if(i=s,l=i.updateQueue,l!==null){var m=i.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)Ud(b[l],m)}catch(k){Ie(i,i.return,k)}}n&&h&64&&F1(s),Ul(s,s.return);break;case 27:e0(s);case 26:case 5:ya(l,s,n),n&&i===null&&h&4&&I1(s),Ul(s,s.return);break;case 12:ya(l,s,n);break;case 13:ya(l,s,n),n&&h&4&&l0(l,s);break;case 22:s.memoizedState===null&&ya(l,s,n),Ul(s,s.return);break;case 30:break;default:ya(l,s,n)}t=t.sibling}}function Qu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sl(n))}function Ku(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e))}function Nn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)o0(e,t,n,i),t=t.sibling}function o0(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Nn(e,t,n,i),l&2048&&Ml(9,t);break;case 1:Nn(e,t,n,i);break;case 3:Nn(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e)));break;case 12:if(l&2048){Nn(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,h=s.id,m=s.onPostCommit;typeof m=="function"&&m(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Ie(t,t.return,b)}}else Nn(e,t,n,i);break;case 13:Nn(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,h=t.alternate,t.memoizedState!==null?s._visibility&2?Nn(e,t,n,i):Bl(e,t):s._visibility&2?Nn(e,t,n,i):(s._visibility|=2,ki(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Qu(h,t);break;case 24:Nn(e,t,n,i),l&2048&&Ku(t.alternate,t);break;default:Nn(e,t,n,i)}}function ki(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,h=t,m=n,b=i,k=h.flags;switch(h.tag){case 0:case 11:case 15:ki(s,h,m,b,l),Ml(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?ki(s,h,m,b,l):Bl(s,h):(Y._visibility|=2,ki(s,h,m,b,l)),l&&k&2048&&Qu(h.alternate,h);break;case 24:ki(s,h,m,b,l),l&&k&2048&&Ku(h.alternate,h);break;default:ki(s,h,m,b,l)}t=t.sibling}}function Bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:Bl(n,i),l&2048&&Qu(i.alternate,i);break;case 24:Bl(n,i),l&2048&&Ku(i.alternate,i);break;default:Bl(n,i)}t=t.sibling}}var Hl=8192;function Ci(e){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)u0(e),e=e.sibling}function u0(e){switch(e.tag){case 26:Ci(e),e.flags&Hl&&e.memoizedState!==null&&Rx(En,e.memoizedState,e.memoizedProps);break;case 5:Ci(e);break;case 3:case 4:var t=En;En=Es(e.stateNode.containerInfo),Ci(e),En=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Hl,Hl=16777216,Ci(e),Hl=t):Ci(e));break;default:Ci(e)}}function c0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tt=i,d0(i,e)}c0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)f0(e),e=e.sibling}function f0(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&ga(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fs(e)):Ll(e);break;default:Ll(e)}}function fs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tt=i,d0(i,e)}c0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),fs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,fs(t));break;default:fs(t)}e=e.sibling}}function d0(e,t){for(;Tt!==null;){var n=Tt;switch(n.tag){case 0:case 11:case 15:ga(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Tt=i;else e:for(n=e;Tt!==null;){i=Tt;var l=i.sibling,s=i.return;if(a0(i),i===n){Tt=null;break e}if(l!==null){l.return=s,Tt=l;break e}Tt=s}}}var Jg={getCacheForType:function(e){var t=Mt(yt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Fg=typeof WeakMap=="function"?WeakMap:Map,Ze=0,Pe=null,Me=null,He=0,Qe=0,ln=null,va=!1,Ri=!1,Ju=!1,na=0,st=0,ba=0,Ka=0,Fu=0,xn=0,Ni=0,ql=null,Qt=null,Wu=!1,Iu=0,ds=1/0,hs=null,Sa=null,Rt=0,wa=null,Mi=null,Ui=0,Pu=0,ec=null,h0=null,Vl=0,tc=null;function rn(){if((Ze&2)!==0&&He!==0)return He&-He;if(_.T!==null){var e=Ei;return e!==0?e:oc()}return zr()}function p0(){xn===0&&(xn=(He&536870912)===0||Ye?al():536870912);var e=gn.current;return e!==null&&(e.flags|=32),xn}function sn(e,t,n){(e===Pe&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Bi(e,0),Ea(e,He,xn,!1)),Gt(e,n),((Ze&2)===0||e!==Pe)&&(e===Pe&&((Ze&2)===0&&(Ka|=n),st===4&&Ea(e,He,xn,!1)),Mn(e))}function m0(e,t,n){if((Ze&6)!==0)throw Error(u(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||qn(e,t),l=i?Pg(e,t):ic(e,t,!0),s=i;do{if(l===0){Ri&&!i&&Ea(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Wg(n)){l=ic(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var m=e;l=ql;var b=m.current.memoizedState.isDehydrated;if(b&&(Bi(m,h).flags|=256),h=ic(m,h,!1),h!==2){if(Ju&&!b){m.errorRecoveryDisabledLanes|=s,Ka|=s,l=4;break e}s=Qt,Qt=l,s!==null&&(Qt===null?Qt=s:Qt.push.apply(Qt,s))}l=h}if(s=!1,l!==2)continue}}if(l===1){Bi(e,0),Ea(e,t,0,!0);break}e:{switch(i=e,s=l,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ea(i,t,xn,!va);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Iu+300-it(),10<l)){if(Ea(i,t,xn,!va),wt(i,0,!0)!==0)break e;i.timeoutHandle=X0(g0.bind(null,i,n,Qt,hs,Wu,t,xn,Ka,Ni,va,s,2,-0,0),l);break e}g0(i,n,Qt,hs,Wu,t,xn,Ka,Ni,va,s,0,-0,0)}}break}while(!0);Mn(e)}function g0(e,t,n,i,l,s,h,m,b,k,Y,K,C,N){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:Cx},u0(t),K=Nx(),K!==null)){e.cancelPendingCommit=K(E0.bind(null,e,t,s,n,i,l,h,m,b,Y,1,C,N)),Ea(e,s,h,!k);return}E0(e,t,s,n,i,l,h,m,b)}function Wg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],s=l.getSnapshot;l=l.value;try{if(!en(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,n,i){t&=~Fu,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var s=31-$e(l),h=1<<s;i[s]=-1,l&=~h}n!==0&&il(e,n,t)}function ps(){return(Ze&6)===0?(Gl(0),!1):!0}function nc(){if(Me!==null){if(Qe===0)var e=Me.return;else e=Me,Kn=Ga=null,vu(e),Oi=null,Cl=0,e=Me;for(;e!==null;)J1(e.alternate,e),e=e.return;Me=null}}function Bi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,mx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),nc(),Pe=e,Me=n=$n(e.current,null),He=t,Qe=0,ln=null,va=!1,Ri=qn(e,t),Ju=!1,Ni=xn=Fu=Ka=ba=st=0,Qt=ql=null,Wu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-$e(i),s=1<<l;t|=e[l],i&=~s}return na=t,Ur(),n}function x0(e,t){Ce=null,_.H=ts,t===El||t===$r?(t=Nd(),Qe=3):t===kd?(t=Nd(),Qe=4):Qe=t===M1?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ln=t,Me===null&&(st=1,rs(e,dn(t,e.current)))}function y0(){var e=_.H;return _.H=ts,e===null?ts:e}function v0(){var e=_.A;return _.A=Jg,e}function ac(){st=4,va||(He&4194048)!==He&&gn.current!==null||(Ri=!0),(ba&134217727)===0&&(Ka&134217727)===0||Pe===null||Ea(Pe,He,xn,!1)}function ic(e,t,n){var i=Ze;Ze|=2;var l=y0(),s=v0();(Pe!==e||He!==t)&&(hs=null,Bi(e,t)),t=!1;var h=st;e:do try{if(Qe!==0&&Me!==null){var m=Me,b=ln;switch(Qe){case 8:nc(),h=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(t=!0);var k=Qe;if(Qe=0,ln=null,Hi(e,m,b,k),n&&Ri){h=0;break e}break;default:k=Qe,Qe=0,ln=null,Hi(e,m,b,k)}}Ig(),h=st;break}catch(Y){x0(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Kn=Ga=null,Ze=i,_.H=l,_.A=s,Me===null&&(Pe=null,He=0,Ur()),h}function Ig(){for(;Me!==null;)b0(Me)}function Pg(e,t){var n=Ze;Ze|=2;var i=y0(),l=v0();Pe!==e||He!==t?(hs=null,ds=it()+500,Bi(e,t)):Ri=qn(e,t);e:do try{if(Qe!==0&&Me!==null){t=Me;var s=ln;t:switch(Qe){case 1:Qe=0,ln=null,Hi(e,t,s,1);break;case 2:case 9:if(Cd(s)){Qe=0,ln=null,S0(t);break}t=function(){Qe!==2&&Qe!==9||Pe!==e||(Qe=7),Mn(e)},s.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:Cd(s)?(Qe=0,ln=null,S0(t)):(Qe=0,ln=null,Hi(e,t,s,7));break;case 5:var h=null;switch(Me.tag){case 26:h=Me.memoizedState;case 5:case 27:var m=Me;if(!h||nh(h)){Qe=0,ln=null;var b=m.sibling;if(b!==null)Me=b;else{var k=m.return;k!==null?(Me=k,ms(k)):Me=null}break t}}Qe=0,ln=null,Hi(e,t,s,5);break;case 6:Qe=0,ln=null,Hi(e,t,s,6);break;case 8:nc(),st=6;break e;default:throw Error(u(462))}}ex();break}catch(Y){x0(e,Y)}while(!0);return Kn=Ga=null,_.H=i,_.A=l,Ze=n,Me!==null?0:(Pe=null,He=0,Ur(),st)}function ex(){for(;Me!==null&&!qe();)b0(Me)}function b0(e){var t=Q1(e.alternate,e,na);e.memoizedProps=e.pendingProps,t===null?ms(e):Me=t}function S0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=V1(n,t,t.pendingProps,t.type,void 0,He);break;case 11:t=V1(n,t,t.pendingProps,t.type.render,t.ref,He);break;case 5:vu(t);default:J1(n,t),t=Me=wd(t,na),t=Q1(n,t,na)}e.memoizedProps=e.pendingProps,t===null?ms(e):Me=t}function Hi(e,t,n,i){Kn=Ga=null,vu(t),Oi=null,Cl=0;var l=t.return;try{if(Yg(e,l,t,n,He)){st=1,rs(e,dn(n,e.current)),Me=null;return}}catch(s){if(l!==null)throw Me=l,s;st=1,rs(e,dn(n,e.current)),Me=null;return}t.flags&32768?(Ye||i===1?e=!0:Ri||(He&536870912)!==0?e=!1:(va=e=!0,(i===2||i===9||i===3||i===6)&&(i=gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),w0(t,e)):ms(t)}function ms(e){var t=e;do{if((t.flags&32768)!==0){w0(t,va);return}e=t.return;var n=$g(t.alternate,t,na);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);st===0&&(st=5)}function w0(e,t){do{var n=Zg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);st=6,Me=null}function E0(e,t,n,i,l,s,h,m,b){e.cancelPendingCommit=null;do gs();while(Rt!==0);if((Ze&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Ko,un(e,n,s,h,m,b),e===Pe&&(Me=Pe=null,He=0),Mi=t,wa=e,Ui=n,Pu=s,ec=l,h0=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ix(D,function(){return D0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,l=F.p,F.p=2,h=Ze,Ze|=4;try{Qg(e,t,n)}finally{Ze=h,F.p=l,_.T=i}}Rt=1,z0(),T0(),A0()}}function z0(){if(Rt===1){Rt=0;var e=wa,t=Mi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var i=F.p;F.p=2;var l=Ze;Ze|=4;try{r0(t,e);var s=gc,h=dd(e.containerInfo),m=s.focusedElem,b=s.selectionRange;if(h!==m&&m&&m.ownerDocument&&fd(m.ownerDocument.documentElement,m)){if(b!==null&&Yo(m)){var k=b.start,Y=b.end;if(Y===void 0&&(Y=k),"selectionStart"in m)m.selectionStart=k,m.selectionEnd=Math.min(Y,m.value.length);else{var K=m.ownerDocument||document,C=K&&K.defaultView||window;if(C.getSelection){var N=C.getSelection(),Ae=m.textContent.length,we=Math.min(b.start,Ae),We=b.end===void 0?we:Math.min(b.end,Ae);!N.extend&&we>We&&(h=We,We=we,we=h);var T=cd(m,we),z=cd(m,We);if(T&&z&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==z.node||N.focusOffset!==z.offset)){var O=K.createRange();O.setStart(T.node,T.offset),N.removeAllRanges(),we>We?(N.addRange(O),N.extend(z.node,z.offset)):(O.setEnd(z.node,z.offset),N.addRange(O))}}}}for(K=[],N=m;N=N.parentNode;)N.nodeType===1&&K.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<K.length;m++){var $=K[m];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Ds=!!mc,gc=mc=null}finally{Ze=l,F.p=i,_.T=n}}e.current=t,Rt=2}}function T0(){if(Rt===2){Rt=0;var e=wa,t=Mi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var i=F.p;F.p=2;var l=Ze;Ze|=4;try{n0(e,t.alternate,t)}finally{Ze=l,F.p=i,_.T=n}}Rt=3}}function A0(){if(Rt===4||Rt===3){Rt=0,xt();var e=wa,t=Mi,n=Ui,i=h0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Rt=5:(Rt=0,Mi=wa=null,j0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Sa=null),Vn(n),t=t.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(ce,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=_.T,l=F.p,F.p=2,_.T=null;try{for(var s=e.onRecoverableError,h=0;h<i.length;h++){var m=i[h];s(m.value,{componentStack:m.stack})}}finally{_.T=t,F.p=l}}(Ui&3)!==0&&gs(),Mn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===tc?Vl++:(Vl=0,tc=e):Vl=0,Gl(0)}}function j0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sl(t)))}function gs(e){return z0(),T0(),A0(),D0()}function D0(){if(Rt!==5)return!1;var e=wa,t=Pu;Pu=0;var n=Vn(Ui),i=_.T,l=F.p;try{F.p=32>n?32:n,_.T=null,n=ec,ec=null;var s=wa,h=Ui;if(Rt=0,Mi=wa=null,Ui=0,(Ze&6)!==0)throw Error(u(331));var m=Ze;if(Ze|=4,f0(s.current),o0(s,s.current,h,n),Ze=m,Gl(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(ce,s)}catch{}return!0}finally{F.p=l,_.T=i,j0(e,t)}}function O0(e,t,n){t=dn(n,t),t=Ru(e.stateNode,t,2),e=da(e,t,2),e!==null&&(Gt(e,2),Mn(e))}function Ie(e,t,n){if(e.tag===3)O0(e,e,n);else for(;t!==null;){if(t.tag===3){O0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))){e=dn(n,e),n=R1(2),i=da(t,n,2),i!==null&&(N1(n,i,t,e),Gt(i,2),Mn(i));break}}t=t.return}}function lc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Fg;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Ju=!0,l.add(n),e=tx.bind(null,e,t,n),t.then(e,e))}function tx(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(He&n)===n&&(st===4||st===3&&(He&62914560)===He&&300>it()-Iu?(Ze&2)===0&&Bi(e,0):Fu|=n,Ni===He&&(Ni=0)),Mn(e)}function _0(e,t){t===0&&(t=Er()),e=vi(e,t),e!==null&&(Gt(e,t),Mn(e))}function nx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_0(e,n)}function ax(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),_0(e,n)}function ix(e,t){return be(e,t)}var xs=null,Li=null,rc=!1,ys=!1,sc=!1,Ja=0;function Mn(e){e!==Li&&e.next===null&&(Li===null?xs=Li=e:Li=Li.next=e),ys=!0,rc||(rc=!0,rx())}function Gl(e,t){if(!sc&&ys){sc=!0;do for(var n=!1,i=xs;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var s=0;else{var h=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-$e(42|e)+1)-1,s&=l&~(h&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,N0(i,s))}else s=He,s=wt(i,i===Pe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||qn(i,s)||(n=!0,N0(i,s));i=i.next}while(n);sc=!1}}function lx(){k0()}function k0(){ys=rc=!1;var e=0;Ja!==0&&(px()&&(e=Ja),Ja=0);for(var t=it(),n=null,i=xs;i!==null;){var l=i.next,s=C0(i,t);s===0?(i.next=null,n===null?xs=l:n.next=l,l===null&&(Li=n)):(n=i,(e!==0||(s&3)!==0)&&(ys=!0)),i=l}Gl(e)}function C0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var h=31-$e(s),m=1<<h,b=l[h];b===-1?((m&n)===0||(m&i)!==0)&&(l[h]=ii(m,t)):b<=t&&(e.expiredLanes|=m),s&=~m}if(t=Pe,n=He,n=wt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Be(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||qn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Be(i),Vn(n)){case 2:case 8:n=S;break;case 32:n=D;break;case 268435456:n=ie;break;default:n=D}return i=R0.bind(null,e),n=be(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Be(i),e.callbackPriority=2,e.callbackNode=null,2}function R0(e,t){if(Rt!==0&&Rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gs()&&e.callbackNode!==n)return null;var i=He;return i=wt(e,e===Pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(m0(e,i,t),C0(e,it()),e.callbackNode!=null&&e.callbackNode===n?R0.bind(null,e):null)}function N0(e,t){if(gs())return null;m0(e,t,!0)}function rx(){gx(function(){(Ze&6)!==0?be(Pt,lx):k0()})}function oc(){return Ja===0&&(Ja=al()),Ja}function M0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Or(""+e)}function U0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function sx(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var s=M0((l[ot]||null).action),h=i.submitter;h&&(t=(t=h[ot]||null)?M0(t.formAction):h.getAttribute("formAction"),t!==null&&(s=t,h=null));var m=new Rr("action","action",null,i,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ja!==0){var b=h?U0(l,h):new FormData(l);Du(n,{pending:!0,data:b,method:l.method,action:s},null,b)}}else typeof s=="function"&&(m.preventDefault(),b=h?U0(l,h):new FormData(l),Du(n,{pending:!0,data:b,method:l.method,action:s},s,b))},currentTarget:l}]})}}for(var uc=0;uc<Qo.length;uc++){var cc=Qo[uc],ox=cc.toLowerCase(),ux=cc[0].toUpperCase()+cc.slice(1);wn(ox,"on"+ux)}wn(md,"onAnimationEnd"),wn(gd,"onAnimationIteration"),wn(xd,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Ag,"onTransitionRun"),wn(jg,"onTransitionStart"),wn(Dg,"onTransitionCancel"),wn(yd,"onTransitionEnd"),ui("onMouseEnter",["mouseout","mouseover"]),ui("onMouseLeave",["mouseout","mouseover"]),ui("onPointerEnter",["pointerout","pointerover"]),ui("onPointerLeave",["pointerout","pointerover"]),Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function B0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var h=i.length-1;0<=h;h--){var m=i[h],b=m.instance,k=m.currentTarget;if(m=m.listener,b!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=k;try{s(l)}catch(Y){ls(Y)}l.currentTarget=null,s=b}else for(h=0;h<i.length;h++){if(m=i[h],b=m.instance,k=m.currentTarget,m=m.listener,b!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=k;try{s(l)}catch(Y){ls(Y)}l.currentTarget=null,s=b}}}}function Ue(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var i=e+"__bubble";n.has(i)||(H0(t,e,2,!1),n.add(i))}function fc(e,t,n){var i=0;t&&(i|=4),H0(n,e,i,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function dc(e){if(!e[vs]){e[vs]=!0,kf.forEach(function(n){n!=="selectionchange"&&(cx.has(n)||fc(n,!1,e),fc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,fc("selectionchange",!1,t))}}function H0(e,t,n,i){switch(oh(t)){case 2:var l=Bx;break;case 8:l=Hx;break;default:l=Ac}n=l.bind(null,t,n,e),l=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function hc(e,t,n,i,l){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var m=i.stateNode.containerInfo;if(m===l)break;if(h===4)for(h=i.return;h!==null;){var b=h.tag;if((b===3||b===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;m!==null;){if(h=ri(m),h===null)return;if(b=h.tag,b===5||b===6||b===26||b===27){i=s=h;continue e}m=m.parentNode}}i=i.return}$f(function(){var k=s,Y=Co(n),K=[];e:{var C=vd.get(e);if(C!==void 0){var N=Rr,Ae=e;switch(e){case"keypress":if(kr(n)===0)break e;case"keydown":case"keyup":N=ig;break;case"focusin":Ae="focus",N=Ho;break;case"focusout":Ae="blur",N=Ho;break;case"beforeblur":case"afterblur":N=Ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=sg;break;case md:case gd:case xd:N=Jm;break;case yd:N=ug;break;case"scroll":case"scrollend":N=Xm;break;case"wheel":N=fg;break;case"copy":case"cut":case"paste":N=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Ff;break;case"toggle":case"beforetoggle":N=hg}var we=(t&4)!==0,We=!we&&(e==="scroll"||e==="scrollend"),T=we?C!==null?C+"Capture":null:C;we=[];for(var z=k,O;z!==null;){var $=z;if(O=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||O===null||T===null||($=ol(z,T),$!=null&&we.push(Xl(z,$,O))),We)break;z=z.return}0<we.length&&(C=new N(C,Ae,null,n,Y),K.push({event:C,listeners:we}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",C&&n!==ko&&(Ae=n.relatedTarget||n.fromElement)&&(ri(Ae)||Ae[Gn]))break e;if((N||C)&&(C=Y.window===Y?Y:(C=Y.ownerDocument)?C.defaultView||C.parentWindow:window,N?(Ae=n.relatedTarget||n.toElement,N=k,Ae=Ae?ri(Ae):null,Ae!==null&&(We=d(Ae),we=Ae.tag,Ae!==We||we!==5&&we!==27&&we!==6)&&(Ae=null)):(N=null,Ae=k),N!==Ae)){if(we=Kf,$="onMouseLeave",T="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(we=Ff,$="onPointerLeave",T="onPointerEnter",z="pointer"),We=N==null?C:sl(N),O=Ae==null?C:sl(Ae),C=new we($,z+"leave",N,n,Y),C.target=We,C.relatedTarget=O,$=null,ri(Y)===k&&(we=new we(T,z+"enter",Ae,n,Y),we.target=O,we.relatedTarget=We,$=we),We=$,N&&Ae)t:{for(we=N,T=Ae,z=0,O=we;O;O=qi(O))z++;for(O=0,$=T;$;$=qi($))O++;for(;0<z-O;)we=qi(we),z--;for(;0<O-z;)T=qi(T),O--;for(;z--;){if(we===T||T!==null&&we===T.alternate)break t;we=qi(we),T=qi(T)}we=null}else we=null;N!==null&&L0(K,C,N,we,!1),Ae!==null&&We!==null&&L0(K,We,Ae,we,!0)}}e:{if(C=k?sl(k):window,N=C.nodeName&&C.nodeName.toLowerCase(),N==="select"||N==="input"&&C.type==="file")var de=id;else if(nd(C))if(ld)de=Eg;else{de=Sg;var Ne=bg}else N=C.nodeName,!N||N.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?k&&_o(k.elementType)&&(de=id):de=wg;if(de&&(de=de(e,k))){ad(K,de,n,Y);break e}Ne&&Ne(e,C,k),e==="focusout"&&k&&C.type==="number"&&k.memoizedProps.value!=null&&Oo(C,"number",C.value)}switch(Ne=k?sl(k):window,e){case"focusin":(nd(Ne)||Ne.contentEditable==="true")&&(gi=Ne,Xo=k,gl=null);break;case"focusout":gl=Xo=gi=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,hd(K,n,Y);break;case"selectionchange":if(Tg)break;case"keydown":case"keyup":hd(K,n,Y)}var ge;if(qo)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else mi?ed(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(Wf&&n.locale!=="ko"&&(mi||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&mi&&(ge=Zf()):(oa=Y,Mo="value"in oa?oa.value:oa.textContent,mi=!0)),Ne=bs(k,ze),0<Ne.length&&(ze=new Jf(ze,e,null,n,Y),K.push({event:ze,listeners:Ne}),ge?ze.data=ge:(ge=td(n),ge!==null&&(ze.data=ge)))),(ge=mg?gg(e,n):xg(e,n))&&(ze=bs(k,"onBeforeInput"),0<ze.length&&(Ne=new Jf("onBeforeInput","beforeinput",null,n,Y),K.push({event:Ne,listeners:ze}),Ne.data=ge)),sx(K,e,k,n,Y)}B0(K,t)})}function Xl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bs(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=ol(e,n),l!=null&&i.unshift(Xl(e,l,s)),l=ol(e,t),l!=null&&i.push(Xl(e,l,s))),e.tag===3)return i;e=e.return}return[]}function qi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function L0(e,t,n,i,l){for(var s=t._reactName,h=[];n!==null&&n!==i;){var m=n,b=m.alternate,k=m.stateNode;if(m=m.tag,b!==null&&b===i)break;m!==5&&m!==26&&m!==27||k===null||(b=k,l?(k=ol(n,s),k!=null&&h.unshift(Xl(n,k,b))):l||(k=ol(n,s),k!=null&&h.push(Xl(n,k,b)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var fx=/\r\n?/g,dx=/\u0000|\uFFFD/g;function q0(e){return(typeof e=="string"?e:""+e).replace(fx,`
`).replace(dx,"")}function V0(e,t){return t=q0(t),q0(e)===t}function Ss(){}function Fe(e,t,n,i,l,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||di(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&di(e,""+i);break;case"className":Ar(e,"class",i);break;case"tabIndex":Ar(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ar(e,n,i);break;case"style":Yf(e,i,s);break;case"data":if(t!=="object"){Ar(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Or(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Fe(e,t,"name",l.name,l,null),Fe(e,t,"formEncType",l.formEncType,l,null),Fe(e,t,"formMethod",l.formMethod,l,null),Fe(e,t,"formTarget",l.formTarget,l,null)):(Fe(e,t,"encType",l.encType,l,null),Fe(e,t,"method",l.method,l,null),Fe(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Or(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ss);break;case"onScroll":i!=null&&Ue("scroll",e);break;case"onScrollEnd":i!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Or(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),Tr(e,"popover",i);break;case"xlinkActuate":Yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Yn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Yn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Yn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Yn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Tr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Gm.get(n)||n,Tr(e,n,i))}}function pc(e,t,n,i,l,s){switch(n){case"style":Yf(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?di(e,i):(typeof i=="number"||typeof i=="bigint")&&di(e,""+i);break;case"onScroll":i!=null&&Ue("scroll",e);break;case"onScrollEnd":i!=null&&Ue("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ss);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[ot]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Tr(e,n,i)}}}function Nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var i=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var h=n[s];if(h!=null)switch(s){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,s,h,n,null)}}l&&Fe(e,t,"srcSet",n.srcSet,n,null),i&&Fe(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var m=s=h=l=null,b=null,k=null;for(i in n)if(n.hasOwnProperty(i)){var Y=n[i];if(Y!=null)switch(i){case"name":l=Y;break;case"type":h=Y;break;case"checked":b=Y;break;case"defaultChecked":k=Y;break;case"value":s=Y;break;case"defaultValue":m=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,t));break;default:Fe(e,t,i,Y,n,null)}}Lf(e,s,m,b,k,h,l,!1),jr(e);return;case"select":Ue("invalid",e),i=h=s=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":h=m;break;case"multiple":i=m;default:Fe(e,t,l,m,n,null)}t=s,n=h,e.multiple=!!i,t!=null?fi(e,!!i,t,!1):n!=null&&fi(e,!!i,n,!0);return;case"textarea":Ue("invalid",e),s=l=i=null;for(h in n)if(n.hasOwnProperty(h)&&(m=n[h],m!=null))switch(h){case"value":i=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Fe(e,t,h,m,n,null)}Vf(e,i,l,s),jr(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(i=n[b],i!=null))switch(b){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Fe(e,t,b,i,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(i=0;i<Yl.length;i++)Ue(Yl[i],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(i=n[k],i!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,k,i,n,null)}return;default:if(_o(t)){for(Y in n)n.hasOwnProperty(Y)&&(i=n[Y],i!==void 0&&pc(e,t,Y,i,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(i=n[m],i!=null&&Fe(e,t,m,i,n,null))}function hx(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,h=null,m=null,b=null,k=null,Y=null;for(N in n){var K=n[N];if(n.hasOwnProperty(N)&&K!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":b=K;default:i.hasOwnProperty(N)||Fe(e,t,N,null,i,K)}}for(var C in i){var N=i[C];if(K=n[C],i.hasOwnProperty(C)&&(N!=null||K!=null))switch(C){case"type":s=N;break;case"name":l=N;break;case"checked":k=N;break;case"defaultChecked":Y=N;break;case"value":h=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:N!==K&&Fe(e,t,C,N,i,K)}}Do(e,h,m,b,k,Y,s,l);return;case"select":N=h=m=C=null;for(s in n)if(b=n[s],n.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":N=b;default:i.hasOwnProperty(s)||Fe(e,t,s,null,i,b)}for(l in i)if(s=i[l],b=n[l],i.hasOwnProperty(l)&&(s!=null||b!=null))switch(l){case"value":C=s;break;case"defaultValue":m=s;break;case"multiple":h=s;default:s!==b&&Fe(e,t,l,s,i,b)}t=m,n=h,i=N,C!=null?fi(e,!!n,C,!1):!!i!=!!n&&(t!=null?fi(e,!!n,t,!0):fi(e,!!n,n?[]:"",!1));return;case"textarea":N=C=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Fe(e,t,m,null,i,l)}for(h in i)if(l=i[h],s=n[h],i.hasOwnProperty(h)&&(l!=null||s!=null))switch(h){case"value":C=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==s&&Fe(e,t,h,l,i,s)}qf(e,C,N);return;case"option":for(var Ae in n)if(C=n[Ae],n.hasOwnProperty(Ae)&&C!=null&&!i.hasOwnProperty(Ae))switch(Ae){case"selected":e.selected=!1;break;default:Fe(e,t,Ae,null,i,C)}for(b in i)if(C=i[b],N=n[b],i.hasOwnProperty(b)&&C!==N&&(C!=null||N!=null))switch(b){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Fe(e,t,b,C,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in n)C=n[we],n.hasOwnProperty(we)&&C!=null&&!i.hasOwnProperty(we)&&Fe(e,t,we,null,i,C);for(k in i)if(C=i[k],N=n[k],i.hasOwnProperty(k)&&C!==N&&(C!=null||N!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Fe(e,t,k,C,i,N)}return;default:if(_o(t)){for(var We in n)C=n[We],n.hasOwnProperty(We)&&C!==void 0&&!i.hasOwnProperty(We)&&pc(e,t,We,void 0,i,C);for(Y in i)C=i[Y],N=n[Y],!i.hasOwnProperty(Y)||C===N||C===void 0&&N===void 0||pc(e,t,Y,C,i,N);return}}for(var T in n)C=n[T],n.hasOwnProperty(T)&&C!=null&&!i.hasOwnProperty(T)&&Fe(e,t,T,null,i,C);for(K in i)C=i[K],N=n[K],!i.hasOwnProperty(K)||C===N||C==null&&N==null||Fe(e,t,K,C,i,N)}var mc=null,gc=null;function ws(e){return e.nodeType===9?e:e.ownerDocument}function G0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yc=null;function px(){var e=window.event;return e&&e.type==="popstate"?e===yc?!1:(yc=e,!0):(yc=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(e){return $0.resolve(null).then(e).catch(xx)}:X0;function xx(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Z0(e,t){var n=t,i=0,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<i&&8>i){n=i;var h=e.ownerDocument;if(n&1&&$l(h.documentElement),n&2&&$l(h.body),n&4)for(n=h.head,$l(n),h=n.firstChild;h;){var m=h.nextSibling,b=h.nodeName;h[rl]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=m}}if(l===0){e.removeChild(s),Pl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=s}while(n);Pl(t)}function vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vc(n),zo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yx(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function vx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zn(e.nextSibling),e===null))return null;return e}function bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function bx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Sc=null;function Q0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function K0(e,t,n){switch(t=ws(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function $l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zo(e)}var yn=new Map,J0=new Set;function Es(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=F.d;F.d={f:Sx,r:wx,D:Ex,C:zx,L:Tx,m:Ax,X:Dx,S:jx,M:Ox};function Sx(){var e=aa.f(),t=ps();return e||t}function wx(e){var t=si(e);t!==null&&t.tag===5&&t.type==="form"?m1(t):aa.r(e)}var Vi=typeof document>"u"?null:document;function F0(e,t,n){var i=Vi;if(i&&typeof t=="string"&&t){var l=fn(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),J0.has(l)||(J0.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Nt(t,"link",e),Et(t),i.head.appendChild(t)))}}function Ex(e){aa.D(e),F0("dns-prefetch",e,null)}function zx(e,t){aa.C(e,t),F0("preconnect",e,t)}function Tx(e,t,n){aa.L(e,t,n);var i=Vi;if(i&&e&&t){var l='link[rel="preload"][as="'+fn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+fn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+fn(n.imageSizes)+'"]')):l+='[href="'+fn(e)+'"]';var s=l;switch(t){case"style":s=Gi(e);break;case"script":s=Yi(e)}yn.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),yn.set(s,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Zl(s))||t==="script"&&i.querySelector(Ql(s))||(t=i.createElement("link"),Nt(t,"link",e),Et(t),i.head.appendChild(t)))}}function Ax(e,t){aa.m(e,t);var n=Vi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+fn(i)+'"][href="'+fn(e)+'"]',s=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Yi(e)}if(!yn.has(s)&&(e=y({rel:"modulepreload",href:e},t),yn.set(s,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ql(s)))return}i=n.createElement("link"),Nt(i,"link",e),Et(i),n.head.appendChild(i)}}}function jx(e,t,n){aa.S(e,t,n);var i=Vi;if(i&&e){var l=oi(i).hoistableStyles,s=Gi(e);t=t||"default";var h=l.get(s);if(!h){var m={loading:0,preload:null};if(h=i.querySelector(Zl(s)))m.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=yn.get(s))&&wc(e,n);var b=h=i.createElement("link");Et(b),Nt(b,"link",e),b._p=new Promise(function(k,Y){b.onload=k,b.onerror=Y}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,zs(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:m},l.set(s,h)}}}function Dx(e,t){aa.X(e,t);var n=Vi;if(n&&e){var i=oi(n).hoistableScripts,l=Yi(e),s=i.get(l);s||(s=n.querySelector(Ql(l)),s||(e=y({src:e,async:!0},t),(t=yn.get(l))&&Ec(e,t),s=n.createElement("script"),Et(s),Nt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function Ox(e,t){aa.M(e,t);var n=Vi;if(n&&e){var i=oi(n).hoistableScripts,l=Yi(e),s=i.get(l);s||(s=n.querySelector(Ql(l)),s||(e=y({src:e,async:!0,type:"module"},t),(t=yn.get(l))&&Ec(e,t),s=n.createElement("script"),Et(s),Nt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function W0(e,t,n,i){var l=(l=ue.current)?Es(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gi(n.href),n=oi(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gi(n.href);var s=oi(l).hoistableStyles,h=s.get(e);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,h),(s=l.querySelector(Zl(e)))&&!s._p&&(h.instance=s,h.state.loading=5),yn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yn.set(e,n),s||_x(l,e,n,h.state))),t&&i===null)throw Error(u(528,""));return h}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yi(n),n=oi(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Gi(e){return'href="'+fn(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function I0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function _x(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Nt(t,"link",n),Et(t),e.head.appendChild(t))}function Yi(e){return'[src="'+fn(e)+'"]'}function Ql(e){return"script[async]"+e}function P0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+fn(n.href)+'"]');if(i)return t.instance=i,Et(i),i;var l=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Et(i),Nt(i,"style",l),zs(i,n.precedence,e),t.instance=i;case"stylesheet":l=Gi(n.href);var s=e.querySelector(Zl(l));if(s)return t.state.loading|=4,t.instance=s,Et(s),s;i=I0(n),(l=yn.get(l))&&wc(i,l),s=(e.ownerDocument||e).createElement("link"),Et(s);var h=s;return h._p=new Promise(function(m,b){h.onload=m,h.onerror=b}),Nt(s,"link",i),t.state.loading|=4,zs(s,n.precedence,e),t.instance=s;case"script":return s=Yi(n.src),(l=e.querySelector(Ql(s)))?(t.instance=l,Et(l),l):(i=n,(l=yn.get(s))&&(i=y({},n),Ec(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Et(l),Nt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,zs(i,n.precedence,e));return t.instance}function zs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,s=l,h=0;h<i.length;h++){var m=i[h];if(m.dataset.precedence===t)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ts=null;function eh(e,t,n){if(Ts===null){var i=new Map,l=Ts=new Map;l.set(n,i)}else l=Ts,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[rl]||s[Ke]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(t)||"";h=e+h;var m=i.get(h);m?m.push(s):i.set(h,[s])}}return i}function th(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function kx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kl=null;function Cx(){}function Rx(e,t,n){if(Kl===null)throw Error(u(475));var i=Kl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Gi(n.href),s=e.querySelector(Zl(l));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=As.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=s,Et(s);return}s=e.ownerDocument||e,n=I0(n),(l=yn.get(l))&&wc(n,l),s=s.createElement("link"),Et(s);var h=s;h._p=new Promise(function(m,b){h.onload=m,h.onerror=b}),Nt(s,"link",n),t.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=As.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Nx(){if(Kl===null)throw Error(u(475));var e=Kl;return e.stylesheets&&e.count===0&&zc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&zc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function As(){if(this.count--,this.count===0){if(this.stylesheets)zc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var js=null;function zc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,js=new Map,t.forEach(Mx,e),js=null,As.call(e))}function Mx(e,t){if(!(t.state.loading&4)){var n=js.get(e);if(n)var i=n.get(null);else{n=new Map,js.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var h=l[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}l=t.instance,h=l.getAttribute("data-precedence"),s=n.get(h)||i,s===i&&n.set(null,l),n.set(h,l),this.count++,i=As.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Jl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function Ux(e,t,n,i,l,s,h,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_n(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.hiddenUpdates=_n(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function ah(e,t,n,i,l,s,h,m,b,k,Y,K){return e=new Ux(e,t,n,h,m,b,k,K),t=1,s===!0&&(t|=24),s=tn(3,null,null,t),e.current=s,s.stateNode=e,t=lu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},uu(s),e}function ih(e){return e?(e=bi,e):bi}function lh(e,t,n,i,l,s){l=ih(l),i.context===null?i.context=l:i.pendingContext=l,i=fa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=da(e,i,t),n!==null&&(sn(n,e,t),Tl(n,e,t))}function rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tc(e,t){rh(e,t),(e=e.alternate)&&rh(e,t)}function sh(e){if(e.tag===13){var t=vi(e,67108864);t!==null&&sn(t,e,67108864),Tc(e,67108864)}}var Ds=!0;function Bx(e,t,n,i){var l=_.T;_.T=null;var s=F.p;try{F.p=2,Ac(e,t,n,i)}finally{F.p=s,_.T=l}}function Hx(e,t,n,i){var l=_.T;_.T=null;var s=F.p;try{F.p=8,Ac(e,t,n,i)}finally{F.p=s,_.T=l}}function Ac(e,t,n,i){if(Ds){var l=jc(i);if(l===null)hc(e,t,i,Os,n),uh(e,i);else if(qx(l,e,t,n,i))i.stopPropagation();else if(uh(e,i),t&4&&-1<Lx.indexOf(e)){for(;l!==null;){var s=si(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=kt(s.pendingLanes);if(h!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;h;){var b=1<<31-$e(h);m.entanglements[1]|=b,h&=~b}Mn(s),(Ze&6)===0&&(ds=it()+500,Gl(0))}}break;case 13:m=vi(s,2),m!==null&&sn(m,s,2),ps(),Tc(s,2)}if(s=jc(i),s===null&&hc(e,t,i,Os,n),s===l)break;l=s}l!==null&&i.stopPropagation()}else hc(e,t,i,null,n)}}function jc(e){return e=Co(e),Dc(e)}var Os=null;function Dc(e){if(Os=null,e=ri(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Os=e,null}function oh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(On()){case Pt:return 2;case S:return 8;case D:case L:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Oc=!1,Ta=null,Aa=null,ja=null,Fl=new Map,Wl=new Map,Da=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uh(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(t.pointerId)}}function Il(e,t,n,i,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},t!==null&&(t=si(t),t!==null&&sh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qx(e,t,n,i,l){switch(t){case"focusin":return Ta=Il(Ta,e,t,n,i,l),!0;case"dragenter":return Aa=Il(Aa,e,t,n,i,l),!0;case"mouseover":return ja=Il(ja,e,t,n,i,l),!0;case"pointerover":var s=l.pointerId;return Fl.set(s,Il(Fl.get(s)||null,e,t,n,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Wl.set(s,Il(Wl.get(s)||null,e,t,n,i,l)),!0}return!1}function ch(e){var t=ri(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Eo(e.priority,function(){if(n.tag===13){var i=rn();i=ll(i);var l=vi(n,i);l!==null&&sn(l,n,i),Tc(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ko=i,n.target.dispatchEvent(i),ko=null}else return t=si(n),t!==null&&sh(t),e.blockedOn=n,!1;t.shift()}return!0}function fh(e,t,n){_s(e)&&n.delete(t)}function Vx(){Oc=!1,Ta!==null&&_s(Ta)&&(Ta=null),Aa!==null&&_s(Aa)&&(Aa=null),ja!==null&&_s(ja)&&(ja=null),Fl.forEach(fh),Wl.forEach(fh)}function ks(e,t){e.blockedOn===t&&(e.blockedOn=null,Oc||(Oc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Vx)))}var Cs=null;function dh(e){Cs!==e&&(Cs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Cs===e&&(Cs=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Dc(i||n)===null)continue;break}var s=si(n);s!==null&&(e.splice(t,3),t-=3,Du(s,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Pl(e){function t(b){return ks(b,e)}Ta!==null&&ks(Ta,e),Aa!==null&&ks(Aa,e),ja!==null&&ks(ja,e),Fl.forEach(t),Wl.forEach(t);for(var n=0;n<Da.length;n++){var i=Da[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Da.length&&(n=Da[0],n.blockedOn===null);)ch(n),n.blockedOn===null&&Da.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],s=n[i+1],h=l[ot]||null;if(typeof s=="function")h||dh(n);else if(h){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,h=s[ot]||null)m=h.formAction;else if(Dc(l)!==null)continue}else m=h.action;typeof m=="function"?n[i+1]=m:(n.splice(i,3),i-=3),dh(n)}}}function _c(e){this._internalRoot=e}Rs.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=rn();lh(n,i,e,t,null,null)},Rs.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lh(e.current,2,null,e,null,null),ps(),t[Gn]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=zr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Da.length&&t!==0&&t<Da[n].priority;n++);Da.splice(n,0,e),n===0&&ch(e)}};var hh=r.version;if(hh!=="19.1.1")throw Error(u(527,hh,"19.1.1"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=w(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Gx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{ce=Ns.inject(Gx),Te=Ns}catch{}}return tr.createRoot=function(e,t){if(!f(e))throw Error(u(299));var n=!1,i="",l=O1,s=_1,h=k1,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=ah(e,1,!1,null,null,n,i,l,s,h,m,null),e[Gn]=t.current,dc(e),new _c(t)},tr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(u(299));var i=!1,l="",s=O1,h=_1,m=k1,b=null,k=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(k=n.formState)),t=ah(e,1,!0,t,n??null,i,l,s,h,m,b,k),t.context=ih(null),n=t.current,i=rn(),i=ll(i),l=fa(i),l.callback=null,da(n,l,i),n=i,t.current.lanes=n,Gt(t,n),Mn(t),e[Gn]=t.current,dc(e),new Rs(t)},tr.version="19.1.1",tr}var Eh;function Ix(){if(Eh)return Cc.exports;Eh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Cc.exports=Wx(),Cc.exports}var Px=Ix(),V=cf();const Dt=Xx(V);function Ap(a,r){return function(){return a.apply(r,arguments)}}const{toString:e3}=Object.prototype,{getPrototypeOf:ff}=Object,{iterator:lo,toStringTag:jp}=Symbol,ro=(a=>r=>{const o=e3.call(r);return a[o]||(a[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Dn=a=>(a=a.toLowerCase(),r=>ro(r)===a),so=a=>r=>typeof r===a,{isArray:Pi}=Array,ur=so("undefined");function pr(a){return a!==null&&!ur(a)&&a.constructor!==null&&!ur(a.constructor)&&Ft(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Dp=Dn("ArrayBuffer");function t3(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&Dp(a.buffer),r}const n3=so("string"),Ft=so("function"),Op=so("number"),mr=a=>a!==null&&typeof a=="object",a3=a=>a===!0||a===!1,Vs=a=>{if(ro(a)!=="object")return!1;const r=ff(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(jp in a)&&!(lo in a)},i3=a=>{if(!mr(a)||pr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},l3=Dn("Date"),r3=Dn("File"),s3=Dn("Blob"),o3=Dn("FileList"),u3=a=>mr(a)&&Ft(a.pipe),c3=a=>{let r;return a&&(typeof FormData=="function"&&a instanceof FormData||Ft(a.append)&&((r=ro(a))==="formdata"||r==="object"&&Ft(a.toString)&&a.toString()==="[object FormData]"))},f3=Dn("URLSearchParams"),[d3,h3,p3,m3]=["ReadableStream","Request","Response","Headers"].map(Dn),g3=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gr(a,r,{allOwnKeys:o=!1}={}){if(a===null||typeof a>"u")return;let u,f;if(typeof a!="object"&&(a=[a]),Pi(a))for(u=0,f=a.length;u<f;u++)r.call(null,a[u],u,a);else{if(pr(a))return;const d=o?Object.getOwnPropertyNames(a):Object.keys(a),p=d.length;let g;for(u=0;u<p;u++)g=d[u],r.call(null,a[g],g,a)}}function _p(a,r){if(pr(a))return null;r=r.toLowerCase();const o=Object.keys(a);let u=o.length,f;for(;u-- >0;)if(f=o[u],r===f.toLowerCase())return f;return null}const Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kp=a=>!ur(a)&&a!==Fa;function Kc(){const{caseless:a}=kp(this)&&this||{},r={},o=(u,f)=>{const d=a&&_p(r,f)||f;Vs(r[d])&&Vs(u)?r[d]=Kc(r[d],u):Vs(u)?r[d]=Kc({},u):Pi(u)?r[d]=u.slice():r[d]=u};for(let u=0,f=arguments.length;u<f;u++)arguments[u]&&gr(arguments[u],o);return r}const x3=(a,r,o,{allOwnKeys:u}={})=>(gr(r,(f,d)=>{o&&Ft(f)?a[d]=Ap(f,o):a[d]=f},{allOwnKeys:u}),a),y3=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),v3=(a,r,o,u)=>{a.prototype=Object.create(r.prototype,u),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:r.prototype}),o&&Object.assign(a.prototype,o)},b3=(a,r,o,u)=>{let f,d,p;const g={};if(r=r||{},a==null)return r;do{for(f=Object.getOwnPropertyNames(a),d=f.length;d-- >0;)p=f[d],(!u||u(p,a,r))&&!g[p]&&(r[p]=a[p],g[p]=!0);a=o!==!1&&ff(a)}while(a&&(!o||o(a,r))&&a!==Object.prototype);return r},S3=(a,r,o)=>{a=String(a),(o===void 0||o>a.length)&&(o=a.length),o-=r.length;const u=a.indexOf(r,o);return u!==-1&&u===o},w3=a=>{if(!a)return null;if(Pi(a))return a;let r=a.length;if(!Op(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=a[r];return o},E3=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&ff(Uint8Array)),z3=(a,r)=>{const u=(a&&a[lo]).call(a);let f;for(;(f=u.next())&&!f.done;){const d=f.value;r.call(a,d[0],d[1])}},T3=(a,r)=>{let o;const u=[];for(;(o=a.exec(r))!==null;)u.push(o);return u},A3=Dn("HTMLFormElement"),j3=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,u,f){return u.toUpperCase()+f}),zh=(({hasOwnProperty:a})=>(r,o)=>a.call(r,o))(Object.prototype),D3=Dn("RegExp"),Cp=(a,r)=>{const o=Object.getOwnPropertyDescriptors(a),u={};gr(o,(f,d)=>{let p;(p=r(f,d,a))!==!1&&(u[d]=p||f)}),Object.defineProperties(a,u)},O3=a=>{Cp(a,(r,o)=>{if(Ft(a)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const u=a[o];if(Ft(u)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},_3=(a,r)=>{const o={},u=f=>{f.forEach(d=>{o[d]=!0})};return Pi(a)?u(a):u(String(a).split(r)),o},k3=()=>{},C3=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function R3(a){return!!(a&&Ft(a.append)&&a[jp]==="FormData"&&a[lo])}const N3=a=>{const r=new Array(10),o=(u,f)=>{if(mr(u)){if(r.indexOf(u)>=0)return;if(pr(u))return u;if(!("toJSON"in u)){r[f]=u;const d=Pi(u)?[]:{};return gr(u,(p,g)=>{const w=o(p,f+1);!ur(w)&&(d[g]=w)}),r[f]=void 0,d}}return u};return o(a,0)},M3=Dn("AsyncFunction"),U3=a=>a&&(mr(a)||Ft(a))&&Ft(a.then)&&Ft(a.catch),Rp=((a,r)=>a?setImmediate:r?((o,u)=>(Fa.addEventListener("message",({source:f,data:d})=>{f===Fa&&d===o&&u.length&&u.shift()()},!1),f=>{u.push(f),Fa.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Ft(Fa.postMessage)),B3=typeof queueMicrotask<"u"?queueMicrotask.bind(Fa):typeof process<"u"&&process.nextTick||Rp,H3=a=>a!=null&&Ft(a[lo]),M={isArray:Pi,isArrayBuffer:Dp,isBuffer:pr,isFormData:c3,isArrayBufferView:t3,isString:n3,isNumber:Op,isBoolean:a3,isObject:mr,isPlainObject:Vs,isEmptyObject:i3,isReadableStream:d3,isRequest:h3,isResponse:p3,isHeaders:m3,isUndefined:ur,isDate:l3,isFile:r3,isBlob:s3,isRegExp:D3,isFunction:Ft,isStream:u3,isURLSearchParams:f3,isTypedArray:E3,isFileList:o3,forEach:gr,merge:Kc,extend:x3,trim:g3,stripBOM:y3,inherits:v3,toFlatObject:b3,kindOf:ro,kindOfTest:Dn,endsWith:S3,toArray:w3,forEachEntry:z3,matchAll:T3,isHTMLForm:A3,hasOwnProperty:zh,hasOwnProp:zh,reduceDescriptors:Cp,freezeMethods:O3,toObjectSet:_3,toCamelCase:j3,noop:k3,toFiniteNumber:C3,findKey:_p,global:Fa,isContextDefined:kp,isSpecCompliantForm:R3,toJSONObject:N3,isAsyncFn:M3,isThenable:U3,setImmediate:Rp,asap:B3,isIterable:H3};function De(a,r,o,u,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),u&&(this.request=u),f&&(this.response=f,this.status=f.status?f.status:null)}M.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.status}}});const Np=De.prototype,Mp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Mp[a]={value:a}});Object.defineProperties(De,Mp);Object.defineProperty(Np,"isAxiosError",{value:!0});De.from=(a,r,o,u,f,d)=>{const p=Object.create(Np);return M.toFlatObject(a,p,function(w){return w!==Error.prototype},g=>g!=="isAxiosError"),De.call(p,a.message,r,o,u,f),p.cause=a,p.name=a.name,d&&Object.assign(p,d),p};const L3=null;function Jc(a){return M.isPlainObject(a)||M.isArray(a)}function Up(a){return M.endsWith(a,"[]")?a.slice(0,-2):a}function Th(a,r,o){return a?a.concat(r).map(function(f,d){return f=Up(f),!o&&d?"["+f+"]":f}).join(o?".":""):r}function q3(a){return M.isArray(a)&&!a.some(Jc)}const V3=M.toFlatObject(M,{},null,function(r){return/^is[A-Z]/.test(r)});function oo(a,r,o){if(!M.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,o=M.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(B,R){return!M.isUndefined(R[B])});const u=o.metaTokens,f=o.visitor||y,d=o.dots,p=o.indexes,w=(o.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(r);if(!M.isFunction(f))throw new TypeError("visitor must be a function");function x(j){if(j===null)return"";if(M.isDate(j))return j.toISOString();if(M.isBoolean(j))return j.toString();if(!w&&M.isBlob(j))throw new De("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(j)||M.isTypedArray(j)?w&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function y(j,B,R){let J=j;if(j&&!R&&typeof j=="object"){if(M.endsWith(B,"{}"))B=u?B:B.slice(0,-2),j=JSON.stringify(j);else if(M.isArray(j)&&q3(j)||(M.isFileList(j)||M.endsWith(B,"[]"))&&(J=M.toArray(j)))return B=Up(B),J.forEach(function(Z,re){!(M.isUndefined(Z)||Z===null)&&r.append(p===!0?Th([B],re,d):p===null?B:B+"[]",x(Z))}),!1}return Jc(j)?!0:(r.append(Th(R,B,d),x(j)),!1)}const A=[],v=Object.assign(V3,{defaultVisitor:y,convertValue:x,isVisitable:Jc});function X(j,B){if(!M.isUndefined(j)){if(A.indexOf(j)!==-1)throw Error("Circular reference detected in "+B.join("."));A.push(j),M.forEach(j,function(J,U){(!(M.isUndefined(J)||J===null)&&f.call(r,J,M.isString(U)?U.trim():U,B,v))===!0&&X(J,B?B.concat(U):[U])}),A.pop()}}if(!M.isObject(a))throw new TypeError("data must be an object");return X(a),r}function Ah(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(u){return r[u]})}function df(a,r){this._pairs=[],a&&oo(a,this,r)}const Bp=df.prototype;Bp.append=function(r,o){this._pairs.push([r,o])};Bp.toString=function(r){const o=r?function(u){return r.call(this,u,Ah)}:Ah;return this._pairs.map(function(f){return o(f[0])+"="+o(f[1])},"").join("&")};function G3(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Hp(a,r,o){if(!r)return a;const u=o&&o.encode||G3;M.isFunction(o)&&(o={serialize:o});const f=o&&o.serialize;let d;if(f?d=f(r,o):d=M.isURLSearchParams(r)?r.toString():new df(r,o).toString(u),d){const p=a.indexOf("#");p!==-1&&(a=a.slice(0,p)),a+=(a.indexOf("?")===-1?"?":"&")+d}return a}class jh{constructor(){this.handlers=[]}use(r,o,u){return this.handlers.push({fulfilled:r,rejected:o,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){M.forEach(this.handlers,function(u){u!==null&&r(u)})}}const Lp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y3=typeof URLSearchParams<"u"?URLSearchParams:df,X3=typeof FormData<"u"?FormData:null,$3=typeof Blob<"u"?Blob:null,Z3={isBrowser:!0,classes:{URLSearchParams:Y3,FormData:X3,Blob:$3},protocols:["http","https","file","blob","url","data"]},hf=typeof window<"u"&&typeof document<"u",Fc=typeof navigator=="object"&&navigator||void 0,Q3=hf&&(!Fc||["ReactNative","NativeScript","NS"].indexOf(Fc.product)<0),K3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",J3=hf&&window.location.href||"http://localhost",F3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hf,hasStandardBrowserEnv:Q3,hasStandardBrowserWebWorkerEnv:K3,navigator:Fc,origin:J3},Symbol.toStringTag,{value:"Module"})),Bt={...F3,...Z3};function W3(a,r){return oo(a,new Bt.classes.URLSearchParams,{visitor:function(o,u,f,d){return Bt.isNode&&M.isBuffer(o)?(this.append(u,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function I3(a){return M.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function P3(a){const r={},o=Object.keys(a);let u;const f=o.length;let d;for(u=0;u<f;u++)d=o[u],r[d]=a[d];return r}function qp(a){function r(o,u,f,d){let p=o[d++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),w=d>=o.length;return p=!p&&M.isArray(f)?f.length:p,w?(M.hasOwnProp(f,p)?f[p]=[f[p],u]:f[p]=u,!g):((!f[p]||!M.isObject(f[p]))&&(f[p]=[]),r(o,u,f[p],d)&&M.isArray(f[p])&&(f[p]=P3(f[p])),!g)}if(M.isFormData(a)&&M.isFunction(a.entries)){const o={};return M.forEachEntry(a,(u,f)=>{r(I3(u),f,o,0)}),o}return null}function e5(a,r,o){if(M.isString(a))try{return(r||JSON.parse)(a),M.trim(a)}catch(u){if(u.name!=="SyntaxError")throw u}return(o||JSON.stringify)(a)}const xr={transitional:Lp,adapter:["xhr","http","fetch"],transformRequest:[function(r,o){const u=o.getContentType()||"",f=u.indexOf("application/json")>-1,d=M.isObject(r);if(d&&M.isHTMLForm(r)&&(r=new FormData(r)),M.isFormData(r))return f?JSON.stringify(qp(r)):r;if(M.isArrayBuffer(r)||M.isBuffer(r)||M.isStream(r)||M.isFile(r)||M.isBlob(r)||M.isReadableStream(r))return r;if(M.isArrayBufferView(r))return r.buffer;if(M.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(d){if(u.indexOf("application/x-www-form-urlencoded")>-1)return W3(r,this.formSerializer).toString();if((g=M.isFileList(r))||u.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return oo(g?{"files[]":r}:r,w&&new w,this.formSerializer)}}return d||f?(o.setContentType("application/json",!1),e5(r)):r}],transformResponse:[function(r){const o=this.transitional||xr.transitional,u=o&&o.forcedJSONParsing,f=this.responseType==="json";if(M.isResponse(r)||M.isReadableStream(r))return r;if(r&&M.isString(r)&&(u&&!this.responseType||f)){const p=!(o&&o.silentJSONParsing)&&f;try{return JSON.parse(r)}catch(g){if(p)throw g.name==="SyntaxError"?De.from(g,De.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bt.classes.FormData,Blob:Bt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],a=>{xr.headers[a]={}});const t5=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),n5=a=>{const r={};let o,u,f;return a&&a.split(`
`).forEach(function(p){f=p.indexOf(":"),o=p.substring(0,f).trim().toLowerCase(),u=p.substring(f+1).trim(),!(!o||r[o]&&t5[o])&&(o==="set-cookie"?r[o]?r[o].push(u):r[o]=[u]:r[o]=r[o]?r[o]+", "+u:u)}),r},Dh=Symbol("internals");function nr(a){return a&&String(a).trim().toLowerCase()}function Gs(a){return a===!1||a==null?a:M.isArray(a)?a.map(Gs):String(a)}function a5(a){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=o.exec(a);)r[u[1]]=u[2];return r}const i5=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Bc(a,r,o,u,f){if(M.isFunction(u))return u.call(this,r,o);if(f&&(r=o),!!M.isString(r)){if(M.isString(u))return r.indexOf(u)!==-1;if(M.isRegExp(u))return u.test(r)}}function l5(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,u)=>o.toUpperCase()+u)}function r5(a,r){const o=M.toCamelCase(" "+r);["get","set","has"].forEach(u=>{Object.defineProperty(a,u+o,{value:function(f,d,p){return this[u].call(this,r,f,d,p)},configurable:!0})})}let Wt=class{constructor(r){r&&this.set(r)}set(r,o,u){const f=this;function d(g,w,x){const y=nr(w);if(!y)throw new Error("header name must be a non-empty string");const A=M.findKey(f,y);(!A||f[A]===void 0||x===!0||x===void 0&&f[A]!==!1)&&(f[A||w]=Gs(g))}const p=(g,w)=>M.forEach(g,(x,y)=>d(x,y,w));if(M.isPlainObject(r)||r instanceof this.constructor)p(r,o);else if(M.isString(r)&&(r=r.trim())&&!i5(r))p(n5(r),o);else if(M.isObject(r)&&M.isIterable(r)){let g={},w,x;for(const y of r){if(!M.isArray(y))throw TypeError("Object iterator must return a key-value pair");g[x=y[0]]=(w=g[x])?M.isArray(w)?[...w,y[1]]:[w,y[1]]:y[1]}p(g,o)}else r!=null&&d(o,r,u);return this}get(r,o){if(r=nr(r),r){const u=M.findKey(this,r);if(u){const f=this[u];if(!o)return f;if(o===!0)return a5(f);if(M.isFunction(o))return o.call(this,f,u);if(M.isRegExp(o))return o.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=nr(r),r){const u=M.findKey(this,r);return!!(u&&this[u]!==void 0&&(!o||Bc(this,this[u],u,o)))}return!1}delete(r,o){const u=this;let f=!1;function d(p){if(p=nr(p),p){const g=M.findKey(u,p);g&&(!o||Bc(u,u[g],g,o))&&(delete u[g],f=!0)}}return M.isArray(r)?r.forEach(d):d(r),f}clear(r){const o=Object.keys(this);let u=o.length,f=!1;for(;u--;){const d=o[u];(!r||Bc(this,this[d],d,r,!0))&&(delete this[d],f=!0)}return f}normalize(r){const o=this,u={};return M.forEach(this,(f,d)=>{const p=M.findKey(u,d);if(p){o[p]=Gs(f),delete o[d];return}const g=r?l5(d):String(d).trim();g!==d&&delete o[d],o[g]=Gs(f),u[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return M.forEach(this,(u,f)=>{u!=null&&u!==!1&&(o[f]=r&&M.isArray(u)?u.join(", "):u)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const u=new this(r);return o.forEach(f=>u.set(f)),u}static accessor(r){const u=(this[Dh]=this[Dh]={accessors:{}}).accessors,f=this.prototype;function d(p){const g=nr(p);u[g]||(r5(f,p),u[g]=!0)}return M.isArray(r)?r.forEach(d):d(r),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(Wt.prototype,({value:a},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(u){this[o]=u}}});M.freezeMethods(Wt);function Hc(a,r){const o=this||xr,u=r||o,f=Wt.from(u.headers);let d=u.data;return M.forEach(a,function(g){d=g.call(o,d,f.normalize(),r?r.status:void 0)}),f.normalize(),d}function Vp(a){return!!(a&&a.__CANCEL__)}function el(a,r,o){De.call(this,a??"canceled",De.ERR_CANCELED,r,o),this.name="CanceledError"}M.inherits(el,De,{__CANCEL__:!0});function Gp(a,r,o){const u=o.config.validateStatus;!o.status||!u||u(o.status)?a(o):r(new De("Request failed with status code "+o.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function s5(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function o5(a,r){a=a||10;const o=new Array(a),u=new Array(a);let f=0,d=0,p;return r=r!==void 0?r:1e3,function(w){const x=Date.now(),y=u[d];p||(p=x),o[f]=w,u[f]=x;let A=d,v=0;for(;A!==f;)v+=o[A++],A=A%a;if(f=(f+1)%a,f===d&&(d=(d+1)%a),x-p<r)return;const X=y&&x-y;return X?Math.round(v*1e3/X):void 0}}function u5(a,r){let o=0,u=1e3/r,f,d;const p=(x,y=Date.now())=>{o=y,f=null,d&&(clearTimeout(d),d=null),a(...x)};return[(...x)=>{const y=Date.now(),A=y-o;A>=u?p(x,y):(f=x,d||(d=setTimeout(()=>{d=null,p(f)},u-A)))},()=>f&&p(f)]}const Fs=(a,r,o=3)=>{let u=0;const f=o5(50,250);return u5(d=>{const p=d.loaded,g=d.lengthComputable?d.total:void 0,w=p-u,x=f(w),y=p<=g;u=p;const A={loaded:p,total:g,progress:g?p/g:void 0,bytes:w,rate:x||void 0,estimated:x&&g&&y?(g-p)/x:void 0,event:d,lengthComputable:g!=null,[r?"download":"upload"]:!0};a(A)},o)},Oh=(a,r)=>{const o=a!=null;return[u=>r[0]({lengthComputable:o,total:a,loaded:u}),r[1]]},_h=a=>(...r)=>M.asap(()=>a(...r)),c5=Bt.hasStandardBrowserEnv?((a,r)=>o=>(o=new URL(o,Bt.origin),a.protocol===o.protocol&&a.host===o.host&&(r||a.port===o.port)))(new URL(Bt.origin),Bt.navigator&&/(msie|trident)/i.test(Bt.navigator.userAgent)):()=>!0,f5=Bt.hasStandardBrowserEnv?{write(a,r,o,u,f,d){const p=[a+"="+encodeURIComponent(r)];M.isNumber(o)&&p.push("expires="+new Date(o).toGMTString()),M.isString(u)&&p.push("path="+u),M.isString(f)&&p.push("domain="+f),d===!0&&p.push("secure"),document.cookie=p.join("; ")},read(a){const r=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function d5(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function h5(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function Yp(a,r,o){let u=!d5(r);return a&&(u||o==!1)?h5(a,r):r}const kh=a=>a instanceof Wt?{...a}:a;function ni(a,r){r=r||{};const o={};function u(x,y,A,v){return M.isPlainObject(x)&&M.isPlainObject(y)?M.merge.call({caseless:v},x,y):M.isPlainObject(y)?M.merge({},y):M.isArray(y)?y.slice():y}function f(x,y,A,v){if(M.isUndefined(y)){if(!M.isUndefined(x))return u(void 0,x,A,v)}else return u(x,y,A,v)}function d(x,y){if(!M.isUndefined(y))return u(void 0,y)}function p(x,y){if(M.isUndefined(y)){if(!M.isUndefined(x))return u(void 0,x)}else return u(void 0,y)}function g(x,y,A){if(A in r)return u(x,y);if(A in a)return u(void 0,x)}const w={url:d,method:d,data:d,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:g,headers:(x,y,A)=>f(kh(x),kh(y),A,!0)};return M.forEach(Object.keys({...a,...r}),function(y){const A=w[y]||f,v=A(a[y],r[y],y);M.isUndefined(v)&&A!==g||(o[y]=v)}),o}const Xp=a=>{const r=ni({},a);let{data:o,withXSRFToken:u,xsrfHeaderName:f,xsrfCookieName:d,headers:p,auth:g}=r;r.headers=p=Wt.from(p),r.url=Hp(Yp(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&p.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let w;if(M.isFormData(o)){if(Bt.hasStandardBrowserEnv||Bt.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if((w=p.getContentType())!==!1){const[x,...y]=w?w.split(";").map(A=>A.trim()).filter(Boolean):[];p.setContentType([x||"multipart/form-data",...y].join("; "))}}if(Bt.hasStandardBrowserEnv&&(u&&M.isFunction(u)&&(u=u(r)),u||u!==!1&&c5(r.url))){const x=f&&d&&f5.read(d);x&&p.set(f,x)}return r},p5=typeof XMLHttpRequest<"u",m5=p5&&function(a){return new Promise(function(o,u){const f=Xp(a);let d=f.data;const p=Wt.from(f.headers).normalize();let{responseType:g,onUploadProgress:w,onDownloadProgress:x}=f,y,A,v,X,j;function B(){X&&X(),j&&j(),f.cancelToken&&f.cancelToken.unsubscribe(y),f.signal&&f.signal.removeEventListener("abort",y)}let R=new XMLHttpRequest;R.open(f.method.toUpperCase(),f.url,!0),R.timeout=f.timeout;function J(){if(!R)return;const Z=Wt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),q={data:!g||g==="text"||g==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:Z,config:a,request:R};Gp(function(Q){o(Q),B()},function(Q){u(Q),B()},q),R=null}"onloadend"in R?R.onloadend=J:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(J)},R.onabort=function(){R&&(u(new De("Request aborted",De.ECONNABORTED,a,R)),R=null)},R.onerror=function(){u(new De("Network Error",De.ERR_NETWORK,a,R)),R=null},R.ontimeout=function(){let re=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const q=f.transitional||Lp;f.timeoutErrorMessage&&(re=f.timeoutErrorMessage),u(new De(re,q.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,a,R)),R=null},d===void 0&&p.setContentType(null),"setRequestHeader"in R&&M.forEach(p.toJSON(),function(re,q){R.setRequestHeader(q,re)}),M.isUndefined(f.withCredentials)||(R.withCredentials=!!f.withCredentials),g&&g!=="json"&&(R.responseType=f.responseType),x&&([v,j]=Fs(x,!0),R.addEventListener("progress",v)),w&&R.upload&&([A,X]=Fs(w),R.upload.addEventListener("progress",A),R.upload.addEventListener("loadend",X)),(f.cancelToken||f.signal)&&(y=Z=>{R&&(u(!Z||Z.type?new el(null,a,R):Z),R.abort(),R=null)},f.cancelToken&&f.cancelToken.subscribe(y),f.signal&&(f.signal.aborted?y():f.signal.addEventListener("abort",y)));const U=s5(f.url);if(U&&Bt.protocols.indexOf(U)===-1){u(new De("Unsupported protocol "+U+":",De.ERR_BAD_REQUEST,a));return}R.send(d||null)})},g5=(a,r)=>{const{length:o}=a=a?a.filter(Boolean):[];if(r||o){let u=new AbortController,f;const d=function(x){if(!f){f=!0,g();const y=x instanceof Error?x:this.reason;u.abort(y instanceof De?y:new el(y instanceof Error?y.message:y))}};let p=r&&setTimeout(()=>{p=null,d(new De(`timeout ${r} of ms exceeded`,De.ETIMEDOUT))},r);const g=()=>{a&&(p&&clearTimeout(p),p=null,a.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),a=null)};a.forEach(x=>x.addEventListener("abort",d));const{signal:w}=u;return w.unsubscribe=()=>M.asap(g),w}},x5=function*(a,r){let o=a.byteLength;if(o<r){yield a;return}let u=0,f;for(;u<o;)f=u+r,yield a.slice(u,f),u=f},y5=async function*(a,r){for await(const o of v5(a))yield*x5(o,r)},v5=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:o,value:u}=await r.read();if(o)break;yield u}}finally{await r.cancel()}},Ch=(a,r,o,u)=>{const f=y5(a,r);let d=0,p,g=w=>{p||(p=!0,u&&u(w))};return new ReadableStream({async pull(w){try{const{done:x,value:y}=await f.next();if(x){g(),w.close();return}let A=y.byteLength;if(o){let v=d+=A;o(v)}w.enqueue(new Uint8Array(y))}catch(x){throw g(x),x}},cancel(w){return g(w),f.return()}},{highWaterMark:2})},uo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",$p=uo&&typeof ReadableStream=="function",b5=uo&&(typeof TextEncoder=="function"?(a=>r=>a.encode(r))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),Zp=(a,...r)=>{try{return!!a(...r)}catch{return!1}},S5=$p&&Zp(()=>{let a=!1;const r=new Request(Bt.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!r}),Rh=64*1024,Wc=$p&&Zp(()=>M.isReadableStream(new Response("").body)),Ws={stream:Wc&&(a=>a.body)};uo&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Ws[r]&&(Ws[r]=M.isFunction(a[r])?o=>o[r]():(o,u)=>{throw new De(`Response type '${r}' is not supported`,De.ERR_NOT_SUPPORT,u)})})})(new Response);const w5=async a=>{if(a==null)return 0;if(M.isBlob(a))return a.size;if(M.isSpecCompliantForm(a))return(await new Request(Bt.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(M.isArrayBufferView(a)||M.isArrayBuffer(a))return a.byteLength;if(M.isURLSearchParams(a)&&(a=a+""),M.isString(a))return(await b5(a)).byteLength},E5=async(a,r)=>{const o=M.toFiniteNumber(a.getContentLength());return o??w5(r)},z5=uo&&(async a=>{let{url:r,method:o,data:u,signal:f,cancelToken:d,timeout:p,onDownloadProgress:g,onUploadProgress:w,responseType:x,headers:y,withCredentials:A="same-origin",fetchOptions:v}=Xp(a);x=x?(x+"").toLowerCase():"text";let X=g5([f,d&&d.toAbortSignal()],p),j;const B=X&&X.unsubscribe&&(()=>{X.unsubscribe()});let R;try{if(w&&S5&&o!=="get"&&o!=="head"&&(R=await E5(y,u))!==0){let q=new Request(r,{method:"POST",body:u,duplex:"half"}),te;if(M.isFormData(u)&&(te=q.headers.get("content-type"))&&y.setContentType(te),q.body){const[Q,le]=Oh(R,Fs(_h(w)));u=Ch(q.body,Rh,Q,le)}}M.isString(A)||(A=A?"include":"omit");const J="credentials"in Request.prototype;j=new Request(r,{...v,signal:X,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:u,duplex:"half",credentials:J?A:void 0});let U=await fetch(j,v);const Z=Wc&&(x==="stream"||x==="response");if(Wc&&(g||Z&&B)){const q={};["status","statusText","headers"].forEach(Ee=>{q[Ee]=U[Ee]});const te=M.toFiniteNumber(U.headers.get("content-length")),[Q,le]=g&&Oh(te,Fs(_h(g),!0))||[];U=new Response(Ch(U.body,Rh,Q,()=>{le&&le(),B&&B()}),q)}x=x||"text";let re=await Ws[M.findKey(Ws,x)||"text"](U,a);return!Z&&B&&B(),await new Promise((q,te)=>{Gp(q,te,{data:re,headers:Wt.from(U.headers),status:U.status,statusText:U.statusText,config:a,request:j})})}catch(J){throw B&&B(),J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,a,j),{cause:J.cause||J}):De.from(J,J&&J.code,a,j)}}),Ic={http:L3,xhr:m5,fetch:z5};M.forEach(Ic,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const Nh=a=>`- ${a}`,T5=a=>M.isFunction(a)||a===null||a===!1,Qp={getAdapter:a=>{a=M.isArray(a)?a:[a];const{length:r}=a;let o,u;const f={};for(let d=0;d<r;d++){o=a[d];let p;if(u=o,!T5(o)&&(u=Ic[(p=String(o)).toLowerCase()],u===void 0))throw new De(`Unknown adapter '${p}'`);if(u)break;f[p||"#"+d]=u}if(!u){const d=Object.entries(f).map(([g,w])=>`adapter ${g} `+(w===!1?"is not supported by the environment":"is not available in the build"));let p=r?d.length>1?`since :
`+d.map(Nh).join(`
`):" "+Nh(d[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return u},adapters:Ic};function Lc(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new el(null,a)}function Mh(a){return Lc(a),a.headers=Wt.from(a.headers),a.data=Hc.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Qp.getAdapter(a.adapter||xr.adapter)(a).then(function(u){return Lc(a),u.data=Hc.call(a,a.transformResponse,u),u.headers=Wt.from(u.headers),u},function(u){return Vp(u)||(Lc(a),u&&u.response&&(u.response.data=Hc.call(a,a.transformResponse,u.response),u.response.headers=Wt.from(u.response.headers))),Promise.reject(u)})}const Kp="1.11.0",co={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{co[a]=function(u){return typeof u===a||"a"+(r<1?"n ":" ")+a}});const Uh={};co.transitional=function(r,o,u){function f(d,p){return"[Axios v"+Kp+"] Transitional option '"+d+"'"+p+(u?". "+u:"")}return(d,p,g)=>{if(r===!1)throw new De(f(p," has been removed"+(o?" in "+o:"")),De.ERR_DEPRECATED);return o&&!Uh[p]&&(Uh[p]=!0,console.warn(f(p," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(d,p,g):!0}};co.spelling=function(r){return(o,u)=>(console.warn(`${u} is likely a misspelling of ${r}`),!0)};function A5(a,r,o){if(typeof a!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const u=Object.keys(a);let f=u.length;for(;f-- >0;){const d=u[f],p=r[d];if(p){const g=a[d],w=g===void 0||p(g,d,a);if(w!==!0)throw new De("option "+d+" must be "+w,De.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new De("Unknown option "+d,De.ERR_BAD_OPTION)}}const Ys={assertOptions:A5,validators:co},Un=Ys.validators;let Pa=class{constructor(r){this.defaults=r||{},this.interceptors={request:new jh,response:new jh}}async request(r,o){try{return await this._request(r,o)}catch(u){if(u instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const d=f.stack?f.stack.replace(/^.+\n/,""):"";try{u.stack?d&&!String(u.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+d):u.stack=d}catch{}}throw u}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=ni(this.defaults,o);const{transitional:u,paramsSerializer:f,headers:d}=o;u!==void 0&&Ys.assertOptions(u,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),f!=null&&(M.isFunction(f)?o.paramsSerializer={serialize:f}:Ys.assertOptions(f,{encode:Un.function,serialize:Un.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),Ys.assertOptions(o,{baseUrl:Un.spelling("baseURL"),withXsrfToken:Un.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let p=d&&M.merge(d.common,d[o.method]);d&&M.forEach(["delete","get","head","post","put","patch","common"],j=>{delete d[j]}),o.headers=Wt.concat(p,d);const g=[];let w=!0;this.interceptors.request.forEach(function(B){typeof B.runWhen=="function"&&B.runWhen(o)===!1||(w=w&&B.synchronous,g.unshift(B.fulfilled,B.rejected))});const x=[];this.interceptors.response.forEach(function(B){x.push(B.fulfilled,B.rejected)});let y,A=0,v;if(!w){const j=[Mh.bind(this),void 0];for(j.unshift(...g),j.push(...x),v=j.length,y=Promise.resolve(o);A<v;)y=y.then(j[A++],j[A++]);return y}v=g.length;let X=o;for(A=0;A<v;){const j=g[A++],B=g[A++];try{X=j(X)}catch(R){B.call(this,R);break}}try{y=Mh.call(this,X)}catch(j){return Promise.reject(j)}for(A=0,v=x.length;A<v;)y=y.then(x[A++],x[A++]);return y}getUri(r){r=ni(this.defaults,r);const o=Yp(r.baseURL,r.url,r.allowAbsoluteUrls);return Hp(o,r.params,r.paramsSerializer)}};M.forEach(["delete","get","head","options"],function(r){Pa.prototype[r]=function(o,u){return this.request(ni(u||{},{method:r,url:o,data:(u||{}).data}))}});M.forEach(["post","put","patch"],function(r){function o(u){return function(d,p,g){return this.request(ni(g||{},{method:r,headers:u?{"Content-Type":"multipart/form-data"}:{},url:d,data:p}))}}Pa.prototype[r]=o(),Pa.prototype[r+"Form"]=o(!0)});let j5=class Jp{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const u=this;this.promise.then(f=>{if(!u._listeners)return;let d=u._listeners.length;for(;d-- >0;)u._listeners[d](f);u._listeners=null}),this.promise.then=f=>{let d;const p=new Promise(g=>{u.subscribe(g),d=g}).then(f);return p.cancel=function(){u.unsubscribe(d)},p},r(function(d,p,g){u.reason||(u.reason=new el(d,p,g),o(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const r=new AbortController,o=u=>{r.abort(u)};return this.subscribe(o),r.signal.unsubscribe=()=>this.unsubscribe(o),r.signal}static source(){let r;return{token:new Jp(function(f){r=f}),cancel:r}}};function D5(a){return function(o){return a.apply(null,o)}}function O5(a){return M.isObject(a)&&a.isAxiosError===!0}const Pc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pc).forEach(([a,r])=>{Pc[r]=a});function Fp(a){const r=new Pa(a),o=Ap(Pa.prototype.request,r);return M.extend(o,Pa.prototype,r,{allOwnKeys:!0}),M.extend(o,r,null,{allOwnKeys:!0}),o.create=function(f){return Fp(ni(a,f))},o}const Le=Fp(xr);Le.Axios=Pa;Le.CanceledError=el;Le.CancelToken=j5;Le.isCancel=Vp;Le.VERSION=Kp;Le.toFormData=oo;Le.AxiosError=De;Le.Cancel=Le.CanceledError;Le.all=function(r){return Promise.all(r)};Le.spread=D5;Le.isAxiosError=O5;Le.mergeConfig=ni;Le.AxiosHeaders=Wt;Le.formToJSON=a=>qp(M.isHTMLForm(a)?new FormData(a):a);Le.getAdapter=Qp.getAdapter;Le.HttpStatusCode=Pc;Le.default=Le;const{Axios:Ov,AxiosError:_v,CanceledError:kv,isCancel:Cv,CancelToken:Rv,VERSION:Nv,all:Mv,Cancel:Uv,isAxiosError:Bv,spread:Hv,toFormData:Lv,AxiosHeaders:qv,HttpStatusCode:Vv,formToJSON:Gv,getAdapter:Yv,mergeConfig:Xv}=Le;var yr=a=>a.type==="checkbox",Wa=a=>a instanceof Date,qt=a=>a==null;const Wp=a=>typeof a=="object";var ft=a=>!qt(a)&&!Array.isArray(a)&&Wp(a)&&!Wa(a),_5=a=>ft(a)&&a.target?yr(a.target)?a.target.checked:a.target.value:a,k5=a=>a.substring(0,a.search(/\.\d+(\.|$)/))||a,C5=(a,r)=>a.has(k5(r)),R5=a=>{const r=a.constructor&&a.constructor.prototype;return ft(r)&&r.hasOwnProperty("isPrototypeOf")},pf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function jt(a){let r;const o=Array.isArray(a),u=typeof FileList<"u"?a instanceof FileList:!1;if(a instanceof Date)r=new Date(a);else if(!(pf&&(a instanceof Blob||u))&&(o||ft(a)))if(r=o?[]:Object.create(Object.getPrototypeOf(a)),!o&&!R5(a))r=a;else for(const f in a)a.hasOwnProperty(f)&&(r[f]=jt(a[f]));else return a;return r}var fo=a=>/^\w*$/.test(a),mt=a=>a===void 0,mf=a=>Array.isArray(a)?a.filter(Boolean):[],gf=a=>mf(a.replace(/["|']|\]/g,"").split(/\.|\[/)),he=(a,r,o)=>{if(!r||!ft(a))return o;const u=(fo(r)?[r]:gf(r)).reduce((f,d)=>qt(f)?f:f[d],a);return mt(u)||u===a?mt(a[r])?o:a[r]:u},Bn=a=>typeof a=="boolean",nt=(a,r,o)=>{let u=-1;const f=fo(r)?[r]:gf(r),d=f.length,p=d-1;for(;++u<d;){const g=f[u];let w=o;if(u!==p){const x=a[g];w=ft(x)||Array.isArray(x)?x:isNaN(+f[u+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;a[g]=w,a=a[g]}};const Bh={BLUR:"blur",FOCUS_OUT:"focusout"},Tn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ia={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},N5=Dt.createContext(null);N5.displayName="HookFormContext";var M5=(a,r,o,u=!0)=>{const f={defaultValues:r._defaultValues};for(const d in a)Object.defineProperty(f,d,{get:()=>{const p=d;return r._proxyFormState[p]!==Tn.all&&(r._proxyFormState[p]=!u||Tn.all),a[p]}});return f};const U5=typeof window<"u"?Dt.useLayoutEffect:Dt.useEffect;var Ln=a=>typeof a=="string",B5=(a,r,o,u,f)=>Ln(a)?(u&&r.watch.add(a),he(o,a,f)):Array.isArray(a)?a.map(d=>(u&&r.watch.add(d),he(o,d))):(u&&(r.watchAll=!0),o),ef=a=>qt(a)||!Wp(a);function ka(a,r,o=new WeakSet){if(ef(a)||ef(r))return a===r;if(Wa(a)&&Wa(r))return a.getTime()===r.getTime();const u=Object.keys(a),f=Object.keys(r);if(u.length!==f.length)return!1;if(o.has(a)||o.has(r))return!0;o.add(a),o.add(r);for(const d of u){const p=a[d];if(!f.includes(d))return!1;if(d!=="ref"){const g=r[d];if(Wa(p)&&Wa(g)||ft(p)&&ft(g)||Array.isArray(p)&&Array.isArray(g)?!ka(p,g,o):p!==g)return!1}}return!0}var H5=(a,r,o,u,f)=>r?{...o[a],types:{...o[a]&&o[a].types?o[a].types:{},[u]:f||!0}}:{},rr=a=>Array.isArray(a)?a:[a],Hh=()=>{let a=[];return{get observers(){return a},next:f=>{for(const d of a)d.next&&d.next(f)},subscribe:f=>(a.push(f),{unsubscribe:()=>{a=a.filter(d=>d!==f)}}),unsubscribe:()=>{a=[]}}},Kt=a=>ft(a)&&!Object.keys(a).length,xf=a=>a.type==="file",An=a=>typeof a=="function",Is=a=>{if(!pf)return!1;const r=a?a.ownerDocument:0;return a instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ip=a=>a.type==="select-multiple",yf=a=>a.type==="radio",L5=a=>yf(a)||yr(a),qc=a=>Is(a)&&a.isConnected;function q5(a,r){const o=r.slice(0,-1).length;let u=0;for(;u<o;)a=mt(a)?u++:a[r[u++]];return a}function V5(a){for(const r in a)if(a.hasOwnProperty(r)&&!mt(a[r]))return!1;return!0}function pt(a,r){const o=Array.isArray(r)?r:fo(r)?[r]:gf(r),u=o.length===1?a:q5(a,o),f=o.length-1,d=o[f];return u&&delete u[d],f!==0&&(ft(u)&&Kt(u)||Array.isArray(u)&&V5(u))&&pt(a,o.slice(0,-1)),a}var Pp=a=>{for(const r in a)if(An(a[r]))return!0;return!1};function Ps(a,r={}){const o=Array.isArray(a);if(ft(a)||o)for(const u in a)Array.isArray(a[u])||ft(a[u])&&!Pp(a[u])?(r[u]=Array.isArray(a[u])?[]:{},Ps(a[u],r[u])):qt(a[u])||(r[u]=!0);return r}function em(a,r,o){const u=Array.isArray(a);if(ft(a)||u)for(const f in a)Array.isArray(a[f])||ft(a[f])&&!Pp(a[f])?mt(r)||ef(o[f])?o[f]=Array.isArray(a[f])?Ps(a[f],[]):{...Ps(a[f])}:em(a[f],qt(r)?{}:r[f],o[f]):o[f]=!ka(a[f],r[f]);return o}var ar=(a,r)=>em(a,r,Ps(r));const Lh={value:!1,isValid:!1},qh={value:!0,isValid:!0};var tm=a=>{if(Array.isArray(a)){if(a.length>1){const r=a.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:r,isValid:!!r.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!mt(a[0].attributes.value)?mt(a[0].value)||a[0].value===""?qh:{value:a[0].value,isValid:!0}:qh:Lh}return Lh},nm=(a,{valueAsNumber:r,valueAsDate:o,setValueAs:u})=>mt(a)?a:r?a===""?NaN:a&&+a:o&&Ln(a)?new Date(a):u?u(a):a;const Vh={isValid:!1,value:null};var am=a=>Array.isArray(a)?a.reduce((r,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:r,Vh):Vh;function Gh(a){const r=a.ref;return xf(r)?r.files:yf(r)?am(a.refs).value:Ip(r)?[...r.selectedOptions].map(({value:o})=>o):yr(r)?tm(a.refs).value:nm(mt(r.value)?a.ref.value:r.value,a)}var G5=(a,r,o,u)=>{const f={};for(const d of a){const p=he(r,d);p&&nt(f,d,p._f)}return{criteriaMode:o,names:[...a],fields:f,shouldUseNativeValidation:u}},eo=a=>a instanceof RegExp,ir=a=>mt(a)?a:eo(a)?a.source:ft(a)?eo(a.value)?a.value.source:a.value:a,Yh=a=>({isOnSubmit:!a||a===Tn.onSubmit,isOnBlur:a===Tn.onBlur,isOnChange:a===Tn.onChange,isOnAll:a===Tn.all,isOnTouch:a===Tn.onTouched});const Xh="AsyncFunction";var Y5=a=>!!a&&!!a.validate&&!!(An(a.validate)&&a.validate.constructor.name===Xh||ft(a.validate)&&Object.values(a.validate).find(r=>r.constructor.name===Xh)),X5=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate),$h=(a,r,o)=>!o&&(r.watchAll||r.watch.has(a)||[...r.watch].some(u=>a.startsWith(u)&&/^\.\w+/.test(a.slice(u.length))));const sr=(a,r,o,u)=>{for(const f of o||Object.keys(a)){const d=he(a,f);if(d){const{_f:p,...g}=d;if(p){if(p.refs&&p.refs[0]&&r(p.refs[0],f)&&!u)return!0;if(p.ref&&r(p.ref,p.name)&&!u)return!0;if(sr(g,r))break}else if(ft(g)&&sr(g,r))break}}};function Zh(a,r,o){const u=he(a,o);if(u||fo(o))return{error:u,name:o};const f=o.split(".");for(;f.length;){const d=f.join("."),p=he(r,d),g=he(a,d);if(p&&!Array.isArray(p)&&o!==d)return{name:o};if(g&&g.type)return{name:d,error:g};if(g&&g.root&&g.root.type)return{name:`${d}.root`,error:g.root};f.pop()}return{name:o}}var $5=(a,r,o,u)=>{o(a);const{name:f,...d}=a;return Kt(d)||Object.keys(d).length>=Object.keys(r).length||Object.keys(d).find(p=>r[p]===(!u||Tn.all))},Z5=(a,r,o)=>!a||!r||a===r||rr(a).some(u=>u&&(o?u===r:u.startsWith(r)||r.startsWith(u))),Q5=(a,r,o,u,f)=>f.isOnAll?!1:!o&&f.isOnTouch?!(r||a):(o?u.isOnBlur:f.isOnBlur)?!a:(o?u.isOnChange:f.isOnChange)?a:!0,K5=(a,r)=>!mf(he(a,r)).length&&pt(a,r),J5=(a,r,o)=>{const u=rr(he(a,o));return nt(u,"root",r[o]),nt(a,o,u),a},Xs=a=>Ln(a);function Qh(a,r,o="validate"){if(Xs(a)||Array.isArray(a)&&a.every(Xs)||Bn(a)&&!a)return{type:o,message:Xs(a)?a:"",ref:r}}var Xi=a=>ft(a)&&!eo(a)?a:{value:a,message:""},Kh=async(a,r,o,u,f,d)=>{const{ref:p,refs:g,required:w,maxLength:x,minLength:y,min:A,max:v,pattern:X,validate:j,name:B,valueAsNumber:R,mount:J}=a._f,U=he(o,B);if(!J||r.has(B))return{};const Z=g?g[0]:p,re=P=>{f&&Z.reportValidity&&(Z.setCustomValidity(Bn(P)?"":P||""),Z.reportValidity())},q={},te=yf(p),Q=yr(p),le=te||Q,Ee=(R||xf(p))&&mt(p.value)&&mt(U)||Is(p)&&p.value===""||U===""||Array.isArray(U)&&!U.length,Ge=H5.bind(null,B,u,q),Re=(P,se,ye,ve=ia.maxLength,_=ia.minLength)=>{const F=P?se:ye;q[B]={type:P?ve:_,message:F,ref:p,...Ge(P?ve:_,F)}};if(d?!Array.isArray(U)||!U.length:w&&(!le&&(Ee||qt(U))||Bn(U)&&!U||Q&&!tm(g).isValid||te&&!am(g).isValid)){const{value:P,message:se}=Xs(w)?{value:!!w,message:w}:Xi(w);if(P&&(q[B]={type:ia.required,message:se,ref:Z,...Ge(ia.required,se)},!u))return re(se),q}if(!Ee&&(!qt(A)||!qt(v))){let P,se;const ye=Xi(v),ve=Xi(A);if(!qt(U)&&!isNaN(U)){const _=p.valueAsNumber||U&&+U;qt(ye.value)||(P=_>ye.value),qt(ve.value)||(se=_<ve.value)}else{const _=p.valueAsDate||new Date(U),F=E=>new Date(new Date().toDateString()+" "+E),fe=p.type=="time",Se=p.type=="week";Ln(ye.value)&&U&&(P=fe?F(U)>F(ye.value):Se?U>ye.value:_>new Date(ye.value)),Ln(ve.value)&&U&&(se=fe?F(U)<F(ve.value):Se?U<ve.value:_<new Date(ve.value))}if((P||se)&&(Re(!!P,ye.message,ve.message,ia.max,ia.min),!u))return re(q[B].message),q}if((x||y)&&!Ee&&(Ln(U)||d&&Array.isArray(U))){const P=Xi(x),se=Xi(y),ye=!qt(P.value)&&U.length>+P.value,ve=!qt(se.value)&&U.length<+se.value;if((ye||ve)&&(Re(ye,P.message,se.message),!u))return re(q[B].message),q}if(X&&!Ee&&Ln(U)){const{value:P,message:se}=Xi(X);if(eo(P)&&!U.match(P)&&(q[B]={type:ia.pattern,message:se,ref:p,...Ge(ia.pattern,se)},!u))return re(se),q}if(j){if(An(j)){const P=await j(U,o),se=Qh(P,Z);if(se&&(q[B]={...se,...Ge(ia.validate,se.message)},!u))return re(se.message),q}else if(ft(j)){let P={};for(const se in j){if(!Kt(P)&&!u)break;const ye=Qh(await j[se](U,o),Z,se);ye&&(P={...ye,...Ge(se,ye.message)},re(ye.message),u&&(q[B]=P))}if(!Kt(P)&&(q[B]={ref:Z,...P},!u))return q}}return re(!0),q};const F5={mode:Tn.onSubmit,reValidateMode:Tn.onChange,shouldFocusError:!0};function W5(a={}){let r={...F5,...a},o={submitCount:0,isDirty:!1,isReady:!1,isLoading:An(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},f=ft(r.defaultValues)||ft(r.values)?jt(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:jt(f),p={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},w,x=0;const y={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let A={...y};const v={array:Hh(),state:Hh()},X=r.criteriaMode===Tn.all,j=S=>D=>{clearTimeout(x),x=setTimeout(S,D)},B=async S=>{if(!r.disabled&&(y.isValid||A.isValid||S)){const D=r.resolver?Kt((await Q()).errors):await Ee(u,!0);D!==o.isValid&&v.state.next({isValid:D})}},R=(S,D)=>{!r.disabled&&(y.isValidating||y.validatingFields||A.isValidating||A.validatingFields)&&((S||Array.from(g.mount)).forEach(L=>{L&&(D?nt(o.validatingFields,L,D):pt(o.validatingFields,L))}),v.state.next({validatingFields:o.validatingFields,isValidating:!Kt(o.validatingFields)}))},J=(S,D=[],L,ie,ae=!0,ee=!0)=>{if(ie&&L&&!r.disabled){if(p.action=!0,ee&&Array.isArray(he(u,S))){const ce=L(he(u,S),ie.argA,ie.argB);ae&&nt(u,S,ce)}if(ee&&Array.isArray(he(o.errors,S))){const ce=L(he(o.errors,S),ie.argA,ie.argB);ae&&nt(o.errors,S,ce),K5(o.errors,S)}if((y.touchedFields||A.touchedFields)&&ee&&Array.isArray(he(o.touchedFields,S))){const ce=L(he(o.touchedFields,S),ie.argA,ie.argB);ae&&nt(o.touchedFields,S,ce)}(y.dirtyFields||A.dirtyFields)&&(o.dirtyFields=ar(f,d)),v.state.next({name:S,isDirty:Re(S,D),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else nt(d,S,D)},U=(S,D)=>{nt(o.errors,S,D),v.state.next({errors:o.errors})},Z=S=>{o.errors=S,v.state.next({errors:o.errors,isValid:!1})},re=(S,D,L,ie)=>{const ae=he(u,S);if(ae){const ee=he(d,S,mt(L)?he(f,S):L);mt(ee)||ie&&ie.defaultChecked||D?nt(d,S,D?ee:Gh(ae._f)):ye(S,ee),p.mount&&B()}},q=(S,D,L,ie,ae)=>{let ee=!1,ce=!1;const Te={name:S};if(!r.disabled){if(!L||ie){(y.isDirty||A.isDirty)&&(ce=o.isDirty,o.isDirty=Te.isDirty=Re(),ee=ce!==Te.isDirty);const je=ka(he(f,S),D);ce=!!he(o.dirtyFields,S),je?pt(o.dirtyFields,S):nt(o.dirtyFields,S,!0),Te.dirtyFields=o.dirtyFields,ee=ee||(y.dirtyFields||A.dirtyFields)&&ce!==!je}if(L){const je=he(o.touchedFields,S);je||(nt(o.touchedFields,S,L),Te.touchedFields=o.touchedFields,ee=ee||(y.touchedFields||A.touchedFields)&&je!==L)}ee&&ae&&v.state.next(Te)}return ee?Te:{}},te=(S,D,L,ie)=>{const ae=he(o.errors,S),ee=(y.isValid||A.isValid)&&Bn(D)&&o.isValid!==D;if(r.delayError&&L?(w=j(()=>U(S,L)),w(r.delayError)):(clearTimeout(x),w=null,L?nt(o.errors,S,L):pt(o.errors,S)),(L?!ka(ae,L):ae)||!Kt(ie)||ee){const ce={...ie,...ee&&Bn(D)?{isValid:D}:{},errors:o.errors,name:S};o={...o,...ce},v.state.next(ce)}},Q=async S=>{R(S,!0);const D=await r.resolver(d,r.context,G5(S||g.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return R(S),D},le=async S=>{const{errors:D}=await Q(S);if(S)for(const L of S){const ie=he(D,L);ie?nt(o.errors,L,ie):pt(o.errors,L)}else o.errors=D;return D},Ee=async(S,D,L={valid:!0})=>{for(const ie in S){const ae=S[ie];if(ae){const{_f:ee,...ce}=ae;if(ee){const Te=g.array.has(ee.name),je=ae._f&&Y5(ae._f);je&&y.validatingFields&&R([ie],!0);const $e=await Kh(ae,g.disabled,d,X,r.shouldUseNativeValidation&&!D,Te);if(je&&y.validatingFields&&R([ie]),$e[ee.name]&&(L.valid=!1,D))break;!D&&(he($e,ee.name)?Te?J5(o.errors,$e,ee.name):nt(o.errors,ee.name,$e[ee.name]):pt(o.errors,ee.name))}!Kt(ce)&&await Ee(ce,D,L)}}return L.valid},Ge=()=>{for(const S of g.unMount){const D=he(u,S);D&&(D._f.refs?D._f.refs.every(L=>!qc(L)):!qc(D._f.ref))&&xe(S)}g.unMount=new Set},Re=(S,D)=>!r.disabled&&(S&&D&&nt(d,S,D),!ka(E(),f)),P=(S,D,L)=>B5(S,g,{...p.mount?d:mt(D)?f:Ln(S)?{[S]:D}:D},L,D),se=S=>mf(he(p.mount?d:f,S,r.shouldUnregister?he(f,S,[]):[])),ye=(S,D,L={})=>{const ie=he(u,S);let ae=D;if(ie){const ee=ie._f;ee&&(!ee.disabled&&nt(d,S,nm(D,ee)),ae=Is(ee.ref)&&qt(D)?"":D,Ip(ee.ref)?[...ee.ref.options].forEach(ce=>ce.selected=ae.includes(ce.value)):ee.refs?yr(ee.ref)?ee.refs.forEach(ce=>{(!ce.defaultChecked||!ce.disabled)&&(Array.isArray(ae)?ce.checked=!!ae.find(Te=>Te===ce.value):ce.checked=ae===ce.value||!!ae)}):ee.refs.forEach(ce=>ce.checked=ce.value===ae):xf(ee.ref)?ee.ref.value="":(ee.ref.value=ae,ee.ref.type||v.state.next({name:S,values:jt(d)})))}(L.shouldDirty||L.shouldTouch)&&q(S,ae,L.shouldTouch,L.shouldDirty,!0),L.shouldValidate&&Se(S)},ve=(S,D,L)=>{for(const ie in D){if(!D.hasOwnProperty(ie))return;const ae=D[ie],ee=S+"."+ie,ce=he(u,ee);(g.array.has(S)||ft(ae)||ce&&!ce._f)&&!Wa(ae)?ve(ee,ae,L):ye(ee,ae,L)}},_=(S,D,L={})=>{const ie=he(u,S),ae=g.array.has(S),ee=jt(D);nt(d,S,ee),ae?(v.array.next({name:S,values:jt(d)}),(y.isDirty||y.dirtyFields||A.isDirty||A.dirtyFields)&&L.shouldDirty&&v.state.next({name:S,dirtyFields:ar(f,d),isDirty:Re(S,ee)})):ie&&!ie._f&&!qt(ee)?ve(S,ee,L):ye(S,ee,L),$h(S,g)&&v.state.next({...o,name:S}),v.state.next({name:p.mount?S:void 0,values:jt(d)})},F=async S=>{p.mount=!0;const D=S.target;let L=D.name,ie=!0;const ae=he(u,L),ee=je=>{ie=Number.isNaN(je)||Wa(je)&&isNaN(je.getTime())||ka(je,he(d,L,je))},ce=Yh(r.mode),Te=Yh(r.reValidateMode);if(ae){let je,$e;const Vt=D.type?Gh(ae._f):_5(S),Ht=S.type===Bh.BLUR||S.type===Bh.FOCUS_OUT,ra=!X5(ae._f)&&!r.resolver&&!he(o.errors,L)&&!ae._f.deps||Q5(Ht,he(o.touchedFields,L),o.isSubmitted,Te,ce),St=$h(L,g,Ht);nt(d,L,Vt),Ht?(!D||!D.readOnly)&&(ae._f.onBlur&&ae._f.onBlur(S),w&&w(0)):ae._f.onChange&&ae._f.onChange(S);const Sn=q(L,Vt,Ht),kt=!Kt(Sn)||St;if(!Ht&&v.state.next({name:L,type:S.type,values:jt(d)}),ra)return(y.isValid||A.isValid)&&(r.mode==="onBlur"?Ht&&B():Ht||B()),kt&&v.state.next({name:L,...St?{}:Sn});if(!Ht&&St&&v.state.next({...o}),r.resolver){const{errors:wt}=await Q([L]);if(ee(Vt),ie){const qn=Zh(o.errors,u,L),ii=Zh(wt,u,qn.name||L);je=ii.error,L=ii.name,$e=Kt(wt)}}else R([L],!0),je=(await Kh(ae,g.disabled,d,X,r.shouldUseNativeValidation))[L],R([L]),ee(Vt),ie&&(je?$e=!1:(y.isValid||A.isValid)&&($e=await Ee(u,!0)));ie&&(ae._f.deps&&Se(ae._f.deps),te(L,$e,je,Sn))}},fe=(S,D)=>{if(he(o.errors,D)&&S.focus)return S.focus(),1},Se=async(S,D={})=>{let L,ie;const ae=rr(S);if(r.resolver){const ee=await le(mt(S)?S:ae);L=Kt(ee),ie=S?!ae.some(ce=>he(ee,ce)):L}else S?(ie=(await Promise.all(ae.map(async ee=>{const ce=he(u,ee);return await Ee(ce&&ce._f?{[ee]:ce}:ce)}))).every(Boolean),!(!ie&&!o.isValid)&&B()):ie=L=await Ee(u);return v.state.next({...!Ln(S)||(y.isValid||A.isValid)&&L!==o.isValid?{}:{name:S},...r.resolver||!S?{isValid:L}:{},errors:o.errors}),D.shouldFocus&&!ie&&sr(u,fe,S?ae:g.mount),ie},E=S=>{const D={...p.mount?d:f};return mt(S)?D:Ln(S)?he(D,S):S.map(L=>he(D,L))},G=(S,D)=>({invalid:!!he((D||o).errors,S),isDirty:!!he((D||o).dirtyFields,S),error:he((D||o).errors,S),isValidating:!!he(o.validatingFields,S),isTouched:!!he((D||o).touchedFields,S)}),ne=S=>{S&&rr(S).forEach(D=>pt(o.errors,D)),v.state.next({errors:S?o.errors:{}})},H=(S,D,L)=>{const ie=(he(u,S,{_f:{}})._f||{}).ref,ae=he(o.errors,S)||{},{ref:ee,message:ce,type:Te,...je}=ae;nt(o.errors,S,{...je,...D,ref:ie}),v.state.next({name:S,errors:o.errors,isValid:!1}),L&&L.shouldFocus&&ie&&ie.focus&&ie.focus()},I=(S,D)=>An(S)?v.state.subscribe({next:L=>"values"in L&&S(P(void 0,D),L)}):P(S,D,!0),oe=S=>v.state.subscribe({next:D=>{Z5(S.name,D.name,S.exact)&&$5(D,S.formState||y,it,S.reRenderRoot)&&S.callback({values:{...d},...o,...D,defaultValues:f})}}).unsubscribe,ue=S=>(p.mount=!0,A={...A,...S.formState},oe({...S,formState:A})),xe=(S,D={})=>{for(const L of S?rr(S):g.mount)g.mount.delete(L),g.array.delete(L),D.keepValue||(pt(u,L),pt(d,L)),!D.keepError&&pt(o.errors,L),!D.keepDirty&&pt(o.dirtyFields,L),!D.keepTouched&&pt(o.touchedFields,L),!D.keepIsValidating&&pt(o.validatingFields,L),!r.shouldUnregister&&!D.keepDefaultValue&&pt(f,L);v.state.next({values:jt(d)}),v.state.next({...o,...D.keepDirty?{isDirty:Re()}:{}}),!D.keepIsValid&&B()},me=({disabled:S,name:D})=>{(Bn(S)&&p.mount||S||g.disabled.has(D))&&(S?g.disabled.add(D):g.disabled.delete(D))},ke=(S,D={})=>{let L=he(u,S);const ie=Bn(D.disabled)||Bn(r.disabled);return nt(u,S,{...L||{},_f:{...L&&L._f?L._f:{ref:{name:S}},name:S,mount:!0,...D}}),g.mount.add(S),L?me({disabled:Bn(D.disabled)?D.disabled:r.disabled,name:S}):re(S,!0,D.value),{...ie?{disabled:D.disabled||r.disabled}:{},...r.progressive?{required:!!D.required,min:ir(D.min),max:ir(D.max),minLength:ir(D.minLength),maxLength:ir(D.maxLength),pattern:ir(D.pattern)}:{},name:S,onChange:F,onBlur:F,ref:ae=>{if(ae){ke(S,D),L=he(u,S);const ee=mt(ae.value)&&ae.querySelectorAll&&ae.querySelectorAll("input,select,textarea")[0]||ae,ce=L5(ee),Te=L._f.refs||[];if(ce?Te.find(je=>je===ee):ee===L._f.ref)return;nt(u,S,{_f:{...L._f,...ce?{refs:[...Te.filter(qc),ee,...Array.isArray(he(f,S))?[{}]:[]],ref:{type:ee.type,name:S}}:{ref:ee}}}),re(S,!1,void 0,ee)}else L=he(u,S,{}),L._f&&(L._f.mount=!1),(r.shouldUnregister||D.shouldUnregister)&&!(C5(g.array,S)&&p.action)&&g.unMount.add(S)}}},at=()=>r.shouldFocusError&&sr(u,fe,g.mount),bt=S=>{Bn(S)&&(v.state.next({disabled:S}),sr(u,(D,L)=>{const ie=he(u,L);ie&&(D.disabled=ie._f.disabled||S,Array.isArray(ie._f.refs)&&ie._f.refs.forEach(ae=>{ae.disabled=ie._f.disabled||S}))},0,!1))},pe=(S,D)=>async L=>{let ie;L&&(L.preventDefault&&L.preventDefault(),L.persist&&L.persist());let ae=jt(d);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:ee,values:ce}=await Q();o.errors=ee,ae=jt(ce)}else await Ee(u);if(g.disabled.size)for(const ee of g.disabled)pt(ae,ee);if(pt(o.errors,"root"),Kt(o.errors)){v.state.next({errors:{}});try{await S(ae,L)}catch(ee){ie=ee}}else D&&await D({...o.errors},L),at(),setTimeout(at);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Kt(o.errors)&&!ie,submitCount:o.submitCount+1,errors:o.errors}),ie)throw ie},be=(S,D={})=>{he(u,S)&&(mt(D.defaultValue)?_(S,jt(he(f,S))):(_(S,D.defaultValue),nt(f,S,jt(D.defaultValue))),D.keepTouched||pt(o.touchedFields,S),D.keepDirty||(pt(o.dirtyFields,S),o.isDirty=D.defaultValue?Re(S,jt(he(f,S))):Re()),D.keepError||(pt(o.errors,S),y.isValid&&B()),v.state.next({...o}))},Be=(S,D={})=>{const L=S?jt(S):f,ie=jt(L),ae=Kt(S),ee=ae?f:ie;if(D.keepDefaultValues||(f=L),!D.keepValues){if(D.keepDirtyValues){const ce=new Set([...g.mount,...Object.keys(ar(f,d))]);for(const Te of Array.from(ce))he(o.dirtyFields,Te)?nt(ee,Te,he(d,Te)):_(Te,he(ee,Te))}else{if(pf&&mt(S))for(const ce of g.mount){const Te=he(u,ce);if(Te&&Te._f){const je=Array.isArray(Te._f.refs)?Te._f.refs[0]:Te._f.ref;if(Is(je)){const $e=je.closest("form");if($e){$e.reset();break}}}}if(D.keepFieldsRef)for(const ce of g.mount)_(ce,he(ee,ce));else u={}}d=r.shouldUnregister?D.keepDefaultValues?jt(f):{}:jt(ee),v.array.next({values:{...ee}}),v.state.next({values:{...ee}})}g={mount:D.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!y.isValid||!!D.keepIsValid||!!D.keepDirtyValues,p.watch=!!r.shouldUnregister,v.state.next({submitCount:D.keepSubmitCount?o.submitCount:0,isDirty:ae?!1:D.keepDirty?o.isDirty:!!(D.keepDefaultValues&&!ka(S,f)),isSubmitted:D.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:ae?{}:D.keepDirtyValues?D.keepDefaultValues&&d?ar(f,d):o.dirtyFields:D.keepDefaultValues&&S?ar(f,S):D.keepDirty?o.dirtyFields:{},touchedFields:D.keepTouched?o.touchedFields:{},errors:D.keepErrors?o.errors:{},isSubmitSuccessful:D.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:f})},qe=(S,D)=>Be(An(S)?S(d):S,D),xt=(S,D={})=>{const L=he(u,S),ie=L&&L._f;if(ie){const ae=ie.refs?ie.refs[0]:ie.ref;ae.focus&&(ae.focus(),D.shouldSelect&&An(ae.select)&&ae.select())}},it=S=>{o={...o,...S}},Pt={control:{register:ke,unregister:xe,getFieldState:G,handleSubmit:pe,setError:H,_subscribe:oe,_runSchema:Q,_focusError:at,_getWatch:P,_getDirty:Re,_setValid:B,_setFieldArray:J,_setDisabledField:me,_setErrors:Z,_getFieldArray:se,_reset:Be,_resetDefaultValues:()=>An(r.defaultValues)&&r.defaultValues().then(S=>{qe(S,r.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:Ge,_disableForm:bt,_subjects:v,_proxyFormState:y,get _fields(){return u},get _formValues(){return d},get _state(){return p},set _state(S){p=S},get _defaultValues(){return f},get _names(){return g},set _names(S){g=S},get _formState(){return o},get _options(){return r},set _options(S){r={...r,...S}}},subscribe:ue,trigger:Se,register:ke,handleSubmit:pe,watch:I,setValue:_,getValues:E,reset:qe,resetField:be,clearErrors:ne,unregister:xe,setError:H,setFocus:xt,getFieldState:G};return{...Pt,formControl:Pt}}function vr(a={}){const r=Dt.useRef(void 0),o=Dt.useRef(void 0),[u,f]=Dt.useState({isDirty:!1,isValidating:!1,isLoading:An(a.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1,isReady:!1,defaultValues:An(a.defaultValues)?void 0:a.defaultValues});if(!r.current)if(a.formControl)r.current={...a.formControl,formState:u},a.defaultValues&&!An(a.defaultValues)&&a.formControl.reset(a.defaultValues,a.resetOptions);else{const{formControl:p,...g}=W5(a);r.current={...g,formState:u}}const d=r.current.control;return d._options=a,U5(()=>{const p=d._subscribe({formState:d._proxyFormState,callback:()=>f({...d._formState}),reRenderRoot:!0});return f(g=>({...g,isReady:!0})),d._formState.isReady=!0,p},[d]),Dt.useEffect(()=>d._disableForm(a.disabled),[d,a.disabled]),Dt.useEffect(()=>{a.mode&&(d._options.mode=a.mode),a.reValidateMode&&(d._options.reValidateMode=a.reValidateMode)},[d,a.mode,a.reValidateMode]),Dt.useEffect(()=>{a.errors&&(d._setErrors(a.errors),d._focusError())},[d,a.errors]),Dt.useEffect(()=>{a.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,a.shouldUnregister]),Dt.useEffect(()=>{if(d._proxyFormState.isDirty){const p=d._getDirty();p!==u.isDirty&&d._subjects.state.next({isDirty:p})}},[d,u.isDirty]),Dt.useEffect(()=>{a.values&&!ka(a.values,o.current)?(d._reset(a.values,{keepFieldsRef:!0,...d._options.resetOptions}),o.current=a.values,f(p=>({...p}))):d._resetDefaultValues()},[d,a.values]),Dt.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),r.current.formState=M5(u,d),r.current}var Jt=function(){return Jt=Object.assign||function(r){for(var o,u=1,f=arguments.length;u<f;u++){o=arguments[u];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(r[d]=o[d])}return r},Jt.apply(this,arguments)};function cr(a,r,o){if(o||arguments.length===2)for(var u=0,f=r.length,d;u<f;u++)(d||!(u in r))&&(d||(d=Array.prototype.slice.call(r,0,u)),d[u]=r[u]);return a.concat(d||Array.prototype.slice.call(r))}var et="-ms-",or="-moz-",Xe="-webkit-",im="comm",ho="rule",vf="decl",I5="@import",lm="@keyframes",P5="@layer",rm=Math.abs,bf=String.fromCharCode,tf=Object.assign;function e2(a,r){return Ot(a,0)^45?(((r<<2^Ot(a,0))<<2^Ot(a,1))<<2^Ot(a,2))<<2^Ot(a,3):0}function sm(a){return a.trim()}function la(a,r){return(a=r.exec(a))?a[0]:a}function _e(a,r,o){return a.replace(r,o)}function $s(a,r,o){return a.indexOf(r,o)}function Ot(a,r){return a.charCodeAt(r)|0}function Qi(a,r,o){return a.slice(r,o)}function Hn(a){return a.length}function om(a){return a.length}function lr(a,r){return r.push(a),a}function t2(a,r){return a.map(r).join("")}function Jh(a,r){return a.filter(function(o){return!la(o,r)})}var po=1,Ki=1,um=0,bn=0,gt=0,tl="";function mo(a,r,o,u,f,d,p,g){return{value:a,root:r,parent:o,type:u,props:f,children:d,line:po,column:Ki,length:p,return:"",siblings:g}}function _a(a,r){return tf(mo("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function $i(a){for(;a.root;)a=_a(a.root,{children:[a]});lr(a,a.siblings)}function n2(){return gt}function a2(){return gt=bn>0?Ot(tl,--bn):0,Ki--,gt===10&&(Ki=1,po--),gt}function jn(){return gt=bn<um?Ot(tl,bn++):0,Ki++,gt===10&&(Ki=1,po++),gt}function ei(){return Ot(tl,bn)}function Zs(){return bn}function go(a,r){return Qi(tl,a,r)}function nf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i2(a){return po=Ki=1,um=Hn(tl=a),bn=0,[]}function l2(a){return tl="",a}function Vc(a){return sm(go(bn-1,af(a===91?a+2:a===40?a+1:a)))}function r2(a){for(;(gt=ei())&&gt<33;)jn();return nf(a)>2||nf(gt)>3?"":" "}function s2(a,r){for(;--r&&jn()&&!(gt<48||gt>102||gt>57&&gt<65||gt>70&&gt<97););return go(a,Zs()+(r<6&&ei()==32&&jn()==32))}function af(a){for(;jn();)switch(gt){case a:return bn;case 34:case 39:a!==34&&a!==39&&af(gt);break;case 40:a===41&&af(a);break;case 92:jn();break}return bn}function o2(a,r){for(;jn()&&a+gt!==57;)if(a+gt===84&&ei()===47)break;return"/*"+go(r,bn-1)+"*"+bf(a===47?a:jn())}function u2(a){for(;!nf(ei());)jn();return go(a,bn)}function c2(a){return l2(Qs("",null,null,null,[""],a=i2(a),0,[0],a))}function Qs(a,r,o,u,f,d,p,g,w){for(var x=0,y=0,A=p,v=0,X=0,j=0,B=1,R=1,J=1,U=0,Z="",re=f,q=d,te=u,Q=Z;R;)switch(j=U,U=jn()){case 40:if(j!=108&&Ot(Q,A-1)==58){$s(Q+=_e(Vc(U),"&","&\f"),"&\f",rm(x?g[x-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:Q+=Vc(U);break;case 9:case 10:case 13:case 32:Q+=r2(j);break;case 92:Q+=s2(Zs()-1,7);continue;case 47:switch(ei()){case 42:case 47:lr(f2(o2(jn(),Zs()),r,o,w),w);break;default:Q+="/"}break;case 123*B:g[x++]=Hn(Q)*J;case 125*B:case 59:case 0:switch(U){case 0:case 125:R=0;case 59+y:J==-1&&(Q=_e(Q,/\f/g,"")),X>0&&Hn(Q)-A&&lr(X>32?Wh(Q+";",u,o,A-1,w):Wh(_e(Q," ","")+";",u,o,A-2,w),w);break;case 59:Q+=";";default:if(lr(te=Fh(Q,r,o,x,y,f,g,Z,re=[],q=[],A,d),d),U===123)if(y===0)Qs(Q,r,te,te,re,d,A,g,q);else switch(v===99&&Ot(Q,3)===110?100:v){case 100:case 108:case 109:case 115:Qs(a,te,te,u&&lr(Fh(a,te,te,0,0,f,g,Z,f,re=[],A,q),q),f,q,A,g,u?re:q);break;default:Qs(Q,te,te,te,[""],q,0,g,q)}}x=y=X=0,B=J=1,Z=Q="",A=p;break;case 58:A=1+Hn(Q),X=j;default:if(B<1){if(U==123)--B;else if(U==125&&B++==0&&a2()==125)continue}switch(Q+=bf(U),U*B){case 38:J=y>0?1:(Q+="\f",-1);break;case 44:g[x++]=(Hn(Q)-1)*J,J=1;break;case 64:ei()===45&&(Q+=Vc(jn())),v=ei(),y=A=Hn(Z=Q+=u2(Zs())),U++;break;case 45:j===45&&Hn(Q)==2&&(B=0)}}return d}function Fh(a,r,o,u,f,d,p,g,w,x,y,A){for(var v=f-1,X=f===0?d:[""],j=om(X),B=0,R=0,J=0;B<u;++B)for(var U=0,Z=Qi(a,v+1,v=rm(R=p[B])),re=a;U<j;++U)(re=sm(R>0?X[U]+" "+Z:_e(Z,/&\f/g,X[U])))&&(w[J++]=re);return mo(a,r,o,f===0?ho:g,w,x,y,A)}function f2(a,r,o,u){return mo(a,r,o,im,bf(n2()),Qi(a,2,-2),0,u)}function Wh(a,r,o,u,f){return mo(a,r,o,vf,Qi(a,0,u),Qi(a,u+1,-1),u,f)}function cm(a,r,o){switch(e2(a,r)){case 5103:return Xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+a+a;case 4789:return or+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+a+or+a+et+a+a;case 5936:switch(Ot(a,r+11)){case 114:return Xe+a+et+_e(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Xe+a+et+_e(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Xe+a+et+_e(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Xe+a+et+a+a;case 6165:return Xe+a+et+"flex-"+a+a;case 5187:return Xe+a+_e(a,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+et+"flex-$1$2")+a;case 5443:return Xe+a+et+"flex-item-"+_e(a,/flex-|-self/g,"")+(la(a,/flex-|baseline/)?"":et+"grid-row-"+_e(a,/flex-|-self/g,""))+a;case 4675:return Xe+a+et+"flex-line-pack"+_e(a,/align-content|flex-|-self/g,"")+a;case 5548:return Xe+a+et+_e(a,"shrink","negative")+a;case 5292:return Xe+a+et+_e(a,"basis","preferred-size")+a;case 6060:return Xe+"box-"+_e(a,"-grow","")+Xe+a+et+_e(a,"grow","positive")+a;case 4554:return Xe+_e(a,/([^-])(transform)/g,"$1"+Xe+"$2")+a;case 6187:return _e(_e(_e(a,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),a,"")+a;case 5495:case 3959:return _e(a,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return _e(_e(a,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+a+a;case 4200:if(!la(a,/flex-|baseline/))return et+"grid-column-align"+Qi(a,r)+a;break;case 2592:case 3360:return et+_e(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,f){return r=f,la(u.props,/grid-\w+-end/)})?~$s(a+(o=o[r].value),"span",0)?a:et+_e(a,"-start","")+a+et+"grid-row-span:"+(~$s(o,"span",0)?la(o,/\d+/):+la(o,/\d+/)-+la(a,/\d+/))+";":et+_e(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return la(u.props,/grid-\w+-start/)})?a:et+_e(_e(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return _e(a,/(.+)-inline(.+)/,Xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(a)-1-r>6)switch(Ot(a,r+1)){case 109:if(Ot(a,r+4)!==45)break;case 102:return _e(a,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+or+(Ot(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~$s(a,"stretch",0)?cm(_e(a,"stretch","fill-available"),r,o)+a:a}break;case 5152:case 5920:return _e(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,d,p,g,w,x){return et+f+":"+d+x+(p?et+f+"-span:"+(g?w:+w-+d)+x:"")+a});case 4949:if(Ot(a,r+6)===121)return _e(a,":",":"+Xe)+a;break;case 6444:switch(Ot(a,Ot(a,14)===45?18:11)){case 120:return _e(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Xe+(Ot(a,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+et+"$2box$3")+a;case 100:return _e(a,":",":"+et)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _e(a,"scroll-","scroll-snap-")+a}return a}function to(a,r){for(var o="",u=0;u<a.length;u++)o+=r(a[u],u,a,r)||"";return o}function d2(a,r,o,u){switch(a.type){case P5:if(a.children.length)break;case I5:case vf:return a.return=a.return||a.value;case im:return"";case lm:return a.return=a.value+"{"+to(a.children,u)+"}";case ho:if(!Hn(a.value=a.props.join(",")))return""}return Hn(o=to(a.children,u))?a.return=a.value+"{"+o+"}":""}function h2(a){var r=om(a);return function(o,u,f,d){for(var p="",g=0;g<r;g++)p+=a[g](o,u,f,d)||"";return p}}function p2(a){return function(r){r.root||(r=r.return)&&a(r)}}function m2(a,r,o,u){if(a.length>-1&&!a.return)switch(a.type){case vf:a.return=cm(a.value,a.length,o);return;case lm:return to([_a(a,{value:_e(a.value,"@","@"+Xe)})],u);case ho:if(a.length)return t2(o=a.props,function(f){switch(la(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$i(_a(a,{props:[_e(f,/:(read-\w+)/,":"+or+"$1")]})),$i(_a(a,{props:[f]})),tf(a,{props:Jh(o,u)});break;case"::placeholder":$i(_a(a,{props:[_e(f,/:(plac\w+)/,":"+Xe+"input-$1")]})),$i(_a(a,{props:[_e(f,/:(plac\w+)/,":"+or+"$1")]})),$i(_a(a,{props:[_e(f,/:(plac\w+)/,et+"input-$1")]})),$i(_a(a,{props:[f]})),tf(a,{props:Jh(o,u)});break}return""})}}var g2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},Ji=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",fm="active",dm="data-styled-version",xo="6.1.19",Sf=`/*!sc*/
`,no=typeof window<"u"&&typeof document<"u",x2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),yo=Object.freeze([]),Fi=Object.freeze({});function y2(a,r,o){return o===void 0&&(o=Fi),a.theme!==o.theme&&a.theme||r||o.theme}var hm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),v2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b2=/(^-|-$)/g;function Ih(a){return a.replace(v2,"-").replace(b2,"")}var S2=/(a)(d)/gi,Us=52,Ph=function(a){return String.fromCharCode(a+(a>25?39:97))};function lf(a){var r,o="";for(r=Math.abs(a);r>Us;r=r/Us|0)o=Ph(r%Us)+o;return(Ph(r%Us)+o).replace(S2,"$1-$2")}var Gc,pm=5381,Zi=function(a,r){for(var o=r.length;o;)a=33*a^r.charCodeAt(--o);return a},mm=function(a){return Zi(pm,a)};function gm(a){return lf(mm(a)>>>0)}function w2(a){return a.displayName||a.name||"Component"}function Yc(a){return typeof a=="string"&&!0}var xm=typeof Symbol=="function"&&Symbol.for,ym=xm?Symbol.for("react.memo"):60115,E2=xm?Symbol.for("react.forward_ref"):60112,z2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A2=((Gc={})[E2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[ym]=vm,Gc);function ep(a){return("type"in(r=a)&&r.type.$$typeof)===ym?vm:"$$typeof"in a?A2[a.$$typeof]:z2;var r}var j2=Object.defineProperty,D2=Object.getOwnPropertyNames,tp=Object.getOwnPropertySymbols,O2=Object.getOwnPropertyDescriptor,_2=Object.getPrototypeOf,np=Object.prototype;function bm(a,r,o){if(typeof r!="string"){if(np){var u=_2(r);u&&u!==np&&bm(a,u,o)}var f=D2(r);tp&&(f=f.concat(tp(r)));for(var d=ep(a),p=ep(r),g=0;g<f.length;++g){var w=f[g];if(!(w in T2||o&&o[w]||p&&w in p||d&&w in d)){var x=O2(r,w);try{j2(a,w,x)}catch{}}}}return a}function Wi(a){return typeof a=="function"}function wf(a){return typeof a=="object"&&"styledComponentId"in a}function Ia(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function rf(a,r){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function fr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function sf(a,r,o){if(o===void 0&&(o=!1),!o&&!fr(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var u=0;u<r.length;u++)a[u]=sf(a[u],r[u]);else if(fr(r))for(var u in r)a[u]=sf(a[u],r[u]);return a}function Ef(a,r){Object.defineProperty(a,"toString",{value:r})}function br(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var k2=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var o=0,u=0;u<r;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,d=f;r>=d;)if((d<<=1)<0)throw br(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var p=f;p<d;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(r+1),w=(p=0,o.length);p<w;p++)this.tag.insertRule(g,o[p])&&(this.groupSizes[r]++,g++)},a.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],u=this.indexOfGroup(r),f=u+o;this.groupSizes[r]=0;for(var d=u;d<f;d++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var u=this.groupSizes[r],f=this.indexOfGroup(r),d=f+u,p=f;p<d;p++)o+="".concat(this.tag.getRule(p)).concat(Sf);return o},a}(),Ks=new Map,ao=new Map,Js=1,Bs=function(a){if(Ks.has(a))return Ks.get(a);for(;ao.has(Js);)Js++;var r=Js++;return Ks.set(a,r),ao.set(r,a),r},C2=function(a,r){Js=r+1,Ks.set(a,r),ao.set(r,a)},R2="style[".concat(Ji,"][").concat(dm,'="').concat(xo,'"]'),N2=new RegExp("^".concat(Ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),M2=function(a,r,o){for(var u,f=o.split(","),d=0,p=f.length;d<p;d++)(u=f[d])&&a.registerName(r,u)},U2=function(a,r){for(var o,u=((o=r.textContent)!==null&&o!==void 0?o:"").split(Sf),f=[],d=0,p=u.length;d<p;d++){var g=u[d].trim();if(g){var w=g.match(N2);if(w){var x=0|parseInt(w[1],10),y=w[2];x!==0&&(C2(y,x),M2(a,y,w[3]),a.getTag().insertRules(x,f)),f.length=0}else f.push(g)}}},ap=function(a){for(var r=document.querySelectorAll(R2),o=0,u=r.length;o<u;o++){var f=r[o];f&&f.getAttribute(Ji)!==fm&&(U2(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function B2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sm=function(a){var r=document.head,o=a||r,u=document.createElement("style"),f=function(g){var w=Array.from(g.querySelectorAll("style[".concat(Ji,"]")));return w[w.length-1]}(o),d=f!==void 0?f.nextSibling:null;u.setAttribute(Ji,fm),u.setAttribute(dm,xo);var p=B2();return p&&u.setAttribute("nonce",p),o.insertBefore(u,d),u},H2=function(){function a(r){this.element=Sm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,f=0,d=u.length;f<d;f++){var p=u[f];if(p.ownerNode===o)return p}throw br(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},a}(),L2=function(){function a(r){this.element=Sm(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),q2=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),ip=no,V2={isServer:!no,useCSSOMInjection:!x2},wm=function(){function a(r,o,u){r===void 0&&(r=Fi),o===void 0&&(o={});var f=this;this.options=Jt(Jt({},V2),r),this.gs=o,this.names=new Map(u),this.server=!!r.isServer,!this.server&&no&&ip&&(ip=!1,ap(this)),Ef(this,function(){return function(d){for(var p=d.getTag(),g=p.length,w="",x=function(A){var v=function(J){return ao.get(J)}(A);if(v===void 0)return"continue";var X=d.names.get(v),j=p.getGroup(A);if(X===void 0||!X.size||j.length===0)return"continue";var B="".concat(Ji,".g").concat(A,'[id="').concat(v,'"]'),R="";X!==void 0&&X.forEach(function(J){J.length>0&&(R+="".concat(J,","))}),w+="".concat(j).concat(B,'{content:"').concat(R,'"}').concat(Sf)},y=0;y<g;y++)x(y);return w}(f)})}return a.registerId=function(r){return Bs(r)},a.prototype.rehydrate=function(){!this.server&&no&&ap(this)},a.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new a(Jt(Jt({},this.options),r),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var u=o.useCSSOMInjection,f=o.target;return o.isServer?new q2(f):u?new H2(f):new L2(f)}(this.options),new k2(r)));var r},a.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},a.prototype.registerName=function(r,o){if(Bs(r),this.names.has(r))this.names.get(r).add(o);else{var u=new Set;u.add(o),this.names.set(r,u)}},a.prototype.insertRules=function(r,o,u){this.registerName(r,o),this.getTag().insertRules(Bs(r),u)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(Bs(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),G2=/&/g,Y2=/^\s*\/\/.*$/gm;function Em(a,r){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(u){return"".concat(r," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Em(o.children,r)),o})}function X2(a){var r,o,u,f=Fi,d=f.options,p=d===void 0?Fi:d,g=f.plugins,w=g===void 0?yo:g,x=function(v,X,j){return j.startsWith(o)&&j.endsWith(o)&&j.replaceAll(o,"").length>0?".".concat(r):v},y=w.slice();y.push(function(v){v.type===ho&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(G2,o).replace(u,x))}),p.prefix&&y.push(m2),y.push(d2);var A=function(v,X,j,B){X===void 0&&(X=""),j===void 0&&(j=""),B===void 0&&(B="&"),r=B,o=X,u=new RegExp("\\".concat(o,"\\b"),"g");var R=v.replace(Y2,""),J=c2(j||X?"".concat(j," ").concat(X," { ").concat(R," }"):R);p.namespace&&(J=Em(J,p.namespace));var U=[];return to(J,h2(y.concat(p2(function(Z){return U.push(Z)})))),U};return A.hash=w.length?w.reduce(function(v,X){return X.name||br(15),Zi(v,X.name)},pm).toString():"",A}var $2=new wm,of=X2(),zm=Dt.createContext({shouldForwardProp:void 0,styleSheet:$2,stylis:of});zm.Consumer;Dt.createContext(void 0);function lp(){return V.useContext(zm)}var Tm=function(){function a(r,o){var u=this;this.inject=function(f,d){d===void 0&&(d=of);var p=u.name+d.hash;f.hasNameForId(u.id,p)||f.insertRules(u.id,p,d(u.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,Ef(this,function(){throw br(12,String(u.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=of),this.name+r.hash},a}(),Z2=function(a){return a>="A"&&a<="Z"};function rp(a){for(var r="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;Z2(u)?r+="-"+u.toLowerCase():r+=u}return r.startsWith("ms-")?"-"+r:r}var Am=function(a){return a==null||a===!1||a===""},jm=function(a){var r,o,u=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!Am(d)&&(Array.isArray(d)&&d.isCss||Wi(d)?u.push("".concat(rp(f),":"),d,";"):fr(d)?u.push.apply(u,cr(cr(["".concat(f," {")],jm(d),!1),["}"],!1)):u.push("".concat(rp(f),": ").concat((r=f,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in g2||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function ti(a,r,o,u){if(Am(a))return[];if(wf(a))return[".".concat(a.styledComponentId)];if(Wi(a)){if(!Wi(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var f=a(r);return ti(f,r,o,u)}var d;return a instanceof Tm?o?(a.inject(o,u),[a.getName(u)]):[a]:fr(a)?jm(a):Array.isArray(a)?Array.prototype.concat.apply(yo,a.map(function(p){return ti(p,r,o,u)})):[a.toString()]}function Q2(a){for(var r=0;r<a.length;r+=1){var o=a[r];if(Wi(o)&&!wf(o))return!1}return!0}var K2=mm(xo),J2=function(){function a(r,o,u){this.rules=r,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Q2(r),this.componentId=o,this.baseHash=Zi(K2,o),this.baseStyle=u,wm.registerId(o)}return a.prototype.generateAndInjectStyles=function(r,o,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))f=Ia(f,this.staticRulesId);else{var d=rf(ti(this.rules,r,o,u)),p=lf(Zi(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,p)){var g=u(d,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,g)}f=Ia(f,p),this.staticRulesId=p}else{for(var w=Zi(this.baseHash,u.hash),x="",y=0;y<this.rules.length;y++){var A=this.rules[y];if(typeof A=="string")x+=A;else if(A){var v=rf(ti(A,r,o,u));w=Zi(w,v+y),x+=v}}if(x){var X=lf(w>>>0);o.hasNameForId(this.componentId,X)||o.insertRules(this.componentId,X,u(x,".".concat(X),void 0,this.componentId)),f=Ia(f,X)}}return f},a}(),Dm=Dt.createContext(void 0);Dm.Consumer;var Xc={};function F2(a,r,o){var u=wf(a),f=a,d=!Yc(a),p=r.attrs,g=p===void 0?yo:p,w=r.componentId,x=w===void 0?function(re,q){var te=typeof re!="string"?"sc":Ih(re);Xc[te]=(Xc[te]||0)+1;var Q="".concat(te,"-").concat(gm(xo+te+Xc[te]));return q?"".concat(q,"-").concat(Q):Q}(r.displayName,r.parentComponentId):w,y=r.displayName,A=y===void 0?function(re){return Yc(re)?"styled.".concat(re):"Styled(".concat(w2(re),")")}(a):y,v=r.displayName&&r.componentId?"".concat(Ih(r.displayName),"-").concat(r.componentId):r.componentId||x,X=u&&f.attrs?f.attrs.concat(g).filter(Boolean):g,j=r.shouldForwardProp;if(u&&f.shouldForwardProp){var B=f.shouldForwardProp;if(r.shouldForwardProp){var R=r.shouldForwardProp;j=function(re,q){return B(re,q)&&R(re,q)}}else j=B}var J=new J2(o,v,u?f.componentStyle:void 0);function U(re,q){return function(te,Q,le){var Ee=te.attrs,Ge=te.componentStyle,Re=te.defaultProps,P=te.foldedComponentIds,se=te.styledComponentId,ye=te.target,ve=Dt.useContext(Dm),_=lp(),F=te.shouldForwardProp||_.shouldForwardProp,fe=y2(Q,ve,Re)||Fi,Se=function(oe,ue,xe){for(var me,ke=Jt(Jt({},ue),{className:void 0,theme:xe}),at=0;at<oe.length;at+=1){var bt=Wi(me=oe[at])?me(ke):me;for(var pe in bt)ke[pe]=pe==="className"?Ia(ke[pe],bt[pe]):pe==="style"?Jt(Jt({},ke[pe]),bt[pe]):bt[pe]}return ue.className&&(ke.className=Ia(ke.className,ue.className)),ke}(Ee,Q,fe),E=Se.as||ye,G={};for(var ne in Se)Se[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&Se.theme===fe||(ne==="forwardedAs"?G.as=Se.forwardedAs:F&&!F(ne,E)||(G[ne]=Se[ne]));var H=function(oe,ue){var xe=lp(),me=oe.generateAndInjectStyles(ue,xe.styleSheet,xe.stylis);return me}(Ge,Se),I=Ia(P,se);return H&&(I+=" "+H),Se.className&&(I+=" "+Se.className),G[Yc(E)&&!hm.has(E)?"class":"className"]=I,le&&(G.ref=le),V.createElement(E,G)}(Z,re,q)}U.displayName=A;var Z=Dt.forwardRef(U);return Z.attrs=X,Z.componentStyle=J,Z.displayName=A,Z.shouldForwardProp=j,Z.foldedComponentIds=u?Ia(f.foldedComponentIds,f.styledComponentId):"",Z.styledComponentId=v,Z.target=u?f.target:a,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=u?function(q){for(var te=[],Q=1;Q<arguments.length;Q++)te[Q-1]=arguments[Q];for(var le=0,Ee=te;le<Ee.length;le++)sf(q,Ee[le],!0);return q}({},f.defaultProps,re):re}}),Ef(Z,function(){return".".concat(Z.styledComponentId)}),d&&bm(Z,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function sp(a,r){for(var o=[a[0]],u=0,f=r.length;u<f;u+=1)o.push(r[u],a[u+1]);return o}var op=function(a){return Object.assign(a,{isCss:!0})};function Om(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(Wi(a)||fr(a))return op(ti(sp(yo,cr([a],r,!0))));var u=a;return r.length===0&&u.length===1&&typeof u[0]=="string"?ti(u):op(ti(sp(u,r)))}function uf(a,r,o){if(o===void 0&&(o=Fi),!r)throw br(1,r);var u=function(f){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(r,o,Om.apply(void 0,cr([f],d,!1)))};return u.attrs=function(f){return uf(a,r,Jt(Jt({},o),{attrs:Array.prototype.concat(o.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return uf(a,r,Jt(Jt({},o),f))},u}var _m=function(a){return uf(F2,a)},W=_m;hm.forEach(function(a){W[a]=_m(a)});function It(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var u=rf(Om.apply(void 0,cr([a],r,!1))),f=gm(u);return new Tm(f,u)}var $c,up;function W2(){if(up)return $c;up=1;var a="Expected a function",r=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,w=typeof Ms=="object"&&Ms&&Ms.Object===Object&&Ms,x=typeof self=="object"&&self&&self.Object===Object&&self,y=w||x||Function("return this")(),A=Object.prototype,v=A.toString,X=Math.max,j=Math.min,B=function(){return y.Date.now()};function R(q,te,Q){var le,Ee,Ge,Re,P,se,ye=0,ve=!1,_=!1,F=!0;if(typeof q!="function")throw new TypeError(a);te=re(te)||0,J(Q)&&(ve=!!Q.leading,_="maxWait"in Q,Ge=_?X(re(Q.maxWait)||0,te):Ge,F="trailing"in Q?!!Q.trailing:F);function fe(xe){var me=le,ke=Ee;return le=Ee=void 0,ye=xe,Re=q.apply(ke,me),Re}function Se(xe){return ye=xe,P=setTimeout(ne,te),ve?fe(xe):Re}function E(xe){var me=xe-se,ke=xe-ye,at=te-me;return _?j(at,Ge-ke):at}function G(xe){var me=xe-se,ke=xe-ye;return se===void 0||me>=te||me<0||_&&ke>=Ge}function ne(){var xe=B();if(G(xe))return H(xe);P=setTimeout(ne,E(xe))}function H(xe){return P=void 0,F&&le?fe(xe):(le=Ee=void 0,Re)}function I(){P!==void 0&&clearTimeout(P),ye=0,le=se=Ee=P=void 0}function oe(){return P===void 0?Re:H(B())}function ue(){var xe=B(),me=G(xe);if(le=arguments,Ee=this,se=xe,me){if(P===void 0)return Se(se);if(_)return P=setTimeout(ne,te),fe(se)}return P===void 0&&(P=setTimeout(ne,te)),Re}return ue.cancel=I,ue.flush=oe,ue}function J(q){var te=typeof q;return!!q&&(te=="object"||te=="function")}function U(q){return!!q&&typeof q=="object"}function Z(q){return typeof q=="symbol"||U(q)&&v.call(q)==o}function re(q){if(typeof q=="number")return q;if(Z(q))return r;if(J(q)){var te=typeof q.valueOf=="function"?q.valueOf():q;q=J(te)?te+"":te}if(typeof q!="string")return q===0?q:+q;q=q.replace(u,"");var Q=d.test(q);return Q||p.test(q)?g(q.slice(2),Q?2:8):f.test(q)?r:+q}return $c=R,$c}W2();var I2=typeof window<"u"?V.useLayoutEffect:V.useEffect;function P2(a,r,o,u){const f=V.useRef(r);I2(()=>{f.current=r},[r]),V.useEffect(()=>{const d=window;if(!(d&&d.addEventListener))return;const p=g=>{f.current(g)};return d.addEventListener(a,p,u),()=>{d.removeEventListener(a,p,u)}},[a,o,u])}function nl(a,r,o="mousedown",u={}){P2(o,f=>{const d=f.target;if(!d||!d.isConnected)return;(Array.isArray(a)?a.filter(g=>!!g.current).every(g=>g.current&&!g.current.contains(d)):a.current&&!a.current.contains(d))&&r(f)},void 0,u)}const dr=W.button`
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }

  span {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;

    span {
      font-size: 16px;
    }
  }
`,Ii=W.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px 24px 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`;W.img`
  height: 60px;
  max-width: 200px;
  margin: 0 auto 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
`;const ai=W.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Sr=W.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,Ca=W.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 16px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  margin-bottom: 16px;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${a=>a.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px
      ${a=>a.mainColor?`${a.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }

  &:hover {
    border-color: #d1d5db;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 16px;
  }
`,_t=W.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,vo=W.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,bo=W.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: ${a=>a.mainColor||"#e7333c"};

  &:focus {
    outline: 2px solid
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    outline-offset: 2px;
  }
`,hr=W.button`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 15px;
  }
`,wr=W.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffff80;
  z-index: 1;
`,So=W.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 32px 20px 32px;
  padding-top: 16px;
  font-size: 12px;
  gap: 6px;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  border-top: 1px solid #e1e5e9;

  &:hover {
    color: #333;
  }

  svg {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin: 20px 24px 16px 24px;
    padding-top: 14px;
  }
`,km=W.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,zf=W.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${a=>a.mainColor||"#333"};
  margin: 10px;
`,Tf=W.p`
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: ${a=>a.mainColor||"#666"};
  width: 100%;
  margin: 3% auto 5%;
`,ey=It`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,ty=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${ey} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    margin: -4px 0 0 -4px;
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,Af=W.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;

  @keyframes fadeInSmooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,ny=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,io=W.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  width: 85%;
  max-width: 420px;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: slideInSmooth 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;

  @keyframes slideInSmooth {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) translateZ(0);
    }
  }

  /* Gezen ışık efekti */
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${ny} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0"};
  }

  /* Modal'ın ana arka planı için beyaz maske */
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 14px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 14px;

    &::before {
      border-radius: 18px;
    }

    &::after {
      border-radius: 12px;
    }
  }
`,wo=W.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
`,ay=W.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,iy=({enabledPhoneSubscription:a,enabledEmailSubscription:r,mainColor:o,forceOpen:u})=>{const[f,d]=V.useState(u||!1),[p,g]=V.useState(!1),[w,x]=V.useState(""),[y,A]=V.useState(!1),[v,X]=V.useState(""),[j,B]=V.useState(""),R=V.useRef(null),{register:J,handleSubmit:U,formState:{errors:Z}}=vr(),re=()=>{d(!1);const Q=new Date;Q.setDate(Q.getDate()+7);const le="expires="+Q.toUTCString();document.cookie=`upsellPhoneSubscription=false;${le};path=/`};R!==null&&nl(R,()=>{re()});const te=U(async Q=>{g(!0),x("");try{j&&r&&await Le.post("https://api.upsell.co/emailsubscription",{name:Q.name,surname:Q.surname,email:j}),v&&a&&await Le.post("https://api.upsell.co/PhoneSubscription",{name:Q.name,surname:Q.surname,phone:"90"+v}),A(!0);const le=new Date;le.setDate(le.getDate()+7);const Ee="expires="+le.toUTCString();document.cookie=`upsellPhoneSubscription=true;${Ee};path=/`,d(!1)}catch{x("Bu telefon numarası veya e-posta adresi zaten kayıtlı.")}finally{g(!1)}});return V.useEffect(()=>{if(u){d(!0);return}if(typeof window<"u"&&!document.cookie.split(";").some(le=>le.trim().startsWith("upsellPhoneSubscription="))&&(a||r)){const le=setTimeout(()=>{d(!0)},2e4);return()=>{clearTimeout(le)}}},[u,a,r]),!a&&!r?null:c.jsx(c.Fragment,{children:c.jsxs(Af,{style:{display:!y&&!f?"none":"block"},children:[y&&c.jsx(io,{children:c.jsxs(km,{children:[c.jsx(dr,{children:c.jsx("span",{onClick:()=>{A(!1)},style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),c.jsx(zf,{mainColor:o,children:"Teşekkürler!"}),c.jsx(Tf,{mainColor:o,children:"Aboneliğiniz başarıyla alındı."})]})}),f&&c.jsxs(io,{ref:R,mainColor:o,children:[c.jsxs(wo,{children:[p&&c.jsx(wr,{children:c.jsxs(ty,{children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]})}),!y&&c.jsxs(c.Fragment,{children:[c.jsx(dr,{onClick:()=>{re()},children:c.jsx("span",{style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),c.jsxs(Ii,{children:[c.jsx(ai,{mainColor:o,children:"Bültenimize Abone Olun, Fırsatları İlk Siz Yakalayın!"}),c.jsx(Sr,{children:"İndirim ve fırsatlardan ilk sizin haberiniz olsun, kayıt olun ve avantajlardan yararlanın!"}),c.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"100%"},onSubmit:Q=>te(Q),children:[c.jsxs(ay,{children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[c.jsx(Ca,{mainColor:o,placeholder:"Adınızı Giriniz",...J("name",{required:"Ad boş bırakılamaz"})}),Z.name&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.name?.message?.toString()??null})})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[c.jsx(Ca,{mainColor:o,placeholder:"Soyadınızı Giriniz",...J("surname",{required:"Soyadı boş bırakılamaz"})}),Z.surname&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.surname?.message?.toString()??null})})]})]}),a&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[c.jsx(Ca,{mainColor:o,type:"tel",onInput:Q=>{Q.currentTarget.value=Q.currentTarget.value.replace(/[^0-9]/g,"")},...J("phone",{required:a&&!r?"Telefon boş bırakılamaz":a&&r&&!j?"Telefon veya e-posta girmelisiniz":!1,pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:Q=>Q&&(/^(\d)\1+$/.test(Q)||/^5(\d)\1{8}$/.test(Q)||Q==="5123456789"||Q==="5987654321")?"Geçersiz telefon numarası":!0}),onChange:Q=>{X(Q.target.value)},placeholder:"5XXXXXXXXX",maxLength:10}),Z.phone&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.phone?.message?.toString()??null})})]}),r&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[c.jsx(Ca,{mainColor:o,placeholder:"E-postanızı Giriniz",...J("email",{required:r&&!a?"E-posta boş bırakılamaz":r&&a&&!v?"E-posta veya telefon girmelisiniz":!1,pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}}),onChange:Q=>{B(Q.target.value)}}),Z.email&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.email?.message?.toString()??null})})]}),c.jsxs(vo,{children:[c.jsx(bo,{mainColor:o,...J("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),c.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",c.jsx("a",{style:{color:o||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),Z.kvkk&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.kvkk?.message?.toString()??null})}),w&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),c.jsx("div",{children:c.jsx(hr,{mainColor:o,children:"Kaydet"})})]})]})]})]}),c.jsxs(So,{target:"_blank",href:"https://upsell.co/",children:[c.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),c.jsxs("g",{children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})})},ly=a=>It`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 ${`${a}66`};
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`,ry=W.button`
  position: fixed;
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  font-size: 11px;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 15px
    ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  transition: all 0.3s ease;
  animation: ${a=>ly(a.mainColor||"#e7333c")} 2s
    infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}50`:"rgba(231, 51, 60, 0.4)"};
  }

  &:active {
    transform: translateY(0);
  }

  left: ${a=>a.position===1?"50px":"auto"};
  right: ${a=>a.position===0?"50px":"auto"};
  bottom: 50px;

  @media (max-width: 600px) {
    width: 65px;
    height: 65px;
    font-size: 9px;
    padding: 6px;
    border-radius: 50%;
    bottom: 75px;
    left: ${a=>a.position===1?"50px":"auto"};
    right: ${a=>a.position===0?"50px":"auto"};
  }
`,sy=W.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;

  @keyframes fadeInSmooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,Cm=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,oy=W.div`
  position: absolute;
  bottom: 150px;
  ${a=>a.position===1?"left: 50px;":"right: 50px;"}
  background: white;
  border-radius: 16px;
  width: 400px;
  max-width: 500px;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 99999;
  animation: slideInFromCorner 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
  transform-origin: ${a=>a.position===1?"bottom left":"bottom right"};

  @keyframes slideInFromCorner {
    0% {
      opacity: 0;
      transform: scale(0.9) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateZ(0);
    }
  }

  /* Gezen ışık efekti */
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${Cm} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0"};
  }

  /* Modal'ın ana arka planı için beyaz maske */
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 14px;
    z-index: -1;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    width: 340px;
    bottom: 135px;
    border-radius: 14px;

    &::before {
      border-radius: 18px;
    }

    &::after {
      border-radius: 12px;
    }
  }

  @media (max-width: 400px) {
    width: 95%;
    max-width: 360px;
  }
`,cp=W.div`
  text-align: center;
  font-weight: 700;
  padding: 24px 32px 20px 32px;
  color: ${a=>a.mainColor||"#333"};
  font-size: 20px;
  line-height: 1.3;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px 24px 16px 24px;
  }
`,fp=W.button`
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }

  span {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;

    span {
      font-size: 16px;
    }
  }
`,uy=W.div`
  overflow-y: auto;
  padding: 0 24px 24px 24px;
  max-height: 400px;
  width: auto;
  margin: 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;

    &:hover {
      background: #a8a8a8;
    }
  }

  @media (max-width: 768px) {
    padding: 0 16px 20px 16px;
    max-height: 350px;
  }
`,cy=W.div`
  list-style-type: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-bottom: 12px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: white;
    border-color: #e1e5e9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`,fy=W.a`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
`,dy=W.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,hy=W.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
`,py=W.div`
  color: #333;
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 8px;
`,my=W.div`
  font-size: 16px;
  color: ${a=>a.mainColor||"#e7333c"};
  font-weight: 700;
  margin-top: auto;
`,jf=W.div`
  display: none;
`,Df=W.div`
  display: none;
`,Of=W.div`
  display: none;
`,gy=W.div`
  position: absolute;
  bottom: 150px;
  ${a=>a.position===1?"left: 50px;":"right: 50px;"}
  background: white;
  border-radius: 20px;
  width: 800px;
  max-width: calc(100vw - 120px);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 99999;
  animation: slideInFromCorner 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
  transform-origin: ${a=>a.position===1?"bottom left":"bottom right"};

  @keyframes slideInFromCorner {
    0% {
      opacity: 0;
      transform: scale(0.9) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateZ(0);
    }
  }

  /* Gezen ışık efekti */
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 24px;
    z-index: -1;
    animation: ${Cm} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0"};
  }

  /* Modal'ın ana arka planı için beyaz maske */
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 18px;
    z-index: -1;
  }

  @media (max-width: 900px) {
    width: 700px;
    max-width: calc(100vw - 100px);
  }

  @media (max-width: 768px) {
    width: 600px;
    max-width: calc(100vw - 80px);
    bottom: 135px;
  }

  @media (max-width: 600px) {
    width: 500px;
    max-width: calc(100vw - 60px);
    border-radius: 16px;

    &::before {
      border-radius: 20px;
    }

    &::after {
      border-radius: 14px;
    }
  }

  @media (max-width: 480px) {
    width: calc(100vw - 40px);
    left: 20px !important;
    right: 20px !important;
  }
`,xy=W.div`
  display: flex;
  gap: 16px;
  padding: 0 24px 24px 24px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;

    &:hover {
      background: #a8a8a8;
    }
  }

  @media (max-width: 768px) {
    padding: 0 16px 20px 16px;
    gap: 12px;

    &::-webkit-scrollbar {
      height: 6px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,yy=W.div`
  list-style-type: none;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  overflow: hidden;
  flex-shrink: 0;
  width: 170px;

  &:hover {
    background: white;
    border-color: #e1e5e9;
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    width: 140px;
  }

  @media (max-width: 480px) {
    width: 130px;
  }
`,vy=W.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
`,by=W.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`,Sy=W.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 8px;
  }
`,wy=W.div`
  color: #333;
  font-weight: 600;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 6px;
  min-height: 38px;

  @media (max-width: 768px) {
    font-size: 12px;
    min-height: 35px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    min-height: 32px;
  }
`,Ey=W.div`
  font-size: 15px;
  color: ${a=>a.mainColor||"#e7333c"};
  font-weight: 700;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,dp=W.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 24px 20px 24px;
  padding-top: 16px;
  font-size: 12px;
  gap: 6px;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  border-top: 1px solid #e1e5e9;

  &:hover {
    color: #333;
  }

  svg {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin: 12px 16px 16px 16px;
    padding-top: 14px;
  }
`,zy=({mainColor:a,forceOpen:r})=>{const[o,u]=V.useState(r||!1),[f,d]=V.useState(!0),[p,g]=V.useState([]),[w,x]=V.useState({title:"",contentTitle:"",position:0,theme:1}),y=V.useRef(null);if(y!==null&&nl(y,()=>{u(!1)}),V.useEffect(()=>{r&&u(!0)},[r]),V.useEffect(()=>{async function j(){d(!0);try{const B=await Le.get("https://api.upsell.co/RecommendedProducts");x({title:B.data.data.title,contentTitle:B.data.data.contentTitle,position:B.data.data.position,theme:B.data.data.theme||1}),g(B.data.data.products)}catch{}finally{d(!1)}}j()},[]),p===null||!(p.length>0&&!f))return null;const v=()=>c.jsxs(oy,{ref:y,position:w.position,mainColor:a,children:[c.jsx(fp,{onClick:()=>u(!1),children:c.jsx("span",{children:"×"})}),c.jsxs(cp,{mainColor:a,children:[w.contentTitle," ✨"]}),c.jsx(uy,{children:p.map(j=>c.jsx(cy,{children:c.jsxs(fy,{href:`${j.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[c.jsx(dy,{src:j.imageUrl,alt:j.title}),c.jsxs(hy,{children:[c.jsx(py,{children:j.title}),c.jsxs(my,{mainColor:a,children:[j.price," TL"]})]})]})},j.productId))}),c.jsxs(dp,{target:"_blank",href:"https://upsell.co/",children:[c.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[c.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),c.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),c.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),c.jsxs("g",{children:[c.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),c.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]}),X=()=>c.jsxs(gy,{ref:y,position:w.position,mainColor:a,children:[c.jsx(fp,{onClick:()=>u(!1),children:c.jsx("span",{children:"×"})}),c.jsxs(cp,{mainColor:a,children:[w.contentTitle," ✨"]}),c.jsx(xy,{children:p.map(j=>c.jsx(yy,{children:c.jsxs(vy,{href:`${j.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[c.jsx(by,{src:j.imageUrl,alt:j.title}),c.jsxs(Sy,{children:[c.jsx(wy,{children:j.title}),c.jsxs(Ey,{mainColor:a,children:[j.price," TL"]})]})]})},j.productId))}),c.jsxs(dp,{target:"_blank",href:"https://upsell.co/",children:[c.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[c.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),c.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),c.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),c.jsxs("g",{children:[c.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),c.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]});return c.jsxs("div",{children:[!r&&c.jsx(ry,{position:w.position,mainColor:a,onClick:()=>{u(!0)},children:w.title}),c.jsx(sy,{style:{display:o?"block":"none"},children:w.theme===2?X():v()})]})},vn=W.div`
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  color: #333;
  font-weight: 600;
  font-size: 15px;
  margin-top: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12), 0 3px 12px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 13px;
    flex-direction: column;
    gap: 8px;
    text-align: center;

    div {
      width: 100% !important;
    }
  }
`,Ty=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ay=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,jy=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Ay} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e7333c;
    margin: -4px 0 0 -4px;
    box-shadow: 0 0 4px rgba(231, 51, 60, 0.5);
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,Dy=W.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  width: 85%;
  max-width: 450px;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  position: relative;
  animation: slideInSmooth 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;

  @keyframes slideInSmooth {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) translateZ(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor||"#e7333c"}dd 90deg,
      ${a=>a.mainColor||"#e7333c"} 110deg,
      ${a=>a.mainColor||"#e7333c"} 120deg,
      ${a=>a.mainColor||"#e7333c"} 130deg,
      ${a=>a.mainColor||"#e7333c"}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 24px;
    z-index: -1;
    animation: ${Ty} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0.8"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 18px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 16px;

    &::before {
      border-radius: 20px;
    }

    &::after {
      border-radius: 14px;
    }
  }
`,Oy=({color:a,forceOpen:r})=>{const[o,u]=V.useState(r||!1),[f,d]=V.useState(null),[p,g]=V.useState(!1),[w,x]=V.useState(!1),y=V.useRef(null);nl(y,()=>{u(!1)}),V.useEffect(()=>{if(r)u(!0);else{const J=document.getElementsByClassName("upsell-ss"),U=()=>u(!0);return Array.from(J).forEach(Z=>{Z.addEventListener("click",U)}),()=>{Array.from(J).forEach(Z=>{Z.removeEventListener("click",U)})}}},[r]);const{register:v,handleSubmit:X,formState:{errors:j}}=vr(),B=X(async J=>{x(!0),g(!1),d(null);try{const Z=(await Le.post("https://api.upsell.co/ticimax/order",{phone:"90"+J.phone})).data;!Z.data||Z.data===null?g(!0):d(Z.data)}catch{g(!0)}finally{x(!1)}}),R=()=>{u(!1),d(null),g(!1)};return c.jsx(Af,{style:{display:o?"block":"none"},children:c.jsxs(Dy,{ref:y,mainColor:a,children:[c.jsxs(wo,{children:[c.jsx(jf,{mainColor:a}),c.jsx(Df,{mainColor:a}),c.jsx(Of,{mainColor:a}),w&&c.jsx(wr,{children:c.jsx(jy,{children:Array.from({length:8}).map((J,U)=>c.jsx("div",{},U))})}),c.jsx(dr,{children:c.jsx("span",{onClick:R,style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f?c.jsxs(Ii,{children:[c.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),c.jsx("div",{style:{width:"50%"},children:f.siparisNo||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),c.jsx("div",{style:{width:"50%"},children:new Date(f.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),c.jsx("div",{style:{width:"50%"},children:f.siparisDurumu||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),c.jsx("div",{style:{width:"50%"},children:f.kargoTakipLink?c.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:f.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),c.jsx("div",{style:{width:"50%"},children:f.kargoTakipNo||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),c.jsx("div",{style:{width:"50%"},children:f.kargoFirmaTanim||"-"})]})]}):c.jsxs(Ii,{children:[c.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),c.jsx(Sr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),c.jsxs("form",{onSubmit:B,children:[c.jsx(Ca,{mainColor:a,type:"tel",onInput:J=>{J.currentTarget.value=J.currentTarget.value.replace(/[^0-9]/g,"")},...v("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:J=>/^(\d)\1+$/.test(J)||/^5(\d)\1{8}$/.test(J)||J==="5123456789"||J==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),j.phone&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:j.phone.message})}),c.jsxs(vo,{children:[c.jsx(bo,{mainColor:a,...v("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),c.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",c.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),j.kvkk&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:j.kvkk.message})}),p&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),c.jsx("div",{children:c.jsx(hr,{mainColor:a,children:"Sorgula"})})]})]})]}),c.jsxs(So,{target:"_blank",href:"https://upsell.co/",children:[c.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),c.jsxs("g",{children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})};W.button`
  font-size: 14px;
  background: #fff;
  color: ${a=>a.mainColor||"#e7333c"};
  border: 1px solid ${a=>a.mainColor||"#e7333c"};
  stroke: ${a=>a.mainColor||"#e7333c"};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: ${a=>a.mainColor||"#e7333c"};
    color: #fff;
    stroke: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }
`;W.strong`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 16px;
  color: ${a=>a.mainColor||"#333"};
  font-weight: 600;
`;const _y=W.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 16px 0;
`,ky=W.label`
  padding: 8px 12px;
  min-height: 36px;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid
    ${a=>a.selected?a.mainColor||"#e7333c":"#e1e5e9"};
  background-color: ${a=>a.selected?a.mainColor||"#e7333c":"#ffffff"};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover:not([disabled]) {
    border-color: ${a=>a.mainColor||"#e7333c"};
    background-color: ${a=>a.selected?a.mainColor||"#e7333c":"#f8f9fa"};
  }

  ${a=>a.disabled&&`
    opacity: 0.5;
    cursor: not-allowed;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      width: 150%;
      left: 50%;
      height: 2px;
      background-color: #dc2626;
      transform: translateY(-50%) translateX(-50%) rotate(45deg);
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      width: 150%;
      left: 50%;
      height: 2px;
      background-color: #dc2626;
      transform: translateY(-50%) translateX(-50%) rotate(-45deg);
    }
  `}
`,Cy=W.span`
  color: ${a=>a.selected?"#fff":"#333"};
  text-decoration: none;
  font-weight: 500;
`,Ry=W.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 8px 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
`,Ny=It`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,My=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Ny} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    margin: -4px 0 0 -4px;
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,Uy=W.div`
  #upsell-ss-reminder {
    font-size: 14px !important;
    background: #fff !important;
    color: ${a=>a.mainColor||"#e7333c"} !important;
    border: 1px solid ${a=>a.mainColor||"#e7333c"} !important;
    stroke: ${a=>a.mainColor||"#e7333c"} !important;
    border-radius: 8px !important;
    padding: 12px 16px !important;
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    cursor: pointer !important;
    transition: background-color 0.3s ease, color 0.3s ease,
      box-shadow 0.3s ease, transform 0.3s ease !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
    min-height: auto !important;
    width: auto !important;
    position: relative !important;

    &:hover {
      background-color: ${a=>a.mainColor||"#e7333c"} !important;
      color: #fff !important;
      stroke: #fff !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px
        ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"} !important;
    }

    &:active {
      transform: translateY(0) !important;
    }

    svg {
      stroke: ${a=>a.mainColor||"#e7333c"} !important;
      fill: ${a=>a.mainColor||"#e7333c"} !important;
      transition: stroke 0.3s ease, fill 0.3s ease !important;
      pointer-events: none !important;
      user-select: none !important;
      flex-shrink: 0 !important;
      width: 20px !important;
      height: 20px !important;
      min-width: 20px !important;
      min-height: 20px !important;
    }

    svg * {
      pointer-events: none !important;
      user-select: none !important;
      transition: none !important;
    }

    svg path,
    svg g {
      pointer-events: none !important;
      transition: none !important;
    }

    &:hover svg {
      stroke: #fff !important;
      fill: #fff !important;
    }

    i {
      pointer-events: none !important;
      user-select: none !important;
    }
  }
`,By=({mainColor:a,stockReminderUsageChannel:r,forceOpen:o})=>{const u=V.useRef(null),[f,d]=V.useState(o||!1),[p,g]=V.useState(!1),[w,x]=V.useState(""),[y,A]=V.useState(!1),[v,X]=V.useState(),[j,B]=V.useState(),[R,J]=V.useState(!1),[U,Z]=V.useState(!1),[re,q]=V.useState(null),te=V.useRef(null),Q=V.useRef(null),le=V.useRef(null),Ee=()=>{document.querySelectorAll(".nostok").forEach(I=>{if(!I.querySelector(".stock_bell_icon")){const oe=document.createElementNS("http://www.w3.org/2000/svg","svg");oe.setAttribute("class","stock_bell_icon"),oe.setAttribute("height","18"),oe.setAttribute("width","18"),oe.setAttribute("viewBox","0 0 512 512"),oe.style.pointerEvents="none";const ue=document.createElementNS("http://www.w3.org/2000/svg","g");["m437.017 39.687c-5.858-5.857-15.356-5.857-21.213 0-5.858 5.858-5.857 15.356 0 21.213 42.688 42.685 66.196 99.438 66.196 159.807 0 8.284 6.716 15 15 15s15-6.716 15-15c0-68.382-26.629-132.67-74.983-181.02z","m96.193 39.688c-5.858-5.857-15.355-5.858-21.213 0-48.352 48.354-74.98 112.641-74.98 181.019 0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.365 23.508-117.118 66.193-159.805 5.858-5.858 5.858-15.356 0-21.214z","m370.358 85.125c-5.858 5.858-5.857 15.355 0 21.213 30.55 30.548 47.374 71.164 47.374 114.368 0 8.284 6.716 15 15 15s15-6.716 15-15c0-51.217-19.945-99.368-56.161-135.582-5.858-5.856-15.355-5.856-21.213.001z","m141.634 85.132c-5.858-5.857-15.356-5.857-21.213.001-36.211 36.216-56.154 84.363-56.154 135.573 0 8.284 6.716 15 15 15s15-6.716 15-15c0-43.197 16.823-83.811 47.369-114.361 5.857-5.858 5.856-15.355-.002-21.213z","m383.467 329.632v-76.792c0-28.011-8.918-54.59-25.79-76.865-14.101-18.617-33.332-33.16-54.939-41.717-3.007-23.111-22.82-41.018-46.738-41.018s-43.733 17.906-46.74 41.018c-21.606 8.558-40.837 23.101-54.938 41.717-16.872 22.275-25.79 48.854-25.79 76.865v76.792l-30.549 61.1c-2.325 4.65-2.076 10.172.657 14.594s7.561 7.114 12.76 7.114h66.774c7.033 36.558 39.246 64.267 77.825 64.267 38.578 0 70.791-27.709 77.823-64.267h66.778c5.199 0 10.027-2.692 12.76-7.114s2.981-9.944.657-14.594zm-127.467 117.075c-21.938 0-40.573-14.413-46.933-34.267h93.865c-6.36 19.854-24.994 34.267-46.932 34.267zm64.266-64.267h-128.533-56.062l21.279-42.559c1.042-2.083 1.583-4.379 1.583-6.708v-80.333c0-42.793 28.625-81.203 69.612-93.405 6.36-1.894 10.72-7.741 10.72-14.376v-4.686c0-9.447 7.687-17.133 17.135-17.133 9.447 0 17.133 7.686 17.133 17.133v4.686c0 6.636 4.36 12.483 10.72 14.376 40.987 12.202 69.614 50.611 69.614 93.405v80.333c0 2.329.542 4.625 1.583 6.708l21.279 42.559z"].forEach(me=>{const ke=document.createElementNS("http://www.w3.org/2000/svg","path");ke.setAttribute("d",me),ue.appendChild(ke)}),oe.appendChild(ue),I.appendChild(oe)}})},Ge=()=>{le.current&&clearInterval(le.current),le.current=setInterval(()=>{document.querySelectorAll(".stock_bell_icon").forEach(I=>{const oe=I;oe.classList.add("bell-animate"),setTimeout(()=>{oe.classList.remove("bell-animate")},1e3)})},3e3)},Re=()=>{const H=document.getElementById("dynamicNostokBellStyles");H&&H.remove();const I=document.createElement("style");I.id="dynamicNostokBellStyles",I.innerHTML=`
      span.nostok {
        display: flex !important;
        justify-content: space-evenly !important;
        align-items: center !important;
        min-width: 65px !important;
        position: relative !important;
      }
      span.nostok span {
        display: none !important;
      }
      .stock_bell_icon {
        width: 18px !important;
        height: 18px !important;
        min-width: 18px !important;
        min-height: 18px !important;
        max-width: 18px !important;
        max-height: 18px !important;
        fill: ${a||"#e7333c"} !important;
        margin-left: 5px !important;
        pointer-events: none !important;
        user-select: none !important;
        flex-shrink: 0 !important;
        transition: none !important;
        will-change: transform, fill !important;
        backface-visibility: hidden !important;
        transform-origin: center center !important;
      }
      /* G ve Path elementlerine de renk zorlaması ekliyoruz */
      .stock_bell_icon g, .stock_bell_icon path {
        fill: ${a||"#e7333c"} !important;
        pointer-events: none !important;
        transition: none !important;
      }
      .stock_bell_icon * {
        pointer-events: none !important;
        user-select: none !important;
        transition: none !important;
      }

      /* CSS Animation ile - daha stabil */
      @keyframes bellRing {
        0%, 100% {
          transform: scale(1);
          fill: ${a||"#e7333c"};
        }
        10%, 30% {
          transform: scale(1.5);
          fill: red;
        }
      }

      .stock_bell_icon.bell-animate {
        animation: bellRing 1s ease-in-out !important;
      }
    `,document.head.appendChild(I)};V.useEffect(()=>{typeof window<"u"&&(window.currentProduct?X(window.currentProduct):window.productDetailModel&&X(window.productDetailModel))},[]),V.useEffect(()=>(Re(),()=>{const H=document.getElementById("dynamicNostokBellStyles");H&&H.remove()}),[a]),V.useEffect(()=>{typeof window<"u"&&v&&(Ee(),Ge())},[v]),V.useEffect(()=>()=>{le.current&&clearInterval(le.current)},[]);const{register:P,handleSubmit:se,formState:{errors:ye},reset:ve,clearErrors:_}=vr(),F=()=>{d(!1),B(null),Z(!1),q(null),ve(),_(),x(""),J(!1)};u!==null&&nl(u,F);const fe=se(H=>{g(!0),v&&(v.productVariantData&&!j||Le.post("https://api.upsell.co/phonesubscription/reminder",{...r===1||r===2?{phone:"90"+H.phone,email:""}:{email:H.email,phone:""},productName:v.productName,productSlug:window.location.pathname,productId:`${v.productVariantData?j?.variantOptions[0].urunID:v.product.id}`,productCardId:v.product.urunKartiId.toString(),variant:(JSON.stringify(j)??"{}")||"{}",hasVariant:v.productVariantData!==null}).then(()=>{A(!0),d(!1)}).catch(()=>{x(r===1||r===2?"Bu telefon numarası zaten kayıtlı.":"Bu e-posta adresi zaten kayıtlı.")}).finally(()=>{g(!1)}))});V.useEffect(()=>{if(o)d(!0);else if(typeof window<"u"){const H=xe=>{xe.preventDefault(),xe.stopPropagation();const me=xe.currentTarget;let ke=me.getAttribute("data-variant-definition");if(!ke){const at=me.querySelector("[data-variant-definition]");at&&(ke=at.getAttribute("data-variant-definition"))}q(ke),f||d(!0)},I=()=>{f||d(!0)};te.current=H,Q.current=I;const oe=document.getElementById("upsell-ss-reminder");oe&&(oe.removeEventListener("click",Q.current),oe.addEventListener("click",I));const ue=document.querySelectorAll(".nostok");if(ue.forEach(xe=>{te.current&&xe.removeEventListener("click",te.current)}),ue.forEach(xe=>{xe.addEventListener("click",H)}),v){const xe=v.productVariantData?.some(at=>at.stokAdedi===0),me=v.productVariantData===null&&v.totalStockAmount===0;if(xe||me){const at=v.productVariantData!==null&&v.totalStockAmount===0;if(ue.length===0||at)if(oe)oe.style.display="flex";else{const bt=()=>{if(typeof window.$<"u"){const pe=document.querySelector(".MiddleList");if(pe&&!document.getElementById("upsell-ss-reminder")){const be=`
                      <div id="upsell-ss-reminder" style="
                        display: flex;
                        font-size: 14px;
                        font-weight: 600;
                        background: #fff;
                        color: ${a||"#e7333c"};
                        border: 1px solid ${a||"#e7333c"};
                        stroke: ${a||"#e7333c"};
                        border-radius: 5px;
                        padding: 8px;
                        align-items: center;
                        gap: 10px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        justify-content: center;
                        margin-bottom: 10px;
                      ">
                        <svg class="stock_bell_icon" height="20" style="fill: ${a||"#e7333c"}; pointer-events: none; user-select: none;" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="m437.017 39.687c-5.858-5.857-15.356-5.857-21.213 0-5.858 5.858-5.857 15.356 0 21.213 42.688 42.685 66.196 99.438 66.196 159.807 0 8.284 6.716 15 15 15s15-6.716 15-15c0-68.382-26.629-132.67-74.983-181.02z"></path>
                            <path d="m96.193 39.688c-5.858-5.857-15.355-5.858-21.213 0-48.352 48.354-74.98 112.641-74.98 181.019 0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.365 23.508-117.118 66.193-159.805 5.858-5.858 5.858-15.356 0-21.214z"></path>
                            <path d="m370.358 85.125c-5.858 5.858-5.857 15.355 0 21.213 30.55 30.548 47.374 71.164 47.374 114.368 0 8.284 6.716 15 15 15s15-6.716 15-15c0-51.217-19.945-99.368-56.161-135.582-5.858-5.856-15.355-5.856-21.213.001z"></path>
                            <path d="m141.634 85.132c-5.858-5.857-15.356-5.857-21.213.001-36.211 36.216-56.154 84.363-56.154 135.573 0 8.284 6.716 15 15 15s15-6.716 15-15c0-43.197 16.823-83.811 47.369-114.361 5.857-5.858 5.856-15.355-.002-21.213z"></path>
                            <path d="m383.467 329.632v-76.792c0-28.011-8.918-54.59-25.79-76.865-14.101-18.617-33.332-33.16-54.939-41.717-3.007-23.111-22.82-41.018-46.738-41.018s-43.733 17.906-46.74 41.018c-21.606 8.558-40.837 23.101-54.938 41.717-16.872 22.275-25.79 48.854-25.79 76.865v76.792l-30.549 61.1c-2.325 4.65-2.076 10.172.657 14.594s7.561 7.114 12.76 7.114h66.774c7.033 36.558 39.246 64.267 77.825 64.267 38.578 0 70.791-27.709 77.823-64.267h66.778c5.199 0 10.027-2.692 12.76-7.114s2.981-9.944.657-14.594zm-127.467 117.075c-21.938 0-40.573-14.413-46.933-34.267h93.865c-6.36 19.854-24.994 34.267-46.932 34.267zm64.266-64.267h-128.533-56.062l21.279-42.559c1.042-2.083 1.583-4.379 1.583-6.708v-80.333c0-42.793 28.625-81.203 69.612-93.405 6.36-1.894 10.72-7.741 10.72-14.376v-4.686c0-9.447 7.687-17.133 17.135-17.133 9.447 0 17.133 7.686 17.133 17.133v4.686c0 6.636 4.36 12.483 10.72 14.376 40.987 12.202 69.614 50.611 69.614 93.405v80.333c0 2.329.542 4.625 1.583 6.708l21.279 42.559z"></path>
                          </g>
                        </svg>
                        Stoğa Gelince Haber Ver
                      </div>
                    `;pe.insertAdjacentHTML("beforebegin",be);const Be=document.getElementById("upsell-ss-reminder");Be&&Be.addEventListener("click",I)}}else setTimeout(bt,100)};bt()}}else oe&&(oe.style.display="none")}return()=>{document.querySelectorAll(".nostok").forEach(ke=>{te.current&&ke.removeEventListener("click",te.current)});const me=document.getElementById("upsell-ss-reminder");me&&Q.current&&me.removeEventListener("click",Q.current)}}},[o,v,a,f]),V.useEffect(()=>{if(f&&v?.productVariantData&&!U&&re){const H=re.trim(),I=v.productVariantData.filter(oe=>oe.tanim.trim()===H);I.length>0&&(B({variantOptions:I,name:I[0].tanim}),Z(!0))}f||(Z(!1),q(null))},[f,v,U,re]);const Se=H=>H.reduce((I,oe)=>(I[oe.urunID]||(I[oe.urunID]={variantName:oe.ekSecenekTipiTanim,variantOptions:[]}),I[oe.urunID].variantOptions.push(oe),I),{}),E=()=>{if(!v?.productVariantData)return"Ürün Tekrar Stokta Olduğunda Sana Bildirelim!";const H=[...new Set(v.productVariantData.map(I=>I.ekSecenekTipiTanim))];return H.length>1?`${H.join(" ve ")}ini Seç, Stokta Olunca Sana Bildirelim!`:"Bedenini Seç, Stokta Olunca Sana Bildirelim!"},G=H=>H===1||H===2?"Ürün stoğa girdiğinde size WhatsApp veya SMS ile hemen bilgi vereceğiz. Telefon numaranızın doğru olduğundan emin olun!":"Ürün stoğa girdiğinde size E-posta ile hemen bilgi vereceğiz. E-posta adresinizin doğru olduğundan emin olun!",ne=()=>v?.productVariantData?"İlgilendiğiniz beden stoğa girdiğinde size hemen bilgi vereceğiz.":"İlgilendiğiniz ürün stoğa girdiğinde size hemen bilgi vereceğiz.";return v?c.jsxs(c.Fragment,{children:[c.jsx(Uy,{mainColor:a}),c.jsxs(Af,{style:{display:!y&&!f?"none":"block"},children:[y&&c.jsx(io,{mainColor:a,children:c.jsxs(km,{children:[c.jsx(dr,{onClick:()=>{A(!1)},children:c.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),c.jsx(zf,{mainColor:a,children:"Teşekkürler!"}),c.jsx(Tf,{mainColor:a,children:ne()})]})}),f&&c.jsxs(io,{ref:u,mainColor:a,children:[c.jsxs(wo,{children:[p&&c.jsx(wr,{children:c.jsxs(My,{children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]})}),!y&&c.jsxs(c.Fragment,{children:[c.jsx(dr,{onClick:()=>{F()},children:c.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),c.jsxs(Ii,{children:[c.jsx(ai,{mainColor:a,children:E()}),v?.productVariantData&&c.jsxs(c.Fragment,{children:[c.jsx("div",{children:c.jsx(_y,{children:Object.entries(Se(v?.productVariantData)).map(H=>c.jsx("li",{children:c.jsxs(ky,{selected:j?.name===H[1].variantOptions.map(I=>I.tanim).join(", "),htmlFor:H[0]+"-"+H[1].variantOptions.map(I=>I.id),disabled:H[1].variantOptions[0].stokAdedi!==0,mainColor:a,children:[c.jsx("input",{type:"radio",disabled:H[1].variantOptions[0].stokAdedi!==0,id:H[0]+"-"+H[1].variantOptions.map(I=>I.id),checked:j?.name===H[1].variantOptions.map(I=>I.tanim).join(", "),style:{visibility:"hidden",display:"none"},...P(H[1].variantName,{required:H[1].variantName+" varyasyonu için bir seçenek seçin"}),onClick:()=>{B({variantOptions:H[1].variantOptions,name:H[1].variantOptions.map(I=>I.tanim).join(", ")})}}),c.jsx(Cy,{selected:j?.name===H[1].variantOptions.map(I=>I.tanim).join(", "),children:H[1].variantOptions.map(I=>I.tanim).join(", ")})]})},H[0]))})}),!j&&R&&c.jsx(Ry,{children:"Lütfen bir seçenek seçin"})]}),c.jsx(Sr,{style:{marginTop:v?.productVariantData?"20px":"0"},children:G(r)}),c.jsxs("form",{onSubmit:H=>fe(H),children:[r===1||r===2?c.jsxs(c.Fragment,{children:[c.jsx(Ca,{mainColor:a,type:"tel",onInput:H=>{H.currentTarget.value=H.currentTarget.value.replace(/[^0-9]/g,"")},...P("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:H=>/^(\d)\1+$/.test(H)||/^5(\d)\1{8}$/.test(H)||H==="5123456789"||H==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),ye.phone&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:ye?.phone?.message?.toString()??null})})]}):c.jsxs(c.Fragment,{children:[c.jsx(Ca,{mainColor:a,placeholder:"E-postanızı Giriniz",...P("email",{required:"E-posta boş bırakılamaz",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}})}),ye.email&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:ye?.email?.message?.toString()??null})})]}),c.jsxs(vo,{children:[c.jsx(bo,{mainColor:a,...P("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),c.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:[r===1||r===2?"Kampanya, duyuru ve bilgilendirmelerden WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum.":"Kampanya, duyuru ve bilgilendirmelerden E-Posta yoluyla haberdar olmak istediğimi belirtiyorum.",c.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),ye.kvkk&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:ye?.kvkk?.message?.toString()??null})}),w&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),c.jsx("div",{children:c.jsx(hr,{mainColor:a,onClick:()=>{J(!0)},children:"Kaydet"})})]})]})]})]}),c.jsxs(So,{target:"_blank",href:"https://upsell.co/",children:[c.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),c.jsxs("g",{children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]}):null};var Rm=Tp();const Hy=a=>{const[r,o]=V.useState([]),[u,f]=V.useState(!0),d=V.useRef(null),p=V.useRef(null),[g,w]=V.useState(!1);V.useEffect(()=>{const v=document.querySelector(".categoryContainer");if(v){let X=document.querySelector("#upsell-ss-featured-products-responsive");if(!X){const j=document.createElement("div");j.id="upsell-ss-featured-products-responsive",j.className="ticiContainer categoryContainer",v.before(j),X=j}p.current=X}else p.current=document.querySelector("#upsell-ss-featured-products-responsive");p.current&&w(!0)},[]),V.useEffect(()=>{async function v(){if(!document.body.classList.contains("CategoryBody")){f(!1);return}try{const X=window.globalModel;if(!X?.breadCrumb?.id){f(!1);return}const j=X.breadCrumb.id,B=window.location.origin,U=(await(await fetch(`${B}/api/product/GetProductList?c=trtry0000&FilterJson={"CategoryIdList":[${j}]}&PagingJson={"PageItemCount":15,"PageNumber":1,"OrderBy":"SATISADEDI","OrderDirection":"DESC"}&CreateFilter=false&TransitionOrder=0&PageType=1`)).json()).products?.filter(Z=>Z.inStock)?.slice(0,20)||[];o(U)}catch(X){console.error("Ürün yükleme hatası:",X)}finally{f(!1)}}g&&v()},[g]),V.useEffect(()=>{if(r.length>0&&d.current){const v=window.$;if(v){const X=v(d.current);X.hasClass("owl-loaded")&&X.trigger("destroy.owl.carousel"),X.owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,autoplaySpeed:1e3,nav:!1,dots:!1,lazyLoad:!1,margin:10,responsive:{0:{items:2},576:{items:3},767:{items:4},991:{items:5},1023:{items:6}}})}}},[r]);const x=v=>{v.preventDefault(),v.stopPropagation();const X=window.$;X&&d.current&&X(d.current).trigger("prev.owl.carousel")},y=v=>{v.preventDefault(),v.stopPropagation();const X=window.$;X&&d.current&&X(d.current).trigger("next.owl.carousel")},A=v=>{const X=v.variantTypeItems?.length||0,j=v.discountRate>0,R=`${v.url}?utm_source=upsell&utm_medium=widget&utm_campaign=category-products`;return c.jsxs("div",{className:"productItem IndirimliUrun yorumyok",style:{height:"100%"},children:[c.jsxs("div",{className:"productImage",children:[c.jsx("a",{className:"detailLink detailUrl","data-id":v.productId,title:v.name,href:R,children:c.jsx("img",{className:"resimOrginal entered loaded",src:v.imageThumbPath,alt:v.imageAltTag,style:{width:"100%",objectFit:"cover"}})}),v.relatedProductCount>0&&c.jsx("div",{className:"relatedProductsColor",children:c.jsxs("div",{className:"relatedProductsColorBtn",onClick:J=>{const U=window.getRelatedProducts;U&&U(v.productId,J.currentTarget)},children:[c.jsxs("div",{className:"relatedColorDiv",children:[c.jsx("span",{className:"relatedColor"}),c.jsx("span",{className:"relatedColor"})]}),c.jsx("span",{className:"productRelatedColorCount",children:v.relatedProductCount})]})})]}),c.jsx("div",{className:"productIconWrap",children:c.jsx("div",{className:"productIconLeft",children:j&&c.jsxs("div",{className:"discountIcon tip",children:[c.jsxs("span",{className:"discountIcon_s1",children:["%",v.discountRate]}),c.jsx("span",{className:"discountIcon_s2",children:"İndirim"}),c.jsxs("div",{className:"discountIconDetail",children:["%",v.discountRate," İndirim"]})]})})}),c.jsxs("div",{className:"productDetail videoAutoPlay","data-id":v.productId,"data-variant-id":v.variantId,children:[c.jsx("div",{className:"productMarka",style:{display:"none"},children:v.brand}),c.jsx("div",{className:"productName detailUrl","data-id":v.productId,children:c.jsx("a",{title:v.name,href:R,children:v.name})}),c.jsx("div",{className:`productPrice ${j?"IndirimVar":""}`,children:j?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"discountPrice",children:[c.jsx("span",{className:"discountPriceSpan",children:v.productPriceOriginalStr}),c.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]}),c.jsxs("div",{className:"regularPrice",children:[c.jsx("span",{className:"regularPriceSpan",children:v.productSellPriceStr}),c.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]})]}):c.jsxs("div",{className:"discountPrice",children:[c.jsx("span",{className:"discountPriceSpan",children:v.productSellPriceStr}),c.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]})}),X>0&&c.jsxs("div",{className:"boxUrunlerContent",children:[c.jsx("div",{className:"boxUrunlerTittle"}),c.jsxs("div",{className:"boxUrunlerContainer",children:[v.variantTypeItems?.map(J=>c.jsx("div",{children:c.jsx("a",{className:"boxUrunResimContent",href:"javascript:;",onClick:U=>{const Z=window.GetProductVariantItemImages;Z&&Z(U.currentTarget,J.productId,J.url)},children:c.jsx("img",{src:J.imageThumbPath,alt:"Varyant"})})},J.productId)),c.jsx("div",{className:"boxUrunlerPlus",children:c.jsxs("a",{href:R,className:"boxUrunlerPlusBtn",children:[c.jsx("i",{className:"far fa-plus"}),c.jsx("span",{children:X})]})})]}),c.jsxs("span",{className:"v-count",children:["+",X]})]})]}),c.jsxs("div",{className:"productIcon",children:[c.jsxs("div",{className:"productEx2",children:[c.jsx("div",{className:"favori",children:c.jsx("a",{onClick:J=>{const U=window.productFavoritesProcess;U&&U(v.unique,-1,2,v.variantId,0,1,J.currentTarget)},className:"favoriteslist listfavoriPasif tip",title:"Favorilere Ekle",children:"Favorilere Ekle"})}),c.jsx("div",{className:"examineIcon tip detailLink",title:"Ürünü İncele",children:c.jsx("a",{href:R,className:"detailUrl","data-id":v.productId,children:"Ürünü İncele"})})]}),c.jsx("div",{className:"productEx",children:c.jsx("div",{className:"mycartIcon tip",title:"Sepete Ekle",children:c.jsx("a",{onClick:J=>{const U=window.productListAddToCartV2;U&&U(v.unique,v.variantId,0,0,1,v.url,0,J.currentTarget)},className:"btnAddToCart",children:c.jsx("span",{className:"urunListeSpanSepeteEkle",children:"Sepete Ekle"})})})})]})]},v.productId)};return!document.body.classList.contains("CategoryBody")||!g||!p.current||u||r.length===0?null:Rm.createPortal(c.jsxs("div",{className:"max-BestSellingProducts",style:{position:"relative"},children:[c.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .max-BestSellingProducts {
            padding: 20px 0;
        }
        
        .max-category-head {
          font-size: 20px;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
          text-align: center;
          font-weight: 500;
          color: #000;
        }

        @media (max-width: 767px) {
          .max-BestSellingProducts {
            padding: 10px 0;
          }

          .max-category-head {
            font-size: 18px;
          }
        }

        /* Navigasyon Butonları (Eski Tasarım Stili) */
        .max-BestSellingProducts .custom-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          z-index: 10;
          cursor: pointer;
          color: #333;
          font-size: 18px;
          transition: all 0.3s;
        }
        
        .max-BestSellingProducts .custom-nav-btn:hover {
            background: #333;
            color: #fff;
            border-color: #333;
        }

        .max-BestSellingProducts .custom-prev {
          left: -10px;
        }
        .max-BestSellingProducts .custom-next {
          right: -10px;
        }
        
        @media (max-width: 768px) {
            .max-BestSellingProducts .custom-prev { left: 0; }
            .max-BestSellingProducts .custom-next { right: 0; }
        }
      `}}),c.jsx("p",{className:"max-category-head",children:"Kategorinin En Çok Satılan Ürünleri"}),c.jsx("button",{className:"custom-nav-btn custom-prev",onClick:x,"aria-label":"Önceki",children:c.jsx("i",{className:"fas fa-chevron-left"})}),c.jsx("button",{className:"custom-nav-btn custom-next",onClick:y,"aria-label":"Sonraki",children:c.jsx("i",{className:"fas fa-chevron-right"})}),c.jsx("div",{ref:d,className:"owl-carousel owl-theme",children:r.map(v=>A(v))})]}),p.current)},Ly=W.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;
  
  @keyframes fadeInSmooth {
    from { 
      opacity: 0;
    }
    to { 
      opacity: 1;
    }
  }
`,qy=W.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: white;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  animation: slideInFromRight 0.4s ease-out;
  position: relative;
  
  /* Gezen ışık efekti - sol kenar için */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -6px;
    width: 6px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${a=>a.mainColor||"#e7333c"}88 20%,
      ${a=>a.mainColor||"#e7333c"} 40%,
      ${a=>a.mainColor||"#e7333c"} 60%,
      ${a=>a.mainColor||"#e7333c"}88 80%,
      transparent 100%
    );
    z-index: 0;
    opacity: 1;
  }
  
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideUpDown {
    0%, 100% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,Vy=W.div`
  cursor: pointer;
  position: absolute;
  top: 13px;
  left: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
    fill: rgba(0, 0, 0, 0.6);
  }
  
  @media (max-width: 768px) {
    top: 12px;
    left: 12px;
    width: 28px;
    height: 28px;
  }
`,hp=W.div`
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
    fill: rgba(0, 0, 0, 0.6);
  }
  
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
  }
`,Gy=W.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  max-width: 500px;
  height: 100%;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  animation: slideInFromRight 0.4s ease-out;
  position: relative;
  
  /* Gezen ışık efekti - sol kenar için */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -6px;
    width: 6px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${a=>a.mainColor||"#e7333c"}88 20%,
      ${a=>a.mainColor||"#e7333c"} 40%,
      ${a=>a.mainColor||"#e7333c"} 60%,
      ${a=>a.mainColor||"#e7333c"}88 80%,
      transparent 100%
    );
    z-index: 0;
    opacity: 1;
  }
  
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideUpDown {
    0%, 100% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,pp=W.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid #e1e5e9;
  padding: 16px 24px;
  background: #f8f9fa;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 14px 20px;
  }
`,Yy=W.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 10;
`,mp=W.select`
  width: 100%;
  min-width: 350px;
  margin-bottom: 16px;
  appearance: none;
  -webkit-appearance: none;
  text-align: center;
  padding: 16px 20px;
  background-color: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${a=>a.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px ${a=>a.mainColor?`${a.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }
  
  &:hover {
    border-color: #d1d5db;
    background: white;
  }
  
  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 16px;
    min-width: 280px;
  }
  
  @media (max-width: 480px) {
    min-width: 240px;
  }
`,gp=W.div`
  position: absolute;
  top: -2px;
  right: 12px;
  padding: 4px 8px;
  text-align: center;
  font-weight: 600;
  background: ${a=>a.mainColor||"#e7333c"};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`,xp=W.p`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Zc=W.div`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${a=>a.isSecondary?a.mainColor||"#e7333c":"white"};
  background: ${a=>a.isSecondary?"white":`linear-gradient(135deg, ${a.mainColor||"#e7333c"}, ${a.mainColor?`${a.mainColor}dd`:"#d12b35"})`};
  border: ${a=>a.isSecondary?`2px solid ${a.mainColor||"#e7333c"}`:"none"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    ${a=>a.isSecondary&&`
      background: ${a.mainColor||"#e7333c"};
      color: white;
    `}
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 15px;
  }
`,Xy=W.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  width: 100%;
  margin: 0 auto 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`,yp=W.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    max-width: 240px;
  }
`,vp=W.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e1e5e9;
  gap: 8px;
  padding: 16px 12px;
  width: 100%;
  background: #f8f9fa;
  
  span {
    font-size: 12px;
    font-weight: 600;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  @media (max-width: 768px) {
    padding: 14px 10px;
  }
`,bp=W.div`
  padding: 40px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`,$y=It`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,Zy=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${$y} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    margin: -4px 0 0 -4px;
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,Qy=({useOneChartForAllProducts:a,forceOpen:r,mainColor:o})=>{const u=V.useRef(null),[f,d]=V.useState(r||!1),[p,g]=V.useState(!1),[w,x]=V.useState(!1),[y,A]=V.useState(0),[v,X]=V.useState(0),[j,B]=V.useState(),[R,J]=V.useState(),[U,Z]=V.useState(),[re,q]=V.useState(),[te,Q]=V.useState(!1),[le,Ee]=V.useState();V.useEffect(()=>{if(g(!0),typeof window<"u"){let P="-1";!a&&window.productDetailModel?.product?.urunKartiId?P=window.productDetailModel.product.urunKartiId.toString():a||(P="1"),Le.get(`https://api.upsell.co/sizechart/byproductcard/${P}`).then(se=>{se.data&&se.data.data&&se.data.data.items?Ee(se.data.data.items):Ee([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).catch(se=>{Ee([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).finally(()=>{g(!1)})}},[a]);const Ge=()=>{d(!1),Q(!1),x(!1),X(0),A(0)};u!==null&&nl(u,Ge),V.useEffect(()=>(r?d(!0):typeof window<"u"&&(document.getElementById("upsell-ss-sizechart")?.addEventListener("click",()=>{d(!0)}),document.getElementById("upsell-ss-sizechart")&&!le?.filter(P=>window.productDetailModel?.productVariantData?.find(se=>se.tanim===P.title))?document.getElementById("upsell-ss-sizechart").style.display="none":document.getElementById("upsell-ss-sizechart")&&(document.getElementById("upsell-ss-sizechart").style.display="flex")),()=>{document.getElementById("upsell-ss-sizechart")?.removeEventListener("click",()=>{})}),[le]);const Re=()=>{const P=[];return typeof window<"u"&&le?.filter(se=>se.minHeight<=v&&se.maxHeight>=v&&se.minWeight<=y&&se.maxWeight>=y).forEach(se=>{const ve=(window.productDetailModel?.productVariantData||[{tanim:"S"},{tanim:"M"},{tanim:"L"},{tanim:"XL"}]).find(_=>se.title===_.tanim);ve&&P.push(ve)}),P};return V.useEffect(()=>{Re()},[v,y]),V.useEffect(()=>{if(le&&le?.length>0){const P=le?.reduce((_,F)=>F.minHeight<_.minHeight?F:_,le?.[0]),se=le?.reduce((_,F)=>F.maxHeight>_.maxHeight?F:_,le?.[0]),ye=le?.reduce((_,F)=>F.minWeight<_.minWeight?F:_,le?.[0]),ve=le?.reduce((_,F)=>F.maxWeight>_.maxWeight?F:_,le?.[0]);B(P),J(se),Z(ye),q(ve)}},[le]),typeof window>"u"?null:c.jsx(c.Fragment,{children:c.jsxs(Ly,{style:{display:!w&&!f?"none":"block"},children:[w&&c.jsxs(qy,{mainColor:o,children:[c.jsx(Vy,{onClick:()=>{x(!1)},children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:c.jsx("path",{d:"m12 4-8 8 8 8 .677-.677-6.844-6.844H20v-.958H5.833l6.844-6.844L12 4Z"})})}),c.jsx(hp,{onClick:()=>{Ge()},children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:c.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),c.jsxs(bp,{children:[c.jsx(zf,{mainColor:o,children:"Beden Öneri Rehberi"}),c.jsx(Tf,{mainColor:o,children:"Sizin için en uygun beden:"}),c.jsx(Xy,{children:Re().length>0?c.jsxs(yp,{children:[c.jsx("img",{style:{width:"100%",aspectRatio:"8/12",objectFit:"cover"},src:window.productDetailModel?.productImages?.[0]?.imagePath||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA5MEg2NVY5NUg2MFY5MFpNMTQwIDkwSDE0NVY5NUgxNDBWOTBaIiBmaWxsPSIjOEE5MUE4Ii8+CjxwYXRoIGQ9Ik01NSA4MEgxNTBWMjIwSDU1VjgwWiIgc3Ryb2tlPSIjOEE5MUE4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPHN2Zz4K",alt:"Ürün Resmi"}),c.jsxs(vp,{children:[c.jsx("span",{children:"SİZİN BEDENİNİZ OLABİLİR"}),Re()[0]?.tanim||"Bulunamadı"]})]}):c.jsxs(yp,{children:[c.jsx("div",{style:{width:"100%",aspectRatio:"8/12",display:"flex",justifyContent:"center",alignItems:"center"},children:c.jsx("svg",{style:{width:"100px"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#e7333c",children:c.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),c.jsxs(vp,{children:[c.jsx("span",{children:"ÖNERİ YAPILAMADI"}),"Üzgünüz,bu özellikler için beden öneremiyoruz."]})]})})]}),c.jsxs(pp,{children:[c.jsx(Zc,{mainColor:o,onClick:()=>{x(!1),X(0),A(0),Q(!1)},children:"Baştan Başla"}),c.jsx(Zc,{mainColor:o,isSecondary:!0,onClick:()=>{Ge()},children:"Çıkış Yap"})]})]}),f&&!w&&c.jsxs(Gy,{ref:u,mainColor:o,children:[p&&c.jsx(wr,{children:c.jsxs(Zy,{children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]})}),!w&&c.jsxs(c.Fragment,{children:[c.jsx(hp,{onClick:()=>{Ge()},children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:c.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),c.jsxs(Yy,{children:[c.jsxs(bp,{children:[c.jsx(ai,{mainColor:o,children:"Beden Öneri Rehberi"}),c.jsx(Sr,{children:"Ölçülerinizi baz alarak size en uygun bedeni hesaplıyoruz."}),R&&j&&re&&U&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{children:[c.jsx(xp,{children:"Boyunuzu Girin"}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx(gp,{mainColor:o,children:"CM"}),c.jsxs(mp,{mainColor:o,onChange:P=>{X(Number(P.target.value))},name:"height",id:"height",children:[c.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:R?.maxHeight+1-j?.minHeight},(P,se)=>(j?.minHeight+se).toString()).map(P=>c.jsxs("option",{value:P,children:[P," cm"]},P))]})]}),v===0&&te&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen bir boyunuzu giriniz."})})]}),c.jsxs("div",{children:[c.jsx(xp,{children:"Kilonuzu Girin"}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx(gp,{mainColor:o,children:"KG"}),c.jsxs(mp,{mainColor:o,onChange:P=>{A(Number(P.target.value))},name:"weight",id:"weight",children:[c.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:re.maxWeight+1-U.minWeight},(P,se)=>(U.minWeight+se).toString()).map(P=>c.jsxs("option",{value:P,children:[P," kg"]},P))]})]}),!y&&te&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen kilonuzu giriniz"})})]})]})]}),c.jsxs(pp,{children:[c.jsx(Zc,{mainColor:o,onClick:()=>{Q(!0),v&&y&&y!==0&&v!==0&&x(!0)},children:"Devam Et"}),c.jsxs(So,{target:"_blank",href:"https://upsell.co/",children:[c.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),c.jsxs("g",{children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]})]})]})})},Ky=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Jy=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Fy=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Jy} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e7333c;
    margin: -4px 0 0 -4px;
    box-shadow: 0 0 4px rgba(231, 51, 60, 0.5);
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,Wy=W.div`
  margin: auto;
  background: white;
  border-radius: 20px;
  width: 85%;
  max-width: 450px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor||"#e7333c"}dd 90deg,
      ${a=>a.mainColor||"#e7333c"} 110deg,
      ${a=>a.mainColor||"#e7333c"} 120deg,
      ${a=>a.mainColor||"#e7333c"} 130deg,
      ${a=>a.mainColor||"#e7333c"}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 24px;
    z-index: -1;
    animation: ${Ky} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0.8"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 18px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 16px;

    &::before {
      border-radius: 20px;
    }

    &::after {
      border-radius: 14px;
    }
  }
`,Iy=({color:a})=>{const[r,o]=V.useState(null),[u,f]=V.useState(!1),[d,p]=V.useState(!1),[g,w]=V.useState(!1),x=V.useRef(null);V.useEffect(()=>{x.current=document.querySelector("#upsell-ss-responsive"),w(!0)},[]);const{register:y,handleSubmit:A,formState:{errors:v}}=vr(),X=A(async B=>{p(!0),f(!1),o(null);try{const J=(await Le.post("https://api.upsell.co/ticimax/order",{phone:"90"+B.phone})).data;!J.data||J.data===null?f(!0):o(J.data)}catch{f(!0)}finally{p(!1)}}),j=()=>{o(null),f(!1)};return g&&x.current?Rm.createPortal(c.jsx(Wy,{mainColor:a,children:c.jsxs(wo,{children:[c.jsx(jf,{mainColor:a}),c.jsx(Df,{mainColor:a}),c.jsx(Of,{mainColor:a}),d&&c.jsx(wr,{children:c.jsx(Fy,{children:Array.from({length:8}).map((B,R)=>c.jsx("div",{},R))})}),r?c.jsxs(Ii,{children:[c.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),c.jsx("div",{style:{width:"50%"},children:r.siparisNo||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),c.jsx("div",{style:{width:"50%"},children:new Date(r.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),c.jsx("div",{style:{width:"50%"},children:r.siparisDurumu||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),c.jsx("div",{style:{width:"50%"},children:r.kargoTakipLink?c.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:r.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),c.jsx("div",{style:{width:"50%"},children:r.kargoTakipNo||"-"})]}),c.jsxs(vn,{children:[c.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),c.jsx("div",{style:{width:"50%"},children:r.kargoFirmaTanim||"-"})]}),c.jsx("div",{children:c.jsx(hr,{mainColor:a,onClick:j,type:"button",children:"Yeni Sorgu Yap"})})]}):c.jsxs(Ii,{children:[c.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),c.jsx(Sr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),c.jsxs("form",{onSubmit:X,children:[c.jsx(Ca,{mainColor:a,type:"tel",onInput:B=>{B.currentTarget.value=B.currentTarget.value.replace(/[^0-9]/g,"")},...y("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:B=>/^(\d)\1+$/.test(B)||/^5(\d)\1{8}$/.test(B)||B==="5123456789"||B==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),v.phone&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:v.phone.message})}),c.jsxs(vo,{children:[c.jsx(bo,{mainColor:a,...y("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),c.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",c.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),v.kvkk&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:v.kvkk.message})}),u&&c.jsx(_t,{children:c.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),c.jsx("div",{children:c.jsx(hr,{mainColor:a,children:"Sorgula"})})]})]})]})}),x.current):null},Py=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ev=W.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }

  span {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
  }
`,tv=W.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px 12px 10px 12px;
  }
`;W.img`
  aspect-ratio: 5/2;
  height: 70px;
  margin: auto;
  object-fit: contain;
  margin-top: 20px;
`;const Sp=W.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 8px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
`;W.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;const nv=W.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  font-size: 14px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${a=>a.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px
      ${a=>a.mainColor?`${a.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }

  &:hover {
    border-color: #d1d5db;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,Qc=W.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,av=W.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,iv=W.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: ${a=>a.mainColor||"#e7333c"};

  &:focus {
    outline: 2px solid
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    outline-offset: 2px;
  }
`,lv=W.button`
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;W.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffff80;
  z-index: 1;
`;const rv=W.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 32px 20px 32px;
  padding-top: 16px;
  font-size: 12px;
  gap: 6px;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  border-top: 1px solid #e1e5e9;

  &:hover {
    color: #333;
  }

  svg {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin: 20px 24px 16px 24px;
    padding-top: 14px;
  }
`,sv=W.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  border-radius: 16px;
  margin: 16px 0;

  @media (max-width: 768px) {
    padding: 16px;
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin: 8px 0;
    border-radius: 12px;
  }
`,ov=W.h1`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 16px 0;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#28a745"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#1e7e34"}
  );
  padding: 12px 20px;
  text-align: center;
  box-shadow: 0 4px 15px
    ${a=>a.mainColor?`${a.mainColor}40`:"rgba(40, 167, 69, 0.3)"};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 16px;
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
    margin: 8px 0;
    border-radius: 8px;
  }
`,wp=W.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  width: 100%;
  margin: 8px auto 16px;
  font-weight: 500;
`,uv=W.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;

  @keyframes fadeInSmooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,cv=W.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 12px;
  border-radius: 20px;
  width: 85%;
  max-width: 450px;
  overflow: hidden;
  background: white;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  animation: slideInSmooth 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;

  @keyframes slideInSmooth {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) translateZ(0);
    }
  }

  /* Gezen ışık efekti */
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${Py} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0"};
  }

  /* Modal'ın ana arka planı için beyaz maske */
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 14px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 14px;

    &::before {
      border-radius: 18px;
    }

    &::after {
      border-radius: 12px;
    }
  }
`,fv=W.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 16px 30px 16px;
  border-radius: 240px 240px 8px 8px;
`;W.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    gap: 0;
  }
`;const dv=W.div`
  font-size: 24px;
  font-weight: 800;
  font-family: "Courier New", monospace;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #212529;
  padding: 16px 24px;
  margin: 16px 0;
  border-radius: 12px;
  border: 2px dashed #28a745;
  position: relative;
  text-align: center;
  letter-spacing: 2px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 14px 20px;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 12px 16px;
  }
`,hv=W.button`
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#28a745"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#1e7e34"}
  );
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "📋";
    margin-right: 8px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(40, 167, 69, 0.4)"};
  }

  &:active {
    transform: translateY(0);
  }

  &.copied {
    background: #28a745;

    &::before {
      content: "✅";
    }
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 14px;
  }
`,pv=W.button`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 180px;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 30px;
  cursor: pointer;
  z-index: 9998;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  padding: 16px 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 1px;

  /* Glow effect */
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      ${a=>a.mainColor||"#e7333c"}40,
      transparent,
      ${a=>a.mainColor||"#e7333c"}40
    );
    border-radius: 32px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-50%) translateX(5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-50%) translateX(2px) scale(0.98);
  }

  /* Gift icon */
  .gift-icon {
    font-size: 24px;
    margin-top: 4px;
    animation: bounce 2s infinite;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: white;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
      transition: transform 0.3s ease;
    }
  }

  &:hover .gift-icon svg {
    transform: rotate(180deg);
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-4px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Pulse effect for attention */
  &.pulse {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15),
        0 0 0 0 ${a=>a.mainColor||"#e7333c"}40;
    }
    70% {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 10px transparent;
    }
    100% {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 0 transparent;
    }
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    width: 55px;
    height: 150px;
    left: 15px;
    font-size: 11px;
    padding: 16px 8px;
    border-radius: 27px;

    .gift-icon {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 130px;
    left: 10px;
    font-size: 10px;
    padding: 14px 7px;
    border-radius: 25px;

    .gift-icon {
      font-size: 18px;
    }
  }

  @media (max-width: 414px) {
    width: 47px;
    height: 120px;
    left: 8px;
    font-size: 9px;
    padding: 12px 6px;
    border-radius: 23px;

    .gift-icon {
      font-size: 16px;
    }
  }

  /* Very small screens - make it smaller but keep it visible */
  @media (max-width: 360px) {
    width: 44px;
    height: 110px;
    left: 6px;
    font-size: 8px;
    padding: 10px 5px;
    border-radius: 22px;

    .gift-icon {
      font-size: 14px;
    }
  }
`,mv=W.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: 4px;
  transform: rotate(180deg);
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 11px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    letter-spacing: 0.2px;
  }

  @media (max-width: 414px) {
    font-size: 9px;
    letter-spacing: 0.1px;
  }

  @media (max-width: 360px) {
    font-size: 8px;
    letter-spacing: 0px;
  }
`,gv=({mainColor:a,logo:r,forceOpen:o,showFloatingButton:u=!0})=>{const[f,d]=V.useState(o||!1),[p,g]=V.useState(null),[w,x]=V.useState(""),[y,A]=V.useState(!1),[v,X]=V.useState([]),[j,B]=V.useState(0),[R,J]=V.useState(null),[U,Z]=V.useState(!1),[re,q]=V.useState(0),[te,Q]=V.useState(!1),[le,Ee]=V.useState(null),[Ge,Re]=V.useState(!1),[P,se]=V.useState(!0),[ye,ve]=V.useState(null),_=V.useRef(null),{register:F,handleSubmit:fe,formState:{errors:Se}}=vr(),E=()=>{d(!1);const pe=new Date;pe.setDate(pe.getDate()+Number(re));const be="expires="+pe.toUTCString();document.cookie=`upsellGiftWheel=false;${be};path=/`},G=()=>{const pe=localStorage.getItem("upsellGiftWheelPrize");if(!pe)return!0;try{const be=JSON.parse(pe);if(!be.timestamp)return!0;const Be=Date.now(),qe=be.timestamp,xt=24*60*60*1e3;return Be-qe>xt}catch{return!0}},ne=()=>G()?(localStorage.removeItem("upsellGiftWheelPrize"),g(null),ve(null),!0):!1,H=async()=>{if(se(!1),x(""),ne(),(p||ye)&&!G()){A(!0),d(!0);return}const pe=localStorage.getItem("upsellGiftWheelPrize");if(pe&&!G())try{const be=JSON.parse(pe);ve(be),g(be),A(!0),d(!0);return}catch{localStorage.removeItem("upsellGiftWheelPrize")}A(!1),g(null),ve(null),d(!0),v.length===0?bt():setTimeout(()=>{me()},50)};_!==null&&nl(_,()=>E());const oe=async pe=>{try{await navigator.clipboard.writeText(pe),Re(!0),setTimeout(()=>Re(!1),2e3)}catch{}},ue=(pe,be,Be,qe)=>{const xt=qe*Math.PI/180;return{x:pe+Be*Math.cos(xt),y:be+Be*Math.sin(xt)}},xe=(pe,be=4e3)=>{if(!R)return;const Be=Date.now(),qe=j,xt=pe,it=1800,On=.985,Pt=10;let S=it,D=qe,L=Be;const ie=()=>{const ee=Date.now(),ce=(ee-L)/1e3;L=ee,S*=Math.pow(On,ce*60);const Te=S*ce;D+=Te;const je=Math.min((ee-Be)/be,1),Vt=1-Math.pow(1-je,3),Ht=Math.pow(je,2),ra=D,St=qe+(xt-qe)*Vt,Sn=ra*(1-Ht)+St*Ht;if(R.style.transform=`rotate(${Sn}deg)`,S>500){const kt=Math.min(S/200,3);R.style.filter=`blur(${kt}px)`}else R.style.filter="none";if(je<1&&S>Pt){const kt=requestAnimationFrame(ie);Ee(kt)}else R.style.transform=`rotate(${xt}deg)`,R.style.filter="none",B(xt),Ee(null),setTimeout(()=>{A(!0)},500)},ae=requestAnimationFrame(ie);Ee(ae)},me=()=>{const pe=document.querySelector(".sectors"),be=document.querySelector(".gift-wheel-texts");if(!pe||!be){setTimeout(()=>{const Be=document.querySelector(".sectors"),qe=document.querySelector(".gift-wheel-texts");Be&&qe&&ke(Be,qe)},100);return}ke(pe,be)},ke=(pe,be)=>{pe.innerHTML="",be.innerHTML="";const Be=200,qe=200,xt=170,it=50,On=360/v.length;v.forEach((Pt,S)=>{const D=S*On,L=D+On,ie=D+On/2,ae=ue(Be,qe,xt,L),ee=ue(Be,qe,xt,D),ce=ue(Be,qe,it,L),Te=ue(Be,qe,it,D),je=L-D<=180?0:1,$e=`M${ce.x},${ce.y} L${ae.x},${ae.y} A${xt},${xt} 0 ${je} 0 ${ee.x},${ee.y} L${Te.x},${Te.y} A${it},${it} 0 ${je} 1 ${ce.x},${ce.y} Z`,Vt=document.createElementNS("http://www.w3.org/2000/svg","path");Vt.setAttribute("d",$e);const Ht=Pt.color||(S%2===0?a||"#e7333c":"#ffffff");Vt.setAttribute("fill",Ht),Vt.setAttribute("stroke","#fff"),Vt.setAttribute("stroke-width","10"),pe.appendChild(Vt);const ra=(xt+it)/2,St=ue(Be,qe,ra,ie),kt=(_n=>{const Gt=_n.split(/\n/),un=[],li=On/360*2*Math.PI*ra*.8,Vn=Math.floor(li/9);return Vn<=0?Gt:(Gt.forEach(zr=>{const Eo=zr.split(/\s+/),Yt=[];let Ke="";Eo.forEach(ot=>{const Gn=Ke?`${Ke} ${ot}`:ot;if(ot.length>Vn){Ke&&(Yt.push(Ke),Ke="");for(let sa=0;sa<ot.length;sa+=Vn)Yt.push(ot.substring(sa,sa+Vn))}else Gn.length<=Vn?Ke=Gn:(Ke&&Yt.push(Ke),Ke=ot)}),Ke&&Yt.push(Ke),un.push(...Yt)}),un.length>0?un:[_n])})(Pt.text),wt=document.createElementNS("http://www.w3.org/2000/svg","text");wt.setAttribute("x",St.x.toString()),wt.setAttribute("y",St.y.toString()),wt.setAttribute("text-anchor","middle"),wt.setAttribute("dominant-baseline","middle"),wt.setAttribute("font-size","16"),wt.setAttribute("font-weight","700");const qn=_n=>{const Gt=_n.replace("#",""),un=parseInt(Gt.substr(0,2),16),il=parseInt(Gt.substr(2,2),16),li=parseInt(Gt.substr(4,2),16);return(un*299+il*587+li*114)/1e3>128?"#000":"#fff"},ii=Pt.color?qn(Pt.color):S%2===0?"#fff":"#333";wt.setAttribute("fill",ii),wt.setAttribute("transform",`rotate(${ie} ${St.x} ${St.y})`);const al=18,Er=kt.length>1?St.y-(kt.length-1)*al/2:St.y;kt.forEach((_n,Gt)=>{const un=document.createElementNS("http://www.w3.org/2000/svg","tspan");un.setAttribute("x",St.x.toString()),un.setAttribute("y",(Er+Gt*al).toString()),un.textContent=_n,wt.appendChild(un)}),be.appendChild(wt)})},at=fe(async pe=>{U||te||(Z(!0),Q(!0),x(""),await Le.post("https://api.upsell.co/GiftWheel/Spin",{phoneNumber:pe.phone}).then(be=>{const Be=be.data;if(Be.success){const qe=Be.data.sliceIndex;if(typeof qe=="number"&&!isNaN(qe)){const it=360/v.length,S=((360-(qe*it+it/2))%360+360)%360,D=j+360*5+S;R&&(le&&(cancelAnimationFrame(le),Ee(null)),R.style.transformOrigin="200px 200px",R.style.transition="none",R.style.webkitTransition="none",xe(D,4e3)),g(be.data.data),ve(be.data.data);const L={...be.data.data,timestamp:Date.now()};localStorage.setItem("upsellGiftWheelPrize",JSON.stringify(L));const ie=new Date;ie.setDate(ie.getDate()+re);const ae="expires="+ie.toUTCString();document.cookie=`upsellGiftWheel=true;${ae};path=/`}else x("Sunucudan geçersiz veri alındı.")}else x(Be.message)}).catch(()=>{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}).finally(()=>{setTimeout(()=>{Z(!1),Q(!1)},4500)}))}),bt=async()=>{try{const be=(await Le.post("https://api.upsell.co/GiftWheel/Slices",{})).data;be.success?(X(be.data.slices),q(be.data.frequency)):x("Hediye çarkı yüklenemedi.")}catch{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}};return V.useEffect(()=>{bt(),ne()},[]),V.useEffect(()=>{v.length>0&&f&&setTimeout(()=>{me()},100)},[v,f]),V.useEffect(()=>{if(R&&!U&&!te){R.style.transition="transform 2s ease-in-out";const be=setInterval(()=>{if(!U&&!te&&R){const Be=j+Math.sin(Date.now()/3e3)*.5;R.style.transform=`rotate(${Be}deg)`}},100);return()=>{clearInterval(be),R&&(R.style.transition="none",R.style.transform=`rotate(${j}deg)`)}}},[R,U,te,j]),V.useEffect(()=>{if(o)(async()=>{ne();const be=localStorage.getItem("upsellGiftWheelPrize");if(be&&!G()||(p||ye)&&!G()){if(be&&!p&&!ye&&!G())try{const qe=JSON.parse(be);ve(qe),g(qe)}catch{localStorage.removeItem("upsellGiftWheelPrize"),A(!1),g(null),ve(null),d(!0);return}A(!0),d(!0)}else A(!1),g(null),ve(null),d(!0),v.length===0||setTimeout(()=>{me()},50)})();else if(typeof window<"u"){if(document.cookie.split(";").some(be=>be.trim().startsWith("upsellGiftWheel=")))return;const pe=setTimeout(async()=>{ne();const be=localStorage.getItem("upsellGiftWheelPrize");if(be&&!G()||(p||ye)&&!G()){if(be&&!p&&!ye&&!G())try{const qe=JSON.parse(be);ve(qe),g(qe)}catch{localStorage.removeItem("upsellGiftWheelPrize");return}A(!0),d(!0)}else A(!1),g(null),ve(null),d(!0),v.length===0||setTimeout(()=>{me()},50)},6e4);return()=>{clearTimeout(pe)}}},[o]),V.useEffect(()=>()=>{le&&cancelAnimationFrame(le)},[le]),V.useEffect(()=>{if(typeof window<"u")if(document.cookie.split(";").some(be=>be.trim().startsWith("upsellGiftWheel=")))se(!1);else{const be=setTimeout(()=>{se(!1)},1e4);return()=>clearTimeout(be)}},[]),c.jsxs(c.Fragment,{children:[u&&!f&&c.jsxs(pv,{mainColor:a,onClick:H,className:P?"pulse":"","aria-label":"Hediye Çarkını Aç",children:[c.jsx(mv,{children:"HEDİYE ÇARKI"}),c.jsx("div",{className:"gift-icon",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),c.jsx("path",{d:"M12 2 L12 22 M2 12 L22 12",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),c.jsx("path",{d:"M5.64 5.64 L18.36 18.36 M18.36 5.64 L5.64 18.36",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),c.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),c.jsx("path",{d:"M12 2 L14 6 L10 6 Z",fill:"currentColor"})]})})]}),c.jsx(uv,{style:{display:f?"block":"none"},children:f&&c.jsxs(cv,{ref:_,mainColor:a,children:[c.jsx(ev,{onClick:E,children:c.jsx("span",{style:{color:"#000",float:"right",fontSize:"35px"},children:"×"})}),c.jsxs(fv,{children:[c.jsx(jf,{mainColor:a}),c.jsx(Df,{mainColor:a}),c.jsx(Of,{mainColor:a}),c.jsxs(tv,{children:[c.jsx("div",{className:"gift-wheel",style:{marginBottom:"16px",position:"relative",display:y?"none":"flex",justifyContent:"center",cursor:U?"not-allowed":"pointer",transition:"all 0.3s ease",transform:U?"scale(1.02)":"scale(1)",minHeight:v.length===0?"320px":"auto",alignItems:"center"},children:v.length===0?c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",color:"#666",fontSize:"16px"},children:[w?c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{fontSize:"48px"},children:"⚠️"}),c.jsx("span",{style:{color:"#e40000",textAlign:"center"},children:w}),c.jsx("button",{onClick:()=>{x(""),bt()},style:{padding:"8px 16px",background:a||"#e7333c",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Tekrar Dene"})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{width:"40px",height:"40px",border:`3px solid ${a||"#e7333c"}20`,borderTop:`3px solid ${a||"#e7333c"}`,borderRadius:"50%",animation:"spin 1s linear infinite"}}),c.jsx("span",{children:"Hediye çarkı yükleniyor..."})]}),c.jsx("style",{children:`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `})]}):c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:{width:"min(320px, 90vw)",height:"min(320px, 90vw)",maxWidth:"100%",pointerEvents:U?"none":"auto",filter:"drop-shadow(0 8px 25px rgba(0,0,0,0.15))",transition:"filter 0.3s ease"},children:[c.jsx("circle",{cx:"200",cy:"200",r:"190",fill:"none",stroke:"rgba(0,0,0,0.1)",strokeWidth:"8"}),c.jsxs("g",{className:"wheel",ref:pe=>J(pe),id:"wheel",style:{transformOrigin:"200px 200px"},children:[c.jsx("g",{className:"sectors"}),c.jsx("g",{className:"gift-wheel-texts",style:{fill:"#fff",fontSize:"16px",fontWeight:700,textAnchor:"middle"}})]}),c.jsx("circle",{cx:"200",cy:"200",r:"180",fill:"none",stroke:a||"#e7333c",strokeWidth:"6"}),c.jsx("circle",{cx:"200",cy:"200",r:"170",fill:"none",stroke:"#ffffff",strokeWidth:"2"}),c.jsx("circle",{cx:"200",cy:"200",r:"45",fill:"#ffffff",stroke:a||"#e7333c",strokeWidth:"3"}),r&&c.jsx("image",{href:r,x:"170",y:"170",width:"60",height:"60",style:{objectFit:"contain"}}),c.jsx("g",{transform:"translate(200, 200)",children:c.jsx("g",{transform:"rotate(0) translate(185, 0)",children:c.jsx("polygon",{points:"-15,0 0,12 15,0 0,-12",fill:a||"#e7333c",stroke:"#ffffff",strokeWidth:"2",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"}})})})]})}),y&&c.jsxs(sv,{children:[c.jsx(Sp,{mainColor:a,children:"🎊 Tebrikler! Hediye Çarkından Kazandınız! 🎁"}),c.jsxs(ov,{mainColor:a,children:[c.jsxs("strong",{children:[p.validDayCount," gün"]})," geçerli"," ",c.jsxs("strong",{children:[p.discountValue.toFixed(2),p.discountType===1?" TL":"%"]})," ","indirim kuponu kazandınız!"]}),Number(p.minCartAmount)>0&&c.jsxs(wp,{style:{marginTop:"8px",marginBottom:"8px",fontSize:"14px",color:"#666",fontWeight:600},children:["Minimum sepet tutarı:"," ",c.jsxs("strong",{style:{color:a||"#e7333c"},children:[Number(p.minCartAmount).toFixed(2)," TL"]})]}),c.jsx(wp,{children:"Kupon kodunuzu kopyalayın ve alışverişinizde kullanın"}),c.jsx(dv,{children:p.couponCode}),c.jsx(hv,{mainColor:a,className:Ge?"copied":"",onClick:()=>oe(p.couponCode),children:Ge?"Kopyalandı!":"Kodu Kopyala"})]}),!y&&c.jsxs(c.Fragment,{children:[c.jsx(Sp,{mainColor:a,children:"Hediye Çarkı"}),c.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"90%",margin:"0 auto"},onSubmit:pe=>at(pe),children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[c.jsx(nv,{mainColor:a,type:"tel",onInput:pe=>{pe.currentTarget.value=pe.currentTarget.value.replace(/[^0-9]/g,"")},...F("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:pe=>/^(\d)\1+$/.test(pe)||/^5(\d)\1{8}$/.test(pe)||pe==="5123456789"||pe==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),Se.phone&&c.jsx(Qc,{children:Se?.phone?.message?.toString()??null})]}),c.jsxs(av,{children:[c.jsx(iv,{mainColor:a,...F("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),c.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",c.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),Se.kvkk&&c.jsx(Qc,{children:Se?.kvkk?.message?.toString()??null}),w&&c.jsx(Qc,{children:w}),c.jsx("div",{style:{marginTop:"4px"},children:c.jsx(lv,{mainColor:a,disabled:U||te,style:{opacity:U||te?.6:1,cursor:U||te?"not-allowed":"pointer"},children:U?"Çark Dönüyor...":"Çarkı Çevir"})})]})]})]})]}),c.jsxs(rv,{target:"_blank",href:"https://upsell.co/",children:[c.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),c.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),c.jsxs("g",{children:[c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),c.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},xv=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,yv=W.div`
  position: fixed;
  bottom: ${a=>a.open?a.bottom:"-300px"};
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 336px;
  background: white;
  border-radius: 13px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: bottom 0.3s ease-in-out;
  z-index: 1000;
  font-size: 11px;
  color: ${a=>a.mainColor};

  /* Gezen ışık efekti */
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 15px;
    z-index: -1;
    animation: ${xv} 8s linear infinite;
    opacity: ${a=>a.mainColor?"0.8":"0"};
  }

  /* Arka plan maskesi */
  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: white;
    border-radius: 12px;
    z-index: -1;
  }

  @media (max-width: 767px) {
    width: 256px;
    border-radius: 12px;

    &::before {
      border-radius: 12px;
    }

    &::after {
      border-radius: 9px;
    }
  }

  @media (max-width: 480px) {
    width: 224px;
  }
`,vv=W.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 16px;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  height: 48px;
  font-weight: 600;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 13px;
  margin: 13px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);

  @media (max-width: 767px) {
    padding: 11px 13px;
    height: 44px;
    font-size: 11px;
    margin: 10px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px 11px;
    height: 40px;
    font-size: 10px;
    margin: 8px;
  }
`;It`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;const bv=It`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
`,Ep=W.div`
  position: absolute;
  opacity: 0;
  transform: translateY(10px) scale(0.9);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 100%;
  justify-content: center;

  &.active {
    opacity: 1;
    transform: translateY(0) scale(1);
    animation: slideInSmoothStat 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slideInSmoothStat {
    0% {
      opacity: 0;
      transform: translateY(10px) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1) translateZ(0);
    }
  }

  &.previous {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
    animation: ${bv} 0.6s ease-out;
  }

  i {
    background: linear-gradient(
      135deg,
      ${a=>a.mainColor},
      ${a=>a.mainColor}dd
    );
    border-radius: 6px;
    padding: 6px;
    color: white;
    font-size: 13px;
    min-width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px ${a=>a.mainColor}40;
    transition: all 0.3s ease;

    @media (max-width: 767px) {
      padding: 5px;
      font-size: 14px;
      min-width: 22px;
      height: 22px;
      font-size: 11px;
    }
  }
`,Sv=({mainColor:a,forceOpen:r})=>{const[o,u]=V.useState([]),[f,d]=V.useState(!1),[p,g]=V.useState(0),[w,x]=V.useState(r||!1),[y,A]=V.useState("50px"),[v,X]=V.useState(null),[j,B]=V.useState(null);return V.useEffect(()=>{if(!document.querySelector(".ProductBody")){x(!1);return}x(r||!0)},[r]),V.useEffect(()=>{async function R(){if(typeof window<"u"){const J=window.productDetailModel;let U=null;if(J&&J.productId?U=J.productId:U="1",U){d(!0);try{const Z=await Le.post("https://api.upsell.co/ProductStat/"+U,{},{headers:{"Content-Type":"application/json","Content-Length":"2"}});Z.data&&Z.data.data&&Z.data.data.length>0?u(Z.data.data):u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}catch{u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}finally{d(!1)}}}}R()},[]),V.useEffect(()=>{o.length>0&&v===null&&X(o[0])},[o,v]),V.useEffect(()=>{if(o.length>0){const R=setInterval(()=>{g(J=>(J+1)%o.length)},4e3);return()=>clearInterval(R)}},[o]),V.useEffect(()=>{if(o.length>0){B(v),X(o[p]);const R=setTimeout(()=>{B(null)},500);return()=>clearTimeout(R)}},[p,o]),V.useEffect(()=>{r&&x(!0)},[r]),V.useEffect(()=>{if(!r){const R=setTimeout(()=>{x(!0)},4e3);return()=>clearTimeout(R)}},[r]),V.useEffect(()=>{const R=()=>{const J=window.innerWidth<=768,U=J?"80px":"50px",Z=J?"155px":"125px";A(window.scrollY>1e3?Z:U)};return R(),window.addEventListener("scroll",R),window.addEventListener("resize",R),()=>{window.removeEventListener("scroll",R),window.removeEventListener("resize",R)}},[]),f||o.length===0?null:c.jsx(yv,{id:"social-proof-wrapper",open:w,bottom:y,mainColor:a,children:c.jsxs(vv,{children:[j&&c.jsxs(Ep,{className:"previous",mainColor:a,children:[c.jsx("i",{className:`fa fa-${j.icon}`})," ",j.text]}),v&&c.jsxs(Ep,{className:"active",mainColor:a,children:[c.jsx("i",{className:`fa fa-${v.icon}`})," ",v.text]})]})})},wv=W.a`
  width: 100%;
  display: block;
  text-decoration: none;
  position: fixed; // Sayfa kaydıkça üstte kalması için fixed
  top: 0;
  left: 0;
  z-index: 1000000; // Ticimax header'larının üzerinde olması için çok yüksek değer
  overflow: hidden;
  background: ${a=>a.bgColor||"#000000"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Ev=W.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 12px 30px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    padding: 10px 15px;
  }
`,zv=W.div`
  font-weight: 500;
  font-size: 15px;
  color: ${a=>a.textColor||"#ffffff"};
  opacity: ${a=>a.opacity};
  transition: opacity 0.3s ease-in-out;
  text-align: center;
`,Hs=W.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 5px 8px;
  min-width: 45px;
  text-align: center;
`,Ls=W.span`
  font-weight: 700;
  font-size: 16px;
  display: block;
  line-height: 1;
  color: #ffffff;
`,qs=W.span`
  font-size: 8px;
  text-transform: uppercase;
  opacity: 0.75;
  display: block;
  color: #ffffff;
`,Tv=()=>{const[a,r]=V.useState(null),[o,u]=V.useState(0),[f,d]=V.useState(1),[p,g]=V.useState({d:"00",h:"00",m:"00",s:"00"}),w=V.useRef(null);if(V.useEffect(()=>{Le.get("https://api.upsell.co/shops/topbar").then(y=>{y.data.success&&r(y.data.data)})},[]),V.useEffect(()=>{if(!a||!w.current)return;const y=()=>{const v=w.current?.offsetHeight||0,X=document.querySelectorAll("#headerNew, #header");document.body.style.paddingTop=`${v}px`,X.forEach(j=>{j.style.top=`${v}px`,j.style.transition="top 0.3s ease"})},A=setTimeout(y,100);return window.addEventListener("resize",y),()=>{clearTimeout(A),window.removeEventListener("resize",y),document.body.style.paddingTop="0px",document.querySelectorAll("#headerNew, #header").forEach(X=>{X.style.top="0px"})}},[a]),V.useEffect(()=>{if(!a)return;const y=[a.text,a.text2,a.text3].filter(Boolean);if(y.length<=1)return;const A=setInterval(()=>{d(0),setTimeout(()=>{u(v=>(v+1)%y.length),d(1)},300)},5e3);return()=>clearInterval(A)},[a]),V.useEffect(()=>{if(!a?.targetDate)return;const y=setInterval(()=>{const A=new Date(a.targetDate).getTime()-new Date().getTime();if(A<=0){clearInterval(y);return}g({d:Math.floor(A/864e5).toString().padStart(2,"0"),h:Math.floor(A%864e5/36e5).toString().padStart(2,"0"),m:Math.floor(A%36e5/6e4).toString().padStart(2,"0"),s:Math.floor(A%6e4/1e3).toString().padStart(2,"0")})},1e3);return()=>clearInterval(y)},[a?.targetDate]),!a)return null;const x=[a.text,a.text2,a.text3].filter(Boolean);return c.jsx(wv,{ref:w,bgColor:a.backgroundColor,children:c.jsxs(Ev,{children:[c.jsx(zv,{textColor:a.textColor,opacity:f,children:x[o]}),a.targetDate&&c.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[c.jsx("span",{style:{color:a.textColor,fontSize:"12px",opacity:.8},children:"Bitişe:"}),c.jsxs(Hs,{children:[c.jsx(Ls,{children:p.d}),c.jsx(qs,{children:"Gün"})]}),c.jsxs(Hs,{children:[c.jsx(Ls,{children:p.h}),c.jsx(qs,{children:"Saat"})]}),c.jsxs(Hs,{children:[c.jsx(Ls,{children:p.m}),c.jsx(qs,{children:"Dak"})]}),c.jsxs(Hs,{children:[c.jsx(Ls,{children:p.s}),c.jsx(qs,{children:"Sn"})]})]})]})})};function Av(){const[a,r]=V.useState(),[o,u]=V.useState(!1);return V.useEffect(()=>{async function f(){u(!0);try{const d=document.querySelector(".ProductBody")!==null,p=await Le.get("https://api.upsell.co/Shops");if(p.data&&p.data.success&&p.data.data){const g=p.data.data;r({mainColor:g.mainColor||"#e7333c",logo:g.logo||"",enabledPhoneSubscription:g.enabledPhoneSubscription||!1,enabledEmailSubscription:g.enabledEmailSubscription||!1,enabledGiftWheel:g.enabledGiftWheel||!1,enabledProductStat:(g.enabledProductStat||!1)&&d,enabledOrderCheck:g.enabledOrderCheck||!1,enabledWeeklyProducts:g.enabledWeeklyProducts||!1,enabledStockReminder:g.enabledStockReminder||!1,enabledSizeChart:g.enabledSizeChart||!1,enabledCategoryProducts:g.enabledCategoryProducts||!1,enabledTopBar:g.enabledTopBar||!1,useOneChartForAllProducts:g.useOneChartForAllProducts||!1,stockReminderUsageChannel:g.stockReminderUsageChannel||1})}else console.error("API'den geçersiz veri formatı geldi")}catch(d){console.error("API çağrısı başarısız:",d)}finally{u(!1)}}f()},[]),V.useEffect(()=>{const f=new URLSearchParams(window.location.search),d=f.get("utm_source"),p=f.get("utm_medium"),g=f.get("utm_campaign");if(!(d==="upsell"))return;const x="uvid",y=localStorage.getItem(x),A=y||crypto.randomUUID();y||localStorage.setItem(x,A),Le.post("https://api.upsell.co/Tracking/CreateVisitor",{visitorId:A,path:window.location.pathname,productId:String(window.productDetailModel?.product.urunKartiId),utm:{source:d,medium:p,campaign:g}}).catch(()=>{})},[]),V.useEffect(()=>{const f="uvid",d=localStorage.getItem(f);if(!d)return;const p=window,g=p.orderCompletedModel,w=p.checkout_order,x=g?.orderId??w?.id??w?.orderId??null;x&&Le.post("https://api.upsell.co/Tracking/MatchOrder",{visitorId:d,orderId:String(x)}).then(()=>{localStorage.removeItem(f)}).catch(()=>{})},[]),o?c.jsx("div",{children:"Yükleniyor..."}):a?a.mainColor?a.logo?c.jsxs(c.Fragment,{children:[a.enabledTopBar&&c.jsx(Tv,{}),a.enabledCategoryProducts&&c.jsx(Hy,{}),a.enabledWeeklyProducts&&c.jsx(zy,{mainColor:a.mainColor}),(a.enabledPhoneSubscription||a.enabledEmailSubscription)&&c.jsx(iy,{mainColor:a.mainColor,enabledPhoneSubscription:a.enabledPhoneSubscription,enabledEmailSubscription:a.enabledEmailSubscription}),a.enabledGiftWheel&&c.jsx(gv,{mainColor:a.mainColor}),a.enabledProductStat&&c.jsx(Sv,{mainColor:a.mainColor}),a.enabledOrderCheck&&c.jsxs(c.Fragment,{children:[c.jsx(Oy,{color:a.mainColor}),c.jsx(Iy,{})]}),a.enabledStockReminder&&c.jsx(By,{mainColor:a.mainColor,stockReminderUsageChannel:a.stockReminderUsageChannel}),a.enabledSizeChart&&a.useOneChartForAllProducts!==void 0&&c.jsx(Qy,{useOneChartForAllProducts:a.useOneChartForAllProducts})]}):c.jsx("div",{children:"Mağaza logo bilgisi eksik"}):c.jsx("div",{children:"Mağaza renk bilgisi eksik"}):c.jsx("div",{children:"Mağaza bilgileri yüklenemedi"})}const zp=document.getElementById("upsell-style");zp&&Px.createRoot(zp).render(c.jsx(Av,{}));
