directivePractice.directive('lessonHider', function(){
  return {
    templateUrl: '../lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    link: function(scope, element, attrs){
      // console.log(scope, element, attrs);
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleElement){
          if(scheduleElement.lesson === scope.lesson){
            scope.lessonDay = scheduleElement.weekday;
            element.addClass("liner");
            // element.css('text-decoration', 'line-through');
            return;
          }
        });

        element.bind("click", function() {
          element.toggleClass("liner");
          // element.css('text-decoration', 'line-through');
        });

      });
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();

    }
    //Controller runs each time a new directive is created. Ng-repeat creates a new directive for each lesson and each new lesson runs the controller again. So the forEach is running on the array from the schedule.json file against the one lesson in each directive.
  };
});
