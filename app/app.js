define([
	'text!./html/main_template.html',
	'./js/black',
	'./js/green'
], function(ViewTemplate, BlkCtrl, GrnCtrl){
	'use strict';
	var Control = {
		initialize: function() {
			this.loadTemplate();
			this.btnListener1();
			this.btnListener2();
		},

		loadTemplate: function() {
			this.compiled = _.template(ViewTemplate);
			$('body').append(this.compiled());
		},

		
		btnListener1: function(){
			$('#btn1').on('click', function(){
				BlkCtrl.loadTemplate();
			});
		},

		btnListener2: function(){
			$('#btn2').on('click', function(){
				GrnCtrl.loadTemplate();
			});
		}
	};
	return Control;
})