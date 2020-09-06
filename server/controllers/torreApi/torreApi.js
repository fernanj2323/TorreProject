const axios = require('axios')
const apiTorre = {};



apiTorre.getBioByUserName   = async ( req, res , next ) =>{
  

    const username =  req.params.username; 

        try { 
            const resp = await axios.get('https://torre.bio/api/bios/'+ username);
            
            res.status(200).send({
                           data: resp.data,
                           status: 200
                       })
        } catch (err) {
            res.status(300).send({
                
                status: 300
            })
            console.error(err);
        }

}


// https://search.torre.co/people/_search/?[name=$fernando&size=50

apiTorre.getPeopleByName   = async ( req, res , next ) =>{


    const name =  req.body.name 

    params = {
        
        '[name': '$fernando',
        size: 10

      }


        try { 
            const resp = await axios.post('https://search.torre.co/people/_search/', params);
            
         
            res.status(200).send({

                           data: resp.data,
                           status: 200
                       })
        } catch (err) {
         
            res.status(300).send({
                
                status: 300
            })
          
        }

}



// apiTorre.getProfileById  = async ( req, res , next ) =>{
  
 
// }

// apiTorre.getProfileByEmail  = async ( req, res , next ) =>{
  
 
// }



// apiTorre.postProfile  = async ( req, res , next ) =>{
 
 
// }



module.exports = apiTorre; 

