function validation() {
    let newLetter = document.querySelector("#form-newsletter");
    var nom = document.querySelector("#nom");
    var mail = document.querySelector("#mail");
    var ok = document.querySelector("#subscribeNews").checked;

    newLetter.addEventListener("submit", function(e) {

        if (nom.value = "") {
            let erreurNom = document.getElementById("erreurNom");
            alert("le champ nom est manquant");
            e.preventDefault;
            return
        }
        if (mail.value = "") {
            let erreurNom = document.getElementById("erreurNom");
            alert("le champ mail est manquant");
            e.preventDefault;
        } else {
            alert("Vous êtes inscrit ")
        }

    })
};

$(document).ready(function() {
    $(".button1").mouseover(function() {
        $(this).css("background-color", "#b11313");
        $(this).css("color", "white");
        $(this).css("border", "solid 2px white");
    })
    $(".button1").mouseout(function() {
        $(this).css("background-color", "white");
        $(this).css("color", "#b11313");
        $(this).css("border", "none");
    })
    $('#coeur').on('click', function() {
        $('#coeur1').css('display', 'inline-block');
        $('#coeur').css('display', 'none')
    })
    $('.logors').mouseover(function() {
        $(this).css('color', 'white');
    })
    $('.logors').mouseout(function() {
        $(this).css('color', 'black');
    })

})