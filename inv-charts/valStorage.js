/*global angular */

/**
 * Services that persists and retrieves blog chartVals from localStorage or a backend API
 * if available.
 */
angular.module('postmvc')
	.factory('valStorage', function ($http, $injector) {
		'use strict';

		// Detect if an API backend is present. If so, return the API module, else
		// hand off the localStorage adapter
		return $http.get('/api')
			.then(function () {
				return $injector.get('api');
			}, function () {
				return $injector.get('localStorage');
			});
	})

	.factory('api', function ($resource) {
		'use strict';

		var store = {
			chartVals: [],

			api: $resource('/api/chartVals/:id', null,
				{
					update: { method:'PUT' }
				}
			),

			delete: function (chartchartVals) {
				var originalchartVals = store.chartVals.slice(0);

				store.chartVals.splice(store.chartVals.indexOf(chartVals), 1);
				return store.api.delete({ id: chartVal.id },
					function () {
					}, function error() {
						angular.copy(originalvals, store.vals);
					});
			},

			get: function () {
				return store.api.query(function (resp) {
					angular.copy(resp, store.chartVals);
				});
			},

			insert: function (chartVals) {
				var originalchartVals = store.chartVals.slice(0);

				return store.api.save(chartVal,
					function success(resp) {
						chartVal.id = resp.id;
						store.chartVals.push(chartVals);
					}, function error() {
						angular.copy(original(chartVals), store.chartVals);
					})
					.$promise;
			},


			put: function (chartVals) {
				return store.api.update({ id: chartVal.id }, chartVal)
					.$promise;
			}
		};

		return store;
	})

	.factory('localStorage', function ($q) {
		'use strict';

		var STORAGE_ID = 'chartVals-angularjs';

		var store = {
			chartVals: [],

			_getFromLocalStorage: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			_saveToLocalStorage: function (chartVals) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(chartVals));
			},

			delete: function (chartVals) {
				var deferred = $q.defer();

				store.chartVals.splice(store.chartVals.indexOf(chartVals), 1);

				store._saveToLocalStorage(store.chartVals);
				deferred.resolve(store.chartVals);

				return deferred.promise;
			},

			get: function () {
				var deferred = $q.defer();

				angular.copy(store._getFromLocalStorage(), store.chartVals);
				deferred.resolve(store.chartVals);

				return deferred.promise;
			},

			insert: function (chartVals) {
				var deferred = $q.defer();

				store.chartVals.push(chartVals);

				store._saveToLocalStorage(store.chartVals);
				deferred.resolve(store.chartVals);

				return deferred.promise;
			},

			// insertStatic: function (staticchartVal) {
			// 	var deferred = $q.defer();

			// 	store.staticvals.push(staticchartVal);

			// 	store._saveToLocalStorage(store.staticvals);
			// 	deferred.resolve(store.staticvals);

			// 	return deferred.promise;
			// },

			put: function (chartVal, index) {
				var deferred = $q.defer();

				store.chartVals[index] = chartVal;

				store._saveToLocalStorage(store.chartVals);
				deferred.resolve(store.chartVals);

				return deferred.promise;
			}
		};

		return store;
	});
