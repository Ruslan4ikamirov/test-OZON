function hideProgress() {
    const hideToggle = document.querySelector('.toggle__hide');
    const progressRing = document.querySelector('.progress-ring');

    hideToggle.addEventListener('change', () => {
        progressRing.classList.toggle('progress-ring-checked');
    });
}

export { hideProgress };