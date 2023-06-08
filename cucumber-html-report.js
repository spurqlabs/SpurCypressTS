const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: "./GenerateReports",  // ** Path of .json file **//
    reportPath: "./Output", // ** Path of .html file **//
    metadata: {
        browser: {
            name: "chrome",
            version: "92",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "10",
        },
    },
});

