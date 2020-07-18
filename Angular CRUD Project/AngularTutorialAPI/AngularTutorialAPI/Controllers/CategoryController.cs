using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularTutorialAPI.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTutorialAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public CategoryController(DatabaseContext context)
        {
            _context = context;
        }

        [Route("AddCategory")]
        [HttpPost]
        public ActionResult<CategoryMst> AddCategory(CategoryMst category)
        {
            if(category == null)
            {
                return StatusCode(415, "Invalid Category !!");
            }

            _context.Categories.Add(category);
            _context.SaveChanges();
            return Ok(category);
        }
        [Route("GetAllCategory")]
        [HttpGet]
        public ActionResult<List<CategoryMst>> GetAllCategory()
        {
            return Ok(_context.Categories.Where(a=> a.isdelete ==0).ToList());
        }

        [Route("GetAllCategoryForDDL")]
        [HttpGet]
        public ActionResult<List<CategoryMst>> GetAllCategoryForDDL()
        {
            return Ok(_context.Categories.Where(a => a.isdelete == 0 && a.isactive == 1).ToList());
        }

        [Route("GetCategoryById/{id}")]
        [HttpGet]
        public ActionResult<CategoryMst> GetCategoryById(int id)
        {
            var category = _context.Categories.FirstOrDefault(a => a.id == id && a.isdelete == 0);
            return Ok(category);
        }

        [Route("UpdataCategory")]
        [HttpPut]
        public ActionResult<CategoryMst> UpdataCategory(CategoryMst category)
        {
            var CategoryInDb = _context.Categories.FirstOrDefault(a => a.id == category.id && a.isdelete ==0);
            CategoryInDb.catgory = category.catgory;
            
            _context.SaveChanges();
            return Ok(category);
        }

        [Route("UpdateStatus/{id}")]
        [HttpGet]
        public ActionResult<CategoryMst> UpdateStatus(int id)
        {
            var CategoryInDb = _context.Categories.FirstOrDefault(a => a.id == id && a.isdelete == 0);

            CategoryInDb.isactive = CategoryInDb.isactive == 1 ? 0 : 1;
            //if(CategoryInDb.isactive == 1)
            //{
            //    CategoryInDb.isactive = 0;
            //}
            //else
            //{
            //    CategoryInDb.isactive = 1;
            //}

            _context.SaveChanges();
            return Ok(CategoryInDb);
        }
    }
}