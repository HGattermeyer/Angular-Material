import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progressbar-spinners',
  templateUrl: './progressbar-spinners.component.html',
  styleUrls: ['./progressbar-spinners.component.scss']
})
export class ProgressbarSpinnersComponent implements OnInit {
  public loadingPercent = 0;
  public queryPercent = 0;
  public currentPlayback = 0;
  public loadingMode: ProgressBarMode = 'query';

  ngOnInit(): void {

    this.loadingProgress(500, 90).subscribe(i => this.loadingPercent = i);

    this.loadingProgress(250, 100).subscribe(i => this.currentPlayback = i);

    concat(
      interval(2000)
        .pipe(
          take(1),
          tap(_ => (this.loadingMode = 'determinate'))
        ),
      this.loadingProgress(500)
    ).subscribe(i => this.queryPercent = i);
  }

  loadingProgress(speed: number, takeUntil: number = 100) {
    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile(i => i <= takeUntil)
    )
  }

}
