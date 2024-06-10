using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAppFormBuilder.Server.Dtos;
using ReactAppNetCore.Server.Entities;
using ReactAppNetCore.Server.Repositories;

namespace ReactAppFormBuilder.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TemplatesController : ControllerBase
    {
        private readonly FormBuilderDBContext _context;
        private readonly IMapper _mapper;

        public TemplatesController(FormBuilderDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Templates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TemplateDto>>> GetTemplates()
        {
            var res = await _context.Templates.ToListAsync();
            return _mapper.Map<List<TemplateDto>>(res);
        }

        // GET: api/Templates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TemplateDto>> GetTemplate(int id)
        {
            var template = await _context.Templates.FindAsync(id);

            if (template == null)
            {
                return NotFound();
            }

            return _mapper.Map<TemplateDto>(template);
        }

        // PUT: api/Templates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTemplate(int id, TemplateDto templateDto)
        {
            var template = _mapper.Map<TemplateDto>(templateDto);
            if (id != template.Id)
            {
                return BadRequest();
            }

            _context.Entry(template).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TemplateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Templates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TemplateDto>> PostTemplate(TemplateDto templateDto)
        {
            var template = _mapper.Map<Template>(templateDto);
            _context.Templates.Add(template);
            await _context.SaveChangesAsync();
            var res = _mapper.Map<TemplateDto>(template);

            return CreatedAtAction("GetTemplate", new { id = template.Id }, templateDto);
        }

        // DELETE: api/Templates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTemplate(int id)
        {
            var template = await _context.Templates.FindAsync(id);
            if (template == null)
            {
                return NotFound();
            }

            _context.Templates.Remove(template);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("[action]/{id?}")]
        public async Task<ActionResult> UpdateOrUpdateTemplate(int? id, [FromBody] List<ControlDto> itemsToUpdate)
        {
            int fieldNo = 0;
            int? templateId = id;
            if (templateId == null)
            {
                var template = new Template();
                template.name = "name";
                await _context.Templates.AddAsync(template);
                _context.SaveChanges();
                templateId = template.Id;
                foreach (var item in itemsToUpdate)
                {
                    var update = _mapper.Map<Control>(item);
                    update.templateId = template.Id;
                    update.fieldNo = ++fieldNo;
                    await _context.Controls.AddAsync(update);
                }
                _context.SaveChanges();
            }
            else
            {
                if (!TemplateExists((int)templateId))
                {
                    return NotFound();
                }

                var itemsToDelete = await _context.Controls.Where(i => i.templateId == templateId).ToListAsync();
                _context.Controls.RemoveRange(itemsToDelete);

                foreach (var item in itemsToUpdate)
                {
                    var update = _mapper.Map<Control>(item);
                    update.templateId = (int)templateId;
                    update.fieldNo = ++fieldNo;
                    await _context.Controls.AddAsync(update);
                }
                _context.SaveChanges();
            }
            return Ok(new { templateId });
        }

        private bool TemplateExists(int id)
        {
            return _context.Templates.Any(e => e.Id == id);
        }
    }
}
