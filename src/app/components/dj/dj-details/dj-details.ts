import {Component, inject} from '@angular/core';
import {ConfigService, DJ} from '../../../services/config.service';
import {CommonModule} from '@angular/common';
import {catchError, map, Observable, startWith, switchMap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-dj-details',
  imports: [CommonModule],
  templateUrl: './dj-details.html',
  styleUrl: './dj-details.css',
})
export class DjDetails {
  private configService = inject(ConfigService); //koppeling naar service
  DJs$ = this.configService.getAllDJs();
  postDJs$ = this.configService.postAllDJs();
  putDJs$ = this.configService.putAllDJs();
  deleteDJs$ = this.configService.deleteAllDJs();

  private route = inject(ActivatedRoute);

DJ$: Observable<DJ> = this.route.paramMap.pipe(

  switchMap(params => {
    const id: number = Number(params.get('id'));

    return this.configService.getDJById(id);

  })
  );
  protected dj: any;




}




