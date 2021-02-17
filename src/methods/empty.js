Candy.prototype.empty = function() {
    this.forEach(el => {

        // If element node
        if (el.nodeType === 1) {
            // Remove all node childs (Element, text)
            while(el.firstChild) {
                el.removeChild(el.firstChild);
            }
        }
    });
    return this;
}