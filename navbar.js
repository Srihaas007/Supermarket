function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "none") {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
    } else {
        navLinks.style.display = "none";
    }
}
