document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('requestForm');
    const submitButton = document.getElementById('submitButton');
    const requiredFields = form.querySelectorAll('[required]');

    function checkFormValidity() {
        let allFieldsFilled = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFieldsFilled = false;
            }
        });
        submitButton.disabled = !allFieldsFilled;
    }

    requiredFields.forEach(field => {
        field.addEventListener('input', checkFormValidity);
    });

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
        }
    });

    checkFormValidity(); // Initial check
});