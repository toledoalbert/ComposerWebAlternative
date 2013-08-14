$(document).ready(function(){

	var draggedText;

	//$(".instance").attr('title', 'This is the hover-over text');

	$('.draggable').draggable({cursor: 'pointer' , revert: true, opacity: 0.6, start: function(){

		draggedText = $(this).text();

	}});
	
	$('.droppable').droppable({accept: '.instance', hoverClass: 'dropOver', drop: function(event, ui){

		$("#dropArea").append("<div class=\"nodeInstance\"> <br><br><p class=\"text-center\">" + draggedText + "</p> </div>");

		$('.nodeInstance').draggable({cursor: 'pointer', containment: 'parent'});

	}});

});