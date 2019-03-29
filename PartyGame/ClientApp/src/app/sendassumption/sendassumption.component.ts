import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { PlayerModel, AssumptionModel } from '../models/models';

@Component({
  selector: 'app-sendassumption',
  templateUrl: './sendassumption.component.html',
  styleUrls: ['./sendassumption.component.css']
})
export class SendAssumptionComponent implements OnInit {
  public targetPlayer: string = "";
  input: string;
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.getRandomplayer();
  }

  getRandomplayer() {
    this.apiService.getRandomPlayer().then((value) => {
      let player = value as PlayerModel;
      this.targetPlayer = player.playerName;
      this.input = "";
    })
  }

  send() {
    var assumption = new AssumptionModel();
    assumption.player = this.apiService.playerName;
    assumption.assumption = this.input;
    assumption.targetPlayerName = this.targetPlayer;

    this.apiService.makeAssumption(assumption);
    this.getRandomplayer();
  }

  goToGame() {
    this.router.navigateByUrl("/game")
  }
}
