const express = require('express');
const router = express.Router();
const profile = require ('../../controllers/profiles/profiles.controller');



router.get('/getUsersSelected', profile.getUsersSelected);
router.post('/postUserSelected', profile.postUserSelected);
router.put('/putUserSelected/:id', profile.putUserSelected);
router.delete('/deleteUserSelected/', profile.deleteUserSelected);


module.exports = router;