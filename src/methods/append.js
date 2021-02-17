Candy.prototype.append = function(...els) {
	let childEl;

	for (let i = 0; i < els.length; i++) {
		childEl = els[i];
		//console.log(childEl);

		for(let j = 0; j < this.length; j++) {
			if (typeof childEl === 'string') {
				const tempDiv = document.createElement('div');
				tempDiv.innerHTML = childEl;
				this[j].appendChild(tempDiv.firstElementChild);
			} else if (childEl instanceof Candy) {
				this[j].appendChild(childEl[j]);
			} else {
				this[j].appendChild(childEl);
			}
		}
	}
}