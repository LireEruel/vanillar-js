class ReactableHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const $header = document.createElement("header");
    const $imglogo = document.createElement("img");
    const $btnHamburger = document.createElement("button");
    const $btnClose = document.createElement("button");
    const $imgClose = document.createElement("img");
    const $imgHamburger = document.createElement("img");
    const $nav = document.createElement("nav");
    const $ul = document.createElement("ul");
    const $liHome = document.createElement("li");
    const $liDestination = document.createElement("li");
    const $liCrew = document.createElement("li");
    const $liTech = document.createElement("li");
    const $anchorHome = document.createElement("a");
    const $anchorDestination = document.createElement("a");
    const $anchorCrew = document.createElement("a");
    const $anchorTech = document.createElement("a");

    const currentUrl = new URL(window.location.href);
    const baseUrl = currentUrl.origin + "/pages/space-tourism";

    $imglogo.setAttribute("src", `${baseUrl}/assets/shared/logo.svg`);
    $imglogo.alt = "logo image";
    $anchorHome.setAttribute("href", `${baseUrl}/index.html`);
    $anchorHome.textContent = "HOME";
    $anchorDestination.setAttribute(
      "href",
      `${baseUrl}/pages/destination.html`
    );
    $anchorDestination.textContent = "DESTINATION";
    $anchorCrew.setAttribute("href", `${baseUrl}/pages/crew.html`);
    $anchorCrew.textContent = "CREW";
    $anchorTech.setAttribute("href", `${baseUrl}/pages/technology.html`);
    $anchorTech.textContent = "TECHNOLOGY";
    $imgHamburger.setAttribute(
      "src",
      `${baseUrl}/assets/shared/icon-hamburger.svg`
    );
    $imgClose.setAttribute("src", `${baseUrl}/assets/shared/icon-close.svg`);
    $btnHamburger.className = "hamburger-btn";
    $btnHamburger.addEventListener("click", () => {
      this.classList.add("sidebar-mode");
    });
    $btnClose.className = "close-btn";
    $btnClose.addEventListener("click", () => {
      this.classList.remove("sidebar-mode");
    });

    $header.appendChild($imglogo);
    $header.appendChild($btnHamburger);
    $btnHamburger.appendChild($imgHamburger);
    $btnClose.appendChild($imgClose);
    $header.appendChild($btnClose);
    $header.appendChild($nav);
    $nav.appendChild($btnClose);
    $nav.appendChild($ul);
    $ul.appendChild($liHome);
    $ul.appendChild($liDestination);
    $ul.appendChild($liCrew);
    $ul.appendChild($liTech);
    $liHome.appendChild($anchorHome);
    $liDestination.appendChild($anchorDestination);
    $liCrew.appendChild($anchorCrew);
    $liTech.appendChild($anchorTech);

    this.appendChild($header);
  }
}

customElements.define("reactable-header", ReactableHeader);
