module.exports = function (app, path) {
  app.get('/', function (req, res) {
    res.send('hello');
  });
  app.get('/hello', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/hello.html'));
  })
};
