import epress from "express";
import cors from "cors";

//Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());

//Make some animals
import Chance from "chance";
const chance = new Chance();
