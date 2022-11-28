const textareaEl = document.getElementById("textarea")
const totalEl = document.getElementById("total")
const remainEl = document.getElementById("remain")

textareaEl.addEventListener("keyup", ()=> {
    updateCounter();
});

updateCounter()

function updateCounter(){
    totalEl.innerText = textareaEl.value.length;
    remainEl.innerText = 
    textareaEl.getAttribute("maxLength") -
    textareaEl.value.length;
}
