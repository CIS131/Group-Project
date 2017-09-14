var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
var gravity = [0.38, 0.91, 1.0, 0.38, 2.34, 0.93, 0.92, 1.12, 0.58];
function addColumnHeaders() {
    var i = 0;
    while (i < 9) {
        document.getElementsByTagName("th")[i].innerHTML = planets[i];
        i++;
    }
}

function setWeight() {
    var i = 0;
    while (i < 9) {
        document.getElementsByTagName("td")[i].innerHTML = gravity[i];
        i++;
    }
}
// runs addColumnHeaders() function when page loads

function answerQuestion() {
    var j;
    var favs = new Array(1);
    for (j=0;j<1;j++) {
        favs[j] = prompt("Please enter your favorite planet", " ");
        }
    document.write = alert("Your favorite planet is " + favs[0] );
}
window.addEventListener("load", addColumnHeaders, false);
window.addEventListener("click", setWeight, false);
document.getElementById("go").addEventListener("click", answerQuestion, false);
