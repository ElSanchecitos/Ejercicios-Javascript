//console.log("Hello world")

function doubles_lista(array){

    const doubles_result = []
    var result 
    for (ele in array){
        //console.log(ele)
        //console.log(array[ele])
        result = array[ele] * 2 
        doubles_result.push(result)
    }
    return doubles_result
}

console.log(doubles_lista([1,2,3,4,5]))