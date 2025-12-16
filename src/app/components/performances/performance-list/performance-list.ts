import {Component, inject} from '@angular/core';
import {ConfigService, DJ} from '../../../services/config.service';
import {AsyncPipe} from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle, MatCardTitleGroup
} from '@angular/material/card';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Observable, switchMap} from 'rxjs';


@Component({
  selector: 'app-performance-list',
  imports: [
    AsyncPipe,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardTitleGroup,
    RouterLink,
  ],
  templateUrl: './performance-list.html',
  styleUrl: './performance-list.css',
})
export class PerformanceList {
  private configService = inject(ConfigService);
  Performances$ = this.configService.getAllPerformances();
  postPerformances$ = this.configService.postAllPerformances();
  putPerformances$ = this.configService.putAllPerformances();
  deletePerformances$ = this.configService.deleteAllPerformances();

  private route = inject(ActivatedRoute);

  Performance$: Observable<Performance> = this.route.paramMap.pipe(
    switchMap(params => {
      const id: number = Number(params.get('id'));

      return this.configService.getPerformanceById(id);

    })
  );
}

