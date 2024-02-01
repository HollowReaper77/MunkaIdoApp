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
    .when('/index', {
        templateUrl: 'Views/index.html'
    })
    .when('/adatfelvetel', {
        templateUrl: 'Views/adatfelvetel.html',
        controller: 'userCtrl'
    })
    .when('/calendar', {
        templateUrl: 'Views/calendar.html',
        controller: 'tableCtrl'
    })
});