(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
 


// automatic counter for team section
    document.addEventListener("DOMContentLoaded", function() {
        function animateCounter(el, target, duration) {
            let start = 0;
            let startTime = null;
            function updateCounter(currentTime) {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                el.textContent = Math.floor(progress * (target - start) + start) + (target >= 100 ? "+" : "");
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    el.textContent = target + (target >= 100 ? "+" : "");
                }
            }
            requestAnimationFrame(updateCounter);
        }

        const counters = document.querySelectorAll('.team-counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            animateCounter(counter, target, 1200);
        });
    });


    // Card click interaction
        const cards = document.querySelectorAll('.card');
    let zCounter = 20; // track stacking order dynamically

    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        card.style.zIndex = ++zCounter;
      });
    });

    // Automatic card slider for stacked cards
                document.addEventListener('DOMContentLoaded', function() {
                    const cards = document.querySelectorAll('.stack-card-modern');
                    let current = 0;
                    let interval = null;

                    function activateCard(idx) {
                        cards.forEach((c, i) => {
                            c.classList.toggle('active', i === idx);
                            c.style.zIndex = c.getAttribute('data-z');
                        });
                        // Bring active card to front
                        cards[idx].style.zIndex = cards.length + 1;
                    }

                    cards.forEach((card, idx) => {
                        card.addEventListener('click', function() {
                            current = idx;
                            activateCard(current);
                            resetInterval();
                        });
                    });

                    function nextCard() {
                        current = (current + 1) % cards.length;
                        activateCard(current);
                    }

                    function resetInterval() {
                        if (interval) clearInterval(interval);
                        interval = setInterval(nextCard, 4000);
                    }

                    activateCard(current);
                    resetInterval();
                });
                

// partners

    const carousel = document.getElementById('partnersCarousel');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    const scrollAmount = 300; // pixels per click

    nextArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });


    // Auto typing effect for heading
        document.addEventListener("DOMContentLoaded", function() {
                                    const text = "E-Government";
                                    const el = document.getElementById("autoTypeHeading");
                                    let i = 0;
                                    function type() {
                                        if (i <= text.length) {
                                            el.textContent = text.slice(0, i);
                                            i++;
                                            setTimeout(type, 90);
                                        }
                                    }
                                    type();
                                });