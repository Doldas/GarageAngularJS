(function () {
    var app = angular.module("Garage", []);
    app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

        $scope.getData = getData;

        var onUserComplete = function (response) {
            $scope.Type = response.data;
            $http.get($scope.Type)
                 .then(onRepos);
        };

        function getData() {
            $http.get('/api/values/get')
                .then(onRepos) 
        };

        var onRepos = function (response) {
            $scope.vehicles = response.data;
        };


        $scope.orderByMe = function (vehicle) {
            $scope.myOrderBy = vehicle;
        };

        $scope.searchType = function (type) {
            $http.get('/api/values/TypeSearch' + type)
              .then(onUserComplete);
        };

        $scope.FreeSearch = function (mamma) {
            $http.get('/api/values/TypeSearch' + mamma)
              .then(onUserComplete);
        };

        
    }]);

    app.controller("MainController", ["$scope", "$http", MainController]);

}());