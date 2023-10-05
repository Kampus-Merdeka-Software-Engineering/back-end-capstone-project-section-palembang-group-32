const express = require('express');
const cors = require('cors')

const usersRoutes = require('./routes/users');
const dokterRoutes = require('./routes/dokter');
const bookRoutes = require('./routes/book');
const port = process.env.PORT || 4000

const MiddlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(MiddlewareLogRequest);
app.use(express.json());
app.use(express.static("/src/public"));
app.use("/singup", express.static("/src/public/Singup.html"));
app.use('/api/users', usersRoutes);
app.use('/api/dokter', dokterRoutes);
app.use('/api/book', bookRoutes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  var corsOptions = {
    // Ganti domain ini
    origin: "http://127.0.0.1:5500",
  }
  app.use(cors(corsOptions))

var server = app.listen(port, () => {
    console.log('Server berhasil di running di port 4000');
})
server.keepAliveTimeout = 30000;