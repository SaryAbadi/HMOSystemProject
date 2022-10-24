using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IDatabaseSettings
    {
        public string connectionString { get; set; }
        public string databaseName { get; set; }
        class DatabaseSettings : IDatabaseSettings
        {
            public string connectionString { get; set; }
            public string databaseName { get; set; }
        }
    }
}
