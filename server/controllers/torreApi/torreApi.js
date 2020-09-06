const axios = require('axios')
const apiTorre = {};



apiTorre.getBioByUserName   = async ( req, res , next ) =>{
  
 

    console.log('feching ',  req.params.username)
    const username =  req.params.username; 

        try {
            const resp = await axios.get('https://torre.bio/api/bios/'+ username);
            console.log(resp.data);
            res.status(200).send({
                           data: resp.data,
                           status: 200
                       })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }

}



// axios.get('https://torre.bio/api/bios/'+ username).exec((err, Data) =>{
//     if(err){
//         res.status(404).send({status:'err 404'})
//     }else{ 
//         if(!Data){
//             res.status(500).send({status:'err 500'})
//         } else{ 
//             console.log(data)
//             res.status(200).send(Data)
//         }
//     }
// })

// }

// apiTorre.getProfileById  = async ( req, res , next ) =>{
  
 
// }

// apiTorre.getProfileByEmail  = async ( req, res , next ) =>{
  
 
// }



// apiTorre.postProfile  = async ( req, res , next ) =>{
 
 
// }



module.exports = apiTorre; 

