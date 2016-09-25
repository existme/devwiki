# Mount

## Mounting sshfs

Install sshfs:
~~~bash
sudo apt-get install sshfs
~~~

Add the <ic>id_rsa.pub</ic> of the desired user to the <ic>authorized_keys</ic> file
on the remote machine, then issue the following command to mount the drive:

~~~shell
sudo sshfs -o allow_other root@192.168.0.50:/ /media/pi/WD
~~~

To add the mount permanently first edit <ic>/etc/fstab</ic>:
~~~shell
sudo vim /etc/fstab
~~~

Scroll to the bottom of the file and add the following entry:
~~~shell
sshfs#root@192.168.0.50:/ /media/pi/WD

#or more completely:

sshfs#root@192.168.0.50:/DataVolume/shares/WD /media/pi/WD fuse _netdev,user,idmap=user,default_permissions,uid=vagrant,gid=pi,allow_other 0 0
~~~




