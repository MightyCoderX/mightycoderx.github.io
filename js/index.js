const navbar = document.querySelector('.navbar');
const navbarDefaultTransition = navbar.style.transition;
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', e =>
{
    navbar.querySelector('.nav-links').classList.toggle('shown');
});

document.querySelector('.logo').onclick = e=> open('/', '_self');

window.addEventListener('scroll', e =>
{
    navbar.querySelector('.nav-links').classList.remove('shown');

    let navAppearOffsetY = navbar.clientHeight * 1.7;

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