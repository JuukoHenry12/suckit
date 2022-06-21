const DB =require("./db.json")
const getAllWorkOuts=()=>{
  return DB.workouts;        
}
module.exports ={getAllWorkOuts};