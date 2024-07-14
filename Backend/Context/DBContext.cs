using Backend.Models;
using Microsoft.EntityFrameworkCore;
namespace Backend.Context
{
    public class ApplicationDBContext : DbContext {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) {}
        public DbSet<Session> Sessions {get; set;}
    }
}