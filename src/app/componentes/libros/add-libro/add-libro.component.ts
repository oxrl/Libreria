import { Component, OnInit } from '@angular/core';
import {ApiLibroService} from '../../../service/api-libro.service';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {
  restItems: any;
  constructor( private librorService: ApiLibroService) {

  }

  ngOnInit() {
    this.librorService.getLibros()
    .subscribe( (data) => {
      console.log(data);
      this.restItems = data;
    });
  }

}
