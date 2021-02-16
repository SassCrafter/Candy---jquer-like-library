Candy.prototype.text = function(text) {
	if (this[0]) {
		this.forEach(el => el.textContent = text.trim());
	}
	return this;
}