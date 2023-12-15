import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UitilityService {

  constructor() { }

  display(val, container){
    let element = document.createElement('li')
    element.innerText = val
    document.getElementById(container).appendChild(element)
  }
}
