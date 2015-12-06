var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";

document.getElementById("demo2").innerHTML =
    "Screen width is " + screen.width;

document.getElementById("demo3").innerHTML =
    "Available screen width is " + screen.availWidth;

document.getElementById("demo4").innerHTML =
    "Available screen height is " + screen.availHeight;