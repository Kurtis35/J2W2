AOS.init({
    duration: 600,
    once: true,
    offset: 50
});

const clientSwiper = new Swiper('.clients .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});

const servicesSwiper = new Swiper('.services-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

const portfolioSwiper = new Swiper('.portfolio-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive);
        navToggle.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

document.querySelectorAll('.dropdown-toggle').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 767) {
            e.preventDefault();
            const parent = dropdown.parentElement;
            parent.classList.toggle('active');
            dropdown.setAttribute('aria-expanded', parent.classList.contains('active'));
        }
    });
});

document.querySelectorAll('.faq-item h3').forEach(faq => {
    faq.addEventListener('click', () => {
        const parent = faq.parentElement;
        parent.classList.toggle('active');
    });
});

document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    setTimeout(() => {
        alert('Thank you for contacting us!');
        this.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Contact Us';
    }, 1000);
});

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    const gotoTop = document.getElementById('gotoTop');
    if (gotoTop) {
        gotoTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    }
}, 100));

document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.includes('#')) {
            const targetId = href.substring(href.indexOf('#') + 1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        } else {
            window.location.href = href;
        }
        if (window.innerWidth <= 767 && navLinks) {
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', false);
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});
