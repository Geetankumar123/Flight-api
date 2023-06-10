  const express= require("express")
     
      const app= express()
        app.use(express.urlencoded({extended:false}))
     
        const flightRouter= require("./Routers/api")
        
            const mongoose= require("mongoose")
            mongoose.connect("mongodb://127.0.0.1:27017/Flightprice")

        

      app.use(flightRouter)
       app.set("view engine","ejs")
        app.use(express.static("public"))
         app.listen(5000,()=>{console.log("server is running")})