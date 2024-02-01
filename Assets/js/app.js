var app = angular.module('MunkaIdoApp', ['ngRoute', 'ngNotify']);

app.run(function($rootScope){
    $rootScope.appTitle = 'Munka Idő App';
    $rootScope.debugtext = 'debug'

    $rootScope.company = 'Bajai SZC Türr István Technikum';
    $rootScope.author = '5/13.szoftverfejlesztő';

    $rootScope.navItems = [];

    $rootScope.getNavItems = function(){
        axios.get($rootScope.serverUrl+'/db/navitems').then(res=>{
            $rootScope.navItems = res.data;
        });
    }
});



app.config(function($routeProvider){
    $routeProvider
    .when('/statistics', {
        templateUrl: 'Views/statistics.html'
    })
    .when('/employees', {
        templateUrl: 'Views/employees.html',
        controller: 'employeesCtrl'
    })
    .when('/worktimes', {
        templateUrl: 'Views/worktimes.html',
        controller: 'worktimesCtrl'
    })
});