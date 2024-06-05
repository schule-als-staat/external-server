function toggleNavBarVisibility() {
    document.body.classList.toggle("nav-bar-hidden");
}

(() => {
    function adaptNavBarToScreenWidth() {
        if (window.innerWidth <= 900) {
            document.body.classList.add("nav-bar-hidden");
        } else {
            document.body.classList.remove("nav-bar-hidden");
        }
    }

    function adjustNavBar() {
        const headerHeight = document.querySelector("header").offsetHeight;
        const sideBar = document.querySelector("aside");
        sideBar.style.setProperty("--side-nav-offset", headerHeight + "px");
    }

    // hide the navigation bar by default on smaller screens
    adaptNavBarToScreenWidth();

    const header = `
        <header>
            <img
                class="menu-icon"
                src="/images/menu.svg"
                alt="Menü"
                width="40"
                height="40"
                onclick="toggleNavBarVisibility()"
            />
            <a id="sals-logo" href="news.html">
                <img src="images/sals-white.svg" alt="sals-logo" width="50" height="50"/>
            </a>

            <h1 id="title">United States of Max-Born <p id="internal"><a href="https://usmb.local/">Link zur internen Website</a></p></h1>
            
            <a id="mbg-logo" href="https://max-born-gymnasium.de/">
                <img src="images/mbg-white.svg" alt="mbg-logo" height="50"/>
            </a>
        </header>

        <aside>
            <div class="nav-bar-top">
                <img id="theme-switch" src="" alt="theme-switch" onclick="switchTheme()"/>
                <img id="close-btn" src="/images/close.svg" onclick="toggleNavBarVisibility()"/>
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
            </nav>
        </aside>
        <div class="overlay" onclick="toggleNavBarVisibility()"></div>
    `.replace(/\s{2,}/g, " ");

    const selectedNavItemId = document.currentScript.getAttribute("website");
    const placeholder = document.querySelector("script#header-placeholder");

    // convert the html string to DOM
    const temp = document.createElement("template");
    temp.innerHTML = header;
    const headerNode = temp.content;

    // apply a class to a navigation item in order to highlight it
    if (selectedNavItemId != null) {
        const navItem = headerNode.querySelector("a#" + selectedNavItemId);
        navItem.classList.add("selected");
    }

    // replace the script tag with the header
    placeholder.parentNode.replaceChild(headerNode, placeholder);

    // adjust the size and position of the navigation bar
    adjustNavBar();

    document.onreadystatechange = () => {
        if (document.readyState === "complete") {
            // set the width of the navigation bar for animations
            const navBarWidth = document.querySelector("aside").offsetWidth + 1;
            document.body.style.gridTemplateColumns = navBarWidth + "px 1fr";
        }
    };

    document.body.onresize = () => {
        adjustNavBar();
        adaptNavBarToScreenWidth();
    };
})();

fetch("https://usmb.local/")
    .then(() => {
        const internalLink = document.querySelector("#internal");
        internalLink.style.display = "block";
    })
    .catch(() => {});