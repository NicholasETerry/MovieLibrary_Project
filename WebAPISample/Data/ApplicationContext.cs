using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
<<<<<<< HEAD
            modelBuilder.Entity<Movie>()
             .HasData(
                new Movie { MovieId = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese" },
                new Movie { MovieId = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan" },
                new Movie { MovieId = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan" },
                new Movie { MovieId = 4, Title = "Pineapple Express", Genre = "Comedy", Director = "David Gordon Green" },
                new Movie { MovieId = 5, Title = "Die Hard", Genre = "Action", Director = "John McTiernan" }
             );// Seed data - needs migration

=======
            // Seed data - needs migration
            modelBuilder.Entity<Movie>()
              .HasData(
                 new Movie { MovieId = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese" },
                 new Movie { MovieId = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan" },
                 new Movie { MovieId = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan" },
                 new Movie { MovieId = 4, Title = "Pineapple Express", Genre = "Comedy", Director = "David Gordon Green" },
                 new Movie { MovieId = 5, Title = "Die Hard", Genre = "Action", Director = "John McTiernan" }
              );
>>>>>>> d01f2e5f452e886808fecd14d0ee1a319c3d3f70
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
