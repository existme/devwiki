$('h1').slice(2).before("<br><hr>");
<<<<<<< HEAD
$('span code').each(function(i, inline) {
    hljs.highlightBlock(inline);
});
=======

$("#jstree_div").jstree({
    "conditionalselect": function (node) {
        return false;
    },
    "plugins": ['conditionalselect', 'wholerow','state'],
    "core": { // core options go here
        "themes": {
            'name':'default',
            "dots" : true,
            "variant" : "small",
            'responsive':true,
            'url':'/vendor/components/jTree/themes/default/style.css'
        },
    },
    "state": {"key": "state_wiki"}
});

$(document).on('click', '.jstree-anchor', function (e) {
    var page = $(this).parent().attr("page");
    if (page != null) {
        window.location.href = page;
    }
});

$(function () {
    $('#jstree_div').jstree();
});
>>>>>>> master
