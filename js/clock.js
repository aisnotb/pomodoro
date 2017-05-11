function Clock(val){
	var time = val * 60 ;
	var interval ;
	var offset;

	this.isOn = false;

	this.init = function(){
		this.start();
	};

	this.delta = function(){
		var now = Date.now();
		var timepassed = now - offset;
		offset = now;
		console.log("timepassed" + timepassed);
		return timepassed;			
	};

	this.start =  function(){
		if (!this.isOn) {
			console.log("started clock");
			console.log(this);
			offset = Date.now();
			interval = setInterval(this.update, 1000);
			this.isOn = true;
		}
	};

	this.update = function(){
		if (this.isOn) {
			var timepassed = delta();
			time -= timepassed;
		}
		console.log("hello world");
		console.log(time);

		// var formmatedTime = timeFormatter(time);
		// $("#timer").text(formmatedTime);
	};

	this.stop =function(){
		if (this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
			console.log("stop");
		}
	};

	this.add = function(){
		time++;
		$("#timer").text(time);
		console.log(time);
	};

	this.minus = function(){
		if (time > 0) {
			time--;
		}else{
			time = 0 ;
		}
		console.log(time);
	};
}
