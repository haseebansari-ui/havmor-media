"use strict"


// 	Scroll Header

const header = document.querySelector("header");

if(header) {
    window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("h-scroll");
  } else {
    header.classList.remove("h-scroll");
  }
});
}


const menueOpenBtn = document.querySelector(".menue-bar");
const closeOpenBtn = document.querySelector(".close-menue");
const openMenue = document.querySelector(".header-link-bx")

if (menueOpenBtn && openMenue) {

    menueOpenBtn.addEventListener("click", () => {
        openMenue.classList.add("active");
    });

}

if (closeOpenBtn && openMenue) {

    closeOpenBtn.addEventListener("click", () => {
        openMenue.classList.remove("active");
    });

}

// Header Accordion

// const accordions = document.querySelectorAll(".header-link-acc");

// accordions.forEach((accordion) => {

//     const title = accordion.querySelector(".header-link-title");
//     const content = accordion.querySelector(".header-link-cnct");

//     title.addEventListener("click", () => {

//         // Close all other accordions
//         accordions.forEach((item) => {

//             if(item !== accordion){

//                 item.classList.remove("active");

//                 item.querySelector(".header-link-cnct").style.maxHeight = null;

//             }

//         });

//         accordion.classList.toggle("active");

//         if(content.style.maxHeight){

//             content.style.maxHeight = null;

//         }else{

//             content.style.maxHeight = content.scrollHeight + "px";

//         }

//     });

// });


const accordions = document.querySelectorAll(".header-link-acc");

accordions.forEach((accordion) => {

    const title =
        accordion.querySelector(".header-link-title");

    const content =
        accordion.querySelector(".header-link-cnct");

    if (!title || !content) {
        return;
    }

    title.addEventListener("click", () => {

        accordions.forEach((item) => {

            if (item !== accordion) {

                item.classList.remove("active");

                const otherContent =
                    item.querySelector(".header-link-cnct");

                if (otherContent) {
                    otherContent.style.maxHeight = null;
                }

            }

        });

        accordion.classList.toggle("active");

        if (content.style.maxHeight) {

            content.style.maxHeight = null;

        } else {

            content.style.maxHeight =
                content.scrollHeight + "px";

        }

    });

});


