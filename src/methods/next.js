Candy.prototype.next = function(selector) {
	if (this.length > 0) {
		if (this[0].nextElementSibling) {
			if (!selector || $(this[0].nextElementSibling).is(selector)) {
				return $([this[0].nextElementSibling]);
			}
		}
	}
	return $([]);
}