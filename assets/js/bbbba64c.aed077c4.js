"use strict";(self.webpackChunknx_docs=self.webpackChunknx_docs||[]).push([[693],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),k=a,g=c["".concat(l,".").concat(k)]||c[k]||s[k]||o;return r?n.createElement(g,p(p({ref:t},u),{},{components:r})):n.createElement(g,p({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var m=2;m<o;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(2081),a=(r(9496),r(9613));const o={authors:["wibus"]},p="NEXT Core v1.5.1 Release.",i={permalink:"/blog/next-core-v1.5.1-release",source:"@site/blog/next-core-v1.5.1-release.md",title:"NEXT Core v1.5.1 Release.",description:"\u611f\u8c22 @MYXXTS @origami-tech @Truimo \u7b49\u5927\u4f6c\u7684\u9f0e\u529b\u76f8\u52a9",date:"2022-08-09T07:35:06.000Z",formattedDate:"2022\u5e748\u67089\u65e5",tags:[],readingTime:2.5,hasTruncateMarker:!1,authors:[{name:"wibus-wee",title:"Maintainer of NEXT",url:"https://github.com/wibus-wee",imageURL:"https://github.com/wibus-wee.png",key:"wibus"}],frontMatter:{authors:["wibus"]},nextItem:{title:"NEXT Is Now Available!",permalink:"/blog/next-is-now-available"}},l={authorsImageUrls:[void 0]},m=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",level:2}],u={toc:m};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u611f\u8c22 ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/MYXXTS"},"@MYXXTS")," ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/origami-tech"},"@origami-tech")," ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Truimo"},"@Truimo")," \u7b49\u5927\u4f6c\u7684\u9f0e\u529b\u76f8\u52a9")),(0,a.kt)("p",null,"\u7ecf\u8fc71\u5e74\u7684\u6478\u7d22\u4e0e\u5c06\u8fd11\u4e2a\u6708\u7684\u4ece\u96f6\u91cd\u6784\uff0c\u6211\u4eec\u51fa\u7248\u4e86\u65b0\u7684 core\uff0c\u65b0\u7684\u8d77\u70b9\u3002"),(0,a.kt)("h2",{id:"\u65b0\u7279\u6027"},"\u65b0\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93"),"\u9a71\u52a8 ",(0,a.kt)("strong",{parentName:"p"},"MongoDB"),"\uff1aMongoDB \u662f\u4e00\u4e2a NoSQL \u6570\u636e\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u975e\u5e38\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u5b58\u50a8\u548c\u67e5\u8be2\u6570\u636e\uff0c\u800c\u4e14\u5b83\u7684\u6027\u80fd\u975e\u5e38\u9ad8\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u7684\u7f13\u5b58\u673a\u5236 ",(0,a.kt)("strong",{parentName:"p"},"Redis"),"\uff1aRedis \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u7f13\u5b58\uff0c\u5b83\u53ef\u4ee5\u63d0\u4f9b\u9ad8\u901f\u7684\u67e5\u8be2\u548c\u5b58\u50a8\uff0c\u76ee\u524d NEXT Core \u4f7f\u7528\u4e8e\u914d\u7f6e\u83b7\u53d6\u4e2d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u7684",(0,a.kt)("strong",{parentName:"p"},"\u63d2\u4ef6\u7cfb\u7edf"),"\uff0c\u63d2\u4ef6\u7cfb\u7edf\u662f\u4e00\u4e2a\u975e\u5e38\u7279\u522b\u7684\u6846\u67b6\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5728\u7a7a\u95f4\u4e2d\u6dfb\u52a0\u65b0\u7684\u529f\u80fd\uff0c\u6bd4\u5982 WebHook, Macros, \u53ef\u4ee5\u8ba9\u4f60\u7684\u7a7a\u95f4\u66f4\u52a0\u7075\u6d3b\uff0c\u66f4\u52a0\u5f3a\u5927\u3002"),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u65b0\u7684",(0,a.kt)("strong",{parentName:"p"},"\u63d2\u4ef6\u7cfb\u7edf"),"\u5c1a\u672a\u7a33\u5b9a\uff0c\u4ec5\u5b8c\u6210\u4e86\u57fa\u672c\u7684\u63d2\u4ef6\u6ce8\u518c\uff0c\u6fc0\u6d3b\uff0c\u5e94\u7528\u63d2\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5168\u65b0\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6587\u7ae0\u5907\u4efd\u6a21\u5757"),"\uff1a\u6587\u7ae0\u5907\u4efd\u53ef\u4ee5\u8ba9\u4f60\u5c06\u6587\u7ae0\u5907\u4efd\u5230\u672c\u5730\uff0c\u4ee5\u5907\u4ee5\u540e\u4f7f\u7528\uff0c\u540c\u65f6\u652f\u6301\u5bfc\u5165/\u8fc1\u79fb"),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6539\u8fdb\u540e\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6587\u7ae0\u5907\u4efd"),"\uff0c\u5c06\u9075\u5faa\u4ee5\u4e0b\u903b\u8f91\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5355\u7bc7\u6587\u7ae0\u76f4\u63a5\u8f93\u51fa"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u7bc7\u6587\u7ae0\u6253\u5305\u8f93\u51fa")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6539\u8fdb\u540e\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u5907\u4efd\u6a21\u5757"),"\uff1a\u5c06\u5168\u90e8 NEXT \u6570\u636e\u4fdd\u5b58\u81f3\u672c\u5730\uff0c\u6570\u636e\u6bd4\u6587\u7ae0\u5907\u4efd\u6a21\u5757\u66f4\u52a0\u5168\u9762")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u6587\u7ae0\u6216\u9875\u9762"),"\u4e2d\u81ea\u52a8\u8bb0\u5f55",(0,a.kt)("strong",{parentName:"p"},"\u56fe\u7247\u76f8\u5173\u5143\u6570\u636e"),"\uff1a\u6bd4\u5982\u56fe\u7247\u7684\u5bbd\u9ad8\u3001\u56fe\u7247\u7684\u7c7b\u578b\u3001\u56fe\u7247\u7684 URL \u7b49\u7b49\uff0c\u4f46\u4e5f\u9700\u8981\u524d\u7aef\u652f\u6301\uff0c\u8fd9\u6837\u53ef\u4ee5\u8ba9\u4f60\u7684\u6587\u7ae0\u66f4\u52a0\u7f8e\u89c2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u6587\u7ae0\u7ba1\u7406\u9009\u9879\uff1a\u6bd4\u5982\u6587\u7ae0\u7684\u6807\u7b7e\uff0c\u6587\u7ae0\u7684\u5206\u7c7b\uff0c\u6587\u7ae0\u7684\u663e\u793a/\u9690\u85cf\uff0c\u6587\u7ae0\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7b49\u7b49")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u6807\u7b7e\u6216\u5206\u7c7b\u5408\u5e76"),"\uff1a\u5c06\u591a\u4e2a\u5206\u7c7b\u6216\u6807\u7b7e\u4e2d\u7684\u6587\u7ae0\u5408\u5e76\u5982\u4e00\u4e2a\u5206\u7c7b\u6216\u6807\u7b7e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u88c5\u9970\u5668"),"\u6765",(0,a.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u5bc6\u94a5"),"\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u9636\u64cd\u4f5c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5168\u65b0\u7684",(0,a.kt)("strong",{parentName:"p"},"\u8de8\u5e73\u53f0 Cookie")," \u89e3\u6790\u88c5\u9970\u5668\uff1a\u652f\u6301\u591a\u79cd\u6d4f\u89c8\u5668\uff0c\u6bd4\u5982 Chrome\u3001Firefox\u3001Safari\u3001IE\u3001Edge \u7b49\u7b49"))))}s.isMDXComponent=!0}}]);