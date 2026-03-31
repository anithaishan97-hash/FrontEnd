const button=document.querySelector(".hamburger")
const nav1=document.querySelector(".pad")
const nav2=document.querySelector(".sb")
const responsivenav=document.querySelector(".responsivenav")
button.addEventListener("click",()=>{
    responsivenav.classList.toggle("add")
})