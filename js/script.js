"use strict"

const header = document.querySelector("header")
const menueOpenBtn = document.querySelector(".menue-bar");
const closeOpenBtn = document.querySelector(".close-menue");
const openMenue = document.querySelector(".header-link-bx")

if(menueOpenBtn){
    menueOpenBtn.addEventListener('click', ()=>{
        openMenue.classList.add('active');
        header.classList.add('active');
    })
}

if(closeOpenBtn){
    closeOpenBtn.addEventListener('click', ()=>{
        openMenue.classList.remove('active');
        header.classList.remove('active');
    })
}

// Header Accordion

const accordions = document.querySelectorAll(".header-link-acc");

accordions.forEach((accordion) => {

    const title = accordion.querySelector(".header-link-title");
    const content = accordion.querySelector(".header-link-cnct");

    title.addEventListener("click", () => {

        // Close all other accordions
        accordions.forEach((item) => {

            if(item !== accordion){

                item.classList.remove("active");

                item.querySelector(".header-link-cnct").style.maxHeight = null;

            }

        });

        accordion.classList.toggle("active");

        if(content.style.maxHeight){

            content.style.maxHeight = null;

        }else{

            content.style.maxHeight = content.scrollHeight + "px";

        }

    });

});



// About us animation

gsap.registerPlugin(ScrollTrigger);

gsap.to(".text", {

    fontSize: "2rem",

    ease: "none",

    scrollTrigger: {

        trigger: ".about-sec",

        start: "top 70%",

        end: "bottom 30%",

        scrub: true

    }

});



// accordian


const labels = document.querySelectorAll('.acc-bx');

labels.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const parent = item.parentElement;

    const closeAcc = document.querySelectorAll('.acc-title');

    closeAcc.forEach((close)=>{
      close.addEventListener("click", () =>{
        if(close !== parent){
          parent.classList.remove('active');
        }
      })
    })

    
    parent.classList.toggle('active');
    
  })
})

