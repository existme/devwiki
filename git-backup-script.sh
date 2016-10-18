#!/bin/sh

cd /media/pi/My\ Book/git/wiki

git checkout draft
rm .git/index.lock
git add .
git commit -a -m "Auto updating bananadance changes"
git push

cd wiki/en
rm .git/index.lock
git add .
git commit -a -m "Auto updating wiki draft changes"
git push
