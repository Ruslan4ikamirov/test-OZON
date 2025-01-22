function spinProgress() {
    const animateToggle = document.querySelector('.toggle__animate');
    const progressRing = document.querySelector('.progress-ring');

    animateToggle.addEventListener('change', () => {
        progressRing.classList.toggle('progress-ring-spin');
    });
}

export { spinProgress };
