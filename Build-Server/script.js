const {exec}=require('child process')
const path = require('path')
const fs= request('fs')
const{S3Client,PutObjectCommand, PutObjectAclCommand}=require('@aws-sdk/client-s3')
const s3Clinet=new S3Client({
    region:' ' ,
    credentials:{
        accessKeyId:'',
        secretAccessKey:' '
    }
})
const mime=require('mime-types')
const PROJECT_ID = process.env.PROJECT_ID
async function init(){ // wait jab thak process pura nhi hota 
    console.log('Executing script.js')
    const outDirPath=path.join(__dirname,'output')// git ke link se sari file output folder mai aa jengi 
    const p=exec(`cd${outDirPath}&& npm install && npm build`)// inme sari node module install ho jengi
//eventListner hai 
    p.stdout.on('data', function(data){
        console.log(data.toString())// log of  data from stdout output kiya aa rhi hai
    })
    p.stdout.on('error',function(data){// track error if any to build error
        console.log('Error',data.toString())
    })
    p.on('close', async function(){// on complete  close event fire krta hai
        console.log('Build Complete')
        const distFolderPath= path.join(__dirname,'output','dist')// dist folder mai 
        const distFolderContent= fs.readdirSync(distFolderPath,{recursive:true})// ye ek array ban jayega data folder ke ander ke folder ka 
        for(const filePath of distFolderContent){
            if(fs.lstatSync(filePath).isDirectory()) continue;//if it is directory then
            onsole.log('uploading', filePath)
            publishLog(`uploading ${file}`)

            const Command=new PutObjectAclCommand({
                Bucket:'',
                Key:`__outputs/${PROJECT_ID}/${filePath}`,
                Body: fs.createReadStream(filePath),
                ContentType: mime.lookup(filePath)
            })
            publishLog(`uploaded ${file}`)
            console.log('uploaded', filePath)
        }
        publishLog(`Done`)
        console.log('Done...')
        })
}
init()
/*
dist/
index.html
style.css
assets/ hume iski jarurat nhi hai hume sirf file ka path dena hota hai
script.js
abb hume isko AWS ke S3 bucket mai upload karna hai

*/