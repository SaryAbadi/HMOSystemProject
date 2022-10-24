using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace KupatHolim
{
    public class Members
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
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
        public List<Vaccinations> Vaccinations { get; set; }



    }
}

