function Clock(){
	this.time = 25 ;
	var interval ;

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
		}
	};

	this.start =  function(){
		if (!this.isOn) {
			this.isOn = false;
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