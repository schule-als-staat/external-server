function applyTheme() {
    const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const themeIcon = document.querySelector("img#theme-switch");

    if (theme === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        if (themeIcon) {
            themeIcon.src = "images/sun.svg";
        }
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        if (themeIcon) {
            themeIcon.src = "images/moon.svg";
        }
    }
}

function switchTheme() {
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        localStorage.setItem("theme", "dark");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
    updateThemeSwitchIcon();
}

document.addEventListener("DOMContentLoaded", applyTheme);