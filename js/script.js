// var $mainHeader = $('#main-header');
// $mainHeader.replaceWith('hello');

$('#random-gif-btn').click(function(){
	$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg", function( data ) {
			var img = '<img src=" ' + data.data.fixed_width_small_url + ' ">';	
			console.log(data);
 			$('#random-gif-container').html(img);
		});

  // $( ".result" ).html( data );
  // alert( "Load was performed." );
});