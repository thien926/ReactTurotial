using System.Text.Json;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ReactAppFormBuilder.Server.Migrations
{
    /// <inheritdoc />
    public partial class Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "template",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_template", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "answer",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    template_id = table.Column<int>(type: "integer", nullable: false),
                    username = table.Column<string>(type: "text", nullable: false),
                    answer_data = table.Column<JsonDocument>(type: "json", nullable: false),
                    defaul_flag = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_answer", x => x.id);
                    table.ForeignKey(
                        name: "FK_answer_template_template_id",
                        column: x => x.template_id,
                        principalTable: "template",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "control",
                columns: table => new
                {
                    template_id = table.Column<int>(type: "integer", nullable: false),
                    field_no = table.Column<int>(type: "integer", nullable: false),
                    task_data = table.Column<JsonDocument>(type: "json", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_control", x => new { x.template_id, x.field_no });
                    table.ForeignKey(
                        name: "FK_control_template_template_id",
                        column: x => x.template_id,
                        principalTable: "template",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_answer_template_id",
                table: "answer",
                column: "template_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "answer");

            migrationBuilder.DropTable(
                name: "control");

            migrationBuilder.DropTable(
                name: "template");
        }
    }
}
