using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class ApplicationDbContext : DbContext {
    
    public ApplicationDbContext() {

    }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) {

        }
    
    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresEnum("permissions", ["canEdit", "canShare", "canDelete"]);
        
        // modelBuilder.Entity<User>();
    }
}