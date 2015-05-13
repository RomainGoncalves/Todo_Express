angular.module('todos')
  .factory('Todos', ['$resource', function($resource){
    return $resource('http://localhost:8080/todos/:id', {id:'@_id'},
      {
        update: {method:'PUT'}
      }
    );
  }]);
