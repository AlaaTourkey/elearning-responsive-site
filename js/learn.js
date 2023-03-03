$(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : true,
    
});

$('.testimonial-carousel').owlCarousel({
    center: true,
    items:3,
    loop:true,
    nav : false,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout:2000,
    dots:true,
    margin:20,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

