using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartyGame.models
{
    public class PlayerModel
    {

        public PlayerModel(string playerName)
        {
            PlayerName=playerName;
        }

        public string PlayerName { get; set; }
    }
}
