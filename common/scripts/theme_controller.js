var ${widget.shortname}_theme_controller = {
    init:function() {
        var style = window.widget.preferences.getItem("themeName");
        if (style == undefined) {
            style = "light";
        };
        window.widget.views.switchTheme(style);
    },
};


$(document).on('pagebeforeshow', '#home', function (event) {
    ${widget.shortname}_theme_controller.init();
});
