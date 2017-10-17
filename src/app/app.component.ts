import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles:any = [
    { active: true, title: 'Luxury places', image: 'https://media.timeout.com/images/100894675/image.jpg'},
    { active: true, title: 'Good music', image: 'https://img1.10bestmedia.com/Images/Photos/328870/p-1496541-783832721664354-1485815104510667131-o_54_990x660.jpg'},
    { active: false, title: 'Warm people', image: 'https://img1.10bestmedia.com/Images/Photos/343513/Insanity-5_54_990x660.jpg'},
  ];
  lat:number = 4.6560663;
  lng:number = -74.0595918;
}
