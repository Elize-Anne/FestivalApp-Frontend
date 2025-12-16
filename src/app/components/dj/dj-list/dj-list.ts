import {Component, inject} from '@angular/core';
import {ConfigService, DJ} from '../../../services/config.service';
import {AsyncPipe} from '@angular/common';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {TruncatePipe} from '../../../../slice-pipe';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Observable, switchMap} from 'rxjs';

@Component({
  selector: 'app-dj-list',
  imports: [
    AsyncPipe,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    TruncatePipe,
    RouterLink,
    MatCardActions
  ],
  templateUrl: './dj-list.html',
  styleUrl: './dj-list.css',
})
export class DjList {
  private configService = inject(ConfigService);
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
}
