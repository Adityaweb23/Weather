const { static } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');
const path = require('path')


const staticpath = path.join(__dirname, "../public");
const temppath = path.join(__dirname, "../templates/views");
const partialpath =path.join(__dirname,"../templates/partials")


hbs.registerPartials(partialpath);
app.use(express.static(staticpath))
app.set('view engine', 'hbs');
app.set('views', temppath);

app.get("/", (req, res) => {
    res.render('index.hbs');
})
app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("*", (req, res) => {
    res.render("404error");
})
app.listen(port, () => {
    console.log(`listning at port No. ${port}`);
})