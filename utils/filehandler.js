const fs  = require("fs");

function ReadData() {
    const data = fs.readFileSync('./students.json', 'utf8')
    return JSON.parse(data)
}

function WriteData(newdata){
    newdata = JSON.stringify(newdata,null,2)
    const wdata  =  fs.writeFileSync('./students.json',newdata)
}
module.exports = {ReadData,WriteData}
