let jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
 static: './build',
});
const users = router.db.get('users');

server.use(jsonServer.bodyParser);
server.use(middlewares);

//Авторизация
server.post('/auth', (req, res) => {
 const { login, password } = req.body;
 const authUser = users
   .toJSON()
   .find((user) => user.login === login && user.password === password);
 if (authUser) {
  const { id, login, token, email, firstName, roles, address, lastName } = authUser;
  res.json({ id, login, token, email, firstName, address, lastName, roles, password: password });
 } else {
  res.status(401).json({ message: 'Ошибка авторизации' });
 }
});
server.use(router);
server.listen(process.env.PORT || 4000, () => {
 console.log(`JSON Server is running on 4000`);
});
