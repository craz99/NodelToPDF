'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
    }).
    when('/addNovel', {
        templateUrl: 'partials/addNovel',
        controller: AddNovelCtrl
    }).
    when('/infoNovel/:id', {
        templateUrl: 'partials/infoNovel',
        controller: InfoNovelCtrl
    }).
    when('/editNovel/:id', {
        templateUrl: 'partials/editNovel',
        controller: EditNovelCtrl
    }).
    when('/deleteNovel/:id', {
        templateUrl: 'partials/deleteNovel',
        controller: DeleteNovelCtrl
    }).
    otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
