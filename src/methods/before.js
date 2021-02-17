Candy.prototype.before = function(content) {
	// If content instance of Candy
	if (content instanceof Candy) {
		// Clone content elements if more than one target element
		if (this.length > 1) {
			this.forEach((el,idx) => {
				content.forEach(elToAppend => {
					el.parentElement.insertBefore($(elToAppend).clone()[0], this[idx]);
				});
			});
		} else {
			// Append content els to single target
			content.forEach(elToAppend => {
				this[0].parentElement.insertBefore(elToAppend, this[0]);
			});
		}
	// Same logic for html string
	} else if (typeof content === 'string') {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = content;
		if (this.length > 1) {
			this.forEach((el, idx) => {
				el.parentElement.insertBefore($(tempDiv.firstChild).clone()[0], this[idx]);
			});
		} else {
			this.forEach(el => {
				this[0].parentElement.insertBefore(tempDiv.firstChild, this[0]);
			});
		}
	}
	return this;
}