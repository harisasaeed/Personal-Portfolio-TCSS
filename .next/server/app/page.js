(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},6872:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var i=r(260),s=r(8203),n=r(5155),o=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8310)),"E:\\portfolio tcss\\project\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"E:\\portfolio tcss\\project\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["E:\\portfolio tcss\\project\\src\\app\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1719:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},5631:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},2393:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1066,23))},2665:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1902,23))},6609:()=>{},3233:()=>{},1902:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(5488),s=r(1063),n=r(5512),o=s._(r(8009)),a=i._(r(5740)),l=i._(r(9153)),d=r(2034),c=r(4653),u=r(8156);r(6831);let p=r(4055),m=i._(r(1628)),f=r(3727),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,s,n,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function x(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let b=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:s,height:a,width:l,decoding:d,className:c,style:u,fetchPriority:p,placeholder:m,loading:h,unoptimized:b,fill:v,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:_,sizesInput:P,onLoad:S,onError:N,...C}=e,k=(0,o.useCallback)(e=>{e&&(N&&(e.src=e.src),e.complete&&g(e,m,y,j,w,b,P))},[r,m,y,j,w,N,b,P]),M=(0,f.useMergedRef)(t,k);return(0,n.jsx)("img",{...C,...x(p),loading:h,width:l,height:a,decoding:d,"data-nimg":v?"fill":"1",className:c,style:u,sizes:s,srcSet:i,src:r,ref:M,onLoad:e=>{g(e.currentTarget,m,y,j,w,b,P)},onError:e=>{_(!0),"empty"!==m&&w(!0),N&&N(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(p.RouterContext),i=(0,o.useContext)(u.ImageConfigContext),s=(0,o.useMemo)(()=>{var e;let t=h||i||c.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),s=t.deviceSizes.sort((e,t)=>e-t),n=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:s,qualities:n}},[i]),{onLoad:a,onLoadingComplete:l}=e,f=(0,o.useRef)(a);(0,o.useEffect)(()=>{f.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[x,y]=(0,o.useState)(!1),[j,w]=(0,o.useState)(!1),{props:_,meta:P}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:s,blurComplete:x,showAltText:j});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:f,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.priority?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3727:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return s}});let i=r(8009);function s(e,t){let r=(0,i.useRef)(()=>{}),s=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(r.current(),s.current()):(r.current=n(e,i),s.current=n(t,i))}:e||t,[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2782:(e,t,r)=>{"use strict";e.exports=r(8104).vendored.contexts.AmpContext},6302:(e,t,r)=>{"use strict";e.exports=r(8104).vendored.contexts.HeadManagerContext},8156:(e,t,r)=>{"use strict";e.exports=r(8104).vendored.contexts.ImageConfigContext},4055:(e,t,r)=>{"use strict";e.exports=r(8104).vendored.contexts.RouterContext},2677:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2034:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(6831);let i=r(8337),s=r(4653);function n(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let l,d,c,{src:u,sizes:p,unoptimized:m=!1,priority:f=!1,loading:h,className:g,quality:x,width:b,height:v,fill:y=!1,style:j,overrideSrc:w,onLoad:_,onLoadingComplete:P,placeholder:S="empty",blurDataURL:N,fetchPriority:C,decoding:k="async",layout:M,objectFit:z,objectPosition:E,lazyBoundary:O,lazyRoot:I,...A}=e,{imgConf:R,showAltText:q,blurComplete:D,defaultLoader:T}=t,L=R||s.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),i=null==(r=L.qualities)?void 0:r.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=A.loader||T;delete A.loader,delete A.srcSet;let G="__next_img_default"in F;if(G){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(M){"fill"===M&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!p&&(p=t)}let W="",B=o(b),U=o(v);if((a=u)&&"object"==typeof a&&(n(a)||void 0!==a.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(d=e.blurWidth,c=e.blurHeight,N=N||e.blurDataURL,W=e.src,!y){if(B||U){if(B&&!U){let t=B/e.width;U=Math.round(e.height*t)}else if(!B&&U){let t=U/e.height;B=Math.round(e.width*t)}}else B=e.width,U=e.height}}let H=!f&&("lazy"===h||void 0===h);(!(u="string"==typeof u?u:W)||u.startsWith("data:")||u.startsWith("blob:"))&&(m=!0,H=!1),l.unoptimized&&(m=!0),G&&!l.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(m=!0);let V=o(x),$=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:E}:{},q?{}:{color:"transparent"},j),Y=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:U,blurWidth:d,blurHeight:c,blurDataURL:N||"",objectFit:$.objectFit})+'")':'url("'+S+'")',J=Y?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},X=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:n,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:n,width:l[c]})}}({config:l,src:u,unoptimized:m,width:B,quality:V,sizes:p,loader:F});return{props:{...A,loading:H?"lazy":h,fetchPriority:C,width:B,height:U,decoding:k,className:g,style:{...$,...J},sizes:X.sizes,srcSet:X.srcSet,src:w||X.src},meta:{unoptimized:m,priority:f,placeholder:S,fill:y}}}},9153:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return u}});let i=r(5488),s=r(1063),n=r(5512),o=s._(r(8009)),a=i._(r(7440)),l=r(2782),d=r(6302),c=r(2677);function u(e){void 0===e&&(e=!1);let t=[(0,n.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(6831);let m=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return s=>{let n=!0,o=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){o=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?n=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?n=!1:t.add(s.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?n=!1:r.add(t);else{let e=s.props[t],r=i[t]||new Set;("name"!==t||!o)&&r.has(e)?n=!1:(r.add(e),i[t]=r)}}}}return n}}()).reverse().map((e,t)=>{let i=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),i=(0,o.useContext)(d.HeadManagerContext);return(0,n.jsx)(a.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8337:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:n,objectFit:o}=e,a=i?40*i:t,l=s?40*s:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4653:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},1628:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:s,quality:n}=e,o=n||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+s+"&q="+o+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},7440:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let i=r(8009),s=()=>{},n=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function a(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),n(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1066:(e,t,r)=>{let{createProxy:i}=r(3439);e.exports=i("E:\\portfolio tcss\\project\\node_modules\\next\\dist\\client\\image-component.js")},2326:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(5843);let i=r(6749),s=r(2833);function n(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let l,d,c,{src:u,sizes:p,unoptimized:m=!1,priority:f=!1,loading:h,className:g,quality:x,width:b,height:v,fill:y=!1,style:j,overrideSrc:w,onLoad:_,onLoadingComplete:P,placeholder:S="empty",blurDataURL:N,fetchPriority:C,decoding:k="async",layout:M,objectFit:z,objectPosition:E,lazyBoundary:O,lazyRoot:I,...A}=e,{imgConf:R,showAltText:q,blurComplete:D,defaultLoader:T}=t,L=R||s.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),i=null==(r=L.qualities)?void 0:r.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=A.loader||T;delete A.loader,delete A.srcSet;let G="__next_img_default"in F;if(G){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(M){"fill"===M&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!p&&(p=t)}let W="",B=o(b),U=o(v);if((a=u)&&"object"==typeof a&&(n(a)||void 0!==a.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(d=e.blurWidth,c=e.blurHeight,N=N||e.blurDataURL,W=e.src,!y){if(B||U){if(B&&!U){let t=B/e.width;U=Math.round(e.height*t)}else if(!B&&U){let t=U/e.height;B=Math.round(e.width*t)}}else B=e.width,U=e.height}}let H=!f&&("lazy"===h||void 0===h);(!(u="string"==typeof u?u:W)||u.startsWith("data:")||u.startsWith("blob:"))&&(m=!0,H=!1),l.unoptimized&&(m=!0),G&&!l.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(m=!0);let V=o(x),$=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:E}:{},q?{}:{color:"transparent"},j),Y=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:U,blurWidth:d,blurHeight:c,blurDataURL:N||"",objectFit:$.objectFit})+'")':'url("'+S+'")',J=Y?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},X=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:n,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:n,width:l[c]})}}({config:l,src:u,unoptimized:m,width:B,quality:V,sizes:p,loader:F});return{props:{...A,loading:H?"lazy":h,fetchPriority:C,width:B,height:U,decoding:k,className:g,style:{...$,...J},sizes:X.sizes,srcSet:X.srcSet,src:w||X.src},meta:{unoptimized:m,priority:f,placeholder:S,fill:y}}}},6749:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:n,objectFit:o}=e,a=i?40*i:t,l=s?40*s:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2833:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},8516:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(3264),s=r(2326),n=r(1066),o=i._(r(6352));function a(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},6352:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:s,quality:n}=e,o=n||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+s+"&q="+o+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5843:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>o});var i=r(2740),s=r(5041),n=r.n(s);r(1135);let o={title:"Professional Portfolio",description:"Welcome to my professional portfolio"};function a({children:e}){return(0,i.jsx)("html",{lang:"en",className:"scroll-smooth",children:(0,i.jsx)("body",{className:n().className,children:e})})}},8310:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var i=r(2740),s=r(6301),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),a=(e,t)=>{let r=(0,s.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:d="",children:c,...u},p)=>(0,s.createElement)("svg",{ref:p,...n,width:i,height:i,stroke:r,strokeWidth:l?24*Number(a)/Number(i):a,className:["lucide",`lucide-${o(e)}`,d].join(" "),...u},[...t.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r},l=a("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),d=a("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),c=a("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),u=a("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),p=a("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),m=a("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var f=r(8516),h=r.n(f);function g(){return(0,i.jsxs)("main",{className:"min-h-screen",children:[(0,i.jsxs)("section",{className:"relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center mix-blend-overlay opacity-20"}),(0,i.jsxs)("div",{className:"relative z-10 text-center text-white px-4 max-w-4xl",children:[(0,i.jsxs)("h1",{className:"text-5xl md:text-7xl font-bold mb-6",children:[(0,i.jsx)("span",{className:"block",children:"Hi, I am Harisa Saeed"}),(0,i.jsx)("span",{className:"block mt-2 text-3xl md:text-4xl gradient-text",children:"Frontend-Developer"})]}),(0,i.jsx)("p",{className:"text-xl md:text-2xl mb-8 text-gray-200",children:"I craft beautiful, user-friendly web experiences"}),(0,i.jsxs)("div",{className:"flex justify-center space-x-6",children:[(0,i.jsx)("a",{href:"#",className:"p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors",children:(0,i.jsx)(l,{size:24})}),(0,i.jsx)("a",{href:"#",className:"p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors",children:(0,i.jsx)(d,{size:24})}),(0,i.jsx)("a",{href:"#",className:"p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors",children:(0,i.jsx)(c,{size:24})})]}),(0,i.jsx)("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:(0,i.jsx)(u,{size:32})})]})]}),(0,i.jsx)("section",{id:"about",className:"py-20 px-4 md:px-8 bg-white",children:(0,i.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,i.jsxs)("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[(0,i.jsx)("div",{className:"relative aspect-square",children:(0,i.jsx)(h(),{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",alt:"Profile",fill:!0,className:"object-cover rounded-2xl shadow-2xl",sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-6",children:"About Me"}),(0,i.jsx)("p",{className:"text-gray-600 mb-6 text-lg",children:"I'm a passionate Frontend Developer with expertise in building modern web applications. With a strong foundation in both front-end and back-end development, I create seamless digital experiences that solve real-world problems."}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{className:"p-6 bg-gray-50 rounded-xl",children:[(0,i.jsx)("h3",{className:"font-bold text-2xl mb-2 gradient-text",children:"2+"}),(0,i.jsx)("p",{className:"text-gray-600",children:"Years Experience"})]}),(0,i.jsxs)("div",{className:"p-6 bg-gray-50 rounded-xl",children:[(0,i.jsx)("h3",{className:"font-bold text-2xl mb-2 gradient-text",children:"10+"}),(0,i.jsx)("p",{className:"text-gray-600",children:"Projects Completed"})]})]})]})]})})}),(0,i.jsx)("section",{id:"skills",className:"py-20 px-4 md:px-8 bg-gray-50",children:(0,i.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Technical Skills"}),(0,i.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:["Next.js","React","TypeScript","Node.js","TailwindCSS",,"Html"].map(e=>(0,i.jsxs)("div",{className:"p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center",children:[(0,i.jsx)(p,{className:"w-8 h-8 mb-3 mx-auto text-purple-600"}),(0,i.jsx)("p",{className:"font-medium",children:e})]},e))})]})}),(0,i.jsx)("section",{id:"projects",className:"py-20 px-4 md:px-8 bg-white",children:(0,i.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Featured Projects"}),(0,i.jsx)("div",{className:"grid md:grid-cols-2 gap-8",children:[{title:"E-Commerce Platform",description:"A full-featured online shopping platform built with Next.js and Stripe",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f",tags:["Next.js","TypeScript","Stripe"]},{title:"Task Management App",description:"A collaborative task management tool with real-time updates",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",tags:["React","Node.js","Socket.IO"]}].map((e,t)=>(0,i.jsxs)("div",{className:"group relative bg-white rounded-2xl overflow-hidden shadow-lg",children:[(0,i.jsx)("div",{className:"relative h-64",children:(0,i.jsx)(h(),{src:e.image,alt:e.title,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("h3",{className:"text-xl font-bold mb-2",children:e.title}),(0,i.jsx)("p",{className:"text-gray-600 mb-4",children:e.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:e.tags.map(e=>(0,i.jsx)("span",{className:"px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm",children:e},e))}),(0,i.jsxs)("a",{href:"#",className:"inline-flex items-center gap-1 text-purple-600 hover:text-purple-700",children:["View Project ",(0,i.jsx)(m,{size:16})]})]})]},t))})]})}),(0,i.jsx)("section",{id:"contact",className:"py-20 px-4 md:px-8 bg-gray-50",children:(0,i.jsxs)("div",{className:"max-w-3xl mx-auto text-center",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Let's Work Together"}),(0,i.jsx)("p",{className:"text-gray-600 mb-8 text-lg",children:"I'm currently available for freelance projects and full-time opportunities. If you're interested in working together, let's connect!"}),(0,i.jsxs)("a",{href:"mailto:contact@example.com",className:"inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors text-lg font-medium",children:[(0,i.jsx)(c,{size:20}),"Get in Touch"]})]})}),(0,i.jsx)("footer",{className:"py-8 text-center text-gray-600 bg-white",children:(0,i.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Harisa Saeed. All rights reserved."]})})]})}},1135:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[419],()=>r(6872));module.exports=i})();