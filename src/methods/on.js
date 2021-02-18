Candy.prototype.on = function(...args) {
    let [eventType, targetSelector, callback, ...data] = args;

    // If function is first parameter or no parameters return
    if (!eventType || typeof eventType === 'function') return this;
    // If second parameter is a function then no targetSelector;
    if (typeof targetSelector === 'function') {
        [eventType, callback, ...data] = args;
        targetSelector = undefined;
    }

    // Named function for eventlistener so we can than remove it with off();
    // function callbackHandler(e) {
    //     callback.call(null, e, data);
    // }

    // this.forEach(el => {
    //     if (!targetSelector || $(el).is(targetSelector)) {
    //         events.forEach(eventName => {
    //             el.addEventListener(eventName, callbackHandler);
    //         });
    //         console.log(this);
    //     }
    // });

    function handleEvent(e) {
        const targetData = e && e.target ? e.target.candyEvents.event[0].data: [];
        // If targetData already has e object than replace it with the new one, if not add one
        const hasEvent = targetData.find(el => el.target);
        if (hasEvent) {
            targetData.shift();
            targetData.unshift(e);
        } else {
            targetData.unshift(e);
        }
        callback.apply(this, targetData);
    }

    const events = eventType.split(' ');

    this.forEach(el => {
        if (!targetSelector || $(el).is(targetSelector)) {
            events.forEach(eventName => {
                // set candyEvents property on the current element
                if (!el.candyEvents) {
                    el.candyEvents = [];
                    }
                if (!el.candyEvents.event) el.candyEvents.event = [];
                el.candyEvents.push({
                    event: {
                        type: eventName,
                        callback,
                        proxyCallback: handleEvent,
                        data,
                    }
                });
                console.dir(el);
                el.addEventListener(eventName, handleEvent);
            });
        }
    });

    return this;
}