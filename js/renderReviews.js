import { reviewsData } from "./reviewsData.js";

const containerReviews = document.querySelector('.swiper-wrapper');

const getCountStars = (raiting) => {
    const yellowStar =     
            `<svg class="reviews__star reviews__star--yellow" width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs/>
                    <path id="路径" d="M9.09 2.38C9.5 1.69 10.49 1.69 10.9 2.38L13.22 6.38L17.75 7.36C18.53 7.53 18.84 8.48 18.3 9.08L15.22 12.53L15.69 17.13C15.77 17.92 14.96 18.51 14.23 18.19L9.99 16.32L5.76 18.19C5.03 18.51 4.22 17.92 4.3 17.13L4.77 12.53L1.69 9.08C1.15 8.48 1.46 7.53 2.24 7.36L6.77 6.38L9.09 2.38Z" fill-opacity="1.000000" fill-rule="nonzero"/>
            </svg>`;
    const grayStar =     
            `<svg class="reviews__star reviews__star--grey" width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs/>
                    <path id="路径" d="M9.09 2.38C9.5 1.69 10.49 1.69 10.9 2.38L13.22 6.38L17.75 7.36C18.53 7.53 18.84 8.48 18.3 9.08L15.22 12.53L15.69 17.13C15.77 17.92 14.96 18.51 14.23 18.19L9.99 16.32L5.76 18.19C5.03 18.51 4.22 17.92 4.3 17.13L4.77 12.53L1.69 9.08C1.15 8.48 1.46 7.53 2.24 7.36L6.77 6.38L9.09 2.38Z" fill-opacity="1.000000" fill-rule="nonzero"/>
            </svg>`;

    const raitingYellow = yellowStar.repeat(raiting);
    const raitingGrey = grayStar.repeat(5-raiting);
    const result = raitingYellow + raitingGrey;
    return result;
}

export const renderReviews = () => {
    const reviews = reviewsData.map((item) => {
        return `
            <div class="swiper-slide reviews__item">
                <img src="${item.photo}" alt="${item.name}">
                <div class="reviews__inner">
                    <h6 class="reviews__name">${item.name}</h6>
                    <div class="reviews__box">
                    ${getCountStars(item.raiting)}
                    </div>
                    <p class="reviews__text">${item.text}</p>
                    <time class="reviews__date" datetime="07.10.2023">${item.date}</time>
                </div>
            </div>
        `;
    }).join("");
    containerReviews.innerHTML = reviews;
}