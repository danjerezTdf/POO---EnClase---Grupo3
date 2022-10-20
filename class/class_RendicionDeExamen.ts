import { Examen } from "./class_Examen";

export class RendicionDeExamen {
    private _examen: Examen;
    private _respuestas: Array <number>;

    constructor(p_examen: Examen, p_respuestas: Array <number>){
        this._examen = p_examen;
        this._respuestas = p_respuestas;
    }
    public rendicionDeExamen(p_examen: Examen,p_respuestas:Array<number>){

    }
    public getExamen():Examen{
        return this._examen;
    }
    public estaAprobado ():boolean{
        return false
    }

}