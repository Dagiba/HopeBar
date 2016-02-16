/**
 * Created by chris_000 on 10/2/2015.
 */
angular.module('esiHopeBar.controllers', [])
.controller('AppCtrl', function($scope, $state, $ionicHistory, $ionicPopup) {


    $scope.launchSite = function() {
      window.open('http://www.hopebar.com', '_blank', 'location=yes');
    };
    $scope.launchBuy = function() {
      window.open('http://www.hopebar.com/shop/', '_blank', 'location=yes')
    };
    $scope.launchNourish = function() {
      window.open('http://www.hopebar.com/nourish-two/', '_blank', 'location=yes')
    };
    $scope.launchBar = function() {
      window.open('http://www.hopebar.com/hope-whole-food-bar/', '_blank', 'location=yes')
    };
    $scope.launchPlan = function() {
      window.open('http://www.hopebar.com/reboot-food-plan/#1', '_blank', 'location=yes')
    };

    $scope.changeReferral = function(){
      $scope.showAlert("here")
    };
    $scope.changeUsername = function() {
      $scope.showAlert("here")
    };
    $scope.changePassword = function()  {
      $scope.showAlert("here")
    };

    $scope.showAlert = function(msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };

  })

.controller('LoginCtrl', function($scope, $state, $ionicPopup, $location, $ionicHistory) {
    $scope.data = {};
    $scope.showAlert = function(msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };
  })

.controller('DashCtrl',function($scope) {

});
