﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTutorialAPI.Model.CascadingDDL
{
    public class StateMst
    {
        public int id { get; set; }
        public string stateName { get; set; }

        public CountryMst CountryMst { get; set; }
        public int CountryMstid { get; set; }
    }
}
