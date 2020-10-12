$(document).ready(function()
{
    "use strict";

    var feed = new Instafeed({
		get: 'user',
		userId: 2330243139,
		accessToken: 'IGQVJWSHg4b01CcmpGQjh6cWdxWFlsNk93aGVvSlFoYnRnbExnNkhLNWFrRkQydHY2RUZAZANEdmTHYyTEw4YnM5M1ZAYRHJlM21ZAbFRmSm54MG1ZAckM3OTMtS193ZAlR5aGlWMEVPaEVBdVhuM21IX3k2MwZDZD',
		target: "instafeed",
		resolution: 'low resolution',
		limit: 2,
		template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
	});
	feed.run();


}) (jQuery);

