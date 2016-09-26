#Ansible

## Frequently used ansible modules documentation
- **templates**:  <http://docs.ansible.com/ansible/template_module.html>
  
  _To create templates and set their permissions_


- **user**: <http://docs.ansible.com/ansible/user_module.html>
   
  _To create users and add them to groups_ 

~~~.yaml
- name: add_transmission_user | adding transmission user to transmission group
  user:
    name="{{ transmission_user }}"
    groups=debian-transmission,pi
    append=yes
~~~

- **get_url**: <http://docs.ansible.com/ansible/get_url_module.html>

~~~.yaml
- name: Download Custom Skin
  get_url:
    url: https://github.com/ronggang/transmission-web-control/raw/master/release/transmission-control-full.tar.gz
    dest: /tmp/customskin.tar.gz
~~~

- **file**: <http://docs.ansible.com/ansible/file_module.html>

  _To create file and folders and setting their permission_
  
~~~.yaml
  # change file ownership, group and mode. When specifying mode using octal numbers, first digit should always be 0.
  - file: path=/etc/foo.conf owner=foo group=foo mode=0644
  
  #create links between two files
  - file: src=/file/to/link/to dest=/path/to/symlink owner=foo group=foo state=link
  
  #create links between files
  - file: src=/tmp/{{ item.src }} dest={{ item.dest }} state=link
    with_items:
      - { src: 'x', dest: 'y' }
      - { src: 'z', dest: 'k' }
  
  # touch a file, using symbolic modes to set the permissions (equivalent to 0644)
  - file: path=/etc/foo.conf state=touch mode="u=rw,g=r,o=r"
  
  # touch the same file, but add/remove some permissions
  - file: path=/etc/foo.conf state=touch mode="u+rw,g-wx,o-rwx"
  
  # create a directory if it doesn't exist
  - file: path=/etc/some_directory state=directory mode=0755
  
- name: create /root/trans-skin folder
  file:
    path: /root/trans-skin
    owner: "{{ transmission_user }}"
    group: debian-transmission
    mode: 755
    state: directory
~~~

- **cron**: <http://docs.ansible.com/ansible/cron_module.html>

~~~yaml
- name: Create sudo crontab after restart
  cron:
    name: "Restart transmission on reboot (to ensure that it is running"
    special_time: reboot
    job: "systemctl restart transmission-daemon"
~~~


## Examples

### Debug

~~~.shell
- debug: msg="System {{ inventory_hostname }} has gateway {{ ansible_default_ipv4.gateway }}"
  when: ansible_default_ipv4.gateway is defined
~~~

