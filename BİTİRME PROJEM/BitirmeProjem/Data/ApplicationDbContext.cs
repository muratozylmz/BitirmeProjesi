// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;

namespace Dropshipping.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Burada veritabanı tablolarınızı tanımlayacaksınız
        // Örnek:
        // public DbSet<Product> Products { get; set; }
        
    }
}