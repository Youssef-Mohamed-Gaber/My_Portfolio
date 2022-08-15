const mohsen = window.location.pathname;
console.log( mohsen)


// Start Variables
var header = document.getElementById("loop");
var btns = header.getElementsByClassName("btn");
var logo = document.getElementById("ysf");
var arrow = document.getElementById("button");
var my_copyRight = document.getElementById("copy-right");
var home = document.getElementById("hm");
// End Variables


// Start Functions
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


logo.onclick = function () {
    for (let i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");    
        home.classList.add("active");
    }
}


arrow.onclick = function () {
    for (let i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");    
        home.classList.add("active");
    }
}
my_copyRight.onclick = function () {
    for (let i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");    
        home.classList.add("active");
    }
}


window.onload = function () {
    home.click();
}

window.onscroll = function () {
    console.log(this.scrollY);
    if (this.scrollY >= 500) {
        arrow.style.opacity = '1';
    }
    else {
        arrow.style.opacity = '0';
        }
};
// End Functions