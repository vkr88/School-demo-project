import express from 'express';
import dotenv from 'dotenv';
import mongoDbConnect from './config/db.js'
import SchoolRouter from './Router/School.Router.js'
import ContectRouter from './Router/ContectRouter.js'
import cors from 'cors';

 const app = express();
app.use(express.json());

dotenv.config();
mongoDbConnect();
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use('/api/comment', SchoolRouter);
app.use('/api/contect', ContectRouter);



 app.listen(PORT , ()=>{ console.log(`Server running on port ${process.env.PORT}`);
})