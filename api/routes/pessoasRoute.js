const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);


router.post('/pessoas', PessoaController.criaPessoa);
router.patch('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.post('/pessoas/restaura/:id', PessoaController.retauraPessoa);

router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.get('/pessoas/matricula/:TurmaId/confirmadas', PessoaController.pegaMatriculasPorTurmas);
router.get('/pessoas/matricula/lotada', PessoaController.pegaMatriculasLotadas);

router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
router.post('/pessoas/:estudanteId/matricula/', PessoaController.criaMatricula);

router.patch('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);
module.exports = router