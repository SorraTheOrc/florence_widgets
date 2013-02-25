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

if (!window.widget.preferences){
    window.widget.preferences = {
        store: [],
        setItem:function(key, value) {
            window.widget.preferences.store[key] = value;
        },

        getItem:function(key) {
            return window.widget.preferences.store[key]
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


        /**
         * Allow for the dynamic switching of theme for a widget
         * FIXME: this is not platform specific and should move to the template definition along with some demo code.r
         */
        switchTheme: function ( title ) {
            $("head link[id='theme']").remove();
            $("head").append("<link id='theme' href='style/" + title + ".css' rel='stylesheet' />");
        }
    

    }
}
