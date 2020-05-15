(function(root){
	/* main.js */
	requirejs.config({
		shim: {
			'text': ['underscore','jquery'],
		},

		paths: {
			'jquery' : 'http://code.jquery.com/jquery-latest.min',
			'text': '../libs/requirejs/plugins/text.min',
			'underscore' : '../libs/underscore'
		},

		
	});

	require(['text'],function(){
		require(['app'], function(App) {
			App.initialize();
		});
	});
})();