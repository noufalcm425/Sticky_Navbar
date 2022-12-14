const navbarEl=document.querySelector(".navbar");

const bottomContainereEl =document.querySelector(".bottom-container");

console.log(navbarEl.offset)

console.log(bottomContainereEl.offsetTOP);

window.addEventListener("scroll",()=>{
    if(window.scrollY >
        bottomContainereEl.offsetTop-
        navbarEl.offsetHeight - 50){
            navbarEl.classList.add("active")
        }else{
            navbarEl.classList.remove("active")
        }

});