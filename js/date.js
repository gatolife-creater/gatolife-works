function LoadProc() {
    let now = new Date();
    let target = document.getElementById("DateTimeDisp");
    target.setAttribute("class", "unselectable");
    let Hour = now.getHours();
    let Min = now.getMinutes();
    let Sec = now.getSeconds();
    target.innerHTML = Hour + "時" + Min + "分";
}

export { LoadProc };