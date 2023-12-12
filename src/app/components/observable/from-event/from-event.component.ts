import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent {
constructor(private _router: Router){}
back(){
  this._router.navigate(['/observable'])
}

fromEvent(){
  
}
}
