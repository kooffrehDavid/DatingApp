import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './guards/auth.guard';
import { TestErrorComponent } from './error/test-error/test-error.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'',
   runGuardsAndResolvers:'always',canActivate:[authGuard],
   children:[
    {path:'members', component: MemberListComponent },
    {path:'members/:id', component: MemberDetailComponent },
    {path:'list', component: ListComponent },
    {path:'messages', component: MessagesComponent },
   ]},
   {path:'errors', component: TestErrorComponent },
   {path:'not-found', component: NotFoundComponent},
   {path:'server-error', component: ServerErrorComponent },
  {path:'**', component: NotFoundComponent,pathMatch:'full' },
];
