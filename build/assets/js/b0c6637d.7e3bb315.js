"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4048],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3996:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),o=["components"],a={sidebar_position:3,id:"flinksql_job_submit",title:"\u4f5c\u4e1a\u63d0\u4ea4"},u=void 0,p={unversionedId:"operation_guide/flinksql_oper_guide/flinksql_job_submit",id:"version-0.6.0/operation_guide/flinksql_oper_guide/flinksql_job_submit",title:"\u4f5c\u4e1a\u63d0\u4ea4",description:"\u529f\u80fd\u8bf4\u660e",source:"@site/versioned_docs/version-0.6.0/operation_guide/flinksql_oper_guide/flinksql_job_submit.md",sourceDirName:"operation_guide/flinksql_oper_guide",slug:"/operation_guide/flinksql_oper_guide/flinksql_job_submit",permalink:"/docs/0.6.0/operation_guide/flinksql_oper_guide/flinksql_job_submit",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/versioned_docs/version-0.6.0/operation_guide/flinksql_oper_guide/flinksql_job_submit.md",tags:[],version:"0.6.0",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"flinksql_job_submit",title:"\u4f5c\u4e1a\u63d0\u4ea4"},sidebar:"version-0.6.0/tutorialSidebar",previous:{title:"\u4f5c\u4e1a\u5f00\u53d1",permalink:"/docs/0.6.0/operation_guide/flinksql_oper_guide/flinksql_job_dev"},next:{title:"\u4f5c\u4e1a\u8c03\u8bd5",permalink:"/docs/0.6.0/operation_guide/flinksql_oper_guide/job_debug"}},s={},c=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u573a\u666f",id:"\u5e38\u7528\u573a\u666f",level:2},{value:"Flink\u4f5c\u4e1a\u542f\u52a8\u64cd\u4f5c\u6b65\u9aa4",id:"flink\u4f5c\u4e1a\u542f\u52a8\u64cd\u4f5c\u6b65\u9aa4",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6267\u884c\u5f53\u524d\u7684 SQL\uff1a")," \u63d0\u4ea4\u6267\u884c\u672a\u4fdd\u5b58\u7684\u4f5c\u4e1a\u914d\u7f6e\uff0c\u5e76\u53ef\u4ee5\u540c\u6b65\u83b7\u53d6 SELECT\u3001SHOW \u7b49\u6267\u884c\u7ed3\u679c\uff0c\u5e38\u7528\u4e8e Local\u3001Standalone\u3001Session \u6267\u884c\u6a21\u5f0f\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u63d0\u4ea4\uff1a")," \u63d0\u4ea4\u6267\u884c\u6700\u8fd1\u4fdd\u5b58\u7684\u4f5c\u4e1a\u914d\u7f6e\uff0c\u53ef\u7528\u4e8e\u6240\u6709\u6267\u884c\u6a21\u5f0f\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53d1\u5e03")," \u53d1\u5e03\u5f53\u524d\u4f5c\u4e1a\u7684\u6700\u8fd1\u4fdd\u5b58\u7684\u4f5c\u4e1a\u914d\u7f6e\uff0c\u53d1\u5e03\u540e\u65e0\u6cd5\u4fee\u6539\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e0a\u7ebf")," \u63d0\u4ea4\u5df2\u53d1\u5e03\u7684\u4f5c\u4e1a\u914d\u7f6e\uff0c\u53ef\u89e6\u53d1\u62a5\u8b66\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e0b\u7ebf")," \u505c\u6b62\u5df2\u4e0a\u7ebf\u7684\u4f5c\u4e1a\uff0c\u5e76\u89e6\u53d1 SavePoint\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u505c\u6b62")," \u53ea\u505c\u6b62\u5df2\u63d0\u4ea4\u7684\u4f5c\u4e1a\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7ef4\u62a4")," \u4f7f\u5df2\u53d1\u5e03\u7684\u4f5c\u4e1a\u8fdb\u5165\u7ef4\u62a4\u72b6\u6001\uff0c\u53ef\u4ee5\u88ab\u4fee\u6539\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6ce8\u9500")," \u6807\u8bb0\u4f5c\u4e1a\u4e3a\u6ce8\u9500\u4e0d\u53ef\u7528\u72b6\u6001\u3002")),(0,l.kt)("h2",{id:"\u5e38\u7528\u573a\u666f"},"\u5e38\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u67e5\u770b FlinkSQL \u6267\u884c\u7ed3\u679c\uff1a")," \u6267\u884c\u5f53\u524d\u7684 SQL\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u63d0\u4ea4\u4f5c\u4e1a\uff1a")," \u5f02\u6b65\u63d0\u4ea4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e0a\u7ebf\u4f5c\u4e1a\uff1a")," SavePoint \u6700\u8fd1\u4e00\u6b21 + \u4e0a\u7ebf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e0b\u7ebf\u4f5c\u4e1a\uff1a")," \u4e0b\u7ebf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5347\u7ea7\u4f5c\u4e1a\uff1a")," \u4e0b\u7ebf\u540e\u4e0a\u7ebf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5168\u65b0\u4e0a\u7ebf\u4f5c\u4e1a\uff1a")," SavePoint \u7981\u7528 + \u4e0a\u7ebf\u3002")),(0,l.kt)("h2",{id:"flink\u4f5c\u4e1a\u542f\u52a8\u64cd\u4f5c\u6b65\u9aa4"},"Flink\u4f5c\u4e1a\u542f\u52a8\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("p",null,"1.\u9996\u5148\u767b\u5f55Dinky\u6570\u636e\u5f00\u53d1\u63a7\u5236\u53f0"),(0,l.kt)("p",null,"2.\u5728\u5de6\u4fa7\u83dc\u5355\u680f\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u76ee\u5f55 > \u4f5c\u4e1a\u540d\u79f0 > \u68c0\u67e5\u5f53\u524d\u7684FlinkSql > \u53d1\u5e03 > \u4e0a\u7ebf")),(0,l.kt)("p",null,"\u6216\u8005\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u76ee\u5f55 > \u4f5c\u4e1a\u540d\u79f0 > \u68c0\u67e5\u5f53\u524d\u7684FlinkSql > \u5f02\u6b65\u63d0\u4ea4")),(0,l.kt)("p",null,"\u4f5c\u4e1a\u542f\u52a8\u5f02\u6b65\u63d0\u4ea4\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_dev/flinksql_guide/flinksql_job_submit/async_submit.png",alt:"async_submit"})),(0,l.kt)("p",null,"\u4f5c\u4e1a\u542f\u52a8\u53d1\u5e03\u4e0a\u7ebf\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_dev/flinksql_guide/flinksql_job_submit/online.png",alt:"online"})),(0,l.kt)("p",null,"\u6709\u5173\u53d1\u5e03\u4e0a\u7ebf\u7684\u8be6\u7ec6\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003\u8fd0\u7ef4\u4e2d\u5fc3"))}k.isMDXComponent=!0}}]);