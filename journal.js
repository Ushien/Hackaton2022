let myMemories = {"flashback" : [], "happythought" : [], "learning" : [], "story" : []};

function displayjournal(){
    $(".modal-body").replaceWith('<div class="modal-body"><..></div>')
    $("#staticBackdrop").modal("show")
}

let Journal_button = document.getElementById(journalButton)
$("#journalButton").replaceWith('<button id="journalButton" class="upperButton" onClick="displayjournal()"><i class="bi-book" style="font-size: 3rem; color: white;"></i></button>')