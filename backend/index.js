import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './routes/Routers.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const CONNECTION_URI = process.env.CONNECTION_URI;
app.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Hello, Welcome....' });
});

mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running in :http://localhost:${PORT}`);
    })
  )

  .catch((err) => console.log(`Error:${err}, did not connect to database`));

app.use('/', Routes);
