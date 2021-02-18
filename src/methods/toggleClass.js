Candy.prototype.toggleClass = function(classes) {
	const classNames = classes.split(' ');
	this.forEach(el => {
		classNames.forEach(c => {
			el.classList.toggle(c);
		});
	});
	return this;
}