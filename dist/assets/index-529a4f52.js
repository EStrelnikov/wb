(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();const d=document.querySelector(".main"),m=d.querySelector(".total__footer__btn"),q=d.querySelector("#price__pay__footer__checkbox"),u=d.querySelector(".main__basket__products"),g=document.querySelector(".content__nav__item_count"),S=document.querySelector(".nav__mob__item_basket_count");u.querySelector(".basket__products__accordion");const I=u.querySelector(".basket__products__accordion_img"),F=u.querySelector(".basket__products__accordion"),j=d.querySelector(".basket__products_missing__accordion_img"),$=d.querySelector(".basket__products_missing__accordion"),E=u.querySelector(".basket__products__list"),z=u.querySelectorAll(".basket__item__count__all"),G=u.querySelectorAll(".basket__item"),H=E.querySelectorAll(".basket__item__box_checkbox"),T=u.querySelector(".products__accordion_title_block_checkbox"),R=u.querySelector(".accordion_title_block_hide_numb"),U=u.querySelector(".accordion_title_block_hide_phrase"),K=u.querySelector(".accordion_title_block_hide_sum"),p=d.querySelector(".recipient__form"),P=p.querySelector("#form_name"),A=p.querySelector("#form_surname"),w=p.querySelector("#form_mail"),f=p.querySelector("#form_tel"),y=p.querySelector("#form_itn"),C=d.querySelector(".delivery__date"),b=d.querySelector(".delivery__return_cost"),W=d.querySelector(".payment__header_actions"),J=d.querySelector(".price__pay__method__header__btn"),h=d.querySelector(".payment__popup"),Q=h.querySelector(".payment__popup__main__header__close"),X=h.querySelector(".payment__popup__main__footer__btn"),M=h.querySelectorAll("input"),Y=d.querySelector(".delivery__address__header__btn"),ee=d.querySelector(".delivery__header_actions"),i=d.querySelector(".delivery__popup"),te=i.querySelector(".delivery__popup__content__header__close"),ne=i.querySelector(".delivery__popup__content__footer__btn"),B=i.querySelectorAll(".content__main__btn"),N=i.querySelector(".main__body__punkts"),se=i.querySelectorAll(".punkts__item"),x=i.querySelector(".main__body__addresses"),re=i.querySelectorAll(".adresses__item"),oe=d.querySelector(".sum__main__box__count"),ce=d.querySelector(".sum__count__items__numb"),de=d.querySelector(".sum__count__items__name"),ae=d.querySelector(".sum__count__total__numb"),ie=d.querySelector(".sum__discount__total_count"),t={basket:{uzcotton:{id:"uzcotton",count:1,price:{oldPrice:1051,newPrice:522},checked:!0,all:2,delete:!1,favorite:!1},case:{id:"case",count:200,price:{oldPrice:11500.235,newPrice:10500.235},checked:!0,all:1e3,delete:!1,favorite:!1},faber:{id:"faber",count:2,price:{oldPrice:475,newPrice:247},checked:!0,all:2,delete:!1,favorite:!1}},payment:{prechecked:"mir",mir:{checked:!0,html:` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 30 10" fill="none">
      <path d="M16.6811 1.84383L14.8643 5.75836H14.6805V1.00037H12.0851V9.00245H14.2371C14.8211 9.00245 15.3402 8.66723 15.5889 8.14817L17.4165 4.24445H17.6004V9.00245H20.1958V1.00037H18.0113C17.449 1.00037 16.9191 1.33559 16.6811 1.84383Z" fill="#319B42"/>
      <path d="M6.97243 2.04929L5.90182 5.75836H5.71798L4.63656 2.04929C4.45271 1.4221 3.87956 1.00037 3.2307 1.00037H0.667725V9.00245H3.26315V4.24445H3.44699L4.93935 9.00245H6.66963L8.162 4.24445H8.34584V9.00245H10.9413V1.00037H8.37829C7.72943 1.00037 7.14546 1.4221 6.97243 2.04929Z" fill="#319B42"/>
      <path d="M21.3243 4.56745V9.00245H23.9206V6.40635H26.7115C27.9231 6.40635 28.9508 5.63834 29.3294 4.56745H21.3243Z" fill="#319B42"/>
      <path d="M26.6357 1.00037H20.859C21.216 2.90417 22.8819 4.24549 24.8832 4.24549H29.3725C29.405 4.07241 29.4266 3.87771 29.4266 3.683C29.4266 2.13616 28.1826 1.00037 26.6357 1.00037Z" fill="url(#paint0_linear_7_2283)"/>
      <defs>
      <linearGradient id="paint0_linear_7_2283" x1="20.859" y1="2.62293" x2="29.4266" y2="2.62293" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00A3E1"/>
      <stop offset="0.3042" stop-color="#009ADD"/>
      <stop offset="0.7987" stop-color="#0082D4"/>
      <stop offset="1" stop-color="#0076CF"/>
      </linearGradient>
      </defs>
      </svg>`},visa:{checked:!1,html:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="13" viewBox="0 0 32 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4709 4.67817C16.453 6.08581 17.7254 6.87134 18.6838 7.33838C19.6686 7.81763 19.9994 8.12493 19.9956 8.55341C19.9881 9.20931 19.21 9.49869 18.4818 9.50995C17.2113 9.52967 16.4727 9.16698 15.8855 8.89262L15.4279 11.0341C16.017 11.3057 17.108 11.5425 18.2394 11.5528C20.8949 11.5528 22.6323 10.242 22.6418 8.2095C22.6521 5.6301 19.0738 5.48725 19.0982 4.33426C19.1067 3.98472 19.4403 3.61163 20.1713 3.51674C20.5331 3.46886 21.532 3.43217 22.6643 3.95366L23.1087 1.88176C22.4998 1.65997 21.7171 1.44757 20.7427 1.44757C18.2431 1.44757 16.485 2.77627 16.4709 4.67817ZM27.3796 1.6261C26.8947 1.6261 26.4859 1.90899 26.3037 2.3431L22.5102 11.4006H25.1638L25.6919 9.94125H28.9347L29.241 11.4006H31.5799L29.5389 1.6261H27.3796ZM27.7507 4.26659L28.5165 7.93694H26.4192L27.7507 4.26659ZM13.2535 1.6261L11.1618 11.4006H13.6904L15.7812 1.6261H13.2535ZM9.51266 1.6261L6.88061 8.27897L5.81595 2.62215C5.69101 1.99074 5.19768 1.6261 4.64982 1.6261H0.347122L0.286962 1.90992C1.17028 2.10159 2.17385 2.41077 2.78179 2.74153C3.15386 2.94353 3.2601 3.12018 3.38222 3.60037L5.39874 11.4006H8.07123L12.1682 1.6261H9.51266Z" fill="#1434CB"/>
      </svg>`},mk:{checked:!1,html:`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9337 11.8367V11.5649H22.8629L22.781 11.7514L22.6996 11.5649H22.6286V11.8367H22.6788V11.632L22.7554 11.8086H22.8075L22.884 11.6315V11.8367H22.9339H22.9337ZM22.4846 11.8367V11.6115H22.5752V11.5656H22.3438V11.6115H22.4343V11.8367H22.4846Z" fill="#F79410"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0014H8.76367V1.99463H14.8884L14.8883 13.0014Z" fill="#FF5F00"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.49987C9.15147 5.26713 10.1969 3.27821 11.8248 1.99643C10.5928 1.02498 9.06814 0.497414 7.49923 0.499764C3.63356 0.499764 0.5 3.63376 0.5 7.49987C0.5 11.3659 3.63356 14.4999 7.49923 14.4999C9.06814 14.5023 10.5929 13.9747 11.8249 13.0032C10.1971 11.7217 9.15147 9.73269 9.15147 7.49987Z" fill="#EB001B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.49987C23.1497 11.3659 20.0161 14.4999 16.1505 14.4999C14.5814 14.5022 13.0565 13.9747 11.8242 13.0032C13.4526 11.7215 14.498 9.73269 14.498 7.49987C14.498 5.26699 13.4526 3.27821 11.8242 1.99643C13.0564 1.02498 14.5813 0.497487 16.1504 0.499763C20.016 0.499763 23.1496 3.63376 23.1496 7.49987" fill="#F79410"/>
      </svg>`},maestro:{checked:!1,html:`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0017H8.76367V1.99487H14.8884L14.8883 13.0017Z" fill="#6C6BBD"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.50012C9.15147 5.26738 10.1969 3.27845 11.8248 1.99668C10.5928 1.02523 9.06814 0.497658 7.49923 0.500008C3.63356 0.500008 0.5 3.63401 0.5 7.50012C0.5 11.3662 3.63356 14.5002 7.49923 14.5002C9.06814 14.5025 10.5929 13.9749 11.8249 13.0035C10.1971 11.7219 9.15147 9.73293 9.15147 7.50012Z" fill="#EB001B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.50012C23.1497 11.3662 20.0161 14.5002 16.1505 14.5002C14.5814 14.5024 13.0565 13.9749 11.8242 13.0035C13.4526 11.7217 14.498 9.73293 14.498 7.50012C14.498 5.26723 13.4526 3.27845 11.8242 1.99668C13.0564 1.02523 14.5813 0.497731 16.1504 0.500007C20.016 0.500007 23.1496 3.63401 23.1496 7.50012" fill="#0099DF"/>
                        </svg>`}}};function le(){let e=0,n=0;Object.keys(t.basket).forEach(s=>{e+=t.basket[s].delete?0:t.basket[s].count,n+=t.basket[s].delete?0:t.basket[s].price.newPrice*t.basket[s].count}),R.innerText=e.toLocaleString(),U.innerText=O(e),K.innerText=Math.round(n).toLocaleString()}function ue(e){const n=E.querySelector(`#${e}`),o=n.querySelector(".basket__item__count__all__numb"),s=n.querySelector(".basket__item__cost_new_numb"),r=n.querySelector(".basket__item__cost_old_box_numb"),c=n.querySelector(".decrement"),a=n.querySelector(".increment");o.innerText=t.basket[e].count,s.innerText=Math.round(t.basket[e].price.newPrice*t.basket[e].count).toLocaleString(),r.innerText=Math.round(t.basket[e].price.oldPrice*t.basket[e].count).toLocaleString(),t.basket[e].count===1?(t.basket[e].count!==t.basket[e].all&&a.classList.remove("btn_disable"),c.classList.add("btn_disable")):t.basket[e].count===t.basket[e].all?(c.classList.remove("btn_disable"),t.basket[e].count===1&&c.classList.add("btn_disable"),a.classList.add("btn_disable")):(a.classList.remove("btn_disable"),c.classList.remove("btn_disable"))}function V(){const e=Object.keys(t.basket),n=e.filter(s=>t.basket[s].checked===!0&&!t.basket[s].delete),o=e.filter(s=>!t.basket[s].delete);T.checked=(n==null?void 0:n.length)===o.length&&o.length!==0}function v(){const e=Object.keys(t.basket),n=e.filter(o=>t.basket[o].checked===!1||t.basket[o].delete);if(e.length===n.length){e.forEach(o=>{C.querySelectorAll(`#${o}`).forEach(r=>{r.classList.add("hidden"),r.parentNode.classList.add("hidden"),r.parentNode.parentNode.classList.add("hidden"),r.parentNode.parentNode.parentNode.classList.add("hidden")})}),b.classList.add("hidden");return}e.forEach(o=>{const s=C.querySelectorAll(`#${o}`);if(s.length>1)!t.basket[o].checked||t.basket[o].delete?(s.forEach(c=>{c.classList.add("hidden"),[...c.parentNode.children].filter(_=>_.classList.contains("hidden")).length===c.parentNode.children.length?(c.parentNode.classList.add("hidden"),c.parentNode.parentNode.classList.add("hidden")):(c.parentNode.classList.remove("hidden"),c.parentNode.parentNode.classList.remove("hidden"))}),e.filter(c=>t.basket[c].checked===!1).length===e.length&&b.classList.add("hidden")):s.forEach((r,c)=>{b.classList.remove("hidden");const a=r.children[1];if(c){const _=t.basket[r.id].count-184;a.innerText=_,_===1?a.classList.add("hidden"):a.classList.remove("hidden")}else a.innerText=t.basket[r.id].count<185?t.basket[r.id].count:184,t.basket[r.id].count===1?a.classList.add("hidden"):a.classList.remove("hidden");if(c&&t.basket[r.id].count<185){r.classList.add("hidden"),r.parentNode.classList.add("hidden"),r.parentNode.parentNode.classList.add("hidden");return}r.classList.remove("hidden"),r.parentNode.classList.remove("hidden"),r.parentNode.parentNode.classList.remove("hidden"),r.parentNode.parentNode.parentNode.classList.remove("hidden")});else if(!t.basket[o].checked||t.basket[o].delete)s[0].classList.add("hidden"),[...s[0].parentNode.children].filter(c=>c.classList.contains("hidden")).length===s[0].parentNode.children.length?s[0].parentNode.classList.add("hidden"):s[0].parentNode.classList.remove("hidden");else{if(t.basket[o].delete)return;s[0].classList.remove("hidden"),s[0].parentNode.classList.remove("hidden"),s[0].parentNode.parentNode.classList.remove("hidden"),s[0].parentNode.parentNode.parentNode.classList.remove("hidden"),b.classList.remove("hidden");const r=s[0].children[1];r.innerText=t.basket[o].count,t.basket[o].count===1?r.classList.add("hidden"):r.classList.remove("hidden")}})}function l(e,n){const{id:o}=e;let s,r,c,a,_;const k={form_name:{message:"",messageTrue:"",text:"Укажите имя",textTrue:"Имя"},form_surname:{message:"",messageTrue:"",text:"Укажите фамилию",textTrue:"Фамилия"},form_itn:{reg:/^\d{14}?$/,message:"Проверьте ИНН",messageTrue:"Для таможенного оформления",text:"Укажите ИНН",textTrue:"ИНН"},form_tel:{reg:/(\+7)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g,message:"Формат: +7 999 999 99 99",messageTrue:"",text:"Укажите номер телефона",textTrue:"Телефон"},form_mail:{reg:/^\S+@\S+\.\S+$/g,message:"Проверьте адрес электронной почты",messageTrue:"",text:"Укажите электронную почту",textTrue:"Почта"}};if(s=k[o].reg,r=k[o].message,c=k[o].messageTrue,a=k[o].text,_=k[o].textTrue,e.value!==""){if(s?s.test(e.value):!0)return n&&(e.parentNode.children[1].innerText=_,e.parentNode.children[1].classList.remove("invalid_label")),e.parentNode.classList.remove("invalid"),e.parentNode.children[2].innerText=c,e.parentNode.children[1].innerText=_,e.parentNode.children[1].classList.remove("invalid_label"),!1;e.parentNode.classList.add("invalid"),e.parentNode.children[2].innerText=r,n&&(e.parentNode.children[1].innerText=a,e.parentNode.children[1].classList.add("invalid_label"))}else{if(n)return e.parentNode.children[1].innerText=a,e.parentNode.children[1].classList.add("invalid_label"),e.parentNode.classList.add("invalid"),e.parentNode.children[2].innerText=r,!0;e.parentNode.classList.remove("invalid"),e.parentNode.children[2].innerText=c,e.parentNode.children[1].innerText=_,e.parentNode.children[1].classList.remove("invalid_label")}}function L(){const e=Object.keys(t.basket),n=e.reduce((r,c)=>t.basket[c].checked&&!t.basket[c].delete?r+t.basket[c].price.newPrice*t.basket[c].count:r,0);oe.innerText=Math.round(n).toLocaleString();const o=e.reduce((r,c)=>t.basket[c].checked&&!t.basket[c].delete?r+t.basket[c].count:r,0);ce.innerText=o.toLocaleString(),de.innerText=O(o);const s=e.reduce((r,c)=>t.basket[c].checked&&!t.basket[c].delete?r+t.basket[c].price.oldPrice*t.basket[c].count:r,0);ae.innerText=Math.round(s).toLocaleString(),ie.innerText=Math.round(n-s).toLocaleString(),q.checked&&(m.innerText=`Оплатить ${D()} сом`)}function O(e,n=["товар","товара","товаров"]){const o=Number(e.toString().slice(-1));return e>4&&e<15?n[2]:[2,3,4].indexOf(o)>=0?n[1]:o===1?n[0]:n[2]}function D(){const n=Object.keys(t.basket).reduce((o,s)=>t.basket[s].checked&&!t.basket[s].delete?o+t.basket[s].price.newPrice*t.basket[s].count:o,0);return Math.round(n).toLocaleString()}function _e(e){let n=[];e.querySelectorAll(".form__box__input").forEach(r=>n.push(l(r,!0)));let s=n.includes(!0);return s=s||n.includes(void 0),s}function Z(){M.forEach(e=>{e.checked=t.payment[e.id].checked})}function pe(){const e=d.querySelector(".payment__card__system"),n=d.querySelector(".price__pay__method__main__img");Object.keys(t.payment).forEach(s=>{t.payment[s].checked&&(e.innerHTML=t.payment[s].html,n.innerHTML=t.payment[s].html)})}function he(e){B.forEach(n=>{n.id===e.id?n.classList.add("active"):n.classList.remove("active")}),e.id==="punkt"?(N.classList.remove("hidden"),x.classList.add("hidden")):(N.classList.add("hidden"),x.classList.remove("hidden"))}function fe(){const n=Object.keys(t.basket).filter(o=>!t.basket[o].delete);n.length?(g.innerText=n.length,S.innerText=n.length):(g.classList.add("hidden"),S.classList.add("hidden"))}G.forEach(e=>{const n=e.querySelector(".basket__item__count__actions_favorite"),o=e.querySelector(".basket__item__count__actions_delete");n.addEventListener("click",s=>{t.basket[e.id].favorite=!t.basket[e.id].favorite,n.classList.toggle("isFavorite")}),o.addEventListener("click",s=>{t.basket[e.id].delete=!0,t.basket[e.id].checked=!1,e.classList.add("hidden"),L(),v(),V(),fe()})});I.addEventListener("click",e=>{F.classList.toggle("accordion_hide"),le()});j.addEventListener("click",e=>{$.classList.toggle("accordion_missing_hide")});z.forEach(e=>{e.addEventListener("click",n=>{const o=[...n.target.classList];if(o.includes("btn_disable"))return;const s=n.target.parentNode.parentNode.parentNode.id;o.includes("decrement")&&(t.basket[s].count,t.basket[s].count--),o.includes("increment")&&t.basket[s].count++,L(),v(),ue(s)})});H.forEach(e=>{e.addEventListener("click",n=>{const{id:o}=n.target.parentNode.parentNode.parentNode;t.basket[o].checked=n.target.checked,L(),V(),v()})});T.addEventListener("click",e=>{const{checked:n}=e.target;Object.keys(t.basket).forEach(s=>{t.basket[s].checked=t.basket[s].delete?!1:n}),H.forEach(s=>{const{id:r}=s.parentNode.parentNode.parentNode;s.checked=t.basket[r].remove?!1:n}),L(),v()});Y.addEventListener("click",e=>{i.classList.toggle("hidden")});ee.addEventListener("click",e=>{i.classList.toggle("hidden")});te.addEventListener("click",e=>{i.classList.toggle("hidden")});ne.addEventListener("click",e=>{i.classList.toggle("hidden")});B.forEach(e=>{e.addEventListener("click",n=>{he(n.target)})});se.forEach(e=>{e.children[2].addEventListener("click",n=>{e.classList.add("hidden")})});re.forEach(e=>{e.children[2].addEventListener("click",n=>{e.classList.add("hidden")})});M.forEach(e=>{e.addEventListener("click",n=>{t.payment.prechecked=n.target.id})});W.addEventListener("click",e=>{Z(),h.classList.toggle("hidden")});J.addEventListener("click",e=>{Z(),h.classList.toggle("hidden")});Q.addEventListener("click",e=>{h.classList.toggle("hidden")});X.addEventListener("click",e=>{Object.keys(t.payment).forEach(o=>{var s,r;((s=t.payment[o])!=null&&s.checked||((r=t.payment[o])==null?void 0:r.checked)===!1)&&(o===t.payment.prechecked?t.payment[o].checked=!0:t.payment[o].checked=!1)}),pe(),h.classList.toggle("hidden")});P.addEventListener("blur",e=>l(e.target));P.addEventListener("input",e=>{e.target.parentNode.classList.contains("invalid")&&l(e.target)});A.addEventListener("blur",e=>l(e.target));A.addEventListener("input",e=>{e.target.parentNode.classList.contains("invalid")&&l(e.target)});y.addEventListener("blur",e=>l(e.target));y.addEventListener("input",e=>{e.target.parentNode.classList.contains("invalid")&&l(e.target)});y.addEventListener("keypress",e=>{(!/\d+/g.test(e.key)||e.target.value.length===14)&&e.preventDefault()});w.addEventListener("blur",e=>{l(e.target)});w.addEventListener("input",e=>{e.target.parentNode.classList.contains("invalid")&&l(e.target)});f.addEventListener("focus",()=>{f.value||(f.value="+7")});f.addEventListener("keypress",e=>{(!/\d+/g.test(e.key)||e.target.value.length===16)&&e.preventDefault(),(e.target.value.length===2||e.target.value.length===6||e.target.value.length===10||e.target.value.length===13)&&(e.preventDefault(),e.target.value+=" "+e.key)});f.addEventListener("input",e=>{e.target.parentNode.classList.contains("invalid")&&l(e.target)});f.addEventListener("blur",e=>{l(e.target)});q.addEventListener("click",e=>{const{checked:n}=e.target;m.innerText=n?`Оплатить ${D()} сом`:"Заказать"});m.addEventListener("click",e=>{if(!_e(p))console.log("Отправка данных");else{const{clientWidth:o}=document.documentElement;o<721&&p.scrollIntoView(top)}});
