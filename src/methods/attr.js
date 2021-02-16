Candy.prototype.attr = function(attrs, value) {
	if (arguments.length === 1 && typeof attrs === 'string') {
		if (arguments[0]) return this[0].getAttribute(attrs);
		return undefined;
	}

	this.forEach(el => {
		if (arguments.length === 2 && value) {
			el.setAttribute(attrs, value);
		}
	});

	return this;
}