var encabezado = document.getElementById("encabezado"),
    contM = document.getElementById("contM"),
    menu = document.getElementById("menu"),
    a1 = document.getElementById("a1"),
    a2 = document.getElementById("a2");

function menuP() {

    if (innerWidth > 500 & scrollY > 10) {
        contM.style.background = "black";
        contM.style.color = "white";
        contM.style.marginTop = "-273px";
        contM.style.height = "56px";

        a1.style.color = "white";
        a2.style.color = "white";

    } else if (innerWidth > 500 & scrollY == 0) {
        contM.style.background = "none";
        contM.style.color = "black";
        contM.style.marginTop = "-273px";
        contM.style.height = "56px";
        a1.style.color = "black";
        a2.style.color = "black";
    }else if (innerWidth < 500 & scrollY >10) {

        contM.style.background = "black";
        contM.style.color = "white";
        contM.style.height = "56px";
        a1.style.color = "white";
        a2.style.color = "white";
    }else if (innerWidth < 500 & scrollY == 0) {
        contM.style.background = "none";
        contM.style.color = "black";
        //a1.style.color = "black";
        //a2.style.color = "black";
    }
}

if (innerWidth < 500) {
    a2.innerHTML = "";
}