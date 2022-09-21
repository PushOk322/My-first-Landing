
//menu burger
const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuLinks = document.querySelector('.header__links');
    const menuSign = document.querySelector('.header__right');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuLinks.classList.toggle('_active');
        menuSign.classList.toggle('_active');
    });
}


