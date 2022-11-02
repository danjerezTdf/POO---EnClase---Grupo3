import { Examen } from "./class_Examen";

export class RendicionDeExamen {
    private _examen: Examen;
    private _respuestas: Array <number>;

    constructor(p_examen: Examen, p_respuestas: Array <number>){
        this._examen = p_examen;
        this._respuestas = p_respuestas;
    }
    public rendicionDeExamen(p_examen: Examen, p_respuestas: Array<number>){
        if (p_examen === this._examen) {
            for (let i: number = 0; i < p_respuestas.length; i++) {
                this._respuestas.push(p_respuestas[i]);
                console.log(`El examen ${this._examen} se completó exitosamente`);
        } else {
                console.log(`El examen ${this._examen} no tiene respuestas`);
               }
        }
    }
    public getExamen(): Examen{
        return this._examen;
    }
    public estaAprobado(): boolean{
        if (this._examen.equals() === true) {
            console.log(`El alumno aprobó el ${this._examen}`);
            return true;
        } else {
            console.log(`El alumno desaprob{o el ${this._examen}`);
            return false;
        }
    }
}
