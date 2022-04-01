"use-strict";
const express = require('express');
const app = express();

const port= procert=process.env.PORT || 900;
const debug_mode = (process.env.APP_DEBUG == 'false')? false: true;

const api_prefix = "api/v1";

app.get("/", (req, res)=>{
    return res.send(`Nothing to see here. Go to /${api_prefix} to get game responses`)
});

app.get(`/${api_prefix}`,require("./controller").index);

const error = new Error("Not found");

app.use((req ,res, next) => {

	error.status =  404;
	next(error);
});

app.use((error ,req , res , next) => {

    if(!error.status) error.status = 500;
              
	return res.status(error.status).json({
		error:  (debug_mode)? error.message : "Something went wrong"
	});
});

var s = app.listen(port, function(){

    console.log(`app is listening on port ${port}`)

});

s.setTimeout(100000);
