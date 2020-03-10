




//==========================================================//
////////////// Seccion de Pagina - "PRODUCTOS" ///////////////
//==========================================================//
var btn1catg = document.getElementById("look-herb");
btn1catg.addEventListener("mouseenter", function(){
    var btnPrd1 = document.getElementById("btnLookPrd1");
    btnPrd1.style.visibility = "visible";
});
btn1catg.addEventListener("mouseleave", function(){
    var btnPrd1 = document.getElementById("btnLookPrd1");
    btnPrd1.style.visibility = "hidden";
});
/////////////////////////
var btn2catg = document.getElementById("look-conds");
btn2catg.addEventListener("mouseenter", function(){
    var btnPrd2 = document.getElementById("btnLookPrd2");
    btnPrd2.style.visibility = "visible";
});
btn2catg.addEventListener("mouseleave", function(){
    var btnPrd2 = document.getElementById("btnLookPrd2");
    btnPrd2.style.visibility = "hidden";
});
////////////////////////
var btn3catg = document.getElementById("look-yerb");
btn3catg.addEventListener("mouseenter", function(){
    var btnPrd3 = document.getElementById("btnLookPrd3");
    btnPrd3.style.visibility = "visible";
});
btn3catg.addEventListener("mouseleave", function(){
    var btnPrd3 = document.getElementById("btnLookPrd3");
    btnPrd3.style.visibility = "hidden";
});