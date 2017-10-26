var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'header/header.html',
                        controller: 'headercontroller'
                    },
                    'content': {
                        templateUrl: 'home/home.html',
                        controller: 'homecontroller'
                    },
                    'footer': {
                        templateUrl: 'footer/footer.html',
                        controller: 'footercontroller'
                    }
                }
            })
            .state('app.testwan', {
                url: 'testwan',
                views: {
                    'content@': {
                        templateUrl: 'pages/test1/test1.html',
                        controller: 'test1controller'
                    }
                }
            });
    $urlRouterProvider.otherwise('/');
});