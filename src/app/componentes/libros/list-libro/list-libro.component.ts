import { Component, OnInit } from '@angular/core';
import {ApiLibroService} from '../../../service/api-libro.service';

@Component({
  selector: 'app-list-libro',
  templateUrl: './list-libro.component.html',
  styleUrls: ['./list-libro.component.css']
})
export class ListLibroComponent implements OnInit {
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
