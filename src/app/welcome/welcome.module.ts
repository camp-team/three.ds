import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
    MatRippleModule,
  ],
})
export class WelcomeModule {}
