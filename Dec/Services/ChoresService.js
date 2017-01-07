var Id = "choicesService";

angular.module('chores').factory(Id, ['$http', choiceService]);

function choiceService($scope, $http) {
    var shinyNewServiceInstance = "ABCDEFGHIJKLM";
    // factory function body that constructs shinyNewServiceInstance

    var service = {
        getStuff: getStuff
    }

    return service;

    //function getStuff($scope, $http) {
    //    $scope.x = $http.get('/api/me/dans')
    //        .then(function (response) {
    //          console.log(response.data);
    //          console.log(data);
    //          $scope.ohyeah = response.data;
    //  });
    //}

    function getStuff($scope, $http) {
        $scope.hello = "A mouse";
    }

}