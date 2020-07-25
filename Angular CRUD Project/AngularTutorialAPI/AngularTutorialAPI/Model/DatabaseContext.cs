using AngularTutorialAPI.Model.CascadingDDL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTutorialAPI.Model
{
    public class DatabaseContext:DbContext
    {
        public DatabaseContext(DbContextOptions options): base(options)
        {

        }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<CategoryMst> Categories { get; set; }
        public DbSet<CountryMst> CountryMst { get; set; }
        public DbSet<StateMst> StateMst { get; set; }

    }
}
