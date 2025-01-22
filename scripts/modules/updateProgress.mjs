function updateProgress(value) {
    const progressRing = document.querySelector('.progress-ring__circle');
    const circleLength = 340;
    
    if (value === null || value === undefined) {
        progressRing.style.setProperty('--stroke-offset', circleLength);
    } else {
        const valueOffset = circleLength - (circleLength * (value / 100));
        progressRing.style.setProperty('--stroke-offset', valueOffset);
    }
    console.log('Updated!');
}

export { updateProgress };