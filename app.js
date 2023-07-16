const express = require('express');
const app = express();
const { loadContact, findContact } = require('./utils/contacts');
const port = 4004
const expressLayout = require('express-ejs-layouts');
app.set('view engine','ejs')
app.use(expressLayout)

app.use(express.static('public')) 

const products = [
    {
        nama : 'Kopi Jahe mini',
        desc : 'Isi 100gram bubuk kopi jahe'
    },
    {
        nama : 'Kopi Jahe Sedang',
        desc : 'Isi 300gram bubuk kopi jahe'
    },
    {
        nama : 'Kopi Jahe Besar',
        desc : 'Isi 700gram bubuk kopi jahe'
    }
]

app.get('/',(req,res)=>{
    res.render('home',{
    layout : 'layouts/layout',
    nama :'Adi kurniawan',
    title :'Contact-App',
    products,
}) 
})
app.get('/about',(req,res)=>{
    res.render('about',{
        layout : 'layouts/layout',
        title:'Contact-App/about'
    }) 
})

app.get('/contact',(req,res)=>{
    const contacts = loadContact()
    res.render('contact',{
        layout : 'layouts/layout',
        title:'Contact-App/contact',
        contacts
    }) 
})

app.get('/contact/:nama',(req,res)=>{
    const contact = findContact(req.params.nama)
    res.render('detail',{
        layout : 'layouts/layoutDetail',
        title: "detail page",
        contact
    }) 
})

app.use('/',(req,res)=>{
   res.render('notFound',{
    layout : 'layouts/layout',
    title: "Contact-App/notfound"
   })
})

app.listen(port,()=>console.log(`<=== running in http//localhost:${port}`))