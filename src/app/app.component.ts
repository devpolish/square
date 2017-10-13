import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles:any = [
    { title: 'Luxury places', image: 'https://media.timeout.com/images/100894675/image.jpg'},
    { title: 'Good music', image: 'https://img1.10bestmedia.com/Images/Photos/328870/p-1496541-783832721664354-1485815104510667131-o_54_990x660.jpg'},
    { title: 'Warm people', image: 'https://img1.10bestmedia.com/Images/Photos/343513/Insanity-5_54_990x660.jpg'},
  ];
}
