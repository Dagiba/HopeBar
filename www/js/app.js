// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var example = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('DashCtrl',function($scope) {
  $scope.launchSite = function() {
    window.open('http://www.hopebar.com', '_system', 'location=yes');
  };
    $scope.launchBuy = function() {
      window.open('http://www.hopebar.com/shop/', '_system', 'location=yes')
    }
});

example.controller("ExampleController", function($scope, $cordovaSocialSharing) {
 
     $scope.shareAnywhere = function() {
             $cordovaSocialSharing.share("This is your message",
	     "This is your subject", "www/imagefile.png", "http://blog.nraboy.com");
	         }
		  
	$scope.shareViaTwitter = function() {
    		$cordovaSocialSharing.shareViaTwitter("Check out this cool app I'm using called IonicProject for "
    		+ device.platform, null, device.platform == "Android" ? "GOOGLE_PLAY_URL" : "ITUNES_URL");
    		});

	/*$scope.shareViaTwitter = function(message, image, link) {
		$cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
			$cordovaSocialSharing.shareViaTwitter(message, image, link);
		}, function(error) {
			alert("Cannot share on Twitter");
		});
	*/
	}
});

