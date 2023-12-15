import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval, timer } from 'rxjs';
import { UitilityService } from 'src/app/services/uitility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit{
  observer$: any;
  userSubsciptionWithInterval: Subscription;
  userSubsciptionWithTimer: Subscription;
  
  constructor(private _router: Router, private _utilityService: UitilityService){}
  back(){
    this._router.navigate(['/observable'])
  }

  ngOnInit(): void {
    let newUserWithInterval = interval(1000)
    let newUserWithTimer= timer(7000, 1000) // timer(delay, interval)
    this.userSubsciptionWithInterval = newUserWithInterval.subscribe( (res: any) => {
     this.observer$ = "User - "+ res
     this._utilityService.display(this.observer$, 'usersInterval') 

     if(res >= 5){
      this.userSubsciptionWithInterval.unsubscribe()
     }
    })

    this.userSubsciptionWithTimer = newUserWithTimer.subscribe( (res: any) => {
      this.observer$ = "User - "+ res
      this._utilityService.display(this.observer$, 'usersTimer') 
 
      if(res >= 5){
       this.userSubsciptionWithTimer.unsubscribe()
      }
     })


  }

  
}
