/*
Ici on code la boîte de dialogue et son affichage
*/

let tempsList = ["un mois", "un an", "dix ans"]
// Retourne une période au hasard parmi les différentes périodes dans la variable temps.

let activitésList = ["du tricot", "du coloriage", "une partie d'échec"]
// Retourne une activité au hasard parmi les différentes activités dans la variable activité.

let persoList = ["Albert"]
// Retourne une personne au hasard parmi les différentes personnes dans la variable personnes.

let activité = pickInList(activitésList);
let temps = pickInList(tempsList);
let perso = pickInList(persoList)

dialogs = {
    "default":{"d001" : ["Salut!", "Bonjour!", "Coucou!", "Quelle belle journée!"],
                "d016" : ["A bientôt.","Bonne nuit.", "Au revoir!", "A demain.", "Bonne journée!"],
                "d017" : ["Je me présente: je m'appelle Roberto. Je serai votre assitant de bien-être personnel."],
                "d018" : ["Puis-je savoir quel est votre nom?"],
                "d019" : ["Quel beau prénom!"],
                "d119" : ["Comment souhaitez-vous que je m'adresse à vous?"],
                "d020" : ["Très bien! Et quel âge avez-vous, si ce n'est pas trop indiscret?"],
                "d021" : ["Puis-je vous tutoyer?"],
                "d022" : ["Super!"],
                "d023" : ["Je suis désolé d'entendre ça."],
                "d024" : ["Il faudrait remédier à ça"],
                "d026" : ["C'est une bonne chose!"],
                "d027": ["Pas de soucis."],
                "d029": ["Génial!","Super!"],
                "d030": ["Ce n'est pas grave."],
                "d031": ["Une autre fois peut-être."],
                "d032": ["Et vous, qui êtes-vous? Commençons la création de votre profil, si vous le voulez bien."],
                "d033": ["Maintenant que nous en avons fini avec les modalités pratiques, il est temps de passer à la suite!"],
                "d034": ["Content d'entendre ça!"],
                "d035": ["Bien. Passons à la phase suivante"],
                "d036": ["Je pense que nous en avons fini pour aujourd'hui! ","Notre rendez-vous d'aujourd'hui arrive à son terme."],
                "d037": ["Je suis enchanté d'être votre assistant."],
                "d039": ["J'ai quelques questions à vous poser pour pouvoir vous aider du mieux possible!"],
                "d041": ['Pour ce faire, rien de plus simple! Il suffit de répondre à une série de questions.'],
                "d042": ['Commençons!'],
                "d043": ["Je suis très heureux de le savoir!"],
                "d044": ["Pas de soucis, je comprends parfaitement."],
                "d045": ["C'est une excellente nouvelle!"],
                "d046": ["Dans ce cas, passons à la suite.","Nous pouvons donc passer à la suite.","Très bien. Maintenant, parlons d'une autre catégorie."],
                "d047": ["Je suis bien sûr là pour vous écouter mais je ne peux pas vous prendre dans mes bars","Je suis là pour vous aider, mais un proche serait tout aussi compétent.","Je suis navré d'entendre cela. Peut-être que vous devriez en parler?"],
                "d052": ["Merci d'avoir partagé ce souvenir."],
                "d053": ["Merci d'avoir partagé ce moment joyeux, il égaie ma journée!"],
                "d054": ["Une compétence fort utile!"],
                "d055": ["Merci pour cette belle histoire."],
                "d100": ["Eh attend ! J'ai pas fini moi !"],
                "d101": ["Bonne chance à toutes les quipes du Hackathon! Vive le CSLabs!"],

    },
    "HV" : {"d002": ["Cela fait longtemps qu'on s'est pas vu!"],
            "d003": ["Comment allez-vous aujourd'hui?", "Comment vous sentez-vous aujourd'hui?"],
            "d004": ["Comment se passe votre journée ?"],
            "d005": ["Vous êtes-vous senti en sécurité aujourd'hui ?"],
            "d006": ["Vous êtes-vous senti seul ?"],
            "d007": ["Avez-vous eu de la visite récemment ?"],
            "d008": ["J'ai bien dormi et vous ?"],
            "d009": ["Aujourd'hui vous pourriez faire " + activité, "Et si vous tentiez " + activité+" ?", "Quelle belle journée pour faire "+ activité],
            "d010": ["Avez-vous fait une nouvelle activité aujourd'hui dont vous voudriez discuter ?", "Voulez-vous me parler de ce que vous avez appris aujourd'hui?"],
            "d011": ["Désirez-vous me partager un de vos souvenirs ?"],
            "d012": ["Voulez-vous me raconter quel a été votre meilleur moment de la journée?", "Voudriez-vous me dire en quoi cette journée a été spécial pour vous ?"],
            "d013": ["Il y a " + temps + ", vous m'aviez raconté que vous aviez fait " + activité,"Est-ce que vous souvenez-vous de ce souvenir raconté il y a " + temps],
            "d014": ["Quelle belle journée vous avez eu !"],
            "d015": [perso+" a partagé un souvenir. Voudriez-vous le découvrir?"],
            "d025" : ["Je suis là pour vous y aider!"],
            "d028" : ["Voulez-vous me raconter votre journée?"],
            "d038": ["Merci beaucoup pour vos réponses. J'ai l'impression de déjà vous connaitre à présent!"],
            "d040": ["Dans un premier temps, je vous propose de parler de vous.","Parlons d'abord de vous."],
            "d048":["J'ai hâte d'entendre votre histoire","Je parie que votre histoire sera incroyable.","Ces moments sont inoubliables!"],
            "d049": ["J'espère que ce partage vous aura plu.","Je trouve que c'est une belle histoire."],
            "d050": ["Puis-je quand même vous poser une autre question?"],
            "d051":["J'ai été très heureux de discuter avec vous!","C'est toujours un plaisir de parler avec vous.","Merci d'avoir partagé votre journée."]
    },
    "HT" : {"d002": ["Cela fait longtemps qu'on ne s'est pas vu"],
            "d003": ["Comment vas-tu aujourd'hui?", "Comment te sens-tu aujourd'hui?"],
            "d004": ["Comment se passe ta journée ?"],
            "d005": ["Est-ce que tu t'es senti en sécurité aujourd'hui ?"],
            "d006": ["Est-ce que tu t'es senti seul ?"],
            "d007": ["As-tu eu de la visite récemment ?"],
            "d008": ["J'ai bien dormi et toi ?"],
            "d009": ["Aujourd'hui tu pourrais faire " + activité, "Et si tu tentais" + activité+" ?", "Quelle belle journée pour faire " + activité],
            "d010": ["As-tu fait une nouvelle activité aujourd'hui dont tu voudrais discuter ?", "Veux-tu me parler de ce que tu as appris aujourd'hui?"],
            "d011": ["Désires-tu me partager un de tes souvenirs ?"],
            "d012": ["Veux tu me raconter quel a été ton meilleur moment de la journée", "Voudrais tu me dire en quoi cette journée a été spécial pour toi ?"],
            "d013": ["Il y a " + temps + ", tu m'avais raconté que tu avais fait " + activité,"Est-ce que tu te souviens de ce souvenir raconté il y a " + temps],
            "d014": ["Quelle belle journée tu as eu !"],
            "d015": [perso+" a partagé un souvenir. Veux-tu le découvrir?"],
            "d025" : ["Je suis là pour t'y aider!"],
            "d028" : ["Veux-tu me raconter ta journée?"],
            "d038": ["Merci beaucoup pour tes réponses. J'ai l'impression de déjà te connaitre à présent!"],
            "d040": ["Dans un premier temps, je te propose de parler de toi.","Parlons d'abord de toi."],
            "d048":["J'ai hâte d'entendre ton histoire.","Je parie que ton histoire sera incroyable.","Ces moments sont inoubliables!"],
            "d049": ["J'espère que ce partage t'aura plu.","Je trouve que c'est une belle histoire."],
            "d050": ["Puis-je quand même te poser une autre question?"],
            "d051":["J'ai été très heureux de discuter avec toi!","C'est toujours un plaisir de parler avec toi.","Merci d'avoir partagé ta journée."]
    },
    "FV" : {"d002": ["Cela fait longtemps qu'on ne s'est pas vu"],
            "d003": ["Comment allez-vous ?", "Comment vous sentez-vous ?"],
            "d004": ["Comment se passe votre journée ?"],
            "d005": ["Vous êtes-vous senti en sécurité aujourd'hui ?"],
            "d006": ["Vous êtes-vous senti seul ?"],
            "d007": ["Avez-vous eu de la visite récemment ?"],
            "d008": ["J'ai bien dormi et vous ?"],
            "d009": ["Aujourd'hui vous pourriez faire " + activité, "Et si vous tentiez " + activité+" ?", "Quelle belle journée pour faire "+ activité],
            "d010": ["Avez-vous fait une nouvelle activité aujourd'hui dont vous voudriez discuter ?", "Voulez-vous me parler de ce que vous avez appris aujourd'hui?"],
            "d011": ["Désirez-vous me partager un de vos souvenirs ?"],
            "d012": ["Voulez-vous me raconter quel a été votre meilleur moment de la journée?", "Voudriez-vous me dire en quoi cette journée a été spécial pour vous ?"],
            "d013": ["Il y a " + temps + ", vous m'aviez raconté que vous aviez fait " + activité,"Est-ce que vous souvenez-vous de ce souvenir raconté il y a " + temps],
            "d014": ["Quelle belle journée vous avez eu !"],
            "d015": [perso+" a partagé un souvenir. Voudriez-vous le découvrir?"],
            "d025" : ["Je suis là pour vous y aider!"],
            "d028" : ["Voulez-vous me raconter votre journée?"],
            "d038": ["Merci beaucoup pour vos réponses. J'ai l'impression de déjà vous connaitre à présent!"],
            "d040": ["Dans un premier temps, je vous propose de parler de vous.","Parlons d'abord de vous."],
            "d049": ["J'espère que ce partage vous aura plu.","Je trouve que c'est une belle histoire."],
            "d048":["J'ai hâte d'entendre ton histoire.","Je parie que votre histoire sera incroyable.","Ces moments sont inoubliables!"],
            "d050": ["Puis-je quand même te poser une autre question?"],
            "d051":["J'ai été très heureux de discuter avec toi!","C'est toujours un plaisir de parler avec toi.","Merci d'avoir partagé ta journée."]
    },
    "FT" : {"d002": ["Cela fait longtemps qu'on ne s'est pas vu"],
            "d003": ["Comment vas-tu ?", "Comment te sens-tu ?"],
            "d004": ["Comment se passe ta journée ?"],
            "d005": ["Est-ce que tu t'es senti en sécurité aujourd'hui ?"],
            "d006": ["Est-ce que tu t'es senti seul ?"],
            "d007": ["As-tu eu de la visite récemment ?"],
            "d008": ["J'ai bien dormi et toi ?"],
            "d009": ["Aujourd'hui tu pourrais faire " + activité, "Et si tu tentais" + activité+" ?", "Quelle belle journée pour faire " + activité],
            "d010": ["As-tu fait une nouvelle activité aujourd'hui dont tu voudrais discuter ?", "Veux-tu me parler de ce que tu as appris aujourd'hui?"],
            "d011": ["Désires-tu me partager un de tes souvenirs ?"],
            "d012": ["Veux tu me raconter quel a été ton meilleur moment de la journée?", "Voudrais tu me dire en quoi cette journée a été spécial pour toi ?"],
            "d013": ["Il y a " + temps + ", tu m'avais raconté que tu avais fait " + activité,"Est-ce que tu te souviens de ce souvenir raconté il y a " + temps],
            "d014": ["Quelle belle journée tu as eu !"],
            "d015": [perso+" a partagé un souvenir. Veux-tu le découvrir?"],
            "d025" : ["Je suis là pour t'y aider!"],
            "d028" : ["Veux-tu me raconter ta journée?"],
            "d038": ["Merci beaucoup pour tes réponses. J'ai l'impression de déjà te connaitre à présent!"],
            "d040": ["Dans un premier temps, je te propose de parler de toi.","Parlons d'abord de toi."],
            "d048":["J'ai hâte d'entendre ton histoire.","Je parie que ton histoire sera incroyable.","Ces moments sont inoubliables!"],
            "d049": ["J'espère que ce partage t'aura plu.","Je trouve que c'est une belle histoire."],
            "d050": ["Puis-je quand même te poser une autre question?"],
            "d051":["J'ai été très heureux de discuter avec toi!","C'est toujours un plaisir de parler avec toi.","Merci d'avoir partagé ta journée."]
    }
}

