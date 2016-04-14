/**
*  Module
*
* Description
*/
angular.module('AngularApp', ['ui.router', 'AngularApp.controllers'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'partials/gallery.html',
            controller: 'GalleryCtrl'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: 'partials/admin.html',
            controller: 'AdminCtrl'
        })

    // if none of the above states are matched, use this as the fallback

    $urlRouterProvider.otherwise('/gallery');

  });

