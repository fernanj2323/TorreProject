const express = require('express');
const router = express.Router();
const TorreApi = require ('../../controllers/torreApi/torreApi');



router.get('/bios/:username', TorreApi.getBioByUserName);

// router.get('/getProfileById/:id', profile.getProfileById);
// router.get('/getProfileByEmail/:id', profile.getProfileByEmail);


module.exports = router;