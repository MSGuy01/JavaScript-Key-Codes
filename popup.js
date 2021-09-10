if (localStorage.getItem("key")) {
    displayKey();
}
document.addEventListener("keydown", function(e) {
    localStorage.setItem("key", e.keyCode + " (" + e.key + ")");
    displayKey();
});
function displayKey() {
    document.getElementById("text").style.color = "red";
    document.getElementById("text").innerHTML = localStorage.getItem("key");
}