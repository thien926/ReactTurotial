using System.Text.Json;

namespace ReactAppFormBuilder.Server.Dtos
{
    public class AnswerDto
    {
        public int? Id { get; set; }

        public int? templateId { get; set; }

        public string? username { get; set; }

        public JsonDocument answerData { get; set; }

        public Boolean? defaulFlag { get; set; }
    }
}
