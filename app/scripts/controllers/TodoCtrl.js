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

    this.updateTask = function(index){
      Todos.update(this.todos[index]).$promise.then(function(updatedTodo){
      });
    };

    this.removeTask = function(index){
      this.todos[index].$delete().then(function(){
        self.todos.splice(index, 1);
      })
    };
  }]);
