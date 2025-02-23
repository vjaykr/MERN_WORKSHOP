const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
dotenv.config();



const app = express();
app.use(cors({
    credentials: true,
    origin:"process.env.FRONTEND_URL"
}))


app.use(express.json());
app.use(cookieParser());
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))


const PORT = 8080 || process.env.PORT;

app.get('/', (req, res) => {
    //server to client side
    res.json({message: "server is running :" + PORT });
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})