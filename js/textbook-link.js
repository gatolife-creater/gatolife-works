let langs = "beginner,javascript,python,cs,html,css".split(",");

function setTextbookLinks() {
    if (window.location.href.includes("textbook.html")) {
        for (let i = 0; i < langs.length; i++) {
            let txtlinks = document
                .getElementsByClassName(langs[i])[0]
                .children[1]
                .children;
            for (let chapter = 0; chapter < txtlinks.length; chapter++) {
                let temp = chapter + 1;
                txtlinks[chapter].href = `textbooks/${langs[i]}/${temp}.html`;
            }
        }
    }

    for (let i = 0; i < langs.length; i++) {
        if (window.location.href.includes(langs[i] + "/")) {
            let tablinks = document.getElementsByClassName("auto-generated-href");
            for (let tablink = 0; tablink < tablinks.length; tablink++) {
                let temp = tablink + 1;
                tablinks[tablink].href = `${temp}.html`;
                // tablinks[tablink].className = "auto-generated-href unselectable";
            }
        }
    }

    let tabs = document.getElementsByClassName("nav-link");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("unselectable");
    }
}



export { setTextbookLinks };