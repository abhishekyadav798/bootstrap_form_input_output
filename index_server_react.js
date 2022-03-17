const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/', function (req, res) {
   res.send('[{"name":"jack43234sfdf","hix":"heyxczc5"},{"name":"jack534534","hix":"heyeqwe"},{"name":"jack213213","hix":"hey121"}]')
 // res.sendFile('/root/express_server_test_1/index.html')
})

app.get('/images/:image',function(req,res){
  res.sendFile("/root/express_server_test_1/images/"+req.params['image'])
  console.log(req.params['image'])
  // res.send("hello")
})

app.get('/123', function (req,res){
  res.send('[hello india]')
})

app.get('/121', function(req,res){
  res.send('i am here')
})
app.listen(3005)
