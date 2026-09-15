// ===============================
// MENÚ MÓVIL
// ===============================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    const menuAbierto = mainNav.classList.toggle("show");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAbierto
    );

    menuToggle.setAttribute(
        "aria-label",
        menuAbierto ? "Cerrar menú" : "Abrir menú"
    );
});

// ===============================
// SUBMENÚS EN MÓVIL
// ===============================

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {

    const enlace = dropdown.querySelector(":scope > a");

    enlace.addEventListener("click", (event) => {

        event.preventDefault();

        dropdown.classList.toggle("open");

    });

});

// ===============================
// CERRAR MENÚ AL SELECCIONAR
// UN ENLACE NORMAL
// ===============================

const enlacesNormales = document.querySelectorAll(
    ".nav-list > li:not(.dropdown) > a"
);

enlacesNormales.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        mainNav.classList.remove("show");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menú"
        );

    });

});