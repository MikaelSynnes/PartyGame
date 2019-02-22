import { Component, OnInit } from '@angular/core';
import { GameSession } from '../models/models';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aftergame',
  templateUrl: './aftergame.component.html',
  styleUrls: ['./aftergame.component.css']
})
export class AftergameComponent implements OnInit {
  private game: GameSession;
  constructor(private readonly apiService: ApiService,
    private router: Router) {
  }

  ngOnInit() {
    this.apiService.finishGame().then((session: GameSession) => {
      this.game = session;
      console.log(this.game);
    });
  }

  newGame() {
    this.router.navigateByUrl("/");
  }

}
