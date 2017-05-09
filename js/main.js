$(document).ready(function(){
	$('.minus').click(function(e){
		console.log(e.target);
		var break_time = parseInt($("#break").text());
		console.log(break_time);
		var new_time = (break_time - 1).toString();
		if (new_time > 0) {
			$("#break").text(new_time);
		}else{
			$("#break").text(0);	
		}
		
	});

	$('.add').click(function(){
		alert('add clicked');
	});

});