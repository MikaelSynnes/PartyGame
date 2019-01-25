import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { GameSession } from '../Models/Models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currentSession: GameSession;
  currentIndex: number=0;
  gameStarted: boolean = false;
  currentAssumption: string = "";
  currentAction: string = "Start!";
  constructor(private readonly apiService: ApiService,
    private router: Router) { }


  getAllAssumptions() {

    this.apiService.startGame().then((value: GameSession) => {
      this.currentSession = value;
      console.log(this.currentSession);
      this.gameStarted = true;
      this.currentAssumption = this.currentSession.assumptions[this.currentIndex].assumption;
      this.currentAction = "Update";
    });
  }

  goNextAssumption() {
    console.log("going next", this.currentIndex);
    if (this.currentSession.assumptions.length-1> this.currentIndex) {
      this.currentIndex++;
      this.currentAssumption = this.currentSession.assumptions[this.currentIndex].assumption;
    }
    else {
      this.currentIndex = 0;
      this.currentAssumption = this.currentSession.assumptions[this.currentIndex].assumption;
      console.log(this.currentAssumption);
    }
  }

  ngOnInit() {
  }

}
