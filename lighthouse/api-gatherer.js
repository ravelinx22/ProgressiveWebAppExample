'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToApi extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.apiResponseTime')
            .then(apiResponseTime => {
                if (!apiResponseTime) {

                    throw new Error('Unable to find api load metrics in page');
                }
                return apiResponseTime;
            });
    }
}

module.exports = TimeToApi;
