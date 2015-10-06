// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('esiHopeBar', ['ionic', 'esiHopeBar.controllers'])

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


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'HTMLs/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'HTMLs/login.html'
        }
      }

    })

    .state('app.home', {
      url: '/home',
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
          templateUrl: 'HTMLs/settings.html'
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

  $urlRouterProvider.otherwise('/app/home');


});
