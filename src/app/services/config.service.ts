import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface DJ {
  id: number;
  title: string;
  body: string;
  // dj gegevens
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://localhost:9090/api'; //is this the website name adress?

  constructor(private http: HttpClient) {}

  getAllDJs(): Observable<any> {
    return this.http.get<DJ[]>(`${this.apiUrl}/djs`);

  }
  getAllPerformances(): Observable<any> {
    return this.http.get<DJ[]>(`${this.apiUrl}/performances`);
}

postAllDJs(): Observable<any> {
    return this.http.post<DJ[]>(`${this.apiUrl}/djs`, {});
}
postAllPerformances(): Observable<any> {
    return this.http.post<DJ[]>(`${this.apiUrl}/performances`, {});
}

putAllDJs(): Observable<any> {
    return this.http.put<DJ[]>(`${this.apiUrl}/djs`, {});
}
putAllPerformances(): Observable<any> {
    return this.http.put<DJ[]>(`${this.apiUrl}/performances`, {});
}

deleteAllDJs(): Observable<any> {
    return this.http.delete<DJ[]>(`${this.apiUrl}/djs`);
}
deleteAllPerformances(): Observable<any> {
    return this.http.delete<DJ[]>(`${this.apiUrl}/performances`);
}


}

