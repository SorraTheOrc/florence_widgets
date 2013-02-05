//FIXME - this doesnt seem to be used
if (!window.widget){
    window.widget = {
        /**
         * Adds in the "proxify" method if it isn't in the widget
         * object, e.g. as we're opening the widget directly in a
         * browser, or using a widget runtime other than Wookie
         * e.g. Opera, PhoneGap etc
         */
        proxify:function(url) {
            return url;
        },

        openURL:function(url){
            window.widget.views.openUrl(url);
        }

    };
}

if (!window.widget.views){
    window.widget.views = {
        _sendMessage: function (msg, callback) {
			window.top.postMessage(msg, "*");
            if (callback) {
                callback(window);
            }
        },
        
        openUrl: function (url, navigateCallback, opt_viewTarget) {
            this._sendMessage({message: "openUrl", url: url}, navigateCallback);
        },

        goHome: function (callback) {
            this._sendMessage({message: "goHome"}, callback );
        }
    } 
}    



