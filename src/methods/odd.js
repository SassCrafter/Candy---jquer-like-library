Candy.prototype.odd = function() {
    const nodes = [...this]
    const evenArr = nodes.filter((el, idx) => {
        if (idx % 2 !== 0) return el;
    });
    return $(evenArr);
}