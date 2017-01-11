$('h1').slice(2).before("<br><hr>");
$('span code').each(function(i, inline) {
    hljs.highlightBlock(inline);
});