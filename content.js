function waitingLoad() {
    setTimeout(main, 1000)
}

function main() {
    let iconArea = document.querySelector("pattern").children[0];
    console.log(iconArea.getAttribute("xlink:href"));
    iconArea.removeAttribute("xlink:href");
    iconArea.setAttribute("href", "https://ry0y4n.github.io/public-image-server/images/twitter-logo.png");
    console.log(iconArea.getAttribute("xlink:href"));
    console.log(iconArea.getAttribute("href"));
}

window.addEventListener("load", waitingLoad, false);