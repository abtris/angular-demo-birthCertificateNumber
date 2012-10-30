'use strict';

demosAngularApp.controller('MainCtrl', function($scope) {
	$scope.change = function () {

		var parts  = $scope.birthnumber.match(/[\s\S]{1,2}/g) || [];
		if (parts[1]<=12) {
			$scope.kind = "male";
		} 
		if (parts[1]>=51 && parts[1]<=62) {
			$scope.kind = "female";	
			parts[1] =	parts[1] - 50;
		}

		var day = moment(parts.join(''), "YYMMDD");
		$scope.birth = day.format("dddd, MMMM Do YYYY");
	}
});
