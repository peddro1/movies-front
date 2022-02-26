import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SwiperModule } from "swiper/angular";

import { FormsModule } from '@angular/forms';
import { GenresComponent } from 'src/app/shared/genres/genres.component';


@NgModule({
  declarations: [HomeComponent, GenresComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    FormsModule
  ], 
  exports: [
    HomeComponent,
    SwiperModule
  ]
})
export class HomeModule { }
