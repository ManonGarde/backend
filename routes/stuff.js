const express = require("express");

//permet de créer des routeurs séparés pour chaque route principale
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

module.exports = router;

// Récupération de la liste de Things en vente : affichage des objets en vente crée
router.get("/", auth, stuffCtrl.getAllThings);

// Enregistrement des Things dans la base de données : enregistrement d'un objet dans la bdd
router.post("/", auth, multer, stuffCtrl.createThing);

// Récupération d'un Thing spécifique : pour afficher la page dun objet spécifique (description)
router.get("/:id", auth, stuffCtrl.getOneThing);

// Mettez à jour un Thing existant : mise a jour d'un objet
router.put("/:id", auth, multer, stuffCtrl.modifyThing);

// Suppression d'un Thing
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
