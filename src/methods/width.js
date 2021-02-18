Candy.prototype.width = function(value) {
    if (typeof value === 'undefined') {
        if (this[0]) {
            return this[0].offsetWidth;
        }
        return undefined;
    }
    let val = typeof value === 'number' ? `${value}px` : value;
    //console.log(val);
    this.forEach(el => {
        $(el).css('width', val);
    });
    return this;
}