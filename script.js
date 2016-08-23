 src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
 src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
 
 $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});