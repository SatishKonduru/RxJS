import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { UitilityService } from 'src/app/services/uitility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent {
  responseMsg : any = {
    x: '',
    y: '',
    z: ''
  }
  constructor(private _router: Router, private _utilityService: UitilityService){}
  back(){
    this._router.navigate(['/observable'])
  }

  //of with arguments
  ofWithArguments(){
    const obs$ = of('Angular', 'React', 'Vue')
    obs$.subscribe(res => {
      this._utilityService.display(res,'ofWithArguments')
    })
  }
 
  //of with Object
  ofWithObject(){
    const obs$ = of({x:'Angular', y:'React', z: 'Vue'})
    obs$.subscribe(res => {
      this.responseMsg = res
    })
  }
  

  //from with Array
  fromArray(){
    const obs$ = from(['Angular','React','Vue'])
    obs$.subscribe(res => {
      this._utilityService.display(res, 'fromWithArray')
    })
  }
  

//from with Promise
promise = new Promise((resolve) => {
  setTimeout(()=>{
    resolve("Promise Resolved.")
  }, 3000)
})
fromPromise(){
  const obs$ = from(this.promise)
  obs$.subscribe(res => {
    this._utilityService.display(res, 'fromWithPromise')
  })
}


//from with String
fromString(){
  const obs$ = from("RSK Helpline")
  obs$.subscribe(res => {
    this._utilityService.display(res, 'fromWithString')
  })
}



}
