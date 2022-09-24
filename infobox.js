//Information Box
var textInformation = []; // Empty array to store text information
var openTextInfo = "<p class='textinfo'>";
var closeTextInfo = "</p>";
var textlink = "Click This To Close"; 

document.querySelector("p").onclick.style.visibility = "visible"
document.querySelector("p").onclick = close;

function close() {
    document.querySelector.innerHTML = " ";
}
