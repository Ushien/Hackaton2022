function showNewMemoryModal() {
    console.log("CREER MODAL");
    $("#staticBackdrop").toggle();

}

function showCommuMemoryModal() {
    console.log("MONTRER MODAL");
}


modals = {
    "m001": showNewMemoryModal,
    "m002": showCommuMemoryModal
}
