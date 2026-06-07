const {ReadData,WriteData} = require('../utils/filehandler')
const {generateID} = require('../utils/idgen')

function checkhealth(){
    console.log("server is up and running ")
}

function findone(req,res){
    data = ReadData()
    let result = data.find(students=>students.id == req.params.id)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).json({ error: "ID not found, please check the entered ID" })
    }
}


function writeone(req,res){
    data = ReadData()
    name = req.body.name
    course  = req.body.course

    if (name == "" || course == ""){
        res.status(400).json({ error: "Name and course cannot be empty" })
    }else{
        id = generateID()
        data.push({"id":id , "name":name, "course":course})
        newdata = data
        WriteData(newdata)
        res.status(201).json({ message: "Data added successfully", student: { id, name, course } })
    }
}

function Deleteone(req,res){

    let data = ReadData()

    check = data.filter(
        student => student.id === req.params.id
    )

    if(check.length === 0){
        res.status(404).json({
            error: "Student doesn't exist, please check the entered ID"
        })
        return
    }

    newdata = data.filter(
        student => student.id !== req.params.id
    )

    WriteData(newdata)

    res.status(200).json({
        message: "Entry deleted successfully"
    })
}


function Updateone(req, res) {
    let data = ReadData()
    const result = data.find(student => student.id === req.params.id)
    if (!result) {
        return res.status(404).json({ error: "Student not found" })
    }
    if (req.body.id) {
        return res.status(400).json({ error: "Cannot update ID" })
    }
    const newdata = data.map(student => {
        if (student.id === req.params.id) {
            return {
                id: student.id,
                name: req.body.name || student.name,
                course: req.body.course || student.course
            }
        }
        return student
    })
    WriteData(newdata)
    const updated = newdata.find(student => student.id === req.params.id)
    res.status(200).json({ message: "Student updated successfully", student: updated })
}


module.exports  =  {checkhealth,findone,writeone,Deleteone,Updateone};