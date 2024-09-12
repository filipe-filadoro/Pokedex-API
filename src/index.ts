import express,{Request, Response} from "express";
import path from "path";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get('/', function (request:Request, response: Response) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
                response.render("index", data);
        });
});

app.get('/detalhar/:id', (req:Request, res:Response) => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+req.params.id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            res.render("detalhar", data);
        }); 
});

app.listen(3000, function () {
    console.log("Server is running");
})
