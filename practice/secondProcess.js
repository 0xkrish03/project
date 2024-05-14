function logResponseBody(jsonbody){
    console.log(jsonbody)
}
function callbackFn(result){
    result.json().then(logResponseBody)
}
var sendobj={
    method:"Get"
}
fetch("http://localhost:3000/handleSum?count=100",sendobj).then(callbackFn)
