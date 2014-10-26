(function(){
	"use strict";

	api.auth = function() {
		var clientId, redirectUri, display, scope,
			apiUrl,
			apiWindow,
			token;
		
		clientId = 4605706;
		scope = 'wall';
		redirectUri= "http://jlgfmhldf.github.io/usefulposting";
		display = 'popup';

		apiUrl = 'https://oauth.vk.com/authorize?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&scope=' + scope + '&display=' + display;
		
		apiWindow = window.open(apiUrl, "Авторизация", "width=300, height=300");
		setInterval(checkLocation(apiWindow), 50);
	}



	function checkLocation(_window) {
		console.log(_window.location);
	}

}).call(this);