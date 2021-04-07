import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import cors from 'cors'

// App config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = 'mongodb+srv://admin:g9bNjFsagT3iGtHp@cluster0.dsj4k.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(cors());

// DB config || connection to database
mongoose.connect(connectionUrl,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Api endpoints
app.get('/', (req,res) => {
    res.status(200).send('Hello world'); 
});

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    
    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
   
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

// Listner 
app.listen(port, () => console.log(`Listening on local host ${port}`));