Candy.prototype.each = function(callback) {
    this.forEach((el, idx) => {
        callback.call(el, idx)
    })
}