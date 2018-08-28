'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class ApiAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'Schedule card initialized from Api',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule card is updated from Api',
            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToApi;
        const belowThreshold = loadedTime <= MAX_CARD_TIME;
        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = ApiAudit;
