import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'CardComponent',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //: - ©MEMBER-PROPERTIES|
  /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
  @Input() title: string = ''
  @Input() imageUrl: string = ''
  @Input() username: string = ''
  @Input() content: string = ''
  /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

  constructor() { }

  ngOnInit(): void {
  }

}
