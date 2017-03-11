'use strict';

/* Controllers */

function IndexCtrl($scope, $http) {
    $http.get('/api/novels').
    success(function(data, status, headers, config) {
        $scope.novels = data.novels;
    });
}

function AddNovelCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.submitNovel = function () {
        $http.post('/api/novel', $scope.form).
        success(function(data) {
            $location.path('/');
        });
    };
}

function InfoNovelCtrl($scope, $http, $routeParams) {
    $http.get('/api/novel/' + $routeParams.id).
    success(function(data) {
        $scope.novel = data.novel;
    });
}

function EditNovelCtrl($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/novel/' + $routeParams.id).
    success(function(data) {
        $scope.form = data.novel;
    });

    $scope.editNovel = function () {
        $http.put('/api/novel/' + $routeParams.id, $scope.form).
        success(function(data) {
            $location.url('/infoNovel/' + $routeParams.id);
        });
    };
}

function DeleteNovelCtrl($scope, $http, $location, $routeParams) {
    $http.get('/api/novel/' + $routeParams.id).
    success(function(data) {
        $scope.novel = data.novel;
    });

    $scope.deleteNovel = function () {
        $http.delete('/api/novel/' + $routeParams.id).
        success(function(data) {
            $location.url('/');
        });
    };

    $scope.home = function () {
        $location.url('/');
    };
}