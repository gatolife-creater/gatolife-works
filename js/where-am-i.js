export function whereAmI() {
    let url;
    let nav;
    url = location.href;
    nav = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav.length; i++) {
        /*最初は完全一致を条件としていたが、
        特定の要素にジャンプするリンクを a タグの href 属性に設定した時、
        現在のサイト位置がマーキングされなかったので 部分一致を条件とした*/
        if (url.includes(nav[i].href)) {
            nav[i].setAttribute("class", "nav-link active");
        }
    }
}