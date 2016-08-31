#VIFM

## Installation:
To install vifm use
~~~bash
sudo apt-get install vifm
~~~

###Install from source
~~~bash
git clone https://github.com/vifm/vifm.git
./configure
sudo make install
sudo cp src/vifm /usr/bin/
~~~

In case of problems with aclocal see [installing automake][install_automake]

## Documentation

1. Vifm Manual [page][vifm_manual]

2. [vifm.txt][vimf_txt]

3. [vifm docs][vifm_doc]

4. Vifm commands definition in [normal.c][vifm_cmd_src] source file.

## Shortcuts

Key                 | cmd1 | cmd2          |    Desc
--------------------|------|---------------|-----------------------------------
ZZ                  | :q   |               | Quit vifm
ZQ                  | :q!  |               | Force quit vifm
**FILTERS**         |      |               |
za                  |      |               | Toggle the showing and hiding of dot files
**PREVIEW**         |      |               |
e                   |      |               | Preview on the current pane
w                   |      |               | Toggle preview on the alternate pane 
q                   |      |               | Quit preview
CTRL+w z            |      |               | Quit all preview modes
SHIFT+TAB           |      |               | Switch to preview tab inorder for scroll
**PANE MANIPULATION**|     |               |
CTRL+wo             | :o   |  :only        | Make the current pan full screen
CTRL+wv             | :vs  |  :sp (split)  | Normal dual pane view
CTRL+wx             |      |               | Exchange panes
CTRL+w  - or <      |      |               | Decrease size of the view by count
CTRL+w  + or <      |      |               | Increase size of the view by count
CTRL+w  &#124; or _ |      |               | Set the current sizer of the view to count
CTRL+w  =           |      |               | Make size of the two views equal
** Operations **|||
                    |:empty|               | Empty trash

###File Operations
Key               | cmd1 | cmd2 |    Desc
------------------|------|------|-----------------------------------
**INFORMATION**   |      |      |
ga                |      |      | Calculate directory size. Uses cached size when possible
gA                |      |      | Like ga but force update. Ignores old values
CTRL+g            |      |      | create a window showing detailed information about current file.
**CHANGE FILE**   |      |      |
cw                |      |      | Change file or folder name
cW                |      |      | Change only file or folder name (without the extension)
A                 |      |      | Change only the extension
cp                |      |      | Change file attributes
co                |      |      | Change file owner
cg                |      |      | Change file group
**SYMBOLIC LINKS**|      |      |
cl                |      |      | Change link target (if file/folder is linked)
gf                |      |      | Follow link destination
al                |      |      | Put a symbolic link of the yanked file with absolute path
rl                |      |      | Put a symbolic link of the yanked file with relative path
**OPERATIONS**    |      |      |
dd                | :d   |      | Delete or move to trash
DD                |      |      | Delete ( omitting trash )
yy or Y           |      |      | yank selected files
p                 |      |      | copy yanked files to the current directory or move the files to the current</br> directory if they were deleted with dd or :d[elete] or yanked from vifm-trash directory.
u                 |      |      | Undo last change
**SELECTION**     |      |      |
t                 |      |      | Tag or select the current file
v                 |      |      | Start visual mode, select the files then press enter to keep them and return to normal mode
av                |      |      | Goto visual mode into selection amending state preserving current selection
gv                |      |      | Goto visual mode restoring last selection
a                 |      |      | All files in the current view
**MARKS**         |      |      |
m[a-z][A-Z][0-9]  |      |      | Book mark a folder or file
'[a-z][A-Z][0-9]  |      |      | Recall a bookmark
                  |:mark |      | Show all the bookmarks

### Key notations in vifm

Some keys doesn't work in vifm see a list of key codes in the following
[bracket_notation.c][bracket_notation] file. But it should be noted 
that there is no way to map for example ctrl+down or insert keys.
The best option with extended keys is using <ic>nnoremap</ic> instead of
<ic>nmap</ic>.

Also you can issue <ic>:cmap</ic>, <ic>:nmap</ic>, <ic>:qmap</ic> commands 
without any parameters to see the current key bindings in each mode respectively.

[bracket_notation]: https://github.com/vifm/vifm/blob/3f89a26cd4efa6c9be3e93a768e871cf718c8dd6/src/bracket_notation.c
[vifm_manual]: https://vifm.info/manual.shtml
[vifm_doc]: http://vifm.info/vimdoc.shtml#vifm-general-keys
[vifm_txt]: http://src.gnu-darwin.org/ports/misc/vifm/work/vifm-0.3a/src/vifm.txt
[vifm_cmd_src] : https://github.com/vifm/vifm/blob/master/src/modes/normal.c
[install_automake]: ?c=Linux&p=build-and-install.md