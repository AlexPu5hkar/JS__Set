const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
    const heartEl = document.createElement("heart");
    heartEl.style.left = xPos + "px";
    heartEl.style.top = yPos + "px";
    bodyEl.appendChild(heartEl);
})