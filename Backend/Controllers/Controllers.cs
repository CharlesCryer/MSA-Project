using Azure;
using Backend.Context;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public SessionController(ApplicationDBContext context) {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll() {
            try {
                List<Session> sessions = await _context.Sessions.ToListAsync();
                if (sessions.Count == 0) return NoContent();
                return Ok(sessions);
            } catch (Exception ex) {
                    return StatusCode(500, ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id) {
            try {
                Session? session = await _context.Sessions.FindAsync(id);
                if (session == null) return NotFound();
                return Ok(session);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Session created_session) {
            try {
                await _context.Sessions.AddAsync(created_session);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetById), new {id = created_session.Id}, created_session);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateById([FromRoute] int id, [FromBody] JsonPatchDocument updated_session) {
            try {
                Session? session = await _context.Sessions.FindAsync(id);
                if (session == null) {
                    return NotFound();
                }
                _context.Entry(session).CurrentValues.SetValues(updated_session);
                await _context.SaveChangesAsync();
                return Ok(updated_session);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById([FromRoute] int id) {
            try {
                Session? session = await _context.Sessions.FindAsync(id);
                if (session == null) {
                    return NotFound();
                }
                _context.Sessions.Remove(session);
                await _context.SaveChangesAsync();
                return Ok(session);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
