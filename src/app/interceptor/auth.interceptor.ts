import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";



export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if(token?.length!==0){
            const modifiedRequest = req.clone({
                setHeaders: {
                    Authorization: `Bearer: ${token}`
                }
            });
            return next.handle(modifiedRequest);
        }

        return next.handle(req);
    }
}