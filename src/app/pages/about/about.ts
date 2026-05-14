import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslateModule,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
