/*=============== SHOW SOCIAL NETWORKS ===============*/
const showSocial = () => {
    const toggleButtons = document.querySelectorAll('.card__social-toggle');
    const socialContainers = document.querySelectorAll('.card__social');

    toggleButtons.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            socialContainers[index].classList.toggle('animation');
        });
    });
};

showSocial();

