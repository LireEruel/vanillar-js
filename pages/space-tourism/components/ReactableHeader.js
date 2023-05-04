class ReactableHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const $header = document.createElement("header");
    const $img = document.createElement("img");
    const $btn = document.createElement("button");
    const $hamburgerImage = document.createElement("img");
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

    $img.setAttribute("src", `${baseUrl}/assets/shared/logo.svg`);
    $img.alt = "logo image";
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
    $hamburgerImage.setAttribute(
      "src",
      `${baseUrl}/assets/shared/icon-hamburger.svg`
    );

    $header.appendChild($img);
    $header.appendChild($btn);
    $btn.appendChild($hamburgerImage);
    $header.appendChild($nav);
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
