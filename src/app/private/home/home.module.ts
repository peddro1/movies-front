import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SwiperModule } from "swiper/angular";

import { FormsModule } from '@angular/forms';
import { GenresComponent } from 'src/app/shared/genres/genres.component';
import { SearchBarComponent } from 'src/app/shared/search-bar/search-bar.component';


@NgModule({
  declarations: [HomeComponent, GenresComponent, SearchBarComponent],
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
