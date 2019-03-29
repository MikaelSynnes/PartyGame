import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { GameSession } from '../Models/Models';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private assumptionSource = new BehaviorSubject<string>("");
  assumption = this.assumptionSource.asObservable();
  currentSession: GameSession;
  currentIndex: number = 0;
  isLast: boolean = false;
  gameStarted: boolean = false;
  currentAssumption: string = "";
  currentAction: string = "Start!";
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  setCurrentAssumption(i: number) {
    this.isLast = ((i + 1) >= (this.currentSession.assumptions.length));
    if (i > this.currentSession.assumptions.length - 1) {
      this.assumptionSource.next(this.currentSession.assumptions[this.currentIndex].assumption);
      return;
    }
    if (i < 0) {
      this.assumptionSource.next(this.currentSession.assumptions[this.currentIndex].assumption);
      return;
    }
    this.currentIndex = i;
    this.assumptionSource.next(this.currentSession.assumptions[i].assumption);
  }

  finishGame() {
    this.router.navigateByUrl("/aftergame");
  }

  getAllAssumptions() {
    this.apiService.startGame().then((value: GameSession) => {
      this.currentSession = value;
      console.log(this.currentSession);
      this.gameStarted = true;
      this.setCurrentAssumption(this.currentIndex);
      this.currentAction = "Update";
    });
  }

  goPreviousAssumption() {
    this.setCurrentAssumption(this.currentIndex - 1);
  }

  goNextAssumption() {
    this.setCurrentAssumption(this.currentIndex + 1);
  }

  ngOnInit() {
    this.assumption.subscribe(assumption => {
      if (this.gameStarted)
        this.currentAssumption = assumption;
    });
  }
}
