let myMemories = {"flashback" : [], "happythought" : [], "learning" : [], "story" : []};


function displayJournal(){
    console.log("ok")
    $(".modal-body").replaceWith('<div class="modal-body"><.....></div>')
    $("#staticBackdrop").modal("show");
}

let Qbuttonjournal = document.getElementById(journalButton)
$("#journalButton").replaceWith('<button id="journalButton" class="upperButton" onClick="displayJournal()"><i class="bi-book" style="font-size: 3rem; color: white;"></i></button>')
