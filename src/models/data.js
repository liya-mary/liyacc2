const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@ictak-files.rfxcn.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority')
const schema=mongoose.Schema;
const dataschema=new schema({
    Name:String,
    email:String 
});
mongoose.model('namedata',dataschema);
var namedata=mongoose.model('namedata',dataschema);
module.exports=namedata;