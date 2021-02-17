Candy.prototype.parent = function(selector) {
	const parents = [];
	this.forEach(el => {
		if (el.parentNode) {
			if ((!selector || $(el.parentNode).is(selector)) && !parents.includes(el.parentNode) ) {
				parents.push(el.parentNode);
			}
		}
	});

	return $(parents);
}