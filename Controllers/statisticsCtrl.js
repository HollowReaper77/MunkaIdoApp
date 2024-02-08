app.controller('statisticsCtrl', function($scope, ngNotify, $rootScope){
    $scope.months = ['Janurár', 'Február', 'Máricus', 'Április', 'Május', 'Június', 'Augustus', 'Szeptemper', 'Október', 'November', 'December']

    $scope.employe = {};
    $scope.employees = [];


    $scope.getEmployees = function(){
        axios.get($rootScope.serverUrl+'/db/employees').then(res => {
            $scope.employe = res.data;
            $scope.$apply();
        });
    }
});