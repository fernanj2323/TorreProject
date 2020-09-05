const express = require('express');
const router = express.Router();
const profile = require ('../../controllers/profiles/profiles.controller');



router.get('/getProfiles', profile.getProfiles);
router.get('/getProfileById/:id', profile.getProfileById);
router.get('/getProfileByEmail/:id', profile.getProfileByEmail);

router.post('/postProfile/', profile.postProfile);
router.put('/putProfile/:id', profile.putProfile);
router.delete('/deleteProfile/:id', profile.deleteProfile);

module.exports = router;