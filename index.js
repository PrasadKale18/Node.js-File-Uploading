
const express= require('express');
const multer= require('multer');
const app=express();
const PORT=3000;

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"upload");
        },
        filename:function(req,file,cb)
        { 
            cb(null,file.filename+"-"+ Date.now() +".jpg");

        }
    })

}).single("user_one");

    


app.post("/upload",upload,(req,resp)=>{
    resp.send("file uploaded sucessfully");
});

app.listen(PORT,()=>{
    console.log("sever is running");
});