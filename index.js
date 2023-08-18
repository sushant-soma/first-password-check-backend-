//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var currentPass = "";

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next){
    currentPass = req.body["password"];
    next();
}

app.use(checkPassword);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check' , (req , res)=>{
    if (currentPass == "ILoveProgramming"){
        console.log(`Correct Password = ${currentPass}`);
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        console.log(`Wrong Password = ${currentPass}`);
        res.redirect("/");
    }
})