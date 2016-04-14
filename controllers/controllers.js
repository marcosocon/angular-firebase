angular.module('AngularApp.controllers',['firebase'])

  .controller('AdminCtrl', function() {
    this.username = 'Marcos';
  })
  .controller('GalleryCtrl',['$scope', '$firebaseArray',function($scope,$firebaseArray) {

    $scope.username = 'Marcos';
    var reference = new Firebase('https://contact-firebase.firebaseio.com/');
    $scope.items = $firebaseArray(reference);

    $scope.addItem = function(){
      console.log("adding data..");
      $scope.items.$add({
        name:$scope.name,
        price:$scope.price,
        photo:$scope.photo
      });
      $scope.name = '';
      $scope.price = '';
      $scope.photo = '';
    }
    $scope.removeItem = function(item){
      console.log("removing..");
      $scope.items.$remove(item);
    }
  }]);

