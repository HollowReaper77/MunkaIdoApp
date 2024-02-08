app.controller('employeesCtrl', function($scope, ngNotify, $rootScope){

    $scope.employee = {};
    $scope.employees = [];
    $scope.editmode = false;

    $scope.getAllEmployes = function(){
        axios.get($rootScope.serverUrl+'/employees').then(res => {
            $scope.employees = res.data;
            $scope.$apply();
        });
    }

    $scope.getAllEmployes()

    $scope.insert = function(){
        // hibakezelése
        let data = {
            name: $scope.employee.name,
            address:  $scope.employee.address,
            position:  $scope.employee.position,
            pricePerHour:  $scope.employee.pricePerHour,
        }
        axios.post($rootScope.serverUrl+'/employees', data).then(res=>{

        });
    }

    
    $scope.update = function(id){

    }

    
    $scope.delete = function(id){

    }

    
    $scope.cancel = function(){
        $scope.editmode = false;
        $scope.employee = {}
        $scope.emp = {}
    }

    $scope.select = function(emp){
        $scope.employee = $scope.employees.find(item => item.ID == emp);
        $scope.editmode = true;
    }
});