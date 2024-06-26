import express from "express";
import {
  authUser,
  getUserProfile,
  RegisterUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userControllers.js";
const router = express.Router();
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(RegisterUser).get(protect,getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put( updateUser);

export default router;
