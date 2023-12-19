// code your solution here
const record= [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
]
const superbowlWin=(record)=>{
  if(record.result==="W"){
     return record.year
  }else{
     return undefined
  }
}


let results=record.find(superbowlWin)
console.log(results)


