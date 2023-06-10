/* BUSINESS LOGIC */

const langList = {
    "C": {
        "description": "<p>C is a general-purpose programming language created in the 1970s by Dennis Ritchie. It is an imperative procedural language, and was designed to be compiled]. The language provides low-level functionalities, being fast and easy to compile with direct mapping to machine code. It does all this with minimal runtime support. (<a href='https://en.wikipedia.org/wiki/C_(programming_language)' target='_blank'>Wikipedia</a>, 2023; <a href='https://www.freecodecamp.org/news/c-vs-cpp-whats-the-difference/' target='_blank'>freeCodeCamp</a>, 2021)</p><p>C is often mentioned in conjunction with its superset, C++, which was originally called 'C with classes'. The advantages of C are its portability, the object-oriented structure (but for only C++), and functional libraries. It is the language for developing console games and operating systems. On the other hand, the concept of pointers is very complicated and with the wrong application causing possible system failure, there are security issues with that. Also, unlike other popular languages, C does not have a garbage collector. The most notable users of C as their main, or one of their main programming languages, are everywhere like Adobe, Microsoft, Apple, Microsoft, and Mozilla. (<a href='https://flyaps.com/blog/top-10-coding-languages-used-by-global-companies/' target='_blank'>Flyaps</a>, 2020)</p>",
        "experience-level": "specialized-exp",
        "motivation": ["job-prospects", "enthusiasm"],
        "job-type": "full-time",
        "game-type": ["console-game", "mobile-game", "browser-game"],
        "soft-type": ["lang-soft", "os-soft"],
        count: 0
    },
    "Java": {
        "description": "<p>Java is a high-level general-purpose programming language with the philosophy, WORA (Write Once, Run Anywhere), originally developed by James Gosling in the 1990s. It is object-oriented and class-based. While the syntax of Java is similar to C and C++, it has fewer low-level facilities. Applications written in Java compile to bytecode and run on a virtual machine, making the underlying computer architecture irrelevant. (<a href='https://en.wikipedia.org/wiki/Java_(programming_language)' target='_blank'>Wikipedia</a>, 2023).</p><p>The advantages of Java are effective scaling, an extensive framework base, and compatibility with Android. However, it is not open-source, and Oracle has been limiting free access step by step. The language also demands a lot of memory and requires additional tools for GUI on desktop.The most notable users of Java as their main, or one of their main programming languages, are Twitter, Airbnb, and Google.(<a href='https://flyaps.com/blog/top-10-coding-languages-used-by-global-companies/' target='_blank'>Flyaps</a>, 2020)</p>",
        "experience-level": "advanced-exp",
        "motivation": "job-prospects",
        "job-type": "full-time",
        "game-type": "mobile-game",
        "soft-type": ["app-soft", "lang-soft"],
        "web-type": ["backend-web", "fullstack-dev"],
        count: 0
    },
    "JavaScript": {
        "description": "<p>JavaScript is a high-level, often JIT compiled programming language, JIT standing for Just In Time, based on the <a href='ECMAScript specification' target='_blank'>ECMAScript specification</a> (2017). It was developed at Netscape in the 1990s and has become the language of the internet. Internet browsers run on JavaScript engines. Its creators named it after Java, hoping to borrow some of Java's notoriety at the time, but JavaScript has little, if anything, in common with Java. (<a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank'>Wikipedia</a>, 2023)</p><p>The advantages of JavaScript are speed, high-quality control, and JS frameworks, but some of its cons are safety and its flexibility. There are numerous supersets that have become popular to address its flexibility and advances in web protocols and encryption to address. Since JavaScript runs in the browser, it also requires additional testing to make sure an app or website renders smoothly on all major browsers. The most notable users of JavaScript as their main, or one of their main programming languages, are Google, PayPal, Groupon, and Walmart. (<a href='https://flyaps.com/blog/top-10-coding-languages-used-by-global-companies/' target='_blank'>Flyaps</a>, 2020)</p>",
        "experience-level": "intermediate-exp",
        "motivation": ["hobby", "job-prospects"],
        "job-type": ["full-time", "contracts"],
        "game-type": ["mobile-game", "browser-game"],
        "soft-type": "app-soft",
        "web-type": ["frontend-web", "backend-web", "fullstack-web"],
        count: 0
    },
    "Pharo": {
        "description": "<p>Pharo is an open source, cross-platform implementation of Smalltalk-80, a purely object-oriented programming language. It ships as a system image containing all the necessary software to run it, compiled from source code, running on a virtual machine. (<a href='' target='https://en.wikipedia.org/wiki/Pharo'>Wikipedia</a>, 2023). You can find out more and download it at <a href='https://pharo.org/' target='_blank'>pharo.org</a>.</p>",
        "experience-level": "beginner-exp",
        "motivation": "hobby",
        count: 0
    },
    "Python": {
        "description": "<p>Python is a high-level, general-purpose programming language that emphasizes code readability. It was designed by Guido van Rossum in the 1980s, developed at the Python Software Foundation. The philosophy of the language can be found in the <a href='Zen of Python' target='_blank'></a>.</p><p>The advantages of Python are simplicity and high productivity, free licensing as an open-source technology, and pre-built libraries. It is also very popular for work in data science or artificial intelligence. The downsides, however, are that it executes slower than C and C++, and to improve its speed requires coding performance-critical modules in C or C++ and using them in Python. Due to its GIL, Global Interpret Lock, that allows only one thread to be executed at a time, it is not always the best option multi-threaded apps. The most notable users of Python as their main, or one of their main programming languages, are Facebook, JPMorgan, Quora and Reddit.</p>",
        "experience-level": "absolute-exp",
        "motivation": ["problem-solving", "job-prospects"],
        "job-type": ["full-time", "contracts"],
        "soft-type": "app-soft",
        "web-type": ["backend-web", "fullstack-web"],
        count: 0
    }
};

