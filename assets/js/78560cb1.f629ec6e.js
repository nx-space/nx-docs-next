"use strict";(self.webpackChunknx_docs=self.webpackChunknx_docs||[]).push([[366],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(2081),o=(t(9496),t(9613));const a={sidebar_position:2,description:"\u5728\u5f00\u53d1\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e00\u4e9b\u5c0f\u4e8b\u60c5"},i="\u5f00\u53d1\u6ce8\u610f",p={unversionedId:"develop/tips",id:"develop/tips",title:"\u5f00\u53d1\u6ce8\u610f",description:"\u5728\u5f00\u53d1\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e00\u4e9b\u5c0f\u4e8b\u60c5",source:"@site/docs/develop/tips.md",sourceDirName:"develop",slug:"/develop/tips",permalink:"/docs/develop/tips",draft:!1,editUrl:"https://github.com/nx-space/nx-docs/docs/develop/tips.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u5728\u5f00\u53d1\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e00\u4e9b\u5c0f\u4e8b\u60c5"},sidebar:"docs",previous:{title:"\u7f16\u5199\u524d\u7aef\u9879\u76ee",permalink:"/docs/develop/frontend"},next:{title:"\u4e3b\u9898\u5f00\u53d1\u6559\u7a0b",permalink:"/docs/category/\u4e3b\u9898\u5f00\u53d1\u6559\u7a0b"}},s={},l=[{value:"\u8bf7\u6c42\u4e2d\u7684\u5934\u8bbe\u7f6e",id:"\u8bf7\u6c42\u4e2d\u7684\u5934\u8bbe\u7f6e",level:2},{value:"\u8bc4\u8bba API",id:"\u8bc4\u8bba-api",level:2}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5f00\u53d1\u6ce8\u610f"},"\u5f00\u53d1\u6ce8\u610f"),(0,o.kt)("h2",{id:"\u8bf7\u6c42\u4e2d\u7684\u5934\u8bbe\u7f6e"},"\u8bf7\u6c42\u4e2d\u7684\u5934\u8bbe\u7f6e"),(0,o.kt)("p",null,"::: warning\n\u8bf7\u6c42\u63a5\u53e3\u65f6\uff0c\u5982\u679c\u7ba1\u7406\u5458\u5df2\u7ecf\u767b\u5f55\uff0c\u8bf7\u52a1\u5fc5\u5728\u5934\u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\u5b57\u6bb5\uff0c\u5176\u6388\u6743Token Type\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer"),"\u3002\n:::"),(0,o.kt)("p",null,"\u5c3d\u7ba1Token\u7684\u68c0\u6d4b\u5728\u540e\u7aef\u5904\u7406\u4e2d\u6ca1\u6709\u5b8c\u5168\u4f7f\u7528\uff0c\u4e3a\u4e86\u9632\u6b62\u5c06\u6765\u7684\u7248\u672c\u8fc1\u79fb\u95ee\u9898\uff0c\u7f16\u5199\u6807\u51c6\u5934\u662f\u5fc5\u8981\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6,7,8}","{6,7,8}":!0},"let axios = require('axios');\n\nlet config = {\n  method: 'get',\n  url: 'http://localhost:3000/api/v1/ping',\n  headers: { \n    'Authorization': 'Bearer HereIsToken'\n  }\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n")),(0,o.kt)("h2",{id:"\u8bc4\u8bba-api"},"\u8bc4\u8bba API"),(0,o.kt)("p",null,"\u5728\u524d\u7aef\u5904\u7406\u4e2d\uff0c\u82e5\u975e",(0,o.kt)("strong",{parentName:"p"},"\u4e3b\u4eba\u9a7e\u5230"),"\uff0c\u5728POST\u8bf7\u6c42\u4e2d\u9700\u8981\u5c06isOwner\u5b57\u6bb5\u8bbe\u7f6e\u4e3a1\u3002\u8fd9\u662f\u7b2c\u4e00\u5c42\u9632\u62a4\u5192\u5145\u4e3b\u4eba\u7684\u8bc4\u8bba\uff1b\u7b2c\u4e8c\u5c42\u5c06\u4f1a\u51fa\u73b0\u5728\u5728\u5148\u524d",(0,o.kt)("em",{parentName:"p"},"2 headers\u7684\u8bbe\u7f6e"),"\u4e2d\uff0c\u901a\u8fc7Token\u9a8c\u8bc1\uff0c\u518d\u6765\u9632\u62a4\u4e3b\u4eba\u8bc4\u8bba"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u70b9"),"\uff1a\u9700\u8981\u505a\u7b2c\u4e00\u5c42XSS\u9632\u62a4\uff0c\u867d\u7136\u5728\u540e\u7aef\u5df2\u7ecf\u505a\u4e86\u4e00\u5c42XSS\u9632\u62a4\uff0c\u4f46\u662f\u82e5\u8981\u5c06\u5b89\u5168\u6027\u63d0\u9ad8\uff0c\u8bf7\u52a1\u5fc5\u5728\u524d\u7aef\u4e5f\u8981\u8fdb\u884cXSS\u5904\u7406"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u70b9"),"\uff1a\u53d1\u8d77\u8bf7\u6c42\u524d",(0,o.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u83b7\u53d6"),(0,o.kt)("inlineCode",{parentName:"p"},"ipAddress"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userAgent"),"\u5e76\u5c06\u5176\u586b\u5165POST\u8868\u5355 \u4ee5\u63d0\u9ad8\u540e\u7aef\u54cd\u5e94\u901f\u5ea6\uff0c\u4f46\u6b64\u53d7\u9650\u4e8e\u8bbf\u5ba2\u65b9\u9762\u95ee\u9898"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u60a8\u8fd8\u53ef\u4ee5\u9009\u62e9\u4e0d\u4e3a\u8bf7\u6c42\u83b7\u53d6IP\u548c\u7528\u6237\u4ee3\u7406\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6,9}","{6,9}":!0},"var axios = require('axios');\nvar qs = require('qs');\nvar data = qs.stringify({\n  'type': 'post',\n  'path': 'hello_well',\n  'content': '\u5feb\u9012\u6dd8\u5b9d <script>alert(\\'xss\\')<\/script>',\n  'author': 'wibusbot',\n  'owner': 'wibusbot',\n  'isOwner': '1',\n  'email': 'wibus@qq.com',\n  'url': 'xxxxx',\n  'key': 'xxxxx',\n  'hasChild': 'false',\n  'ipAddress': 'xxxx',\n  'userAgent': 'xxxx',\n  'state': '0' \n});\nvar config = {\n  method: 'post',\n  url: 'http://localhost:3000/api/v1/comment/create',\n  headers: { \n    'Content-Type': 'application/x-www-form-urlencoded'\n  },\n  data : data\n};\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n")),(0,o.kt)("p",null,"::: warning\n\u4e0a\u9762\u7684\u793a\u4f8b\u6ca1\u6709\u5bf9\u6587\u7ae0\u5185\u5bb9\u8fdb\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"XSS\u8fc7\u6ee4"),"\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u8981\u6ce8\u610f\u8fd9\u4e00\u70b9\u3002\n:::"))}u.isMDXComponent=!0}}]);