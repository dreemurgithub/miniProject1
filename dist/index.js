"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = 3000;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathToRoutes = path_1.default.join(__dirname, './routes/filePath');
console.log(pathToRoutes);
const user_1 = require("./controllers/user");
const filePath_1 = require("./routes/filePath");
app.use(user_1.userController);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // import file from './routes/filePath'
    const text = (0, filePath_1.fileDirection)('file1.json');
    console.log(text);
    fs_1.default.readFile(text, (err, data) => {
        if (err)
            throw err;
        else
            res.send(data);
    });
    // res.send(text);
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // console.log(process.env);
    console.log(process.env.DOCKER_DATABASE_URL);
});
