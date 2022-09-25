//Information Box
/* var textInformation = []; // Empty array to store text information
var openTextInfo = "<p class='textinfo'>";
var closeTextInfo = "</p>";
var textInfo = [Furry Friends];*/
var openTitle = "<div id='title'>";
var closeTitle = "</div>";
var infoBox;
var title = ["Furry Friends"];
var textInfo = ["Click This To Close"];
var txtLink = document.getElementById("textLink");
//txtLink.addEventListener("onclick");

//To Display Infobox
document.getElementsByClassName("description").addEventListener("onclick") = displayInfoBox;

function displayInfoBox() {
    document.getElementById("infobox").style.visibility = "visible";
    document.getElementById("title").innerHTML = captionText["pet1", "pet2", "pet3", "pet4", "pet5", "pet6", "pet7", "pet8", "pet9", "pet10"];
}

//To Close InfoBox
function closeInfoBox() {
    txtLink.close();
} 

 //image = openList + photos[i] + openCaption + captionText[i] + closeCaption + openDescription + descriptionText[i] + closeDescription + closeList + openTitle + title + closeTitle ; // Assemble  image element from array with list elements and store in a variable

/*  
       image = <li class= "photo"> + ["pet1", "pet2"...] + <p class= "caption"> + captionText[i] + </p> + <h2 class= "description"> + descriptionText[i]+ </h2> + </li>;

        */
