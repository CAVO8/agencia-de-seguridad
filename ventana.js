var actual=1;
$(document).ready(main);
$(".acordeon").hover();

function main(){
	var intervalo = setInterval("runSlider()",5000);
}

function runSlider(){
	//alert("hola");
	if(actual == $("#subventana img").size()){
		actual = 0;
	}

	$("#subventana").animate({
		marginLeft: (-1*actual*$("#subventana img").eq(0).width())
	}, 700);
	actual++;
}