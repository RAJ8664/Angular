import { Routes } from '@angular/router';
import { RoomsTableComponent } from './rooms-table/rooms-table.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddRoomComponent } from './add-room/add-room.component';

export const routes: Routes = [
    {path : 'rooms_table', component : RoomsTableComponent},
    {path : 'footer', component : FooterComponent},
    {path : 'homepage/:id/:name', component : HomepageComponent},
    {path : 'add', component : AddRoomComponent},
    {path : 'homepage', component : HomepageComponent},
    {path : '', redirectTo : '/homepage', pathMatch : 'full'},
    {path : 'rooms_table/:id/:name', component : RoomsTableComponent},
    {path : '**', component : PagenotfoundComponent}
];
