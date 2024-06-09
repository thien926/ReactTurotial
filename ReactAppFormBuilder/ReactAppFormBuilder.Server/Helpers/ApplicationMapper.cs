using AutoMapper;
using ReactAppFormBuilder.Server.Dtos;
using ReactAppNetCore.Server.Entities;

namespace ReactAppFormBuilder.Server.Helpers
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper() 
        {
            CreateMap<Template, TemplateDto>().ReverseMap();
            CreateMap<Answer, AnswerDto>().ReverseMap();
            CreateMap<Control, ControlDto>().ReverseMap();
        }
    }
}
