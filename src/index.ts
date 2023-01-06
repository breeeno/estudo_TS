import express from "express"; 
import routes from "./routes";

const app = express(); 

function getusername(){
    return "breno"
}

const teste = getusername

app.use(routes)

app.listen(3000); 


