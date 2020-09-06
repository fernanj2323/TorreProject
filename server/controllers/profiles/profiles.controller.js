const Profile = require('../../models/profiles/selectedProfile')
const profileCTRL = {};

// get profiles 
profileCTRL.getUsersSelected   = async ( req, res , next ) =>{
  
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


profileCTRL.getUsersSelectedById  = async ( req, res , next ) =>{
  
    const test = await Profile.find({
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




profileCTRL.postUserSelected  = async ( req, res , next ) =>{
    
   
    const test  = new Profile (req.body);

    // antes debemos consultar si ya existe, por user Id 
    const lastTest = await Profile.find(
    {
        publicId: req.body.publicId
    })


    console.log('lastest', lastTest)
    if (!lastTest.length){
        console.log('no existe previa', lastTest);
        await test.save();
        console.log(' created')
        res.status(200).send({
            status: 200
        });
    }else{
        res.status(300).send({status:'error 300'})
    }
 
}

profileCTRL.save  = async ( req, res , next ) =>{

     
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

profileCTRL.putUserSelected  = async ( req, res , next ) =>{
    console.log('putUserSelected');
    console.log(req.params.id);
    console.log(req.body);

    const id =  req.params.id;
    const array = req.body; 

    await Profile.findByIdAndUpdate(id, {$set: array}, {new: true}); 
    // console.log('updated');
    res.status(200).send({status: 200})
}


profileCTRL.deleteUserSelected  = async ( req, res , next ) =>{
     console.log('deleteUserSelected')
    const id =req.params.id; 
    await Profile.findByIdAndRemove(id).exec((err, Document) =>{
        if(err){
            res.status(404).send({status:'err 404'})
        }else{ 
            if(!Document){
                res.status(500).send({status:'err 500'})
            } else{ 
                res.status(200).send({status: 200})
            }
        }
    })
}

module.exports = profileCTRL; 

