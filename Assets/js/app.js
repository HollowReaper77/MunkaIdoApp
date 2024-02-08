var app = angular.module('MunkaIdoApp', ['ngRoute', 'ngNotify']);


app.run(function($rootScope){
    $rootScope.appTitle = 'Munka Idő App';
    $rootScope.debugtext = 'debug'
    $rootScope.serverUrl = 'http://localhost:5000';
    $rootScope.company = 'Bajai SZC Türr István Technikum';
    $rootScope.author = '5/13.szoftverfejlesztő - DT';

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
        templateUrl: 'Views/statistics.html',
        controller: 'statisticsCtrl' // statisztika
    })
    .when('/employees', {
        templateUrl: 'Views/employees.html', //felvétel törlés módosítás
        controller: 'employeesCtrl'
    })
    .when('/worktimes', {
        templateUrl: 'Views/worktimes.html',
        controller: 'worktimesCtrl' // havibontásban az adott hónapban kifizetendő munkabér
    })
    .otherwise(
        {redirectTo: 'statistics'} // nem létező linkel azonnal statisztikára irányít
    )
});