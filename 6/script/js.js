/*
 <img src="img/11.png" height="35" width="35" alt="" class="light1" id="light1">
 <img src="img/12.png" height="15" width="16" alt="" class="light2" id="light2">


function Lightoff() {
    var Button1 =document.getElementById('Button1');
    var light1 =document.getElementById('light1');
    var light2 =document.getElementById('light2');

    if (light2) {
        Button1.removeChild(light1);
    }
    if (light1) {
        Button1.removeChild(light2);
    }
    if (LightOf == null) {
    var LightOf = document.createElement('img');
    LightOf.setAttribute("height", "13");
    LightOf.setAttribute("width", "14");
    LightOf.setAttribute("src", "img/13.png");
    LightOf.setAttribute("onclick", "Carusel2()");
    LightOf.setAttribute("id", "lightOff1");
    Button1.appendChild(LightOf);
    }
}

function LightON() {
    var Button2 =document.getElementById('Button2');
   var LightOff = document.getElementById("lightOff2");

    if (LightOff) {
    Button2.removeChild(LightOff);
        var LightOn1 = document.createElement('img');
    LightOn1.setAttribute("height", "35");
    LightOn1.setAttribute("width", "35");
    LightOn1.setAttribute("onclick", "Carusel1()");
        LightOn1.setAttribute("id", "light1");
    LightOn1.setAttribute("alt", "2");
    LightOn1.setAttribute("class", "light1");
    LightOn1.setAttribute("src", "img/11.png");
    Button2.appendChild(LightOn1);
    var LightOn2 = document.createElement('img');
    LightOn2.setAttribute("height", "15");
        LightOn2.setAttribute("id", "light2");
    LightOn2.setAttribute("width", "16");
    LightOn2.setAttribute("alt", "2");
    LightOn2.setAttribute("class", "light2");
    LightOn2.setAttribute("src", "img/12.png");
    Button2.appendChild(LightOn2);
   }
}
*/
function Carusel1() {
//    LightON();
//    Lightoff();
    var img1 = document.getElementById('img1');
    var top = document.getElementById('top');
    if (img1)  //ստուգում
    {
        top.removeChild(img1);
    }
    var  CheckImg2 = document.getElementById('img2');
    if (CheckImg2 === null)  //ստուգում
    {
        var img2 = document.createElement('img');    // 2 նկարի ստեղծում
        img2.setAttribute('width', '960');
        img2.setAttribute('height', '314');
        img2.setAttribute('src', 'img/9.png');
        img2.setAttribute('id', 'img2');
        top.appendChild(img2)
    }
}
function Carusel2()
{

//    LightON();
 //   Lightoff();
    var top = document.getElementById('top');
    var CheckImg2 = document.getElementById('img2');
    if (CheckImg2)  //ստուգում
    {
        top.removeChild(CheckImg2);
    }
    var img1 = document.getElementById('img1');
    if (img1 === null)  //ստուգում
    {
        var img3 = document.createElement('img');    // 2 նկարի ստեղծում
        img3.setAttribute('width', '960');
        img3.setAttribute('height', '314');
        img3.setAttribute('src', 'img/8.png');
        img3.setAttribute('id', 'img1');
        top.appendChild(img3)
    }
}
