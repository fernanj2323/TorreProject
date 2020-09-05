const Profile = require('../../models/profiles/selectedProfile')
const profileCTRL = {};

// get profiles 
profileCTRL.getProfiles   = async ( req, res , next ) =>{
  
    const test = await Profile.find(
    
        ).exec((err, Data) =>{
            if(err){
                res.status(404).send({status:'err 404'})
            }else{ 
                if(!Data){
                    res.status(500).send({status:'err 500'})
                } else{ 
                    res.status(200).send(Data)
                }
            }
        })
}


profileCTRL.getProfileById  = async ( req, res , next ) =>{
  
    const test = await tracking.find({
        _id: req.params.id
    }).exec((err, Data) =>{
            if(err){
                res.status(404).send({status:'err 404'})
            }else{ 
                if(!Data){
                    res.status(500).send({status:'err 500'})
                } else{ 
                    res.status(200).send(Data)
                }
            }
        })
}

profileCTRL.getProfileByEmail  = async ( req, res , next ) =>{
  
    const test = await tracking.find({
        email: req.params.email  
    }).exec((err, Data) =>{
            if(err){
                res.status(404).send({status:'err 404'})
            }else{ 
                if(!Data){
                    res.status(500).send({status:'err 500'})
                } else{ 
                    res.status(200).send(Data)
                }
            }
        })
}



profileCTRL.postProfile  = async ( req, res , next ) =>{
  
    const test  = new Profile (req.body);
    await test.save((err,Data) =>{
        if (err){
            res.status(500).send({status:'error 500'})
        }else {
            if (!Data){
                res.status(404).send({status: 'error 404'})
            }else{ 
                res.status(200).send(Data);
            }
        }
    })
 
}


profileCTRL.putProfile  = async ( req, res , next ) =>{
  
    const id =  req.params.id;
    const array = req.body; 

    await Profile.findByIdAndUpdate(id, {$set: array}, {new: true}); 
    // console.log('updated');
    res.status(200).send({status: 'updated'})
}


profileCTRL.deleteProfile  = async ( req, res , next ) =>{
  
    const id =req.params.id; 
    await Profile.findByIdAndRemove(id).exec((err, Document) =>{
        if(err){
            res.status(404).send({status:'err 404'})
        }else{ 
            if(!Document){
                res.status(500).send({status:'err 500'})
            } else{ 
                res.status(200).send( Document)
            }
        }
    })
}

module.exports = profileCTRL; 

