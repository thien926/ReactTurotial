﻿// <auto-generated />
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using ReactAppNetCore.Server.Repositories;

#nullable disable

namespace ReactAppFormBuilder.Server.Migrations
{
    [DbContext(typeof(FormBuilderDBContext))]
    [Migration("20240609200010_updateAnswerColumn")]
    partial class updateAnswerColumn
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ReactAppNetCore.Server.Entities.Answer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<JsonDocument>("answerData")
                        .IsRequired()
                        .HasColumnType("json")
                        .HasColumnName("answer_data");

                    b.Property<bool>("defaultFlag")
                        .HasColumnType("boolean")
                        .HasColumnName("defaul_flag");

                    b.Property<int>("templateId")
                        .HasColumnType("integer")
                        .HasColumnName("template_id");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("username");

                    b.HasKey("Id");

                    b.HasIndex("templateId");

                    b.ToTable("answer");
                });

            modelBuilder.Entity("ReactAppNetCore.Server.Entities.Control", b =>
                {
                    b.Property<int>("templateId")
                        .HasColumnType("integer")
                        .HasColumnName("template_id");

                    b.Property<int>("fieldNo")
                        .HasColumnType("integer")
                        .HasColumnName("field_no");

                    b.Property<JsonDocument>("taskData")
                        .IsRequired()
                        .HasColumnType("json")
                        .HasColumnName("task_data");

                    b.HasKey("templateId", "fieldNo");

                    b.ToTable("control");
                });

            modelBuilder.Entity("ReactAppNetCore.Server.Entities.Template", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("template");
                });

            modelBuilder.Entity("ReactAppNetCore.Server.Entities.Answer", b =>
                {
                    b.HasOne("ReactAppNetCore.Server.Entities.Template", "template")
                        .WithMany("answers")
                        .HasForeignKey("templateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("template");
                });

            modelBuilder.Entity("ReactAppNetCore.Server.Entities.Control", b =>
                {
                    b.HasOne("ReactAppNetCore.Server.Entities.Template", "template")
                        .WithMany("controls")
                        .HasForeignKey("templateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("template");
                });

            modelBuilder.Entity("ReactAppNetCore.Server.Entities.Template", b =>
                {
                    b.Navigation("answers");

                    b.Navigation("controls");
                });
#pragma warning restore 612, 618
        }
    }
}
