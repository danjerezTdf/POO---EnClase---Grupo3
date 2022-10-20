import { Pregunta } from './class_Pregunta'

export class Examen {
    protected _preguntas : Pregunta[];
    protected _tema : string;
    protected _puntajeAprobacion : number;

    constructor (p_preguntas : Pregunta[], p_tema : string, p_puntajeAprobacion : number) {
        this._preguntas= p_preguntas;
        this._tema = p_tema;
        this._puntajeAprobacion = p_puntajeAprobacion;
    }

    public examen (p_tema:string,p_puntajeAprobacion:number){

    }
    public addPregunta (p_preguntas : Pregunta){
        this._preguntas.push(p_preguntas);
    }
    public equals (o:object):boolean {
        return false
    } 
    public getTema():string {
        return this._tema
    }
}