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
  .state('telecom', {
    url: '/managedservices/telecom',
    templateUrl: '../views/services/telecom.html'
  })
  .state('it', {
    url: '/managedservices/it',
    templateUrl: '../views/services/it.html'
  })
  .state('cybersecurity', {
    url: '/managedservices/cybersecurity',
    templateUrl: '../views/services/cybersecurity.html'
  })
  .state('big_data', {
    url: '/managedservices/big_data',
    templateUrl: '../views/services/big_data.html'
  })
  .state('oilandgas', {
    url: '/oil_gas',
    templateUrl: '../views/services/oil_gas.html'
  })
  .state('globaloffices', {
    url: '/globaloffices',
    templateUrl: '../views/global.html'
  })
})
