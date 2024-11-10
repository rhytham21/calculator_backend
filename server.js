const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    try {
        res.status(200).json({success: true, message: "Base api hit successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
})

app.post('/add', (req, res)=>{
    try {
        let operand1 = req.body.operand1;
        let operand2 = req.body.operand2;
        let result = operand1+operand2;
        res.status(200).json({success: true, result: result})
    } catch (error) {
        
    }
})

app.post('/subtract', (req, res)=>{
    try {
        let operand1 = req.body.operand1;
        let operand2 = req.body.operand2;
        let result = operand1-operand2;
        res.status(200).json({success: true, result: result})
    } catch (error) {
        
    }
})

app.post('/divide', (req, res)=>{
    try {
        let operand1 = req.body.operand1;
        let operand2 = req.body.operand2;
        let result = operand1/operand2;
        res.status(200).json({success: true, result: result})
    } catch (error) {
        
    }
})

app.post('/multiply', (req, res)=>{
    try {
        let operand1 = req.body.operand1;
        let operand2 = req.body.operand2;
        let result = operand1*operand2;
        res.status(200).json({success: true, result: result})
    } catch (error) {
        
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
