window.onscroll = function () {
    const secondaryNav = document.getElementById('secondary-nav');
    if (window.scrollY > 50) {
        secondaryNav.classList.add('nav-hidden');
    } else {
        secondaryNav.classList.remove('nav-hidden');
    }
};

const scrollContainer = document.querySelector('.right-page-container');
const navbar = document.querySelector('.navbar');

scrollContainer.addEventListener('scroll', () => {
    if (scrollContainer.scrollTop > 10) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

const scrollArea = document.querySelector('.right-page-container');
const nav2 = document.getElementById('secondary-nav');

scrollArea.addEventListener('scroll', () => {
    if (scrollArea.scrollTop > 20) {
        nav2.classList.add('nav-hidden');
    } else {
        nav2.classList.remove('nav-hidden');
    }
});

const navLinks = document.querySelectorAll('.nav2-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById('next-tags').addEventListener('click', function () {
    const container = document.getElementById('tag-scroll');
    container.scrollLeft += 200;
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        container.scrollLeft = 0;
    }
});






