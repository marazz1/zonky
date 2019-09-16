import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    private errorProject(error: HttpErrorResponse): Observable<any> {
        let er: any = null;
        if (error.error) {
            er = error.error;
        } else {
            if (error.message) {
                er = error.message;
            }
        }
        if (er) {
            console.log(er);
        }

        return of(null);
    }


    public get<ServerType, ClientType>(
        url: string,
        mapFce?: (rawData: ServerType) => ClientType,
        options?: any):
        Observable<ClientType> {
        return this.http.get(url, options ? options : undefined).pipe(
            map((res: any) => {
                return mapFce != null ? mapFce(res as ServerType) : res;
            }),
            catchError(error => this.errorProject(error))
        );
    }

    public post<ServerType, ClientType>(
        url: string,
        body: any,
        mapFce?: (rawData: ServerType) => ClientType,
        options?: any):
        Observable<ClientType> {
        return this.http.post(url, body, options ? options : undefined).pipe(map((res: any) => {
            return mapFce != null ? mapFce(res as ServerType) : res;
        }),
            catchError((error: HttpErrorResponse) => this.errorProject(error)));
    }

    public put<ServerType, ClientType>(
        url: string,
        body: any,
        mapFce?: (rawData: ServerType) => ClientType,
        options?: any):
        Observable<ClientType> {
        return this.http.put(url, body, options ? options : undefined).pipe(map((res: any) => {
            return mapFce != null ? mapFce(res as ServerType) : res;
        }),
            catchError((error: HttpErrorResponse) => this.errorProject(error)));
    }

    public delete<ServerType, ClientType>(
        url: string,
        mapFce?: (rawData: ServerType) => ClientType,
        options?: any):
        Observable<ClientType> {
        return this.http.delete(url, options ? options : undefined).pipe(map((res: any) => {
            return mapFce != null ? mapFce(res as ServerType) : res;
        }),
            catchError((error: HttpErrorResponse) => this.errorProject(error)));
    }

    public patch<ServerType, ClientType>(
        url: string,
        body: any,
        mapFce?: (rawData: ServerType) => ClientType,
        options?: any):
        Observable<ClientType> {
        return this.http.patch(url, body, options ? options : undefined).pipe(map((res: any) => {
            return mapFce != null ? mapFce(res as ServerType) : res;
        }),
            catchError((error: HttpErrorResponse) => this.errorProject(error)));
    }

}
