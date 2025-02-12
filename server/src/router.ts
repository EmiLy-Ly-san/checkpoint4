import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import backgroundActions from "./modules/background/backgroundActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.get("/api/backgrounds", backgroundActions.browse);
router.get("/api/background/:id", backgroundActions.read);
router.post("/api/background", backgroundActions.add);
// router.put("/api/background/:id", videoActions.edit);

export default router;
