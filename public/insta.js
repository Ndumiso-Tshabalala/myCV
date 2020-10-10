$(document).ready(function()
{
    "use strict";

    var feed = new Instafeed({
		get: 'user',
		userId: 2330243139,
		accessToken: 'IGQVJWX2g2cHVPUjVOZATdsWTlMM0N0YlJsVzZAMb3FsSGFLdVB4TUI2NURVeEN0S2lZAZAXZAPa0F1bnVZATlI1QWlvdVNLenYtYlFlNXZAkWTI3S2FOOC1XRWdnSGs2X3N5VWtEajJ6U29faDRlRmF4U1dybwZDZD',
		target: "instafeed",
		resolution: 'low resolution',
		limit: 6,
		template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
	});
	feed.run();


}) (jQuery);

