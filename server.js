const path = require('path')
const cors  = require('cors')
const express = require("express")
const app = express()

const userRoutes = require("./routes/routes")



app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"public")))

app.use(userRoutes)



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



