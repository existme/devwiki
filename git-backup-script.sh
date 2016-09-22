#!/bin/sh

cd /media/pi/My\ Book/git/wiki

git checkout draft
git add *
git commit -a -m "latest update"
git push

