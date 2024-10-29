document.getElementById('mobile-menu').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    const content = document.querySelector('.content');
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
        content.classList.add('expanded');
    } else {
        content.classList.remove('expanded');
    }
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        }
    }
});
const updateSwiper = () => {
    if (window.innerWidth < 768) {
        swiper.params.slidesPerView = 1;
    } else {
        swiper.params.slidesPerView = 2;
    }
    swiper.update();
};

window.addEventListener('resize', updateSwiper);
updateSwiper();


document.addEventListener('DOMContentLoaded', function () {
    const toggleBoxes = document.querySelectorAll('.toggleBox');

    toggleBoxes.forEach((box, index) => {
        box.addEventListener('click', function () {
            const hiddenText = document.getElementById(`hiddenText${index + 1}`);

            if (hiddenText.style.maxHeight) {
                hiddenText.style.maxHeight = null;
                hiddenText.style.opacity = 0;
                setTimeout(() => {
                    hiddenText.style.display = 'none';
                }, 300);
            } else {
                hiddenText.style.display = 'block';
                hiddenText.style.maxHeight = hiddenText.scrollHeight + 'px';
                hiddenText.style.opacity = 1;
            }
        });
    });
});

$(window).on('scroll', function () {
    $('.fade-in').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop() + $(window).height();

        if (position < scroll) {
            $(this).addClass('show');
        }
    });
});

$(document).ready(function () {
    $('.fade-in').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop() + $(window).height();

        if (position < scroll) {
            $(this).addClass('show');
        }
    });
});