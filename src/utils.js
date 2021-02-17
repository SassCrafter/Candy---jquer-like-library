function flattenArray(arr) {
	const res = [];
	arr.forEach(el => {
		if (Array.isArray(el)) {
			res.push(flattenArray(el));
		} else {
			res.push(el);
		}
	});
	return res;
}

function toCamelCase(string) {
	return string
    .toLowerCase()
    .replace(/-(.)/g, (match, group) => group.toUpperCase());
}