const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const authRouter = require('./routers/AuthRouter');
// const loadsRouter = require('./routers/LoadsRouter');
// const usersRouter = require('./routers/UsersRouter');
// const trucksRouter = require('./routers/TrucksRouter');

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use(express.json({ extended: true }));

app.use('/api', authRouter);
// app.use('/api', loadsRouter);
// app.use('/api', usersRouter);
// app.use('/api', trucksRouter);

const PORT = config.get('port') || 8080;

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      // !!ToDo If you change a port for server, please will change a path for proxy settings in package.json.
      console.log(`Server running on ${PORT} port`);
    });
  } catch (err) {
    console.log(`Server error`, err.message);
    process.exit(1);
  }
};
start();
