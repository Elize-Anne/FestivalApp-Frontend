import {Component, inject} from '@angular/core';
import {ConfigService} from '../../../services/config.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-performance-list',
  imports: [
    AsyncPipe
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
}

