import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface DJ {
  biography: string;
  genre: string;
  name: string;
  imageCaption: any;
  imageUrl: any;
  id: number;
  title: string;
  body: string;
  // dj gegevens
}

class localDateTime {
}

export interface Performance {
  description: string;
  title: string;
  id: number;
  djId: number;
  startTime: localDateTime;
  endTime: localDateTime;
  stage: string;

  // performance gegevens
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://localhost:9090/api'; // backend

  constructor(private http: HttpClient) {}

  getAllDJs(): Observable<any> {
    return this.http.get<DJ[]>(`${this.apiUrl}/djs`);

  }

  //request dj details by id (getpostbyid)
  getDJById(id: number): Observable<any> {
    return this.http.get<DJ>(`${this.apiUrl}/djs/${id}`);
  }
  getAllPerformances(): Observable<any> {
    return this.http.get<Performance[]>(`${this.apiUrl}/performances`);
}

getPerformanceById(id: number): Observable<any> {
    return this.http.get<Performance>(`${this.apiUrl}/performances/${id}`);
}

postAllDJs(): Observable<any> {
    return this.http.post<DJ[]>(`${this.apiUrl}/djs`, {});
}
postAllPerformances(): Observable<any> {
    return this.http.post<Performance[]>(`${this.apiUrl}/performances`, {});
}

putAllDJs(): Observable<any> {
    return this.http.put<DJ[]>(`${this.apiUrl}/djs`, {});
}
putAllPerformances(): Observable<any> {
    return this.http.put<Performance[]>(`${this.apiUrl}/performances`, {});
}

deleteAllDJs(): Observable<any> {
    return this.http.delete<DJ[]>(`${this.apiUrl}/djs`);
}
deleteAllPerformances(): Observable<any> {
    return this.http.delete<Performance[]>(`${this.apiUrl}/performances`);
}


}

