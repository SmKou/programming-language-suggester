window.onload = () => {
    const form = {
        submitBtn: document.querySelector('#submit-btn'),
        resetBtn: document.querySelector('#reset-btn'),
        elem: document.querySelector('form'),
        data: {},
        languageData: {
            'pharo': {
                composer: ""
            },
            'java': {
                composer: 'Debussy'
            },
            'C++': {
                composer: 'Dvorak'
            },
            'C': {
                composer: 'Beethoven',
                description: "You're like Beethoven! He was not well-educated with a forceful and magnetic personality, but he was hot-tempered, often ill-mannered and suspicious."
            },
            'Assembly': {
                composer: 'Bach'
            },
            'C#': {
                composer: 'Ravel'
            }
        }
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