Candy.prototype.off = function(...args) {
    let [eventType, targetSelector, callback] = args;

    if (typeof targetSelector === 'function') {
        targetSelector = null;
        [eventType, callback] = args;
    }

    const events = eventType.split(' ');

    events.forEach(event => {
        this.forEach(el => {
            if (!targetSelector || $(el).is(targetSelector)) {
                const eventsToRemove = el.candyEvents.filter(eventObj => eventObj.type === event);
                console.log(eventsToRemove);
            }
        });
    });
}