// About us animation

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".text", {

//     fontSize: "2rem",

//     ease: "none",

//     scrollTrigger: {

//         trigger: ".about-sec",

//         start: "top 70%",

//         end: "bottom 30%",

//         scrub: true

//     }

// });

const aboutSection = document.querySelector(".about-sec");
const aboutText = document.querySelector(".text");

if (aboutSection && aboutText) {

    gsap.to(aboutText, {

        fontSize: "2rem",

        ease: "none",

        scrollTrigger: {
            trigger: aboutSection,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true
        }

    });

}



/// accordian


// const careerAccordions = document.querySelectorAll(".career-acc-bx");

// careerAccordions.forEach((accordion) => {

//     const accHeader = accordion.querySelector(".career-header");
//     const content = accordion.querySelector(".careers-cnct-bx");

//     accHeader.addEventListener("click", () => {

//         careerAccordions.forEach((item) => {

//             if (item !== accordion) {

//                 item.classList.remove("active");

//                 const otherContent =
//                     item.querySelector(".careers-cnct-bx");

//                 otherContent.style.maxHeight = null;
//             }

//         });

//         accordion.classList.toggle("active");

//         if (accordion.classList.contains("active")) {

//             content.style.maxHeight =
//                 content.scrollHeight + "px";

//         } else {

//             content.style.maxHeight = null;

//         }

//     });

// });

const careerAccordions =
    document.querySelectorAll(".career-acc-bx");

careerAccordions.forEach((accordion) => {

    const accHeader =
        accordion.querySelector(".career-header");

    const content =
        accordion.querySelector(".careers-cnct-bx");

    if (!accHeader || !content) {
        return;
    }

    accHeader.addEventListener("click", () => {

        careerAccordions.forEach((item) => {

            if (item !== accordion) {

                item.classList.remove("active");

                const otherContent =
                    item.querySelector(".careers-cnct-bx");

                if (otherContent) {
                    otherContent.style.maxHeight = null;
                }

            }

        });

        accordion.classList.toggle("active");

        if (accordion.classList.contains("active")) {

            content.style.maxHeight =
                content.scrollHeight + "px";

        } else {

            content.style.maxHeight = null;

        }

    });

});


// const labels = document.querySelectorAll('.career-header');

// labels.forEach((item)=>{
//   item.addEventListener("click", ()=>{
//     const parent = item.parentElement;

//     const closeAcc = document.querySelectorAll('.careers-cnct-bx');

//     closeAcc.forEach((close)=>{
//       close.addEventListener("click", () =>{
//         if(close !== parent){
//           parent.classList.remove('active');
//         }
//       })
//     })

    
//     parent.classList.toggle('active');
    
//   })
// });


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

// const dot = document.querySelector(".cursor-dot");
// const ring = document.querySelector(".cursor-ring");

// let mouseX = 0;
// let mouseY = 0;

// let ringX = 0;
// let ringY = 0;

// // Mouse Position

// document.addEventListener("mousemove",(e)=>{

//     mouseX = e.clientX;
//     mouseY = e.clientY;

//     dot.style.left = mouseX + "px";
//     dot.style.top = mouseY + "px";

// });


// // Smooth Ring Animation
// function animateCursor(){

//     ringX += (mouseX - ringX) * 0.10;
//     ringY += (mouseY - ringY) * 0.10;

//     ring.style.left = ringX + "px";
//     ring.style.top = ringY + "px";

//     requestAnimationFrame(animateCursor);
// }

// animateCursor();


// const links = document.querySelectorAll("button, .btn, .card, .card-content .btn-cta , .btn-all, .offer-main, .header-link-bx");

// links.forEach(item=>{

//     item.addEventListener("mouseenter",()=>{

//         ring.classList.add("active");
//         dot.classList.add("active");

//     });

//     item.addEventListener("mouseleave",()=>{

//         ring.classList.remove("active");
//         dot.classList.remove("active");

//     });

// });

// const linksDiv = document.querySelectorAll(".offer-link .btn-all");

// linksDiv.forEach(item=>{

//     item.addEventListener("mouseenter",()=>{

//         ring.style.background ="transparent";
//         ring.style.borderColor = "#ab01ab";
        
//         dot.style.background = "#ab01ab";

//     });

//     item.addEventListener("mouseleave",()=>{

//         // ring.classList.remove("active");
//         // dot.classList.remove("active");

//         ring.style.background ="rgba(46, 46, 46, 0.12)";
//         ring.style.borderColor = "#ab01ab";
        
//         dot.style.background = "#ab01ab";

//     });

// });


// const offerContentCard = document.querySelectorAll(".offer-content");

// offerContentCard.forEach(item=>{

//     item.addEventListener("mouseenter",()=>{

//         ring.style.background ="transparent";
//         ring.style.borderColor = "#fff";
        
//         dot.style.background = "#fff";

//     });

//     item.addEventListener("mouseleave",()=>{

//         // ring.classList.remove("active");
//         // dot.classList.remove("active");

//         ring.style.background ="rgba(46, 46, 46, 0.12)";
//         ring.style.borderColor = "#ab01ab";
        
//         dot.style.background = "#ab01ab";

//     });

// });


// const dot = document.querySelector(".cursor-dot");
// const ring = document.querySelector(".cursor-ring");

// if (dot && ring) {

//     let mouseX = 0;
//     let mouseY = 0;

//     let ringX = 0;
//     let ringY = 0;


//     // Mouse position

//     document.addEventListener("mousemove", (e) => {

//         mouseX = e.clientX;
//         mouseY = e.clientY;

//         dot.style.left = mouseX + "px";
//         dot.style.top = mouseY + "px";

//     });


//     // Smooth ring animation

//     function animateCursor() {

//         ringX += (mouseX - ringX) * 0.10;
//         ringY += (mouseY - ringY) * 0.10;

//         ring.style.left = ringX + "px";
//         ring.style.top = ringY + "px";

//         requestAnimationFrame(animateCursor);

//     }

//     animateCursor();


//     // Cursor hover elements

//     const links = document.querySelectorAll(
//         "button, .btn, .card, .card-content .btn-cta, .btn-all, .offer-main, .header-link-bx"
//     );

//     links.forEach((item) => {

//         item.addEventListener("mouseenter", () => {

//             ring.classList.add("active");
//             dot.classList.add("active");

//         });

//         item.addEventListener("mouseleave", () => {

//             ring.classList.remove("active");
//             dot.classList.remove("active");

//         });

//     });


//     // Offer links

//     const linksDiv =
//         document.querySelectorAll(".offer-link .btn-all");

//     linksDiv.forEach((item) => {

//         item.addEventListener("mouseenter", () => {

//             ring.style.background = "transparent";
//             ring.style.borderColor = "#ab01ab";

//             dot.style.background = "#ab01ab";

//         });

//         item.addEventListener("mouseleave", () => {

//             ring.style.background =
//                 "rgba(46, 46, 46, 0.12)";

//             ring.style.borderColor = "#ab01ab";

//             dot.style.background = "#ab01ab";

//         });

//     });


//     // Offer content cards

//     const offerContentCard =
//         document.querySelectorAll(".offer-content");

//     offerContentCard.forEach((item) => {

//         item.addEventListener("mouseenter", () => {

//             ring.style.background = "transparent";
//             ring.style.borderColor = "#fff";

//             dot.style.background = "#fff";

//         });

//         item.addEventListener("mouseleave", () => {

//             ring.style.background =
//                 "rgba(46, 46, 46, 0.12)";

//             ring.style.borderColor = "#ab01ab";

//             dot.style.background = "#ab01ab";

//         });

//     });

// }


const bubbleContainer = document.querySelector(".cursor-bubbles");

let lastBubbleTime = 0;

document.addEventListener("mousemove", (e) => {

    const currentTime = Date.now();

    /*
       Creates bubbles only every 50ms.
       This prevents too many bubbles.
    */

    if (currentTime - lastBubbleTime < 50) {
        return;
    }

    lastBubbleTime = currentTime;


    /* Create bubble */

    const bubble = document.createElement("span");

    bubble.classList.add("cursor-bubble");


    /* Cursor position */

    bubble.style.left = e.clientX + "px";
    bubble.style.top = e.clientY + "px";


    /* Random movement */

    const moveX = (Math.random() - 0.5) * 60;
    const moveY = (Math.random() - 0.5) * 60;


    bubble.style.setProperty("--move-x", moveX + "px");
    bubble.style.setProperty("--move-y", moveY + "px");


    /* Random size */

    const size = Math.random() * 8 + 6;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";


    /* Add bubble */

    bubbleContainer.appendChild(bubble);


    /* Remove after animation */

    setTimeout(() => {

        bubble.remove();

    }, 1200);

});



// Copyright Year

const yearChange = document.getElementById("year");

if (yearChange) {
    yearChange.textContent = new Date().getFullYear();
}

// Form Password Hide & show (Login & Signup)

const showHide = document.querySelector('.eye-icon-bx');
const showPass = document.querySelector('.close-eye-icon');
const hidePass = document.querySelector('.open-eye-icon');
const inputPass = document.querySelector('.input-pss-field');


if(showHide){
    showHide.addEventListener("click", ()=>{
        if(inputPass.type === "password"){
            inputPass.type = "text";
            hidePass.classList.add('active');
            showPass.classList.add('active');
        }else{
            inputPass.type = "password";
            hidePass.classList.remove('active');
            showPass.classList.remove('active');
        }
    })
};


// Form validation

const errName = document.getElementById("err-name");
const errEmail = document.getElementById("err-email");
const errMobile = document.getElementById("err-mobile");
const errPassword = document.getElementById("err-pass");
const form = document.getElementById("form");



function validateName(){
    const inputName = document.getElementById('name-input');
    const nameValue = inputName.value.trim();
    

    if(nameValue.length === 0){
        errName.innerText = "Enter your name";        
        inputName.style.border = "1px solid #ff0000";
        return false;
    }

    if(!nameValue.match(/^[a-zA-Z ]+$/)){
        errName.innerText = "Name should contain letters only";
        inputName.style.border = "1px solid #ff0000";
        return false;
    }

    errName.innerText = "";
    inputName.style.border = "1px solid #27c93f";
    return true;

}

function validateSignupEmail(){
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value.trim();

    if(emailValue.length === 0 ){
        errEmail.innerText = "Email is Required";
        emailInput.style.border = "1px solid #ff0000";
        return false;
        
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailValue)){
        errEmail.innerText = "Please enter a valid email address";
        emailInput.style.border = "1px solid red";
        return false;
    }

    errEmail.innerText = "";
    emailInput.style.border = "1px solid #27c93f";
    return true;

}

