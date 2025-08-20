import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  let sesion =  localStorage.getItem("Sesion")
   if (sesion === "true") {
     return true;
   }
   else{
    router.navigate(['/login']);
    localStorage.clear();
    return false;
   }
  
};
