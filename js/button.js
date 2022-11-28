const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offstepLeft);
    const y = (event.pageY - btnEl.offstepTop);

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})