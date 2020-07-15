//=============================================================================//
//============================ CAROUSEL SETTINGS ==============================//
/*······························*/
/*     CONTENIDO DE INICIO      */
/*······························*/
$(function(){
    $("#carousel1").carousel({
         pause: "true",
         interval: 12000
    });
});
function pageload (){
    var eventCapt = document.getElementById("rexload");
    eventCapt.style.display = "block";
    eventCapt.style.opacity = "1";
};

//===========================================//
$(function(){
    $("#carousel_Herbs_Sectiom").carousel({
         pause: "false",
         interval: 9000
    });
});
$(function(){
    $('#carousel-products-herb').carousel({
        pause: "true"
    });
});
//===========================================//

//===========================================//
$(function(){
    $("#carousel_condiment_Sectiom").carousel({
         pause: "false",
         interval: 9000
    });
});
$(function(){
    $('#carousel-products-cond').carousel({
        pause: "true"
    });
});
//===========================================//
$(function (){
    new WOW().init();
});
//=============================================================================//
//=============================================================================//
