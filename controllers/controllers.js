angular.module('AngularApp.controllers',['firebase'])

  .controller('AdminCtrl', function() {
    this.username = 'Marcos';
  })
  .controller('GalleryCtrl',['$scope', '$firebaseArray',function($scope,$firebaseArray) {

    $scope.username = 'Marcos';
    var reference = new Firebase('https://contact-firebase.firebaseio.com/');
    $scope.items = $firebaseArray(reference);
    $scope.ShowEditForm=false;
    $scope.ShowAddForm=true;

    $scope.addItem = function(){
      console.log("adding data..");
      $scope.items.$add({
        name:$scope.name,
        price:$scope.price,
        photo:$scope.photo
      }).then(function(){
        clearFields();
      })
    }
    $scope.removeItem = function(item){
      console.log("removing..");
      $scope.items.$remove(item);
    }

    $scope.showEditForm = function(item){
      $scope.ShowEditForm=true;
      $scope.ShowAddForm=false;

      $scope.id = item.$id;
      $scope.name = item.name;
      $scope.price = item.price;
      $scope.photo = item.photo;
    }

    $scope.editItem = function(){
      var id = $scope.id;

      var record = $scope.items.$getRecord(id);

      record.name = $scope.name;
      record.price = $scope.price;
      record.photo = $scope.photo;

      $scope.items.$save(record).then(function(){
        console.log(id);
      })

    }

    function clearFields(){
      $scope.name = '';
      $scope.price = '';
      $scope.photo = '';
    }

  }]);

