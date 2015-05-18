angular.module('todos')
  .controller('TodoCtrl', ['$scope', 'Todos', '$timeout', function ($scope, Todos, $timeout) {

    this.todos = Todos.query();
    this.newTodo = {};
    this.flashMessage = {
      show: false,
      message: ''
    };
    var self = this;

    this.addTodo = function(isValid){

      if(!isValid){
        self.flashMessage.message = 'The form is invalid';
        self.flashMessage.show = true;

        $timeout(function(){
          self.flashMessage = {
            show: false,
            message: ''
          };
        }, 3000);

        return;
      }

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

    this.countDoneStatus = function(value){
      var count = 0;

      angular.forEach(this.todos, function(todo){
        if(todo.done === value) count++;
      });

      return count;
    };
  }]);
