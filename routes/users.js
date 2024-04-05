const express=require('express');
const router=express.Router();
const {getAllUsers,UserDetails,CreateGet,createPost,DeleteUser}=require('../controllers/userController');

router.get("/create",CreateGet );
router.get("/",getAllUsers);
router.post("/",createPost);
router.get("/:id", UserDetails);
router.delete("/:id",DeleteUser);

module.exports=router;
