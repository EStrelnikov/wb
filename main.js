const main = document.querySelector(".main");
const orderBtn = main.querySelector(".total__footer__btn");
const orderCheckbox = main.querySelector("#price__pay__footer__checkbox");
const mainBasket = main.querySelector(".main__basket__products");
const countBasket = document.querySelector(".content__nav__item_count");
const countBasketMobile = document.querySelector(
  ".nav__mob__item_basket_count"
);
const basketProductAccordion = mainBasket.querySelector(
  ".basket__products__accordion"
);
const btnHideList = mainBasket.querySelector(
  ".basket__products__accordion_img"
);
const basketAccordion = mainBasket.querySelector(
  ".basket__products__accordion"
);
const btnHideMissingList = main.querySelector(
  ".basket__products_missing__accordion_img"
);
const basketMissingAccordion = main.querySelector(
  ".basket__products_missing__accordion"
);
const basketList = mainBasket.querySelector(".basket__products__list");
const countAllBlocks = mainBasket.querySelectorAll(".basket__item__count__all");
const basketItems = mainBasket.querySelectorAll(".basket__item");
const inputsItemCheckbox = basketList.querySelectorAll(
  ".basket__item__box_checkbox"
);
const checkboxAll = mainBasket.querySelector(
  ".products__accordion_title_block_checkbox"
);
const countProductsAccordionHide = mainBasket.querySelector(
  ".accordion_title_block_hide_numb"
);
const phraseProductsAccordionHide = mainBasket.querySelector(
  ".accordion_title_block_hide_phrase"
);
const sumProductsAccordionHide = mainBasket.querySelector(
  ".accordion_title_block_hide_sum"
);
const recipientForm = main.querySelector(".recipient__form");
const inputName = recipientForm.querySelector("#form_name");
const inputSurname = recipientForm.querySelector("#form_surname");
const inputEmail = recipientForm.querySelector("#form_mail");
const inputTel = recipientForm.querySelector("#form_tel");
const inputItn = recipientForm.querySelector("#form_itn");
const deliveryDateBlock = main.querySelector(".delivery__date");
const deliveryDateReturnBlock = main.querySelector(".delivery__return_cost");
const btnPaymentBlock = main.querySelector(".payment__header_actions");
const btnPaymentTotal = main.querySelector(".price__pay__method__header__btn");
const paymentPopup = main.querySelector(".payment__popup");
const btnClosePaymentPopup = paymentPopup.querySelector(
  ".payment__popup__main__header__close"
);
const btnConfirmPaymentPopup = paymentPopup.querySelector(
  ".payment__popup__main__footer__btn"
);
const inputsPaymentPopup = paymentPopup.querySelectorAll("input");
const btnDeliveryTotal = main.querySelector(".delivery__address__header__btn");
const btnDeliveryBlock = main.querySelector(".delivery__header_actions");
const deliveryPopup = main.querySelector(".delivery__popup");
const btnCloseDeliveryPopup = deliveryPopup.querySelector(
  ".delivery__popup__content__header__close"
);
const btnConfirmDeliveryPopup = deliveryPopup.querySelector(
  ".delivery__popup__content__footer__btn"
);
const btnChangeMainDeliveryPopup = deliveryPopup.querySelectorAll(
  ".content__main__btn"
);
const mainPunctsPopup = deliveryPopup.querySelector(".main__body__punkts");
const itemsPunctsPopup = deliveryPopup.querySelectorAll(".punkts__item");
const mainAddressesPopup = deliveryPopup.querySelector(
  ".main__body__addresses"
);
const itemsAddressesPopup = deliveryPopup.querySelectorAll(".adresses__item");
const totalCount = main.querySelector(".sum__main__box__count");
const totalCountItems = main.querySelector(".sum__count__items__numb");
const nameItems = main.querySelector(".sum__count__items__name");
const totalOldCount = main.querySelector(".sum__count__total__numb");
const discount = main.querySelector(".sum__discount__total_count");

