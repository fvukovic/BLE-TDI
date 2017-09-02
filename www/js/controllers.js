angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPlatform) {
    $scope.device = [];
    $scope.response = [];

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal

  })

  .controller('PlaylistsCtrl', function ($scope, $ionicPlatform ) {

    $scope.id;
    $scope.devices = [];
    $scope.scan = function () { 
ble.enable(successTurn, failureTurn);
function failureTurn() {   }

    function successTurn( ) {}
       $scope.devices=[];
      ble.startScan([], function (device) {

        alert(device);
        $scope.devices.push({   
            name: device["name"] ,
            id: device["id"] 
        });
          $scope.$apply();


      

      }, failure);

      setTimeout(ble.stopScan,
        5000,
        function () { alert("Scan complete"); },
        function () { console.log("stopScan failed"); }
      );
    }

    $scope.connect = function (device) {
        $scope.id = device["id"];
      ble.connect(device["id"] , connectSuccess, connectFailure);
    }

    function failure() { console.log("Error"); }

    function connectSuccess(device) {

      $scope.device = device;


      alert("Connected");



    }
    function connectFailure() { console.log("stopScan failed"); }

    $scope.notify = function () {

      ble.startNotification($scope.id, $scope.device["characteristics"][4]["service"], $scope.device["characteristics"][4]["characteristic"], success3, failure);
      alert("NOTIFY; ");
      

      function success3(device) { 
console.log(device.byteLength);
          var data = new Uint8Array(device); 
          var array = [].slice.call(data); 
          
         for(var x = 0;x<array.length;x++){ 
           alert(array[x].toString(16));
         }
           $scope.$apply(); 
 
      }
    }
   
    $scope.send = function () {
      var data = new Uint8Array(8);
 
      
      data[0] = 0x68; // VFMarker 
      data[1] = 0x02; // Length 
      data[2] = 0x02; // Length 
      data[3] = 0x68; // VFMarker 
      data[4] = 0x43; // Data - command for get value 
      data[5] = 0x04; // Data - number of channel     
      data[6] = 0x47; //EndMarker 
      data[7] = 0x16; //EndMarker
      ble.writeWithoutResponse($scope.id, $scope.device["characteristics"][5]["service"], $scope.device["characteristics"][5]["characteristic"], data.buffer, success, failure);
      alert("SALJEM; ");
    }

        $scope.sendInfo = function () {
      var data = new Uint8Array(8);
 
      
      data[0] = 0x68; // VFMarker 
      data[1] = 0x02; // Length 
      data[2] = 0x02; // Length 
      data[3] = 0x68; // VFMarker 
      data[4] = 0x43; // Data - command for get value 
      data[5] = 0x01; // Data - number of channel     
      data[6] = 0x44; //EndMarker 
      data[7] = 0x16; //EndMarker
      ble.writeWithoutResponse($scope.id, $scope.device["characteristics"][5]["service"], $scope.device["characteristics"][5]["characteristic"], data.buffer, success, failure);
      alert("SALJEM; ");
    }


    

    $scope.send2 = function () {
      var data = new Uint8Array(10);
 
      
      data[0] = 0x68; // VFMarker 
      data[1] = 0x04; // Length 
      data[2] = 0x04; // Length 
      data[3] = 0x68; // VFMarker 
      data[4] = 0x43; // Data - command for get value 
      data[5] = 0x05; // Data - command   
      data[6] = 0x09;  //channel 
      data[7] = 0x00; //new channel 
      data[8] = 0x51; // CB + command
      data[9] = 0x16; //EndMarker
      ble.writeWithoutResponse($scope.id, $scope.device["characteristics"][5]["service"], $scope.device["characteristics"][5]["characteristic"], data.buffer, success, failure);
      alert("SALJEM 0x00; ");
    }
       $scope.sendC2 = function () {
      var data = new Uint8Array(10);
 
      
      data[0] = 0x68; // VFMarker 
      data[1] = 0x04; // Length 
      data[2] = 0x04; // Length 
      data[3] = 0x68; // VFMarker 
      data[4] = 0x43; // Data - command for get value 
      data[5] = 0x05; // Data - command   
      data[6] = 0x09;  //channel 
      data[7] = 0x01; //new channel 
      data[8] = 0x52; // CB + command
      data[9] = 0x16; //EndMarker
      ble.writeWithoutResponse($scope.id, $scope.device["characteristics"][5]["service"], $scope.device["characteristics"][5]["characteristic"], data.buffer, success, failure);
      alert("SALJEM;  0x01");
    }
       $scope.sendC3 = function () {
      var data = new Uint8Array(10);
 
      
      data[0] = 0x68; // VFMarker 
      data[1] = 0x04; // Length 
      data[2] = 0x04; // Length 
      data[3] = 0x68; // VFMarker 
      data[4] = 0x43; // Data - command for get value 
      data[5] = 0x05; // Data - command   
      data[6] = 0x09;  //channel 
      data[7] = 0x02; //new channel 
      data[8] = 0x53; // CB + command
      data[9] = 0x16; //EndMarker
      ble.writeWithoutResponse($scope.id, $scope.device["characteristics"][5]["service"], $scope.device["characteristics"][5]["characteristic"], data.buffer, success, failure);
      alert("SALJEM 0x02 ");
    }





    function failure() { console.log("ne valja notify"); }

    function success(device) { console.log("Sended"); }




  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
