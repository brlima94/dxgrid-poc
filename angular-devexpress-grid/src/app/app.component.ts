import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-devexpress-grid';
}
