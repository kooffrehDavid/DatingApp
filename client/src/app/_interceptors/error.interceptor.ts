import {  HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/internal/operators/catchError';



export const errorInterceptor: HttpInterceptorFn = (req, next) => {
 const router = inject(Router);
 const toastr = inject(ToastrService);


  return next(req).pipe(
      catchError((error: HttpErrorResponse ) => {
        if (error) {
              switch (error.status) {
                case 400:if (error.error.errors) {
                                  const modalStateErrors = [];
                                  for (const key in error.error.errors) {
                                    if (error.error.errors[key]) {
                                      modalStateErrors.push(error.error.errors[key])
                                   }
                                  }
                                  throw modalStateErrors.flat();
                                } else if (typeof(error.error) === 'object') {
                                  toastr.error(error.statusText, String(error.status));
                                } else {
                             }
                        toastr.error(error.error, String(error.status));

                  break;
                  case 401:toastr.error(error.statusText, String(error.status));
                   break;
                   case 404:router.navigateByUrl('/not-found');
                   break;
                   case 500:const navigationExtras: NavigationExtras = {state: {error: error.error}}
                   router.navigateByUrl('/server-error', navigationExtras);;
                   break;
                default: toastr.error('Something unexpected went wrong');
                console.log(error);
                  break;
              }
        }throw error
      })
  );
};
