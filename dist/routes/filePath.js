"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileDirection = void 0;
const path_1 = __importDefault(require("path"));
const fileDirection = (name) => {
    return path_1.default.join('./models/dataFile', name);
};
exports.fileDirection = fileDirection;
