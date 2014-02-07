	
	var width;
	var height;


	var width =  $(window).width();
	var height = $(window).height();

	var item = $('.item-slide').length;
			
	var divide  = parseInt(width / item);			
	var item_size = $(item).width(divide);		
	var slide_size = parseInt(divide*item );
			
	$('#slide-container').width(slide_size+'px');
	$('#mycarousel').width(divide+'px');
	$('.item-slide').width(divide+'px');			
			
	function resize(){
		
		$(window).resize(function(e){

			var width = $(window).width();
			var height = $(window).width();
			var divide = parseInt(width/item);
			var item_size = $(item).width(divide);		
			var slide_size = parseInt(divide*item );

			$('#slide-container').width(slide_size+'px');
			$('#mycarousel').width(divide+'px');
			$('.item-slide').width(divide+'px');	

		});
	}


	resize();

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

				
		$(slider).on( "swipeleft", next);
		$(slider).on("swiperight", prev);
	}	

	$('.item-info').on('click', function(){
		change = $(this).parent();
			
		data = $(this).data('info');
		$('.content-carousel').hide();				
		$('#carousel-info .'+data).show();

	});
	
	slider();
