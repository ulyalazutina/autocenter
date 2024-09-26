const formElement = document.querySelector('.info__form');

const modal = document.querySelector('.modal');
const modalName = document.querySelector('.modal__name');
const modalPhone = document.querySelector('.modal__phone');

const inputPhone = document.getElementById('number');
const inputName = document.getElementById('name');
const inputMsq = document.getElementById('msq');
const inputRules = document.getElementById('rules');

const errorName = document.getElementById('error-name');
const errorPhone = document.getElementById('error-phone');
const errorRulese = document.getElementById('error-rules');
const errorAll = document.querySelectorAll('.error');



export const getDataForm = () => {
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(formElement);
        modal.classList.remove('hide');
        modalName.innerHTML = `Ваше имя: ${formData.get("name")}`;
        modalPhone.innerHTML = `Ваш телефон: ${formData.get("number")}`;
        setTimeout(() => {
            modal.classList.add('hide'); 
            inputPhone.value = "";
            inputName.value = "";
            inputMsq.value = "";
            inputRules.setAttribute('checked', false);
        }, 5000);
        formData.delete("name")
    })
}

export const validateForm = () => {
    inputName.addEventListener('input', (e) => {
        if (e.target.value === "") {
            inputName.style.border = "1px solid rgb(230, 87, 87)";
            errorName.classList.remove("hide");
            errorName.innerHTML = "Обязательное поле"
        } else {
            inputName.style.border = "none";
            errorName.classList.add("hide");
        }
    });

    inputPhone.addEventListener('input', (e) => {

        if (e.target.value === "+7 " || e.target.value === "+7 (") {
            inputPhone.style.border = "1px solid rgb(230, 87, 87)";
            errorPhone.classList.remove("hide");
            errorPhone.innerHTML = "Обязательное поле"
        } else {
            inputPhone.style.border = "none";
            errorPhone.classList.add("hide");
        }

    })

    inputPhone.addEventListener('change', (e) => {

        if (e.target.value.length < 18) {
            inputPhone.style.border = "1px solid rgb(230, 87, 87)";
            errorPhone.classList.remove("hide");
            errorPhone.innerHTML = "Слишком короткий номер"
        } else {
            inputPhone.style.border = "none";
            errorPhone.classList.add("hide");
        }

    })

    inputRules.addEventListener('change', () => {
        if (!inputRules.checked) {
            inputRules.style.border = "1px solid rgb(230, 87, 87)";
            errorRulese.classList.remove("hide");
            errorRulese.innerHTML = "Обязательное поле"
        } else {
            inputRules.style.border = "none";
            errorRulese.classList.add("hide");
        }
    })
}

