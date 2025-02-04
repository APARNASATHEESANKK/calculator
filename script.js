const displayContent=(data)=>{
    output.value+=data
}

const clearAllContent=()=>{
    output.value=""
    output.placeholder="0"
}
const clearLast=()=>{
    output.value=output.value.slice(0,-1);  //slice method is used to delete the last data '-1' means the number on last
}
const showResult=()=>{
    
  try{
    console.log("try block")
    output.value=eval(output.value)
  }
  catch(err){
    console.log(err);
    output.value=""
    output.placeholder="invalid expression"
  }
  finally{
    console.log("finally block");
    console.log("task completed");
  }
}

    
    
