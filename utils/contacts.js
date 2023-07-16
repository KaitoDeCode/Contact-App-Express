const fs = require('fs');

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const dataPath = `${dirPath}/contacts.json`
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}

const loadContact = () =>{
    const flBuffer = fs.readFileSync(dataPath,'utf-8')
    const contacts = JSON.parse(flBuffer)
    return contacts
}

const findContact = (nama) =>{
 const contacts = loadContact()
 const contact = contacts.find(
    (contact)=> contact.nama.toLowerCase() === nama.toLowerCase()
 )
 return contact
}

module.exports={loadContact,findContact}
