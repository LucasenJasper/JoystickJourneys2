// Functie om de sidebar te openen en te sluiten
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var overlay = document.getElementById("overlay");
    var body = document.body;

    if (sidebar.style.width === "250px") {
        // Sidebar sluiten
        sidebar.style.width = "0";
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        body.classList.remove("sidebar-open");
    } else {
        // Sidebar openen
        sidebar.style.width = "250px";
        overlay.style.visibility = "visible";
        overlay.style.opacity = "1";
        body.classList.add("sidebar-open");
    }
}
