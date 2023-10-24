const buttonMenuRef = document.querySelector('.open-mobile-menu-btn');
const mobileMenuRef = document.querySelector('.mobile-menu');
const buttonCloseMenuRef = document.querySelector('.mobile-menu-close-btn');

buttonMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.add('mobile-menu-is-open');
});

buttonCloseMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.remove('mobile-menu-is-open');
});