Candy.prototype.text = function(text) {
	if (text) {
		if (this[0]) {
			this.forEach(el => el.textContent = text.trim());
		}
	} else {
		return this[0].textContent;
	}
	return this;
}