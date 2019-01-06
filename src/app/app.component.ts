import { Component } from '@angular/core';
import Post from './types/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts: Array<Post> = [
    new Post(
      'dragon ball super',
      'Le film début dans le passé, le Roi Cold et son armée arrivent sur la planète Vegeta en cassant tout sur leur passage. Ce dernier vient pour une visite de courtoisie. A ce moment, les saiyans sont déjà sous ses ordres depuis des années.',
      1
    ),
    new Post(
      'la ligue 1',
      'Le Championnat de France de football, actuellement appelé Ligue 1 Conforama pour des raisons de sponsoring ou plus simplement Ligue 1, est une compétition de football qui est le premier échelon national en France et à Monaco.'
    ),
    new Post(
      'lorem ipsum',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus rutrum nunc et ultricies. Proin eu nisl eget nisl mattis interdum id vitae purus',
      -1
    )
  ]
}
