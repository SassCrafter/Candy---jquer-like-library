Candy.prototype.prev = function(selector) {
	if (this.length > 0) {
		if (this[0].previousElementSibling) {
			if (!selector || $(this[0].previousElementSibling).is(selector)) {
				return $(this[0].previousElementSibling);
			}
		}
	}
	return $([])
}