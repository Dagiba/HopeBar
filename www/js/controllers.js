/**
 * Created by chris_000 on 10/2/2015.
 */
angular.module('esiHopeBar.controllers', [])
.controller('AppCtrl', function($scope) {




  })


.controller('DashCtrl',function($scope) {
  $scope.launchSite = function() {
    window.open('http://www.hopebar.com', '_system', 'location=yes');
  };
  $scope.launchBuy = function() {
    window.open('http://www.hopebar.com/shop/', '_system', 'location=yes')
  }

});
