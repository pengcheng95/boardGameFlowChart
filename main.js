var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home.html'
        , controller: 'StudentController'
    }).when('/viewStudents', {
        templateUrl: 'viewStudents.html'
        , controller: 'StudentController'
    }).when('/viewAllBoardGames', {
        templateUrl: 'viewAllBoardGames.html'
        , controller: 'StudentController'
    }).when('/areChildrenGoingToPlay', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'areChildrenGoingToPlayController'
    }).when('/monopoly', {
        templateUrl: 'monopoly.html'
        , controller: 'StudentController'
    }).when('/reallyYoung', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'reallyYoungController'
    }).when('/educateThemAboutGrandparentsPlay', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'educateThemAboutGrandparentsPlayController'
    }).when('/doTheyLikeMatching', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'doTheyLikeMatchingController'
    }).when('/doTheyLikeAnimals', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'doTheyLikeAnimalsController'
    }).otherwise({
        redirectTo: '/home'
    });
});
mainApp.controller('StudentController', function ($scope) {
    $scope.students = [
        {
            name: 'Mark Waugh'
            , city: 'New York'
        }
        , {
            name: 'Steve Jonathan'
            , city: 'London'
        }
        , {
            name: 'John Marcus'
            , city: 'Paris'
        }
	];
    $scope.message = "Click on the hyper link to view the students list.";
    $scope.boardGamesList = "asdfasdfasfd";
});
mainApp.controller('areChildrenGoingToPlayController', function ($scope) {
    $scope.message = "Are children going to play?";
    $scope.linkNo = "#/areChildrenGoingToPlay";
    $scope.linkYes = "#/reallyYoung";
});
mainApp.controller('reallyYoungController', function ($scope) {
    $scope.message = "6 years or younger?";
    $scope.linkNo = "#/reallyYoung";
    $scope.linkYes = "#/educateThemAboutGrandparentsPlay";
});
mainApp.controller('educateThemAboutGrandparentsPlayController', function ($scope) {
    $scope.message = "Trying to educate them about what our grandparents played?";
    $scope.linkNo = "#/doTheyLikeMatching";
    $scope.linkYes = "#/educateThemAboutGrandparentsPlay";
});
mainApp.controller('doTheyLikeMatchingController', function ($scope) {
    $scope.message = "Do they like matching?";
    $scope.linkNo = "#/doTheyLikeMatching";
    $scope.linkYes = "#/doTheyLikeAnimals";
});
mainApp.controller('doTheyLikeAnimalsController', function ($scope) {
    $scope.message = "Do they like animals?";
    $scope.linkNo = "#/doTheyLikeAnimals";
    $scope.linkYes = "#/doTheyLikeAnimals";
});