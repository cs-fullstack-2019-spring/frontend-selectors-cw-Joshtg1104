var getP1 =  document.getElementById("first");
console.log(getP1);
var getP2 = document.querySelector(".special");
console.log(getP2);
var getP3 = document.getElementsByTagName("p")[0];
console.log(getP3);

var getClass1 = document.querySelector(".special");
console.log(getClass1);
var getClass2 = document.querySelectorAll(".special");
console.log(getClass2);

var henshinBlue = document.getElementsByTagName("h1")[0];
henshinBlue.style.color = "#1709da";

var henshinYellow = document.getElementsByTagName("p")[3];
henshinYellow.style.color = "#fc0";

// var getP3 = document.getElementsByTagName("p");
// for(var i=0; i<getP3.length; i)
{
    // console.log(i);
    // console.log(getP3);
}
// break// doesn't work