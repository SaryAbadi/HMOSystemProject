using System;
using System.Collections.Generic;
using AutoMapper;
using KupatHolim;
using MongoDB.Driver;
using ViewModel;
using DAL;
using AutoMapper.Execution;
using System.Linq;


namespace BLL
{
    public class MembersService
    {
        private readonly IMapper mapperConfig;
        private readonly IMongoCollection<Members> members;
        public MembersService(IMapper mapperConfig, IDatabaseSettings dataBaseSettings)
        {
            var client = new MongoClient(dataBaseSettings.connectionString);
            var database = client.GetDatabase(dataBaseSettings.databaseName);
            this.mapperConfig = mapperConfig;
            members = database.GetCollection<Members>(GetType().Name);

        }

        public List<Membersdto> GetMembers()
        {
            return mapperConfig.Map<List<Membersdto>>(members.Find(_ => true).ToList());
        }

        public Membersdto GetMemberById(string id)
        {
            return mapperConfig.Map<Membersdto>(members.Find(m => m.MemberId == id).ToList().FirstOrDefault());
        }

        public void AddMember(Membersdto member)
        {
            members.InsertOne(mapperConfig.Map<Members>(member));
        }

        public void UpdateMember(Membersdto member)
        {
            var a = mapperConfig.Map<Members>(member);

            members.ReplaceOne(t => t.MemberId == member.MemberId, a);
        }

        public void DeleteMember(string id)
        {
            members.DeleteOne(m => m.MemberId == id);
        }
    
    }
}
