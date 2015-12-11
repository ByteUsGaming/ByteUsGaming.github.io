var app = angular.module('ByteMe', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        //$stateProvider
        // .state('home', {
        //     url: '/',
        //     templateUrl: '../pages/intro.html',
        //     controller: function($scope, $http) {
        //         $(".typing").typed({
        //             strings: [
        //                 "innovative.^1000",
        //                 "dedicated.^1000",
        //                 "developers.^1000",
        //                 "artists.^1000",
        //                 "designers.^1000",
        //                 "ByteUsGaming.^1000"
        //             ],
        //             typeSpeed: 40,
        //             showCursor: true,
        //             callback: function() {
        //                 $(".sub-typing").css("opacity", "1.0");
        //                 $("#logo").css("opacity", "1.0");
        //             }
        //         });

        //     }
        // })
        // .state('team', {
        //     url: '/team',
        //     templateUrl: '../pages/team.html'
        // })
        // .state('carl', {
        //     url: '/carl',
        //     templateUrl: '../pages/people/carl.html'
        // })
        // .state('evan', {
        //     url: '/evan',
        //     templateUrl: '../pages/people/evan.html'
        // })
        // .state('kevin', {
        //     url: '/kevin',
        //     templateUrl: '../pages/people/kevin.html'
        // })
        // .state('sarah', {
        //     url: '/sarah',
        //     templateUrl: '../pages/people/sarah.html'
        // })
        // .state('spencer', {
        //     url: '/spencer',
        //     templateUrl: '../pages/people/spencer.html'
        // })
        // .state('tabitha', {
        //     url: '/tabitha',
        //     templateUrl: '../pages/people/tabitha.html'
        // })
        // .state('games', {
        //     url: '/games',
        //     templateUrl: '../pages/games.html'
        // })
        // .state('store', {
        //     url: '/store',
        //     templateUrl: '../pages/store.html'
        // })
        // .state('contact', {
        //     url: '/contactus',
        //     templateUrl: '../pages/contact.html',
        //     controller : function($http, $scope) {

        //     }
        // });
    }
]);

app.service('People', function() {
    this.people = [{
        name: 'Carl Amko',
        linkedInUrl: 'https://www.linkedin.com/in/carlamko',
        facebookUrl: 'https://www.facebook.com/itsdefnotcarl',
        jobDesc: ['Lead Programmer', 'Web Developer'],
        imgURL: "carl.jpg"
    }, {
        name: 'Evan Clendenning',
        urlName: 'evan',
        linkedInUrl: 'https://www.linkedin.com/in/evan-clendenning-85270482',
        facebookUrl: 'https://www.facebook.com/MuffinofChaos',
        jobDesc: ['Lead Programmer', 'Audio Engineer'],
        imgURL: "evan.png"
    }, {
        name: 'Kevin Portuondo',
        urlName: 'kevin',
        linkedInUrl: 'https://www.linkedin.com/pub/kevin-portuondo/30/aaa/396',
        facebookUrl: 'https://www.facebook.com/keport926',
        jobDesc: ['Creative Director', 'Public Relations Specialist'],
        imgURL: "kevin.png"
    }, {
        name: 'Sarah McLean',
        urlName: 'sarah',
        linkedInUrl: '',
        facebookUrl: 'https://www.facebook.com/sarah.mclean.169',
        jobDesc: ['Lead Writer', 'Content Designer'],
        imgURL: "sarah.png"
    }, {
        name: 'Spencer Maschin',
        urlName: 'spencer',
        linkedInUrl: '',
        facebookUrl: 'https://www.facebook.com/spencer.maschin.7',
        jobDesc: ['Concept Artist', 'Quality Assurance Analyst'],
        imgURL: "spencer.png"
    }, {
        name: 'Tabitha Kitchen',
        urlName: 'tabitha',
        linkedInUrl: '',
        facebookUrl: 'https://www.facebook.com/Tabitha.Amber',
        jobDesc: ['Chief Editor', 'Quality Assurance Analyst'],
        imgURL: "tabitha.png"
    }];

    return this;
});
app.directive('introPanel', [function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, $http) {
            $(".typing").typed({
                strings: [
                    "innovative.^1000",
                    "dedicated.^1000",
                    "developers.^1000",
                    "artists.^1000",
                    "designers.^1000",
                    "ByteUsGaming.^1000"
                ],
                typeSpeed: 40,
                showCursor: true,
                callback: function() {
                    $(".sub-typing").css("opacity", "1.0");
                    $("#logo").css("opacity", "1.0");
                }
            });

        },
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '../pages/intro.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}}))
    };
}]);
app.directive('teamPanel', [function() {
    // Runs during compile
    return {
        // name: '',
        controller: function($scope, People, $window) {
            $scope.people = People.people;

            $scope.windowOpen = function(url) {
                $window.open(url);
            };
        },
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '../pages/team.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}}))
    };
}]);
app.directive('aboutPanel', [function() {
    // Runs during compile
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        controller: function($scope) {
          $scope.items = [
            {
              body: "fun fun fun",
              iconClass: "fa-cogs"
            },
            {
              body: "fun fun fun",
              iconClass: "fa-group"
            },
            {
              body: "fun fun fun",
              iconClass: "fa-heart-o"
            }
          ];
        },
        templateUrl: '../pages/about.html'
    };
}]);

