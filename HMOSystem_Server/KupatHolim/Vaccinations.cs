using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace KupatHolim
{
    [BsonIgnoreExtraElements]

    public class Vaccinations
    {
        public DateTime DateVaccination { get; set; }
        public string Manufacturer { get; set; }

    }
}
