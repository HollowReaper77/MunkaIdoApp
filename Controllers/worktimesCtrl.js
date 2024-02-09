app.controller('worktimesCtrl', function($scope, ngNotify, $rootScope){

    $scope.employee = {};
    $scope.employees = [];
    $scope.editmode = false;


    $scope.worktime = {};
    $scope.worktimes = [];

    $scope.getAllEmployes = function(){
        axios.get($rootScope.serverUrl+'/employees').then(res => {
            $scope.employees = res.data;
            $scope.$apply();
        });
    }

    $scope.getAllEmployes()


    $scope.getAworkTime = function(id){
        if($scope.employee.ID == $scope.worktime.empID){
            axios.get($rootScope.serverUrl+'/worktimes/:id').then(res => {
                $scope.worktimes = res.data;
                $scope.$apply();
            });
        }
    }

    $scope.getAworkTime()





    $scope.insert = function(){

        if ($scope.worktime.date == $scope.worktime.date || $scope.employee.name == $scope.employee.name ){
            ngNotify.set("ERROR! Din't filled all of the field!");
        }else{
        // hibakezelése
        let data = {
            date:  $scope.worktime.date,
            start:  $scope.worktime.position,
            end:  $scope.worktime.pricePerHour,
        }
        axios.post($rootScope.serverUrl+'/worktimes', data).then(res=>{
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
            date:  $scope.worktime.date,
            start:  $scope.worktime.position,
            end:  $scope.worktime.pricePerHour,
        }
        axios.patch($rootScope.serverUrl+'/worktimes/:id', data).then(res=>{
            console.log("[LOG]: The employee has successfully updated!");
            ngNotify.set("The employee has successfully updated!");
        });
        }
    }
    $scope.update();
    
    $scope.delete = function(id){
        if($rootScope.employee.name == null){
            ngNotify.set("ERROR! This is not a real employee!");
        }else{
            axios.delete($rootScope.serverUrl+'/worktimes/:id', data).then(res=>{
                console.log("[LOG]: The employee has successfully deleted!");
                ngNotify.set("The employee has successfully deleted!");
            });
        }
    }





    

    $scope.cancel = function(){
        $scope.editmode = false;
        $scope.worktime = {}
        $scope.work = {}
    }

    $scope.select = function(work){
        $scope.worktime = $scope.worktimes.find(item => item.ID == work);
        $scope.editmode = true;
    }
});