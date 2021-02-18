import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {EducationComponent} from './education/education.component';
import {ContactComponent} from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component'; // CLI imports router

const routes: Routes = [
  {path:'', component: AboutComponent},
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  {path: 'experience', component:ExperienceComponent},
  {path: 'education', component:EducationComponent},
  {path:'contact', component:ContactComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
