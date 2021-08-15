const express=require('express');
const app=new express();
const port=process.env.port || 2000;
var nodemailer = require('nodemailer');
app.use(express.urlencoded({extended:true}));
const namedata=require('./src/models/data');
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');



///////////////////////////////
app.get('/',function(req,res){
    res.render("index",{
        title:'happy independence day'
    });
});

app.get('/add',function(req,res){
        //res.send("hey... i am added post");
        
        //var item={
           var Name=req.query.Name;
            var email=req.query.email;
        //}
        //console.log(item);
        //var data=namedata(item);
        //data.save();
        
        

                //nodemailer
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'liyamary813@gmail.com',
            pass: '183LiyaMaryBabu@813'
        },
        tls: {
            rejectUnauthorized: false
        }
        });

        var mailOptions = {
        from: 'liyamary813@gmail.com',
        to: req.query.email,
        subject: 'Happy independence day',
        text:req.protocol +'://' +req.get('host') +req.originalUrl
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
        res.render("greeting",{
            title:'happy independence day',
            Name
        });
              
    });   
          
  
app.listen(port,()=>{console.log("server ready at"+ port)});