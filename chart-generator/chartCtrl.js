/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the poststorage service
 * - exposes the model to the template and provides event handlers
 */

angular.module('postmvc')
	.controller('ChartCtrl', function ChartCtrl($scope, $window, $routeParams, $filter, store) {
		'use strict';
		// store.chartVals = [];
		$scope.XCats = [];

		$scope.percentVals = [];
		$scope.percentDiffs = [];
		$scope.chartType === 'column';
		var chartVals = $scope.chartVals = store.chartVals;
		var valDistances = $scope.valDistances = store.chartVals;

		$scope.xAxisLabel = localStorage.getItem('xAxisLabel');
		localStorage.setItem('xAxisLabel', $scope.xAxisLabel);

		$scope.yAxisLabel = localStorage.getItem('yAxisLabel');
		localStorage.setItem('yAxisLabel', $scope.yAxisLabel);

		$scope.savedXCat = localStorage.getItem('XCats');
		if (localStorage.getItem('XCats') !==null) {
			$scope.XCats = localStorage.getItem('XCats').split(',');
		} else {
			$scope.XCats = localStorage.getItem('XCats');
		}

		$scope.selectedIndex = 0;
		$scope.colors = [
		 	[],
		 	[],
		 	[]
		];

		for (var i = 0; i < 3; i++) {
		  	$scope.colors[0].push('#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58');
		  	$scope.colors[1].push('#eea2a2', '#cf6cc9', '#4dd0e1', '#b465da', '#ee609c');
		  	$scope.colors[2].push('#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D');
		  };
		
		$scope.changeColor = function ($index) {
		    $scope.selectedIndex = $index;
		 };

	    $scope.usePercents = function(){
		    if ($scope.valueType === "percent") {
		      $scope.valueType = "value";
		   } else {
		      $scope.valueType = "percent";
		   };
		   	$scope.getAxisVals();	
	    };

	    $scope.deleteMode = function(){
			if ($scope.deleteMode === "deleteModeOff") {
				$scope.deleteMode = "deleteModeOn";
			} else {
				$scope.deleteMode = "deleteModeOff";
			};
	    };
	    $scope.window = $window;
	    	    	
	    $scope.editToggle = function(yLabel, xLabel) {
	    	if ($scope.activeEdit === true ) {
	    		$scope.activeEdit = false;
	    		$scope.editYLabel = false;
	    		$scope.editXLabel = false;
	    	} else {
	    		$scope.activeEdit = true;
	    		$scope.editYLabel = true;
	    		$scope.editXLabel = true;
	    	}
	    };

 		$scope.clickToHide = function (element) {
 			if (($scope.activeEdit = false) && ($scope.editYLabel)) {
	 			$scope.editYLabel = false;		 			
	 		} else {
	 			$scope.editYLabel = false;
	 		};
	 	};
    		 	
		$scope.getAxisVals = function (interval) {
			var result= chartVals.map(Number);
			var maxVal = Math.max.apply(Math, result);
			$scope.sum = result.reduce((a, b) => a + b, 0);
				$scope.yAxis= maxVal;
				$scope.yAxisIntervals = [
					0, parseInt($scope.yAxis / 4), 
					(parseInt($scope.yAxis / 4)) * 2, 
					(parseInt($scope.yAxis / 4)) * 3, 
					parseInt($scope.yAxis)
				];
		};
		$scope.getAxisVals();

		$scope.addVal = function (chartVal, val, event) {
			var chartVal = $scope.chartVal;
			// to do - remove event
			$scope.saveEvent = event;
			// store.insert($scope.chartVal);
			var chartLimit = 20;
			$scope.saving = true;
			angular.forEach((chartVal), function(val){
				// var numVal = val.replace(/[^0-9]/g, '');
				// var isNum = Number.isInteger(parseInt(numVal));
				// if ((isNum == true) && ($scope.chartVals.length < chartLimit)) {
					store.insert(val);
					});
				// });
				$scope.saving = false;
				// need these here
			// $scope.chartVal = '';
			$scope.percentDiffs = [];
			$scope.percentVals = [];
			$scope.valDistances = [];
		
			$scope.getPie();
			// need this here
			$scope.valDistances.splice(0, 0, $scope.percentVals[0]);
			$scope.getAxisVals();
		};

		$scope.getPie = function (pv) {
			var chartVals = $scope.chartVals;
			var percentVals = $scope.percentVals;
			var percentDiffs = $scope.percentDiffs;

			var result= chartVals.map(Number);
			var sum = result.reduce((a, b) => a + b, 0);
			angular.forEach(chartVals, function(p, index){
				percentVals.push(parseInt((p * 360) / sum));	
			});
			angular.forEach(chartVals, function(d, index){
				percentDiffs.push(parseFloat((d * 360) / sum));
			});
			var valDistances = $scope.valDistances = [];
			
			var runningTotal = percentDiffs[0];
		      for (var i = 0; i < percentDiffs.length - 1; i++) {
		      	percentDiffs[i] = percentDiffs[i] + runningTotal;
		      	var runningTotal = percentDiffs[i];
		        valDistances.push(parseInt(percentDiffs[i]));
		      }
		      return valDistances;

			// percentVals.splice(130, 0, 0);
			percentVals.map(Number);

			return percentVals;
			return percentDiffs;

			$scope.getAxisVals();
			// maybe deleting this results in a gap?
			// $scope.valDistances.splice(0, 0, $scope.percentDiffs[0]);
		};
		// need these here
		$scope.getPie();
		$scope.valDistances.splice(0, 0, $scope.percentVals[0]);

		$scope.chartType = function(){
			if ($scope.chartType === "column") {
				$scope.chartType = "pie";
				$scope.getPie();
				$scope.getAxisVals();
			} else {
				$scope.chartType = "column";
			};
	    };

	    $scope.addXCat = function() {
			$scope.XCats = [];
			$scope.XCats.push($scope.XCat);
			localStorage.setItem('XCats', $scope.XCats);
			$scope.saving = true;
		};

	
		$scope.removeVal = function (chartVal, XCat) {
			if ($scope.deleteModeOn) {
				var clickedIdx = $scope.chartVals.indexOf(chartVal);
				if ($scope.XCats != null) {
					$scope.XCats.push($scope.XCats.splice(clickedIdx, 1));
					localStorage.setItem('XCats', $scope.XCats);
					$scope.saving = true;
				};
				store.delete(chartVal)
				$scope.chartVal = '';			
				};

				$scope.getAxisVals();
				$scope.percentDiffs = [];
				$scope.percentVals = [];
				$scope.valDistances = [];
				$scope.getPie();
				$scope.valDistances.splice(0, 0, $scope.percentVals[0]);
		};

		$scope.addXLabel = function() {
			$scope.xAxisLabel = [];
			$scope.xAxisLabel.push($scope.xLabel);
			localStorage.setItem('xAxisLabel', $scope.xAxisLabel);
		};
		$scope.addYLabel = function() {
			$scope.yAxisLabel = [];
			$scope.yAxisLabel.push($scope.yLabel);
			localStorage.setItem('yAxisLabel', $scope.yAxisLabel);

		};

		$scope.yLabel = $scope.yAxisLabel;
		$scope.xLabel = $scope.xAxisLabel;
		$scope.XCat = $scope.XCats;
	});
