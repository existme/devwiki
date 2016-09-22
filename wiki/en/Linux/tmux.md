#tmux

## Installation
### Cygwin installation
- Install using <ic>apt-cyg</ic>

    <ic>apt-cyg install tmux</ic>
    
- Install from source

    Based on the document found [here][tmux_cygwin_setup]:
    
    <note></note>**Note for installing libevent:**
     
    - <ic>curl -L -O https://github.com/downloads/libevent/libevent/libevent-2.0.21-stable.tar.gz</ic>
    - <ic>tar zxf libevent-2.0.21-stable.tar.gz</ic>
    - cd libevent-2.0.21-stable
    - <ic>./configure --prefix=/usr</ic>
    - <ic>make && make install</ic>

 
 
 
 
 
 
[tmux_cygwin_setup]:https://gist.github.com/zlalanne/8188248