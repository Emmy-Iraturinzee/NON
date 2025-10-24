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
        // Hide back-to-top on hero section (when at top of page)
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Additionally, hide back-to-top if user is on hero section even after resize or load
    function updateBackToTopVisibility() {
        if ($(window).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    }
    $(window).on('resize load', updateBackToTopVisibility);

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

// Scroll progress bar
      window.addEventListener('scroll', function() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var scrolled = (scrollTop / docHeight) * 100;
            document.getElementById('scrollProgressBar').style.width = scrolled + '%';
        });

        // Particles.js

          
                document.addEventListener('DOMContentLoaded', function() {
                    if (window.particlesJS) {
                        particlesJS("particles-js", {
                            "particles": {
                                "number": {
                                    "value": 60,
                                    "density": { "enable": true, "value_area": 800 }
                                },
                                "color": { "value": "#8fffb1" },
                                "shape": {
                                    "type": "circle",
                                    "stroke": { "width": 0, "color": "#000" }
                                },
                                "opacity": {
                                    "value": 0.25,
                                    "random": true,
                                    "anim": { "enable": false }
                                },
                                "size": {
                                    "value": 4,
                                    "random": true,
                                    "anim": { "enable": false }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 120,
                                    "color": "#8fffb1",
                                    "opacity": 0.15,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 1.2,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out"
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": { "enable": true, "mode": "repulse" },
                                    "onclick": { "enable": false }
                                },
                                "modes": {
                                    "repulse": { "distance": 120, "duration": 0.6 }
                                }
                            },
                            "retina_detect": true
                        });

                        // Animate particles on hover of the carousel item
                        var carouselItem = document.querySelector('.owl-carousel-item');
                        var particlesCanvas = document.querySelector('#particles-js canvas');
                        if (carouselItem && particlesCanvas) {
                            carouselItem.addEventListener('mouseenter', function() {
                                if (window.pJSDom && pJSDom[0] && pJSDom[0].pJS) {
                                    pJSDom[0].pJS.interactivity.events.onhover.enable = true;
                                }
                            });
                            carouselItem.addEventListener('mouseleave', function() {
                                if (window.pJSDom && pJSDom[0] && pJSDom[0].pJS) {
                                    pJSDom[0].pJS.interactivity.events.onhover.enable = false;
                                }
                            });
                        }
                    }
                });

                // Count Up Animation
                document.addEventListener('DOMContentLoaded', function() {
                    function animateCountUp(el) {
                        const target = +el.getAttribute('data-target');
                        const duration = 1200;
                        const start = 0;
                                    const stepTime = Math.max(Math.floor(duration / target), 20);
                                    let current = start;
                                    const timer = setInterval(() => {
                                        current++;
                                        el.textContent = current + '+';
                                        if (current >= target) {
                                            el.textContent = target + '+';
                                            clearInterval(timer);
                                        }
                                    }, stepTime);
                                }
                                document.querySelectorAll('.count-up').forEach(animateCountUp);
                            });

           // Search Overlay

          
                              (function(){
                                const openBtn = document.getElementById('navSearchBtn');
                                const overlay = document.getElementById('navSearchOverlay');
                                const box = document.getElementById('navSearchBox');
                                const input = document.getElementById('navSearchInput');
                                const closeBtn = document.getElementById('navSearchClose'); // may be null

                                function openSearch(e){
                                  if(e) { e.preventDefault(); e.stopPropagation(); }
                                  if(!overlay) return;
                                  overlay.style.display = 'flex';
                                  // prevent background scroll
                                  document.documentElement.style.overflow = 'hidden';
                                  document.body.style.overflow = 'hidden';
                                  setTimeout(() => input && input.focus(), 50);
                                }
                                function closeSearch(){
                                  if(!overlay) return;
                                  overlay.style.display = 'none';
                                  document.documentElement.style.overflow = '';
                                  document.body.style.overflow = '';
                                  input && input.blur();
                                }

                                openBtn && openBtn.addEventListener('click', openSearch);
                                if (closeBtn) closeBtn.addEventListener('click', function(e){ e.stopPropagation(); closeSearch(); });

                                // close when clicking on overlay background
                                overlay && overlay.addEventListener('click', function(e){
                                  // clicking anywhere (including inside the box) should close per request
                                  closeSearch();
                                });

                                // also close on any document click while overlay is visible (covers clicks outside overlay)
                                document.addEventListener('click', function(e){
                                  if (!overlay) return;
                                  if (overlay.style.display === 'flex') {
                                    // ignore the click that opened the search button (stopped propagation) and any programmatic clicks
                                    // if click target is the open button, ignore
                                    if (openBtn && openBtn.contains(e.target)) return;
                                    closeSearch();
                                  }
                                });

                                // Esc to close
                                document.addEventListener('keydown', function(e){
                                  if (e.key === 'Escape' && overlay && overlay.style.display === 'flex') closeSearch();
                                  if (e.key === 'Enter' && document.activeElement === input) {
                                    e.preventDefault();
                                    console.log('Search query:', input.value);
                                    // optionally closeSearch();
                                  }
                                });

                                // Basic focus trap while overlay visible
                                overlay && overlay.addEventListener('keydown', function(e){
                                  if (e.key === 'Tab') {
                                    const focusable = Array.from(box.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])'))
                                      .filter(el => !el.disabled);
                                    if (focusable.length === 0) return;
                                    const first = focusable[0], last = focusable[focusable.length - 1];
                                    if (e.shiftKey && document.activeElement === first) {
                                      e.preventDefault(); last.focus();
                                    } else if (!e.shiftKey && document.activeElement === last) {
                                      e.preventDefault(); first.focus();
                                    }
                                  }
                                });
                              })();
                        

                            //   Scroll Progress Bar

                                 window.addEventListener('scroll', function() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var scrolled = (scrollTop / docHeight) * 100;
            document.getElementById('scrollProgressBar').style.width = scrolled + '%';
        });