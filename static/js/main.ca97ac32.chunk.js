(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(63),i=c.n(s),r=(c(75),c.p,c(76),c(25)),j=c(26),l=c(28),d=c(27),h=c(127),b=c(123),o=c(128),x=c(129),O=c(130),u=c(131),p=c(132),m=c(133),g=c(124),w=c(31),f=c.n(w),v=c(1),y=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={News:[]},e.FetchNews=function(){f.a.get("https://newsapi.org/v2/everything?q=tesla&from=2021-08-20&sortBy=publishedAt&apiKey=010c65631b9e434e9155b5e7da91d5a9").then((function(t){console.log(t.data.articles),e.setState({News:t.data.articles})}))},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(h.a,{container:!0,style:{padding:80},children:[Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(b.a,{onClick:this.FetchNews,variant:"contained",fullWidth:!0,color:"secondary",children:"FETCH NEWS"})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:"Image"}),Object(v.jsx)(p.a,{children:"Author"}),Object(v.jsx)(p.a,{children:"Title"}),Object(v.jsx)(p.a,{children:"Description"}),Object(v.jsx)(p.a,{children:"Date"}),Object(v.jsx)(p.a,{children:"Content"})]})}),Object(v.jsx)(m.a,{children:this.state.News.map((function(e,t){return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:Object(v.jsx)(g.a,{src:e.urlToImage})}),Object(v.jsx)(p.a,{children:e.author}),Object(v.jsx)(p.a,{children:e.title}),Object(v.jsx)(p.a,{children:e.description}),Object(v.jsx)(p.a,{children:e.publishedAt}),Object(v.jsx)(p.a,{children:e.content})]})}))})]})})})]})})}}]),c}(n.Component),N=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={News:[]},e.FetchNews=function(){f.a.get("https://newsapi.org/v2/everything?q=apple&from=2021-09-19&to=2021-09-19&sortBy=popularity&apiKey=010c65631b9e434e9155b5e7da91d5a9").then((function(t){console.log(t.data.articles),e.setState({News:t.data.articles})}))},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(h.a,{container:!0,style:{padding:80},children:[Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(b.a,{onClick:this.FetchNews,variant:"contained",color:"primary",fullWidth:!0,children:"GetNews"})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:"Image"}),Object(v.jsx)(p.a,{children:"Author"}),Object(v.jsx)(p.a,{children:"Title"}),Object(v.jsx)(p.a,{children:"Description"}),Object(v.jsx)(p.a,{children:"Date"}),Object(v.jsx)(p.a,{children:"Content"})]})}),Object(v.jsx)(m.a,{children:this.state.News.map((function(e,t){return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:Object(v.jsx)(g.a,{src:e.urlToImage})}),Object(v.jsx)(p.a,{children:e.author}),Object(v.jsx)(p.a,{children:e.title}),Object(v.jsx)(p.a,{children:e.description}),Object(v.jsx)(p.a,{children:e.publishedAt}),Object(v.jsx)(p.a,{children:e.content})]})}))})]})})})]})})}}]),c}(n.Component),C=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={News:[]},e.FetchNews=function(){f.a.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=010c65631b9e434e9155b5e7da91d5a9").then((function(t){console.log(t.data.articles),e.setState({News:t.data.articles})}))},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(h.a,{container:!0,style:{padding:80},children:[Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(b.a,{onClick:this.FetchNews,variant:"contained",color:"secondary",fullWidth:!0,children:"FetchNews"})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:"Image"}),Object(v.jsx)(p.a,{children:"Author"}),Object(v.jsx)(p.a,{children:"Title"}),Object(v.jsx)(p.a,{children:"Description"}),Object(v.jsx)(p.a,{children:"Date"}),Object(v.jsx)(p.a,{children:"Content"})]})}),Object(v.jsx)(m.a,{children:this.state.News.map((function(e,t){return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:Object(v.jsx)(g.a,{src:e.urlToImage})}),Object(v.jsx)(p.a,{children:e.author}),Object(v.jsx)(p.a,{children:e.title}),Object(v.jsx)(p.a,{children:e.description}),Object(v.jsx)(p.a,{children:e.publishedAt}),Object(v.jsx)(p.a,{children:e.content})]})}))})]})})})]})})}}]),c}(n.Component),A=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={News:[]},e.FetchNews=function(){f.a.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=010c65631b9e434e9155b5e7da91d5a9").then((function(t){console.log(t.data.articles),e.setState({News:t.data.articles})}))},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(h.a,{container:!0,style:{padding:80},children:[Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(b.a,{onClick:this.FetchNews,variant:"contained",color:"primary",fullWidth:!0,children:"GetNews"})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:"Image"}),Object(v.jsx)(p.a,{children:"Author"}),Object(v.jsx)(p.a,{children:"Title"}),Object(v.jsx)(p.a,{children:"Description"}),Object(v.jsx)(p.a,{children:"Date"}),Object(v.jsx)(p.a,{children:"Content"})]})}),Object(v.jsx)(m.a,{children:this.state.News.map((function(e,t){return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(p.a,{children:Object(v.jsx)(g.a,{src:e.urlToImage})}),Object(v.jsx)(p.a,{children:e.author}),Object(v.jsx)(p.a,{children:e.title}),Object(v.jsx)(p.a,{children:e.description}),Object(v.jsx)(p.a,{children:e.publishedAt}),Object(v.jsx)(p.a,{children:e.content})]})}))})]})})})]})})}}]),c}(n.Component),F=c(125),k=c(134),T=c(135),I=c(33),D=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(F.a,{children:Object(v.jsxs)(k.a,{children:[Object(v.jsx)(T.a,{children:"NEWS APP"}),Object(v.jsx)(I.b,{to:"/",children:"Getnews1"}),Object(v.jsx)(I.b,{to:"/News2",children:"Getnews2"}),Object(v.jsx)(I.b,{to:"/News3",children:"Getnews3"}),Object(v.jsx)(I.b,{to:"/News4",children:"Getnews4"})]})})})}}]),c}(n.Component),S=c(12);var G=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(I.a,{children:[Object(v.jsx)(D,{}),Object(v.jsx)(S.a,{path:"/",exact:!0,component:y}),Object(v.jsx)(S.a,{path:"/News2",exact:!0,component:N}),Object(v.jsx)(S.a,{path:"/News3",exact:!0,component:C}),Object(v.jsx)(S.a,{path:"/News4",exact:!0,component:A})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,136)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root")),W()},75:function(e,t,c){},76:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.ca97ac32.chunk.js.map