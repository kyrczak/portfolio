import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  
}
