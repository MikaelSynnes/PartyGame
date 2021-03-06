import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { GameSession } from '../models/models';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  playerName: string;
  sessionId: string;



  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  joinGame() {
    console.log("join", this.playerName, this.sessionId);
    if (this.sessionId) {
      // Handle Errors! or setup new session with id
      this.apiService.addPlayer(this.sessionId, this.playerName).then((value: GameSession) => {
        if (value.sessionId)
          this.apiService.gameId = value.sessionId;
          this.router.navigateByUrl("/ready");
      })
    }
    else if (!this.sessionId) {
      this.apiService.createGame(this.playerName).then((value: GameSession) => {
        if (value.sessionId)
          this.apiService.gameId = value.sessionId;
          this.router.navigateByUrl("/ready");
      })
    }
  }
  ngOnInit() {
  }

}
