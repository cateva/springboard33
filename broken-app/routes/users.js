const express = require('express');
let axios = require('axios');
const router = new express.Router();
const ExpressError = require("../expressError");

router.post("", function(req,res, next){
    try {
        if (!req.body.developers) throw new ExpressError("developer username is required", 400);

        let results = req.body.developer.map(async function(d){
            await axios.get(`https://api.github.com/users/${d}`);
        });

        let temp = res.json(results);
        console.log(temp);
    }


    catch (e) {
        console.log(e)
    return next(e);
    }
});