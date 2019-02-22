using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using PartyGame.models;

namespace PartyGame.Controllers
{
    [Route("")]
    public class ApiController : Controller
    {
        private IMemoryCache _cache;
        MemoryCacheEntryOptions options = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromMinutes(30));
        public ApiController(IMemoryCache memoryCache)
        {
            _cache=memoryCache;
        }

        [HttpPost("creategame")]
        public ActionResult SetupGame([FromBody]PlayerModel player, string session = "")
        {
            string sessionId;
            if (session!=string.Empty)
                sessionId=session;
            else
                sessionId = Guid.NewGuid().ToString();
            GameSession newSession = new GameSession(sessionId);
            newSession.Players.Add(new PlayerModel(player.PlayerName));
            _cache.Set(sessionId, newSession, options);
            return Ok(newSession);
        }

        [HttpGet("session/{session}")]
        public ActionResult GetSession([FromRoute]string session)
        {
            GameSession currentSession = getSession(session);

            return Ok(currentSession);
        }

        [HttpPost("addplayer/{session}")]
        public ActionResult AddPlayer([FromRoute]string session, [FromBody]PlayerModel player)
        {
            GameSession currentSession = getSession(session);
            if (currentSession==null)
            { 
                SetupGame(player, session);
                currentSession=getSession(session);
            }
            currentSession.Players.Add(player);
            _cache.Set(session, currentSession, options);
            return Ok(currentSession);
        }

        [HttpGet("getrandomplayer/{session}")]
        public PlayerModel GetRandomPlayer([FromRoute]string session)
        {
            GameSession currentSession = getSession(session);
            int players = currentSession.Players.Count;
            Random rnd = new Random();
            PlayerModel player = currentSession.Players[rnd.Next(0, players)];
            return player;
        }

        [HttpPost("sendassumption/{session}")]
        public ActionResult SendAssumption([FromRoute]string session, [FromBody]AssumptionModel assumption)
        {
            GameSession currentSession = getSession(session);
            currentSession.Assumptions.Add(assumption);
            _cache.Set(session, currentSession, options);
            return Ok(currentSession);
        }

        [HttpGet("startgame/{session}")]
        public List<AssumptionModel> Startgame([FromRoute]string session)
        {
            GameSession currentSession = getSession(session);
            return currentSession.Assumptions;
        }

        [HttpGet("results/{session})")]
        public void Results()
        {
        }

        private GameSession getSession(string session)
        {
            GameSession currentSession = null;
            _cache.TryGetValue(session, out currentSession);
            return currentSession;
        }
    }
}
