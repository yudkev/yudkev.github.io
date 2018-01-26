/*global angular */

angular.module('postmvc', ['ngRoute', 'angular.filter'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'ChartCtrl',
			templateUrl: 'charts.html',
			resolve: {
				store: function (valStorage) {
					// Get the correct module (API or localStorage).
					return valStorage.then(function (module) {
						module.get();
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when("/red", {
		        templateUrl : "red.html"
		    })
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});


