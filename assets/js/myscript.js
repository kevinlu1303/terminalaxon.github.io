function onehover() {
    document.getElementById("bombthreattitle").style.color = "white";
    document.getElementById("01").style.color = "white";
    document.getElementById("ghostcastletitle").style.color = "#828282";
    document.getElementById("02").style.color = "#828282";
    document.getElementById("bajatitle").style.color = "#828282";
    document.getElementById("03").style.color = "828282";
    document.getElementById("boysinbluetitle").style.color = "#828282";
    document.getElementById("04").style.color = "#828282";
    if (document.getElementById("bar2-1").style.height == 0) {

            } else {
                document.getElementById("bar2-1").style.height = 0;
            }
    if (document.getElementById("bar1-1").style.height == 0) {
            document.getElementById("bar1-1").style.height = 200;

        } else {
            document.getElementById("bar1-1").style.height = 200;
         }

    //Ideas here
    var elements = Array.from(document.getElementsByClassName("songinfoboysinblue"));
    elements.forEach(hide);
    var elements = Array.from(document.getElementsByClassName("songinfoghostcastle"));
        elements.forEach(hide);
    var elements = Array.from(document.getElementsByClassName("songinfobaja"));
        elements.forEach(hide);

        showall1();
    document.getElementById("counter").innerHTML = "01";
    document.getElementById("counter").style.color = "white";
     somethingup = 1;


}

