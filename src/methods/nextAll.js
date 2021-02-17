Candy.prototype.nextAll = function(selector) {
	if (this.length > 0) {
		const nextSiblings = [];
		let el = this[0];
		while (el.nextElementSibling) {
			if (!selector || $(el.nextElementSibling).is(selector)) {
				nextSiblings.push(el.nextElementSibling);
			}
			el = el.nextElementSibling;
		}
		return $(nextSiblings);
	}
	return $([]);
}