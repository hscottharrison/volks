angular.module('volks').controller('solutionsCtrl', function($scope){
  $scope.collapsibleElements = [
    {
        icon: 'mdi-image-filter-drama',
        title: 'Telecom',
        content: 'Volks Resources supports the Telecom industry, we are innovating the way we are placing qualified technical personnel on customer nationwide projects. We understand the differences in each different technology and client requirement.'
    },
    {
        icon: 'mdi-maps-place',
        title: 'IT',
        content: 'Volks Resources has deployed thousands of IT engineers, our professional recruiters are highly experienced at identifying and placing world-class information technology candidates Our staffing solutions will help your company with hiring strategies.'
    },
    {
        icon: 'mdi-social-whatshot',
        title: 'Oil and Gas',
        content:  ['Civil work', 'Electrical, to include AC and DC', 'RAN Networks', 'GSM, UMTS, HSPA, LTE', 'Generators', 'Microwave']
    },
    {
        icon: 'mdi-social-whatshot',
        title: 'Cybersecurity',
        content: 'Coming Soon'
    },
    {
        icon: 'mdi-social-whatshot',
        title: 'Big Data',
        content: 'Coming Soon'
    },
    {
        icon: 'mdi-social-whatshot',
        title: 'Cloud',
        content: 'Coming Soon'
    }
  ];



})
