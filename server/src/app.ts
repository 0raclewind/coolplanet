import express, {Request, Response} from 'express'
const fs = require("fs");
const cors = require("cors");

const PORT = 4000;

const app = express();
app.use(cors());



let rawdata = fs.readFileSync('users.json');
let users = JSON.parse(rawdata);

app.get("/users", (req: Request, res: Response) => {
    return res.json(users);
})

app.get("/users/:id", (req: Request, res: Response) => {
    users.map((user: { id: number; }) => {
        if (user.id === +req.params.id) {
            res.json(user);
        }
    })
    res.sendStatus(404);
})

app.listen(PORT, () => {
    console.log(`Application listening at http://localhost:${PORT}`);
    
})