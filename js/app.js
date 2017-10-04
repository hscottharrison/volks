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
    templateUrl: '../views/services.html',
    controller: 'solutionsCtrl'
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
  .state('about', {
    url: '/about',
    templateUrl: '../views/about.html'
  })
  .state('mission', {
    url: '/mission',
    templateUrl: '../views/mission.html'
  })
  .state('staffing', {
    url: '/staffing',
    templateUrl: '../views/staffing.html'
  })
  .state('solutions', {
    url: '/solutions',
    templateUrl: '../views/projectsolutions.html'
  })
  .state('careers', {
    url: '/careers',
    templateUrl: '../views/careers.html'
  })
  .state('ericsson', {
    url: '/career/0001/ericsson',
    templateUrl: '../views/careers/ericsson.html'
  })
})