function rankLanguages(data) {
    if (data.get('experience-level') === 'beginner-exp'
        && data.get('motivation') === 'hobby')
        return 'Pharo';
    if ((data.has('game-type') && data.get('game-type') === 'console-game')
        || data.has('soft-type') && data.get('soft-type') === 'os-soft') 
        return 'C';


    for (const [q, a] of data.entries()) {
        for (const pl of Object.values(langList)) {
            if (pl.hasOwnProperty(q)) {
                switch (typeof pl[q]) {
                    case 'object':
                        pl.count += (pl[q].includes(a)) ? 1 : 0;
                        break;
                    default:
                        pl.count += (pl[q] === a) ? 1 : 0;
                }
            }
        }
    }

    const highScore = {
        lang: "",
        score: 0
    }

    for (const [pl, c] of Object.entries(langList)) {
        if (c.count > highScore.score) {
            highScore.lang = pl;
            highScore.score = c.count;
        }
    }

    return highScore.lang;    
}

function resetCounter() {
    for (const pl of Object.values(langList)) {
        pl.count = 0
    }
}

/* USER INTERFACE LOGIC */

function submit(data, ans) {
    const name = data.get('name');
    const req = rankLanguages(data);
    if (name)
        setDisplay(ans, req, name);
    else
        setDisplay(ans, req)
    resetCounter();
}

function setDisplay(ans, req, name = 'Mon señor Bunny') {
    setTimeout(() => {
        document
            .querySelector('#bottom')
            .scrollIntoView({ behavior: 'smooth' });
    }, 1300);
    toggleDisplay(ans, true);
    ans.user.innerHTML = `${name}, we suggest for you:`;
    ans.lang.innerHTML = req;
    ans.desc.innerHTML = langList[req].description;
}

function toggleDisplay(ans, visible) {
    const addClass = (visible) ? 'visible' : 'hidden';
    const removeClass = (visible) ? 'hidden' : 'visible';
    for (const e of Object.values(ans)) {
        e.classList.remove(removeClass);
        e.classList.add(addClass);
    }
}

window.onload = () => {
    const form = {
        elem: document.querySelector('form'),
        data: "",
        submitted: false
    }

    const answer = {
        user: document.querySelector('.user'),
        lang: document.querySelector('.programming-language'),
        desc: document.querySelector('.description'),
        btn: document.querySelector('#top-btn')
    }

    const nav = {
        bottom: document.querySelector('#bottom'),
        top: ""
    }

    form.elem.addEventListener('submit', (e) => {
        e.preventDefault();
        form.data = new FormData(form.elem);
        submit(form.data, answer);
        form.submitted = true;
    });

    document
        .querySelectorAll('[type="radio"]:not(.exception), [type="checkbox"], [type="text"]')
        .forEach(ipt => {
            ipt.addEventListener('change', () => {
                if (form.submitted) {
                    form.data = new FormData(form.elem);
                    submit(form.data, answer);
                }
            })
        });
    
    document
        .querySelector('#reset-btn')
        .addEventListener('click', () => {
            form.elem.reset();
            form.data = "";
            form.submitted = false;
            resetCounter();
            toggleDisplay(answer, false);
        });
}