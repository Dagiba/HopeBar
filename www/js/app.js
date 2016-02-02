// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('esiHopeBar', ['ionic', 'esiHopeBar.controllers'])

.run(function($ionicPopup, $ionicPlatform, $state) {
    $ionicPlatform.registerBackButtonAction(function(event) {
      if (true) { // your check here
        $ionicPopup.confirm({
          title: 'System warning',
          template: 'are you sure you want to exit?'
        }).then(function(res) {
          if (res) {
            ionic.Platform.exitApp();
          }
        })
      }
    }, 100);
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    Parse.initialize("VtrWJ7uDOXCBGGn1lweuCnKK8uitk9pXwwqYzw1D", "Qg1P48zW3xx0GyFALPGJD2r6wlL1SUG4guvW5eui");
    var currentUser = Parse.User.current();
    /*if (currentUser) {
      $state.go('app.home')
    } else {
      $state.go('login')
    }*/
    $state.go('app.home');
  });

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

    .state('app.plan', {
      url: '/plan',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/plan.html'
        }
      }
    })

    .state('app.resources', {
      url: '/resources',
        views: {
          'menuContent': {
            templateUrl: 'HTMLs/resources.html'
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

  //$urlRouterProvider.otherwise('/app/login');


});
