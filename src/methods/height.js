Candy.prototype.height = function(value) {
    if (typeof value === 'undefined') {
        if (this[0]) {
            return this[0].offsetHeight;
        }
        return undefined
    }
    let val = typeof value === 'number' ? `${value}px` : value;
    console.log(val);
    this.forEach(el => {
        $(el).css('height', val);
    })
}