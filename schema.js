// Need routes for REST resource
module.exports = function (app, mongoose) {
  var Schema = mongoose.Schema;

  var todoSchema = new Schema({
    name:  String,
    done: Boolean
  });

  var Todo = mongoose.model('Blog', todoSchema);
};