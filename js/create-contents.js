let pages = {
    javascript: 2,
    python: 0,
    cs: 0,
    html: 0,
    css: 0
};

function createTabs() {
    let langs = "javascript,python,cs,html,css".split(",");

    for (let i = 0; i < langs.length; i++) {
        let url = window.location.href;
        if (url.includes(langs[i] + "/")) {
            switch (langs[i]) {
                case "javascript":
                    for (let i = 0; i < pages.javascript; i++) {
                        createTab(i);
                    }
                    break;
                case "python":
                    for (let i = 0; i < pages.python; i++) {
                        createTab(i);
                    }
                    break;
                case "cs":
                    for (let i = 0; i < pages.cs; i++) {
                        createTab(i);
                    }
                    break;
                case "html":
                    for (let i = 0; i < pages.html; i++) {
                        createTab(i);
                    }
                    break;
                case "css":
                    for (let i = 0; i < pages.css; i++) {
                        createTab(i);
                    }
                    break;
            }
        }
    }

    function createTab(count) {
        let tab_panel = document.getElementsByClassName("nav-pills")[0];
        let newTab = document.createElement("li");
        newTab.setAttribute("class", "nav-item");
        newTab.innerHTML = `<a href="#" class="nav-link text-white auto-generated-href unselectable">
            &ensp;第${halfWidthToFullWidth(count+1+"")}回
        </a>`;
        tab_panel.appendChild(newTab);
    }
}

// 半角英数字を全角英数字に変換します。
// その他の文字はそのまま出力します。
function halfWidthToFullWidth(src) {
    return src.replace(/[A-Za-z0-9]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
}

export { createTabs, pages };