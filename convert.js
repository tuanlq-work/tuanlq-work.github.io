var fs = require('fs')

fs.readFile('quotes.txt','utf-8',function(err,data){
    let listcontent = data.split("\r\n\r\n")
    let listquote = [];
    let reg = /“.+”/
    let regx = /\w[a-zA-Z0-9_\s\.-]+/
    
    for(let i =0;i < listcontent.length;i++){
        
        let result = listcontent[i].match(reg)

        // I got the quote
        let quoteContent = result[0].substring(1,result[0].length -1)
        
        let a = quoteContent.length + 7
        let authorContent = listcontent[i].substring(a).match(regx)[0]
    
        
        let obj = {
            quote: quoteContent,
            author: authorContent
        }
        listquote.push(obj)
    }
    
    for(let i =0;i<listquote.length;i++){
        console.log(listquote[i])
        console.log(",")
    }
})
