(function() {
	document.getElementById('auth').onclick = function(e) {
		e.preventDefault();
		api.auth();
	}
}).call(this);