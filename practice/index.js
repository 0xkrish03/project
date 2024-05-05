const express = require('express')
const app = express()
const port = 3000
function calculate(counter){
    let sum=0;
    for(let i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;
}
function handleFirstRequest(req,res){
    let s=calculate(100);
    console.log(s)
    let ans='The answer is='+s
    res.send(ans)
}

app.get('/',handleFirstRequest)
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)