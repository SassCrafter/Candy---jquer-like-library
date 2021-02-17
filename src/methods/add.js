Candy.prototype.add = function(...els) {
    const dom = this;
    for (let i = 0; i < els.length; i++) {
        const toAdd = $(els[i]);
        for (let j = 0; j < toAdd.length; j++) {
            dom.append(toAdd[j]);
        }
    }
    return dom;
}