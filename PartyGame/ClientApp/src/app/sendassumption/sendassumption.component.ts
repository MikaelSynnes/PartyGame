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
  input:string;
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.apiService.getRandomPlayer().then((value) => {
      let player = value as PlayerModel;
      this.targetPlayer = player.playerName;
    })
  }

  send() {
    this.apiService.makeAssumption(new AssumptionModel(this.apiService.playerName, this.input, this.targetPlayer));
    this.router.navigateByUrl("/game")
  }
}
