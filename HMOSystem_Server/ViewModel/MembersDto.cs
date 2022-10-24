using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModel
{

    public class Membersdto
    {
        [BsonId]
        public string MemberId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Id { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int NumHouse { get; set; }
        public DateTime Birthday { get; set; }
        public string Telephone { get; set; }
        public string Pelephone { get; set; }
        public DateTime PositiveDate { get; set; }
        public DateTime RecoveryDate { get; set; }
        public List<VaccinationsDto> Vaccinations { get; set; }



    }
}
    

