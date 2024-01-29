fetch("templates/footer.html")
    .then((res) => res.text())
    .then((html) => {
        let placeholder = document.querySelector("script#footer-placeholder");
        let temp = document.createElement("div");
        temp.innerHTML = html;
        let footer = temp.firstChild;
        placeholder.parentNode.replaceChild(footer, placeholder);
    });
