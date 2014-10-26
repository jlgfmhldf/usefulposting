(function(){
	"use strict";

	var api, app;
	api = {};
	app = {};

	window.api = api;
	window.app = app;


	app.init = function() {
		if (!app.checkAuth()) {
			api.auth();
		}
		else {
			app.token = window.location.search.substr(6);
		}
	}


	// Проверка на авторизованность
	app.checkAuth = function() {
		if (window.location.search.substr(1,4) == 'code') {
			return true;
		}
		else {
			return false;
		}
	}

}).call(this);