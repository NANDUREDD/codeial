const express=require('express');
const router=express.Router();
const postcontroller=require('../controllers/post_controller');
router.get('/post',userController.profile);
module.exports=router;