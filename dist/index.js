"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = 3000;
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathToRoutes = path_1.default.join(__dirname, "./routes/filePath");
console.log(pathToRoutes);
const user_1 = require("./controllers/user");
const filePath_1 = require("./routes/filePath");
app.use(express_1.default.json());
app.use(user_1.userController);
app.get("/", (req, res) => {
    // import file from './routes/filePath'
    fs_1.default.readFile(filePath_1.fileOne, "utf-8", (err, data) => {
        if (err)
            throw err;
        else {
            const hashedData = crypto_1.default
                .createHmac("sha256", `${process.env.HashKey}`)
                .update("sometext")
                .digest("hex");
            res.send(hashedData);
            const aa = data;
            const a = 0;
        }
    });
    // res.send(text);
});
app.post("/", (req, res) => {
    // import file from './routes/filePath'
    fs_1.default.readFile(filePath_1.fileTwo, "utf-8", (err, data) => {
        if (err)
            throw err;
        else {
            const hashedData = crypto_1.default
                .createHmac("sha256", `${process.env.HashKey}`)
                .update('sometext2')
                .digest("hex");
            const aa = data;
            const authString = req.headers.authorization;
            res.send(hashedData);
            const a = 0;
        }
    });
    // res.send(text);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // console.log(process.env);
    console.log(process.env.DOCKER_DATABASE_URL);
});
