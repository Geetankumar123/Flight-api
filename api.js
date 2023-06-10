   const router=  require("express").Router()
   const Flightprice=  require("../Models/Flightprice")
       router.get("/",(req,res)=>{
          res.render("flightform.ejs")
       })

        router.post("/flightinsert",(req,res)=>{
              const{source,To,Departure}= req.body
                 const record=new Flightprice({
                    source:source,
                    destination:To,
                      Date:Departure
                  })
                   record.save()
                    res.redirect("/show")
        })
         
          router.get("/show",async(req,res)=>{
            const record= await Flightprice.find()
                 
              res.render("show.ejs",{record})
          })
      
    module.exports=router