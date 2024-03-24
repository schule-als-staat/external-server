/**
 * Applies the theme based on the user's preference or the system's color scheme.
 * If the user has previously selected a theme, it will be applied. Otherwise,
 * the theme will be set based on the system's preferred color scheme.
 */
function applyTheme() {
    const theme =
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

    if (theme === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }

    updateThemeSwitchIcon()
}

/**
 * Switches the theme between light and dark modes.
 * This function toggles the theme based on the current theme and updates the theme icon accordingly.
 */
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

/**
 * Updates the theme switch icon based on the current theme.
 * If the theme is dark, the sun icon is displayed. Otherwise, the moon icon is displayed.
 */
function updateThemeSwitchIcon() {
    const themeIcon = document.querySelector("img#theme-switch");
    if (document.body.classList.contains("dark")) {
        themeIcon.src = "images/sun.svg";
    } else {
        themeIcon.src = "images/moon.svg";
    }
}

/**
 * Event listener for the DOMContentLoaded event.
 * Calls the applyTheme function to set the theme when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {

    // temporary disable the theme animation to prevent flashing
    document.body.classList.add("no-theme-animation");

    applyTheme();

    // let the browser reflect the DOM changes on the screen
    window.setTimeout(() => {
        // enable the animation when switching themes
        document.body.classList.remove("no-theme-animation");
    }, 50);
});
