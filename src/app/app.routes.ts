import { Routes } from '@angular/router';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectListComponent},
    { path: '', component: HomeComponent}
];
