app.controller('employeesCtrl', function($scope, ngNotify, $rootScope){

    $scope.employe = {};
    $scope.employees = [];

    $scope.employeManagement = function(){
        $scope.employees.push({
            name: $scope.employe.name,
            address: $scope.employe.address,
            position: $scope.employe.position,
            pricePerHour: parseInt($scope.employe.pricePerHour)
        });
    }


    $scope.employeManagement() = function(){
        axios.get($rootScope.serverUrl+'/db/employees').then(res => {
            $scope.employe = res.data;
            $scope.$apply();
        });
    }
});