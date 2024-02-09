app.controller('statisticsCtrl', function($scope, ngNotify, $rootScope){
    $scope.months = ['Janurár', 'Február', 'Máricus', 'Április', 'Május', 'Június', 'Augustus', 'Szeptemper', 'Október', 'November', 'December']
    // todoLIST hozzáadni egy új endpoint-ot a backEnd-ben és string-ként kezelni az időt ha nem menne
    $scope.cost=[]

    $scope.employee = {};
    $scope.employees = [];

    $scope.getAllEmployes = function(){
        axios.get($rootScope.serverUrl+'/employees').then(res => {
            $scope.employees = res.data;
            $scope.$apply();
        });
    }

    $scope.getAllEmployes()



    $scope.worktime = {};
    $scope.worktimes = [];

    $scope.getAllworkTimes = function(){
        axios.get($rootScope.serverUrl+'/worktimes').then(res => {
            $scope.worktimes = res.data;
            $scope.$apply();
        });
    }

    $scope.getAllworkTimes()
});