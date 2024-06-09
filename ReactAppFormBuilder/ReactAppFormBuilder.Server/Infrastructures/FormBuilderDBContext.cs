using Microsoft.EntityFrameworkCore;
using ReactAppNetCore.Server.Entities;

namespace ReactAppNetCore.Server.Repositories
{
    public class FormBuilderDBContext : DbContext
    {
        public FormBuilderDBContext(DbContextOptions<FormBuilderDBContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Control>()
                .HasKey(c => new { c.templateId, c.fieldNo });
            modelBuilder.Entity<Control>().Property(c => c.taskData).HasColumnType("json");

            modelBuilder.Entity<Answer>().Property(c => c.answerData).HasColumnType("json");

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Control> Controls { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Template> Templates { get; set; }
    }
}
