$(document).ready(function() {
$(document).scroll(function(){
     $('.beachimg').toggleClass('scrolled', $(this).scrollTop() > 200);
 });
});