# cam
reverse engineered IP camera API for https://www.amazon.com/gp/product/B003VPK9ZW/ref=oh_aui_detailpage_o01_s01?ie=UTF8&amp;psc=1

##Setup

make sure IP camera is on, connected to local network, and accessible from default web interface 

modify credentials, IP, and/or port in config.json if different from default

Install [node.js](https://nodejs.org/en/) if you haven't

run `npm install` to install dependencies

run `npm test` or `node example.js` to test the example script

set presets manually from web interface or with savePreset method for different locations of monitor script to take snapshots of

run `npm run monitor` or `node monitor.js` to run the monitor script

to set the monitor script up to be run each hour on Linux or OSX, run `(crontab -l ; echo "0 * * * * node $(pwd)/monitor.js")| crontab -` while in the directory containing monitor.js, or manually add the [cron job](http://www.unixgeeks.org/security/newbie/unix/cron-1.html) with `crontab -e` 
