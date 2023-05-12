

    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu__link');

    const toggleMenu = () => {
        mobileMenu.ariaHidden = !mobileMenu.ariaHidden;
        mobileMenu.hidden = !mobileMenu.hidden;
    };

    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });


