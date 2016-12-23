$('h1').slice(2).before("<br><hr>");

$("#jstree_div").jstree({
    "conditionalselect" : function (node) {
        return false;
    },
    "plugins" : ['conditionalselect'],
//        "core" : { // core options go here
//            "themes" : { "icons": false },
//        },
    "state" : { "key" : "state_wiki" },
    "plugins" : ["state"],
});

$(document).on('click', '.jstree-anchor', function(e) {
    var page = $(this).parent().attr("page");
    if (page != null) {
        window.location.href = page;
    }
});

$(function () { $('#jstree_div').jstree(); });
