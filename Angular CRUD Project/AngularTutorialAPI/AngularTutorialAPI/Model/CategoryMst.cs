using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTutorialAPI.Model
{
    public class CategoryMst
    {
        public int id { get; set; }
        public string catgory  { get; set; }
        public int isactive { get; set; }
        public int isdelete { get; set; }
    }
}
