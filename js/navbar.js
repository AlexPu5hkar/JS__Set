const navbarEl = document.querySelector (".navbar");

const buttomEl = document.querySelector(".buttom");

console.log(navbarEl.offsetHeight);

console.log(buttomEl.offsetTop);

window.addEventListener("scroll", () => {
    if(window.scrollY > 
        buttomEl.offsetTop - 
        navbarEl.offsetHeight - 50){
            navbarEl.classList.add("active")
        }else {
            navbarEl.classList.remove("active");
        }
    
});