var myApp = angular.module('myApp', ['ui.router']);

//Controllers for each page
myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'HomeController',
    })
    .state('cover', {
        url: '/cover',
        templateUrl: 'pages/cover.html',
        controller: 'CoverController',
    })
    .state('team', {
        url: '/team',
        templateUrl: 'pages/team.html',
        controller: 'TeamController',
    })
    .state('ideas', {
        url: '/ideas',
        templateUrl: 'pages/ideas.html',
        controller: 'IdeasController',
    })
    .state('prototypes',{
        url:'/prototypes',
        templateUrl: 'pages/prototypes.html',
        controller: 'PrototypesController',
    })
    .state('stress', {
        url: '/stress',
        templateUrl: 'pages/stress.html',
        controller: 'StressController',
    })
    .state('final', {
        url: '/final',
        templateUrl: 'pages/final.html',
        controller: 'FinalController',
    })
    .state('conclusion', {
        url: '/conclusion',
        templateUrl: 'pages/conclusion.html',
        controller: 'ConclusionController',
    })
})

.controller('HomeController', function($scope) {

})

.controller('CoverController', function($scope) {

})

.controller('TeamController', function($scope, $http) {

})


.controller('IdeasController', function($scope, $http) {

})

.controller('PrototypesController', function($scope) {

})

.controller('StressController', function($scope) {

})

.controller('FinalController', function($scope) {

})

.controller('ConclusionController', function($scope) {

});