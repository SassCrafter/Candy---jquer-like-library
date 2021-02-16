Candy.prototype.hasClass = function(classes) {
	console.log("Searching for a class");
	const classNames = classes.split(' ');
	let contains = false;
	this.forEach(el => {
		contains = el.classList.contains(...classNames);
	})
	// const nodes = [...this];
	// const contains = classNames.filter(className => {
	// 	return nodes.filter(el => el.classList.contains(className))
	// }).length > 0;
	console.log(contains);
}