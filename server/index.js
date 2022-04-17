import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
	res.send('Hello to Memories API');
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser    : true,
		useUnifiedTopology : true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
	})
	.catch((err) => {
		console.log(err.message);
	});
