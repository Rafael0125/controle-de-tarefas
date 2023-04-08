import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  @Output() public exibirPainel :EventEmitter<string> = new EventEmitter<string>()

  constructor(){ }

  ngOnInit(): void {
    
  }

  public exibirPainelCadastro(): void{
    //console.log('Chegamos até aqui')
    this.exibirPainel.emit('cadastro')
  }



}
