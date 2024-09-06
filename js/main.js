var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    766: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },
  }
});

//   var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

// navbar scroll

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
})


// email js

// document.querySelector(".form-btn").addEventListener('click', (e)=>{
//   e.preventDefault();

//     let agreed = "";
//     if (document.getElementById("invalidCheck2").checked === true) {
//       agreed = "Agreed";
//     }

//     let parms = {
//       service: document.getElementById("validationDefault04").value,
//       agree: agreed,
//       message: document.getElementById("exampleFormControlTextarea1").value,
//       from_name: document.getElementById("validationDefault01").value,
//       from_phone: document.getElementById("validationDefault02").value,
//       from_email: document.getElementById("validationDefaultUsername").value,
//     }

//     emailjs.send("service_t2sthwq", "template_czhfoj7", parms).then(()=>{
//       parms;
//       alert("Your message is sent. We will get back to you.");
//     })

//   })

function sendEmail() {

  let agreed = "";
  if (document.getElementById("invalidCheck2").checked === true) {
    agreed = "Agreed";
  }

  let parms = {
    service: document.getElementById("validationDefault04").value,
    agree: agreed,
    message: document.getElementById("exampleFormControlTextarea1").value,
    from_name: document.getElementById("validationDefault01").value,
    from_phone: document.getElementById("validationDefault02").value,
    from_email: document.getElementById("validationDefaultUsername").value,
  }

  emailjs.send("service_t2sthwq", "template_czhfoj7", parms).then(() => {
    parms;
    alert("Your message is sent. We will get back to you.");
  })


  document.getElementById("validationDefault04").value = "";
  document.getElementById("exampleFormControlTextarea1").value = "";
  document.getElementById("validationDefault01").value = "";
  document.getElementById("validationDefault02").value = "";
  document.getElementById("validationDefaultUsername").value = "";
  document.getElementById("invalidCheck2").checked = false;


}