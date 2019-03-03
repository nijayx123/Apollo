const navSlide = () => {
    const menubtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    menubtn.addEventListener('click', () => {

        // Toogle Nav
        nav.classList.toggle('nav-active');

        // Menu Button Animation
        menubtn.classList.toggle('toggle-btn');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

navSlide();