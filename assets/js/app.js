(function(){
	"use strict";

	var app;
	app = {};

	window.app = app;


	app.init = function() {
		if (!app.checkAuth()) {
			app.getToken();
		}
	}


	// Проверка на авторизованность
	app.checkAuth = function() {
		if (!window.token) {
			return false;
		}
		else {
			return true;
		}
	}

	// Получение токена
	app.getToken = function() {
		var token;
		token = prompt("Введите токен для доступа к API:");
		window.token = token;
	}

}).call(this);