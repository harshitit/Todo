var ngTodo = angular.module('ngTodo', []);

ngTodo.controller('mainController',function($scope){
	$scope.Lists=[
	{
		title:'Do my Homework',
		details:'I must do my home work today'
	},
	{
		title:'Do my Assignment',
		details:'I must do my assignment tommorow'
	},
	{
		title:'Do Angular',
		details:'I must do anguler today'
	},
	{
		title:'Do Angular Test',
		details:'I must do complete my anguler test today'
	},
	{
		title:'Going Home',
		details:'Today i go back to my hometown'
	}]
	$scope.addTodo = function(title,details){
		$scope.Lists.push({title,details});
	}
	$scope.deleteTodo= function(key){
		var index = $scope.Lists.indexOf(key);
		$scope.Lists.splice(index, 1);
	}
})