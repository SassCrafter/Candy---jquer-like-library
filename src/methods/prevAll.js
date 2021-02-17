Candy.prototype.prevAll = function(selector) {
	if (this.length > 0) {
		const prevSiblings = [];
		let el = this[0];
		while (el.previousElementSibling) {
			if (!selector || $(el.previousElementSibling).is(selector)) {
				prevSiblings.push(el.previousElementSibling);
			}
			el = el.previousElementSibling;
		}
		return $(prevSiblings);
	}
	return $([]);
}