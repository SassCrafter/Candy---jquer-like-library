Candy.prototype.clone = function() {
    return new Candy([this[0].cloneNode(true)]);
}