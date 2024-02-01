const express = require("express");
const router = express.Router();

//Importing Controller

const { dummyLike } = require("../controllers/LikeController")


//Mapping Create
router.get("/dummyroute", dummyLike)



//Export 

module.exports = router;