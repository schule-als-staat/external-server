const selectedNavItem = document.currentScript.getAttribute("website");
const placeholder = document.querySelector("script#header-placeholder");

function htmlStringToNode(htmlString) {
    let temp = document.createElement("div");
    temp.innerHTML = htmlString;
    return temp.firstChild;
}

fetch("templates/header.html")
    .then((res) => res.text())
    .then((html) => {
        const header = htmlStringToNode(html);

        if (selectedNavItem != null) {
            header
                .querySelector("a#" + selectedNavItem)
                .classList.add("selected");
        }

        placeholder.parentNode.replaceChild(header, placeholder);
    });
