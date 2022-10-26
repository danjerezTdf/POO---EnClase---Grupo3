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
        this._tema = p_tema;
        this._puntajeAprobacion = p_puntajeAprobacion;
    }
    public addPregunta (p_preguntas : Pregunta){
        this._preguntas.push(p_preguntas);
    }
    public equals (o:object):boolean {
        let aux=0;
        for(let i:number=0;i<this._preguntas.length;i++){
            if(this._preguntas[i].esCorrecta(o[i])){  
                aux=aux+this._preguntas[i].getPuntaje();
            }
        }if(aux>=this._puntajeAprobacion){
            return true;
        }else{
            return false;
        }
    } 
    public getTema():string {
        return this._tema
    }
}