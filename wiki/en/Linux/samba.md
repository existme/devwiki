# Samba Configuration

## Config file
The config file is located in : /etc/samba/smb.conf

## Miscrosoft Windows, resetting samba users and networking
 
To remove samba users goto <ic>ControlPanel > User Accounts > Credential Manager</ic>,
then click on Windows Credentials and remove the relevant "Windows Credentials".

![Windows Credential Management](img/windows-credentials.png) 

To restart windows networking and refresh the cache, bring an elevated
command prompt and issue:

~~~sh
net stop workstation /y && net start workstation
~~~
