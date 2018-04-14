import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})

export class EasyComponent {
  gif : any = {};
  pregunta: any;
  image : boolean = false;
  configUrl = 'https://yesno.wtf/api';
  constructor(private http: HttpClient) {
    //this.showConfig();
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  showConfig() {
    this.getConfig().subscribe(data => {
      this.gif.image = data['image'];
      this.gif.answer = data['answer'];
    });
  }

  recibir_respuesta(){
    this.showConfig();
    this.pregunta = '';
    this.image = true;
  }
}
