$(document).ready(main);

var contador = 1 ;

function main(){
	$('.menu_bar').click(function(){
		//$('nav').toggle();
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0 ;
		} else {
			contador = 1 ;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	$('#subir a').click(function(){
		var seccion = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(seccion).offset().top
		},800);
		return false;
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle(200);
	});

	$('.telefono').click(function(){
		$('.subtelefono').slideToggle(200);
	});
	
}