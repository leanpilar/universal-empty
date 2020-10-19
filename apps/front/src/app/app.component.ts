import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'universal-empty-root',
  // templateUrl: './apps/front/src/app/app.component.html',
  // styleUrls: ['./apps/front/src/app/app.component.scss'],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    // private http: HttpClient
  ) {}
}
