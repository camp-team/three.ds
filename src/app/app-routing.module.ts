import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'my-page',
    loadChildren: () =>
      import('./my-page/my-page.module').then(
        (m) => m.MyPageModule
      ),
      canLoad: [AuthGuard],
      canActivate: [AuthGuard]
  },
  {
    path: 'article-detail',
    loadChildren: () =>
      import('./article-detail/article-detail.module').then(
        (m) => m.ArticleDetailModule
      ),
      canLoad: [AuthGuard],
      canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then(
        (m) => m.WelcomeModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./top-page/top-page.module').then(
        (m) => m.TopPageModule
      ),
      canLoad: [AuthGuard],
      canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
