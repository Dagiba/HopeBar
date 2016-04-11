/**
 * Created by chris_000 on 10/2/2015.
 */
angular.module('esiHopeBar.controllers', [])
.controller('AppCtrl', function($scope, $state, $ionicHistory, $ionicPopup, $ionicPlatform) {


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
    if ($ionicHistory.currentStateName() == "app.videos") {
      var deregPause = $ionicPlatform.on('pause', function() {
        $state.go('app.home');
        player.stopVideo();
      });
      $scope.$on("$ionicView.beforeLeave", function() {
        deregPause();
      })
    }


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

})

.controller('revControl',function($scope, $state, $ionicPlatform, $ionicHistory, $ionicPopup) {
  var players = {};
  var iframes = document.getElementsByTagName("iframe");
  function onYouTubeIframeAPIReady() {
    var iframe;
    for (iframe in iframes) {
      console.log(iframe);
      players[iframe] = new YT.Player(iframe);
    }

  }
  onYouTubeIframeAPIReady();

  var deregPause = $ionicPlatform.on('pause', function() {
    stop();
    
  });
  $scope.$on("$ionicView.beforeLeave", function() {
    deregPause();
  });

  function stop() {
    var i;
    for (i = 0; i < iframes.length; i++ ) {
      players[iframes[i].id].stopVideo();
    }
    return false;
  }

  $scope.showAlert = function(msg) {
    var alertPopup = $ionicPopup.alert({
      title: 'Warning Message',
      template: msg
    });
  };
});
