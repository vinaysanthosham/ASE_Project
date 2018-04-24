import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugslistPage } from './drugslist';

@NgModule({
  declarations: [
    DrugslistPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugslistPage),
  ],
})
export class DrugslistPageModule {}
