const btn = document.querySelector(".btn-speach")
const textContent = document.querySelector(".text-content")

let btnText = false;

btn.addEventListener("click",()=>{
    
    btn.classList.toggle("btn-hover")
    btn.textContent = btnText? "Iniciar a fala":"Terminar a fala"
    btnText = btnText?false:true
    
})