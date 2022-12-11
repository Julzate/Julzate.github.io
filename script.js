const btn = document.getElementById("menu-button")
const nav = document.getElementById("menu") 

function navToggle(){
    btn.classList.toggle("open"),
    nav.classList.toggle("hidden")
    document.body.classList.toggle("no-scroll")
}

btn.addEventListener("click", navToggle);

// carousel

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1 // ? works as a conditional with a condition previosuly defined if the conditiion is true : otherwise this happens 
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        //loop
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length ) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});

// Email Validation
const inputBtn = document.querySelector("#input-btn") 

inputBtn.addEventListener("click", ()=>{
    var form = document.querySelector("#email-form")
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    var email = document.querySelector("#email").value
    var text = document.querySelector("#text")

    if(email.match(pattern)){
        text.innerText = "Successfuly registered."
        text.style.color = "green"
    }
    else{
        text.innerText = "Invalid email, please try again."
        text.style.color = "red"
    }
    if(email === ""){
        text.innerText = "Value empty, please try again."
        text.style.color = "red"
    }


})






