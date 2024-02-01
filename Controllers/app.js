var app = angular.module('MunkaIdoApp', ['ngRoute', 'ngNotify']);

app.run(function($rootScope){
    $rootScope.appTitle = 'Munka Idő App';
    $rootScope.text = 'asaaasdfasdf'
});


/*
app.config(function($routeProvider){

});

*/