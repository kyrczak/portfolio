import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-component',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectName : string = 'Project Name';
  @Input() projectDescription : string = 'Project Description';
  @Input() projectUri : string = 'https://localhost:4200/';
}
