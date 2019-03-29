import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(public readonly apiService: ApiService,
    private router: Router  ) { }
  startGame() {
    this.router.navigateByUrl("/makeassumptions");
  }
  ngOnInit() {
  }

}
