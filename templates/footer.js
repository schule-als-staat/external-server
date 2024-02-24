(() => {
    const footer = `
        <footer>
            <div class="column">
                <p>MAX-BORN-GYMNASIUM</p>
                <p>Maubacher Straße 62<br />71522 Backnang</p>

                <nav>
                    <a href="impressum.html">Impressum</a>
                    <a href="datenschutz.html">Datenschutz</a>
                </nav>

                <br />
            </div>

            <div class="column">
                <a
                    href="https://max-born-gymnasium.de/"
                    target="_blank"
                    rel="noopener"
                    class="icon"
                >
                    <img src="images/mbg-icon.ico" width="32" height="32" alt="MBG" />
                </a>

                <a
                    href="https://www.instagram.com/mbg_schulealsstaat_24/"
                    target="_blank"
                    rel="noopener"
                    class="icon"
                >
                    <img
                        src="images/instagram.svg"
                        width="32"
                        height="32"
                        alt="Instagram"
                    />
                </a>

                <p>Kontakt:<br /><a href="mailto:sals@mbg-bk.de">sals@mbg-bk.de</a></p>
            </div>
        </footer>
    `.trim();

    const placeholder = document.querySelector("script#footer-placeholder");

    const temp = document.createElement("div");
    temp.innerHTML = footer;
    const footerNode = temp.firstChild;

    placeholder.parentNode.replaceChild(footerNode, placeholder);
})();
