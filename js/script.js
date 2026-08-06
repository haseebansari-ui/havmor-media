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
        // header.classList.add('active');
    })
}

if(closeOpenBtn){
    closeOpenBtn.addEventListener('click', ()=>{
        openMenue.classList.remove('active');
        // header.classList.remove('active');
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


// const labels = document.querySelectorAll('.prss-title');

// labels.forEach((item)=>{
//   item.addEventListener("click", ()=>{
//     const parent = item.parentElement;

//     const closeAcc = document.querySelectorAll('.process-cntnt-bx');

//     closeAcc.forEach((close)=>{
//       close.addEventListener("click", () =>{
//         if(close !== parent){
//           parent.classList.remove('active');
//         }
//       })
//     })

    
//     parent.classList.toggle('active');
    
//   })
// })


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
});


// custom cursor

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

// Mouse Position

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

});


// Smooth Ring Animation
function animateCursor(){

    ringX += (mouseX - ringX) * 0.10;
    ringY += (mouseY - ringY) * 0.10;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


const links = document.querySelectorAll("button, .btn, .card, .card-content .btn-cta , .btn-all, .offer-main, .header-link-bx");

links.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        ring.classList.add("active");
        dot.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        ring.classList.remove("active");
        dot.classList.remove("active");

    });

});

const linksDiv = document.querySelectorAll(".offer-link .btn-all");

linksDiv.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        ring.style.background ="transparent";
        ring.style.borderColor = "#ab01ab";
        
        dot.style.background = "#ab01ab";

    });

    item.addEventListener("mouseleave",()=>{

        // ring.classList.remove("active");
        // dot.classList.remove("active");

        ring.style.background ="rgba(46, 46, 46, 0.12)";
        ring.style.borderColor = "#ab01ab";
        
        dot.style.background = "#ab01ab";

    });

});


const offerContentCard = document.querySelectorAll(".offer-content");

offerContentCard.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        ring.style.background ="transparent";
        ring.style.borderColor = "#fff";
        
        dot.style.background = "#fff";

    });

    item.addEventListener("mouseleave",()=>{

        // ring.classList.remove("active");
        // dot.classList.remove("active");

        ring.style.background ="rgba(46, 46, 46, 0.12)";
        ring.style.borderColor = "#ab01ab";
        
        dot.style.background = "#ab01ab";

    });

});



// Copyright Year

document.getElementById("year").textContent = new Date().getFullYear();


