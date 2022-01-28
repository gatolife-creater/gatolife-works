import { createTabs } from "./create-contents.js";
import { setTextbookLinks } from "./textbook-link.js";
import { whereAmI } from "./where-am-i.js";
import { detectJargon } from "./words.js"
import { LoadProc } from "./date.js";

window.addEventListener("load", function() {
    createTabs();
    setTextbookLinks();
    whereAmI();
    setLang();
    detectJargon();
});

window.addEventListener('scroll', function() {});

setInterval(LoadProc, 1000);

function setLang() {
    let lang = document.getElementsByTagName("html")[0].lang;
    lang = "jp";
    console.log(lang);
}

let メッセージ = `サイトのデザインの改善にご協力いただけると幸いです。Twitter：@gatolife81、もしくはGmail：gatolifechannel@gmail.comからご連絡ください。`;

console.log(メッセージ);