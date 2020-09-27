const express = require('express');
const app = express();


app.get('/', (req,res)=>{
    res.send('Thank You');
})
app.listen(3000, console.log('Listining From 3000'))