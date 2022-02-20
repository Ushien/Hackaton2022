let myMemories = [];


function displayJournal(){
    $(".modal-body").replaceWith('<div class="modal-body"><myMemories></div>')
    $("#staticBackdrop").modal("show");
}

let Qbuttonjournal = document.getElementById(journalButton)
$("#journalButton").replaceWith('<button id="journalButton" class="upperButton" onClick="displayJournal()"><i class="bi-book" style="font-size: 3rem; color: white;"></i></button>')

