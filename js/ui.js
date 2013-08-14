$(document).ready(function(){

	$('.draggable').draggable({cursor: 'crosshair' , revert: true});
	$('.droppable').droppable({drop: function(){

		$("#dropArea").append("<div>Dropped</div>");

	}});



});