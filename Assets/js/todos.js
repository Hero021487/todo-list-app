/* global $ */        // <- for the $ to be identified

// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to Delete Todos
$("ul").on("click", "span", function(evt){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(evt){
	if(event.which === 13){
		// grabbing new to do text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>")

	}
});


$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
});
