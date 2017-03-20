(function () {
  'use strict';

  angular.module('BlurAdmin.pages.devices')
    .controller('DevicesTableCtrl', DevicesTableCtrl)
    
  function DevicesTableCtrl($scope, $http, $uibModal, $location) {

    $http({
      method: 'GET',
      url: '/api/v1.0/devices/'
    }).then(function successCallback(response) {
        console.log(response)
        $scope.devicesTableData = response.data.data
      }, function errorCallback(response) {
        console.log(response)
      }
    );

    $scope.go = function(path) {
      $location.path(path);
    };

  };

})();