import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { registerValidator } from "./validations/requests.js";
import { validationResult } from "express-validator";
import UserModel from "./models/User.js";
import News from "./models/News.js";

mongoose.connect("mongodb+srv://dianasem0911:dianaFox0903*@cluster0.le4k4rz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(
    ()=>{
        console.log("DB ok");
    }
)
.catch(
    (err)=>{
        console.log("DB error", err)
    }
)

const app = express();

app.use (express.json());
app.use(cors());

app.post('/contacts', registerValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { name, museumName, date, mobileNumber, comment } = req.body;
  
    try {
      const user = new UserModel({ name, museumName, date, mobileNumber, comment });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error saving user to database:', err); // Виведення помилки в консоль
        res.status(500).json({ error: 'Failed to register user', message: err.message }); 
    }
});


// Маршрут для додавання музеїв
app.post('/museums', (req, res) => {
    const museum = new MuseumModel({
        postTitle: req.body.postTitle,
        postDescription: req.body.postDescription,
        photoUrl: req.body.photoUrl,
    });

    museum.save().then(() => {
        res.json({
            success: true,
        });
    }).catch((err) => {
        res.status(500).json({
            success: false,
            error: err.message
        });
    });
});

app.get('/news', async (req, res) => {
    const news = await News.find();
    res.json(news);
})

app.listen(4444, (err)=>
{
    if(err){
        return console.log(err);
    }

    console.log("Server OK");
})

