#!/bin/sh

cd /media/pi/My\ Book/git/wiki/wiki/en
rm /media/pi/My\ Book/git/wiki/.git/modules/wiki/en/index.lock
/usr/bin/env python gen_sidebar
git add .
git commit -a -m "Auto updating wiki draft changes"
git pull
git push origin/master

cd /media/pi/My\ Book/git/wiki
git submodule update
cd /media/pi/My\ Book/git/wiki

rm .git/index.lock
git add .
git commit -a -m "Auto updating bananadance changes"
git push origin/master

git checkout master
cd /media/pi/My\ Book/git/wiki/wiki/en
git checkout master
