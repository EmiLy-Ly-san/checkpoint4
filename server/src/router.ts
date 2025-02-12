import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import backgroundActions from "./modules/background/backgroundActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";
import seasonActions from "./modules/season/seasonActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.get("/api/backgrounds", backgroundActions.browse);
router.get("/api/background/:id", backgroundActions.read);
router.post("/api/background", backgroundActions.add);
router.put("/api/background/:id", backgroundActions.edit);
router.delete("/api/background/:id", backgroundActions.remove);

router.get("/api/seasons", seasonActions.browse);
router.get("/api/backgrounds-season/:id", seasonActions.read);
//vient chercher toutes les videos d'une catégorie à partir de l'id de la saison

export default router;
