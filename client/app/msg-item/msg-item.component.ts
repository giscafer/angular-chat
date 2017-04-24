/**
 * Created by giscafer on 2017/4/24.
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: "msg-item",
  templateUrl: "./msg-item.component.html"
})
export class MsgItemComponent {

  @Input()
  userName: string = "";

  @Input()
  dateTime: string = "";

  @Input()
  message:string="";

  constructor() {
  }
}
