const express = require('express');
const connectDB = require('./config/db')

const app = express();
connectDB();

app.get('/',(req,res) => res.send('running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/category', require('./routes/api/category'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started ' + PORT));