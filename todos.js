// Need routes for REST resource
module.exports = function (app, mongoose) {

  var todoSchema = new mongoose.Schema({
    name:  String,
    done: Boolean
  });

  return mongoose.model('Todo', todoSchema);
};