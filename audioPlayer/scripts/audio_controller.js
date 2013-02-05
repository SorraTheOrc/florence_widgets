var ${widget.shortname}_audio_controller = { 
    init:function() { 
	// FIXME: album should be created by reading a directory
        var albums = {
            "classical": {
                "title": "Classical",
                "preview": "images/icon-audio-medium.png",
                "assets": [
                    {
	                "src":"assets/Blind_Blake-Diddie_Wa_Diddie.mp3"
                    },
                    {
                        "src":"assets/I.Allegro.mp3"
                    }

                ]
            },
            "soundtrack": {
                "title": "Soundtrack",
                "preview": "images/icon-audio-medium.png",
                "assets": [
                    {
	                "src":"assets/ScottJoplin-TheEntertainer1902.mp3"
	            }
                ]
            }
        }
        ${widget.shortname}_asset_controller.setAlbums(albums);
        ${widget.shortname}_scanning_controller.scanElements = $('[data-scanOrder]');
    
        // FIXME - something a little strange as both #home and #picture pages contents exists in DOM here
        // So we have different ids for button on each page
        // Also this gets called during tiled view which seem uncessary and may lead to too many event handlers
        $('#otherThings,#otherThings2').click(function () {
            window.widget.views.openUrl('/home');
        });        
    },    
};

$(document).on('pageinit', '#home', function (event) {
    ${widget.shortname}_audio_controller.init();
});
