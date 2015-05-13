angular.module('todos')
  .factory('Todos', ['$resource', function($resource){
    return $resource('http://localhost:8080/todos', {},
      {
        update: {method:'PUT'}
      }
    );
  }]);
