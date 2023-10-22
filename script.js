
document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector(".header");
let nodes = document.querySelectorAll('.about__item');
let btns=document.querySelectorAll('.nav');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let activeButton = document.querySelector(".active");
        
        if (activeButton) {
            activeButton.classList.remove("active");
        }

        this.classList.add("active");
    });
}

nodes.forEach((node, index) => {
    if ((index + 1) % 2 === 0) {
        node.style.marginTop = '200px';
    }
});
window.addEventListener("scroll", () => {
    
    if (window.scrollY > 130) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});