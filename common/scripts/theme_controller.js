var ${widget.shortname}_theme_controller = {
    init:function() {
        // FIXME: theme should be stored in a setting and loaded dynamically
        if (Math.random() > .5) {
            window.widget.views.switchTheme("light");
        } else {
            window.widget.views.switchTheme("dark");
        };
    },
};


$(document).on('pageinit', '#home', function (event) {
    ${widget.shortname}_theme_controller.init();
});
