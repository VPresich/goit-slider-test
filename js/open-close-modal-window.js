const buttonReviewRef = document.querySelector('.leave-review-btn');
const backdropRef = document.querySelector('.backdrop');
const buttonCloseRef = document.querySelector('.close-btn');

buttonReviewRef.addEventListener('click', () => {
backdropRef.classList.add('modal-is-open');
});

buttonCloseRef.addEventListener('click', () => {
backdropRef.classList.remove('modal-is-open');
});