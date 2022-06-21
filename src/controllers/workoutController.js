// In src/controllers/workoutController.js
const workoutService =require('../services/workoutService.js')
const getAllWorkOuts =(req,res)=>{
   const allworkout =workoutService.getAllWorkOuts();
   res.send("Get all workouts")       
}
       
const getOneWorkout=(req,res)=>{
   const workout =workoutService.getOneWorkout();
   res.send("Get an existing workout")       
}
       
const createNewWorkOut =(req,res)=>{
   const createWorkout = workoutService.createNewWorkout()
   res.send("create a new workout")      
}
       
const updateOneWork=(req,res)=>{
   const updateOneWork=workoutService.updateOneWorkout()
    res.send("update an exiting workout")        
}
       
const deleteOneWork=(req,res)=>{
   workoutService.deleteOneWork();
   res.send("Delete an existing workout");       
}
       
module.exports={
getAllWorkOuts,
getOneWorkout,
createNewWorkOut,
updateOneWork,
deleteOneWork       
}