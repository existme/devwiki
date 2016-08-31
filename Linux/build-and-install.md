#Install build tools
##Cygwin
### Setting up development tools for cygwin
~~~
setup-x86_64.exe -q -P wget -P gcc-g++ -P make -P diffutils -P libmpfr-devel -P libgmp-devel -P libmpc-devel
~~~
##Ubuntu
~~~
sudo apt-get install build-essential checkinstall
sudo apt-get install libncursesw5-dev
sudo apt-get install automake
~~~

#Compile and install:
##Installing automake
automake is needed for most packages if you are on an old distribution,
or you get the wrong version of aclocal when installing automake from
repos try making it from the source. Go to gnu automake [repo][automake-repo]
and get the latest version:

~~~
wget http://ftp.gnu.org/gnu/automake/automake-1.15.tar.gz
tar -xvf automake-1.15.tar.gz
cd automake-1.15
./configure
sudo make install
~~~
### Problem installing automake
Use this workaround:

Since cloning from git does not preserve create timestamps, so a rebuild is triggered, issue <ic>autoreconf</ic> 
as described below:
~~~
$ autoreconf -f -i
$ ./configure && make && sudo make install
~~~
##Compile and install process
~~~
$ ./configure
$ make
$ make install
~~~
Or 
~~~
$ ./configure && make && sudo make install
~~~
#How to find missing dependencies

## Install apt-file to find missing dependencies
~~~
sudo apt-get install apt-file
apt-file update
apt-file search automake
sudo apt-get install requiredpackage
~~~


[automake-repo]: http://ftp.gnu.org/gnu/automake/
