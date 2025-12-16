
import { Component, inject } from '@angular/core';
import { ConfigService, DJ } from '../../../services/config.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-performance-details',
  templateUrl: './performance-details.html',
  styleUrls: ['./performance-details.css'],
  imports: [
    AsyncPipe
  ]
})
export class PerformanceDetails {
  private configService = inject(ConfigService);
  private route = inject(ActivatedRoute);

  // Expose a single performance (includes optional dj)
  Performances$: Observable<any & { dj?: DJ }> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      return this.configService.getPerformanceById(id);
    })
  );

  postPerformances$ = this.configService.postAllPerformances();
  putPerformances$ = this.configService.putAllPerformances();
  deletePerformances$ = this.configService.deleteAllPerformances();

  protected dj: any;
}

