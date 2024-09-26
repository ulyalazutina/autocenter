import { catalogData } from "./catalogData.js";
import { formatLength } from "./libs/formatLength.js";
import { formatPrice } from "./libs/formatPrice.js";

const containerCatalog = document.querySelector('.catalog__items');

export const renderCatalog = () => {
    const catalogItems = catalogData.map((item) => {
        return `
        <div class="catalog__item">
            <div class="catalog__img-box"> 
                <img class="catalog__img" src="${item.img}" alt="${item.title}" />
            </div>
            <h3 class="catalog__heading">${formatLength(item.title)}</h3>
            <div class="catalog__box">
              <p class="catalog__text">${item.year}</p>
              <p class="catalog__text">${item.capacity} л</p>
              <p class="catalog__text">${item.wheels}</p>
              <p class="catalog__text">${item.fuel}</p>
              <p class="catalog__text">${item.transmission}</p>
            </div>
            <div class="catalog__wrapper">
              <p class="catalog__price">${formatPrice(item.price)}</p>
              <button type="button" class="catalog__btn">
                Оставить заявку
              </button>
            </div>
        </div>
        `;
    }).join('');

    containerCatalog.innerHTML = catalogItems;
}