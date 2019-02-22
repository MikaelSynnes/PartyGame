import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AssumptionModel, PlayerModel } from './models/models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  public gameId: string;
  public playerName: string;
  public baseUrl: string = "https://localhost:5001/";

  constructor(private readonly http: HttpClient,
    private router: Router) { }



  createGame(playerName: string) {
    if (this.gameId != null) {

      console.log("attempting to create game with player", playerName);
      this.playerName = playerName;
      const url = this.baseUrl + "creategame";
      console.log(url);
      var model = new PlayerModel();
      model.playerName = playerName;
      return this.http.post(url, model).toPromise();
    } else {
      this.router.navigateByUrl("/");
    }
  }
  addPlayer(gameId: string, playerName: string) {
    console.log("attempting to join game with player", playerName);
    this.playerName = playerName;
    const url = this.baseUrl + "addplayer/" + gameId;
    var model = new PlayerModel();
    model.playerName = playerName;
    return this.http.post(url, model).toPromise();
  }
  getRandomPlayer() {
    if (this.gameId != null) {
      const url = this.baseUrl + "getrandomplayer/" + this.gameId;
      return this.http.get(url).toPromise();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  finishGame() {
    if (this.gameId) {
      const url = this.baseUrl + "session/" + this.gameId;
      return this.http.get(url).toPromise();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  makeAssumption(assumption: AssumptionModel) {
    if (this.gameId != null) {
      const url = this.baseUrl + "sendassumption/" + this.gameId;
      return this.http.post(url, assumption).toPromise();
    } else {
      this.router.navigateByUrl("/");
    }
  }
  startGame() {
    if (this.gameId) {
      const url = this.baseUrl + "session/" + this.gameId;
      return this.http.get(url).toPromise();
    } else {
      this.router.navigateByUrl("/");
    }
  }

}
