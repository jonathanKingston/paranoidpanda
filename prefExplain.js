'use strict';
const prefSetup = require('./prefs');

for (let level of [0,1,2]) {
  console.log('Level ' + (level +1));
  for (let pref in prefSetup.prefs) {
    let output = 'DEFAULT_VAL';
    if (prefSetup.prefs[pref][level] !== prefSetup.default) {
      output = prefSetup.prefs[pref][level];
    }
    console.log(pref + ' = ' + output);
  }
  console.log('\n\n');
}
