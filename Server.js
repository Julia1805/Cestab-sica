const express = require("express");
const server = express();
const mogoose = require("mogoose");

server.use(express.json());

mogoose.connect("mongodb://localhost:27017/beckend,"{
    useNewUrlParser:true,
    useUnifieTopology:true
});

const router = require = require("../router");
server.use(router);
server.listem(3333); 