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
        templateUrl: 'gameRecTemplate.html'
        , controller: 'monopolyController'
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
    }).when('/goodAtReading', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'goodAtReadingController'
    }).when('/likeDestroyingThings', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'likeDestroyingThingsController'
    }).when('/senseOfProgression', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'senseOfProgressionController'
    }).when('/setStartToFinish', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'setStartToFinishController'
    }).when('/teachThemAnatomy', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'teachThemAnatomyController'
    }).when('/afraidOfSnakes', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'afraidOfSnakesController'
    }).when('/internalImaginaryAnatomy', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'internalImaginaryAnatomyController'
    }).when('/fakeAsian', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'fakeAsianController'
    }).when('/somethingAsian', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'somethingAsianController'
    }).when('/pickADog', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'pickADogController'
    }).when('/guessWho', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'guessWhoController'
    }).when('/jenga', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'jengaController'
    }).when('/superfight', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'superfightController'
    }).when('/connect4', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'connect4Controller'
    }).when('/sorry', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'sorryController'
    }).when('/candyland', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'candylandController'
    }).when('/snakesAndLadders', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'snakesAndLaddersController'
    }).when('/twister', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'twisterController'
    }).when('/operator', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'operatorController'
    }).when('/gomoku', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'gomokuController'
    }).when('/chineseCheckers', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'chineseCheckersController'
    }).when('/dominos', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'dominosController'
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
    $scope.linkNo = "#/monopoly";
    $scope.linkYes = "#/educateThemAboutGrandparentsPlay";
});
mainApp.controller('educateThemAboutGrandparentsPlayController', function ($scope) {
    $scope.message = "Trying to educate them about what our grandparents played?";
    $scope.linkNo = "#/doTheyLikeMatching";
    $scope.linkYes = "#/senseOfProgression";
});
mainApp.controller('doTheyLikeMatchingController', function ($scope) {
    $scope.message = "Do they like matching?";
    $scope.linkNo = "#/goodAtReading";
    $scope.linkYes = "#/doTheyLikeAnimals";
});
mainApp.controller('doTheyLikeAnimalsController', function ($scope) {
    $scope.message = "Do they like animals?";
    $scope.linkNo = "#/guessWho";
    $scope.linkYes = "#/pickADog";
});
mainApp.controller('goodAtReadingController', function ($scope) {
    $scope.message = "Do they like reading?";
    $scope.linkNo = "#/likeDestroyingThings";
    $scope.linkYes = "#/superfight";
});
mainApp.controller('likeDestroyingThingsController', function ($scope) {
    $scope.message = "Do they like destroying things?";
    $scope.linkNo = "#/connect4";
    $scope.linkYes = "#/jenga";
});
mainApp.controller('senseOfProgressionController', function ($scope) {
    $scope.message = "Teach them sense of progression?";
    $scope.linkNo = "#/teachThemAnatomy";
    $scope.linkYes = "#/setStartToFinish";
});
mainApp.controller('setStartToFinishController', function ($scope) {
    $scope.message = "Do you want something with a set start to finish?";
    $scope.linkNo = "#/sorry";
    $scope.linkYes = "#/afraidOfSnakes";
});
mainApp.controller('afraidOfSnakesController', function ($scope) {
    $scope.message = "Are they afraid of snakes?";
    $scope.linkNo = "#/snakesAndLadders";
    $scope.linkYes = "#/candyland";
});
mainApp.controller('teachThemAnatomyController', function ($scope) {
    $scope.message = "Teach them some anatomy?";
    $scope.linkNo = "#/somethingAsian";
    $scope.linkYes = "#/internalImaginaryAnatomy";
});
mainApp.controller('internalImaginaryAnatomyController', function ($scope) {
    $scope.message = "Instill imaginary surgical lessons?";
    $scope.linkNo = "#/twister";
    $scope.linkYes = "#/operator";
});
mainApp.controller('somethingAsianController', function ($scope) {
    $scope.message = "From the far east?";
    $scope.linkNo = "#/dominos";
    $scope.linkYes = "#/fakeAsian";
});
mainApp.controller('fakeAsianController', function ($scope) {
    $scope.message = "Quick 1v1 to assert your parental dominance?";
    $scope.linkNo = "#/chineseCheckers";
    $scope.linkYes = "#/gomoku";
});
mainApp.controller('monopolyController', function ($scope) {
    $scope.message = "play: Monopoly";
    $scope.linkAmazon = "https://www.amazon.com/Winning-Moves-1126-Monopoly-Classic/dp/B002JSM3KQ/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473905372&sr=1-1&keywords=monopoly";
    $scope.linkPrice = "$18.79 on Amazon";
});
mainApp.controller('pickADogController', function ($scope) {
    $scope.message = "play: Pick A Dog";
    $scope.linkAmazon = "https://www.amazon.com/Pick-a-Dog-Card-Game/dp/B00C17LF0Y";
    $scope.linkPrice = "$13.07 on Amazon";
});
mainApp.controller('guessWhoController', function ($scope) {
    $scope.message = "play: Guess Who";
    $scope.linkAmazon = "https://www.amazon.com/Winning-Moves-1191-Guess-Board/dp/B00S732WJE/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473906410&sr=1-1&keywords=guess+who";
    $scope.linkPrice = "$12.47 on Amazon";
});
mainApp.controller('jengaController', function ($scope) {
    $scope.message = "play: Jenga";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A2120-Jenga-Classic-Game/dp/B00ABA0ZOA/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907020&sr=1-1&keywords=jenga";
    $scope.linkPrice = "$16.49 on Amazon";
});
mainApp.controller('superfightController', function ($scope) {
    $scope.message = "play: SUPERFIGHT";
    $scope.linkAmazon = "https://www.amazon.com/SUPERFIGHT-Card-Game-Core-Deck/dp/B00E5QL2AC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907058&sr=1-1&keywords=superfight";
    $scope.linkPrice = "$35.00 on Amazon";
});
mainApp.controller('connect4Controller', function ($scope) {
    $scope.message = "play: Connect 4";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A5640-Connect-4-Game/dp/B00D8STBHY/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907359&sr=1-1&keywords=connect4";
    $scope.linkPrice = "$9.99 on Amazon";
});
mainApp.controller('sorryController', function ($scope) {
    $scope.message = "play: Sorry";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-390095-Sorry/dp/B00000IWD0/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908191&sr=1-1&keywords=sorry";
    $scope.linkPrice = "$14.98 on Amazon";
});
mainApp.controller('candylandController', function ($scope) {
    $scope.message = "play: Candy Land";
    $scope.linkAmazon = "https://www.amazon.com/Candy-Land-Kingdom-Sweets-Board/dp/B00000DMF5/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908314&sr=1-1&keywords=candyland";
    $scope.linkPrice = "$7.89 on Amazon";
});
mainApp.controller('snakesAndLaddersController', function ($scope) {
    $scope.message = "play: Snakes and Ladders";
    $scope.linkAmazon = "https://www.amazon.com/Magnetic-Snakes-Ladders-Set-Medium/dp/B00J7F141I/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908362&sr=1-1&keywords=snake+and+ladder";
    $scope.linkPrice = "$11.99 on Amazon";
});
mainApp.controller('twisterController', function ($scope) {
    $scope.message = "play: Twister";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-4645-Twister-Game/dp/B008J87PVC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909170&sr=1-1&keywords=twister";
    $scope.linkPrice = "$11.25 on Amazon";
});
mainApp.controller('operatorController', function ($scope) {
    $scope.message = "play: Operation";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-B2176-Classic-Operation-Game/dp/B00SDJG6MG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909207&sr=1-1&keywords=operator";
    $scope.linkPrice = "$13.25 on Amazon";
});
mainApp.controller('gomokuController', function ($scope) {
    $scope.message = "play: Gomoku";
    $scope.linkAmazon = "https://www.amazon.com/Magnetic-Single-Convex-Plastic-Stones/dp/B00CPK4MVQ/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909733&sr=1-1&keywords=gomoku";
    $scope.linkPrice = "$15.99 on Amazon";
});
mainApp.controller('chineseCheckersController', function ($scope) {
    $scope.message = "play: Chinese Checkers";
    $scope.linkAmazon = "https://www.amazon.com/CHH-11-Standard-Chinese-Checkers/dp/B0009NQ3QS/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473909776&sr=1-2&keywords=chinese+checkers";
    $scope.linkPrice = "$12.31 on Amazon";
});
mainApp.controller('dominosController', function ($scope) {
    $scope.message = "play: Dominos";
    $scope.linkAmazon = "https://www.amazon.com/Double-Jumbo-Dominoes-Black-Ivory/dp/B009MV31QS/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473909821&sr=1-2&keywords=dominos";
    $scope.linkPrice = "$10.89 on Amazon";
});