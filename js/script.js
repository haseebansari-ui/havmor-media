"use strict"


// 	Scroll Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("h-scroll");
  } else {
    header.classList.remove("h-scroll");
  }
});


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



/// accordian


const labels = document.querySelectorAll('.prss-title');

labels.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const parent = item.parentElement;

    const closeAcc = document.querySelectorAll('.process-cntnt-bx');

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


// Case study Animation 

document.querySelectorAll(".sticky-card").forEach((card) => {
    gsap.to(card,{
        scale:0.7,
        scrollTrigger:{
            trigger:card,
            start:"top 15%",
            end:"bottom 15%",
            markers: false,
            scrub: true,
        }
    })
})