import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  images = [1, 2, 3, 4];

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
  }
}
