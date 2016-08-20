##Compile and install:
###Installing automake
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

###Compile and install:
~~~bash
$ ./configure
$ make
$ make install
~~~

##Cygwin
### Setting up development tools for cygwin
~~~
setup-x86_64.exe -q -P wget -P gcc-g++ -P make -P diffutils -P libmpfr-devel -P libgmp-devel -P libmpc-devel
~~~


[automake-repo]: http://ftp.gnu.org/gnu/automake/
