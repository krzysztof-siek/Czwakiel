window.addEventListener('load', (event) => {

    const navButton = document.querySelector(".nav-button")

    toggleNavLinks = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle("open")

    }

    navButton.addEventListener('click', toggleNavLinks);


})