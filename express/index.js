const express=require('express')
const mongoose=require('mongoose')
var app=express()
var path=require('path')

// app.get('/',(req,res)=>{
// res.send('<h1>Homepage</h1>')
// })

// app.get('/home',(req,res)=>{
// res.send('<h1>Home </h1>')
// })
mongoose.connect('mongodb://localhost:27017/myapp',()=>{
    console.log('Conneected to mongodb successfully')
})
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const User = require('./model/user'); 
const bcrypt = require('bcrypt');
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/signup.html'));
});
app.post('/user', (request, response) => {
      const user = new User({
         firstName : request.body.firstName,
         lastName : request.body.lastName,
         userName : request.body.userName,
         password : request.body.password,
         email : request.body.email
      });
bcrypt.hash(user.password, 10, function (err, hash){
if (err) { 
    return next(err);
}
user.password = hash;
user.save().then(data => {
    console.log('Successfully created a new User');
    
    response.send({'msg':'User Created','response':data})
}).catch(error => {
     // you can send an error code here
    })
  })
})
app.listen(8002,()=>{
    console.log('Server Started');
})
