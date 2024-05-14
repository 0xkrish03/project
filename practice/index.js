const express = require('express')
const app = express()
const port = 3000
function calculate(counter){
    let sum=0;
    for(let i=0;i<=counter;i++){
        sum=sum+i;
    }
    return sum;
}
function handleFirstRequest(req,res){
    let count=req.query.count;
        let answerobj={
            sum:calculate(count),
        }
        res.status(200).send(answerobj)
}
app.get('/handleSum',handleFirstRequest)
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)