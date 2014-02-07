(function(jQuery, undefined) {
			jQuery(document).ready(function() {
				var wrap = jQuery('.slides_wrap'),
				    slides = wrap.find('.img_slide'),
				    active = slides.filter('.active'),
				    i = slides.index(active),
				    width = wrap.width();

				slides

				.on('swipeleft', function(e) {
					if (i === slides.length - 1) { return; }
					slides.eq(i + 1).trigger('activate');
				})

				.on('swiperight', function(e) {
					if (i === 0) { return; }
					slides.eq(i - 1).trigger('activate');
				})

				.on('activate', function(e) {
					slides.eq(i).removeClass('active');


					jQuery('.slide_button').removeClass('active');

					jQuery(e.target).addClass('active');

					i = slides.index(e.target);
				})

				.on('movestart', function(e) {
					
					if ((e.distX > e.distY && e.distX < -e.distY) ||
					    (e.distX < e.distY && e.distX > -e.distY)) {
						e.preventDefault();
						return;
					}

					
					wrap.addClass('notransition');
				})

				.on('move', function(e) {
					var left = 100 * e.distX / width;

					if (e.distX < 0) {
						if (slides[i+1]) {
							slides[i].style.left = left + '%';
							slides[i+1].style.left = (left+100)+'%';
						}
						else {
							slides[i].style.left = left/4 + '%';
						}
					}
					if (e.distX > 0) {
						if (slides[i-1]) {
							slides[i].style.left = left + '%';
							slides[i-1].style.left = (left-100)+'%';
						}
						else {
							slides[i].style.left = left/5 + '%';
						}
					}
				})

				.on('moveend', function(e) {
					wrap.removeClass('notransition');
					
					slides[i].style.left = '';
		
					if (slides[i+1]) {
						slides[i+1].style.left = '';
					}
					if (slides[i-1]) {
						slides[i-1].style.left = '';
					}
				});


				jQuery(document)
				.on('click', '.slide_button', function(e) {
					var href = e.currentTarget.hash;
					jQuery('.slide_button').removeClass('active');
					jQuery(href).trigger('activate');
					jQuery(this).addClass('active');
					e.preventDefault();
				});
			});
		})(jQuery);	