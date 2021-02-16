Candy.prototype.removeAttr = function(attr) {
	this.forEach(el => {
		el.removeAttribute(attr);
	});
	return this;
}