dialogSuites = {
        "Salutations": ["d001"],
        "Check-up": ["d040","d041","d042","d003",{"c002":{
            1:["d034"],
            2:["d004",{"c007":{
                1:["d034"],
                2:["d006",{"c004":{
                    1:["d025"],
                    2:["d026"]}}]}}],
            3:["d023","d006",{"c004":{
                1:["d025","d005",{"c003":{
                    1:["d007",{"c005":{
                        1:["d026"],
                        2:["d024"]}}],
                    2:["d034"]}}],
                2:["d007",{"c005":{
                    1:["d026"],
                    2:["d024"]}}]}}]}}],
        "Premier_contact": ["d017",{"c015":{
            1:["d018","m006","d019", "d119",{"c016":{
                1:["e001","d020","m007","d021",{"c017":{
                    1:["d022","e003","d038","d033"],
                    2:["d022","e004","d038","d033"]}}],
                2:["e002","d020","m007","d021",{"c017":{
                    1:["d022","e003","d038","d033"],
                    2:["d022","e004","d038","d033"]}}]}}],
            2:["d018","m006","d019", "d119",{"c016":{
                1:["e001","d020","m007","d021",{"c017":{
                    1:["d022","e003","d038","d033"],
                    2:["d022","e004","d038","d033"]}}],
                2:["e002","d020","m007","d021",{"c017":{
                    1:["d022","e003","d038","d033"],
                    2:["d022","e004","d038","d033"]}}]}}]}}],
        "Proposer_activite": ["d035","d009",{"c008":{
            1:["d022"],
            2:["d022"],
            3:["d027"]}}],
        "Au_revoir": ["d036","d051","d016"],
        "Souvenir_activite": ["d013",{"c012":{
            1:["d029"],
            2:["d027"]}}],
        "Entree_souvenir": ["d011",{"c010":{
            1:["d029","d048","m001","d052"],
            2:["d044"]}}],
        "Entree_joyeux_moment": ["d012",{"c021":{
            1:["d022","d048","m002","d053"],
            2:["d030"]}}],
        "Entree_nouvelle_connaissance": ["d010",{"c022":{
            1:["d014","d048","d034","m003","d054"],
            2:["d030","d031"]}}],
        "Entree_nouvelle_histoire": ["d028",{"c020":{
            1:["d029","d048","m004","d055"],
            2:["d031"]}}],
        "Histoire_commune": ["d015",{"c014":{
            1:["d022","m005","d049"],
            2:["d027","d031"]}}],
        "Transition": ["d046"],
        "Easter_egg":["d100","d101"]
}

let dialogEmotions = {
    "question": ["d018","d119","d020","d032","d003","d004","d005","d006","d007","d008","d010","d011","d012","d021","d015","d028","d050"],
    "content": ["d022","d026","d034","d037","d043","d029","d045","d014","d038","d048","d051", "d019"],
    "wink": ["d029","d002","d027","d044","d054","d025","d049"],
    "sleep": []
}

function getDialog(ID) {
    if (dialogs[getUserType()][ID] == undefined) {
        console.assert(dialogs["default"][ID] != undefined, "dialog is undefined : "+ID+", type: "+getUserType());
        return dialogs["default"][ID];
    }
    return dialogs[getUserType()][ID];
}

const facts = ["J'ai été marcher dans les bois, je me suis perdu", "J'ai eu la visite de ma famille", "J'ai préparé un tarte elle était délicieuse", "J'ai tricoté un pull", "J'ai regardé un film", "J'ai lu un livre, il était nul", "J'ai été faire des courses"]
function get_random_fact(facts_array){
    let fact =pick(facts_array)
    return fact
}
