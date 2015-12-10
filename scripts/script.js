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
        imgURL: "carl.png"
    }, {
        name: 'Evan Clendenning',
        urlName: 'evan',
        linkedInUrl: '',
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
app.directive('gamesPanel', [function() {
    // Runs during compile
    return {
        // name: '',
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '../pages/games.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}}))
    };
}]);
app.directive('storePanel', [function() {
    // Runs during compile
    return {
        // name: '',
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '../pages/store.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}}))
    };
}])
app.directive('contactPanel', [function() {
    // Runs during compile
    return {
        // name: '',
        controller: function($http, $scope) {
            $scope.sendFeedback = function(feedback) {

            };
        },
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '../pages/contact.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}}))
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
        name: 'Games',
        url: '#games'
    }, {
        name: 'Store',
        url: '#store'
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
