angular.module('volks').controller('solutionsCtrl', function($scope){
  $scope.collapsibleElements = [
    {
        icon: 'mdi-image-filter-drama',
        title: 'Installation, commission, integration and full EF&I',
        content: ['Ran Networks', 'Microwave', 'DAS- Small Cells']
    },
    {
        icon: 'mdi-maps-place',
        title: 'Site Acquisition, Zoning and Permitting',
        content: [ 'Lease reviews', 'New Site Build', 'Colocations', 'Modifications']
    },
    {
        icon: 'mdi-social-whatshot',
        title: 'Construction and Installation Services',
        content:  ['Civil work', 'Electrical, to include AC and DC', 'RAN Networks', 'GSM, UMTS, HSPA, LTE', 'Generators', 'Microwave']
    },
    {
        icon: 'mdi-social-whatshot',
        title: 'Engineering and Design Services',
        content: ['Backhaul/circuit provisioning', 'Feasibility studies', 'Needs assessments', 'Indoor and outdoor DAS, repeater unit']
    }
  ];



})
