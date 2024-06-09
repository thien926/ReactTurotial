using System.Text.Json;

namespace ReactAppFormBuilder.Server.Dtos
{
    public class ControlDto
    {
        public int templateId { get; set; }

        public int fieldNo { get; set; }

        public JsonDocument taskData { get; set; }
    }
}
