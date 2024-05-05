$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Deliveries", "Exportation", "Storage", "Cargo", "Haulage"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Packaging", "Tracking", "Logistics", "Shipping", "Documenting"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



// Tracking Input Form
function validateInput() {
    var userInput = document.getElementById("inputField").value.trim().toUpperCase();
    if (userInput === "HN082ER7Y") {
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
      return true; // Allow form submission
    } else {
      document.getElementById("errorMessage").style.display = "block";
      document.getElementById("successMessage").style.display = "none";
      return false; // Prevent form submission
    }
  }



  document.getElementById("trackButton").addEventListener("click", function() {
    // Redirect to the desired webpage
    window.location.href = "./shipping.html";
});





/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    // reset: true,
})


sr.reveal(`.home-content, .title,
           .text-3, .contact-content, .carousel, .owl-carousel,
           .column, .left, .right`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.row, .info, .fields, .text-2,
           .serv-content`,{
    origin: 'left',
})

sr.reveal(`.skills-content, .text-1,
           .text-2a,
              `,{
    origin: 'right',
    interval: 100,
})