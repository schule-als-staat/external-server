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
                    <a id="verfassung" href="verfassung.html">Verfassung</a>
                    <a id="parteien" href="parteien.html">Parteien</a>
                    <a id="königspaar" href="königspaar.html">Königspaar</a>
                    <a id="staatsdienst" href="staatsdienst.html">Staatsdienst</a>
                    <a id="unternehmen" href="unternehmen.html">Unternehmen</a>
                    <a id="unterstützung" href="unterstützung.html">Unterstützung</a>
                    <!--<a id="parlament" href="parlament.html">Parlament</a> -->
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
})();
