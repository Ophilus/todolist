angular.module("myToDoList",[])
.controller("myCtrl", function($scope){

	$scope.tempInput =""

  $scope.tasksArr = []
  $scope.finishedTasksArr = []
	
	$scope.addNew = function(){
		if (!$scope.tempInput){
		alert("Введіть якесь значення!")
	}else {
		$scope.tasksArr.push($scope.tempInput);
		$scope.tempInput = "";
	}
	}

$scope.deleteTask = function(item){
	var index = $scope.tasksArr.indexOf(item);
	 $scope.tasksArr.splice(index, 1);
}; 
$scope.deleteFinishedTask = function(item){
	var index = $scope.finishedTasksArr.indexOf(item);
	 $scope.finishedTasksArr.splice(index, 1);
};
$scope.completeTask = function(item){
	var index = $scope.tasksArr.indexOf(item);
	 $scope.finishedTasksArr.push(item);
	 $scope.tasksArr.splice(index, 1);
}; 

});