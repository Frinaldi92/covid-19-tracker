(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{103:function(e,t,c){},105:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(7),r=c.n(s),o=(c(103),c(22)),i=c.n(o),l=c(38),u=c(11),d=c(244),j=c(245),h=c(246),f=c(236),b=c(240),O=c(13),p=c(241),v=(c(105),c(3));var x=function(e){var t=e.title,c=e.cases,n=e.total,a=e.isOrange,s=e.isRed,r=e.isGreen,o=e.active,i=Object(O.a)(e,["title","cases","total","isOrange","isRed","isGreen","active"]);return Object(v.jsx)(f.a,{onClick:i.onClick,className:"infoBox ".concat(o&&"infoBox--selected"," ").concat(a&&"infoBox--orange"," ").concat(s&&"infoBox--red"),children:Object(v.jsxs)(b.a,{children:[Object(v.jsxs)(p.a,{className:"infoBox__title",color:"textSecondary",children:[t,Object(v.jsx)("span",{className:"todayCasesNum",children:" (today)"})]}),Object(v.jsx)("h2",{className:"infoBox__cases ".concat(r&&"infoBox__cases--green"," ").concat(s&&"infoBox__cases--red"),children:c}),Object(v.jsxs)(p.a,{className:"infoBox__total",color:"textSecondary",children:[n," Total"]})]})})},m=c(243),y=c(247),g=c(92),_=c(14),C=c.n(_),N=c(249),w=c(242),k={cases:{hex:"#ED8A2C",multiplier:400},recovered:{hex:"#7dd71d",multiplier:600},deaths:{hex:"#CC1034",multiplier:1e3}},S=function(e){return Object(g.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(v.jsx)(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:k[t].hex},radius:Math.sqrt(e[t])*k[t].multiplier,children:Object(v.jsx)(w.a,{children:Object(v.jsxs)("div",{className:"info__container",children:[Object(v.jsx)("div",{className:"info__flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(v.jsx)("div",{className:"info__name",children:e.country}),Object(v.jsxs)("div",{className:"info__cases",children:["Cases: ",C()(e.cases).format("0,0")]}),Object(v.jsxs)("div",{className:"info__recovered",children:["Recovered: ",C()(e.recovered).format("0,0")]}),Object(v.jsxs)("div",{className:"info__deaths",children:["Deaths: ",C()(e.deaths).format("0,0")]})]})})},e.country)}))},T=function(e){return e?"+".concat(C()(e).format("0,0a")):"+0"};c(110),c(66);var R=function(e){var t=e.center,c=e.zoom,n=e.countries,a=e.casesType;return Object(v.jsx)("div",{className:"map",children:Object(v.jsxs)(m.a,{center:t,zoom:c,scrollWheelZoom:!1,children:[Object(v.jsx)(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),B(n,a)]})})};c(111);var D=function(e){var t=e.countries;return Object(v.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t}),Object(v.jsx)("td",{children:Object(v.jsx)("strong",{children:C()(c).format("0,0")})})]},t)}))})},I=c(91),E={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return C()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",parser:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return C()(e).format("0a")}}}]}};var A=function(e){var t=e.casesType,c=Object(O.a)(e,["casesType"]),a=Object(n.useState)({}),s=Object(u.a)(a,2),r=s[0],o=s[1],d=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(e){var c=d(e,t);o(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(v.jsx)("div",{className:c.className,children:(null===r||void 0===r?void 0:r.length)>0&&Object(v.jsx)(I.Line,{data:{datasets:[{data:r,backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034"}]},options:E})})};c(208);var F=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("worldwide"),r=Object(u.a)(s,2),o=r[0],O=r[1],p=Object(n.useState)({}),m=Object(u.a)(p,2),y=m[0],g=m[1],_=Object(n.useState)([]),C=Object(u.a)(_,2),N=C[0],w=C[1],k=Object(n.useState)([]),B=Object(u.a)(k,2),I=B[0],E=B[1],F=Object(n.useState)([30,0]),M=Object(u.a)(F,2),z=M[0],L=(M[1],Object(n.useState)(2)),G=Object(u.a)(L,2),W=G[0],J=G[1],P=Object(n.useState)("cases"),Y=Object(u.a)(P,2),q=Y[0],K=Y[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=S(e);E(c),w(e),a(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(c);var V=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,O(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){O(c),g(e),J(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(y),console.log(z),Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("div",{className:"app__leftSide",children:[Object(v.jsxs)("div",{className:"app__header",children:[Object(v.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(v.jsx)(d.a,{className:"app__dropdown",children:Object(v.jsxs)(j.a,{variant:"outlined",value:o,onChange:V,children:[Object(v.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(v.jsx)(h.a,{value:e.value,children:e.name},e.name)}))]})})]}),Object(v.jsxs)("div",{className:"app__stats",children:[Object(v.jsx)(x,{isOrange:!0,onClick:function(e){return K("cases")},title:"Coronavirus Cases",active:"cases"===q,cases:T(y.todayCases),total:T(y.cases)}),Object(v.jsx)(x,{isGreen:!0,onClick:function(e){return K("recovered")},title:"Recovered",active:"recovered"===q,cases:T(y.todayRecovered),total:T(y.recovered)}),Object(v.jsx)(x,{isRed:!0,onClick:function(e){return K("deaths")},title:"Deaths",active:"deaths"===q,cases:T(y.todayDeaths),total:T(y.deaths)})]}),Object(v.jsx)(R,{casesType:q,countries:N,center:z,zoom:W})]}),Object(v.jsx)(f.a,{className:"app__rightSide",children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)("h3",{children:"Total Cases by Country"}),Object(v.jsx)(D,{countries:I}),Object(v.jsxs)("h3",{children:["Worldwide new ",q,Object(v.jsx)("span",{className:"lastThirty",children:" (last 30 days)"})]}),Object(v.jsx)(A,{className:"app__graph",casesType:q})]})})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,250)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),M()}},[[209,1,2]]]);
//# sourceMappingURL=main.98783ae6.chunk.js.map