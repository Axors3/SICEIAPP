const {Router} = require('express');
const router = Router();
const alumnos = [{"Alumno" : 'Axel David Díaz Santos', "Matricula": '15001901'},
{"Alumno":'Darling Mercedes Olvera Piña',"Matricula":'1800911'},
{"Alumno":'Oscar Raul Navarrete Parra',"Matricula":'17000'}]
router.get('/', (req,res) => res.json(alumnos));

module.exports = router;