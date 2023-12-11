import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit{
  responseMsg: any;
  ngOnInit(): void {
    
  }
  Lenovo(){
    return true
  }
  Dell(){
    return false
  }
  None(){
    return 'Not Available'
  }
 

  buyLaptop(){
    let   myLaptop =  new Promise((resolve, reject) => {
    if(this.Lenovo()){
        return setTimeout(()=>{
          resolve('Lenovo is Availble')
        }, 2000)
      }
      else if(this.Dell()){
        return setTimeout(()=>{
          resolve('Dell is Availble')
        }, 2000)
      }
      else{
        return reject(this.None())
      }
    })

    myLaptop.then(res => this.responseMsg= res).catch(res => this.responseMsg = res)
  }


}
