(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3181:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,4612,23)),Promise.resolve().then(n.bind(n,2493)),Promise.resolve().then(n.bind(n,9475)),Promise.resolve().then(n.bind(n,3541)),Promise.resolve().then(n.t.bind(n,7699,23)),Promise.resolve().then(n.t.bind(n,6498,23)),Promise.resolve().then(n.t.bind(n,583,23)),Promise.resolve().then(n.t.bind(n,6011,23)),Promise.resolve().then(n.t.bind(n,8487,23)),Promise.resolve().then(n.t.bind(n,4667,23)),Promise.resolve().then(n.t.bind(n,27,23)),Promise.resolve().then(n.bind(n,8684)),Promise.resolve().then(n.bind(n,2429)),Promise.resolve().then(n.bind(n,2103)),Promise.resolve().then(n.bind(n,724)),Promise.resolve().then(n.bind(n,2150))},2493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(7437),s=n(2265);n(9469),n(4251);var r=n(703),a={src:"/_next/static/media/greenMark.a6bbf0ea.svg",height:20,width:20,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/redMark.2bbaab69.svg",height:20,width:20,blurWidth:0,blurHeight:0};function c(e){let{name:t,type:n,placeholder:s,handleChange:c,values:u,isValid:o,errorText:h,setIsFocus:d,isFocus:m}=e;return(0,i.jsxs)("label",{className:"input",htmlFor:t,children:[(0,i.jsx)("input",{className:"input__field ".concat(!o&&m&&null!==o&&"input__field_error"),id:t,minLength:2,maxLength:25,name:t,type:n,placeholder:s,onChange:c,value:u[t]||"",onFocus:()=>{d(e=>({...e,[t]:!0}))}}),m&&null!==o&&(0,i.jsx)(r.default,{className:"input__mark",src:o?a:l,alt:o?"Зелёная галочка":"Красный крестик"}),(0,i.jsx)("span",{className:"input__text",children:h})]})}function u(e){let{checked:t,handleChecked:n}=e;return(0,i.jsx)("div",{className:"checkbox",children:(0,i.jsxs)("label",{className:"checkbox__label",htmlFor:"checkbox",children:[(0,i.jsx)("input",{name:"checkbox",type:"checkbox",id:"checkbox",className:"checkbox__input",onChange:n,checked:t}),(0,i.jsx)("span",{className:"checkbox__text",children:"Я соглашаюсь"})]})})}async function o(e){try{let t=await fetch("".concat("http://localhost:3001/","user"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Не удалось отправить данные");return await t.json()}catch(e){return console.log(e),e}}n(6877);var h=n(1231),d=n(3406);function m(){let[e,t]=(0,s.useState)({inputName:"",inputPhone:""}),[n,r]=(0,s.useState)(!1),[a,l]=(0,s.useState)({name:null,phone:null,checkbox:null}),[m,b]=(0,s.useState)(!1),[_,f]=(0,s.useState)({name:"",phone:""}),[g,x]=(0,s.useState)({inputName:!1,inputPhone:!1});function p(e){let{name:n,value:i}=e.target;!function(e){let{name:t,value:n,setIsValidData:i,setErrorText:s}=e;"inputName"===t&&(n.length<2||n.length>25?(i(e=>({...e,name:!1})),s(e=>({...e,name:"Имя должно включать в себя от 2 до 25 символов"}))):(i(e=>({...e,name:!0})),s(e=>({...e,name:""})))),"inputPhone"===t&&(11!==n.length?(i(e=>({...e,phone:!1})),s(e=>({...e,phone:"Номер телефона должен начинаться с 8 и состоять из 11 цифр"}))):(i(e=>({...e,phone:!0})),s(e=>({...e,phone:""}))))}({name:n,value:i,setIsValidData:l,setErrorText:f}),t(e=>({...e,[n]:i}))}async function v(n){n.preventDefault();let i={name:e.inputName,phone:e.inputPhone,id:(0,h.Z)()};try{await o(i)&&(t({inputName:"",inputPhone:""}),f({name:"",phone:""}),r(!1),b(!1),x({inputName:!1,inputPhone:!1}),l({name:null,phone:null,checkbox:null}))}catch(e){console.log(e)}}return(0,s.useEffect)(()=>{b(Object.values(a).every(e=>!0===e))},[e,n,a,m]),(0,i.jsxs)("form",{className:"form",id:d.BJ[3],action:"#",onSubmit:v,children:[(0,i.jsx)("h2",{className:"form__title",children:"Отправь форму"}),(0,i.jsxs)("fieldset",{className:"form__fieldset",children:[(0,i.jsx)(c,{handleChange:p,name:"inputName",type:"text",placeholder:"Имя",values:e,isValid:a.name,errorText:_.name,setIsFocus:x,isFocus:g.inputName}),(0,i.jsx)(c,{handleChange:p,name:"inputPhone",type:"number",placeholder:"Телефон",values:e,isValid:a.phone,errorText:_.phone,setIsFocus:x,isFocus:g.inputPhone}),(0,i.jsx)(u,{handleChecked:function(e){let{checked:t}=e.target;t?l(e=>({...e,checkbox:!0})):l(e=>({...e,checkbox:!1})),r(t)},checked:n}),(0,i.jsx)("button",{className:"form__button ".concat(!m&&"form__button_inactive"),type:"submit",disabled:!m,children:"Отправить"})]})]})}},9475:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(7437);n(107);var s=n(703),r={src:"/_next/static/media/logo.af0962e7.svg",height:24,width:120,blurWidth:0,blurHeight:0},a=n(2265),l={src:"/_next/static/media/burger.ee403d07.svg",height:12,width:22,blurWidth:0,blurHeight:0},c=n(3406),u=n(8792);n(2760);var o={src:"/_next/static/media/logo-burger.77db66a7.svg",height:24,width:120,blurWidth:0,blurHeight:0},h={src:"/_next/static/media/close-icon.ebec7433.svg",height:28,width:28,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/arrow.36695362.svg",height:24,width:24,blurWidth:0,blurHeight:0};function m(e){let{setIsBurgerActive:t,isBurgerActive:n}=e;return(0,i.jsx)("div",{className:"burger ".concat(n&&"burger_opened"),children:(0,i.jsxs)("div",{className:"burger__container",children:[(0,i.jsxs)("div",{className:"burger__header",children:[(0,i.jsx)(s.default,{className:"burger__logo",src:o,alt:"burger-logo"}),(0,i.jsx)("button",{className:"burger__button",type:"button",onClick:()=>{t(!1)},children:(0,i.jsx)(s.default,{className:"burger__img",src:h,alt:"exit-button"})})]}),(0,i.jsx)("nav",{className:"burger__navigation",children:(0,i.jsx)("ul",{className:"burger__list",children:c.BJ.map(e=>(0,i.jsx)("li",{className:"burger__list-element",children:(0,i.jsx)(u.default,{className:"burger__link",href:"#".concat(e.split(" ")[0]),children:(0,i.jsxs)("button",{className:"burger__button",type:"button",onClick:()=>{t(!1)},children:[e,(0,i.jsx)(s.default,{className:"burger__img",src:d,alt:"arrow-button"})]})})},e))})})]})})}function b(){let[e,t]=(0,a.useState)(!1);return(0,i.jsxs)("header",{className:"header",children:[(0,i.jsxs)("div",{className:"header__container",children:[(0,i.jsx)(s.default,{className:"header__logo",src:r,alt:"logo"}),(0,i.jsx)("nav",{className:"header__nav",children:(0,i.jsx)("ul",{className:"header__list",children:c.BJ.map(e=>(0,i.jsx)("li",{className:"header__list-element",children:(0,i.jsx)(u.default,{className:"header__link",href:"#".concat(e.split(" ")[0]),children:e})},e))})}),(0,i.jsx)("button",{className:"header__burger-button",type:"button",onClick:()=>{t(!0)},children:(0,i.jsx)(s.default,{className:"header__burger-image",src:l,alt:"burger-menu"})})]}),(0,i.jsx)(m,{setIsBurgerActive:t,isBurgerActive:e})]})}},3541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(7437);n(1765);var s=n(2265);function r(e){let{title:t,text:n,id:s,handleClick:r,openElement:a}=e;return(0,i.jsxs)("li",{className:"question",children:[(0,i.jsxs)("button",{className:"question__button",onClick:()=>{r(s)},children:[(0,i.jsx)("h5",{className:"question__title ".concat(s===a&&"question__title_color"),children:t}),(0,i.jsx)("div",{className:"question__background-img ".concat(s===a&&"question__background-img_cross")})]}),s===a&&(0,i.jsx)("p",{className:"question__text",children:n})]})}n(6531);var a=n(3406);function l(){let[e,t]=(0,s.useState)(null);function n(n){n===e?t(null):t(n)}return(0,i.jsxs)("section",{id:a.BJ[2].split(" ")[0],className:"questions",children:[(0,i.jsx)("h3",{className:"questions__title",children:"Вопросы и ответы"}),(0,i.jsx)("ul",{className:"questions__container",children:a.Xl.map(t=>(0,i.jsx)(r,{...t,handleClick:n,openElement:e},t.id))})]})}},3406:function(e,t,n){"use strict";n.d(t,{BJ:function(){return l},Xl:function(){return c}});var i=n(2150),s=n(2429),r=n(724),a=n(2103);let l=["Как это работает","3-й блок","Вопросы и ответы","Форма"];i.default,s.default,r.default,a.default;let c=[{id:"1",title:"Подтверждено: сознание наших соотечественников не замутнено пропагандой?",text:"В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."},{id:"2",title:"Прототип нового сервиса - это как трубный призыв?",text:"В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."},{id:"3",title:"Частокол на границе продолжает удивлять?",text:"В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."},{id:"4",title:"Очевидцы сообщают, что слышали грохот грома градущих изменений?",text:"В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."},{id:"5",title:"И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?",text:"В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."},{id:"6",title:"Нынче никто не может себе позволить инициировать треск разлетающихся скреп?",text:"В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."},{id:"7",title:"Высококачественный прототип будущего проекта обнадёживает?",text:"В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."}]},4612:function(){},27:function(){},4667:function(){},2760:function(){},8487:function(){},6877:function(){},6498:function(){},9469:function(){},107:function(){},583:function(){},4251:function(){},6531:function(){},1765:function(){},7699:function(){},6011:function(){},8684:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/blockImage.f845fd40.svg",height:448,width:592,blurWidth:0,blurHeight:0}},2429:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/delivery-truck.2460d422.svg",height:72,width:72,blurWidth:0,blurHeight:0}},2103:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/money-bags.61008f75.svg",height:72,width:72,blurWidth:0,blurHeight:0}},724:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/secure.eaa4d8bc.svg",height:72,width:72,blurWidth:0,blurHeight:0}},2150:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/waiting.78fea854.svg",height:72,width:72,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[134,971,69,744],function(){return e(e.s=3181)}),_N_E=e.O()}]);