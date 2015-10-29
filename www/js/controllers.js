/**
 * Created by chris_000 on 10/2/2015.
 */
angular.module('esiHopeBar.controllers', [])
.controller('AppCtrl', function($scope, $state, $ionicHistory, $ionicPopup) {
    $scope.user = Parse.User.current();
    $scope.logoutUser = function(){
      Parse.User.logOut();
      $scope.$on('$ionicView.leave', function(){
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true
        });
      });

      $state.go('login');

    };

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

    $scope.showAlert = function(msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };

  })

.controller('LoginCtrl', function($scope, $state, $ionicPopup, $location, $ionicHistory) {
    $scope.data = {};
    $scope.signupEmail = function(){
      //Create a new user on Parse
      var user = new Parse.User();
      user.set("username", $scope.data.username);
      user.set("password", $scope.data.password);
      user.set("email", $scope.data.email);
      user.set("referralCode", "");

      // other fields can be set just like with Parse.Object
      user.set("somethingelse", "like this!");

      user.signUp(null, {
        success: function(user) {
          // Hooray! Let them use the app now.
          $scope.showAlert("success!");
          $scope.$on('$ionicView.enter', function(){
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
          });
          $state.go('login');
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          $scope.showAlert("Error: " + error.code + " " + error.message);
        }
      });
    };
    $scope.loginEmail = function(){
      if($scope.data.code.length == 9) {
        Parse.User.logIn($scope.data.username, $scope.data.password, {
          success: function (user) {
            user.set("referralCode", $scope.data.code);
            user.save();
            // Do stuff after successful login.
            console.log(user);
            $scope.showAlert("success!");
            $scope.$on('$ionicView.enter', function(){
              // Anything you can think of
              $ionicHistory.clearCache();
              $ionicHistory.clearHistory();
              $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
              });
            });


            $state.go('app.home');
          },
          error: function (user, error) {
            // The login failed. Check error to see why.
            $scope.showAlert("Error: " + error.code + " " + error.message);
          }
        });
      } else {
        $scope.showAlert("Please enter a valid Referral Code.")
      }

    };
    $scope.showAlert = function(msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };
  })

.controller('DashCtrl',function($scope) {

});
