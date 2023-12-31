const { Router } = require('express')
const NiveisController = require('../controllers/NivelController')

const router = Router()


router.get('/niveis', NiveisController.pegaTodosOsNiveis);
router.get('/niveis/:id', NiveisController.pegaUmNivel);
router.post('/niveis', NiveisController.criaNivel);
router.patch('/niveis/:id', NiveisController.atualizaNivel);
router.delete('/niveis/:id', NiveisController.apagaNivel);
router.post('/niveis/restaura/:id', NiveisController.restauraNivel);

module.exports = router