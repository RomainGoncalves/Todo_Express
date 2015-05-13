angular.module('todos')
  .controller('TodoCtrl', ['$scope', 'Todos', function ($scope, Todos) {

    this.todos = Todos.query();
    this.newTodo = {};
    var self = this;

    this.addTodo = function(){
      Todos.save(this.newTodo).$promise.then(function(todo){
        self.todos.push(todo);
        self.newTodo = {};
      });
    };

    this.changeState = function(index){
      console.log( this.todos[index] );
      Todos.update(this.todos[index]).$promise.then(function(updatedTodo){
        console.log( "Updated Todo: ", updatedTodo );
      })
    };
  }]);
