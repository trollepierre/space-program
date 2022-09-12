"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
const node_cache_1 = __importDefault(require("node-cache"));
const myCache = new node_cache_1.default();
dotenv.config();
const app = (0, express_1.default)();
const PORT = 3000;
const galileo_norad_id = `41174`;
const observer_lat = `41.702`;
const observer_lng = `-76.014`;
const observer_alt = `0`;
const seconds = `1`;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = myCache.get(galileo_norad_id);
    if (data == undefined) {
        const response = yield axios_1.default.get(`https://api.n2yo.com/rest/v1/satellite/positions/${galileo_norad_id}/${observer_lat}/${observer_lng}/${observer_alt}/${seconds}/&apiKey=${process.env.API_KEY}`);
        data = response.data;
    }
    else {
        console.log('using cache');
    }
    myCache.set(galileo_norad_id, data);
    res.json(data);
}));
app.listen(PORT, () => {
    console.log(`The application is listening on port http://localhost:${PORT}`);
});
