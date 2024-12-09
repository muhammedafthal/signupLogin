const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cookieParser = require('cookie-parser')

const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv')
connectDb();
dotenv.config();

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

let signupRouter = require('./routes/signup');
let loginRouter = require('./routes/login');
let forgetRouter = require('./routes/forget');
let otpRouter = require('./routes/otp');
let resetRouter = require('./routes/resetPassword');

app.use('/signuser', signupRouter);
app.use('/loginuser', loginRouter);
app.use('/forget', forgetRouter);
app.use('/otp_no', otpRouter);
app.use('/resetPassword', resetRouter);


app.listen(port, () => {
    console.log(`server is running on ${port}`)
});

module.exports = app;