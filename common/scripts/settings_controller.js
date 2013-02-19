    /**
     * Get the names of the available settings groups.
     * Groups are used to describe related sets of settings. When the
     * settings page is requested the user will be presented with a
     * list of links to individual settings pages for each group. If
     * no groups are defined then all settings will be displayed on a 
     * single settings page.
     * 
     * @return an array setting group names or an empty array if no groups are defined.
     */
    ${widget.shortname}_settings_controller.getGroups = function() {
	var groups = [];
	groups[0] = "Look And Feel";
	groups[1] = "User";
	return groups;
    };
	    
    /**
     * Get the settings in a given group. Note that the group names here must correspond
     * to the group names returned by ${widget.shortname}_settings_controller.getSettings()
     * 
     * @return an array containing a number of Setting objects
     */
    ${widget.shortname}_settings_controller.getSettings = function(group) {
	var settings = [];
	if (group == undefined || group == "Look And Feel") {
	    settings[0] = new ${widget.shortname}_Setting("themeName", "Theme", "The name of the theme to use, either dark or light", "text");
	} else if (group == "User") {
	    settings[0] = new ${widget.shortname}_Setting("homepageURL", "Homepage URL", "Your homepage URL.", "email");
	    settings[1] = new ${widget.shortname}_Setting("email", "EMail", "Your email address.", "email");
	}
	return settings;
    };
