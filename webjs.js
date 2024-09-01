window.addEventListener('DOMContentLoaded', () => {
    // At this part we are loading languages list (it will updating periodically)
    ////////////////////////////////////////////////
    let languages = [ // Language / ico
        ["Python", "python.png"],
        ["JavaScript", "javascript.png"],
        ["TypeScript", "typescript.png"],
        ["C#", "csharp.png"]
    ];

    let langIcoClass = 'language-icon';
    let langNameClass = 'language-name';

    // Loading programming languages list
    let languages_list_element = document.querySelector('.preferred-languages');
    if (languages_list_element) {
        // Create an unordered list for the languages
        let ul_el = document.createElement('ul');
        languages_list_element.appendChild(ul_el);

        languages.forEach(lang => {
            let langName = lang[0];
            let langIco = lang[1];

            // Creating list item element
            let li_el = document.createElement('li');
            li_el.className = 'list-element'

            // Creating img element
            let icoEl = document.createElement('img');
            icoEl.src = `./src/langs/${langIco}`;
            icoEl.className = langIcoClass;
            icoEl.alt = langName;

            // Creating span element
            let langSpan = document.createElement('span');
            langSpan.textContent = langName;
            langSpan.className = langNameClass;

            // Append img and span to the list item
            li_el.appendChild(icoEl);
            li_el.appendChild(langSpan);

            // Append list item to the unordered list
            ul_el.appendChild(li_el);
        });
    }
    ////////////////////////////////////////////////

    let command = document.querySelector('.command-info');

    function change_command(_command, _filename) {
        if (command)
            command.innerHTML = `
        <span style="color: #ddd">${_command}</span>
        <span class='file-name'>${_filename}</span><span class='caret'>_</span>`
    }

    let aboutMeEl = document.querySelector('.about_me_py');
    let featuresEl = document.querySelector('.features_py');
    let futureGoalsEl = document.querySelector('.future_goals_py');

    let myself = document.querySelector('.myself');
    let features = document.querySelector('.features');
    let futureGoals = document.querySelector('.future-goals-main');

    function show_blocks(a, b, c) {
        if (!([a, b, c].every(val => typeof val === 'boolean')))
            throw new Error("Invalid type");

        const toShow = (value) => value ? 'block' : 'none';

        myself.style.display = toShow(a);
        features.style.display = toShow(b);
        futureGoals.style.display = toShow(c);
    }

    function clear_command() {
        change_command('', '');
        show_blocks(false, false, false);
    }

    const TIMEOUT = 300, // in milliseconds
        COMMAND = 'cat';

    if (myself && features && futureGoals) {
        aboutMeEl.addEventListener('click', () => {
            change_command(COMMAND, aboutMeEl.textContent);
            setTimeout(() => show_blocks(true, false, false), TIMEOUT);
        })
        featuresEl.addEventListener('click', () => {
            change_command(COMMAND, featuresEl.textContent);
            setTimeout(() => show_blocks(false, true, false), TIMEOUT);
        })
        futureGoalsEl.addEventListener('click', () => {
            change_command(COMMAND, futureGoalsEl.textContent);
            setTimeout(() => show_blocks(false, false, true), TIMEOUT);
        })

        clear_command();

        // Clear command on pressing escape
        document.onkeydown = (e) => {
            e.preventDefault();
            if (e.key.toLowerCase() === 'escape' || e.key.toLowerCase() === 'esc')
                clear_command();
        }
    }
});
