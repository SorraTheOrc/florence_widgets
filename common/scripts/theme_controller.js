var ${widget.shortname}_theme_controller = {
    init:function() {
        if (window.widget.preferences.getItem("themeName") == "dark") {
            window.widget.views.switchTheme("dark");
        } else {
            window.widget.views.switchTheme("light");
        };
    },
};


$(document).on('pagebeforeshow', '#home', function (event) {
    ${widget.shortname}_theme_controller.init();
});
