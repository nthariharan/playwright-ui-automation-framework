import {test} from '@playwright/test';

const customTest = test.extend({
    testData1: {
        "product": "iphone 13 pro",
        "country": "Saudi Zimbabwe"
    }
});

export default  customTest;