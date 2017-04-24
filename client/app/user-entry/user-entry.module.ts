import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {UserEntryComponent} from "./user-entry.component";

@NgModule({
    imports:      [ CommonModule, RouterModule],
    declarations: [ UserEntryComponent ],
    exports: 	  [ UserEntryComponent ]
})

export class UserEntryModule {}
