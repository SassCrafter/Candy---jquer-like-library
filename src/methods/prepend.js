Candy.prototype.prepend = function(...els) {
	let childEl;

	for (let i = 0; i < els.length; i++) {
		childEl = els[i];

		for (j = 0; j < this.length; j++) {
			if (typeof childEl === 'string') {
				const tempDiv = document.createElement('div');
				tempDiv.innerHTML = childEl;
				this[j].insertBefore(tempDiv.firstElementChild, this[j].childNodes[0]);
			} else if (childEl instanceof Candy) {
				this[j].insertBefore(childEl[j], this[j].childNodes[0]);
			} else {
				this[j].insertBefore(childEl[j], this[j].childNodes[0]);
			}
		}
	}
}