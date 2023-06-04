window.onload = () => {
    const lang = {
        "C": {
            "description": "<p>C is a general-purpose programming language created in the 1970s by Dennis Ritchie. It is an imperative procedural language, and was designed to be compiled]. The language provides low-level functionalities, being fast and easy to compile with direct mapping to machine code. It does all this with minimal runtime support. (<a href='https://en.wikipedia.org/wiki/C_(programming_language)' target='_blank'>Wikipedia</a>, 2023; <a href='https://www.freecodecamp.org/news/c-vs-cpp-whats-the-difference/' target='_blank'>freeCodeCamp</a>, 2021)</p><p>C is often mentioned in conjunction with its superset, C++, which was originally called 'C with classes'. The advantages of C are its portability, the object-oriented structure (but for only C++), and functional libraries. It is the language for developing console games and operating systems. On the other hand, the concept of pointers is very complicated and with the wrong application causing possible system failure, there are security issues with that. Also, unlike other popular languages, C does not have a garbage collector. The most notable users of C as their main, or one of their main programming languages, are everywhere like Adobe, Microsoft, Apple, Microsoft, and Mozilla. (<a href='https://flyaps.com/blog/top-10-coding-languages-used-by-global-companies/' target='_blank'>Flyaps</a>, 2020)</p>",
            "experience-level": "specialized-exp",
            "motivation": ["job-prospects", "enthusiasm"],
            "job-type": "full-time",
            "game-type": ["console-game", "mobile-game", "browser-game"],
            "soft-type": ["lang-soft", "os-soft"]
        },
        "Java": {
            "description": "<p>Java is a high-level general-purpose programming language with the philosophy, WORA (Write Once, Run Anywhere), originally developed by James Gosling in the 1990s. It is object-oriented and class-based. While the syntax of Java is similar to C and C++, it has fewer low-level facilities. Applications written in Java compile to bytecode and run on a virtual machine, making the underlying computer architecture irrelevant. (<a href='https://en.wikipedia.org/wiki/Java_(programming_language)' target='_blank'>Wikipedia</a>, 2023).</p><p>The advantages of Java are effective scaling, an extensive framework base, and compatibility with Android. However, it is not open-source, and Oracle has been limiting free access step by step. The language also demands a lot of memory and requires additional tools for GUI on desktop.The most notable users of Java as their main, or one of their main programming languages, are Twitter, Airbnb, and Google.(<a href='https://flyaps.com/blog/top-10-coding-languages-used-by-global-companies/' target='_blank'>Flyaps</a>, 2020)</p>",
            "experience-level": "advanced-exp",
            "motivation": "job-prospects",
            "job-type": "full-time",
            "game-type": "mobile-game",
            "soft-type": ["app-soft", "lang-soft"],
            "web-type": ["backend-web", "fullstack-dev"]
        },
        "JavaScript": {
            "description": "<p>JavaScript is a high-level, often JIT compiled programming language, JIT standing for Just In Time, based on the <a href='ECMAScript specification' target='_blank'>ECMAScript specification</a> (2017). It was developed at Netscape in the 1990s and has become the language of the internet. Internet browsers run on JavaScript engines. Its creators named it after Java, hoping to borrow some of Java's notoriety at the time, but JavaScript has little, if anything, in common with Java. (<a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank'>Wikipedia</a>, 2023)</p><p>The advantages of JavaScript are speed, high-quality control, and JS frameworks, but some of its cons are safety and its flexibility. There are numerous supersets that have become popular to address its flexibility and advances in web protocols and encryption to address. Since JavaScript runs in the browser, it also requires additional testing to make sure an app or website renders smoothly on all major browsers. The most notable users of JavaScript as their main, or one of their main programming languages, are Google, PayPal, Groupon, and Walmart. (<a href='https://flyaps.com/blog/top-10-coding-languages-used-by-global-companies/' target='_blank'>Flyaps</a>, 2020)</p>",
            "experience-level": "intermediate-exp",
            "motivation": ["hobby", "job-prospects"],
            "job-type": ["full-time", "contracts"],
            "game-type": ["mobile-game", "browser-game"],
            "soft-type": "app-soft",
            "web-type": ["frontend-web", "backend-web", "fullstack-web"]
        },
        "Pharo": {
            "description": "<p>Pharo is an open source, cross-platform implementation of Smalltalk-80, a purely object-oriented programming language. It ships as a system image containing all the necessary software to run it, compiled from source code, running on a virtual machine. (<a href='' target='https://en.wikipedia.org/wiki/Pharo'>Wikipedia</a>, 2023). You can find out more and download it at <a href='https://pharo.org/' target='_blank'>pharo.org</a>.</p>",
            "experience-level": "beginner-exp",
            "motivation": "hobby",
        },
        "Python": {
            "description": "<p>Python is a high-level, general-purpose programming language that emphasizes code readability. It was designed by Guido van Rossum in the 1980s, developed at the Python Software Foundation. The philosophy of the language can be found in the <a href='Zen of Python' target='_blank'></a>.</p><p>The advantages of Python are simplicity and high productivity, free licensing as an open-source technology, and pre-built libraries. It is also very popular for work in data science or artificial intelligence. The downsides, however, are that it executes slower than C and C++, and to improve its speed requires coding performance-critical modules in C or C++ and using them in Python. Due to its GIL, Global Interpret Lock, that allows only one thread to be executed at a time, it is not always the best option multi-threaded apps. The most notable users of Python as their main, or one of their main programming languages, are Facebook, JPMorgan, Quora and Reddit.</p>",
            "experience-level": "absolute-exp",
            "motivation": ["problem-solving", "job-prospects"],
            "job-type": ["full-time", "contracts"],
            "soft-type": "app-soft",
            "web-type": ["backend-web", "fullstack-web"]
        }
    };

    const form = {
        submitBtn: document.querySelector('#submit-btn'),
        resetBtn: document.querySelector('#reset-btn'),
        elem: document.querySelector('form'),
        data: "",
        ext: "",
        sug: document.querySelector('article')
    };

    const hide = (focal) => {
        if (focal) {
            focal.classList.remove('expand');
            focal.classList.add('collapse', 'hidden');
        }
    }
    const show = (focal) => {
        if (focal) {
            focal.classList.remove('collapse', 'hidden');
            focal.classList.add('expand');
        }
    }

    let devType = document.querySelectorAll('input[name="dev-type"]');
    devType.forEach(ipt => {
        ipt.addEventListener('change', () => {
            hide(form.ext);
            form.data = new FormData(form.elem);
            form.ext = document.querySelector('.' + form.data.get('dev-type') + '-ext');
            show(form.ext)
        })
    })


    form.submitBtn.addEventListener('click', () => {
        form.data = new FormData(form.elem);
        show(form.sug);
    })

    form.resetBtn.addEventListener('click', () => {
        form.elem.reset();
        form.data = {};
        hide(form.ext);
        hide(form.sug);
    })
}