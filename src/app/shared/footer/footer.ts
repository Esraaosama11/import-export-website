import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslateModule,RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
