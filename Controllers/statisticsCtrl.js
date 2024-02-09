app.controller('statisticsCtrl', function($scope, ngNotify, $rootScope){
    $scope.months = ['Janurár', 'Február', 'Máricus', 'Április', 'Május', 'Június', 'Augustus', 'Szeptemper', 'Október', 'November', 'December']

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

    
});