function Clock(){
	this.time = 25 ;
	var interval ;
	var offset;

	this.isOn = false;

	this.init = function(){
		console.log("inited");
	};

	this.add = function(){
		this.time++;
	};

	this.minus = function(){
		if (this.time > 0) {
			this.time--;
		}else{
			this.time = 0 ;
		}
	};

	this.delta = function(){
		var now = Date.now();
		var timepassed = now - offset;
		offset = now;
		return timepassed;
	};

	this.start =  function(){
		if (!this.isOn) {
			this.isOn = false;
			interval = setInterval(update, 1000);
		}
	};

	this.update = function(){

	};

	this.stop =function(){
		if (this.isOn) {
			this.isOn = true;
		}
	};
}