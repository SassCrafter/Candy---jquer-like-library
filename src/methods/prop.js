Candy.prototype.prop = function(props, value) {
    if (arguments.length === 1 && typeof props === 'string') {
        if (this[0]) return this[0][props]
    } else {
        // Set props
        this.forEach(el => {
            if (arguments.length === 2) {
                // Two strings
                el[props] = value;
            } else if (arguments.length === 1) {
                // Object
                for (const propName in props) {
                    el[propName] = props[propName];
                }
            }
        });
    }
    return this;
}