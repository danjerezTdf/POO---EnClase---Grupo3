import { Alumno } from './class/class_Anumno'
import { Examen } from './class/class_Examen'
import { ExamenEspecial } from './class/class_ExamenEspecial'
import { Pregunta } from './class/class_Pregunta'
import { RendicionDeExamen } from './class/class_RendicionDeExamen'

let ask1:Pregunta = new Pregunta ("consigna1", "opciones1", 2, 2);
let ask2:Pregunta = new Pregunta ("consigna2", "opciones2", 4, 2);
let ask3:Pregunta = new Pregunta ("consigna3", "opciones3", 3, 2);
let ask4:Pregunta = new Pregunta ("consigna4", "opciones4", 4, 2);
let ask5:Pregunta = new Pregunta ("consigna5", "opciones5", 5, 2);

let ListPreguntas = [ask1, ask2, ask3, ask4, ask5];

let examenUno: Examen = new Examen (Listpreguntas-ver si acá va con corchtes o no-, "matemáticas", 6)