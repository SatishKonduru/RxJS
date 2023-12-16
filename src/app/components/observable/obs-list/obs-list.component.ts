import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obs-list',
  templateUrl: './obs-list.component.html',
  styleUrls: ['./obs-list.component.css']
})
export class ObsListComponent {
  
  constructor(private _router: Router){}
  fromEvent(){
    this._router.navigate(['/observable/fromEvent'])
  }

  interval(){
    this._router.navigate(['/observable/interval'])
  }

  ofFrom(){
    this._router.navigate(['/observable/ofFrom'])
  }
}
