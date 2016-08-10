


var events = {
	events : {},
	on : function(eventName, fun) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fun);
	},
	off : function(eventName, fun) {
		if (this.events[eventName]) {
			for (var i = 0; i < this.events[eventName].length; i++) {
				if (this.events[eventName][i] === fun) {
					this.events[eventName].splice(i, 1);
					break;
				}
			}
		}
	},
	emit : function(eventName, data) {
		if (this.events[eventName]) {
			this.events[eventName].forEach(function(fun) {
				fun(data);
			});
		}
	}
};