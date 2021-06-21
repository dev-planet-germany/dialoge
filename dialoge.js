function dialogOeffnen(dialogId) {
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}

function dialogSchliessen(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar");
    document.getElementById("body-overlay").classList.remove("sichtbar");
}