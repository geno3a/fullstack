import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation } from './validation.js';
import * as UserController from './controllers/UserController.js';
import checkAuth from './utils/checkAuth.js';


mongoose
    .connect('mongodb+srv://geno3a:Vladik126@cluster0.jbp3jgj.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('DB error: ' + err));

const app = express();

app.use(express.json());

app.post('/auth/login',loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }
    
    console.log('Server is running on port 3000');
});