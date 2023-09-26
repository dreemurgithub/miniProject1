"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileTwo = exports.fileOne = void 0;
const path_1 = __importDefault(require("path"));
const fileDirection = (name) => {
    return path_1.default.join('./models/dataFile', name);
};
const fileOne = fileDirection('file1.json');
exports.fileOne = fileOne;
const fileTwo = fileDirection('file2.json');
exports.fileTwo = fileTwo;
