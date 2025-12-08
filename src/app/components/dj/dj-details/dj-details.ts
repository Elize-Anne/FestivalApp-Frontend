import {Component, inject} from '@angular/core';
import {ConfigService, DJ} from '../../../services/config.service';
import {CommonModule} from '@angular/common';
import {Observable, switchMap} from 'rxjs';
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
  private route = inject(ActivatedRoute);

  // Observable for the post details
  post$: Observable<DJ> = this.route.paramMap.pipe(

    switchMap(params => {
      const id: number = Number(params.get('id'));

      return this.configService.getAllDJs();
    })
  );
}
