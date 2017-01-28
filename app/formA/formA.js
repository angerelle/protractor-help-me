/**
 * Created by angela on 27/01/2017.
 */
'use strict';

angular.module('myApp.formA', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/formA', {
            templateUrl: 'formA/formA.html',
            controller: 'FormACtrl',
            title: 'CHEMET request'
        });
    }])

    .controller('FormACtrl', [function() {

    }]);