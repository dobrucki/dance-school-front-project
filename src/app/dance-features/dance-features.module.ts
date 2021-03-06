import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './component/contact/contact.component';
import {ListInstructorsComponent} from './component/instructors/listInstructors.component';
import {InstructorComponent} from './component/instructors/profiles/instructor.component';
import {ShareModule} from '../share/share.module';
import {ActivitiesComponent} from './component/activities/activities.component';
import {NewsComponent} from './component/news/news.component';
import {ScheduleComponent} from './component/schedule/schedule.component';
import {ScheduleTableComponent} from './component/schedule/schedule-table/schedule-table.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalSignInComponent } from './component/modal-sign-in/modal-sign-in.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContactComponent,
    ActivitiesComponent,
    InstructorComponent,
    ListInstructorsComponent,
    NewsComponent,
    ScheduleComponent,
    ScheduleTableComponent,
    ModalSignInComponent],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class DanceFeaturesModule {
}
