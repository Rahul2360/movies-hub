import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search_value = '';
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  search(event){
    this._router.navigateByUrl("/search/" + event.target.value);
  }

}
