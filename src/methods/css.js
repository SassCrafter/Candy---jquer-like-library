Candy.prototype.css = function(propertyName, value) {
	if (propertyName && !value) {
		// $('p').css('color')
		if (typeof propertyName === 'string') {
			if (this[0]) {
				return getComputedStyle(this[0])[toCamelCase(propertyName)];
			}
		} else {
			// $('p').css({color: 'red'})
			this.forEach(el => {
				for (const prop in propertyName) {
					//console.log(toCamelCase())
					el.style[toCamelCase(prop)] = propertyName[prop];
				}
			});
			return this;
		}
	}
	if (propertyName && value) {
		// $('p').css('width', '20px');
		this.forEach(el => {
			el.style[toCamelCase(propertyName)] = value;
		});
		return this;
	}
	return this;
}