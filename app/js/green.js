define([
	'text!../html/green.html',
], function(ViewTemplate){
	/* green.js */
	'use strict';
	var Control = {
		loadTemplate: function() {
			this.compiled = _.template(ViewTemplate);
			$('body').append(this.compiled());
		},

		
	};

	return Control;	
})