var trash_template ='<i class="far fa-trash-alt td-trash"></i>';

$("#add-item").on("click", function(){
	$("#add-item-tr").fadeToggle();
});

$("#add-item-tr").on("keypress", function(event){
	if (event.which === 13)
	{
		$("table").find("tbody")
			.append($("<tr>")
			.append($("<td>")
			.append(trash_template)
			.append($("<span>")
			.text($("#add-item-tr input")[0].value))));
		$("#add-item-tr input")[0].value = "";
	}
});

$(document).on("mouseenter mouseleave", "tr", function(){
	$(this).find(".td-trash").animate({width: 'toggle'}, 100);
});

$(document).on("click", ".td-trash", function(){
	$("tr").has($(this)).fadeOut(200, function(){
		$(this).remove();
	});
	// $("tr").has($(this)).remove();
});

$(document).on("click", "tbody span", function(){
	$(this).css("text-decoration", "line-through");
});
