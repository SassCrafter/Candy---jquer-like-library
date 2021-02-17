Candy.prototype.data = function(key, value) {
    if (key && !value) {
        if (typeof key === 'string') {
            if (this[0]) return this[0].dataset[toCamelCase(key)];
        } else {
            // Object -> set value
            this.forEach(el => {
                for (const name in key) {
                    el.dataset[toCamelCase(name)] = key[name];
                }
            })

        }      
    } else if (typeof key === 'string' && typeof value === 'string') {
        this.forEach(el => {
            el.dataset[toCamelCase(key)] = value;
        })
    }
}