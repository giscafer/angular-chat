import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { UserEntryRoutes }  from "./user-entry/index";
import { ChatViewRoutes }  from "./chat-view/index";

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  ...UserEntryRoutes,
  ...ChatViewRoutes
];

export const routing = RouterModule.forRoot(routes);
