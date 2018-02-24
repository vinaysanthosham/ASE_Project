import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
    data:string;
    @ViewChild('location') loc;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
   
  }
  getNearestMedicalStores(){
    
   this.httpClient.get('https://api.foursquare.com/v2/venues/search?client_id=XUE5OHFJNUDACMIFWVF5XMCUFUKPSWXTBBTSO1PHBFL0BGDK&client_secret=Z0RUZIJ4W5M3YLFHDQRL1VL2WQWDJHYSPJKXO2SKFALLHU0U&v=20180223&limit=5&near='+ this.loc.value +'&query=medical store').subscribe(data => {
            this.data = data.response.venues;
            console.log(data.response.venues);
        })
  }

}
