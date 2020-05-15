define([
	'text!../html/black.html',
], function(ViewTemplate){
	/* black.js */
	'use strict';
	var Control = {
		loadTemplate: function() {
			this.compiled = _.template(ViewTemplate);
			$('body').append(this.compiled());
		},

		
	};

	return Control;	
})