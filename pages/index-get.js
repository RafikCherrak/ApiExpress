'use strict'
/*eslint-env node, es6 */
const {readFile} =require('fs')
const {promisify}= require("util")
const readFileAsync = promisify(readFile)
const ReadOption = {encoding:'utf-8'}

module.exports = async() => {
    //récupérer le contenu du fichier indexjs
    const contenu = await  readFileAsync("C:/Users/user/Desktop/dossier étoile/SiteRaf/raf/monS.html" , ReadOption)
    //retourné la page html
    return contenu
}