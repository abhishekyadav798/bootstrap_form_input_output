const { Router } = require('express')
const express = require('express')
 const app = express()
 

 const cors = require('cors');
 
app.use(cors({
    origin: 'http://143.244.137.54'
}));
//  app.get('/', (req,res) => {
//      res.send('Home Page')
//  })
app.use(cors())


 app.get('/',(req,res)=>{
     res.sendFile("/root/bootstrap_portfolio_template_1/bootstrap_portfolio_template_1/bootstrap_portfolio_template_1.html")
 })

 app.get("/images/:name",(req,res)=>{
     console.log(req.path)
     res.sendFile("/root/bootstrap_portfolio_template_1/bootstrap_portfolio_template_1/"+req.path)
 //res.send("hello")
    })

    app.get("/test",(req,res)=>{
       
    res.send(
            Math.floor(Math.random() * 100).toString()
        );
    })
 app.listen(3002, () => console.log('Example app is listening on port 3000.'));

 