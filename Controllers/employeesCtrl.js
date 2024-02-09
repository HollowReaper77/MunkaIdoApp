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

        if ($scope.employee.name == $scope.employee.name || $scope.employee.address == $scope.employee.address || $scope.employee.position == $scope.employee.position || $scope.employee.pricePerHour == $scope.employee.pricePerHour){
            ngNotify.set("ERROR! Din't filled all of the field!");
        }else{
        // hibakezelése
        let data = {
            name: $scope.employee.name,
            address:  $scope.employee.address,
            position:  $scope.employee.position,
            pricePerHour:  $scope.employee.pricePerHour,
        }
        axios.post($rootScope.serverUrl+'/employees', data).then(res=>{
            console.log("[LOG]: The new employee has successfully added!");
            ngNotify.set("The new employee has successfully added!");
        });
        }
    }

    $scope.insert();
    
    $scope.update = function(id){
        if ($scope.employee.name == null || $scope.employee.address == null || $scope.employee.position == null || $scope.employee.address == null){
            ngNotify.set("ERROR! Din't filled all of the field!");
        }else{
        // hibakezelése
        let data = {
            name: $scope.employee.name,
            address:  $scope.employee.address,
            position:  $scope.employee.position,
            pricePerHour:  $scope.employee.pricePerHour,
        }
        axios.patch($rootScope.serverUrl+'/employees/:id', data).then(res=>{
            console.log("[LOG]: The employee has successfully updated!");
            ngNotify.set("The employee has successfully updated!");
        });
        }
    }

    
    $scope.delete = function(id){
        if($rootScope.employee.name == null){
            ngNotify.set("ERROR! This is not a real employee!");
        }else{
            axios.delete($rootScope.serverUrl+'/employees/:id', data).then(res=>{
                console.log("[LOG]: The employee has successfully deleted!");
                ngNotify.set("The employee has successfully deleted!");
            });
        }
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