const state = {
  basket: {
    uzcotton: {
      id: "uzcotton",
      count: 1,
      price: {
        oldPrice: 1051,
        newPrice: 522,
      },
      checked: true,
      all: 2,
      delete: false,
      favorite: false,
    },
    case: {
      id: "case",
      count: 200,
      price: {
        oldPrice: 11500.235,
        newPrice: 10500.235,
      },
      checked: true,
      all: 1000,
      delete: false,
      favorite: false,
    },
    faber: {
      id: "faber",
      count: 2,
      price: {
        oldPrice: 475,
        newPrice: 247,
      },
      checked: true,
      all: 2,
      delete: false,
      favorite: false,
    },
  },
  payment: {
    prechecked: "mir",
    mir: {
      checked: true,
      html: ` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 30 10" fill="none">
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
      </svg>`,
    },
    visa: {
      checked: false,
      html: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="13" viewBox="0 0 32 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4709 4.67817C16.453 6.08581 17.7254 6.87134 18.6838 7.33838C19.6686 7.81763 19.9994 8.12493 19.9956 8.55341C19.9881 9.20931 19.21 9.49869 18.4818 9.50995C17.2113 9.52967 16.4727 9.16698 15.8855 8.89262L15.4279 11.0341C16.017 11.3057 17.108 11.5425 18.2394 11.5528C20.8949 11.5528 22.6323 10.242 22.6418 8.2095C22.6521 5.6301 19.0738 5.48725 19.0982 4.33426C19.1067 3.98472 19.4403 3.61163 20.1713 3.51674C20.5331 3.46886 21.532 3.43217 22.6643 3.95366L23.1087 1.88176C22.4998 1.65997 21.7171 1.44757 20.7427 1.44757C18.2431 1.44757 16.485 2.77627 16.4709 4.67817ZM27.3796 1.6261C26.8947 1.6261 26.4859 1.90899 26.3037 2.3431L22.5102 11.4006H25.1638L25.6919 9.94125H28.9347L29.241 11.4006H31.5799L29.5389 1.6261H27.3796ZM27.7507 4.26659L28.5165 7.93694H26.4192L27.7507 4.26659ZM13.2535 1.6261L11.1618 11.4006H13.6904L15.7812 1.6261H13.2535ZM9.51266 1.6261L6.88061 8.27897L5.81595 2.62215C5.69101 1.99074 5.19768 1.6261 4.64982 1.6261H0.347122L0.286962 1.90992C1.17028 2.10159 2.17385 2.41077 2.78179 2.74153C3.15386 2.94353 3.2601 3.12018 3.38222 3.60037L5.39874 11.4006H8.07123L12.1682 1.6261H9.51266Z" fill="#1434CB"/>
      </svg>`,
    },
    mk: {
      checked: false,
      html: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9337 11.8367V11.5649H22.8629L22.781 11.7514L22.6996 11.5649H22.6286V11.8367H22.6788V11.632L22.7554 11.8086H22.8075L22.884 11.6315V11.8367H22.9339H22.9337ZM22.4846 11.8367V11.6115H22.5752V11.5656H22.3438V11.6115H22.4343V11.8367H22.4846Z" fill="#F79410"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0014H8.76367V1.99463H14.8884L14.8883 13.0014Z" fill="#FF5F00"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.49987C9.15147 5.26713 10.1969 3.27821 11.8248 1.99643C10.5928 1.02498 9.06814 0.497414 7.49923 0.499764C3.63356 0.499764 0.5 3.63376 0.5 7.49987C0.5 11.3659 3.63356 14.4999 7.49923 14.4999C9.06814 14.5023 10.5929 13.9747 11.8249 13.0032C10.1971 11.7217 9.15147 9.73269 9.15147 7.49987Z" fill="#EB001B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.49987C23.1497 11.3659 20.0161 14.4999 16.1505 14.4999C14.5814 14.5022 13.0565 13.9747 11.8242 13.0032C13.4526 11.7215 14.498 9.73269 14.498 7.49987C14.498 5.26699 13.4526 3.27821 11.8242 1.99643C13.0564 1.02498 14.5813 0.497487 16.1504 0.499763C20.016 0.499763 23.1496 3.63376 23.1496 7.49987" fill="#F79410"/>
      </svg>`,
    },
    maestro: {
      checked: false,
      html: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0017H8.76367V1.99487H14.8884L14.8883 13.0017Z" fill="#6C6BBD"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.50012C9.15147 5.26738 10.1969 3.27845 11.8248 1.99668C10.5928 1.02523 9.06814 0.497658 7.49923 0.500008C3.63356 0.500008 0.5 3.63401 0.5 7.50012C0.5 11.3662 3.63356 14.5002 7.49923 14.5002C9.06814 14.5025 10.5929 13.9749 11.8249 13.0035C10.1971 11.7219 9.15147 9.73293 9.15147 7.50012Z" fill="#EB001B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.50012C23.1497 11.3662 20.0161 14.5002 16.1505 14.5002C14.5814 14.5024 13.0565 13.9749 11.8242 13.0035C13.4526 11.7217 14.498 9.73293 14.498 7.50012C14.498 5.26723 13.4526 3.27845 11.8242 1.99668C13.0564 1.02523 14.5813 0.497731 16.1504 0.500007C20.016 0.500007 23.1496 3.63401 23.1496 7.50012" fill="#0099DF"/>
                        </svg>`,
    },
  },
};

function updateTitleHideAccordion() {
  let countItems = 0;
  let sum = 0;
  const namesArr = Object.keys(state.basket);
  namesArr.forEach((item) => {
    countItems += !state.basket[item].delete ? state.basket[item].count : 0;
    sum += !state.basket[item].delete
      ? state.basket[item].price.newPrice * state.basket[item].count
      : 0;
  });
  countProductsAccordionHide.innerText = countItems.toLocaleString();
  phraseProductsAccordionHide.innerText = renderPhrase(countItems);
  sumProductsAccordionHide.innerText = Math.round(sum).toLocaleString();
}

function updateCard(id) {
  const card = basketList.querySelector(`#${id}`);
  const count = card.querySelector(".basket__item__count__all__numb");
  const newCost = card.querySelector(".basket__item__cost_new_numb");
  const oldCost = card.querySelector(".basket__item__cost_old_box_numb");
  const btnDec = card.querySelector(".decrement");
  const btnInc = card.querySelector(".increment");
  count.innerText = state.basket[id].count;
  newCost.innerText = Math.round(
    state.basket[id].price.newPrice * state.basket[id].count
  ).toLocaleString();
  oldCost.innerText = Math.round(
    state.basket[id].price.oldPrice * state.basket[id].count
  ).toLocaleString();
  if (state.basket[id].count === 1) {
    if (state.basket[id].count !== state.basket[id].all) {
      btnInc.classList.remove("btn_disable");
    }
    btnDec.classList.add("btn_disable");
  } else if (state.basket[id].count === state.basket[id].all) {
    btnDec.classList.remove("btn_disable");
    if (state.basket[id].count === 1) {
      btnDec.classList.add("btn_disable");
    }
    btnInc.classList.add("btn_disable");
  } else {
    btnInc.classList.remove("btn_disable");
    btnDec.classList.remove("btn_disable");
  }
}

function allCheckedCheckbox() {
  const namesArr = Object.keys(state.basket);
  const arrTrue = namesArr.filter(
    (item) => state.basket[item].checked === true && !state.basket[item].delete
  );
  const arrItemsNotDelete = namesArr.filter(
    (item) => !state.basket[item].delete
  );
  checkboxAll.checked =
    arrTrue?.length === arrItemsNotDelete.length &&
    arrItemsNotDelete.length !== 0
      ? true
      : false;
}

function deliveryBlock() {
  const namesArr = Object.keys(state.basket);
  const elemsHide = namesArr.filter(
    (item) => state.basket[item].checked === false || state.basket[item].delete
  );
  if (namesArr.length === elemsHide.length) {
    namesArr.forEach((item) => {
      const items = deliveryDateBlock.querySelectorAll(`#${item}`);
      items.forEach((elem) => {
        elem.classList.add("hidden");
        elem.parentNode.classList.add("hidden");
        elem.parentNode.parentNode.classList.add("hidden");
        elem.parentNode.parentNode.parentNode.classList.add("hidden");
      });
    });
    deliveryDateReturnBlock.classList.add("hidden");
    return;
  }
  namesArr.forEach((item) => {
    const items = deliveryDateBlock.querySelectorAll(`#${item}`);
    if (items.length > 1) {
      if (!state.basket[item].checked || state.basket[item].delete) {
        items.forEach((item) => {
          item.classList.add("hidden");
          const elemsHide = [...item.parentNode.children].filter((item) =>
            item.classList.contains("hidden")
          );
          if (elemsHide.length === item.parentNode.children.length) {
            item.parentNode.classList.add("hidden");
            item.parentNode.parentNode.classList.add("hidden");
          } else {
            item.parentNode.classList.remove("hidden");
            item.parentNode.parentNode.classList.remove("hidden");
          }
        });
        const elemsHide = namesArr.filter(
          (item) => state.basket[item].checked === false
        );
        if (elemsHide.length === namesArr.length)
          deliveryDateReturnBlock.classList.add("hidden");
      } else {
        items.forEach((item, index) => {
          deliveryDateReturnBlock.classList.remove("hidden");
          const divCount = item.children[1];
          if (index) {
            const count = state.basket[item.id].count - 184;
            divCount.innerText = count;
            count === 1
              ? divCount.classList.add("hidden")
              : divCount.classList.remove("hidden");
          } else {
            divCount.innerText =
              state.basket[item.id].count < 185
                ? state.basket[item.id].count
                : 184;
            state.basket[item.id].count === 1
              ? divCount.classList.add("hidden")
              : divCount.classList.remove("hidden");
          }
          if (index && state.basket[item.id].count < 185) {
            item.classList.add("hidden");
            item.parentNode.classList.add("hidden");
            item.parentNode.parentNode.classList.add("hidden");
            return;
          }
          item.classList.remove("hidden");
          item.parentNode.classList.remove("hidden");
          item.parentNode.parentNode.classList.remove("hidden");
          item.parentNode.parentNode.parentNode.classList.remove("hidden");
        });
      }
    } else {
      if (!state.basket[item].checked || state.basket[item].delete) {
        items[0].classList.add("hidden");
        const elemsHide = [...items[0].parentNode.children].filter((item) =>
          item.classList.contains("hidden")
        );
        elemsHide.length === items[0].parentNode.children.length
          ? items[0].parentNode.classList.add("hidden")
          : items[0].parentNode.classList.remove("hidden");
      } else {
        if (state.basket[item].delete) return;
        items[0].classList.remove("hidden");
        items[0].parentNode.classList.remove("hidden");
        items[0].parentNode.parentNode.classList.remove("hidden");
        items[0].parentNode.parentNode.parentNode.classList.remove("hidden");
        deliveryDateReturnBlock.classList.remove("hidden");
        const divCount = items[0].children[1];
        divCount.innerText = state.basket[item].count;
        state.basket[item].count === 1
          ? divCount.classList.add("hidden")
          : divCount.classList.remove("hidden");
      }
    }
  });
}

function isValidInput(target, empty) {
  const { id } = target;
  let phoneRegExp;
  let error;
  let message;
  let text;
  let textTrue;
  const errors = {
    form_name: {
      message: "",
      messageTrue: "",
      text: "Укажите имя",
      textTrue: "Имя",
    },
    form_surname: {
      message: "",
      messageTrue: "",
      text: "Укажите фамилию",
      textTrue: "Фамилия",
    },
    form_itn: {
      reg: /^\d{14}?$/,
      message: "Проверьте ИНН",
      messageTrue: "Для таможенного оформления",
      text: "Укажите ИНН",
      textTrue: "ИНН",
    },
    form_tel: {
      reg: /(\+7)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g,
      message: "Формат: +7 999 999 99 99",
      messageTrue: "",
      text: "Укажите номер телефона",
      textTrue: "Телефон",
    },
    form_mail: {
      reg: /^\S+@\S+\.\S+$/g,
      message: "Проверьте адрес электронной почты",
      messageTrue: "",
      text: "Укажите электронную почту",
      textTrue: "Почта",
    },
  };
  phoneRegExp = errors[id].reg;
  error = errors[id].message;
  message = errors[id].messageTrue;
  text = errors[id].text;
  textTrue = errors[id].textTrue;
  if (target.value !== "") {
    const isValid = phoneRegExp ? phoneRegExp.test(target.value) : true;
    if (isValid) {
      if (empty) {
        target.parentNode.children[1].innerText = textTrue;
        target.parentNode.children[1].classList.remove("invalid_label");
      }
      target.parentNode.classList.remove("invalid");
      target.parentNode.children[2].innerText = message;
      target.parentNode.children[1].innerText = textTrue;
      target.parentNode.children[1].classList.remove("invalid_label");
      return false;
    } else {
      target.parentNode.classList.add("invalid");
      target.parentNode.children[2].innerText = error;
      if (empty) {
        target.parentNode.children[1].innerText = text;
        target.parentNode.children[1].classList.add("invalid_label");
      }
    }
  } else {
    if (empty) {
      target.parentNode.children[1].innerText = text;
      target.parentNode.children[1].classList.add("invalid_label");
      target.parentNode.classList.add("invalid");
      target.parentNode.children[2].innerText = error;
      return true;
    } else {
      target.parentNode.classList.remove("invalid");
      target.parentNode.children[2].innerText = message;
      target.parentNode.children[1].innerText = textTrue;
      target.parentNode.children[1].classList.remove("invalid_label");
    }
  }
}

function totalSumBlock() {
  const namesArr = Object.keys(state.basket);
  const totalSum = namesArr.reduce((acc, item) => {
    return state.basket[item].checked && !state.basket[item].delete
      ? acc + state.basket[item].price.newPrice * state.basket[item].count
      : acc;
  }, 0);
  totalCount.innerText = Math.round(totalSum).toLocaleString();
  const countItems = namesArr.reduce((acc, item) => {
    return state.basket[item].checked && !state.basket[item].delete
      ? acc + state.basket[item].count
      : acc;
  }, 0);
  totalCountItems.innerText = countItems.toLocaleString();
  nameItems.innerText = renderPhrase(countItems);
  const allOldCount = namesArr.reduce((acc, item) => {
    return state.basket[item].checked && !state.basket[item].delete
      ? acc + state.basket[item].price.oldPrice * state.basket[item].count
      : acc;
  }, 0);
  totalOldCount.innerText = Math.round(allOldCount).toLocaleString();
  discount.innerText = Math.round(totalSum - allOldCount).toLocaleString();
  if (orderCheckbox.checked) orderBtn.innerText = `Оплатить ${Sum()} сом`;
}

function renderPhrase(number, arr = ["товар", "товара", "товаров"]) {
  const lastOne = Number(number.toString().slice(-1));
  if (number > 4 && number < 15) return arr[2];
  if ([2, 3, 4].indexOf(lastOne) >= 0) return arr[1];
  if (lastOne === 1) return arr[0];
  return arr[2];
}

function Sum() {
  const namesArr = Object.keys(state.basket);
  const total = namesArr.reduce((acc, item) => {
    return state.basket[item].checked && !state.basket[item].delete
      ? acc + state.basket[item].price.newPrice * state.basket[item].count
      : acc;
  }, 0);
  return Math.round(total).toLocaleString();
}

function validation(form) {
  let error = [];
  const inputs = form.querySelectorAll(".form__box__input");
  inputs.forEach((inp) => error.push(isValidInput(inp, true)));
  let errorBool = error.includes(true);
  errorBool = !errorBool ? error.includes(undefined) : errorBool;
  return errorBool;
}

function inputsChecked() {
  const paymentNameArr = Object.keys(state.payment);
  inputsPaymentPopup.forEach((input) => {
    input.checked = state.payment[input.id].checked;
  });
}

function updatePaymentCard() {
  const divPayMain = main.querySelector(".payment__card__system");
  const divPayTotal = main.querySelector(".price__pay__method__main__img");

  const paymentArr = Object.keys(state.payment);
  paymentArr.forEach((item) => {
    if (state.payment[item].checked) {
      divPayMain.innerHTML = state.payment[item].html;
      divPayTotal.innerHTML = state.payment[item].html;
    }
  });
}

function changeMainDeliveryPopup(target) {
  btnChangeMainDeliveryPopup.forEach((item) => {
    item.id === target.id
      ? item.classList.add("active")
      : item.classList.remove("active");
  });
  if (target.id === "punkt") {
    mainPunctsPopup.classList.remove("hidden");
    mainAddressesPopup.classList.add("hidden");
  } else {
    mainPunctsPopup.classList.add("hidden");
    mainAddressesPopup.classList.remove("hidden");
  }
}

function updateCountBaskets() {
  const namesArr = Object.keys(state.basket);
  const count = namesArr.filter((item) => !state.basket[item].delete);
  if (count.length) {
    countBasket.innerText = count.length;
    countBasketMobile.innerText = count.length;
  } else {
    countBasket.classList.add("hidden");
    countBasketMobile.classList.add("hidden");
  }
}

basketItems.forEach((item) => {
  const favoriteBtn = item.querySelector(
    ".basket__item__count__actions_favorite"
  );
  const deleteBtn = item.querySelector(".basket__item__count__actions_delete");
  favoriteBtn.addEventListener("click", (e) => {
    state.basket[item.id].favorite = !state.basket[item.id].favorite;
    favoriteBtn.classList.toggle("isFavorite");
  });
  deleteBtn.addEventListener("click", (e) => {
    state.basket[item.id].delete = true;
    state.basket[item.id].checked = false;
    item.classList.add("hidden");
    totalSumBlock();
    deliveryBlock();
    allCheckedCheckbox();
    updateCountBaskets();
  });
});

btnHideList.addEventListener("click", (e) => {
  basketAccordion.classList.toggle("accordion_hide");
  updateTitleHideAccordion();
});

btnHideMissingList.addEventListener("click", (e) => {
  basketMissingAccordion.classList.toggle("accordion_missing_hide");
});

countAllBlocks.forEach((block) => {
  block.addEventListener("click", (e) => {
    const classListArr = [...e.target.classList];
    if (classListArr.includes("btn_disable")) return;
    const itemId = e.target.parentNode.parentNode.parentNode.id;
    if (classListArr.includes("decrement")) {
      state.basket[itemId].count;
      state.basket[itemId].count--;
    }
    if (classListArr.includes("increment")) {
      state.basket[itemId].count++;
    }
    totalSumBlock();
    deliveryBlock();
    updateCard(itemId);
  });
});

inputsItemCheckbox.forEach((input) => {
  input.addEventListener("click", (e) => {
    const { id } = e.target.parentNode.parentNode.parentNode;
    state.basket[id].checked = e.target.checked;
    totalSumBlock();
    allCheckedCheckbox();
    deliveryBlock();
  });
});

checkboxAll.addEventListener("click", (e) => {
  const { checked } = e.target;
  const namesArr = Object.keys(state.basket);
  namesArr.forEach((item) => {
    state.basket[item].checked = state.basket[item].delete ? false : checked;
  });
  inputsItemCheckbox.forEach((input) => {
    const { id } = input.parentNode.parentNode.parentNode;
    input.checked = state.basket[id].remove ? false : checked;
  });
  totalSumBlock();
  deliveryBlock();
});

btnDeliveryTotal.addEventListener("click", (e) => {
  deliveryPopup.classList.toggle("hidden");
});
btnDeliveryBlock.addEventListener("click", (e) => {
  deliveryPopup.classList.toggle("hidden");
});

btnCloseDeliveryPopup.addEventListener("click", (e) => {
  deliveryPopup.classList.toggle("hidden");
});

btnConfirmDeliveryPopup.addEventListener("click", (e) => {
  deliveryPopup.classList.toggle("hidden");
});

btnChangeMainDeliveryPopup.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    changeMainDeliveryPopup(e.target);
  });
});