app.directive('gamesPanel', [function() {
    // Runs during compile
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        controller: function($scope) {
          $scope.games =
          [
            {
              name: "Tusk Textventure",
              desc: "The Tusk-Textventure is an interactive, forge your own path ebook. You play the role of \"Kay Surlaw,\" a Scavenger from the planet Phobus. Her unyielding desire for profit and adventure leads her on a journey to Tusk, an intergalactic prison that was ripped violently through a wormhole. She could never have anticipated what she would find on this dilapidated compound. Now her fate is in your hands, so tread lightly as any decision may well be your last.",
              status: "Released",
              statusColor: "green",
              imgUrl: "./img/game1.png"
            },
            {
              name: "Giftionary",
              desc: "Giftionary is a party-like, web-app game in which you attempt to play the best GIF that matches the randomly selected category. If most people vote for your GIF, you are the winner of the round! Once everyone votes, a winner is declared and the next round begins. Set a score limit or play as much as you want!",
              status: "Development Phase",
              statusColor: "yellow",
              imgUrl: "./img/game4.png"
            },
            {
              name: "Tusk",
              desc: "Tusk is a fast paced, top down, sci-fi shooter. You have to navigate your way through the dark corridors and difficult puzzles of an infested intergalactic prison. If you want to prove yourself as a true Scavenger of Phobus, your home planet, you'll need more than just guts to survive. Be wary of the numerous creatures that lurk in the shadows. Don't forget to collect credits  along your way. You'll need to spend them wisely on various guns and ammunitions. Just don't forget to save enough for a med pack for the boss fight. Horrific mystery and unimaginable wealth are in your future.",
              status: "Development Phase",
              statusColor: "yellow",
              imgUrl: "./img/game3.png"
            },
            {
              name: "Avarice",
              desc: "Avarice: The Curse of Greed is a dungeon crawler board game. Each player selects the role of an elemental dragon (Fire, Water, Earth or Air) whose sole purpose is to hoard as much gold as possible. How do you get all this gold, you ask? By killing all the villagers, magicians, and warriors that stand in your way of course! Just don't forget, the more gold you amass, the bigger a target you become towards the other Dragons. Only the best strategist will succeed!",
              status: "Design Phase",
              statusColor: "red",
              imgUrl: "./img/game2.png"
            }
          ];
        },
        templateUrl: '../pages/games.html'
    };
}]);
app.directive('contactPanel', [function() {
    // Runs during compile
    return {
        controller: function($http, $scope) {
            $scope.sendFeedback = function(feedback) {

            };
        },
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: '../pages/contact.html',
    };
}]);

app.directive('stickWhenAtTop', function($window) {
    var $win = angular.element($window); // wrap window object as jQuery object
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var topClass = attrs.stickWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = $window.innerHeight; // get element's offset top relative to document
            $win.on('scroll', function(e) {
                if ($win.scrollTop() >= offsetTop) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                }
            });
        }
    }

});

app.service('Pages', function() {
    this.pages = [{
        name: 'Home',
        url: '#intro'
    }, {
        name: 'Team',
        url: '#team'
    }, {
        name: 'About',
        url: '#about'
    },
    {
        name: 'Games',
        url: '#games'
    }, {
        name: 'Store',
        url: 'http://byteusgaming.spreadshirt.com/'
    }, {
        name: 'Contact',
        url: '#contact'
    }];

    return this;
});

app.controller('MenuController', ['$scope', '$location', 'Pages',
    function($scope, $location, Pages) {
        $scope.links = Pages.pages;

    }
]);

app.controller('SocialMediaCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.medias = [];

    $http.get('/data/media.json').success(function(data) {
        $scope.medias = data;
    });

    $scope.linkClicked = function(urlString) {
        window.open(urlString, "_blank");
    };

}]);

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing');
    });
});
