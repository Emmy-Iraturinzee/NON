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

                                // ensure a results container inside the search box
                                let resultsContainer = document.getElementById('navSearchResults');
                                if (!resultsContainer && box) {
                                  resultsContainer = document.createElement('div');
                                  resultsContainer.id = 'navSearchResults';
                                  resultsContainer.style.maxHeight = '50vh';
                                  resultsContainer.style.overflow = 'auto';
                                  resultsContainer.style.marginTop = '12px';
                                  box.appendChild(resultsContainer);
                                }

                                function renderResults(items, query) {
                                  if (!resultsContainer) return;
                                  resultsContainer.innerHTML = '';
                                  const q = query.trim();
                                  if (q === '') {
                                    const p = document.createElement('div');
                                    p.textContent = 'Please enter a search term';
                                    resultsContainer.appendChild(p);
                                    return;
                                  }
                                  if (items.length === 0) {
                                    const p = document.createElement('div');
                                    p.textContent = 'No result found';
                                    resultsContainer.appendChild(p);
                                    return;
                                  }
                                  const ul = document.createElement('ul');
                                  ul.style.listStyle = 'none';
                                  ul.style.padding = '0';
                                  ul.style.margin = '0';
                                  items.forEach(it => {
                                    const li = document.createElement('li');
                                    li.style.padding = '8px 6px';
                                    li.style.borderBottom = '1px solid rgba(0,0,0,0.06)';
                                    li.style.cursor = 'pointer';
                                    li.tabIndex = 0;
                                    li.textContent = it.title;
                                    li.addEventListener('click', (e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      if (it.el) {
                                        // if matched element is on page, scroll to it
                                        it.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                      } else if (it.href) {
                                        window.location.href = it.href;
                                      }
                                      closeSearch();
                                    });
                                    li.addEventListener('keydown', (e) => {
                                      if (e.key === 'Enter') li.click();
                                    });
                                    ul.appendChild(li);
                                  });
                                  resultsContainer.appendChild(ul);
                                }

                                // build searchable index from page elements
                                function buildIndex() {
                                  const nodes = [];
                                  // Preference order: elements with data-search, data-title, [data-searchable], .search-item, nav links and headings
                                  const selector = '[data-search], [data-title], [data-searchable], .search-item, nav a, a, h1, h2, h3, .card, .product';
                                  document.querySelectorAll(selector).forEach(el => {
                                    // skip elements inside the overlay itself
                                    if (overlay && overlay.contains(el)) return;
                                    const title = (el.getAttribute('data-search') || el.getAttribute('data-title') || el.getAttribute('data-searchable') || el.textContent || '').trim();
                                    if (!title) return;
                                    const href = (el.tagName.toLowerCase() === 'a' && el.href) ? el.href : null;
                                    nodes.push({ title: title.replace(/\s+/g,' ').trim(), el: el, href });
                                  });
                                  // dedupe by title
                                  const seen = new Set();
                                  return nodes.filter(n => {
                                    const key = n.title.toLowerCase();
                                    if (seen.has(key)) return false;
                                    seen.add(key);
                                    return true;
                                  });
                                }

                                const index = buildIndex();

                                function performSearch(query) {
                                  const q = (query || '').trim().toLowerCase();
                                  if (q === '') {
                                    renderResults([], query);
                                    return;
                                  }
                                  // simple substring match
                                  const matches = index.filter(item => item.title.toLowerCase().includes(q));
                                  renderResults(matches, query);
                                }

                                function openSearch(e){
                                  if(e) { e.preventDefault(); e.stopPropagation(); }
                                  if(!overlay) return;
                                  overlay.style.display = 'flex';
                                  // prevent background scroll
                                  document.documentElement.style.overflow = 'hidden';
                                  document.body.style.overflow = 'hidden';
                                  setTimeout(() => {
                                    input && input.focus();
                                    // clear previous results
                                    if (resultsContainer) resultsContainer.innerHTML = '';
                                  }, 50);
                                }
                                function closeSearch(){
                                  if(!overlay) return;
                                  overlay.style.display = 'none';
                                  document.documentElement.style.overflow = '';
                                  document.body.style.overflow = '';
                                  input && input.blur();
                                  if (resultsContainer) resultsContainer.innerHTML = '';
                                }

                                // if there is no provided close button, create a close icon button inside the box
                                let generatedClose = null;
                                if (!closeBtn && box) {
                                  generatedClose = document.createElement('button');
                                  generatedClose.type = 'button';
                                  generatedClose.id = 'navSearchCloseGenerated';
                                  generatedClose.setAttribute('aria-label', 'Close search');
                                  generatedClose.innerHTML = '✕';
                                  // basic styles (adjust in CSS if needed)
                                  generatedClose.style.position = 'absolute';
                                  generatedClose.style.top = '8px';
                                  generatedClose.style.right = '8px';
                                  generatedClose.style.background = 'transparent';
                                  generatedClose.style.border = 'none';
                                  generatedClose.style.fontSize = '20px';
                                  generatedClose.style.cursor = 'pointer';
                                  generatedClose.style.padding = '4px';
                                  generatedClose.style.lineHeight = '1';
                                  generatedClose.style.color = 'inherit';
                                  box.style.position = box.style.position || 'relative';
                                  box.appendChild(generatedClose);
                                  generatedClose.addEventListener('click', function(e){
                                    e.stopPropagation();
                                    closeSearch();
                                  });
                                }

                                openBtn && openBtn.addEventListener('click', openSearch);
                                if (closeBtn) closeBtn.addEventListener('click', function(e){ e.stopPropagation(); closeSearch(); });

                                // NOTE: removed auto-close on overlay/background/document clicks per request
                                // Overlay background and document clicks will no longer close the search. Use the close button or Escape key.

                                // helpers to match site palette (fall back to sensible defaults)
                                const __rootStyles = getComputedStyle(document.documentElement);
                                const __primary = (__rootStyles.getPropertyValue('--bs-primary') || __rootStyles.getPropertyValue('--primary') || '#8fffb1').trim();
                                const __muted = (__rootStyles.getPropertyValue('--bs-muted') || '#6c757d').trim();
                                const __bg = (__rootStyles.getPropertyValue('--bs-body-bg') || '#ffffff').trim();
                                const __text = (__rootStyles.getPropertyValue('--bs-body-color') || '#212529').trim();

                                // create a document fragment with highlighted parts (no raw HTML strings)
                                function createHighlightedNode(text, q) {
                                  const frag = document.createDocumentFragment();
                                  const str = String(text || '').replace(/\s+/g, ' ').trim();
                                  if (!q) {
                                    frag.appendChild(document.createTextNode(str));
                                    return frag;
                                  }
                                  const lower = str.toLowerCase();
                                  const qi = q.toLowerCase();
                                  const idx = lower.indexOf(qi);
                                  if (idx === -1) {
                                    frag.appendChild(document.createTextNode(str));
                                    return frag;
                                  }
                                  const before = str.slice(0, idx);
                                  const match = str.slice(idx, idx + q.length);
                                  const after = str.slice(idx + q.length);
                                  if (before) frag.appendChild(document.createTextNode(before));
                                  const span = document.createElement('span');
                                  span.textContent = match;
                                  span.style.background = (__primary ? __primary + '22' : '#8fffb122');
                                  span.style.color = __text || '#212529';
                                  span.style.padding = '2px 4px';
                                  span.style.borderRadius = '4px';
                                  frag.appendChild(span);
                                  if (after) frag.appendChild(document.createTextNode(after));
                                  return frag;
                                }

                                // pretty result renderer (uses DOM nodes, no innerHTML with tags)
                                function renderResults(items, query) {
                                  if (!resultsContainer) return;
                                  resultsContainer.innerHTML = '';

                                  // container styles to match palette
                                  resultsContainer.style.background = __bg || '#fff';
                                  resultsContainer.style.border = '1px solid rgba(0,0,0,0.06)';
                                  resultsContainer.style.padding = '8px';
                                  resultsContainer.style.borderRadius = '8px';
                                  resultsContainer.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)';
                                  resultsContainer.style.maxHeight = '50vh';
                                  resultsContainer.style.overflow = 'auto';

                                  const q = (query || '').trim();
                                  if (q === '') {
                                    const p = document.createElement('div');
                                    p.textContent = 'Please enter a search term';
                                    p.style.color = __muted;
                                    p.style.padding = '12px';
                                    resultsContainer.appendChild(p);
                                    return;
                                  }
                                  if (items.length === 0) {
                                    const p = document.createElement('div');
                                    p.textContent = 'No result found';
                                    p.style.color = __muted;
                                    p.style.padding = '12px';
                                    resultsContainer.appendChild(p);
                                    return;
                                  }

                                  // results list
                                  const list = document.createElement('div');
                                  list.style.display = 'grid';
                                  list.style.gridTemplateColumns = '1fr';
                                  list.style.gap = '8px';

                                  items.forEach(it => {
                                    const card = document.createElement('div');
                                    card.className = 'nav-search-result';
                                    card.style.padding = '10px';
                                    card.style.borderRadius = '8px';
                                    card.style.cursor = 'pointer';
                                    card.style.display = 'flex';
                                    card.style.flexDirection = 'column';
                                    card.style.gap = '6px';
                                    card.style.transition = 'transform .12s ease, box-shadow .12s ease, background .12s ease';
                                    card.style.background = 'transparent';
                                    card.tabIndex = 0;

                                    // title
                                    const title = document.createElement('div');
                                    title.style.fontWeight = '600';
                                    title.style.color = __text;
                                    title.style.fontSize = '14px';
                                    const titleText = it.title || (it.el && it.el.textContent) || '';
                                    title.appendChild(createHighlightedNode(titleText, q));
                                    card.appendChild(title);

                                    // snippet: show small excerpt around match if available
                                    let snippetText = '';
                                    if (it.el && it.el.textContent) {
                                      const txt = it.el.textContent.replace(/\s+/g,' ').trim();
                                      const li = txt.toLowerCase().indexOf(q.toLowerCase());
                                      if (li !== -1) {
                                        const start = Math.max(0, li - 36);
                                        const end = Math.min(txt.length, li + q.length + 36);
                                        snippetText = (start > 0 ? '…' : '') + txt.slice(start, end).trim() + (end < txt.length ? '…' : '');
                                      }
                                    } else if (it.href) {
                                      snippetText = it.href;
                                    }

                                    if (snippetText) {
                                      const snippet = document.createElement('div');
                                      snippet.style.fontSize = '12px';
                                      snippet.style.color = __muted;
                                      snippet.style.lineHeight = '1.3';
                                      snippet.appendChild(createHighlightedNode(snippetText, q));
                                      card.appendChild(snippet);
                                    }

                                    // meta row
                                    const meta = document.createElement('div');
                                    meta.style.display = 'flex';
                                    meta.style.justifyContent = 'space-between';
                                    meta.style.alignItems = 'center';
                                    meta.style.marginTop = '4px';

                                    const source = document.createElement('div');
                                    source.style.fontSize = '11px';
                                    source.style.color = __muted;
                                    source.textContent = it.href ? (new URL(it.href, location.href)).pathname : (it.el ? (it.el.tagName.toLowerCase()) : '');
                                    meta.appendChild(source);

                                    if (it.href) {
                                      const link = document.createElement('a');
                                      link.href = it.href;
                                      link.textContent = 'Open';
                                      link.style.fontSize = '12px';
                                      link.style.color = __primary;
                                      link.style.textDecoration = 'none';
                                      link.style.fontWeight = '600';
                                      link.style.marginLeft = '8px';
                                      link.addEventListener('click', (e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        closeSearch();
                                        window.location.href = it.href;
                                      });
                                      meta.appendChild(link);
                                    } else {
                                      const onpage = document.createElement('div');
                                      onpage.textContent = 'On page';
                                      onpage.style.fontSize = '11px';
                                      onpage.style.color = __muted;
                                      meta.appendChild(onpage);
                                    }

                                    card.appendChild(meta);

                                    // interactions
                                    card.addEventListener('click', (e) => {
                                      e.preventDefault(); e.stopPropagation();
                                      if (it.el) {
                                        it.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                      } else if (it.href) {
                                        window.location.href = it.href;
                                      }
                                      closeSearch();
                                    });
                                    card.addEventListener('keydown', (e) => {
                                      if (e.key === 'Enter') card.click();
                                    });
                                    card.addEventListener('mouseenter', () => {
                                      card.style.transform = 'translateY(-3px)';
                                      card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                      card.style.background = 'rgba(0,0,0,0.02)';
                                    });
                                    card.addEventListener('mouseleave', () => {
                                      card.style.transform = '';
                                      card.style.boxShadow = '';
                                      card.style.background = 'transparent';
                                    });

                                    list.appendChild(card);
                                  });

                                  resultsContainer.appendChild(list);
                                }

                                // Esc to close and Enter to search
                                document.addEventListener('keydown', function(e){
                                  if (e.key === 'Escape' && overlay && overlay.style.display === 'flex') closeSearch();
                                  if (e.key === 'Enter' && document.activeElement === input) {
                                    e.preventDefault();
                                    performSearch(input.value);
                                  }
                                });

                                // live search as user types (optional)
                                if (input) {
                                  let debounce = null;
                                  input.addEventListener('input', function(){
                                    clearTimeout(debounce);
                                    debounce = setTimeout(() => performSearch(input.value), 250);
                                  });
                                }

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