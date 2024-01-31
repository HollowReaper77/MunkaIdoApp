var app = angular.module('MunkaIdoApp' ['ngRoute', 'ngNotify']);

app.run(function($rootScope, $window){
    $rootScope.appTitle('Munka Idő App');
});

app.config(function($routeProvider){

});