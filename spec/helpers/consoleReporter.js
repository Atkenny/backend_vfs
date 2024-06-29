const JasmineConsoleReporter = require('jasmine-console-reporter');

const reporter = new JasmineConsoleReporter({
    colors: 1, // (0|false)|(1|true)|2
    cleanStack: 1, // (0|false)|(1|true)|2|3
    verbosity: 4, // (0|false)|1|2|3|(4|true)
    listStyle: 'indent', // "flat"|"indent"
    activity: false,
    emoji: true, // display emojis
    beep: true
});

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(reporter);
