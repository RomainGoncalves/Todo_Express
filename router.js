// Need routes for REST resource
module.exports = function(app) {
console.log( app.route );
  app.route('/todos')
    .get(function(req, res){
      res.send('get all todos');
    });
};