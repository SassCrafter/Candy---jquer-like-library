Candy.prototype.removeClass = function(classes) {
	const classNames = classes.split(' ');
	this.forEach(el => el.classList.remove(...classNames));
	return this;
}