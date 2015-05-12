angular.module('todos')
  .controller('TodoCtrl', ['$scope', 'Todos', function ($scope, Todos) {

    this.todos = Todos.query();
  }]);
