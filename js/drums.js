const kits = ["crash", "kick", "share", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach(kit => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("drum__btn");
    btnEl.innerText = kit;
    containerEl.appendChild(btnEl);
    btnEl.style.backgroundImage = "url(img/" + kit + ".png";
    const audioEl = document.createElement("audio");
    audioEl.src = "sound/" + kit + ".mp3";
    containerEl.appendChild (audioEl);
    btnEl.addEventListener ("click", () => {
        audioEl.play();
    });
    window.addEventListener("keydown", (event) => {
        if(event.key === kit.slice(0.1)) {
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
        };
    });
});