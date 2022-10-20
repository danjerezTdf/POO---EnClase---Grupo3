import { Examen } from "./class_Examen";
import { Pregunta } from './class_Pregunta'

class ExamenEspecial extends Examen{
    private _penalizacionRespuestainCorrecta: number;

    constructor(p_preguntas : Pregunta[], p_tema : string, p_puntajeAprobacion : number,p_penalizacionRespuestainCorrecta: number){
        super(p_preguntas, p_tema, p_puntajeAprobacion)
        this._penalizacionRespuestainCorrecta = p_penalizacionRespuestainCorrecta;	
    }

    public examenEspecial(p_tema : string, p_puntajeAprobacion : number, p_penalizacionRespuestainCorrecta: number){

    }
    public addPregunta(p_preguntas: Pregunta){
        this._preguntas.push(p_preguntas);
    }
    public getPenalizacionRespuestainCorrecta():number{
        return this._penalizacionRespuestainCorrecta;
    }
}