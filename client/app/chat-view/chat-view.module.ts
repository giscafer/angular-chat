import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChatViewComponent} from "./chat-view.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ChatViewComponent],
    exports: [ChatViewComponent]
})

export class ChatViewModule { }
