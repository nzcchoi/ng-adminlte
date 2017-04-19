;
import { WidgetsComponent } from './samples/widgets/widgets.component';
import { TimelineComponent } from './samples/UI/timeline/timeline.component';
import { SlidersComponent } from './samples/UI/sliders/sliders.component';
import { ModalsComponent } from './samples/UI/modals/modals.component';
import { IconsComponent } from './samples/UI/icons/icons.component';
import { ButtonsComponent } from './samples/ui/buttons/buttons.component';
import { SimpleComponent } from './samples/tables/simple/simple.component';
import { DataComponent } from './samples/tables/data/data.component';
import { ReadMailComponent } from './samples/mailbox/read-mail/read-mail.component';
import { MailboxComponent } from './samples/mailbox/mailbox/mailbox.component';
import { ComposeComponent } from './samples/mailbox/compose/compose.component';
import { TopNavComponent } from './samples/layout/top-nav/top-nav.component';
import { FixedComponent } from './samples/layout/fixed/fixed.component';
import { CollapsedSidebarComponent } from './samples/layout/collapsed-sidebar/collapsed-sidebar.component';
import { BoxedComponent } from './samples/layout/boxed/boxed.component';
import { GeneralComponent } from './samples/forms/general/general.component';
import { EditorsComponent } from './samples/forms/editors/editors.component';
import { AdvancedComponent } from './samples/forms/advanced/advanced.component';
import { RegisterComponent } from './samples/examples/register/register.component';
import { ProfileComponent } from './samples/examples/profile/profile.component';
import { PaceComponent } from './samples/examples/pace/pace.component';
import { LockscreenComponent } from './samples/examples/lockscreen/lockscreen.component';
import { InvoiceComponent } from './samples/examples/invoice/invoice.component';
import { InvoicePrintComponent } from './samples/examples/invoice-print/invoice-print.component';
import { BlankComponent } from './samples/examples/blank/blank.component';
import { 500Component } from './samples/examples/500/500.component'import { BrowserModule } from '@angular/platform-browser';
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
import { DashboardComponent } from './samples/dashboard/dashboard.component';
import { ChartjsComponent } from './samples/charts/chartjs/chartjs.component';
import { FlotComponent } from './samples/charts/flot/flot.component';
import { InlineComponent } from './samples/charts/inline/inline.component';
import { MorrisComponent } from './samples/charts/morris/morris.component';
import { 404Component } from './samples/examples/404/404.component';

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
    CalendarComponent,
    DashboardComponent,
    ChartjsComponent,
    FlotComponent,
    InlineComponent,
    MorrisComponent,
    404Component, 500Component, BlankComponent, InvoicePrintComponent, InvoiceComponent, LockscreenComponent, PaceComponent, ProfileComponent, RegisterComponent, AdvancedComponent, EditorsComponent, GeneralComponent, BoxedComponent, CollapsedSidebarComponent, FixedComponent, TopNavComponent, ComposeComponent, MailboxComponent, ReadMailComponent, DataComponent, SimpleComponent, ButtonsComponent, IconsComponent, ModalsComponent, SlidersComponent, TimelineComponent, WidgetsComponent
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
