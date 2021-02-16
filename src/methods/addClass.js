Candy.prototype.addClass = function(classes) {
    const classNames = flattenArray(classes.split(' '));
    this.forEach(el => el.classList.add(...classNames))
    return this;
}