(function(){
	"use strict";

	api.auth = function() {
		var clientId, redirectUri, display, scope,
			apiUrl,
			apiWindow,
			token;
		
		clientId = 4605706;
		scope = 'wall,photos,offline';
		redirectUri= "https://oauth.vk.com/blank.html";
		display = 'popup';

		apiUrl = 'https://oauth.vk.com/authorize?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&scope=' + scope + '&display=' + display + "&response_type=token";
		
		window.location.href = apiUrl;
	}

}).call(this);