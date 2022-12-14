const topEl = document.querySelector(".top");

const btnEl = document.querySelector(".top__btn");

const popupEl = document.querySelector(".popup");

const closeIconEl = document.querySelector(".popup__close");

btnEl.addEventListener("click", () => {
    topEl.classList.add("top__active");
    popupEl.classList.remove("popup__active");
});

closeIconEl.addEventListener("click", () => {
    topEl.classList.remove("top__active");
    popupEl.classList.add("popup__active");
});

