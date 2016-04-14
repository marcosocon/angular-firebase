angular.module('AngularApp.controllers',['firebase'])

  .controller('AdminCtrl', function() {
    this.username = 'Marcos';
  })
  .controller('GalleryCtrl',['$scope', '$firebaseArray',function($scope,$firebaseArray) {

    $scope.username = 'Marcos';
    var reference = new Firebase('https://contact-firebase.firebaseio.com/');
    $scope.items = $firebaseArray(reference);

  }]);

