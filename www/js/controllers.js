/**
 * Created by chris_000 on 10/2/2015.
 */
angular.module('esiHopeBar.controllers', [])
.controller('AppCtrl', function($scope, $state) {
    $scope.logoutUser = function(){
      Parse.User.logOut();
      $state.go('login');
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
          $ionicHistory.nextViewOptions({
            disableBack: true
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
            $ionicHistory.nextViewOptions({
              disableBack: true
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
  $scope.launchSite = function() {
    window.open('http://www.hopebar.com', '_system', 'location=yes');
  };
  $scope.launchBuy = function() {
    window.open('http://www.hopebar.com/shop/', '_system', 'location=yes')
  }

});
