(this["webpackJsonpledger-file-transform"]=this["webpackJsonpledger-file-transform"]||[]).push([[0],{277:function(e,t,n){},278:function(e,t,n){},326:function(e,t){},336:function(e,t,n){},350:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(48),s=n.n(c),i=(n(277),n(278),n(256)),o=n(257),u=n(270),l=n(267),j=n(358),d=n(362),h=n(122),b=n(268),O=n(157),f=n(107),x=n(52),g=n(361),m=n(359),p=n(88),v=n(363),w=n(360),y=n(364),A=n(365),C=n(366),D=n(271),F=n(105),N=n.n(F),I=n(121),_=n.n(I),k=n(258),E=n.n(k);N.a.locale("zh-tw");var H=function(e,t,n){var a=new _.a(e,t).map((function(e){return e.set("\u91d1\u984d",parseFloat(e.get("\u91d1\u984d")))})),r=new _.a([["","","","\u65e9\u9910",a.where((function(e){return"\u65e9\u9910"===e.get("\u985e\u5225")})).stat.sum("\u91d1\u984d"),""],["","","","\u5348\u9910",a.where((function(e){return"\u5348\u9910"===e.get("\u985e\u5225")})).stat.sum("\u91d1\u984d"),""],["","","","\u665a\u9910",a.where((function(e){return"\u665a\u9910"===e.get("\u985e\u5225")})).stat.sum("\u91d1\u984d"),""]],t),c=a.where((function(e){return"\u751f\u6d3b\u8cbb"===e.get("\u5e33\u6236")&&"\u65e9\u9910"!==e.get("\u985e\u5225")&&"\u5348\u9910"!==e.get("\u985e\u5225")&&"\u665a\u9910"!==e.get("\u985e\u5225")})),s=a.where((function(e){return"\u975e\u751f\u6d3b\u8cbb"===e.get("\u5e33\u6236")}));return new E.a({fileName:"ledger_".concat(n),datas:[{sheetData:r.toArray(),sheetHeader:t,sheetName:"\u9910\u98f2\u8cbb"},{sheetData:c.toArray(),sheetHeader:t,sheetName:"\u751f\u6d3b\u8cbb"},{sheetData:s.toArray(),sheetHeader:t,sheetName:"\u975e\u751f\u6d3b\u8cbb"},{sheetData:a.toArray(),sheetHeader:t,sheetName:"\u5168\u90e8"}]})},S=(n(336),n(12));N.a.locale("zh-tw");var L=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(O.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)("life"),l=Object(O.a)(u,2),j=l[0],d=l[1],F=function(e){var t=e.target.result;I(t)},I=function(e){var t=e.split(" \r\n"),n=-1;-1!==(n=t.indexOf("-- \u652f\u51fa --"))&&t.splice(n,1),-1!==(n=t.indexOf("\r\n\r\n-- \u6536\u5165 --"))&&t.splice(n);var a=t.map((function(e){return e.split(", ")}));k(a)},k=function(e){var t=function(e){var t=e[0],n=e.slice(1),a=new _.a(n,t),r=a.count(),c=[],s=[{date:N()(a.getRow(0).get("\u65e5\u671f")),source:[a.getRow(0).toArray()]}];return a.sortBy("\u65e5\u671f").map((function(e,n){var a,i,o=N()(e.get("\u65e5\u671f")),u=s.findIndex((function(e){return e.date.month()===o.month()}));if(-1===u||n+1===r){var l=s[s.length-1],j=l.date.startOf("month").format("YYYY-MM");c.push({toExcel:H(l.source,t,j),representedAt:j,total:(a=l.source,i=t,new _.a(a,i).stat.sum("\u91d1\u984d"))}),s.push({date:o,source:[e.toArray()]})}else s[u].source.push(e.toArray())})),c.reverse()}(e);o(Object(b.a)(t))},E={xs:24,sm:12};return Object(S.jsx)("div",{children:Object(S.jsxs)(f.a,{gutter:[16,16],children:[Object(S.jsx)(x.a,Object(h.a)(Object(h.a)({},E),{},{children:Object(S.jsxs)(g.a,{title:"\u4e0a\u50b3\u6a94\u6848",children:[Object(S.jsx)(m.a,{customRequest:function(){},fileList:n,onChange:function(e){var t=e.fileList.map((function(e){var t=new FileReader;return t.onload=F,t.readAsText(e.originFileObj),e.status="success",e}));r(t)},children:Object(S.jsx)(p.a,{icon:Object(S.jsx)(A.a,{}),children:"\u6a94\u6848\u4e0a\u50b3"})}),Object(S.jsx)(p.a,{onClick:function(){o([]),r([])},children:"\u6e05\u9664\u8f49\u63db\u6a94\u6848"}),Object(S.jsx)("a",{href:"/Ahorro_Export_Data_20210601.csv",download:"Ahorro_Export_Data_20210601.csv",children:Object(S.jsx)(p.a,{style:{margin:"10px"},children:"Download example"})}),Object(S.jsxs)(v.a.Group,{onChange:function(e){o([]),r([]),d(e.target.value)},value:j,children:[Object(S.jsx)(v.a,{value:"default",disabled:!0,children:"\u9810\u8a2d"}),Object(S.jsx)(v.a,{value:"life",children:"\u5340\u5206\u751f\u6d3b\u8cbb\u3001\u9910\u98f2\u8cbb"})]})]})})),Object(S.jsx)(x.a,Object(h.a)(Object(h.a)({},E),{},{children:Object(S.jsx)(g.a,{title:"\u4e0b\u8f09\u8f49\u63db\u6a94\u6848",children:Object(S.jsx)(w.b,{itemLayout:"horizontal",dataSource:i,renderItem:function(e){return Object(S.jsx)(w.b.Item,{children:Object(S.jsx)(w.b.Item.Meta,{avatar:Object(S.jsx)(y.a,{icon:Object(S.jsx)(C.a,{})}),title:"\u8a18\u5e33\u7d00\u9304",description:Object(S.jsxs)("div",{children:[Object(S.jsx)(p.a,{icon:Object(S.jsx)(D.a,{}),onClick:function(){e.toExcel.saveExcel()},children:"\u6a94\u6848\u4e0b\u8f09"})," ",Object(S.jsxs)("span",{children:["\u65e5\u671f: ",e.representedAt]})," ",Object(S.jsxs)("span",{children:["\u7e3d\u984d: ",e.total,"$"]})]})})})}})})}))]})})},z=(n(349),n(350),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(j.a,{children:[Object(S.jsx)(j.a.Header,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(S.jsx)("div",{className:"logo"})}),Object(S.jsxs)(j.a.Content,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(S.jsx)(d.a,{style:{margin:"16px 0"}}),Object(S.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:800},children:Object(S.jsx)(L,{})})]}),Object(S.jsx)(j.a.Footer,{style:{textAlign:"center"},children:"\xa92021"})]})}}]),n}(a.Component));var M=function(){return Object(S.jsx)(z,{})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root")),R()}},[[352,1,2]]]);
//# sourceMappingURL=main.c958a43e.chunk.js.map