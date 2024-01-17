import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    UserDetailsComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
