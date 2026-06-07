const express  = require('express')
const router = express.Router()
const {checkhealth,findone,writeone,Deleteone,Updateone} = require('../controllers/controllers')
const {ReadData} =  require('../utils/filehandler')





// =========================
// Health Check
// =========================

router.get("/", checkhealth)


// =========================
// Student Routes
// =========================

router.get("/students", (req, res) => {
    const students = ReadData()
    res.send(students)
})

router.get("/students/:id", (req, res) => {
    findone(req, res)
})

router.post("/students", (req, res) => {
    writeone(req, res)
})

router.put("/students/:id", (req, res) => {
    Updateone(req, res)
})

router.delete("/students/:id", (req, res) => {
    Deleteone(req, res)
})


module.exports = router;