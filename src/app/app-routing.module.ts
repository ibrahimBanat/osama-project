import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestModule} from "./modules/core/test/test.module";
import {TestComponent} from "./modules/core/test/test.component";
import {UserComponent} from "./modules/user/user.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    component: UserComponent
  },
  {
    path: 'test',
    loadChildren: () => import('./modules/core/test/test.module').then(m => m.TestModule),
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
