const imageContainerEl = document.querySelector(".random__container");

const btnEl = document.querySelector(".random__btn");

btnEl.addEventListener("click", () => {
    addNewImages();
});

function addNewImages() {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() *2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
};