using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartyGame.models
{
    public class GameSession
    {


        public GameSession(string sessionId)
        {
            SessionId=sessionId;
            Players=new List<PlayerModel>();
            Assumptions=new List<AssumptionModel>();
        }

        public List<PlayerModel> Players { get; set; }

        public List<AssumptionModel> Assumptions { get; set; }

        public string SessionId { get; set; }
    }
}
