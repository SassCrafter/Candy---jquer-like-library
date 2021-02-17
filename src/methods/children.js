Candy.prototype.children = function(selector) {
	let childs = [];
	if (typeof selector === 'string') {
		this.forEach(node => {
			console.log(node.childNodes);
			let i = 0;
			const childNodes = node.childNodes;
		});
	}
	return this;
}