import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['black','red','blue','green','yellow','orange','purple']
  random = function(){
    return Math.floor(Math.random()*this.colors.length)
  }
}
