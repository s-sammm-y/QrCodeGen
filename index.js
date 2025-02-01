import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs'

inquirer.prompt(
    [
        {message:'Paste Link',name:'URL'}
    ]
).then((answer)=>{
    const qrLink = answer.URL;
    var qr_png = qr.image(qrLink, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('QRCode.png'));
}).catch((err)=>{
    if(err.isTtyError){
        console.log('could not be rendered');
    }else{
        console.log('something else went wrong');
    }
})