function twohover() {
    // TODO: Use the setBackgroundColor() to set the background color to #EF476F (or another color of your choice)
    document.getElementById("bombthreattitle").style.color = "#828282";
            document.getElementById("01").style.color = "#828282";
   document.getElementById("ghostcastletitle").style.color = "white";
      document.getElementById("02").style.color = "white";
      document.getElementById("bajatitle").style.color = "#828282";
          document.getElementById("03").style.color = "#828282";
          document.getElementById("boysinbluetitle").style.color = "#828282";
                  document.getElementById("04").style.color = "#828282";
   if (document.getElementById("bar1-1").style.height == 0) {
            document.getElementById("bar1-1").style.height = 400;
       } else {
            document.getElementById("bar1-1").style.height = 400;
       }if (document.getElementById("bar2-1").style.height == 0) {

       } else {
            document.getElementById("bar2-1").style.height = 0;
       }
    document.getElementById("counter").innerHTML = "02";
        document.getElementById("counter").style.color = "white";
    var elements = Array.from(document.getElementsByClassName("songinfoboysinblue"));
        elements.forEach(hide);
        var elements = Array.from(document.getElementsByClassName("songinfobombthreat"));
            elements.forEach(hide);
        var elements = Array.from(document.getElementsByClassName("songinfobaja"));
            elements.forEach(hide);
    showall2();
}
function threehover() {
    // TODO: Use the setBackgroundColor() to set the background color to #EF476F (or another color of your choice)
     document.getElementById("bombthreattitle").style.color = "#828282";
        document.getElementById("01").style.color = "#828282";
        document.getElementById("ghostcastletitle").style.color = "#828282";
        document.getElementById("02").style.color = "#828282";
        document.getElementById("bajatitle").style.color = "white";
        document.getElementById("03").style.color = "white";
        document.getElementById("boysinbluetitle").style.color = "#828282";
        document.getElementById("04").style.color = "#828282";
    if (document.getElementById("bar1-1").style.height == 0) {
            document.getElementById("bar1-1").style.height = 400;
        } else {
            document.getElementById("bar1-1").style.height = 400;
        }if (document.getElementById("bar2-1").style.height == 0) {
            document.getElementById("bar2-1").style.height = 200;
        } else {
            document.getElementById("bar2-1").style.height = 200;
        }
    document.getElementById("counter").innerHTML = "03";
        document.getElementById("counter").style.color = "white";
    var elements = Array.from(document.getElementsByClassName("songinfoboysinblue"));
    elements.forEach(hide);
    var elements = Array.from(document.getElementsByClassName("songinfoghostcastle"));
        elements.forEach(hide);
    var elements = Array.from(document.getElementsByClassName("songinfobombthreat"));
        elements.forEach(hide);
    showall3();

}
function fourhover() {
    // TODO: Use the setBackgroundColor() to set the background color to #EF476F (or another color of your choice)
    //MAKNG EVERYTHING WHITE OR GREY
    document.getElementById("bombthreattitle").style.color = "#828282";
    document.getElementById("01").style.color = "#828282";
    document.getElementById("ghostcastletitle").style.color = "#828282";
    document.getElementById("02").style.color = "#828282";
    document.getElementById("bajatitle").style.color = "#828282";
    document.getElementById("03").style.color = "#828282";
    document.getElementById("boysinbluetitle").style.color = "white";
    document.getElementById("04").style.color = "white";
    //BAR LOADING
    if (document.getElementById("bar1-1").style.height == 0) {
        document.getElementById("bar1-1").style.height = 400;
    } else {
        document.getElementById("bar1-1").style.height = 400;
    }if (document.getElementById("bar2-1").style.height == 0) {
        document.getElementById("bar2-1").style.height = 400;
    } else {
        document.getElementById("bar2-1").style.height = 400;
    }

    document.getElementById("counter").innerHTML = "04";
        document.getElementById("counter").style.color = "white";
    var elements = Array.from(document.getElementsByClassName("songinfobombthreat"));
        elements.forEach(hide);
        var elements = Array.from(document.getElementsByClassName("songinfoghostcastle"));
            elements.forEach(hide);
        var elements = Array.from(document.getElementsByClassName("songinfobaja"));
            elements.forEach(hide);
    showall4();
}
function showall1(){
 document.getElementById("hider1").style.zIndex = 1000;
    document.getElementById("hider2").style.zIndex = 999;
    document.getElementById("hider3").style.zIndex = 999;
    document.getElementById("hider4").style.zIndex = 999;
     var elements = Array.from(document.getElementsByClassName("songinfobombthreat"));
     elements.forEach(function(element) {show(element, 0)} )
      somethingup = 1;
}
function showall2(){
 document.getElementById("hider1").style.zIndex = 100;
    document.getElementById("hider2").style.zIndex = 1000;
    document.getElementById("hider3").style.zIndex = 100;
    document.getElementById("hider4").style.zIndex = 100;
    var elements = Array.from(document.getElementsByClassName("songinfoghostcastle"));
    elements.forEach(function(element) {show(element, 1)} )
     somethingup = 1;
}
function showall3(){
    document.getElementById("hider1").style.zIndex = 100;
    document.getElementById("hider2").style.zIndex = 100;
    document.getElementById("hider3").style.zIndex = 1000;
    document.getElementById("hider4").style.zIndex = 100;
    var elements = Array.from(document.getElementsByClassName("songinfobaja"));
    elements.forEach(function(element) {show(element, 2)} )
     somethingup = 1;
}
function showall4(){
 document.getElementById("hider1").style.zIndex = 100;
    document.getElementById("hider2").style.zIndex = 100;
    document.getElementById("hider3").style.zIndex = 100;
    document.getElementById("hider4").style.zIndex = 1000;
    var elements = Array.from(document.getElementsByClassName("songinfoboysinblue"));
    elements.forEach(function(element) {show(element, 3)} )
     somethingup = 1;
}
function hide(element) {
    element.style.top = 1200;
    element.style.opacity = "0";
}
function hidepage(element) {
    //element.style.top =  1000;
    element.style.marginTop=1000;
    element.style.opacity = "0";
    element.style.transition = "all 2s";
}
function showpage(element) {
    element.style.marginTop =  1000;
    element.style.marginTop=0;
    //element.style.margin-top = -100 + counter *86;
    element.style.visibility = "visible";
    element.style.opacity = "1";
    element.style.transition = "all 2s";
}
function show(element, counter) {
    element.style.top = 100 - counter * 86;
    //element.style.margin-top = -100 + counter *86;
    element.style.visibility = "visible";
    element.style.opacity = "1";
    element.style.transition = "all 1.5s";
    element.style.color = "white";

}
var somethingup = 0;

function switchtoabout() {
    var mainpage = document.getElementsByClassName("mainpagecontent");
    var elements  = Array.from(mainpage);
    elements.forEach(hidepage);
    var aboutpage = document.getElementsByClassName("aboutpagecontent");
    var elements = Array.from(aboutpage);
    elements.forEach(showpage)
    document.getElementById("aboutbutton").style.color = "white";
    document.getElementById("homebutton").style.color = "#828282";
}
function switchtomain() {
    var mainpage = document.getElementsByClassName("mainpagecontent");
    var elements = Array.from(mainpage);
    elements.forEach(showpage);
    var aboutpage = document.getElementsByClassName("aboutpagecontent");
    var elements = Array.from(aboutpage);
    elements.forEach(hidepage)
    document.getElementById("homebutton").style.color = "white";
    document.getElementById("aboutbutton").style.color = "#828282";
}
document.getElementById("bombthreattitle").onmouseover = onehover;
document.getElementById("ghostcastletitle").onmouseover = twohover;
document.getElementById("bajatitle").onmouseover = threehover;
document.getElementById("boysinbluetitle").onmouseover = fourhover;
document.getElementById("aboutbutton").onclick = switchtoabout;
document.getElementById("homebutton").onclick = switchtomain;