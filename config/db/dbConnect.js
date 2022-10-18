const mongoose=require('mongoose')
console.log(process.env.MONGODB_ATLAS);
mongoose.connect(process.env.MONGODB_ATLAS,{
    useNewUrlParser:true
}).then(()=>{
console.log("db connected")
}).catch((err)=>{
    console.log("not connected")
})