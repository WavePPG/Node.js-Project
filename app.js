const express = require('express');
const app = express();
const morgan = require('morgan')
const port = 3000;
const debug = require('debug')('app')

app.use(morgan('combined'))
app.get("/" , (req,res) =>{

    res.send('LOVE SAROCHA SO MINI');

}) //จัดการกับ Reques และส่งคำว่า Hello borntodev กลับไป

app.listen(port, ()=>{
    debug("listening on port %d",port);
})