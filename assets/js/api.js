(function(){
	"use strict";

	api.uploadPhoto = function() {
		api.request('photos.getWallUploadServer', 'group_id=61264413')
	}

	api.request = function(method, parameters) {
		var url, xmlHttp;
		url = "https://api.vk.com/method/" + method + "?" + parameters + "&access_token=" + window.token;

		xmlHttp = getXmlHttp();
		xmlHttp.open('GET', url, true);
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
				alert(xmlHttp.responseText);
			};
		}
		xmlHttp.send(null);

	}


	// Кроссбраузерный xmlHttpRequest
	function getXmlHttp(){
	  var xmlhttp;
	  try {
	    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	  } catch (e) {
	    try {
	      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    } catch (E) {
	      xmlhttp = false;
	    }
	  }
	  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	    xmlhttp = new XMLHttpRequest();
	  }
	  return xmlhttp;
	}

}).call(this);