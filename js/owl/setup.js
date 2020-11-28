$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false, // o true habilita em cima das oooo de navegação  <  >    <<< essas flechas também para navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})