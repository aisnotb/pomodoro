$(document).ready(function() {

    $('.btn').click(function(e) {
        console.log(e);

        var new_time ;
        var break_time;
        var working_time;
        if(e.target.id == "break-time-minus") {
            break_time = parseInt($("#break").text());
            console.log(break_time);
            console.log("ok");
            new_time = (break_time - 1).toString();
            if (new_time > 0) {
                $("#break").text(new_time);
            } else {
                $("#break").text(0);
            }
        }else if (e.target.id == 'working-time-minus'){
        	console.log("not ok");
        	working_time = parseInt($("#working-time").text());
        	// console.log(working_time);
        	working_time = (working_time - 1).toString();
        	if (working_time > 0) {
        		$("#working-time").text(working_time);
        		$("#timer").text(working_time);
        	}else{
        		$("#working-time").text(0);
        	}
        }else if (e.target.id == "break-time-add") {
        	console.log("break time add");
        	var break_time_add = parseInt($("#break").text());
        	new_time =  (break_time_add + 1).toString();
        	$("#break").text(new_time);
        }else{
        	console.log("working-time add");
        	working_time = parseInt($("#working-time").text());
        	working_time = (working_time + 1).toString();
        	$("#working-time").text(working_time);
        	$("#timer").text(working_time);
        }
    });

    var clock = new Clock(25);

    $("#timer").click(function(){
    	if (!clock.isOn) {
    		clock.start();
    		clock.isOn = true;
    	}else{
            clock.stop();
    		clock.isOn = false;
    	}
    });

});
