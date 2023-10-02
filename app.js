const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app  = express();



// setting default engint as ejs
app.set('view engine', 'ejs');
// setting folder of views
app.set('views', 'views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require('./util/path')

// register middleware to parse bodies and call next middleware
app.use(bodyParser.urlencoded({extended: false}))

// Adding static files (css)
app.use(express.static(path.join(rootDir, 'public')))

app.use(adminData.router);
app.use(shopRoutes);

app.use('/home', (req, res, next) => {
  res.render('home', {
    title: "Home",
    path: '/home'
  })
})

app.use((req, res, next) => {
  console.log(req.method, req.url)
  res.status(404).render('404', { title: 'Page Not Found!!!!'})
})

app.listen(3000)