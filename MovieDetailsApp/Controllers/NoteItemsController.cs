using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieDetailsApp.Models;

namespace MovieDetailsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteItemsController : ControllerBase
    {
        private readonly NoteContext _context;

        public NoteItemsController(NoteContext context)
        {
            _context = context;
        }

        // GET: api/NoteItems
        [HttpGet]
        public IEnumerable<NoteItem> GetNoteItems()
        {
            return _context.NoteItems;
        }

        // GET: api/NoteItems/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNoteItem([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var noteItem = await _context.NoteItems.FindAsync(id);

            if (noteItem == null)
            {
                return NotFound();
            }

            return Ok(noteItem);
        }

        // PUT: api/NoteItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNoteItem([FromRoute] long id, [FromBody] NoteItem noteItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != noteItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(noteItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoteItemExists(id))
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

        // POST: api/NoteItems
        [HttpPost]
        public async Task<IActionResult> PostNoteItem([FromBody] NoteItem noteItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.NoteItems.Add(noteItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNoteItem", new { id = noteItem.Id }, noteItem);
        }

        // DELETE: api/NoteItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNoteItem([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var noteItem = await _context.NoteItems.FindAsync(id);
            if (noteItem == null)
            {
                return NotFound();
            }

            _context.NoteItems.Remove(noteItem);
            await _context.SaveChangesAsync();

            return Ok(noteItem);
        }

        private bool NoteItemExists(long id)
        {
            return _context.NoteItems.Any(e => e.Id == id);
        }
    }
}