import { RendicionDeExamen } from './class_RendicionDeExamen'
import { Examen } from './class_Examen'


export class Alumno {
    private _examenesRendidos: RendicionDeExamen[];
    private _nombre: string;
    private _DNI: number;
    
    constructor(p_ExamenesRendidos: RendicionDeExamen[],p_nombre: string,p_DNI: number) {
        this._examenesRendidos = p_ExamenesRendidos;
        this._nombre = p_nombre;
        this._DNI = p_DNI;

    }
    public setAlumno(p_nombre:string,p_DNI:number){
        this._nombre=p_nombre;
        this._DNI=p_DNI;
    }
    public getNombre():string{
        return this._nombre;
    }
    public getDNI():number{
        return this._DNI;
    }
    public rendirExamen(p_examen:Examen,p_respuestas:Array<number>,):boolean{
        for(let i: number = 0; i< this.examenesRendidos.length; i++){
            if(p_examen === this.examenesRendidos[i]){
               this.examenesRendidos[i].rendicionDeExamen(p_examen, p_respuestas);
            console.log(`El alumno ${this.nombre} ya rindió el examen`);
            return true;
        } else {
            console.log(`El alumno ${this.nombre} no rindió el examen`);
            return false;
    }

    }

