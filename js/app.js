window.addEventListener('load', (event) => {

    const navButton = document.querySelector(".nav-button")
    const navLinks = document.querySelector('.nav-links');

    toggleNavLinks = () => {
        navLinks.classList.toggle("open")


    }

    navButton.addEventListener('click', toggleNavLinks);

    fixButton = () => {
        let scrollY = window.scrollY;
        if (scrollY > 100) {
            navButton.classList.add("fixed")
            navLinks.classList.add('top')
        } else {
            navButton.classList.remove("fixed")
            navLinks.classList.remove('top')
        }
    }

    window.addEventListener('scroll', fixButton)





})