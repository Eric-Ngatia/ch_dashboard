import express from 'express';
import Database from "./src/Database/Database.js";
import bodyParser from 'body-parser';
import { router } from "./src/Routes/Auth.js";
import cors from 'cors';


const app = express();
const PORT = 4000;
let db = new Database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors(corsOption))
app.use(router);

var corsOption = {
    origin: 'https://localhost:3000',
    withCredentials : true,
    optionsSuccessStatus: 200,
    methods: ["POST" , "GET" ]
}


app.listen(PORT, (err) => 
console.log(`Le serveur tourne sur le port 127.0.0.1:${PORT}`)
)
