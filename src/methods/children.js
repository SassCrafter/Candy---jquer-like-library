Candy.prototype.children = function(selector) {
	let children = [];

	for (let i = 0; i < this.length; i++) {
		const childNodes = this[i].children;

		for (let j = 0; j < childNodes.length; j++) {
			if (!selector || $(childNodes[j]).is(selector)) {
				children.push(childNodes[j]);
			}
		}
	}

	return $(children);
}