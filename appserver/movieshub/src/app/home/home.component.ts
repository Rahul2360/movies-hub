import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies_data = [{
    "name": "Avengers",
    "description": "",
    "language": "english",
    "rating": "8.0",
    "image_url":"",
    "genre": "Action",
    "country": "US",
    "directors": [{
      "name":"Jos Ruso"
    }],
    "actors": [{
      "name": "Robert Junior",
      "character": "Iron Man"
    },
    {
      "name":"Chris Hemsworth",
      "character": "Thor"
    },
    {
      "name": "Mark Ruffalo",
      "character": "Hulk"
    },
    {
      "name": "Scarlet Johnson",
      "character": "Black Widow"
    }],
    "trailer_link": "",
    "duration": "181",
    "release": "2012",
    "url":"",
    "type": "movie"
  }]
  
  constructor() { }

  ngOnInit() {
  }

}
