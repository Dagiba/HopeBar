// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('esiHopeBar', ['ionic', 'ngCordova', 'esiHopeBar.controllers'])

.run(function($ionicPopup, $ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    $state.go('app.home');
  });

})

.controller("ExampleController", function($scope, $cordovaSocialSharing) {
	
	$scope.shareAnywhere = function() {
		$cordovaSocialSharing.share("share msg", "title for share", null, "https://hopebar.com")
	}
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('app', {
      url: '/app',
      abstract: true,
      cache: false,
      templateUrl: 'HTMLs/menu.html',
      controller: 'AppCtrl'
    })

    .state('login', {
      url: '/login',
      cache: false,
      templateUrl: 'HTMLs/login.html',
      controller: 'LoginCtrl'


    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'HTMLs/signup.html',
      controller: 'LoginCtrl'
    })
    .state('app.cart', {
      url:'/cart',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/cart.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      cache: false,
      views: {
        'menuContent':{
          templateUrl: 'HTMLs/home.html'
        }
      }
    })

    .state('app.bar', {
      url: '/bar',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/bar.html'
        }
      }
    })

    .state('app.nourish', {
      url: '/nourish',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/nourish.html'
        }
      }
    })

    .state('app.barNutrition', {
      url: '/barNutrition',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/barNutrition.html'
        }
      }
    })

    .state('app.barInfo', {
      url: '/barInfo',
        views: {
          'menuContent': {
            templateUrl: 'HTMLs/barInfo.html'
          }
        }
    })

    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/settings.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.barReviews', {
      url: '/barReviews',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/barReviews.html'
        }
      }
  })
    .state('app.videos', {
      url: '/videos',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/resources.html'
        }
      }
    })
    .state('app.shop', {
      url: '/shop',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/shop.html'
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/home');


});
