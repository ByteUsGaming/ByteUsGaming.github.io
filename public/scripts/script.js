var app = angular.module('ByteMe', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../pages/intro.html',
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

                }
            })
            .state('team', {
                url: '/team',
                templateUrl: '../pages/team.html',
                controller: function($scope, People, $location) {
                    $scope.people = People.people;

                    $scope.changeSummary = function(newPerson) {
                        $location.url('/team/' + newPerson);
                    };
                }
            })
            .state('team.carl', {
                url: '/carl',
                templateUrl: '../pages/people/carl.html'
            })
            .state('team.evan', {
                url: '/evan',
                templateUrl: '../pages/people/evan.html'
            })
            .state('team.kevin', {
                url: '/kevin',
                templateUrl: '../pages/people/kevin.html'
            })
            .state('team.sarah', {
                url: '/sarah',
                templateUrl: '../pages/people/sarah.html'
            })
            .state('team.spencer', {
                url: '/spencer',
                templateUrl: '../pages/people/spencer.html'
            })
            .state('team.tabitha', {
                url: '/tabitha',
                templateUrl: '../pages/people/tabitha.html'
            })
            .state('games', {
                url: '/games',
                templateUrl: '../pages/games.html'
            })
            .state('store', {
                url: '/store',
                templateUrl: '../pages/store.html'
            })
            .state('contact', {
                url: '/contactus',
                templateUrl: '../pages/contact.html'
            });
    }
]);

app.service('People', function() {
    this.people = [{
        name: 'Carl Amko',
        urlName: 'carl',
        imgURL: "carl.png"
    }, {
        name: 'Evan Clendenning',
        urlName: 'evan',
        imgURL: "evan.png"
    }, {
        name: 'Kevin Portuondo',
        urlName: 'kevin',
        imgURL: "kevin.png"
    }, {
        name: 'Sarah McLean',
        urlName: 'sarah',
        imgURL: "sarah.png"
    }, {
        name: 'Spencer Maschin',
        urlName: 'spencer',
        imgURL: "spencer.png"
    }, {
        name: 'Tabitha Kitchen',
        urlName: 'tabitha',
        imgURL: "tabitha.png"
    }];

    return this;
});

app.service('Pages', function() {
    this.pages = [{
        name: 'Home',
        url: '/'
    }, {
        name: 'Team',
        url: '/team'
    }, {
        name: 'Games',
        url: '/games'
    }, {
        name: 'Store',
        url: '/store'
    }, {
        name: 'Contact Us',
        url: '/contactus'
    }];

    return this;
});

app.controller('MenuController', ['$scope', '$location', 'Pages', function($scope, $location, Pages) {
    $scope.links = Pages.pages;
    $scope.menuItemClicked = function(newPageString) {
        $location.url(newPageString.url);
    }
}]);

app.controller('MainCtrl', ['$scope', 'Pages', function($scope, Pages) {

}]);

app.controller('SocialMediaCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.medias = [];

    $http.get('/data/media.json').success(function(data) {
        $scope.medias = data;
    });

    $scope.linkClicked = function(urlString) {
        window.open(urlString, "_blank");
    };

}]);
