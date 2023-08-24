import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";

import { AppComponent } from './app.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoScreenComponent } from './component/todo-screen/todo-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoViewComponent } from './component/todo-screen/todo-view/todo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoScreenComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
