const navbar = document.querySelector('.navbar');
const navbarDefaultTransition = navbar.style.transition;
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

document.querySelector('.logo').onclick = e => open('/', '_self');


window.addEventListener('scroll', e =>
{
    navbar.querySelector('.nav-links').classList.remove('shown');

    let navAppearOffsetY = document.querySelector('.hero').clientHeight*0.25;

    if(scrollY >= navbar.clientHeight && scrollY < innerHeight - navAppearOffsetY)
    {
        navbar.style.position = "fixed";
        navbar.style.top = `-${navbar.clientHeight}px`;
    }
    else if(scrollY >= innerHeight - navAppearOffsetY)
    {
        navbar.style.top = 0;
        navbar.style.transition = navbarDefaultTransition;
        navbar.classList.add('top-enter');
    }
    else
    {
        navbar.style.position = "absolute";
        navbar.style.transition = "0s";
        navbar.classList.remove('top-enter');
        navbar.style.top = 0;
    }
});