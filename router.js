// Need routes for REST resource
module.exports = function (app) {
  app.route('/todos')
    .get(function (req, res) {
      res.send([
        {
          name: 'todo1',
          done: false
        },
        {
          name: 'todo2',
          done: true
        },
        {
          name: 'todo3',
          done: false
        }
      ]);
    });
};