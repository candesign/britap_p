$(document).ready(function() {
    
    
    $( document ).ready(function( $ ) {
		$( '#s1' ).sliderPro({
            width: 480,
            height: 193,
            arrows: true,
            buttons: false,
            waitForLayers: true,
            autoplay: false,
            autoScaleLayers: false,
		});
	});
    $( document ).ready(function( $ ) {
		$( '#s2' ).sliderPro({
            width: 480,
            height: 193,
            arrows: true,
            buttons: false,
            waitForLayers: true,
            autoplay: false,
            autoScaleLayers: false,
		});
	});
    $( document ).ready(function( $ ) {
		$( '#s3' ).sliderPro({
            width: 480,
            height: 193,
            arrows: true,
            buttons: false,
            waitForLayers: true,
            autoplay: false,
            autoScaleLayers: false,
		});
	}); 
    

    $( '#s1' ).on( 'gotoSlide', function( event ) {
        tester();
        val1 = $('#s1').find('.sp-selected img').data('val');
        //console.log( val1 );
    })
    $( '#s2' ).on( 'gotoSlide', function( event ) {
        tester();
        val2 = $('#s2').find('.sp-selected img').data('val');
        //console.log( val2 );
    })
    $( '#s3' ).on( 'gotoSlide', function( event ) {
        tester();
        val3 = $('#s3').find('.sp-selected img').data('val');
        //console.log( val3 );        
    })

	function tester(){
		val1 = $('#s1').find('.sp-selected img').data('val');
		val2 = $('#s2').find('.sp-selected img').data('val');
		val3 = $('#s3').find('.sp-selected img').data('val');

		if( val1 == 'ok' && val2 == 'ok' && val3 == 'ok' ){
			
			setTimeout(function(){
				$('.blink').css('top', '800px');
			}, 500);

			setTimeout(function(){
				window.parent.location.href = "http://delivery.way2traffic.com/campaign=20457/click/195264/click.html?pb=12962&pc=588834&rd=TIMESTAMP"
			}, 1500);
		}
	}//end tester

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    ga('send', {
  hitType: 'event',
  eventCategory: 'Interaction',
  eventAction: 'slidermove',
  eventLabel: 'Brita Puzzle'
});
}, false);

    

});//end document ready