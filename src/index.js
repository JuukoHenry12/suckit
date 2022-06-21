const express =require("express")
const v1Router=require("./v1/routes/workoutService")
const app =express()

const PORT =process.env.PORT || 3000
 
// For testing purpose
app.get("/",(req,res)=>{
   res.send("<h2>its working!</h2>")       
})

//** routes */
app.use('/api/v1',v1Router);

app.listen(PORT,()=>{
    console.log(`APL is listening on port ${PORT}`)      
})