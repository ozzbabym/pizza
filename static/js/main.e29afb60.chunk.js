(this["webpackJsonpinternet-shop"]=this["webpackJsonpinternet-shop"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c(17),n=c.n(a),s=(c(42),c(43),c(44),c.p+"static/media/pizza.d6b7c795.png"),r=c(11),d=c(0);var j=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"label",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("img",{src:s,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:Object(d.jsx)("b",{children:"Pizza"})})})]}),Object(d.jsx)(r.b,{to:"/basket",children:Object(d.jsxs)("div",{className:"basket",children:[Object(d.jsx)("div",{children:0!==e.total.totalPizzas&&Object(d.jsxs)("b",{children:[e.total.totalPizzas," \u20bd"]})}),Object(d.jsx)("div",{style:{width:50,height:50},children:Object(d.jsx)("div",{className:"basketImg",children:0!==e.total.totalPizzasCount&&Object(d.jsx)("div",{children:e.total.totalPizzasCount})})})]})})]})})},o=c(4),l=c(3),b=c(16),z=(c(50),c(10)),p=c(37),u={pizzas:[],basket:[],totalCount:0,totalPizza:0};c(70);var O=function(e){return Object(d.jsx)("div",{className:"button ".concat(e.choice?"buttonChoice":""),onClick:e.click,children:e.children})},h=(c(71),[0,50,100]),m=[0,50];var x=function(e){var t=e.modal,c=e.pizza,a=e.imageUrl,n=e.namePizza,s=e.description,r=e.type,j=e.size,o=e.price,p=Object(i.useState)(0),u=Object(b.a)(p,2),x=u[0],f=u[1],v=Object(i.useState)(0),g=Object(b.a)(v,2),P=g[0],k=g[1],y=Object(z.b)();return Object(d.jsx)("div",{className:"cartContainer",children:Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsx)("img",{src:a,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(d.jsx)("div",{className:"name-pizza",children:Object(d.jsx)("h3",{children:n})}),Object(d.jsx)("div",{className:"descriptionpizza",children:s}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"change-container",children:[Object(d.jsx)("div",{className:"change-size",children:j.map((function(e,t){return Object(d.jsxs)("div",{className:x===t?"activeSize":"",onClick:function(){return f(t)},children:[e," \u0441\u043c"]},e)}))}),Object(d.jsx)("div",{className:"change-dough",children:r.map((function(e,t){return Object(d.jsx)("div",{className:P===t?"activeSize":"",onClick:function(){return k(t)},children:0===e?"\u0442\u043e\u043d\u043a\u043e\u0435":"\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"},e)}))})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"priceAndButton",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("b",{children:["\u043e\u0442 ",o+h[x]+m[P]," \u20bd"]})}),Object(d.jsx)("div",{children:Object(d.jsx)(O,{click:function(){t(),y({type:"SET_BASKET",trade:Object(l.a)(Object(l.a)({},c),{},{size:j[x],type:P,price:o+h[x]+m[P]})})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})]})})},f=(c(72),c(20)),v=c.n(f),g={pizza:[{id:1,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/78e732c620334b5e8e5d821685c1c4b5_584x584.jpeg",namePizza:"\u0414\u043e\u0434\u043e \u041c\u0438\u043a\u0441",description:"\u0411\u0435\u043a\u043e\u043d, \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u0441\u044b\u0440 \u0431\u043b\u044e \u0447\u0438\u0437, \u0441\u044b\u0440\u044b \u0447\u0435\u0434\u0434\u0435\u0440 \u0438 \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0441\u043e\u0443\u0441 \u043f\u0435\u0441\u0442\u043e, \u043a\u0443\u0431\u0438\u043a\u0438 \u0431\u0440\u044b\u043d\u0437\u044b, \u0442\u043e\u043c\u0430\u0442\u044b \u0447\u0435\u0440\u0440\u0438, \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0430\u043b\u044c\u0444\u0440\u0435\u0434\u043e, \u0447\u0435\u0441\u043d\u043e\u043a, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b",type:[0,1],size:[26,42],price:445,typePizza:2},{id:2,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/2d1fc30e0e324de798e70e57f039fe41_584x584.jpeg",namePizza:"\u0427\u0438\u0437\u0437\u0438 \u0447\u0435\u0434\u0434\u0435\u0440",description:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430, \u0441\u044b\u0440 \u0447\u0435\u0434\u0434\u0435\u0440, \u0441\u043b\u0430\u0434\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0446, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0447\u0435\u0441\u043d\u043e\u043a, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b",type:[0,1],size:[26,32,42],price:395,typePizza:1},{id:3,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/4518d232ca98422f876872b0fb2669a3_584x584.jpeg",namePizza:"\u0426\u0435\u0437\u0430\u0440\u044c",description:"\u0421\u0432\u0435\u0436\u0438\u0435 \u043b\u0438\u0441\u0442\u044c\u044f \u0441\u0430\u043b\u0430\u0442\u0430 \u0430\u0439\u0441\u0431\u0435\u0440\u0433, \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a, \u0442\u043e\u043c\u0430\u0442\u044b \u0447\u0435\u0440\u0440\u0438, \u0441\u044b\u0440\u044b \u0447\u0435\u0434\u0434\u0435\u0440 \u0438 \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0430\u043b\u044c\u0444\u0440\u0435\u0434\u043e, \u0441\u043e\u0443\u0441 \u0446\u0435\u0437\u0430\u0440\u044c",type:[0],size:[26,32,42],price:445,typePizza:3},{id:4,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/a8413f18d18341b5a0de51e9a7807265_584x584.jpeg",namePizza:"\u0426\u044b\u043f\u043b\u0435\u043d\u043e\u043a \u0431\u043b\u044e \u0447\u0438\u0437",description:"\u0426\u044b\u043f\u043b\u0435\u043d\u043e\u043a, \u0441\u044b\u0440 \u0431\u043b\u044e \u0447\u0438\u0437, \u0442\u043e\u043c\u0430\u0442\u044b, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0430\u043b\u044c\u0444\u0440\u0435\u0434\u043e",type:[1],size:[26,32,42],price:445,typePizza:2},{id:5,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/38a9d286399345c7a560fb649e09e8b4_584x584.jpeg",namePizza:"\u0421\u044b\u0440\u043d\u0430\u044f \ud83c\udf31",description:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0440\u0446\u0438\u044f \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u044b, \u0441\u044b\u0440\u044b \u0447\u0435\u0434\u0434\u0435\u0440 \u0438 \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0441\u043e\u0443\u0441 \u0430\u043b\u044c\u0444\u0440\u0435\u0434\u043e",type:[0,1],size:[26,32],price:245,typePizza:3},{id:6,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_584x584.jpeg",namePizza:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438 \u0444\u0440\u0435\u0448",description:"\u041f\u0438\u043a\u0430\u043d\u0442\u043d\u0430\u044f \u043f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0440\u0446\u0438\u044f \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u044b, \u0442\u043e\u043c\u0430\u0442\u044b, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441",type:[0,1],size:[26,32,42],price:245,typePizza:2},{id:7,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/e9c5aec6-2675-4b43-90c9-8013f8bfda99.jpg",namePizza:"\u041a\u0438\u0441\u043b\u043e-\u0441\u043b\u0430\u0434\u043a\u0438\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",description:"\u0426\u044b\u043f\u043b\u0435\u043d\u043e\u043a, \u043a\u0438\u0441\u043b\u043e-\u0441\u043b\u0430\u0434\u043a\u0438\u0439 \u0441\u043e\u0443\u0441, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441",type:[0,1],size:[26,32,42],price:295,typePizza:2},{id:8,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/362468e7-e8d3-4fda-ab66-91f4dbd56122.jpg",namePizza:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430 \u0438 \u0441\u044b\u0440",description:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0430\u043b\u044c\u0444\u0440\u0435\u0434\u043e",type:[0,1],size:[26,32,42],price:295,typePizza:2},{id:9,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_584x584.jpeg",namePizza:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430 \u0438 \u0433\u0440\u0438\u0431\u044b",description:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0440\u0446\u0438\u044f \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u044b, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441",type:[0,1],size:[26,32,42],price:345,typePizza:2},{id:10,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_584x584.jpeg",namePizza:"\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430 \ud83c\udf31",description:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0440\u0446\u0438\u044f \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u044b, \u0442\u043e\u043c\u0430\u0442\u044b, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441",type:[0,1],size:[26,32,42],price:420,typePizza:3},{id:11,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/4e630ad6-e12e-4d52-ac4c-a7edb799c0fa.jpg",namePizza:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",description:"\u041f\u0438\u043a\u0430\u043d\u0442\u043d\u0430\u044f \u043f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0440\u0446\u0438\u044f \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u044b, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441",type:[0,1],size:[26,32,42],price:395,typePizza:2},{id:12,count:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/2d674f990a794efe8106c4a03b58310d_584x584.jpeg",namePizza:"\u0414\u043e\u0434\u043e",description:"\u0411\u0435\u043a\u043e\u043d, \u043c\u0438\u0442\u0431\u043e\u043b\u044b \u0438\u0437 \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u043f\u0438\u043a\u0430\u043d\u0442\u043d\u0430\u044f \u043f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0442\u043e\u043c\u0430\u0442\u044b \u0447\u0435\u0440\u0440\u0438, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u043b\u0430\u0434\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0446, \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a, \u0447\u0435\u0441\u043d\u043e\u043a, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441",type:[0,1],size:[26,32,42],price:395,typePizza:1}]},P=["\u0432\u0441\u0435","\u041e\u0441\u0442\u0440\u044b\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435"];var k=function(){v()("#modal").fadeOut(0);var e=Object(z.b)(),t=Object(i.useState)(0),c=Object(b.a)(t,2),a=c[0],n=c[1],s=Object(z.c)((function(e){return e.pizzasReducer.pizzas})),r=0===a?s:s.filter((function(e){return e.typePizza===a}));Object(i.useEffect)((function(){e(function(e){return{type:"GET_PIZZAS",pizzas:e}}(g.pizza))}),[]);var j=function(){v()("#modal").fadeIn(100),v()("#modal").fadeOut(300)};return Object(d.jsxs)("div",{className:"container-pizza",children:[Object(d.jsx)("div",{className:"pizza-navigation",children:P.map((function(e,t){return Object(d.jsx)(O,{choice:t===a,click:function(){return function(e){n(e)}(t)},children:e},t)}))}),Object(d.jsx)("div",{className:"cart-container",children:r&&r.map((function(e){return Object(d.jsx)(x,Object(l.a)(Object(l.a)({},e),{},{pizza:e,modal:j}),e.id)}))}),Object(d.jsx)("div",{id:"modal",className:"modalAddShow",children:Object(d.jsx)("div",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"})})]})};c(73);var y=function(e){return Object(d.jsx)("div",{onClick:e.click,className:"buttonCounter",children:e.children})};c(74);var N=function(e){return Object(d.jsx)("div",{onClick:e.click,className:"buttonDel",children:e.children})},_=(c(75),c.p+"static/media/trash.5051a63d.png"),C=c.p+"static/media/basketShop.51847e0a.png";var U=function(e){var t=Object(z.b)();return Object(d.jsx)(d.Fragment,{children:0===e.total.totalPizzasCount?Object(d.jsxs)("div",{className:"basketHomeContainer",children:[Object(d.jsx)("div",{className:"basketHome",children:Object(d.jsx)("img",{src:C,alt:""})}),Object(d.jsx)("div",{className:"titleEmptyBasket",children:Object(d.jsx)("h1",{children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!"})}),Object(d.jsx)("div",{className:"footerMob",children:Object(d.jsx)("div",{children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)(O,{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})})})]}):e.total.totalPizzasCount>0&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"trashbox",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:_,onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&t({type:"DEL_ALL_BASKET"})},alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(d.jsx)("div",{children:"\u043e\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u043e\u043d\u0443"})]})}),Object(d.jsx)("img",{src:"",alt:""}),Object(d.jsxs)("div",{className:"container_basket",children:[e.pizzas.map((function(e,c){return Object(d.jsxs)("div",{className:"block_order",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.imageUrl,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:e.namePizza})}),Object(d.jsx)("div",{children:e.description}),Object(d.jsx)("div",{style:{margin:"10px 0px"},children:Object(d.jsxs)("b",{children:[" \u0442\u0435\u0441\u0442\u043e  ",0===e.type?"\u0442\u043e\u043d\u043a\u043e\u0435":"\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("b",{children:[e.size," \u0441\u043c"]})})]}),Object(d.jsxs)("div",{className:"counter",children:[Object(d.jsx)(y,{click:function(){t({type:"DEL_COUNT",item:e})},children:"-"}),Object(d.jsx)("h4",{children:Object(d.jsx)("b",{children:e.count})}),Object(d.jsx)(y,{click:function(){t({type:"ADD_COUNT",item:e})},children:"+"})]}),Object(d.jsx)("div",{className:"total",children:Object(d.jsxs)("b",{children:[" \u0418\u0442\u043e\u0433\u043e ",e.price," \u20bd "]})}),Object(d.jsx)("div",{className:"delItem",children:Object(d.jsx)(N,{click:function(){return c=e,void(window.confirm("\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0438\u0446\u0446\u0443?")&&t({type:"DEL_PIZZA",item:c}));var c},children:"x"})})]},c)})),Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)(O,{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})}),Object(d.jsx)("div",{className:"alltotalprice",children:Object(d.jsxs)("h2",{children:["\u0418\u0442\u043e\u0433\u043e: ",e.total.totalPizzas," \u20bd"]})}),Object(d.jsx)("div",{children:Object(d.jsx)(O,{click:function(){return t=e.pizzas,void console.log(t);var t},children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"})})]})]})]})})};var I=function(){var e=Object(z.c)((function(e){return e.pizzasReducer.basket})).map((function(e){return JSON.stringify(e)})),t=(e=(e=e.filter((function(t,c){return e.indexOf(t)===c}))).map((function(e){return JSON.parse(e)}))).map((function(e){return e.count})).reduce((function(e,t){return e+t}),0),c=e.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(j,{total:{totalPizzasCount:t,totalPizzas:c}}),Object(d.jsx)(o.a,{path:"/basket",render:function(){return Object(d.jsx)(U,{pizzas:e,total:{totalPizzasCount:t,totalPizzas:c}})},exact:!0}),Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{path:"/",render:function(){return Object(d.jsx)(k,{})},exact:!0})})]})})},A=c(13),E=c(36),S=Object(A.c)({pizzasReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PIZZAS":return Object(l.a)(Object(l.a)({},e),{},{pizzas:t.pizzas});case"SET_BASKET":return Object(l.a)(Object(l.a)({},e),{},{basket:[].concat(Object(p.a)(e.basket),[t.trade])});case"TOTAL_ALL":return Object(l.a)(Object(l.a)({},e),{},{totalPizza:t.total.totalPizzas,totalCount:t.total.totalPizzasCount});case"ADD_COUNT":var c=e.basket.map((function(c){if(c.id===t.item.id&&c.size===t.item.size){var i=e.pizzas.filter((function(e){return e.id===c.id}));return Object(l.a)(Object(l.a)({},c),{},{count:c.count+1,price:c.price+i[0].price})}return Object(l.a)({},c)}));return Object(l.a)(Object(l.a)({},e),{},{basket:c});case"DEL_COUNT":var i=e.basket.map((function(c){if(c.count>1&&c.id===t.item.id&&c.size===t.item.size){var i=e.pizzas.filter((function(e){return e.id===c.id}));return Object(l.a)(Object(l.a)({},c),{},{count:c.count-1,price:c.price-i[0].price})}return Object(l.a)({},c)}));return Object(l.a)(Object(l.a)({},e),{},{basket:i});case"DEL_PIZZA":return Object(l.a)(Object(l.a)({},e),{},{basket:e.basket.filter((function(e){return!(e.id===t.item.id&&e.size===t.item.size&&e.type===t.item.type)}))});case"DEL_ALL_BASKET":return Object(l.a)(Object(l.a)({},e),{},{basket:[]});default:return e}}}),T=Object(A.d)(S,Object(A.a)(E.a));n.a.render(Object(d.jsx)(z.a,{store:T,children:Object(d.jsx)(r.a,{children:Object(d.jsx)(I,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.e29afb60.chunk.js.map