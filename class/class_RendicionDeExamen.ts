import { Examen } from "./class_Examen";

export class RendicionDeExamen {
    private _examen: Examen;
    private _respuestas: Array <number>;

    constructor(p_examen: Examen, p_respuestas: Array <number>){
        this._examen = p_examen;
        this._respuestas = p_respuestas;
    }
    public rendicionDeExamen(p_examen: Examen, p_respuestas: Array<number>){

    }
    public getExamen(): Examen{
        return this._examen;
    }
    public estaAprobado(): boolean{
        /* cómo traigo los valores??
        let values = [2, 56, 3, 41, 0, 4, 100, 23];
        let sum = values.reduce((previous, current) => current += previous);
        let _promedio = sum / values.length;
*/
        if (_promedio  > 7) {
            return true;
            } else {
                return false;
            }
        }

}
