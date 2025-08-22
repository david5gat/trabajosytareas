import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Sesion } from '../../../servicios/sesion/sesion';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-nabvar',
  imports: [MenubarModule,BadgeModule,
OverlayBadgeModule,AvatarModule,
AvatarGroupModule,FormsModule,CommonModule,ButtonModule],
  templateUrl: './nabvar.html',
  styleUrl: './nabvar.scss'
})
export class Nabvar {
  constructor(private sesionServ: Sesion, private router : Router){
    
  }

  Logout(){
    this.sesionServ.clearSesion();
    this.router.navigate(["/login"]);
  }
}
