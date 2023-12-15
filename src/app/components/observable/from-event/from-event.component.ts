import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit{

@ViewChild('addUser') addUser : ElementRef
constructor(private _router: Router){}
back(){
  this._router.navigate(['/observable'])
}

ngAfterViewInit(): void {
  let count = 1
  fromEvent(this.addUser.nativeElement,'click')
  .subscribe(res => {
    let countValue = 'User - '+count++
    console.log(countValue)
    this.displayUser(countValue)
  })
}

displayUser(val){
  let element = document.createElement('li')
  element.innerText = val
  document.getElementById('users').appendChild(element)
}

}
