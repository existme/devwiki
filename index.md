# Wiki page for everything and everywhere

~~~.language-bash 
$ karma start

~~~

~~~.language-javascript
var myFunction = function(){
  alert('hello world');
}
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
~~~
{: .prettyprint}

|               | Grouping                    ||
| First Header  | Second Header | Third header |
| ------------- | ------------: | :----------: |
| Content Cell  |  *Long Cell*                ||
| Content Cell  | **Cell**      | **Cell**     |

| New section   |   More        |         Data |
| And more      |           And more          ||

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
-   a parent list item (first level of indentation)
    -   a sub-item in that parent (second level of indentation)
-   continuation of the original list items

-   first item
*   second item
-   third item

1.   first item
1.   second item
    1.  first sub-item
    1.  second sub-item
2.   third item