import {Component, inject} from '@angular/core';
import {ConfigService} from '../../../services/config.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-dj-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './dj-list.html',
  styleUrl: './dj-list.css',
})
export class DjList {
  private configService = inject(ConfigService);
  DJs$ = this.configService.getAllDJs();
  // postDJs$ = this.configService.postAllDJs();
  // putDJs$ = this.configService.putAllDJs();
  // deleteDJs$ = this.configService.deleteAllDJs();
}
