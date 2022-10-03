$(document).ready(function(){
  //Open lightbox on button click
 $('.lightbox img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();
        // Add a div class
        $(".photo").append('<div class="lightbox"></div>');


 //Check if lightbox has an image
 if ($('.box').contents('img')){
     $('.box').contents().remove('img'); //If true, clear image
 } 
 //Add lightbox to img 
 //$('img[src="http://127.0.0.1:5502/images/pet1.jpg"]').append("<div id='lightbox'></div>);
 //var lightbox = $(this).append('img')

 //Get text content in attribute
 var altvalue = $(this).attr('alt');
 
 if (altvalue=="Devon Rex Cat") {
    var img = $('.photo:ntn-child(1) img').clone(); // Duplicate DOM element
    $('.box').append(img); // Insert duplicated element in another element
    
 }
 });

 //$('body').append('<div id="showinfo"></div>');