using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModel
{
    [BsonIgnoreExtraElements]

    public class VaccinationsDto
    {
        public DateTime DateVaccination { get; set; }
        public string Manufacturer { get; set; }
    }
}
  