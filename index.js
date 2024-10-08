const express =require('express');
const app=express();
const port=10000;

/// use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`error in running server:${err}`);
    }

    console.log(`server is running on port:${port}`);
});