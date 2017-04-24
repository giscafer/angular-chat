import { Component } from "@angular/core";
import { Router }    from "@angular/router";
import {Inject} from "@angular/core";


/// <reference path="../../typings/globals/jquery/index.d.ts/>

declare var socket: any;
declare var io: any;




@Component({
    selector: "user-entry",
    templateUrl: "user-entry.component.html"
})

export class UserEntryComponent {
    nickname: string = null;
    protected router;

    constructor( @Inject(Router) router: Router) {
        this.router = router;
    }

    submit(data) {
      this.nickname = data.value;
      if (this.nickname) {
        socket = io({ query: "userName=" + this.nickname });
        this.router.navigate(["chat"]);
      }
    }

    addNickname($event, nickname) {
      if ($event.which === 13) { // ENTER_KEY
        this.submit(nickname);
      }
    }
}
