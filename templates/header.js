(() => {
    const header = `
        <header>
            <div class="top-bar">
                <a href="news.html">
                    <img
                        id="sals-logo"
                        src="images/sals-white.svg"
                        alt="sals-logo"
                        width="50"
                        height="50"
                    />
                </a>

                <h1 id="title">United States of Max-Born</h1>

                <a href="https://max-born-gymnasium.de/">
                    <img
                        id="mbg-logo"
                        src="images/mbg-white.svg"
                        alt="mbg-logo"
                        height="50"
                    />
                </a>
            </div>

            <div class="nav-container">
                <div
                    class="nav-header"
                    onclick="document.querySelector('nav').classList.toggle('visible')"
                >
                    <p id="menu-title">Menü</p>
                    <img
                        class="menu-icon"
                        src="images/menu.svg"
                        alt="Menü"
                        width="40"
                        height="40"
                    />
                </div>
                <nav>
                    <a id="news" href="news.html">News</a>
                    <a id="projekt" href="projekt.html">Projekt</a>
                    <a id="termine" href="termine.html">Termine</a>
                    <a id="genehmigteunternehmen" href="genehmigteUnternehmen.html">Genehmigte Unternehmen</a>
                    <a id="offeneStellen" href="offeneStellen.html">Offene Stellen</a>
                    <a id="staatsdienst" href="staatsdienst.html">Staatsdienst</a>
                    <a id="unternehmen" href="unternehmen.html">Unternehmen</a>
                    <a id="parlament" href="parlament.html">Parlament</a>
                    <a id="verfassung" href="verfassung.html">Verfassung</a>
                    <a id="parteien" href="parteien.html">Parteien</a>
                    <a id="königspaar" href="königspaar.html">Königspaar</a>
                    
                    <a id="unterstützung" href="unterstützung.html">Unterstützung</a>
                    

                    <img id="theme-switch" src="" alt="theme-switch" onclick="switchTheme()">
                </nav>
            </div>
        </header>
    `.trim();

    // get the `website` attribute from the script tag
    const selectedNavItem = document.currentScript.getAttribute("website");
    const placeholder = document.querySelector("script#header-placeholder");

    const temp = document.createElement("div");
    temp.innerHTML = header;
    const headerNode = temp.firstChild;

    // select the current website
    if (selectedNavItem != null) {
        headerNode
            .querySelector("a#" + selectedNavItem)
            .classList.add("selected");
    }

    placeholder.parentNode.replaceChild(headerNode, placeholder);

    document.addEventListener("DOMContentLoaded", () => {
        const allElements = document.querySelectorAll("body, body *");
        // disable css transitions to prevent flashing of the website
        allElements.forEach((element) => {
            element.style.transitionDuration = "0s";
        });

        // update the theme
        updateThemeIcon();

        // reenable css transitions
        const style = getComputedStyle(document.body);
        const duration = style.getPropertyValue("--transition-duration");
        allElements.forEach((element) => {
            element.style.transitionDuration = duration;
        });
    });
})();

function switchTheme() {
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "light");
    }
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "dark");
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    // Überprüfen, ob das bevorzugte Farbschema des Benutzers "dark" ist
    const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const prefersLightScheme = window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches;

    // Überprüfen, ob bereits ein Theme im localStorage gespeichert ist
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.querySelector("img#theme-switch").src = "images/sun.svg";
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else if (storedTheme === "light") {
        document.querySelector("img#theme-switch").src = "images/moon.svg";
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    } else {
        if (prefersDarkScheme) {
            document.querySelector("img#theme-switch").src = "images/sun.svg";
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else if (prefersLightScheme) {
            document.querySelector("img#theme-switch").src = "images/moon.svg";
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }
}
