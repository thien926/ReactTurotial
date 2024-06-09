namespace ReactAppFormBuilder.Server.Dtos
{
    public class UpdateTemplateDto
    {
        public List<ControlDto> controlUpdates { get; set; }
        public AnswerDto? answerUpdate { get; set; }
    }
}
