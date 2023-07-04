const fs=require('fs');
const pug = require('pug');

let users=[];

fs.readdirSync('users').forEach((filename)=>
{    
    let userData=JSON.parse(fs.readFileSync('users/' + filename,'utf-8')); 

    users.push({        
        ...userData
    })
   
});

function buildUserList()
{
    let data ={        
        users:users        
    };
    let html=pug.renderFile('layout/content.pug',data);
    fs.writeFileSync('index.html',html);    
}



buildUserList();
