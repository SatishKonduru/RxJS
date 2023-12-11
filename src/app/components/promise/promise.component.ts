import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit{
  result1: any;
  result2: any;
  result3: any;
  ngOnInit(): void {}
  lenovo = {
      brand: 'Lenovo',
      hdd: '1 TB',
      color: 'Black'
  }
  dell = {
    brand: 'Dell',
    hdd: '2 TB',
    color: 'Gray'
}
  notAvailable = {
      brand: 'Not Available',
      status: 'Fail'
  }

  lenovoAvailable(){
    return true
  }
  DellAvailable(){
    return false
  }
  myLaptop =  new Promise((resolve, reject) => {
    if(this.lenovoAvailable()){
        return setTimeout(()=>{
          resolve(this.lenovo)
        }, 2000)
      }
      else if(this.DellAvailable()){
        return setTimeout(()=>{
          resolve(this.dell)
        }, 2000)
      }
      else{
        return reject(this.notAvailable)
      }
    })
 
 //with Promise
  promise(){
    this.myLaptop.then(res => this.result1= res).catch(res => this.result1 = res)
  }
  
//with Async/await
  async asyncAwait(){
    this.result2 = await this.myLaptop
  }
  
//FetchAPI
fetchAPI(){
  let url = fetch('../../../assets/data/data.json')
  .then(res => res.json())
  url.then(res => {
    this.result3 = res[0]
    console.log(this.result3) 
   })

}



}