itemsPunctsPopup.forEach((item) => {
  item.children[2].addEventListener("click", (e) => {
    item.classList.add("hidden");
  });
});

itemsAddressesPopup.forEach((item) => {
  item.children[2].addEventListener("click", (e) => {
    item.classList.add("hidden");
  });
});

inputsPaymentPopup.forEach((input) => {
  input.addEventListener("click", (e) => {
    state.payment.prechecked = e.target.id;
  });
});

btnPaymentBlock.addEventListener("click", (e) => {
  inputsChecked();
  paymentPopup.classList.toggle("hidden");
});
btnPaymentTotal.addEventListener("click", (e) => {
  inputsChecked();
  paymentPopup.classList.toggle("hidden");
});

btnClosePaymentPopup.addEventListener("click", (e) => {
  paymentPopup.classList.toggle("hidden");
});

btnConfirmPaymentPopup.addEventListener("click", (e) => {
  state.payment.prechecked;
  const paymentArr = Object.keys(state.payment);
  paymentArr.forEach((item) => {
    if (
      state.payment[item]?.checked ||
      state.payment[item]?.checked === false
    ) {
      item === state.payment.prechecked
        ? (state.payment[item].checked = true)
        : (state.payment[item].checked = false);
    }
  });
  updatePaymentCard();
  paymentPopup.classList.toggle("hidden");
});

