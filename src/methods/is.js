Candy.prototype.is = function(selector) {
	const el = this[0];
	//console.log(el.parentElement);
	let compareWith;
	if (!el || typeof selector === 'undefined') return false;

	if (typeof selector === 'string') {
		compareWith = $(selector, el.parentElement);
		//console.log(compareWith);
		for (let i = 0; i < compareWith.length; i++) {
			if (el === compareWith[i]) {
				return true;
			}
		}
	} else if (selector.nodeType || selector instanceof Candy) {
		compareWith = selector.nodeType ? [selector] : selector;
		for (let i = 0; i < compareWith.length; i++) {
			if (el === compareWith[i]) {
				return true;
			}
		}
	}

	return false;
}