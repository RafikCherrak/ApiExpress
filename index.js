const express = require('express');
const app = express()
const PORT = 6300;
app.use(express.json()) // for parsing application/json



const generatePage = require('./pages/index-get.js')


//Retourné le html
app.get( '/', async (req, res) => {
const indexHtml = await generatePage()
res.send(indexHtml);
})

//Retourné les image
app.use( "/img", express.static("C:/Users/user/Desktop/dossier étoile/SiteRaf/raf/img") )
//Retourné le style
app.use( "/css", express.static("C:/Users/user/Desktop/dossier étoile/SiteRaf/raf/css/"))
app.use( "/raf", express.static("C:/Users/user/Desktop/dossier étoile/SiteRaf/raf/style.css"))

app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT);
})
