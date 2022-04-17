"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[548],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,h=s["".concat(o,".").concat(m)]||s[m]||c[m]||a;return n?i.createElement(h,d(d({ref:t},p),{},{components:n})):i.createElement(h,d({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,d=new Array(a);d[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var u=2;u<a;u++)d[u]=n[u];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),d=["components"],l={sidebar_position:9,id:"hudi",title:"Hudi"},o=void 0,u={unversionedId:"extend/practice_guide/hudi",id:"version-0.6/extend/practice_guide/hudi",title:"Hudi",description:"\u80cc\u666f\u8d44\u6599",source:"@site/versioned_docs/version-0.6/extend/practice_guide/hudi.md",sourceDirName:"extend/practice_guide",slug:"/extend/practice_guide/hudi",permalink:"/docs/extend/practice_guide/hudi",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/versioned_docs/version-0.6/extend/practice_guide/hudi.md",tags:[],version:"0.6",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"hudi",title:"Hudi"},sidebar:"version-0.6/tutorialSidebar",previous:{title:"Doris",permalink:"/docs/extend/practice_guide/doris"},next:{title:"Iceberg",permalink:"/docs/extend/practice_guide/iceberg"}},p={},c=[{value:"\u80cc\u666f\u8d44\u6599",id:"\u80cc\u666f\u8d44\u6599",level:2},{value:"\u51c6\u5907&amp;&amp;\u90e8\u7f72",id:"\u51c6\u5907\u90e8\u7f72",level:2},{value:"1. \u90e8\u7f72Flink1.13.5",id:"1-\u90e8\u7f72flink1135",level:3},{value:"2. \u96c6\u6210Hudi 0.10.0",id:"2-\u96c6\u6210hudi-0100",level:3},{value:"3. \u5b89\u88c5 Dlink-0.5.0",id:"3-\u5b89\u88c5-dlink-050",level:3},{value:"\u6570\u636e\u8868",id:"\u6570\u636e\u8868",level:2},{value:"1. DDL\u51c6\u5907",id:"1-ddl\u51c6\u5907",level:3},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:2},{value:"1.\u5bf9\u4e0a\u8ff0SQL\u6267\u884c\u8bed\u6cd5\u6821\u9a8c:",id:"1\u5bf9\u4e0a\u8ff0sql\u6267\u884c\u8bed\u6cd5\u6821\u9a8c",level:3},{value:"2. \u83b7\u53d6JobPlan",id:"2-\u83b7\u53d6jobplan",level:3},{value:"3. \u6267\u884c\u4efb\u52a1",id:"3-\u6267\u884c\u4efb\u52a1",level:3},{value:"4. dlink \u67e5\u770b\u6267\u884c\u7684\u4efb\u52a1",id:"4-dlink-\u67e5\u770b\u6267\u884c\u7684\u4efb\u52a1",level:3},{value:"5. Flink-webUI \u67e5\u770b \u4f5c\u4e1a",id:"5-flink-webui-\u67e5\u770b-\u4f5c\u4e1a",level:3},{value:"6. \u67e5\u770bhdfs\u8def\u5f84\u4e0b\u6570\u636e",id:"6-\u67e5\u770bhdfs\u8def\u5f84\u4e0b\u6570\u636e",level:3},{value:"7. \u67e5\u770bhive\u8868:",id:"7-\u67e5\u770bhive\u8868",level:3},{value:"8.\u66f4\u65b0\u6570\u636e\u64cd\u4f5c",id:"8\u66f4\u65b0\u6570\u636e\u64cd\u4f5c",level:3},{value:"9.\u5220\u9664\u6570\u636e\u64cd\u4f5c",id:"9\u5220\u9664\u6570\u636e\u64cd\u4f5c",level:3},{value:"10.\u5c06\u6b64\u6570\u636e\u518d\u6b21\u63d2\u5165",id:"10\u5c06\u6b64\u6570\u636e\u518d\u6b21\u63d2\u5165",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"\u4f5c\u8005",id:"\u4f5c\u8005",level:2}],s={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f\u8d44\u6599"},"\u80cc\u666f\u8d44\u6599"),(0,a.kt)("p",null,"Apache hudi (\u53d1\u97f3\u4e3a\u201c hoodie\u201d)\u662f\u4e0b\u4e00\u4ee3\u6d41\u5f0f\u6570\u636e\u6e56\u5e73\u53f0\u3002Apache Hudi \u5c06\u6838\u5fc3\u4ed3\u5e93\u548c\u6570\u636e\u5e93\u529f\u80fd\u76f4\u63a5\u5f15\u5165\u5230\u6570\u636e\u5e93\u4e2d\u3002Hudi \u63d0\u4f9b\u8868\u3001\u4e8b\u52a1\u3001\u9ad8\u6548\u7684\u5347\u7ea7/\u5220\u9664\u3001\u9ad8\u7ea7\u7d22\u5f15\u3001\u6d41\u5f0f\u6444\u5165\u670d\u52a1\u3001\u6570\u636e\u96c6\u7fa4/\u538b\u7f29\u4f18\u5316\u548c\u5e76\u53d1\uff0c\u540c\u65f6\u4fdd\u6301\u6570\u636e\u4ee5\u5f00\u653e\u6e90\u7801\u6587\u4ef6\u683c\u5f0f\u5b58\u50a8 ,  Apache Hudi \u4e0d\u4ec5\u975e\u5e38\u9002\u5408\u6d41\u5f0f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u800c\u4e14\u5b83\u8fd8\u5141\u8bb8\u60a8\u521b\u5efa\u9ad8\u6548\u7684\u589e\u91cf\u6279\u5904\u7406\u7ba1\u9053\u3002"),(0,a.kt)("p",null,"\u5b9e\u65f6\u6570\u4ed3\u6d41\u6279\u4e00\u4f53\u5df2\u7ecf\u6210\u4e3a\u5927\u52bf\u6240\u8d8b\u3002"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 Hudi ?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u76ee\u524d\u4e1a\u52a1\u67b6\u6784\u8f83\u4e3a\u7e41\u91cd")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ef4\u62a4\u591a\u5957\u6846\u67b6")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u66f4\u65b0\u9891\u7387\u8f83\u5927"))),(0,a.kt)("h2",{id:"\u51c6\u5907\u90e8\u7f72"},"\u51c6\u5907&&\u90e8\u7f72"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flink"),(0,a.kt)("td",{parentName:"tr",align:null},"1.13.5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u96c6\u6210\u5230CM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flink-SQL-CDC"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1.1"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hudi"),(0,a.kt)("td",{parentName:"tr",align:null},"0.10.0-patch"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6253\u8fc7\u8865\u4e01\u7684")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mysql"),(0,a.kt)("td",{parentName:"tr",align:null},"8.0.13"),(0,a.kt)("td",{parentName:"tr",align:null},"\u963f\u91cc\u4e91")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dlink"),(0,a.kt)("td",{parentName:"tr",align:null},"dlink-release-0.5.0-SNAPSHOT.tar.gz"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scala"),(0,a.kt)("td",{parentName:"tr",align:null},"2.12"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"1-\u90e8\u7f72flink1135"},"1. \u90e8\u7f72Flink1.13.5"),(0,a.kt)("p",null,"flink \u96c6\u6210\u5230CM\u4e2d"),(0,a.kt)("p",null,"\u6b64\u6b65\u9aa4\u7565\u3002"),(0,a.kt)("h3",{id:"2-\u96c6\u6210hudi-0100"},"2. \u96c6\u6210Hudi 0.10.0"),(0,a.kt)("p",null,"\u200b    \u2460. \u5730\u5740: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/danny0405/hudi/tree/010-patch"},"https://github.com/danny0405/hudi/tree/010-patch"),"    \u6253\u8fc7\u8865\u4e01\u7684 \u5927\u4f6c\u8bf7\u5ffd\u7565^_^"),(0,a.kt)("p",null,"\u200b        a. \u4e0b\u8f7d\u538b\u7f29\u5305 \u5206\u652f010-patch  \u4e0d\u8981\u4e0b\u8f7d master \u4e0a\u4f20 \u89e3\u538b"),(0,a.kt)("p",null,"\u200b       b. unzip  010-patch.zip"),(0,a.kt)("p",null,"\u200b       c. \u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"packging--hudi-flink-bundle")," \u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff0c\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-bundel-shade-hive2")," \u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"hive-version")," \u66f4\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"2.1.1-chd6.3.2")," \u7684\u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vim pom.xml  # \u4fee\u6539hive\u7248\u672c\u4e3a : 2.1.1-cdh6.3.2\n")),(0,a.kt)("p",null,"\u200b       d. \u6267\u884c\u7f16\u8bd1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean install -DskipTests -DskipITs -Dcheckstyle.skip=true -Drat.skip=true -Dhadoop.version=3.0.0  -Pflink-bundle-shade-hive2  -Dscala-2.12\n")),(0,a.kt)("p",null,"\u200b          \u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"chd6.3.0")," \u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"hadoop3.0.0")," \uff0c\u6240\u4ee5\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"hadoop")," \u7684\u7248\u672c\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"hive")," \u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"2.1.1")," \u7684\u7248\u672c\uff0c\u4e5f\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"hive")," \u7684\u7248\u672c\uff0c\u4e0d\u7136\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"sync to hive")," \u7684\u65f6\u5019\uff0c\u4f1a\u62a5\u7c7b\u7684\u51b2\u7a81\u95ee\u9898\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"scala")," \u7248\u672c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"2.12")," \u3002"),(0,a.kt)("p",null,"\u200b          \u540c\u65f6 flink \u96c6\u6210\u5230 cm \u7684\u65f6\u5019\u4e5f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"scala2.12")," \u7248\u672c\u7edf\u4e00\u3002"),(0,a.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u5982\u4e0b\u56fe:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudill.png",alt:"hudill"})),(0,a.kt)("p",null,"\u2461. \u628a\u76f8\u5173\u5e94\u7684jar\u5305 \u653e\u5230\u76f8\u5bf9\u5e94\u7684\u76ee\u5f55\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# hudi\u7684\u5305 \nln -s /opt/module/hudi-0.10.0/hudi-hadoop-mr-bundle/target/hudi-hadoop-mr-bundle-0.10.0.jar /opt/cloudera/parcels/CDH/jars/\nln -s /opt/module/hudi-0.10.0/hudi-hive-sync-bundle/target/hudi-hive-sync-bundle-0.10.0.jar  /opt/cloudera/parcels/CDH/jars/\nln -s /opt/module/hudi-0.10.0/hudi-hive-sync-bundle/target/hudi-hive-sync-bundle-0.10.0.jar  /opt/cloudera/parcels/CDH/lib/hive/lib\n# \u540c\u6b65sync to hive \u6bcf\u53f0\u8282\u70b9\u90fd\u8981\u653e\ncp /opt/module/hudi-0.10.0/hudi-flink-bundle/target/hudi-flink-bundle_2.12-0.10.0.jar /opt/cloudera/parcels/FLINK/lib/flink/lib/\n# \u4ee5\u4e0b\u4e09\u4e2ajar \u653e\u5230flink/lib \u4e0b \u5426\u5219\u540c\u6b65\u6570\u636e\u5230hive\u7684\u65f6\u5019\u4f1a\u62a5\u9519   \ncp /opt/cloudera/parcels/CDH/lib/hadoop-mapreduce/hadoop-mapreduce-client-core-3.0.0-cdh6.3.2.jar /opt/module/flink-1.13.5/lib/\ncp /opt/cloudera/parcels/CDH/lib/hadoop-mapreduce/hadoop-mapreduce-client-common-3.0.0-cdh6.3.2.jar /opt/module/flink-1.13.5/lib/\ncp /opt/cloudera/parcels/CDH/lib/hadoop-mapreduce/hadoop-mapreduce-client-jobclient-3.0.0-cdh6.3.2.jar /opt/module/flink-1.13.5/lib/\n# \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4 \ncd /opt/module/flink-1.13.5/lib/\nscp -r ./* cdh5:`pwd` \nscp -r ./* cdh6:`pwd` \nscp -r ./* cdh7:`pwd`\n")),(0,a.kt)("h3",{id:"3-\u5b89\u88c5-dlink-050"},"3. \u5b89\u88c5 Dlink-0.5.0"),(0,a.kt)("p",null,"a. github \u5730\u5740:  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DataLinkDC/dlink"},"https://github.com/DataLinkDC/dlink")),(0,a.kt)("p",null,"b. \u90e8\u7f72\u6b65\u9aa4\u89c1 github-readme.md  \u4f20\u9001\u95e8: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DataLinkDC/dlink/blob/main/README.md"},"https://github.com/DataLinkDC/dlink/blob/main/README.md")),(0,a.kt)("p",null,"ps:  \u6ce8\u610f \u8fd8\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"hudi-flink-bundle_2.12-0.10.0.jar")," \u8fd9\u4e2a\u5305\u653e\u5230 dlink\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u4e0b \u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u4e0b\u7684\u5305 \u5982\u4e0b\u56fe\u6240\u793a:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/dlinkll.png",alt:"dlinkll"})),(0,a.kt)("p",null,"c. \u8bbf\u95ee:  ",(0,a.kt)("a",{parentName:"p",href:"http://cdh7.vision.com:8811/#/user/login"},"http://ip:port/#/user/login"),"  \u9ed8\u8ba4\u7528\u6237: admin  \u5bc6\u7801: admin"),(0,a.kt)("p",null,"d. \u521b\u5efa\u96c6\u7fa4\u5b9e\u4f8b:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_cluster.png",alt:"hudi_cluster"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_clustertable.png",alt:"hudi_clustertable"})),(0,a.kt)("h2",{id:"\u6570\u636e\u8868"},"\u6570\u636e\u8868"),(0,a.kt)("h3",{id:"1-ddl\u51c6\u5907"},"1. DDL\u51c6\u5907"),(0,a.kt)("p",null,"(\u4ee5\u4e0bddl \u901a\u8fc7Python\u7a0b\u5e8f\u6a21\u677f\u751f\u6210 \u5927\u4f6c\u8bf7\u7565\u8fc7! O(\u2229_\u2229)O )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"------------- '\u8ba2\u5355\u8868' order_mysql_goods_order -----------------\nCREATE TABLE source_order_mysql_goods_order (\n                                                `goods_order_id` bigint COMMENT '\u81ea\u589e\u4e3b\u952eid'\n    , `goods_order_uid` string COMMENT '\u8ba2\u5355uid'\n    , `customer_uid` string COMMENT '\u5ba2\u6237uid'\n    , `customer_name` string COMMENT '\u5ba2\u6237name'\n    , `student_uid` string COMMENT '\u5b66\u751fuid'\n    , `order_status` bigint COMMENT '\u8ba2\u5355\u72b6\u6001 1:\u5f85\u4ed8\u6b3e 2:\u90e8\u5206\u4ed8\u6b3e 3:\u4ed8\u6b3e\u5ba1\u6838 4:\u5df2\u4ed8\u6b3e 5:\u5df2\u53d6\u6d88'\n    , `is_end` bigint COMMENT '\u8ba2\u5355\u662f\u5426\u5b8c\u7ed3 1.\u672a\u5b8c\u7ed3 2.\u5df2\u5b8c\u7ed3'\n    , `discount_deduction` bigint COMMENT '\u4f18\u60e0\u603b\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `contract_deduction` bigint COMMENT '\u8001\u5408\u540c\u62b5\u6263\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `wallet_deduction` bigint COMMENT '\u94b1\u5305\u62b5\u6263\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `original_price` bigint COMMENT '\u8ba2\u5355\u539f\u4ef7\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `real_price` bigint COMMENT '\u5b9e\u4ed8\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `pay_success_time` timestamp(3) COMMENT '\u5b8c\u5168\u652f\u4ed8\u65f6\u95f4'\n    , `tags` string COMMENT '\u8ba2\u5355\u6807\u7b7e\uff081\u65b0\u7b7e 2\u7eed\u8d39 3\u6269\u79d1 4\u62a5\u540d-\u5408\u65b0 5\u8f6c\u73ed-\u5408\u65b0 6\u7eed\u8d39-\u5408\u65b0 7\u8bd5\u542c-\u5408\u65b0\uff09'\n    , `status` bigint COMMENT '\u662f\u5426\u6709\u6548\uff081.\u751f\u6548 2.\u5931\u6548 3.\u8d85\u65f6\u672a\u4ed8\u6b3e\uff09'\n    , `remark` string COMMENT '\u8ba2\u5355\u5907\u6ce8'\n    , `delete_flag` bigint COMMENT '\u662f\u5426\u5220\u9664\uff081.\u5426\uff0c2.\u662f\uff09'\n    , `test_flag` bigint COMMENT '\u662f\u5426\u6d4b\u8bd5\u6570\u636e\uff081.\u5426\uff0c2.\u662f\uff09'\n    , `create_time` timestamp(3) COMMENT '\u521b\u5efa\u65f6\u95f4'\n    , `update_time` timestamp(3) COMMENT '\u66f4\u65b0\u65f6\u95f4'\n    , `create_by` string COMMENT '\u521b\u5efa\u4ebauid\uff08\u552f\u4e00\u6807\u8bc6\uff09'\n    , `update_by` string COMMENT '\u66f4\u65b0\u4ebauid\uff08\u552f\u4e00\u6807\u8bc6\uff09'\n    ,PRIMARY KEY(goods_order_id) NOT ENFORCED\n) COMMENT '\u8ba2\u5355\u8868'\nWITH (\n    'connector' = 'mysql-cdc'\n    ,'hostname' = 'rm-bp1t34384933232rds.aliyuncs.com'\n    ,'port' = '3306'\n    ,'username' = 'app_kfkdr'\n    ,'password' = 'CV122fff0E40'\n    ,'server-time-zone' = 'UTC'\n    ,'scan.incremental.snapshot.enabled' = 'true'\n    ,'debezium.snapshot.mode'='latest-offset' -- \u6216\u8005key\u662fscan.startup.mode\uff0cinitial\u8868\u793a\u8981\u5386\u53f2\u6570\u636e\uff0clatest-offset\u8868\u793a\u4e0d\u8981\u5386\u53f2\u6570\u636e\n    ,'debezium.datetime.format.date'='yyyy-MM-dd'\n    ,'debezium.datetime.format.time'='HH-mm-ss'\n    ,'debezium.datetime.format.datetime'='yyyy-MM-dd HH-mm-ss'\n    ,'debezium.datetime.format.timestamp'='yyyy-MM-dd HH-mm-ss'\n    ,'debezium.datetime.format.timestamp.zone'='UTC+8'\n    ,'database-name' = 'order'\n    ,'table-name' = 'goods_order'\n    --  ,'server-id' = '2675788754-2675788754'\n);\nCREATE TABLE sink_order_mysql_goods_order(\n                                             `goods_order_id` bigint COMMENT '\u81ea\u589e\u4e3b\u952eid'\n    , `goods_order_uid` string COMMENT '\u8ba2\u5355uid'\n    , `customer_uid` string COMMENT '\u5ba2\u6237uid'\n    , `customer_name` string COMMENT '\u5ba2\u6237name'\n    , `student_uid` string COMMENT '\u5b66\u751fuid'\n    , `order_status` bigint COMMENT '\u8ba2\u5355\u72b6\u6001 1:\u5f85\u4ed8\u6b3e 2:\u90e8\u5206\u4ed8\u6b3e 3:\u4ed8\u6b3e\u5ba1\u6838 4:\u5df2\u4ed8\u6b3e 5:\u5df2\u53d6\u6d88'\n    , `is_end` bigint COMMENT '\u8ba2\u5355\u662f\u5426\u5b8c\u7ed3 1.\u672a\u5b8c\u7ed3 2.\u5df2\u5b8c\u7ed3'\n    , `discount_deduction` bigint COMMENT '\u4f18\u60e0\u603b\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `contract_deduction` bigint COMMENT '\u8001\u5408\u540c\u62b5\u6263\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `wallet_deduction` bigint COMMENT '\u94b1\u5305\u62b5\u6263\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `original_price` bigint COMMENT '\u8ba2\u5355\u539f\u4ef7\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `real_price` bigint COMMENT '\u5b9e\u4ed8\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09'\n    , `pay_success_time` timestamp(3) COMMENT '\u5b8c\u5168\u652f\u4ed8\u65f6\u95f4'\n    , `tags` string COMMENT '\u8ba2\u5355\u6807\u7b7e\uff081\u65b0\u7b7e 2\u7eed\u8d39 3\u6269\u79d1 4\u62a5\u540d-\u5408\u65b0 5\u8f6c\u73ed-\u5408\u65b0 6\u7eed\u8d39-\u5408\u65b0 7\u8bd5\u542c-\u5408\u65b0\uff09'\n    , `status` bigint COMMENT '\u662f\u5426\u6709\u6548\uff081.\u751f\u6548 2.\u5931\u6548 3.\u8d85\u65f6\u672a\u4ed8\u6b3e\uff09'\n    , `remark` string COMMENT '\u8ba2\u5355\u5907\u6ce8'\n    , `delete_flag` bigint COMMENT '\u662f\u5426\u5220\u9664\uff081.\u5426\uff0c2.\u662f\uff09'\n    , `test_flag` bigint COMMENT '\u662f\u5426\u6d4b\u8bd5\u6570\u636e\uff081.\u5426\uff0c2.\u662f\uff09'\n    , `create_time` timestamp(3) COMMENT '\u521b\u5efa\u65f6\u95f4'\n    , `update_time` timestamp(3) COMMENT '\u66f4\u65b0\u65f6\u95f4'\n    , `create_by` string COMMENT '\u521b\u5efa\u4ebauid\uff08\u552f\u4e00\u6807\u8bc6\uff09'\n    , `update_by` string COMMENT '\u66f4\u65b0\u4ebauid\uff08\u552f\u4e00\u6807\u8bc6\uff09'\n    ,PRIMARY KEY (goods_order_id) NOT ENFORCED\n) COMMENT '\u8ba2\u5355\u8868' \nWITH (\n    'connector' = 'hudi'\n    , 'path' = 'hdfs://cluster1/data/bizdata/cdc/mysql/order/goods_order' -- \u8def\u5f84\u4f1a\u81ea\u52a8\u521b\u5efa\n    , 'hoodie.datasource.write.recordkey.field' = 'goods_order_id' -- \u4e3b\u952e\n    , 'write.precombine.field' = 'update_time'       -- \u76f8\u540c\u7684\u952e\u503c\u65f6\uff0c\u53d6\u6b64\u5b57\u6bb5\u6700\u5927\u503c\uff0c\u9ed8\u8ba4ts\u5b57\u6bb5\n    , 'read.streaming.skip_compaction' = 'true'      -- \u907f\u514d\u91cd\u590d\u6d88\u8d39\u95ee\u9898\n    , 'write.bucket_assign.tasks' = '2'       -- \u5e76\u53d1\u5199\u7684 bucekt \u6570\n    , 'write.tasks' = '2'\n    , 'compaction.tasks' = '1'\n    , 'write.operation' = 'upsert'             -- UPSERT\uff08\u63d2\u5165\u66f4\u65b0\uff09\\INSERT\uff08\u63d2\u5165\uff09\\BULK_INSERT\uff08\u6279\u63d2\u5165\uff09\uff08upsert\u6027\u80fd\u4f1a\u4f4e\u4e9b\uff0c\u4e0d\u9002\u5408\u57cb\u70b9\u4e0a\u62a5\uff09\n    , 'write.rate.limit' = '20000'             -- \u9650\u5236\u6bcf\u79d2\u591a\u5c11\u6761\n    , 'table.type' = 'COPY_ON_WRITE'            -- \u9ed8\u8ba4COPY_ON_WRITE \uff0c\n    , 'compaction.async.enabled' = 'true'         -- \u5728\u7ebf\u538b\u7f29\n    , 'compaction.trigger.strategy' = 'num_or_time'    -- \u6309\u6b21\u6570\u538b\u7f29\n    , 'compaction.delta_commits' = '20'        -- \u9ed8\u8ba4\u4e3a5\n    , 'compaction.delta_seconds' = '60'          -- \u9ed8\u8ba4\u4e3a1\u5c0f\u65f6\n    , 'hive_sync.enable' = 'true'             -- \u542f\u7528hive\u540c\u6b65\n    , 'hive_sync.mode' = 'hms'               -- \u542f\u7528hive hms\u540c\u6b65\uff0c\u9ed8\u8ba4jdbc\n    , 'hive_sync.metastore.uris' = 'thrift://cdh2.vision.com:9083'  -- required, metastore\u7684\u7aef\u53e3\n    , 'hive_sync.jdbc_url' = 'jdbc:hive2://cdh1.vision.com:10000'   -- required, hiveServer\u5730\u5740\n    , 'hive_sync.table' = 'order_mysql_goods_order'              -- required, hive \u65b0\u5efa\u7684\u8868\u540d \u4f1a\u81ea\u52a8\u540c\u6b65hudi\u7684\u8868\u7ed3\u6784\u548c\u6570\u636e\u5230hive\n    , 'hive_sync.db' = 'cdc_ods'               -- required, hive \u65b0\u5efa\u7684\u6570\u636e\u5e93\u540d\n    , 'hive_sync.username' = 'hive'            -- required, HMS \u7528\u6237\u540d\n    , 'hive_sync.password' = '123456'              -- required, HMS \u5bc6\u7801\n    , 'hive_sync.skip_ro_suffix' = 'true'         -- \u53bb\u9664ro\u540e\u7f00\n);\n---------- source_order_mysql_goods_order=== TO ==>> sink_order_mysql_goods_order ------------\ninsert into sink_order_mysql_goods_order select * from source_order_mysql_goods_order;\n")),(0,a.kt)("h2",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,a.kt)("h3",{id:"1\u5bf9\u4e0a\u8ff0sql\u6267\u884c\u8bed\u6cd5\u6821\u9a8c"},"1.\u5bf9\u4e0a\u8ff0SQL\u6267\u884c\u8bed\u6cd5\u6821\u9a8c:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_explainsql.png",alt:"hudi_explainsql"})),(0,a.kt)("h3",{id:"2-\u83b7\u53d6jobplan"},"2. \u83b7\u53d6JobPlan"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_jobplan.png",alt:"hudi_jobplan"})),(0,a.kt)("h3",{id:"3-\u6267\u884c\u4efb\u52a1"},"3. \u6267\u884c\u4efb\u52a1"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_executesql.png",alt:"hudi_executesql"})),(0,a.kt)("h3",{id:"4-dlink-\u67e5\u770b\u6267\u884c\u7684\u4efb\u52a1"},"4. dlink \u67e5\u770b\u6267\u884c\u7684\u4efb\u52a1"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_process.png",alt:"hudi_process"})),(0,a.kt)("h3",{id:"5-flink-webui-\u67e5\u770b-\u4f5c\u4e1a"},"5. Flink-webUI \u67e5\u770b \u4f5c\u4e1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_flink.png",alt:"hudi_flink"})),(0,a.kt)("h3",{id:"6-\u67e5\u770bhdfs\u8def\u5f84\u4e0b\u6570\u636e"},"6. \u67e5\u770bhdfs\u8def\u5f84\u4e0b\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_hdfs.png",alt:"hudi_hdfs"})),(0,a.kt)("h3",{id:"7-\u67e5\u770bhive\u8868"},"7. \u67e5\u770bhive\u8868:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_hiveupdate.png",alt:"hudi_hiveupdate"})),(0,a.kt)("p",null,"\u67e5\u770b\u8ba2\u5355\u53f7\u5bf9\u5e94\u7684\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_hiveupdate.png",alt:"hudi_hiveupdate"})),(0,a.kt)("h3",{id:"8\u66f4\u65b0\u6570\u636e\u64cd\u4f5c"},"8.\u66f4\u65b0\u6570\u636e\u64cd\u4f5c"),(0,a.kt)("p",null,"\u200b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," UPDATE `order`.`goods_order`\n SET\n     `remark` = 'cdc_test update'\n WHERE\n     `goods_order_id` = 73270;\n")),(0,a.kt)("p",null,"\u518d\u6b21\u67e5\u770b hive \u6570\u636e \u53d1\u73b0\u5df2\u7ecf\u66f4\u65b0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_hiveupdate.png",alt:"hudi_hiveupdate"})),(0,a.kt)("h3",{id:"9\u5220\u9664\u6570\u636e\u64cd\u4f5c"},"9.\u5220\u9664\u6570\u636e\u64cd\u4f5c"),(0,a.kt)("p",null,"(\u5185\u90e8\u4e1a\u52a1\u4e2d\u91c7\u7528\u903b\u8f91\u5220\u9664  \u4e0d\u4f7f\u7528\u7269\u7406\u5220\u9664 \u6b64\u4f8b\u4ec5\u6f14\u793a/\u6d4b\u8bd5\u4f7f\u7528  \u8c28\u614e\u64cd\u4f5c)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"  delete from `order`.`goods_order` where goods_order_id='73270';\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_hivedelete.png",alt:"hudi_hivedelete"})),(0,a.kt)("h3",{id:"10\u5c06\u6b64\u6570\u636e\u518d\u6b21\u63d2\u5165"},"10.\u5c06\u6b64\u6570\u636e\u518d\u6b21\u63d2\u5165"),(0,a.kt)("p",null,"\u200b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `order`.`goods_order`(`goods_order_id`, `goods_order_uid`, `customer_uid`, `customer_name`, `student_uid`, `order_status`, `is_end`, `discount_deduction`, `contract_deduction`, `wallet_deduction`, `original_price`, `real_price`, `pay_success_time`, `tags`, `status`, `remark`, `delete_flag`, `test_flag`, `create_time`, `update_time`, `create_by`, `update_by`) VALUES (73270, '202112121667480848077045760', 'VA100002435', 'weweweywu', 'S100002435', 4, 1, 2000000, 0, 0, 2000000, 0, '2021-12-12 18:51:41', '1', 1, '', 1, 1, '2021-12-12 18:51:41', '2022-01-10 13:53:59', 'VA100681', 'VA100681');\n")),(0,a.kt)("p",null,"\u518d\u6b21\u67e5\u8be2hive\u6570\u636e \u6570\u636e\u6b63\u5e38\u8fdb\u5165\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/hudi/hudi_hiveinsert.png",alt:"hudi_hiveinsert"})),(0,a.kt)("p",null,"\u81f3\u6b64 Dlink\u5728Flink-SQL-CDC \u5230Hudi Sync Hive \u6d4b\u8bd5\u7ed3\u675f"),(0,a.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,a.kt)("p",null,"\u901a\u8fc7 Dlink + Flink-Mysql-CDC + Hudi \u7684\u65b9\u5f0f\u5927\u5927\u964d\u4f4e\u4e86\u6211\u4eec\u6d41\u5f0f\u5165\u6e56\u7684\u6210\u672c\uff0c\u5176\u4e2d Flink-Mysql-CDC \u7b80\u5316\u4e86CDC\u7684\u67b6\u6784\u4e0e\u6210\u672c\uff0c\u800c Hudi \u9ad8\u6027\u80fd\u7684\u8bfb\u5199\u66f4\u6709\u5229\u4e8e\u53d8\u52a8\u6570\u636e\u7684\u5b58\u50a8\uff0c\u6700\u540e Dlink \u5219\u5c06\u6574\u4e2a\u6570\u636e\u5f00\u53d1\u8fc7\u7a0b sql \u5e73\u53f0\u5316\uff0c\u4f7f\u6211\u4eec\u7684\u5f00\u53d1\u8fd0\u7ef4\u66f4\u52a0\u4e13\u4e1a\u4e14\u8212\u9002\uff0c\u671f\u5f85 Dlink \u540e\u7eed\u7684\u53d1\u5c55\u3002"),(0,a.kt)("h2",{id:"\u4f5c\u8005"},"\u4f5c\u8005"),(0,a.kt)("p",null,"zhumingye"))}m.isMDXComponent=!0}}]);