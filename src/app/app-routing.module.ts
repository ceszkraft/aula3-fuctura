import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';

const routes: Routes = [{ path: 'pai', component: PaiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
