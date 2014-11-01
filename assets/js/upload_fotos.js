(function(){
	"use strict";

	var token, UrlUploadPhotos;

	token = window.location.search.substr(6);
	UrlUploadPhotos = "https://api.vk.com/method/photos.getWallUploadServer.post?group_id=30782522&v=5.26&access_token=" + token
}).call(this);