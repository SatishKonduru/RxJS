import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent {
  intervalResMsg : any;
  fromResMes: any = {
    name: '',
    skill: ''
  }
  ofResMsg : any;
  constructor(private _router: Router){}
  back(){
    this._router.navigate(['/observable'])
  }
  //with Interval
  withInterval(){
    const obs$ = interval(1000)
    obs$.pipe(take(5),toArray()).subscribe(res => {
      this.intervalResMsg = res
      
    })
  }

  //with from()
  users = [
    {name: 'Satish', skill: 'Angular'},
    {name: 'RSK', skill: 'Full Stack'}

  ]
  withFrom(){
    const obs$ = from(this.users)
    obs$.pipe(toArray()).subscribe(res => {
      this.fromResMes =res
      console.log(this.fromResMes)
    })
  }

  //with of()
  withOf(){
    const obs$ = of('Angular','React','Vue')
    obs$.pipe(toArray()).subscribe(res => {
      this.ofResMsg = res
    })
  }

}
