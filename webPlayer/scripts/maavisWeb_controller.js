var ${widget.shortname}_web_controller = { 
    init:function() { 
	// FIXME: album should be created by reading a directory
        var albums = {
            "nHSDirect": {
                "title": "NHSDirect",
                "preview": "images/Health information.png",
                "assets": [
                    {
	                "src":"http://www.nhsdirect.nhs.uk"
	            }
                ]
            },
            "britishMuseum": {
                "title": "BritishMuseum",
                "preview": "images/information.jpg",
                "assets": [
                    {
	                "src":"http://www.britishmuseum.org"
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
    ${widget.shortname}_web_controller.init();
});