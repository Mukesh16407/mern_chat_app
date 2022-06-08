const express=require("express")
const dotenv=require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes');

dotenv.config();

connectDB();
const app=express()
app.use(express.json()); // to except json data;



app.get('/',(req,res)=>{
    res.send("API is Running")
});

// app.get('/api/chat', (req,res)=>{
//     res.send(chats)
// });
// app.get('/api/chat/:id', (req,res)=>{
//     const singleChat =chats.find((c)=>
//         c.id === req.params.id)
//     res.send(singleChat)
// });

app.use('/api/user',userRoutes)

const PORT=process.env.PORT||5000
app.listen(PORT,console.log(`Running on port ${PORT}`))