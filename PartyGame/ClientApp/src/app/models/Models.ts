export class AssumptionModel {
  player: string;
  assumption: string;
  targetPlayerName: string;
  constructor() {

  }
}

export class PlayerModel {
  playerName: string;
  sessionId: string;
}

export class GameSession {
  sessionId: string;
  players:PlayerModel[];
  assumptions:AssumptionModel[];
}
