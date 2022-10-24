using AutoMapper;
using KupatHolim;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViewModel;

namespace WebApi.Mapping
{
    public class AutoMappingConfig
    {
        public static MapperConfiguration RegisterMappings()
        {
            return new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapping());
            });
        }
    }
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<Members, Membersdto>();
            CreateMap<Membersdto, Members>();
            CreateMap<Vaccinations, VaccinationsDto>();
            CreateMap<VaccinationsDto, Vaccinations>();
        }  
    }
}