inputName.addEventListener("blur", (e) => isValidInput(e.target));
inputName.addEventListener("input", (e) => {
  if (e.target.parentNode.classList.contains("invalid")) {
    isValidInput(e.target);
  }
});

inputSurname.addEventListener("blur", (e) => isValidInput(e.target));
inputSurname.addEventListener("input", (e) => {
  if (e.target.parentNode.classList.contains("invalid")) {
    isValidInput(e.target);
  }
});

inputItn.addEventListener("blur", (e) => isValidInput(e.target));
inputItn.addEventListener("input", (e) => {
  if (e.target.parentNode.classList.contains("invalid")) {
    isValidInput(e.target);
  }
});
inputItn.addEventListener("keypress", (e) => {
  if (!/\d+/g.test(e.key) || e.target.value.length === 14) e.preventDefault();
});

inputEmail.addEventListener("blur", (e) => {
  isValidInput(e.target);
});

inputEmail.addEventListener("input", (e) => {
  if (e.target.parentNode.classList.contains("invalid")) {
    isValidInput(e.target);
  }
});

inputTel.addEventListener("focus", () => {
  if (!inputTel.value) inputTel.value = "+7";
});

inputTel.addEventListener("keypress", (e) => {
  if (!/\d+/g.test(e.key) || e.target.value.length === 16) e.preventDefault();
  if (
    e.target.value.length === 2 ||
    e.target.value.length === 6 ||
    e.target.value.length === 10 ||
    e.target.value.length === 13
  ) {
    e.preventDefault();
    e.target.value += " " + e.key;
  }
});

inputTel.addEventListener("input", (e) => {
  if (e.target.parentNode.classList.contains("invalid")) {
    isValidInput(e.target);
  }
});

inputTel.addEventListener("blur", (e) => {
  isValidInput(e.target);
});

orderCheckbox.addEventListener("click", (e) => {
  const { checked } = e.target;
  orderBtn.innerText = checked ? `Оплатить ${Sum()} сом` : "Заказать";
});

orderBtn.addEventListener("click", (e) => {
  const isValid = validation(recipientForm);
  if (!isValid) {
    console.log("Отправка данных");
  } else {
    const { clientWidth } = document.documentElement;
    if (clientWidth < 721) {
      recipientForm.scrollIntoView(top);
    }
  }
});
>>>>>>> 095e8ca (LO)
