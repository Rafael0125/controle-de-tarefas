import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "descricaoReduzida"
})
export class DescricaoReduzida implements PipeTransform{

    transform(texto: any, trucarEm:number, iniciarEm:number): any {

        if(texto.length > trucarEm){
            return texto.substring(iniciarEm, trucarEm) + "...";
        }else{
            return texto;            
        }
    }

}