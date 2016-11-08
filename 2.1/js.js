/**
 * Created by ashotkazaryan on 22.08.16.
 */

function ChangeButtonPlay() {
    var Button = document.getElementById('Button2');
    var ChangeButton2 = document.getElementById("ChangeButton2");
    Button.removeChild(ChangeButton2);
    var NewIMg2 = document.createElement('img');
    NewIMg2.setAttribute('src','img/4.png');
    NewIMg2.setAttribute('height','40');
    NewIMg2.setAttribute('width','40');
    NewIMg2.setAttribute('id','ChangeButton');
    NewIMg2.setAttribute('onclick','ChangeButtonStop(); CarouselBody()');
    Button.appendChild(NewIMg2)
}
function ChangeButtonStop() {
    var Button = document.getElementById('Button2');
    var ChangeButton = document.getElementById("ChangeButton");
    Button.removeChild(ChangeButton);
    var NewIMg = document.createElement('img');
    NewIMg.setAttribute('src','img/3.png');
    NewIMg.setAttribute('height','40');
    NewIMg.setAttribute('width','40');
    NewIMg.setAttribute('id','ChangeButton2');
    NewIMg.setAttribute('onclick','ChangeButtonPlay(); stop()');
    Button.appendChild(NewIMg)

}
var lis = document.getElementsByClassName("Casrusell");
var Carousel = document.getElementById('top');
var allHeight = Carousel.offsetHeight;
Carousel.style.height = 500 * lis.length + 'px';

function play() {
    var PositionDiv = Carousel.getBoundingClientRect().top;
    var i=0;
    if(i<lis.length){


        if (-PositionDiv < allHeight - lis[i].offsetHeight  ) {
        Carousel.style.top = PositionDiv + -lis[i].offsetHeight + 'px';

        }
    else if  (-PositionDiv > -allHeight) {
        Carousel.style.top =  -lis[i].offsetHeight + 'px';
    }
        i++;
    }
 }


function start() {
    var PositionDiv = Carousel.getBoundingClientRect().top;
    var i=0;
    if(i<lis.length){
    if (PositionDiv  < - lis[i].offsetHeight ) {
        Carousel.style.top = PositionDiv + lis[i].offsetHeight + 'px';
    }
    else if  (PositionDiv >= -lis[i].offsetHeight) {
        Carousel.style.top =  -allHeight+lis[i].offsetHeight  + 'px';
    }
    }


}



function CarouselBody() {
    PosTop = 0;
    intStart = setInterval(Carousel3, 3);
}
PosTop = 0;
function Carousel3() {
    var PositionDiv = Carousel.getBoundingClientRect().top;
    var i=0;
    if(i<lis.length){
    if ( PosTop < allHeight- lis[i].offsetHeight) {
        console.log(PosTop);
        PosTop++;
        Carousel.style.top = -PosTop + 'px';
    }
    else if(PosTop == allHeight - lis[i].offsetHeight) {
        Carousel.style.top = 0 + 'px';
        PosTop = 0;
        PosTop++;
        Carousel.style.top = -PosTop + 'px';
    }
    }
    }

function stop() {
    clearInterval(intStart);
    Carousel.style.top = 0 + 'px';
}