const rootDir = require('./util/path')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app  = express();



// setting default engint as ejs
app.set('view engine', 'ejs');
// setting folder of views
app.set('views', 'views');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const homeRoutes = require('./routes/home')
const errorRoutes = require('./routes/error')

// register middleware to parse bodies and call next middleware
app.use(bodyParser.urlencoded({extended: false}))

// Adding static files (css)
app.use(express.static(path.join(rootDir, 'public')))

app.use(adminRoutes);
app.use(shopRoutes);
app.use(homeRoutes);
app.use(errorRoutes);

app.listen(3000)