function validateMobile(){
    const mobileInput = document.getElementById("mobile-input");
    const mobileValue = mobileInput.value.trim();

    if(mobileValue.length === 0){
        errMobile.innerText = "Mobile no. is required";
        mobileInput.style.border = "1px solid #ff0000";
        return false
    }

    const mobilePattern = /^[0-9]+$/;

    if(!mobilePattern.test(mobileValue)){
        errMobile.innerText = "Mobile no. should contain number's only";
        mobileInput.style.border = "1px solid #ff0000";
        return false
    }

    if(mobileValue.length < 10){
        errMobile.innerText = "Mobile no. should contain 10 number's only";
        mobileInput.style.border = "1px solid #ff0000";
        return false
    }

    if (mobileValue.length === 10) {

        errMobile.innerText = "";

        mobileInput.style.border = "1px solid #27c93f";

        return true;
    }

    errMobile.innerText = "";
    mobileInput.style.border = "1px solid #27c93f";
    return true;

}


function validateSignupPassword(){
    const signupPassInput = document.getElementById("signup-pass");
    const signupValue = signupPassInput.value.trim();

    if(signupValue.length === 0){
        errPassword.innerText = "Password is Required";
        signupPassInput.style.border = "1px solid #ff0000";
        return false
    }
 
    
    if(signupValue.length < 8){
        errPassword.innerText = "Password must have at least 8 characters";
        signupPassInput.style.border = "1px solid #ff0000";
        return false
    }

    errPassword.innerText = "";
    signupPassInput.style.border = "1px solid #27c93f";
    return true;

}

