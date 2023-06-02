window.onload = () => {
    const form = {
        submitBtn: document.querySelector('#submit-btn'),
        resetBtn: document.querySelector('#reset-btn'),
        elem: document.querySelector('form'),
        data: {}
    }

    document.querySelector('[name=""]')

    submitBtn.addEventListener('click', () => {
        form.data = {...(new FormData(form)), ...form.data};
    })

    resetBtn.addEventListener('click', () => {
        form.elem.reset();
        formData = "";
    })
}