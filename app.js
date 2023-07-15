const express = require('express');
const app = express();
const port = 4004
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
app.set('view engine','ejs')

//Third Party middleware
app.use(expressLayout)
app.use(morgan('dev'))

// Aplication level middleware
// app.use((req,res,next)=>{
//     console.log("Date now : "+ Date.now())
//     next()
// })

//Built-in level middleware
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
    res.render('contact',{
        layout : 'layouts/layout',
        title:'Contact-App/contact'
    }) 
})

app.use('/',(req,res)=>{
   res.render('notFound',{
    layout : 'layouts/layout',
    title: "Contact-App/notfound"
   })
})

app.listen(port,()=>console.log(`<=== running in http//localhost:${port}`))