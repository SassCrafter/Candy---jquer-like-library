Candy.prototype.siblings = function(selector) {
	const siblings = [];
	if (this.length > 0) {
		if (!this[0].parentNode) return siblings;
		let sibling = this[0].parentNode.firstChild;
		console.log(sibling);
		while(sibling) {
			if (sibling.nodeType === 1 && (!selector || $(sibling).is(selector)) && sibling !== this[0]) {
				siblings.push(sibling)
			}
			sibling = sibling.nextSibling;
		}
	}
	return $(siblings);
}