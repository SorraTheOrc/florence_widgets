var ${widget.shortname}_images_controller = { 
    init:function() { 
	// FIXME: album should be created by reading a directory
        var albums = {
            "places": {
                "title": "Places",
                "preview": "images/places/032.jpg",
                "assets": [
                    {
	                "src":"images/places/032.jpg"
	            },
                    {
	                "src":"images/places/042.jpg"
	            },
                    {
	                "src":"images/places/eden project.jpg"
	            },
                    {
	                "src":"images/places/edenProject.jpg"
	            }
                ]
            },
            "beeKeeping": {
                "title": "Bees",
                "preview": "images/beeKeeping/3045715262_acbb1f9b60_z.jpg",
                "assets": [
                    {
	                "src":"images/beeKeeping/3045715262_acbb1f9b60_z.jpg"
	            },
                    {
	                "src":"images/beeKeeping/BeeFindsPollen.jpg"
	            }
                ]
            },
            "vehicles": {
                "title": "Vehicles",
                "preview": "images/vehicle/11919_wpm_hires.jpg",
                "assets": [
                    {
	                "src":"images/vehicle/11919_wpm_hires.jpg"
	            },
                    {
	                "src":"images/vehicle/14021_wpm_hires.jpg"
	            },
                    {
	                "src":"images/vehicle/7863_wpm_hires.jpg"
	            },
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
    ${widget.shortname}_images_controller.init();
});
