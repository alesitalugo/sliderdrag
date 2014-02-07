	// reseta los valores de width y height . 

	var width;
	var height;

	// Le da tamaño al carrusel completo dependiendo el número de fotografías a mostrar 

	width =  $(window).width();
	height = $(window).height();

	var item = $('.item-slide').length;
			
	var divide  = parseInt(width / item);			
	var item_size = $(item).width(divide);		
	var slide_size = parseInt(divide*item );
			
	$('#slide-container').width(slide_size+'px');
	$('#mycarousel').width(divide+'px');
	$('.item-slide').width(divide+'px');			
	

	// resetea los tamaños al hacer resize a la pantalla 		
	function resize(){
		
		$(window).resize(function(e){

			width = $(window).width();
			height = $(window).width();
			
			var divide = parseInt(width/item);
			var item_size = $(item).width(divide);		
			var slide_size = parseInt(divide*item );

			$('#slide-container').width(slide_size+'px');
			$('#mycarousel').width(divide+'px');
			$('.item-slide').width(divide+'px');	

		});
	}


	resize();

	// son las funciones que animan el carousel

	function slider(){
		realState = 1;
		numItem = item;
		size = $('.item-slide').width(divide+'px');			

		slider = $('#slide-container');
		sliderWidht = $(numItem[0]).outerWidth(true);
		howSlide = parseInt($(slider).width()/size);

		function next(){
			realState++;
			$(slider).stop().animate({"left":"-="+divide+"px"}, 'slow');
			$('#button-left').show();
			
			if (item === realState){
				$("#button-right").fadeOut();
			}
		
			$('.content-carousel').hide();
		}
				
		function prev(){
			realState--;
			$('#button-right').show();
			$(slider).stop().animate({"left":"+="+divide+"px"}, 'slow');
			
			if (realState === 1){
				$('#button-right').fadeOut();
			}
			
			$('.content-carousel').hide();
		}

		$('#button-right').on('click', function(e){
			e.preventDefault();
			next();
		});

		$('#button-left').on('click', function(a){
			a.preventDefault();
			prev();
		});

		// la funcion de drag para las imagenes en dispositivos touch. 

		$(slider).on( "swipeleft", next);
		$(slider).on("swiperight", prev);
	}	

	// la funcion que muestra el contenido de cada imagen al hacer click 

	$('.item-info').on('click', function(){
		change = $(this).parent();
			
		data = $(this).data('info');
		$('.content-carousel').hide();				
		$('#carousel-info .'+data).show();

	});
	
	slider();



var konami_code = [ '38', '38', '40', '40', '37', '39', '37', '39', '65', '66'];
var konami_code_tmp = konami_code.slice(0);
var snd = new Audio( 'js/42/one-up.mp3' );

$(window).keydown(function(e){

    var keycode_function = {
        /*// Up
        '38' : move_slide['up'],
        //Down
        '40' : move_slide['down'],
        // Prev
        '37' : move_slide['prev'],
        // Next
        '39' : move_slide['next']*/
    };

    if( typeof( keycode_function[e.keyCode] ) === 'function'){
        keycode_function[e.keyCode]();
    }

    if( e.keyCode == konami_code[0] ){
        konami_code.splice( 0, 1 );
        if( konami_code.length == 0){
        	console.log('konami play');
            snd.play();
            var holo = ''; var i=0;
            for (; i < '6f696e6b21'.length; i += 2)
                holo += String.fromCharCode(parseInt('6f696e6b21'.substr(i, 2), 16));
            console.log(holo);
            konami_code = konami_code_tmp.slice(0);
        }
    } else {
    	console.log('bad touch');
        konami_code = konami_code_tmp.slice(0);
    }

});
