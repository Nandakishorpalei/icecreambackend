const app = require('./server');
const connect = require('./src/configs/db');

const port = '8000';
app.listen(port, async () => {
  try {
    await connect();
    console.log('This server runs at port ' + port);
  } catch (e) {
    console.log(e.message);
  }
});
