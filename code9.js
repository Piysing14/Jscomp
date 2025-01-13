//Adding Py to strings at start and ignoring str that already have py or Py
function addingPy(str){
    if(str.includes("py") || str.includes("Py")) return str;
    else  return "Py"+str;
}
    console.log(addingPy("thon"))