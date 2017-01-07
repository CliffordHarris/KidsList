var chores = angular.module('chores', []);

chores.controller('choresController', ['$scope', '$http', 'choicesService', choiceController]);

function choiceController($scope, $http, choicesService) {
    $scope.firstName = "Daniel";
    $scope.numberDaysTraveled = [2,3,4,5,6];

    $scope.getItems = getItems;
    $scope.selectPerson = selectPerson;
    $scope.start = start;
    $scope.checkForNumberOfDays = checkForNumberOfDays;

    $scope.names = [
        "Dan",
        "Khou",
        "Alex",
        "Iz",
        "Nat",
        "Bubs"
    ]
    //create 2 lists one for boys and one for girls

    //create system for numbers of items

    //create css for pretty fonts and maybe sounds per person... isabel sailor moon, alex zelda, bubbles my lil pony, nat something
    $scope.itemListForGirls = {
        toothbrush: 0,
        toothpaste: 0,
        deodorant: 0,
        brush: 0,
        pants: 0,
        underwear: 0,
        shirts: 0,
        bra: 0,
        socks: 0,
        crate: 0,
    }

    $scope.itemListForGuys = {
        toothbrush: 0,
        toothpaste: 0,
        deodorant: 0,
        brush: 0,
        pants: 0,
        underwear: 0,
        shirts: 0,
        socks: 0,
        crate: 0,
    }

    $scope.alexStyle = {
        "color": getRandomColor()
    }
    
    //todo how many days out of town = number
    //$scope.number = 4;

    function myfunction() {
        var xyz = choicesService.getStuff();
    }

    function getItems(name) {
        changeColors();
        selectPerson();
        displayList(name);
    }

    function start() {
        selectPerson();
    }

    function checkForNumberOfDays() {
        $scope.hasNumberOfDays = true ? $scope.hasNumberOfDays == false : true;
    }

    function selectPerson() {
        $scope.isDan = false;
        $scope.isK = false;
        $scope.isAlex = false;
        $scope.isIz = false;
        $scope.isNat = false;
        $scope.isBubs = false;
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeColors() {
        $scope.alexStyle = {
            "color": getRandomColor()
        }
        $scope.izStyle = {
            "color": getRandomColor()
        }
        $scope.natStyle = {
            "color": getRandomColor()
        }
        $scope.bubsStyle = {
            "color": getRandomColor()
        }
    }

    function displayList(name) {
        switch (name) {
            case "Dan":
                $scope.mainList = $scope.itemListForGuys;
                $scope.isDan = !$scope.isDan;
                break;
            case "Khou":
                $scope.mainList = $scope.itemListForGirls;
                $scope.isK = true;
                break;
            case "Alex":
                $scope.mainList = $scope.itemListForGuys;
                $scope.isAlex = true;
                break;
            case "Iz":
                $scope.mainList = $scope.itemListForGirls;
                $scope.isIz = true;
                break;
            case "Nat":
                $scope.mainList = $scope.itemListForGirls;
                $scope.isNat = true;
                break;
            case "Bubs":
                $scope.mainList = $scope.itemListForGuys;
                $scope.isBubs = true;
                break;
        }
     
    }
}