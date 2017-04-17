import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ContentHeaderComponent } from './content/content-header/content-header.component';
import { ContentBodyComponent } from './content/content-body/content-body.component';
import { DropdownComponent } from './header/navbar/dropdown/dropdown.component';
import { DropdownItemComponent } from './header/navbar/dropdown-item/dropdown-item.component';
import { InfoBoxComponent } from './containers/info-box/info-box.component';
import { BoxComponent } from './containers/box/box.component';
import { DirectChatComponent } from './widgets/direct-chat/direct-chat.component';
import { ModalComponent } from './containers/modal/modal.component';
import { TabsComponent } from './containers/tabs/tabs.component';
import { LoginComponent } from './widgets/login/login.component';
import { CalendarComponent } from './widgets/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ControlSidebarComponent,
    ContentComponent,
    NavbarComponent,
    ContentHeaderComponent,
    ContentBodyComponent,
    DropdownComponent,
    DropdownItemComponent,
    InfoBoxComponent,
    BoxComponent,
    DirectChatComponent,
    ModalComponent,
    TabsComponent,
    LoginComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
