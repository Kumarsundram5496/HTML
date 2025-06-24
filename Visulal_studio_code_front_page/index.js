const Crypto = require('crypto');
    var i='100xdevs'+'12345';
    var check=0;
    
    while (true){
     var hash =Crypto.createHash('sha256').update(i.toString()).digest('hex');
        if(hash.startsWith('00000')){
           check=1;
            console.log(i);
            break;
           }
        else{
            i++
        }
    }