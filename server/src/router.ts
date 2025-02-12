import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import backgroundActions from "./modules/background/backgroundActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";
import seasonActions from "./modules/season/seasonActions";

import path from "node:path";
import multer from "multer";
import type { FileFilterCallback } from "multer";

const storage = multer.diskStorage({
  // exemple:  https://github.com/expressjs/multer/blob/master/doc/README-fr.md#diskstorage

  destination: (req, file, cb) => {
    if (file.mimetype.includes("image")) {
      cb(null, path.join(__dirname, "..", "public", "assets", "images"));
    }
  },
  filename: (req, file, callback) => {
    // callback est parfois ecrit cb
    callback(null, `${Date.now()}-${file.originalname}`); // GENERER un nom aleatoire avec la date en millisecondes + lenom du fichier connu par maulter
  },
});

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  if (file.fieldname === "file") {
    file.mimetype.includes("image") ? cb(null, true) : cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter }).single("file");

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.get("/api/backgrounds", backgroundActions.browse);
router.get("/api/background/:id", backgroundActions.read);
router.post("/api/background", upload, backgroundActions.add);
router.put("/api/background/:id", upload, backgroundActions.edit);
router.delete("/api/background/:id", backgroundActions.remove);

router.get("/api/seasons", seasonActions.browse);
router.get("/api/backgrounds-season/:id", seasonActions.read);
//vient chercher tous les background d'une catégorie à partir de l'id de la saison

export default router;
