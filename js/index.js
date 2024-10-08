import { getDataForm, validateForm } from "./form.js";
import { renderCatalog } from "./renderCatalog.js";
import { renderReviews } from './renderReviews.js';
import { slider } from './slider.js';

const containerList = document.querySelector('.header__list');
const titleList = document.querySelector('.header__inner');
const burgerBtn = document.querySelector('.header__burger');
const navBox = document.querySelector('.header__nav-box');
const inputPhone = document.getElementById('number');


window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"]').forEach(el => {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          if (document.querySelector('.header__nav-mobile')) {
            navBox.classList.remove('header__nav-mobile');
            burgerBtn.classList.remove('header__close');
          }
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

    IMask(
        inputPhone,
        {mask: '+{7} (000) 000-00-00'}
    )

    titleList.addEventListener('click', () => {
        containerList.classList.toggle('hide');
    })
    
    
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('header__close');
        navBox.classList.toggle('header__nav-mobile');
    })
    
})



renderCatalog();
renderReviews();
slider();
getDataForm();
validateForm();




