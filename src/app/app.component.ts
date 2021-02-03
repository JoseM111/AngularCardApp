import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //: - ©MEMBER-PROPERTIES|
  /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
  posts = [
    //___________
    {
      title: 'Neat Tree',
      imageUrl: './assets/images/tree.jpeg',
      username: 'nature',
      content: 'Saw a amazing tree on my hike today'
    },
    //___________
    {
      title: 'Snowy Mountain',
      imageUrl: './assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'An amazing image of a snowy mountain'
    },
    //___________
    {
      title: 'Mountain Biking',
      imageUrl: './assets/images/biking.jpeg',
      username: 'biking17',
      content: 'Great biking trails & roads'
    },
    //___________
  ]
  /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
}
