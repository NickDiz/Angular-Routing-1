import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
