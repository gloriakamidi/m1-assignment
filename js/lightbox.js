$(document).ready(function(){
$('.lightbox img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();
});
 //Check if lightbox has an image
 if ($('.box').contents('img')){
    $('.box').contents().remove('img'); //If true, clear image
 } 
 //Add lightbox to img 
 $('#img').addClass(lightbox);
 //var lightbox = $(this).append('img')

 //Get text content in attribute
 var altvalue = $(this).attr('alt');
 
 if (altvalue == "Devon Rex Cat") {
    var img = $('#photo:ntn-child(1) img').clone(); // Duplicate DOM element
    $('.box').append(img); // Insert duplicated element in another element
 }