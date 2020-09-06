const express = require('express');
const router = express.Router();
const TorreApi = require ('../../controllers/torreApi/torreApi');



router.get('/bios/:username', TorreApi.getBioByUserName);

router.post('/getPeopleByName', TorreApi.getPeopleByName);



module.exports = router;