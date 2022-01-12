const express = require("express");
const { addTache, GetTache, UpdateTache, DeleteTache, GetOneTache } = require("../controllers/tache");
const { isAuth } = require("../middlewares/isAuth");

const tacheRoute=express.Router();

tacheRoute.post("/addTache",isAuth,addTache);
tacheRoute.get("/",GetTache);
tacheRoute.put("/:id",UpdateTache);
tacheRoute.delete("/:id",DeleteTache);
tacheRoute.get("/:id",GetOneTache);

module.exports=tacheRoute;