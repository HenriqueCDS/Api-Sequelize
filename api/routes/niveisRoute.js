const { Router } = require('express')
const NiveisController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NiveisController.pegaTodosOsNiveis);


module.exports = router