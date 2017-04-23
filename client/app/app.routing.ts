import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { nickNameRoutes }  from "./nickName-component/index";
import { chatComponentRoutes }  from "./chat-component/index";

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  ...nickNameRoutes,
  ...chatComponentRoutes
];

export const routing = RouterModule.forRoot(routes);
