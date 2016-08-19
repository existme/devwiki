### Setting up development tools for cygwin
~~~
setup-x86_64.exe -q -P wget -P gcc-g++ -P make -P diffutils -P libmpfr-devel -P libgmp-devel -P libmpc-devel
~~~

###compile problems with aclocal:
~~~
install automake
~~~

###Compile and install:
~~~bash
$ ./configure
$ make
$ make install
~~~