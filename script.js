
document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector(".header");
let nodes = document.querySelectorAll('.about__item');


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

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

});