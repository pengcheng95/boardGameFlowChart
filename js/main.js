var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home.html'
        , controller: 'StudentController'
    }).when('/viewStudents', {
        templateUrl: 'viewStudents.html'
        , controller: 'StudentController'
    }).when('/viewReview', {
        templateUrl: 'review/index.html'
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
    }).when('/traditionalBoardGame', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'traditionalBoardGameController'
    }).when('/settlingPLusExpanding', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'settlingPLusExpandingController'
    }).when('/peacefulColinization', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'peacefulColinizationController'
    }).when('/skeletalRights', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'skeletalRightController'
    }).when('/catan', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'catanController'
    }).when('/smallWorld', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'smallWorldController'
    }).when('/risk', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'riskController'
    }).when('/horrorsOfTheWorld', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'horrorsOfTheWorldController'
    }).when('/takenoko', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'takenokoController'
    }).when('/zombiesScary', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'zombiesScaryController'
    }).when('/deadOfWinter', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'deadOfWinterController'
    }).when('/whatAboutPandemic', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'whatAboutPandemicController'
    }).when('/pandemic', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'pandemicController'
    }).when('/betraylAtHouse', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'betraylAtHouseController'
    }).when('/cardBasedGame', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'cardBasedGameController'
    }).when('/teamGame', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'teamGameController'
    }).when('/demonstrateSuperiorSkills', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'demonstrateSuperiorSkillsController'
    }).when('/cranium', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'craniumController'
    }).when('/taboo', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'tabooController'
    }).when('/intellectualTriviaGame', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'intellectualTriviaGameController'
    }).when('/trivialPursuit', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'trivialPursuitController'
    }).when('/stackCatsGame', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'stackCatsController'
    }).when('/catTower', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'catTowerController'
    }).when('/scattergories', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'scattergoriesController'
    }).when('/casualPartyGame', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'casualPartyGameController'
    }).when('/stabFriendsInTheBack', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'stabFriendsInTheBackController'
    }).when('/shootThemInTheBack', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'shootThemInTheBackController'
    }).when('/bang', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'bangController'
    }).when('/citadels', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'citadelsController'
    }).when('/completingSentencesForFun', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'completingSentencesForFunController'
    }).when('/politicallyCorrectImportant', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'politicallyCorrectImportantController'
    }).when('/applesToApples', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'applesToApplesController'
    }).when('/cardsAgainstHumanity', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'cardsAgainstHumanityController'
    }).when('/lookingForSomethingDifferent', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'lookingForSomethingDifferentController'
    }).when('/somethingDifferent', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'somethingDifferentController'
    }).when('/billionaireBanshee', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'billionaireBansheeController'
    }).when('/superStrategyIntensive', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'superStrategyIntensiveController'
    }).when('/roleplayAsDifferentRaces', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'roleplayAsDifferentRacesController'
    }).when('/afraidOfLargeBodiesOfWater', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'afraidOfLargeBodiesOfWaterController'
    }).when('/enjoyDrawingCards', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'enjoyDrawingCardsController'
    }).when('/imperialSettlers', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'imperialSettlersController'
    }).when('/harbour', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'harbourController'
    }).when('/dominion', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'dominionController'
    }).when('/7WonderDuel', {
        templateUrl: 'gameRecTemplate.html'
        , controller: '7WonderDuelController'
    }).when('/finishIn10Min', {
        templateUrl: 'flowchartTemplate.html'
        , controller: 'finishIn10MinController'
    }).when('/coup', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'coupController'
    }).when('/munchkins', {
        templateUrl: 'gameRecTemplate.html'
        , controller: 'munchkinsController'
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
    $scope.linkNo = "#/traditionalBoardGame";
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
    $scope.message = "Do you want a one vs one game?";
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
    $scope.description = "Compete with your friends as you buy and develop property. Win by bankrupting all of them.";
    $scope.linkPrice = "$18.79 on Amazon";
});
mainApp.controller('pickADogController', function ($scope) {
    $scope.message = "Pick A Dog";
    $scope.linkAmazon = "https://www.amazon.com/Pick-a-Dog-Card-Game/dp/B00C17LF0Y";
    $scope.description = "A matching game of attributes between dogs, prepare for your memeory and reflexes to be tested.";
    $scope.linkPrice = "$13.07 on Amazon";
});
mainApp.controller('guessWhoController', function ($scope) {
    $scope.message = "Guess Who";
    $scope.linkAmazon = "https://www.amazon.com/Winning-Moves-1191-Guess-Board/dp/B00S732WJE/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473906410&sr=1-1&keywords=guess+who";
    $scope.description = "Deduce which face your opponent chose through a variety of physical clues to win!";
    $scope.linkPrice = "$12.47 on Amazon";
});
mainApp.controller('jengaController', function ($scope) {
    $scope.message = "Jenga";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A2120-Jenga-Classic-Game/dp/B00ABA0ZOA/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907020&sr=1-1&keywords=jenga";
    $scope.description = "A tower building game consisting of 54 rectangular blocks. Remove one block at a time and place on the top of the tower. Beware of knocking the tower over however!";
    $scope.linkPrice = "$16.49 on Amazon";
});
mainApp.controller('superfightController', function ($scope) {
    $scope.message = "SUPERFIGHT";
    $scope.linkAmazon = "https://www.amazon.com/SUPERFIGHT-Card-Game-Core-Deck/dp/B00E5QL2AC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907058&sr=1-1&keywords=superfight";
    $scope.description = "Combine character cards with description cards to build your own champion in Super Fight and then argue it out with your friends to see who would win."
    $scope.linkPrice = "$35.00 on Amazon";
});
mainApp.controller('connect4Controller', function ($scope) {
    $scope.message = "Connect 4";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A5640-Connect-4-Game/dp/B00D8STBHY/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473907359&sr=1-1&keywords=connect4";
    $scope.description = "Play against a friend AND GRAVITY to be the first player to make a horizontal, vertical, or diagonal line of four tiles.";
    $scope.linkPrice = "$9.99 on Amazon";
});
mainApp.controller('sorryController', function ($scope) {
    $scope.message = "Sorry";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-390095-Sorry/dp/B00000IWD0/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908191&sr=1-1&keywords=sorry";
    $scope.description = "Race your peices home before your opponents in this whacky game. Watch out, for your fortunes can change quickly from the play-action deck and don't forget to say SORRY!"
    $scope.linkPrice = "$14.98 on Amazon";
});
mainApp.controller('candylandController', function ($scope) {
    $scope.message = "Candy Land";
    $scope.linkAmazon = "https://www.amazon.com/Candy-Land-Kingdom-Sweets-Board/dp/B00000DMF5/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908314&sr=1-1&keywords=candyland";
    $scope.description = "Great for teaching colors, travel through a world of lollipop woods and gumdrop trees to find your way home.";
    $scope.linkPrice = "$7.89 on Amazon";
});
mainApp.controller('snakesAndLaddersController', function ($scope) {
    $scope.message = "Snakes and Ladders";
    $scope.linkAmazon = "https://www.amazon.com/Magnetic-Snakes-Ladders-Set-Medium/dp/B00J7F141I/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473908362&sr=1-1&keywords=snake+and+ladder";
    $scope.description = "Release yourself to the fates and see if they bless you on your scrammble to the top.";
    $scope.linkPrice = "$11.99 on Amazon";
});
mainApp.controller('twisterController', function ($scope) {
    $scope.message = "Twister";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-4645-Twister-Game/dp/B008J87PVC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909170&sr=1-1&keywords=twister";
    $scope.description = "Twist and contort your body around your friends as you struggle to place your hands and feet on the required colors on the game mat without falling over."
    $scope.linkPrice = "$11.25 on Amazon";
});
mainApp.controller('operatorController', function ($scope) {
    $scope.message = "Operation";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-B2176-Classic-Operation-Game/dp/B00SDJG6MG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909207&sr=1-1&keywords=operator";
    $scope.description = "Test your nerves against your friends by removing wacky cartoon organ pieces from an electrified game board shaped like a patient.";
    $scope.linkPrice = "$13.25 on Amazon";
});
mainApp.controller('gomokuController', function ($scope) {
    $scope.message = "Gomoku";
    $scope.linkAmazon = "https://www.amazon.com/Magnetic-Single-Convex-Plastic-Stones/dp/B00CPK4MVQ/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473909733&sr=1-1&keywords=gomoku";
    $scope.description = "Play against a friend and see who can be the first to get 5 in a row. A big boys tic tac toe.";
    $scope.linkPrice = "$15.99 on Amazon";
});
mainApp.controller('chineseCheckersController', function ($scope) {
    $scope.message = "Chinese Checkers";
    $scope.linkAmazon = "https://www.amazon.com/CHH-11-Standard-Chinese-Checkers/dp/B0009NQ3QS/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473909776&sr=1-2&keywords=chinese+checkers";
    $scope.description = "Be the first to jump all your peices across the board. Be sure to utilize your opponents peices but remember, your opponent can use yours as well.";
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
    $scope.description = "With your army in hand, protect your flag and try to capture your opponent's flag. Advance your soldiers into the unkown and victory!"
    $scope.linkPrice = "$16.99 on Amazon";
});
mainApp.controller('chessController', function ($scope) {
    $scope.message = "Chess";
    $scope.linkAmazon = "https://www.amazon.com/CHH-15-Inch-Standard-Wooden-Chess/dp/B0007V0XQI/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473911352&sr=1-2&keywords=chess";
    $scope.description = "A classic game between two players, protect your king and checkmate your opponent. With a variety of differnet pieces and movements, this game is a truly simple and deep.";
    $scope.linkPrice = "$9.81 on Amazon";
});
mainApp.controller('goController', function ($scope) {
    $scope.message = "Go";
    $scope.linkAmazon = "https://www.amazon.com/WE-Games-Wood-Pull-Drawers/dp/B0008EJXEW/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473911394&sr=1-1&keywords=go";
    $scope.description = "An extremely simple yet complex game, take turns with your opponent to claim territory by placing stones on a 19x19 board. Wall off your own territory or attack by suffocating your opponents peices, this elegant game will require your utmost concentration.";
    $scope.linkPrice = "$43.99 on Amazon";
});
mainApp.controller('battleshipController', function ($scope) {
    $scope.message = "Battleship";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A3264-Battleship-Game/dp/B00C0ULS3G/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473911444&sr=1-1&keywords=battleship";
    $scope.description = "Mobilize your fleet! Take turns shooting at each others ships on a grid. Make sure to sink their battleship before they sink yours.";
    $scope.linkPrice = "$11.39 on Amazon";
});
mainApp.controller('checkersController', function ($scope) {
    $scope.message = "Checkers";
    $scope.linkAmazon = "https://www.amazon.com/Pressman-Checkers-Board-Games-Toy/dp/B0009ZHCG6/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1473911480&sr=1-2&keywords=checkers";
    $scope.description = "A classic abstract game where you win by removing all of your opponents pieces. Jump over and capture them your enemies' before all your pieces are captured.";
    $scope.linkPrice = "$8.97 on Amazon";
});
mainApp.controller('tokaidoController', function ($scope) {
    $scope.message = "Tokaido";
    $scope.linkAmazon = "https://www.amazon.com/Passport-Game-Studios-FNF001-Tokaido/dp/B00ADNLT8G/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912729&sr=1-1&keywords=tokaido";
    $scope.description = `Travel along Japan's beautiful and unique "East Sea Road". On the way you will visit temples, try exotic food, meet new people and collect uncommon items.`;
    $scope.linkPrice = "$27.44 on Amazon";
});
mainApp.controller('lifeController', function ($scope) {
    $scope.message = "Life";
    $scope.linkAmazon = "https://www.amazon.com/The-Game-of-Life/dp/B00CM2IFT2/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912881&sr=1-1&keywords=life";
    $scope.description = "As one of America's first popular board games, this game simulates a journey through life where you make money, have kids, and buy property along the way.";
    $scope.linkPrice = "$14.77 on Amazon";
});
mainApp.controller('ticketToRideController', function ($scope) {
    $scope.message = "Ticket to Ride";
    $scope.linkAmazon = "https://www.amazon.com/Days-of-Wonder-DOW-7201/dp/0975277324/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912921&sr=1-1&keywords=ticket+to+ride";
    $scope.description = "Fulfill your dreams of becoming the largest railroad tycoon in the United States with Ticket to Ride. Collect points by claiming the longest routes and fullfilling goal cards. Build away!";
    $scope.linkPrice = "$37.99 on Amazon";
});
mainApp.controller('carcassonneController', function ($scope) {
    $scope.message = "Carcassonne";
    $scope.linkAmazon = "https://www.amazon.com/Carcassonne-New-Edition-81006ZMG-Board/dp/B00NX627HW/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473912963&sr=1-1&keywords=carcassonne";
    $scope.description = "Expand the French countryside by placing landscape tiles with features such as roads, meadows, cities and churches. Claim one of these features for points by placing your meeples on them.";
    $scope.linkPrice = "$19.09 on Amazon";
});
mainApp.controller('bananagramsController', function ($scope) {
    $scope.message = "Bananagrams";
    $scope.linkAmazon = "https://www.amazon.com/Bananagrams-BAN001/dp/1932188126/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473913838&sr=1-1&keywords=bananagrams";
    $scope.description = "A Scrabble like game, create your own crosswords and the first player to use up all their tiles win!";
    $scope.linkPrice = "$14.85 on Amazon";
});
mainApp.controller('scrabbleController', function ($scope) {
    $scope.message = "Scrabble";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A8166-Scrabble-Crossword-Game/dp/B00IL5XY9K/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914042&sr=1-1&keywords=scrabble";
    $scope.description = "Create the words with the most points depending on the letters used and tile placement. Game ends when all the tiles are used up.";
    $scope.linkPrice = "$16.99 on Amazon";
});
mainApp.controller('pictionaryController', function ($scope) {
    $scope.message = "Pictionary";
    $scope.linkAmazon = "https://www.amazon.com/Mattel-DKD47-Pictionary-Game/dp/B0145GMV7Y/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914078&sr=1-1&keywords=pictionary";
    $scope.description = "A team game, one player becomes the clue giver who draws a word that the rest of the team have to guess. Teams compete to see who can guess the most pictures correctly.";
    $scope.linkPrice = "$15.99 on Amazon";
});
mainApp.controller('boggleController', function ($scope) {
    $scope.message = "Boggle";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A8168-Scrabble-Boggle-Game/dp/B00IFWSNFY/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914118&sr=1-1&keywords=boggle";
    $scope.description = "Compete against your friends and time to find the most words on 16 letter grid to win!";
    $scope.linkPrice = "$9.48 on Amazon";
});
mainApp.controller('mahjongController', function ($scope) {
    $scope.message = "Mahjong";
    $scope.linkAmazon = "https://www.amazon.com/Professional-Chinese-Mahjong-Mah-Jongg-Game/dp/B006R0DJOG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914156&sr=1-1&keywords=mahjong";
    $scope.description = "A traditional chinese game originally meant for gambling, match tiles and patterns to create a winning hand. However, beware what tiles your opponents need to win.";
    $scope.linkPrice = "$45.99 on Amazon";
});
mainApp.controller('monopolyDealController', function ($scope) {
    $scope.message = "Monopoly Deal";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-B0965-Monopoly-Deal-Card/dp/B00NQQTZCO/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1473914213&sr=1-1&keywords=monopoly+deal";
    $scope.description = "Using the same theme, this card game form of Monopoly has players racing to be the first player to have three full property sets while taxing their friends and stealing their cards."
    $scope.linkPrice = "$6.96 on Amazon";
});
mainApp.controller('traditionalBoardGameController', function ($scope) {
    $scope.message = "Do you want a more traditional board game?";
    $scope.linkNo = "#/cardBasedGame";
    $scope.linkYes = "#/settlingPLusExpanding";
});
mainApp.controller('settlingPLusExpandingController', function ($scope) {
    $scope.message = "Do you enjoy games focuses on settling and expanding?";
    $scope.linkNo = "#/horrorsOfTheWorld";
    $scope.linkYes = "#/peacefulColinization";
});
mainApp.controller('peacefulColinizationController', function ($scope) {
    $scope.message = "Do you believe in peaceful colinzation?";
    $scope.linkNo = "#/skeletalRights";
    $scope.linkYes = "#/catan";
});
mainApp.controller('skeletalRightController', function ($scope) {
    $scope.message = "Do you believe in skeletal rights to own land?";
    $scope.linkNo = "#/risk";
    $scope.linkYes = "#/smallWorld";
});
mainApp.controller('catanController', function ($scope) {
    $scope.message = "Catan";
    $scope.linkAmazon = "https://www.amazon.com/Catan-Studios-MFG-3071-Edition/dp/B00U26V4VQ/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495775079&sr=1-1&keywords=catan";
    $scope.description = "Settle in the new land of Catan. Build settlement, cities, roads and raise armies to becomes its largest faction. The goal is to have the most points. How will you get yours?";
    $scope.linkPrice = "$34.35 on Amazon";
});
mainApp.controller('smallWorldController', function ($scope) {
    $scope.message = "Small World";
    $scope.linkAmazon = "https://www.amazon.com/Days-of-Wonder-DOW-7901/dp/B0024H7OF6/ref=sr_1_1?ie=UTF8&qid=1495775317&sr=8-1&keywords=small+world";
    $scope.description = "It truly is a small world. Races come and go fighting for survival. Can you lead yours to victory?";
    $scope.linkPrice = "$30.97 on Amazon";
});
mainApp.controller('riskController', function ($scope) {
    $scope.message = "Risk";
    $scope.description = "Armies are the backbone of any empire. How will you risk yours for world domination?";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-B7404-Risk-Game/dp/B01ALHAIWG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495775363&sr=1-1&keywords=risk";
    $scope.linkPrice = "$19.29 on Amazon";
});
mainApp.controller('horrorsOfTheWorldController', function ($scope) {
    $scope.message = "How about a game dealing with the horrors of the world?";
    $scope.linkNo = "#/takenoko";
    $scope.linkYes = "#/zombiesScary";
});
mainApp.controller('takenokoController', function ($scope) {
    $scope.message = "Takenoko";
    $scope.linkAmazon = "https://www.amazon.com/Asmodee-TAK01USASM-Takenoko-Board-Game/dp/B0049H9NVW/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495775700&sr=1-1&keywords=takenoko";
    $scope.description = "Taking care of a panda is hard work. Help the imperial gardener with the bamboo garden. The one who manages their plots of land the best and satisfies the panda the most wins.";
    $scope.linkPrice = "$47.41 on Amazon";
});
mainApp.controller('zombiesScaryController', function ($scope) {
    $scope.message = "Zombies scary enough?";
    $scope.linkNo = "#/whatAboutPandemic";
    $scope.linkYes = "#/deadOfWinter";
});
mainApp.controller('deadOfWinterController', function ($scope) {
    $scope.message = "Dead of Winter";
    $scope.linkAmazon = "https://www.amazon.com/Dead-of-Winter-Crossroads-Game/dp/B00HFKITJC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495775891&sr=1-1&keywords=dead+of+winter";
    $scope.description = "The zombie apocalypse has arrived. The colony is in danger. Will you and your friends be able to save the last vestiges of humanity or will we all fade away into the long night?";
    $scope.linkPrice = "$56.98 on Amazon";
});
mainApp.controller('whatAboutPandemicController', function ($scope) {
    $scope.message = "What about some sort of ... pandemic?";
    $scope.linkNo = "#/betraylAtHouse";
    $scope.linkYes = "#/pandemic";
});
mainApp.controller('pandemicController', function ($scope) {
    $scope.message = "Pandemic";
    $scope.linkAmazon = "https://www.amazon.com/Z-Man-Games-ZMG-71100-Pandemic/dp/B00A2HD40E/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495776579&sr=1-1&keywords=pandemic";
    $scope.description = "Outbreaks are occuring throughout the world. In a race against time, you and your friends must quarantine the pandemic and cure the diseases before it becomes uncontrollable.";
    $scope.linkPrice = "$24.99 on Amazon";
});
mainApp.controller('betraylAtHouseController', function ($scope) {
    $scope.message = "Betrayl at House on the Hill";
    $scope.linkAmazon = "https://www.amazon.com/Betrayal-At-House-Hill-2nd/dp/B003HC9734/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495776622&sr=1-1&keywords=betrayal+at+house";
    $scope.description = "Taking on the role of one of six explorers, players take turns exploring a haunted mansion and experiencing spooky scenarios, until ultimately, it is revealed that their was a betrayer among the team the whole time, meaning it is going to take teamwork to make it out of the house alive!";
    $scope.linkPrice = "$30.49 on Amazon";
});
mainApp.controller('cardBasedGameController', function ($scope) {
    $scope.message = "Do you want a card-based game?";
    $scope.linkNo = "#/teamGame";
    $scope.linkYes = "#/casualPartyGame";
});
mainApp.controller('teamGameController', function ($scope) {
    $scope.message = "Do you want to play a team game?";
    $scope.linkNo = "#/intellectualTriviaGame";
    $scope.linkYes = "#/demonstrateSuperiorSkills";
});
mainApp.controller('demonstrateSuperiorSkillsController', function ($scope) {
    $scope.message = "Do you want a variety of ways to demonstrate your superior skills?";
    $scope.linkNo = "#/taboo";
    $scope.linkYes = "#/cranium";
});
mainApp.controller('craniumController', function ($scope) {
    $scope.message = "Cranium";
    $scope.linkAmazon = "https://www.amazon.com/Cranium-3-in-1-Game-Board/dp/B010LAUDIM/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495777482&sr=1-1&keywords=cranium";
    $scope.description = "Cranium is a team game where players partake in a variety of games ranging from charades to clay molding in order to be the first group to reach the end of the board!";
    $scope.linkPrice = "$39.99 on Amazon";
});
mainApp.controller('tabooController', function ($scope) {
    $scope.message = "Taboo";
    $scope.linkAmazon = "https://www.amazon.com/Hasbro-A4626-Taboo-Board-Game/dp/B00D4NJSBW/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495777552&sr=1-1&keywords=taboo";
    $scope.description = "In this team game, players are trying to get their teammates to guess the word that is listed on each card without using certain key words that are taboo to say!";
    $scope.linkPrice = "$11.49 on Amazon";
});
mainApp.controller('intellectualTriviaGameController', function ($scope) {
    $scope.message = "Do you want an intellectual trivia game?";
    $scope.linkNo = "#/stackCatsGame";
    $scope.linkYes = "#/trivialPursuit";
});
mainApp.controller('trivialPursuitController', function ($scope) {
    $scope.message = "Trivial Pursuit";
    $scope.linkAmazon = "https://www.amazon.com/Trivial-Pursuit-Family-Edition-Game/dp/B00NQQTXNK/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495777754&sr=1-1&keywords=trivial+pursuit";
    $scope.description = "In Trivial Pursuit, players get to show off how much they know by answering trivia questions from a variety of subjects!";
    $scope.linkPrice = "$14.91 on Amazon";
});
mainApp.controller('stackCatsController', function ($scope) {
    $scope.message = "How about a game where you stack cats?";
    $scope.linkNo = "#/scattergories";
    $scope.linkYes = "#/catTower";
});
mainApp.controller('catTowerController', function ($scope) {
    $scope.message = "Cat Tower";
    $scope.linkAmazon = "https://www.amazon.com/IDW-Games-NOV152838-Tower-Building/dp/B017OW3DQY/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495778204&sr=1-1&keywords=cat+tower";
    $scope.description = "As the name implies, players simply stack cardboard cats to make a Cat Tower of sorts.";
    $scope.linkPrice = "$12.48 on Amazon";
});
mainApp.controller('scattergoriesController', function ($scope) {
    $scope.message = "Scattergories";
    $scope.linkAmazon = "https://www.amazon.com/Scattergories-w-free-storage-bag/dp/B00K32QIDI/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495778258&sr=1-1-spons&keywords=scattergories&psc=1";
    $scope.description = "In Scattergories, players try to accumulate the most points by coming up with unique answers for specific cattergories. The twist is though that every round, the answers must start with a specific letter.";
    $scope.linkPrice = "$12.99 on Amazon";
});
mainApp.controller('casualPartyGameController', function ($scope) {
    $scope.message = "Do you want to play a more casual party game?";
    $scope.linkNo = "#/superStrategyIntensive";
    $scope.linkYes = "#/stabFriendsInTheBack";
});
mainApp.controller('stabFriendsInTheBackController', function ($scope) {
    $scope.message = "Are you okay with stabbing your friends in the back?";
    $scope.linkNo = "#/completingSentencesForFun";
    $scope.linkYes = "#/shootThemInTheBack";
});
mainApp.controller('shootThemInTheBackController', function ($scope) {
    $scope.message = "Would you rather shoot them in the back though?";
    $scope.linkNo = "#/citadels";
    $scope.linkYes = "#/bang";
});
mainApp.controller('bangController', function ($scope) {
    $scope.message = "Bang";
    $scope.linkAmazon = "https://www.amazon.com/Da-Vinci-DVC-9100-Edition/dp/B001RU7UNW/ref=sr_1_1?ie=UTF8&qid=1495823288&sr=8-1&keywords=bang";
    $scope.linkPrice = "$12.64 on Amazon";
    $scope.description = "In this wild west themed party game, players are given roles where they could find themselves on the side of the law, the outlaws, or even their own team. Either way though, players are going to have to Bang! it out to take control.";
});
mainApp.controller('citadelsController', function ($scope) {
    $scope.message = "Citadels";
    $scope.linkAmazon = "https://www.amazon.com/Fantasy-Flight-Games-MA04-Citadels/dp/158994030X/ref=sr_1_2?ie=UTF8&qid=1495823333&sr=8-2&keywords=citadels";
    $scope.linkPrice = "$39.95 on Amazon";
    $scope.description = "Citadels is a party game where players take turns playing as different characters, each with their own unique, special abilities, in order to build the most properties and score the most points!";
});
mainApp.controller('completingSentencesForFunController', function ($scope) {
    $scope.message = "Are you into completing sentences for fun?";
    $scope.linkNo = "#/lookingForSomethingDifferent";
    $scope.linkYes = "#/politicallyCorrectImportant";
});
mainApp.controller('politicallyCorrectImportantController', function ($scope) {
    $scope.message = "Is being politically correct important?";
    $scope.linkNo = "#/cardsAgainstHumanity";
    $scope.linkYes = "#/applesToApples";
});
mainApp.controller('applesToApplesController', function ($scope) {
    $scope.message = "Apples to Apples";
    $scope.linkAmazon = "https://www.amazon.com/Apples-PARTY-BOX-CARDS-Mattel/dp/B018OE6UYI/ref=sr_1_4?ie=UTF8&qid=1495823614&sr=8-4&keywords=apples+to+apples";
    $scope.linkPrice = "$28.85 on Amazon";
    $scope.description = "In this PG-version of Cards Against Humanity, players take turns being the judge who flips over a subject card and then ultimately awarding a point to the player who turns in the best response cards, whether that means the funniest, the best fitting, or the wackiest.";
});
mainApp.controller('cardsAgainstHumanityController', function ($scope) {
    $scope.message = "Cards Against Humanity";
    $scope.linkAmazon = "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=cards+against+humanity";
    $scope.linkPrice = "$22.19 on Amazon";
    $scope.description = "In this very not politically correct game, players flips over a subject card and choose a response card from their hand in order to make the most grotesque and offensive pairings possible!";
});
mainApp.controller('lookingForSomethingDifferentController', function ($scope) {
    $scope.message = "Are you looking for something different from games where you flip cards and people laugh?";
    $scope.linkNo = "#/billionaireBanshee";
    $scope.linkYes = "#/somethingDifferent";
});
mainApp.controller('somethingDifferentController', function ($scope) {
    $scope.message = "Something Different";
    $scope.linkAmazon = "https://www.amazon.com/NA-Something-Different/dp/B00FF9IS4Q/ref=sr_1_2?ie=UTF8&qid=1495823951&sr=8-2&keywords=something+different+game";
    $scope.linkPrice = "$10.00 on Amazon";
    $scope.description = "Something DIfferent is a card game where the main objective is to get rid of all the cards in one's hand while completing goofy tasks along the way, whether that means speaking in an accent, answering trivia about each other, or seeing who can hold their hand up the longest.";
});
mainApp.controller('billionaireBansheeController', function ($scope) {
    $scope.message = "Billionaire Banshee";
    $scope.linkAmazon = "https://www.amazon.com/Breaking-Games-BGZ1549-Billionaire-Banshee/dp/B00U2VTH3I/ref=sr_1_1?ie=UTF8&qid=1495823994&sr=8-1&keywords=billionaire+banshee";
    $scope.linkPrice = "$25.00 on Amazon";
    $scope.description = "In Billionaire Banshee, players roleplay as a single bachelor that runs into individuals with interesting perks and really, really odd quirks. At the same time, the other players just guess if the couple would be a match made in heaven or they would simply pass each other by.";
});
mainApp.controller('superStrategyIntensiveController', function ($scope) {
    $scope.message = "Do you want a super strategy intensive game then?";
    $scope.linkNo = "#/finishIn10Min";
    $scope.linkYes = "#/roleplayAsDifferentRaces";
});
mainApp.controller('roleplayAsDifferentRacesController', function ($scope) {
    $scope.message = "Are you interested in roleplaying as different races?";
    $scope.linkNo = "#/enjoyDrawingCards";
    $scope.linkYes = "#/afraidOfLargeBodiesOfWater";
});
mainApp.controller('afraidOfLargeBodiesOfWaterController', function ($scope) {
    $scope.message = "Are you afraid of large bodies of water?";
    $scope.linkNo = "#/harbour";
    $scope.linkYes = "#/imperialSettlers";
});
mainApp.controller('enjoyDrawingCardsController', function ($scope) {
    $scope.message = "Do you enjoy constantly drawing cards?";
    $scope.linkNo = "#/7WonderDuel";
    $scope.linkYes = "#/dominion";
});
mainApp.controller('imperialSettlersController', function ($scope) {
    $scope.message = "Imperial Settlers";
    $scope.description = "Play from four major powers: Romans, Barbarians, Egyptians and Japanese, as you expand your empire by constructing new buildings, gathering resources and training your army.";
    $scope.linkAmazon = "https://www.amazon.com/Wydawnictwo-Portal-POP00340-Imperial-Settlers/dp/B00M9HUOK8/ref=sr_1_1?ie=UTF8&qid=1495824543&sr=8-1&keywords=imperial+settlers";
    $scope.image1 = "pic/7Wonders.jpg";
    $scope.linkPrice = "$49.99 on Amazon";
});
mainApp.controller('harbourController', function ($scope) {
    $scope.message = "Harbour";
    $scope.linkAmazon = "https://www.amazon.com/Tasty-Minstrel-Games-Harbour-Board/dp/1938146786/ref=sr_1_1?ie=UTF8&qid=1495824585&sr=8-1&keywords=harbour+board+game";
    $scope.linkPrice = "$17.77 on Amazon";
    $scope.description = "Playing as a variety of different harbour masters with all different, unique, special abilities,, players must organize their workers and maximize their resources in order to construct buildings that are worth the most points!";
});
mainApp.controller('dominionController', function ($scope) {
    $scope.message = "Dominion";
    $scope.linkAmazon = "https://www.amazon.com/Dominion-2nd-Edition-Board-Game/dp/B01LYLIS2U/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1495824628&sr=1-2&keywords=dominion";
    $scope.linkPrice = "$32.37 on Amazon";
    $scope.description = "Made in 2008 by Donald X Vaccarino, Domion is an innovative, deck-building game that has player striving to chain together card combos that can help them buy Victory Points.";
});
mainApp.controller('7WonderDuelController', function ($scope) {
    $scope.message = "7 Wonder Duel";
    $scope.linkAmazon = "https://www.amazon.com/7-Wonders-Duel-Board-Game/dp/B014DMSTXK/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495824678&sr=1-1&keywords=7+wonder+duel";
    $scope.linkPrice = "$26.99 on Amazon";
    $scope.description = "By incorporating and improving upon many of the elements from its parent game, 7 Wonders, 7 Wonders: Duel has both players advancing through three ages. Through improvements in there military and science and construncting wonders, players compete for the greatest civilization.";
});
mainApp.controller('finishIn10MinController', function ($scope) {
    $scope.message = "Do you want a game you can finish in 10 minutes?";
    $scope.linkNo = "#/munchkins";
    $scope.linkYes = "#/coup";
});
mainApp.controller('coupController', function ($scope) {
    $scope.message = "Coup";
    $scope.linkAmazon = "https://www.amazon.com/Indie-Boards-Cards-COU1IBC-Dystopian/dp/B00GDI4HX4/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495824932&sr=1-1&keywords=coup";
    $scope.linkPrice = "$8.03 on Amazon";
    $scope.description = "In this game that could be described as a more in depth, card-game version of rock, paper, scissors, players strive to be the last player standing as they try to pedict their opponenet's actions to assassinate charcters while avoiding getting killed themselves.";
});
mainApp.controller('munchkinsController', function ($scope) {
    $scope.message = "Munchkin";
    $scope.linkAmazon = "https://www.amazon.com/Steve-Jackson-Games-1483SJG-Munchkin/dp/B004U7JJWE/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1495824954&sr=1-1&keywords=munchkins";
    $scope.linkPrice = "$19.99 on Amazon";
    $scope.description = "In this goofy and witty card-based version of Dungeons and Dragons, Munchkins has its players kicking down doors, looting rooms, and fighting monsters in order to be the first to reach level 10.";
});