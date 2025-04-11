document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader-container');
    const main = document.querySelector('main');


    setTimeout(() => {
        loader.style.display = 'none';
            main.classList.remove('hidden');
}, 2000);
});