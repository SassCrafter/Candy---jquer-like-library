Candy.prototype.toggleClass = function(classes) {
	console.log('toggle')
	const classNames = classes.split(' ');
	this.forEach(el => {
		classNames.forEach(c => {
			el.classList.toggle(c);
		});
	});
	return this;
}