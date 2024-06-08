import { CanActivateFn } from '@angular/router';
import { AccountService } from '../service/account.service';
import { ToastrService } from 'ngx-toastr';
import { Inject } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = Inject(AccountService);
  const toastr = Inject(ToastrService);

  return accountService.currentUser$.pipe(
    map( user =>{
          if (user)return true; else {
            toastr.error('Access Denied');
            return false;
          }
    })
  )
};
