using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartyGame.models
{
    public class PlayerModel
    {

        public PlayerModel(string session, string playerName)
        {
            Session=session;
            PlayerName=playerName;
        }

        public string PlayerName { get; set; }

        public string Session { get; set; }
    }
}
