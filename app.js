const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./src/routes/index');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine ('hbs', exphbs({extname:".hbs"}));
// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
app.use('/', router);

// app.engine("handlebars", engine({ defaultLayout: "main" }));



app.listen(port, ()=> {
    console.log(`The server is running on port ${port}`)
})