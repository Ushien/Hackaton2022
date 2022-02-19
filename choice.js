/*
Ici on code les boutons de choix
*/

let choices = {

}

$(".choice").click((e) => {
    /* Click on choice */
    madeChoice(parseInt($(e.currentTarget).attr("nb")));
});
