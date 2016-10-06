#SSH
## Configuring SSH over a proxy

There are number of things that should be done when you are behind a 
corporate proxy.

1. The ssh server should run on port 443 ( which is the ssl port and proxies
    can connect to it, alternatively it could be port forwarded to that port.)

2. Install [corkscrew](http://agroman.net/corkscrew/) for mac and follow 
    the instruction from [here](http://meinit.nl/ssh-through-a-proxy-from-your-apple-mac-os-x).

3. Issue <ic>vim ~/.ssh/config</ic> and add the following code for your
    remote host:
    
~~~
Host your.target.machine
ProxyCommand ~/.ssh/corkscrew your.proxy.address 3128 %h %p
~~~

4. Issue <ic>ssh your.target.machine -p 443</ic>

The following page also describes the other methods: 
[SSH Through or Over Proxy](https://daniel.haxx.se/docs/sshproxy.html)

# Adding your rsa.pub to the authirized_keys on a target machine

Issue the following command:
~~~shell
ssh-copy-id user@host
~~~

## Installation of ssh-copy-id:
 - **MAC**: <ic>curl -L https://raw.githubusercontent.com/beautifulcode/ssh-copy-id-for-OSX/master/install.sh | sh </ic>