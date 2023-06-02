window.onload = () => {
    const form = {
        submitBtn: document.querySelector('#submit-btn'),
        resetBtn: document.querySelector('#reset-btn'),
        elem: document.querySelector('form'),
        data: {},
        languageData: {
            'pharo': {
                language_desc: ``,
                language_users: ``
            },
            'java': {
                language_desc: ``,
                language_users: ``
            },
            'C++': {
                language_desc: `<p>C++ is a superset of C and was renamed from 'C with classes'. It is a high-level, general-purpose language created in the 1980s by Bjarne Stroustrup. The language was designed to highlight its performance, efficiency and flexibility of use, while keeping in mind systems programming and large systems, as well as embedded resource-constrained software. (; <a href="https://www.freecodecamp.org/news/c-vs-cpp-whats-the-difference/" target="_blank">freeCodeCamp</a>, 2023)</p>`,
                language_users: [
                    'Adobe Systems',
                    'Microsoft',
                    'Apple',
                    'Amazon',
                    'Google',
                    'LinkedIn',
                    'Netflix',
                    'NASA'
                ]
            },
            'C': {
                language_desc: `<p>C is a general-purpose programming language created in the 1970s by Dennis Ritchie. It is an imperative procedural language, and was designed to be compiled]. The language provides low-level functionalities, being fast and easy to compile with direct mapping to machine code. It does all this with minimal runtime support. (<a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">Wikipedia</a>, 2023; <a href="https://www.freecodecamp.org/news/c-vs-cpp-whats-the-difference/" target="_blank">freeCodeCamp</a>, 2021)</p>`,
                language_users: [
                    'VMware',
                    'Linux',
                    'Python Software Foundation',
                    'PHP Foundation',
                    'Google',
                    'Microsoft',
                    'Oracle',
                    'IBM'
                ]
            },
            'Assembly': {
                language_desc: ``,
                language_users: ``
            },
            'C#': {
                language_desc: ``,
                language_users: ``
            }
        }
    }

    submitBtn.addEventListener('click', () => {
        form.data = {...(new FormData(form)), ...form.data};
    })

    resetBtn.addEventListener('click', () => {
        form.elem.reset();
        formData = "";
    })
}