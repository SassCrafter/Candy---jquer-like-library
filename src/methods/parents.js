Candy.prototype.parents = function(selector) {
	const parents = [];
	this.forEach(el => {
		let parentEl = el.parentNode;

		while(parentEl) {
			console.log(parentEl);
			if (parentEl === document.body) break;
			if ((!selector || $(parentEl).is(selector)) && !parents.includes(parentEl) ) {
				parents.push(parentEl);
			}
			parentEl = parentEl.parentNode;
		}
	});

	return $(parents);
}