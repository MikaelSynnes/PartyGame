export class AssumptionModel {
  constructor(player: string, assumption: string, targetPlayerName: string) {
    this.assumption = assumption;
    this.player = player;
    this.targetPlayerName = targetPlayerName;
  }
  player: string;
  assumption: string;
  targetPlayerName: string;
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
