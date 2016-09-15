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
    }).when('/1v1', {
        templateUrl: 'flowchartTemplate.html'
        , controller: '1v1Controller'
    }).when('/highlySkilled', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'highlySkilledController'
    }).when('/youSunkMy', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'youSunkMyController'
    }).when('/differentLayout', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'differentLayoutController'
    }).when('/longLiveTheKing', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'longLiveTheKingController'
    }).when('/beardInBoard', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'beardInBoardController'
    }).when('/linearPath', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'linearPathController'
    }).when('/journeyInLife', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'journeyInLifeController'
    }).when('/haveFun', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'haveFunController'
    }).when('/buildYourOwnMap', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'buildYourOwnMapController'
    }).when('/incorporateEnglish', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'incorporateEnglishController'
    }).when('/appreciateChinese', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'appreciateChineseController'
    }).when('/spellWordsWithTiles', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'spellWordsWithTilesController'
    }).when('/banana', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'bananaController'
    }).when('/drawing', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'drawingController'
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
    }).when('/stratego', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'strategoController'
    }).when('/chess', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'chessController'
    }).when('/go', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'goController'
    }).when('/battleship', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'battleshipController'
    }).when('/checkers', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'checkersController'
    }).when('/tokaido', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'tokaidoController'
    }).when('/life', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'lifeController'
    }).when('/ticketToRide', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'ticketToRideController'
    }).when('/carcassonne', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'carcassonneController'
    }).when('/bananagrams', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'bananagramsController'
    }).when('/scrabble', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'scrabbleController'
    }).when('/pictionary', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'pictionaryController'
    }).when('/boggle', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'boggleController'
    }).when('/mahjong', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'mahjongController'
    }).when('/monopolyDeal', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'monopolyDealController'
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
    $scope.linkNo = "#/1v1";
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
    $scope.message = "Quick one v. one to assert your parental dominance?";
    $scope.linkNo = "#/chineseCheckers";
    $scope.linkYes = "#/gomoku";
});
mainApp.controller('1v1Controller', function ($scope) {
    $scope.message = "Do you want a one v. one game?";
    $scope.linkNo = "#/beardInBoard";
    $scope.linkYes = "#/highlySkilled";
});
mainApp.controller('highlySkilledController', function ($scope) {
    $scope.message = "Do you want a highly skilled game?";
    $scope.linkNo = "#/youSunkMy";
    $scope.linkYes = "#/differentLayout";
});
mainApp.controller('youSunkMyController', function ($scope) {
    $scope.message = "Do you like hearing: you sunk my battleship!?";
    $scope.linkNo = "#/checkers";
    $scope.linkYes = "#/battleship";
});
mainApp.controller('differentLayoutController', function ($scope) {
    $scope.message = "Do you want a game with different starting layouts?";
    $scope.linkNo = "#/longLiveTheKing";
    $scope.linkYes = "#/stratego";
});
mainApp.controller('longLiveTheKingController', function ($scope) {
    $scope.message = "Long live the king?";
    $scope.linkNo = "#/go";
    $scope.linkYes = "#/chess";
});
mainApp.controller('beardInBoardController', function ($scope) {
    $scope.message = "Do you want a traditional 'beard' in your board game?";
    $scope.linkNo = "#/incorporateEnglish";
    $scope.linkYes = "#/linearPath";
});
mainApp.controller('linearPathController', function ($scope) {
    $scope.message = "Do you want a game with a linear path?";
    $scope.linkNo = "#/buildYourOwnMap";
    $scope.linkYes = "#/journeyInLife";
});
mainApp.controller('journeyInLifeController', function ($scope) {
    $scope.message = "Bring you through a journey in life?";
    $scope.linkNo = "#/monopoly";
    $scope.linkYes = "#/haveFun";
});
mainApp.controller('incorporateEnglishController', function ($scope) {
    $scope.message = "Do you want to heavily incorporate the english language?";
    $scope.linkNo = "#/appreciateChinese";
    $scope.linkYes = "#/spellWordsWithTiles";
});
mainApp.controller('appreciateChineseController', function ($scope) {
    $scope.message = "Do you want your kid to appreciate oriental culture?";
    $scope.linkNo = "#/monopolyDeal";
    $scope.linkYes = "#/mahjong";
});
mainApp.controller('spellWordsWithTilesController', function ($scope) {
    $scope.message = "Do you like spelling words out with tiles?";
    $scope.linkNo = "#/drawing";
    $scope.linkYes = "#/banana";
});
mainApp.controller('bananaController', function ($scope) {
    $scope.message = "Do you want a banana theme?";
    $scope.linkNo = "#/scrabble";
    $scope.linkYes = "#/bananagrams";
});
mainApp.controller('drawingController', function ($scope) {
    $scope.message = "How about drawing them out?";
    $scope.linkNo = "#/boggle";
    $scope.linkYes = "#/pictionary";
});
mainApp.controller('haveFunController', function ($scope) {
    $scope.message = "Do you also want to have fun?";
    $scope.linkNo = "#/life";
    $scope.linkYes = "#/tokaido";
});
mainApp.controller('buildYourOwnMapController', function ($scope) {
    $scope.message = "Do you want to build your own map?";
    $scope.linkNo = "#/ticketToRide";
    $scope.linkYes = "#/carcassonne";
});
mainApp.controller('monopolyController', function ($scope) {
    $scope.message = "Monopoly";
    $scope.linkAmazon = "https://www.amazon.com/Winning-Moves-1126-Monopoly-Classic/dp/B002JSM3KQ/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473905372&sr=1-1&keywords=monopoly";
    $scope.linkPrice = "$18.79 on Amazon";
});
mainApp.controller('pickADogController', function ($scope) {
    $scope.message = "Pick A Dog";
    $scope.linkAmazon = "https://www.amazon.com/Pick-a-Dog-Card-Game/dp/B00C17LF0Y";
    $scope.linkPrice = "$13.07 on Amazon";
});
mainApp.controller('guessWhoController', function ($scope) {
    $scope.message = "Guess Who";
    $scope.linkAmazon = "https://www.amazon.com/Winning-Moves-1191-Guess-Board/dp/B00S732WJE/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473906410&sr=1-1&keywords=guess+who";
    $scope.linkPrice = "$12.47 on Amazon";
});
mainApp.controller('jengaController', function ($scope) {
    $scope.message = "Jenga";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A2120-Jenga-Classic-Game/dp/B00ABA0ZOA/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907020&sr=1-1&keywords=jenga";
    $scope.linkPrice = "$16.49 on Amazon";
});
mainApp.controller('superfightController', function ($scope) {
    $scope.message = "SUPERFIGHT";
    $scope.linkAmazon = "https://www.amazon.com/SUPERFIGHT-Card-Game-Core-Deck/dp/B00E5QL2AC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907058&sr=1-1&keywords=superfight";
    $scope.linkPrice = "$35.00 on Amazon";
});
mainApp.controller('connect4Controller', function ($scope) {
    $scope.message = "Connect 4";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A5640-Connect-4-Game/dp/B00D8STBHY/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907359&sr=1-1&keywords=connect4";
    $scope.linkPrice = "$9.99 on Amazon";
});
mainApp.controller('sorryController', function ($scope) {
    $scope.message = "Sorry";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-390095-Sorry/dp/B00000IWD0/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908191&sr=1-1&keywords=sorry";
    $scope.linkPrice = "$14.98 on Amazon";
});
mainApp.controller('candylandController', function ($scope) {
    $scope.message = "Candy Land";
    $scope.linkAmazon = "https://www.amazon.com/Candy-Land-Kingdom-Sweets-Board/dp/B00000DMF5/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908314&sr=1-1&keywords=candyland";
    $scope.linkPrice = "$7.89 on Amazon";
});
mainApp.controller('snakesAndLaddersController', function ($scope) {
    $scope.message = "Snakes and Ladders";
    $scope.linkAmazon = "https://www.amazon.com/Magnetic-Snakes-Ladders-Set-Medium/dp/B00J7F141I/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908362&sr=1-1&keywords=snake+and+ladder";
    $scope.linkPrice = "$11.99 on Amazon";
});
mainApp.controller('twisterController', function ($scope) {
    $scope.message = "Twister";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-4645-Twister-Game/dp/B008J87PVC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909170&sr=1-1&keywords=twister";
    $scope.linkPrice = "$11.25 on Amazon";
});
mainApp.controller('operatorController', function ($scope) {
    $scope.message = "Operation";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-B2176-Classic-Operation-Game/dp/B00SDJG6MG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909207&sr=1-1&keywords=operator";
    $scope.linkPrice = "$13.25 on Amazon";
});
mainApp.controller('gomokuController', function ($scope) {
    $scope.message = "Gomoku";
    $scope.linkAmazon = "https://www.amazon.com/Magnetic-Single-Convex-Plastic-Stones/dp/B00CPK4MVQ/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909733&sr=1-1&keywords=gomoku";
    $scope.linkPrice = "$15.99 on Amazon";
});
mainApp.controller('chineseCheckersController', function ($scope) {
    $scope.message = "Chinese Checkers";
    $scope.linkAmazon = "https://www.amazon.com/CHH-11-Standard-Chinese-Checkers/dp/B0009NQ3QS/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473909776&sr=1-2&keywords=chinese+checkers";
    $scope.linkPrice = "$12.31 on Amazon";
});
mainApp.controller('dominosController', function ($scope) {
    $scope.message = "Dominos";
    $scope.linkAmazon = "https://www.amazon.com/Double-Jumbo-Dominoes-Black-Ivory/dp/B009MV31QS/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473909821&sr=1-2&keywords=dominos";
    $scope.linkPrice = "$10.89 on Amazon";
});
mainApp.controller('strategoController', function ($scope) {
    $scope.message = "Stratego";
    $scope.linkAmazon = "https://www.amazon.com/Stratego-7470-Sci-Fi-Board-Game/dp/B0045OV9IO/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473911317&sr=1-1&keywords=stratego";
    $scope.linkPrice = "$16.99 on Amazon";
});
mainApp.controller('chessController', function ($scope) {
    $scope.message = "play: Chess";
    $scope.linkAmazon = "https://www.amazon.com/CHH-15-Inch-Standard-Wooden-Chess/dp/B0007V0XQI/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473911352&sr=1-2&keywords=chess";
    $scope.linkPrice = "$9.81 on Amazon";
});
mainApp.controller('goController', function ($scope) {
    $scope.message = "Go";
    $scope.linkAmazon = "https://www.amazon.com/WE-Games-Wood-Pull-Drawers/dp/B0008EJXEW/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473911394&sr=1-1&keywords=go";
    $scope.linkPrice = "$34.99 on Amazon";
});
mainApp.controller('battleshipController', function ($scope) {
    $scope.message = "Battleship";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A3264-Battleship-Game/dp/B00C0ULS3G/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473911444&sr=1-1&keywords=battleship";
    $scope.linkPrice = "$11.39 on Amazon";
});
mainApp.controller('checkersController', function ($scope) {
    $scope.message = "Checkers";
    $scope.linkAmazon = "https://www.amazon.com/Pressman-Checkers-Board-Games-Toy/dp/B0009ZHCG6/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473911480&sr=1-2&keywords=checkers";
    $scope.linkPrice = "$8.97 on Amazon";
});
mainApp.controller('tokaidoController', function ($scope) {
    $scope.message = "Tokaido";
    $scope.linkAmazon = "https://www.amazon.com/Passport-Game-Studios-FNF001-Tokaido/dp/B00ADNLT8G/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912729&sr=1-1&keywords=tokaido";
    $scope.linkPrice = "$27.44 on Amazon";
});
mainApp.controller('lifeController', function ($scope) {
    $scope.message = "Life";
    $scope.linkAmazon = "https://www.amazon.com/The-Game-of-Life/dp/B00CM2IFT2/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912881&sr=1-1&keywords=life";
    $scope.linkPrice = "$14.77 on Amazon";
});
mainApp.controller('ticketToRideController', function ($scope) {
    $scope.message = "Ticket to Ride";
    $scope.linkAmazon = "https://www.amazon.com/Days-of-Wonder-DOW-7201/dp/0975277324/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912921&sr=1-1&keywords=ticket+to+ride";
    $scope.linkPrice = "$37.99 on Amazon";
});
mainApp.controller('carcassonneController', function ($scope) {
    $scope.message = "Carcassonne";
    $scope.linkAmazon = "https://www.amazon.com/Carcassonne-New-Edition-81006ZMG-Board/dp/B00NX627HW/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912963&sr=1-1&keywords=carcassonne";
    $scope.linkPrice = "$22.39 on Amazon";
});
mainApp.controller('bananagramsController', function ($scope) {
    $scope.message = "Bananagrams";
    $scope.linkAmazon = "https://www.amazon.com/Bananagrams-BAN001/dp/1932188126/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473913838&sr=1-1&keywords=bananagrams";
    $scope.linkPrice = "$14.85 on Amazon";
});
mainApp.controller('scrabbleController', function ($scope) {
    $scope.message = "Scrabble";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A8166-Scrabble-Crossword-Game/dp/B00IL5XY9K/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914042&sr=1-1&keywords=scrabble";
    $scope.linkPrice = "$13.48 on Amazon";
});
mainApp.controller('pictionaryController', function ($scope) {
    $scope.message = "Pictionary";
    $scope.linkAmazon = "https://www.amazon.com/Mattel-DKD47-Pictionary-Game/dp/B0145GMV7Y/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914078&sr=1-1&keywords=pictionary";
    $scope.linkPrice = "$15.99 on Amazon";
});
mainApp.controller('boggleController', function ($scope) {
    $scope.message = "Boggle";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A8168-Scrabble-Boggle-Game/dp/B00IFWSNFY/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914118&sr=1-1&keywords=boggle";
    $scope.linkPrice = "$9.48 on Amazon";
});
mainApp.controller('mahjongController', function ($scope) {
    $scope.message = "Mahjong";
    $scope.linkAmazon = "https://www.amazon.com/Professional-Chinese-Mahjong-Mah-Jongg-Game/dp/B006R0DJOG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914156&sr=1-1&keywords=mahjong";
    $scope.linkPrice = "$45.99 on Amazon";
});
mainApp.controller('monopolyDealController', function ($scope) {
    $scope.message = "Monopoly Deal";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-B0965-Monopoly-Deal-Card/dp/B00NQQTZCO/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914213&sr=1-1&keywords=monopoly+deal";
    $scope.linkPrice = "$6.96 on Amazon";
});