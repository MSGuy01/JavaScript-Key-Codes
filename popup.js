document.addEventListener("keydown", function(e) {
    document.getElementById("text").style.color = "black";
    document.getElementById("text").innerHTML = e.keyCode;
});