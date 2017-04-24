import {Component} from "@angular/core";
import {getQuestionMessageTmpl, getAnswerMessageTmpl} from "../template/message";
let moment = require('moment');

declare var socket: any;
declare var $: any;

/// <reference path="../../typings/globals/jquery/index.d.ts/>


@Component({
  selector: "chat-page",
  templateUrl: "chat-view.component.html"
})
export class ChatViewComponent {
  reference: any;
  resFlag: boolean = false;
  newUser: boolean = false;
  exitedUser: boolean = false;
  newUserName: string = null;
  exitedUserName: string = null;
  sentMessageUsername: string = null;
  response: string;
  clientsNameList: number[];
  message: string;
  msgCount: number = 0;

  constructor() {
    let reference = this;
    socket.on("broadcastToAll_chatMessage", function (resObj) {
      reference.msgCount++;
      if (reference.sentMessageUsername !== resObj.name) {
        let time = new Date();
        let dateTime = moment(time).format('YYYY-MM-DD hh:mm:ss');
        let messageTmpl = getAnswerMessageTmpl(resObj.name, dateTime, resObj.msg);
        $("#message-body").append(messageTmpl);

      }
      else if (reference.sentMessageUsername === resObj.name) {
        let dateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        let messageTmpl = getQuestionMessageTmpl(resObj.name, dateTime, resObj.msg);
        $("#message-body").append(messageTmpl);
        reference.sentMessageUsername = null;
      }
    });

    socket.on("updateSocketList", function (list) {
      reference.clientsNameList = list;
    });

    socket.on("addUserToSocketList", function (username) {
      reference.exitedUser = false;
      reference.newUser = true;
      reference.newUserName = username;
    });

    socket.on("removeUserFromSocketList", function (username) {
      reference.newUser = false;
      reference.exitedUser = true;
      reference.exitedUserName = username;
    });
  }


  sendMessage(data) {
    this.resFlag = true;
    let reference = this;
    socket.emit("chatMessageToSocketServer", data.innerText, function (respMsg, username) {
      reference.sentMessageUsername = username;
      reference.response = respMsg;
    });
    $("#message-boxID").val(" ");
  }

  sendMessageOnEnter($event, messagebox) {
    if ($event.which === 13) { // ENTER_KEY
      this.sendMessage(messagebox);
    }
  }

  update() {
    this.resFlag = false;
    this.newUser = false;
    this.exitedUser = false;
  }

  fork() {
    window.open('https://github.com/giscafer/angular-chat')
  }

}
