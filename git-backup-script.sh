#!/bin/sh

cd /media/pi/My\ Book/git/wiki

git checkout draft
git add *
git commit -a -m "Auto updating draft changes"
git push

