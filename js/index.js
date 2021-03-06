const navbar = document.querySelector('.navbar');
// const navbarDefaultTransition = navbar.style.transition;
const menuIcon = document.querySelector('.menu-icon');
const buttonLinks = document.querySelectorAll('.button-link');

buttonLinks.forEach(btn =>
{
    btn.addEventListener('click', e =>
    {
        window.open(btn.dataset.link, '_blank');
    });
});

menuIcon.addEventListener('click', e =>
{
    navbar.querySelector('.nav-links').classList.toggle('shown');
});

let lastScrollTop = window.pageYOffset;

window.addEventListener('scroll', e =>
{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    navbar.querySelector('.nav-links').classList.remove('shown');

    if(scrollY >= innerHeight - navbar.clientHeight)
    {
        if (scrollTop > lastScrollTop) // Scroll Downwards
        {
            navbar.style.top = `-${navbar.clientHeight}px`;
        }
        else
        {
            navbar.style.position = 'fixed';
            navbar.style.top = 0;
            navbar.classList.add('top-enter');
        }
    }
    else
    {
        if(scrollTop == 0)
        {
            navbar.classList.remove('top-enter');
            navbar.style.position = 'absolute';
        }
    }

    

    // let navAppearOffsetY = document.querySelector('.hero').clientHeight*0.25;

    // if(scrollY >= navbar.clientHeight && scrollY < innerHeight - navAppearOffsetY)
    // {
    //     navbar.style.position = "fixed";
    //     navbar.style.top = `-${navbar.clientHeight}px`;
    // }
    // else if(scrollY >= innerHeight - navAppearOffsetY)
    // {
    //     navbar.style.top = 0;
    //     navbar.style.transition = navbarDefaultTransition;
    //     navbar.classList.add('top-enter');
    // }
    // else
    // {
    //     navbar.style.position = "absolute";
    //     navbar.style.transition = "0s";
    //     navbar.classList.remove('top-enter');
    //     navbar.style.top = 0;
    // }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);