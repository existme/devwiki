# Users

# Groups

## Get list of all the available groups
~~~shell
getent group
# if you want just the group names
getent group | cut -d: -f1
~~~

## Add a user to existing group
~~~shell
usermod -G ftpgroup,sshgroup existme
~~~

