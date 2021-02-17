Candy.prototype.val = function(val) {
    if (typeof val === 'undefined') {
        const el = this[0];
        console.log(el.multiple);
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === 'select') {
            console.log(el.selectedOptions);
            const values = [];
            for (let i = 0; i < el.selectedOptions.length; i++) {
                values.push(el.selectedOptions[i].value);
            }
            return values;
        }
        return el.value;
    }
    this[0].value = val;
    return this;
}