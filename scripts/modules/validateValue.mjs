import { updateProgress } from "./updateProgress.mjs";

function validateValue() {
    const valueField = document.querySelector('.value__field');
    
    valueField.addEventListener('input', (event) => {
        let value = event.target.value;
        value = value.replace(/[^0-9]/g, '');
        if (value.length > 1 && value.startsWith('0')) {
            value = value.substring(1);
        }
        if (parseInt(value, 10) > 100) {
            value = '100';
        }
        event.target.value = value;
        updateProgress(value);
    });
}

export { validateValue };
