(this["webpackJsonpreact-cat-food"]=this["webpackJsonpreact-cat-food"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(2),r=a.n(n),l=(a(9),a(3)),i=function(e){var t=e.className;return s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"card__subheader text-color--secondary"},"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),s.a.createElement("p",{className:"card__subheader ".concat(t())},"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?"))},o=function(e){var t=e.giftCount;return 1===t?s.a.createElement("p",{className:"card__gift text--secondary"},"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"):t<5?s.a.createElement("p",{className:"card__gift text--secondary"},s.a.createElement("span",{className:"text--bold"},t)," \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"):s.a.createElement("p",{className:"card__gift text--secondary"},s.a.createElement("span",{className:"text--bold"},t)," \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a")},d=function(e){var t=e.isHappy;return t?s.a.createElement("span",{className:"card__isHappy text--secondary"},"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"):null},u=function(e){var t=e.classSelect,a=e.weight;return s.a.createElement("div",{className:"card__weight ".concat(t())},s.a.createElement("span",{className:"card__weight-number"},a),"\u043a\u0433")},m=function(e){var t=e.isDisable,a=e.description,c=e.taste,n=e.selectedId,r=e.id,l=e.classDisable,i=(e.classSelect,e.selectId);return t?s.a.createElement("p",{className:"card__subtext ".concat(l)},"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 ",c," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f"):n.includes(r)?s.a.createElement("p",{className:"card__subtext"},a):s.a.createElement("p",{className:"card__subtext"},"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d,",s.a.createElement("button",{className:"card__subtext-button"},s.a.createElement("span",{className:"card__subtext-button-text",onClick:function(e){i(e)}},"\u043a\u0443\u043f\u0438"),"."))},p=function(e){var t=e.taste,a=e.weight,c=e.count,n=e.giftCount,r=e.description,l=e.isHappy,p=e.id,f=e.setSelectedId,E=e.selectedId,_=e.isDisable,b=function(){return E.includes(p)?"active":""},g=function(){return _?"disable":""},N=function(e){if(_)return null;var t=[];e.target.classList.remove("show"),t=E.includes(p)?E.filter((function(e){return e!==p})):E.concat([p]),f(t)};return s.a.createElement("li",{className:"card-item"},s.a.createElement("button",{className:"card-wrapper \n                    ".concat(b()," \n                    ").concat(g()),onClick:N,onMouseLeave:function(e){E.includes(p)&&e.target.classList.contains("card-wrapper")&&e.target.classList.add("show")}},s.a.createElement("div",{className:"card"},s.a.createElement(i,{className:b}),s.a.createElement("h3",{className:"card__header"},"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),s.a.createElement("p",{className:"card__taste"},"c ",t),s.a.createElement("p",{className:"card__count text--secondary"},s.a.createElement("span",{className:"text--bold"},c)," \u043f\u043e\u0440\u0446\u0438\u0439"),s.a.createElement(o,{giftCount:n}),s.a.createElement(d,{isHappy:l}),s.a.createElement(u,{classSelect:b,weight:a}))),s.a.createElement(m,{isDisable:_,description:r,taste:t,selectedId:E,id:p,classDisable:g,classSelec:b,selectId:N}))},f=(a(10),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=[{id:1,taste:"\u0444\u0443\u0430-\u0433\u0440\u0430",weight:.5,count:10,giftCount:1,description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",isHappy:!1,isDisable:!1},{id:2,taste:"\u0440\u044b\u0431\u043e\u0439",weight:2,count:40,giftCount:2,description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",isHappy:!1,isDisable:!1},{id:3,taste:"\u043a\u0443\u0440\u043e\u0439",weight:5,count:100,giftCount:5,description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",isHappy:!0,isDisable:!0}].map((function(e){return s.a.createElement(p,{key:e.id,id:e.id,selectedId:a,taste:e.taste,weight:e.weight,count:e.count,giftCount:e.giftCount,description:e.description,isHappy:e.isHappy,isDisable:e.isDisable,setSelectedId:n})}));return s.a.createElement("ul",{className:"cardsList"},r)}),E=function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"page__header"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),s.a.createElement(f,null))};r.a.render(s.a.createElement(E,null),document.querySelector("#root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.f6a023aa.chunk.js.map