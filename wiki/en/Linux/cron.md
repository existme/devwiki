#Cron

~~~bash
sudo crontab -e
~~~


#Crontab configuration

~~~sh
# m h  dom mon dow   command
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed

#run the job every minute
*/1 * * * * pi /media/mypath/git-backup-script.sh

#run the job every 2 minutes
*/2 * * * * pi /media/mypath/git-backup-script.sh

#run the job every 1 hour
0 */1 * * * pi /media/mypath/git-backup-script.sh

#run the job exactly at 00:00 everyday
0 0 * * * /media/pi/My\ Book/git/wiki/git-backup-script.sh
~~~

