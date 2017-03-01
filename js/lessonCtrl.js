directivePractice.controller('lessonCtrl', function($scope, lessonService){
  $scope.lessons = [
    'Services',
    'Routing',
    'Directives',
    'Review',
    'Firebase',
    'No server project',
    'Node',
    'Express',
    'Mongo'
  ];

  // console.log($scope.lessons);

  $scope.test = 'Two way data binding rocks!';


  $scope.announceDay = function(lesson, day){
    if(!day){
      alert(lesson + ' is not currently scheduled.');
      return;
    }
    alert(lesson + ' is active on ' + day + '.');
  };

  $scope.removeDay = function(index){
    // console.log(lesson);
    //console.log(index);
    $scope.lessons.splice(index, 1);
    //console.log($scope.lessons);
  };

});
