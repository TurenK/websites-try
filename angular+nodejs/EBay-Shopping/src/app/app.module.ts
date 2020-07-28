import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { MatSelectModule } from '@angular/material/select';
// import { HttpErrorHandler } from './http-error-handler.service';
// import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	HttpClientModule,
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	NgbModule,
	MatTabsModule,
	MatSelectModule
	// HttpErrorHandler,
	// MessageService
  ],
  providers: [
	SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
