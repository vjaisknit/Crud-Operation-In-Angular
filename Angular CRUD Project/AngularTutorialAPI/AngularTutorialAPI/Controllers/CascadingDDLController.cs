using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularTutorialAPI.Model;
using AngularTutorialAPI.Model.CascadingDDL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTutorialAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CascadingDDLController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;

        public CascadingDDLController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [Route("GetAllCountry")]
        [HttpGet]
       public ActionResult<List<CountryMst>> GetAllCountry()
        {
            var countryList = _databaseContext.CountryMst.ToList();

            return Ok(countryList);
            
        }

        [Route("GetStateById/{countryId}")]
        [HttpGet]
        public ActionResult<List<CountryMst>> GetStateById(int countryId)
        {
            var stateList = _databaseContext.StateMst.Where(a => a.CountryMstid == countryId)
                                            .Select(a=> new { a.id, a.stateName });

            return Ok(stateList);

        }
    }
}