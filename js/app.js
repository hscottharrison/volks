angular.module('volks', ['ui.router', 'ui.materialize', 'angularTypewrite'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: '../views/home.html'
  })
  .state('projectsolutions', {
    url: '/projectsolutions',
    templateUrl: '../views/solutions.html',
    controller: 'solutionsCtrl'
  })
  .state('managedservices', {
    url: '/managedservices',
    templateUrl: '../views/services.html'
  })
})
