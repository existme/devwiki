# IntelliJ Configuration and possible workarounds

## VCS
### Gerrit plugin
- Gerrit plugin shows empty change list
  - In order to fix this problem you should add another remote branch
    pointing to the same gerrit url that is used in gerrit setup:

~~~git
git remote add gerrit https://{server name}/gerrit/{gitrepo}
~~~vc`  14y5t `1 vc 

  - <ic>gitrepo</ic> could include subfolders and be like <ic>department/project</ic>.
  A better way of doing this properly is by checking out the repo using http url
  instead of ssh url.
