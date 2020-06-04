/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ()
{
    var aplicacionMundial = angular.module('aplicacionMundial', []);
    
    
    aplicacionMundial.directive('toolbar', function () {

    return{
    restrict: 'E',
            templateUrl: 'partials/toolbar.html'
            controller: function () {
            this.tab = 0;
                    this.selectTab = function (setTab) {

                    this.tab = setTab;
                    };
                    this.isSelected = function (tabParam) {

                    return this.tab === tabParam;
                    };
            },
            ControllerAs: 'toolbar'
    };
    });





    aplicacionMundial.directive('CompetitorInfo', function () {

        return{

            restrict: 'E',
            templateUrl: 'partials/competitor-info.html',
            controller: 'getCompetitors'

        };
    });
    aplicacionMundial.controller("getCompetitors", function ($http, $scope) {

        $http.get('http://localhost:8080/competitors').success(function(data, status, headers, config)){

        $scope.competitors = data;
        $scope.toolbar.selectedTab(1);
    }).error(function (data, status, headers, config) {
        //log error
        console.log(data);
    });
}
);
aplicacionMundial.directive('CompetitorInfo', function () {

    return{

        restrict: 'E',
        templateUrl: 'partials/competitor-info.html',
        controller: 'competitorCtrl'

    };
});
aplicacionMundial.controller("competitorCtrl", function ($http, $scope) {
    $scope.addCompetitor = function () {
        console.log('name');
        $http.post('http://localhost:8080/competitors/add', $scope.competitor).success(function (data, headers) {
            $scope.competitor = {};
            $scope.toolbar.selectTab(2);
        });
    }
    );
});

