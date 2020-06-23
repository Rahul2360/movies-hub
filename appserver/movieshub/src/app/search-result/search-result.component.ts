import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  movies_data = [{
    "name": "Avengers",
    "description": "",
    "language": ["english"],
    "rating": "8.0",
    "image_url":"assets/images/movies/Avengers.jpg",
    "genre": ['Action'],
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
    "duration": "144",
    "release": "2012",
    "url":"",
    "type": "movie"
  },
  {
    "name": "Little Women",
    "description": "",
    "language": ["english"],
    "rating": "7.9",
    "image_url":"assets/images/movies/Little_Women.jpeg",
    "genre": ['Drama', 'Romance'],
    "country": "US",
    "directors": [{
      "name":"Greta Gerwig"
    }],
    "actors": [{
      "name": "Saoirse Ronan",
      "character": ""
    },
    {
      "name":"Timothée Chalamet",
      "character": ""
    },
    {
      "name": "Florence Pugh",
      "character": ""
    }],
    "trailer_link": "",
    "duration": "135",
    "release": "2019",
    "url":"",
    "type": "movie"
  },
  {
    "name": "Life of Pi",
    "description": "",
    "language": ["hindi"],
    "rating": "7.9",
    "image_url":"assets/images/movies/Life_of_Pi_2012.jpg",
    "genre": ['Drama', 'Adventure'],
    "country": "India",
    "directors": [{
      "name":" Ang Lee"
    }],
    "actors": [{
      "name": "Suraj Sharma",
      "character": ""
    },
    {
      "name":"Irrfan Khan",
      "character": ""
    },
    {
      "name": "Tabu",
      "character": ""
    }],
    "trailer_link": "",
    "duration": "127",
    "release": "2012",
    "url":"",
    "type": "movie"
  },
  {
    "name": "Joker",
    "description": "",
    "language": ["english"],
    "rating": "8.5",
    "image_url":"assets/images/movies/joker.jpg",
    "genre": ['Drama', 'Crime'],
    "country": "US",
    "directors": [{
      "name":"Todd Phillips"
    }],
    "actors": [{
      "name": "Joaquin Phoenix",
      "character": ""
    },
    {
      "name":"Robert De Niro",
      "character": ""
    },
    {
      "name": "Zazie Beetz",
      "character": ""
    }],
    "trailer_link": "",
    "duration": "122",
    "release": "2019",
    "url":"",
    "type": "movie"
  },{
    "name": "3 idiots",
    "description": "",
    "language": ["hindi"],
    "rating": "8.4",
    "image_url":"assets/images/movies/3_idiots.jpg",
    "genre": ['Drama', 'Comedy'],
    "country": "India",
    "directors": [{
      "name":"Rajkumar Hirani"
    }],
    "actors": [{
      "name": "Aamir Khan",
      "character": ""
    },
    {
      "name":"Kareena Kapoor",
      "character": ""
    },
    {
      "name": "Boman Irani",
      "character": ""
    }],
    "trailer_link": "",
    "duration": "164",
    "release": "2009",
    "url":"",
    "type": "movie"
  },
  {
    "name": "Lage rho munna bhai",
    "description": "",
    "language": ["hindi"],
    "rating": "8.1",
    "image_url":"assets/images/movies/lage_raho_munna_bhai.jpg",
    "genre": ['Drama', 'Comedy', 'Fantasy'],
    "country": "India",
    "directors": [{
      "name":"Rajkumar Hirani"
    }],
    "actors": [{
      "name": "Sanjay Dutt",
      "character": ""
    },
    {
      "name":"Arshad Warsi",
      "character": ""
    },
    {
      "name": "Vidya Balan",
      "character": ""
    }],
    "trailer_link": "",
    "duration": "139",
    "release": "2006",
    "url":"",
    "type": "movie"
  },
  {
    "name": "Money Heist",
    "description": "",
    "language": ["english","spanish"],
    "rating": "8.4",
    "image_url":"assets/images/web_series/money_heist.jpg",
    "genre": ['Crime'],
    "country": "Spain",
    "directors": [{
      "name":"Manel Santisteban"
    },
    {
      "name":"Iván Martínez Lacámara"
    }],
    "actors": [{
      "name": "Álvaro Morte",
      "character": ""
    },
    {
      "name":"Úrsula Corberó",
      "character": ""
    },
    {
      "name": "Itziar Ituño",
      "character": ""
    },
    {
      "name": "Esther Acebo",
      "character": ""
    }],
    "trailer_link": "",
    "duration": "",
    "release": "2017",
    "url":"",
    "type": "web_series"
  },
  {
    "name": "Game of Thrones",
    "description": "",
    "language": ["english"],
    "rating": "9.3",
    "image_url":"assets/images/movies/game_of_thrones.jpg",
    "genre": ['Drama'],
    "country": "Canada",
    "directors": [{
      "name":"David Benioff"
    },
    {
      "name":"D. B. Weiss"
    }],
    "actors": [{
      "name": "Emilia Clarke",
      "character": ""
    },
    {
      "name":"Kit Harington",
      "character": ""
    },
    {
      "name": "Sophie Turner",
      "character": ""
    },
     {
      "name": "Peter Dinklage",
      "character": ""
    },
    {
      "name": "Maisie Williams",
      "character": ""
    }],
    "trailer_link": "",
    "duration": "",
    "release": "2011",
    "url":"",
    "type": "web_series"
  }
];

  search_query = '';
  // movies_list = {
  //   'movies': ['Avengers','Joker','3 Idiots','Lage rho munna bhai','Carry on Jatta'],
  //   'web_series': ['Money Heist','Game of Thrones','Lost in Space','Sacred Games','Mirzapur'],
  //   'animes':['Dragon Ball']
  // };
  movies_list = {
    'movies': [],
    'web_series': [],
    'animes':[]
  };
  filtered_data = [];
  
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { 
    this._activatedRoute.params.subscribe(params => {
      this.search_query = params.query;
      this.filter_data();
    });
  }

  ngOnInit() {
  }

  parse_json() {
    for (let i =0 ;i<this.filtered_data.length; i++) {
      if (this.filtered_data[i].type == 'movie') {
        this.movies_list['movies'].push(this.filtered_data[i]);
      } else if (this.filtered_data[i].type == 'web_series') {
        this.movies_list['web_series'].push(this.filtered_data[i]);
      } else if (this.filtered_data[i].type == 'anime') {
        this.movies_list['animes'].push(this.filtered_data[i]);
      }
    }
  }

  filter_data() {
    const substring = this.search_query.toString().toLowerCase();
    for (let i =0;i< this.movies_data.length; i++) {
      const string = this.movies_data[i].name.toString().toLowerCase();
      if (string.includes(substring)) {
        this.filtered_data.push(this.movies_data[i])
      }
    }
    this.parse_json();
  } 

  movie_select(event) {
    console.log(event);
  }
}
