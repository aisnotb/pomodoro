function Clock(val){
	var time  = val * 60 * 1000;
	var interval;
	var offset;
	this.isOn = false;

	function update(){
		time -= delta();
		if (time == 0) {
			// console.log("time is up");
			clearInterval(interval);
			interval = null;
		}
		if(time >=0){
			var formatedTime = timeFormater(time);
			console.log(formatedTime);
			$("#timer").text(formatedTime);	
		}else{
			clearInterval(interval);
			interval = null;
		}
		
	}

	function delta(){
		var now = Date.now();
		var timepassed = now - offset;
		offset = now;
		return timepassed;
	}

	function timeFormater(timeInMillseconds){
		var time = new Date(timeInMillseconds);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();

		if (minutes.length < 2) {
			minutes = "0" + minutes;
		}

		if (seconds.length < 2) {
			seconds = "0" + seconds;
		}

		return minutes + " : " + seconds;
	}

	this.start = function(){
		if (!this.isOn) {
			interval = setInterval(update, 10);
			offset = Date.now();
			this.isOn = true;
		}
	};

	this.stop = function(){
		if (this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};

	this.increase = function(){
		time += 1000 * 60;
		console.log(time);
	};

	this.decrease = function(){
		time -= 1000 * 60;
		console.log(time);
	};

}