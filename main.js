/**
 * 
 * @param {HTMLElement} btnMenu 
 * 
 */
function menuHamburger(btnMenu) {
    const linkHeader = document.querySelector(".link-header");

    if (btnMenu.classList.toggle("change")) {
        linkHeader.style.display = "block";

    } else {

        linkHeader.style.display = "none";
    }

}