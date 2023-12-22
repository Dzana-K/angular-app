import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadComponent } from './pages/upload/upload.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PetDetailComponent } from './pages/pet-detail/pet-detail.component';
import { AuthGuard } from './core/api/api/auth.guard';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'upload',
        component:UploadComponent, canActivate:[AuthGuard]
    },
    {
        path:'dashboard',
        component:DashboardComponent, canActivate:[AuthGuard]
    },
    {
        path:'pet/detail/:id',
        component:PetDetailComponent, canActivate:[AuthGuard]
    },
    {
        path:'favorites',
        component:FavoritesComponent, canActivate:[AuthGuard]
    },
    {
        path:'user-info',
        component:UserInfoComponent, canActivate:[AuthGuard]
    },
    {
        path:'',
        redirectTo:'/login', pathMatch:'full'
    },

];
