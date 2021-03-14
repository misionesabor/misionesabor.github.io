/*=============================================================*/
/*=============================================================*/
/*==                   50g OR 1kg PRODUCT                    ==*/
/*=============================================================*/
/*=============================================================*/
var G50 = document.getElementById("G50");
G50.addEventListener("click", function (){
    var QValue = document.getElementById("QValue");
    var getValue = QValue.innerText;
    var NumberValue = parseInt(getValue);
    /*==================*/
    var QPrice = document.getElementById("price");
    document.getElementById("price").value = "50";
    var QPrice2 = document.getElementById("price2");
    /*==================*/
    if(NumberValue > 0){
        var G50value = 50;
        var realG50 = G50value * NumberValue;
        QPrice.innerHTML = realG50;
    }

    G50.style.backgroundColor = "rgb(141, 200, 132)";
    G50.style.color = "white";
    G50.style.borderWidth = "2px";
    G50.style.borderStyle = "solid";
    G50.style.borderColor = "rgb(141, 200, 132)";
    /*=========*/
    var KG1 = document.getElementById("KG1");
    KG1.style.backgroundColor = "white";
    KG1.style.color = "black";
    KG1.style.border = "none";
    /*=========*/
    var ptextPrice = document.getElementById("ptextPrice");
    ptextPrice.style.color = "rgb(141, 200, 132)";
    var ptextPrice2 = document.getElementById("ptextPrice2");
    ptextPrice2.style.color = "rgb(141, 200, 132)";
    QPrice.style.color = "rgb(141, 200, 132)";
    QPrice2.style.color = "rgb(141, 200, 132)";
    var BTNCO = document.getElementById("BTNCO");
    BTNCO.style.backgroundColor = "rgb(141, 200, 132)";
});
/*=============================================================*/
/*=============================================================*/
var KG1 = document.getElementById("KG1");
KG1.addEventListener("click", function (){
    var QValue = document.getElementById("QValue");
    var getValue = QValue.innerText;
    var NumberValue = parseInt(getValue);
    /*==================*/
    var QPrice = document.getElementById("price");
    document.getElementById("price").value = "950";
    var QPrice2 = document.getElementById("price2");
    /*==================*/
    if(NumberValue > 0){
        var QPrice = document.getElementById("price");
        var KG1value = 950;
        var realKG1 = KG1value * NumberValue;
        QPrice.innerHTML = realKG1;
    }

    KG1.style.backgroundColor = "rgb(40, 123, 27)";
    KG1.style.color = "white";
    KG1.style.borderWidth = "2px";
    KG1.style.borderStyle = "solid";
    KG1.style.borderColor = "rgb(40, 123, 27)";
    /*=========*/
    var G50 = document.getElementById("G50");
    G50.style.backgroundColor = "white";
    G50.style.color = "black";
    G50.style.border = "none";
    /*=========*/
    var ptextPrice = document.getElementById("ptextPrice");
    ptextPrice.style.color = "rgb(40, 123, 27)";
    var ptextPrice2 = document.getElementById("ptextPrice2");
    ptextPrice2.style.color = "rgb(40, 123, 27)";
    QPrice.style.color = "rgb(40, 123, 27)";
    QPrice2.style.color = "rgb(40, 123, 27)";
    var BTNCO = document.getElementById("BTNCO");
    BTNCO.style.backgroundColor = "rgb(40, 123, 27)";
});
/*=============================================================*/
/*=============================================================*/
/*==                  LESS OR PLUS PRODUCT                   ==*/
/*=============================================================*/
/*=============================================================*/
var plus = document.getElementById("plus");
plus.addEventListener("click", function (){
    var QValue = document.getElementById("QValue");
    var getValue = QValue.innerText;
    var NumberValue = parseInt(getValue);
    /*==================*/
    var plusNumber = 1 + NumberValue;
    QValue.innerHTML = plusNumber;
    /*==================*/

    var priceValue = document.getElementById("price").value;
    if(priceValue === "50"){
        if(plusNumber >= 1){
            var QPrice = document.getElementById("price");
            var valuePrice = QPrice.innerText;
            var NumberPrice = parseInt(valuePrice);
            var plusPrice = NumberPrice + 50;
            QPrice.innerHTML = plusPrice;                     
        }
    }
    if(priceValue === "950"){
        if(plusNumber >= 1){
            var QPrice = document.getElementById("price");
            var valuePrice = QPrice.innerText;
            var NumberPrice = parseInt(valuePrice);
            var plusPrice = NumberPrice + 950;
            QPrice.innerHTML = plusPrice;                     
        }
    }
});
/*=============================================================*/
/*=============================================================*/
var less = document.getElementById("less");
less.addEventListener("click", function (){
    var QValue = document.getElementById("QValue");
    var getValue = QValue.innerText;
    var NumberValue = parseInt(getValue);
    /*==================*/
    var priceValue = document.getElementById("price").value;
    if(priceValue === "50"){
        if(NumberValue > 0){
            var lessNumber = NumberValue - 1;
            QValue.innerHTML = lessNumber;
            /*===$$$===*/
            var QPrice = document.getElementById("price");
            var valuePrice = QPrice.innerText;
            var NumberPrice = parseInt(valuePrice);
            var lessPrice = NumberPrice - 50;
            QPrice.innerHTML = lessPrice;
        }
    }
    if(priceValue === "950"){
        if(NumberValue > 0){
            var lessNumber = NumberValue - 1;
            QValue.innerHTML = lessNumber;
            /*===$$$===*/
            var QPrice = document.getElementById("price");
            var valuePrice = QPrice.innerText;
            var NumberPrice = parseInt(valuePrice);
            var lessPrice = NumberPrice - 950;
            QPrice.innerHTML = lessPrice;
        }
    }
    /*==================*/
});

