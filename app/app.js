angular.module('myApp', [])
.directive('makeEditable', function($sce) {
	return {
		restrict: 'A',
		templateUrl: 'make-editable.html',
		scope: true
	}
})