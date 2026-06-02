using System;
using DataBase;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace BLL.Tests
{
    public static class ContextFactory
    {
        public static FitnessContext Create()
        {
            var connection = new SqliteConnection("Data Source=:memory:");

            connection.Open();

            var options = new DbContextOptionsBuilder<FitnessContext>()
                .UseSqlite(connection) 
                .Options;

            var context = new FitnessContext(options);

            context.Database.EnsureCreated();

            
            return context;
        }

        public static void Destroy(FitnessContext context)
        {
            context.Database.GetDbConnection().Close();
            context.Dispose();
        }
    }
}