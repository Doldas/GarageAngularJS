(function () {

    var app = angular.module("pageViewer", []);

    var ppController = function ($scope, $http) {

        $scope.getData = getData;

        function getData() {
            $http.get('/api/values/get')
                .then(onRepos)
        };

        var onRepos = function (response) {
            $scope.vehicles = response.data;
        };

        
    };

    app.controller("ppController", ["$scope", "$http", ppController]);

}());