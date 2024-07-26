using Backend.Context;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.DTO;

namespace Backend.Controllers
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
                List<Session> sessions = await _context.Session.ToListAsync();
                if (sessions.Count == 0) return NoContent();
                return Ok(sessions);
            } catch (Exception ex) {
                    return StatusCode(500, ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id) {
            try {
                Session? session = await _context.Session.FindAsync(id);
                if (session == null) return NotFound();
                return Ok(session);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Session created_session) {
            try {

                await _context.Session.AddAsync(created_session);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetById), new {id = created_session.Id}, created_session);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateById([FromRoute] Guid id, [FromBody] PatchSessionRequestDTO updated_session) {
            try {
                Session? session = await _context.Session.FindAsync(id);
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
        public async Task<IActionResult> DeleteById([FromRoute] Guid id) {
            try {
                Session? session = await _context.Session.FindAsync(id);
                if (session == null) {
                    return NotFound();
                }
                _context.Session.Remove(session);
                await _context.SaveChangesAsync();
                return Ok(session);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