if(form){
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const nameValid = validateName();
        const signupEmailValidate = validateSignupEmail();
        const mobileValidate = validateMobile();
        const signupPassValidate = validateSignupPassword();
        

        if(!nameValid || !signupEmailValidate || !mobileValidate || !signupPassValidate){
            return;
        }

        window.window.location.href = "login.html";
        
    })




}

//  Login form validation 

const loginFormValidation = document.getElementById('login-form');

function loginValidateEmail(){
    const logEmailInput = document.getElementById('log-email');
    const logEmailvalue = logEmailInput.value.trim();

    if(logEmailvalue.length === 0){
        errEmail.innerText = "Email is Required";
        logEmailInput.style.border = "1px solid #ff0000";
        return false;    
    }

    const loginEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!loginEmailPattern.test(logEmailvalue)){
        errEmail.innerText = "Please enter a valid email address";
        logEmailInput.style.border = "1px solid red";
        return false;
    }

    errEmail.innerText = "";
    logEmailInput.style.border = "1px solid #27c93f";
    return true;
}

function logPasswordValidate(){
    const logPasswordInput = document.getElementById('log-pass');
    const logPasswordValue = logPasswordInput.value.trim();

    if(logPasswordValue.length === 0){
        errPassword.innerText = "Password is Required ";
        logPasswordInput.style.border = "1px solid #ff0000";
        return false
    }

    if(logPasswordValue.length < 8){
        errPassword.innerText = "Password must have at least 8 characters";
        logPasswordInput.style.border = "1px solid #ff0000";
        return false
    }

    errPassword.innerText = "";
    logPasswordInput.style.border = "1px solid #27c93f";
    return true;
}


if(loginFormValidation){
    loginFormValidation.addEventListener('submit', (e)=>{
        e.preventDefault();

        const loginEmailValidate = loginValidateEmail();
        const loginPasswordValidate = logPasswordValidate();

        if(!loginEmailValidate || !loginPasswordValidate){
            return;
        }
        

        window.window.location.href = "index.html";
            
    })

}


 // 4. Social & Influencer Flywheel Node Switcher
  const creatorNodes = document.querySelectorAll(".creator-node");
  creatorNodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      creatorNodes.forEach(n => n.classList.remove("active-node"));
      node.classList.add("active-node");
      const engValue = node.getAttribute("data-engagement");
      const engOutput = document.getElementById("creator-live-engagement");
      if (engOutput) engOutput.innerText = engValue;
    });
  });



  



