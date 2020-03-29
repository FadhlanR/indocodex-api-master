var schedule = require('node-schedule');
const shell = require('shelljs');
 
var j = schedule.scheduleJob('*/1 * * * *', function(){
    shell.exec('testTicker.sh');
});