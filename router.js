// Need routes for REST resource
module.exports = function (app, mongoose) {
  var todoSchema = new mongoose.Schema({
    name: String,
    done: Boolean
  });

  mongoose.model('Todo', todoSchema);

  var Todo = mongoose.model('Todo');

  app.route('/todos')
    .get(function (req, res) {
      Todo.find({}, function (err, todos) {
        res.send(todos);
      });
    })

    .post(function (req, res) {
      var todo = new Todo({
        name: req.body.name,
        done: false
      });

      todo.save(function (err, user) {
        if (err) {
          console.log(err);
          return next(err);
        }

        res.send(todo);
      });
    });
};